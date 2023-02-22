import * as cdk from "aws-cdk-lib";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";

import { Construct } from "constructs";
import { RemovalPolicy } from "aws-cdk-lib";

export interface StatefulStackProps extends cdk.StackProps {
  tableScheduleName: string;
}

export class StatefulStack extends cdk.Stack {
  public readonly tableAppointmentSchedule: dynamodb.Table;

  constructor(scope: Construct, id: string, props: StatefulStackProps) {
    super(scope, id, props);

    // create the dynamodb table of appointment
    this.tableAppointmentSchedule = new dynamodb.Table(
      this,
      "TableAppointmentSchedule",
      {
        tableName: props.tableScheduleName,
        billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
        encryption: dynamodb.TableEncryption.AWS_MANAGED,
        pointInTimeRecovery: false,
        contributorInsightsEnabled: true,
        removalPolicy: RemovalPolicy.DESTROY,
        partitionKey: {
          name: "PK",
          type: dynamodb.AttributeType.STRING,
        },
        sortKey: {
          name: "SK",
          type: dynamodb.AttributeType.STRING,
        },
      }
    );

    // add global index GSI1
    this.tableAppointmentSchedule.addGlobalSecondaryIndex({
      indexName: "GSI1",
      partitionKey: {
        name: "GSI1PK",
        type: dynamodb.AttributeType.STRING,
      },
      sortKey: {
        name: "GSI1SK",
        type: dynamodb.AttributeType.STRING,
      },
    });
  }
}
