import * as apigw from "aws-cdk-lib/aws-apigateway";
import * as cdk from "aws-cdk-lib";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as nodeLambda from "aws-cdk-lib/aws-lambda-nodejs";
import * as path from "path";

import { Construct } from "constructs";

export interface StatelessStackProps extends cdk.StackProps {
  env: {
    account: string;
    region: string;
  };
  table: dynamodb.Table;
  stageName: string;
}

export class StatelessStack extends cdk.Stack {
  public readonly apiEndpointUrl: cdk.CfnOutput;
  public readonly healthCheckUrl: cdk.CfnOutput;
  private readonly appointmentApi: apigw.RestApi;

  constructor(scope: Construct, id: string, props: StatelessStackProps) {
    super(scope, id, props);

    const { table } = props;

    // create the rest api
    this.appointmentApi = new apigw.RestApi(this, "Api", {
      description: `Serverless Appointment Schedule API ${props.stageName}`,
      deploy: true,
      endpointTypes: [apigw.EndpointType.REGIONAL],
      cloudWatchRole: true,
      deployOptions: {
        stageName: props.stageName,
        loggingLevel: apigw.MethodLoggingLevel.INFO,
      },
    });

    // create the rest api resources
    const account: apigw.Resource =
      this.appointmentApi.root.addResource("account");

    // create the lambdas
    const createAccountLambda: nodeLambda.NodejsFunction =
      new nodeLambda.NodejsFunction(this, "CreateAccountLambda", {
        runtime: lambda.Runtime.NODEJS_16_X,
        entry: path.join(
          __dirname,
          "../",
          "interfaces/lambdas/account/create.ts"
        ),
        handler: "handler",
        bundling: {
          minify: true,
          externalModules: ["aws-sdk"],
        },
        environment: {
          TABLE_NAME: table.tableName,
        },
      });

    // hook up the lambda functions to the api
    account.addMethod("POST", new apigw.LambdaIntegration(createAccountLambda));

    // grant the relevant lambdas access to our dynamodb database
    table.grantReadWriteData(createAccountLambda);

    this.apiEndpointUrl = new cdk.CfnOutput(this, "ApiEndpointOutput", {
      value: this.appointmentApi.url,
      exportName: `api-endpoint-${props.stageName}`,
    });
  }
}
