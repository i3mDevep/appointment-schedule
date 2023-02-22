import * as cdk from "aws-cdk-lib";

import { Construct } from "constructs";
import { EnvironmentConfig } from "../pipeline-types/pipeline-types";
import { StatefulStack } from "../../app/stateful/stateful-stack";

export class PipelineStage extends cdk.Stage {
  public readonly apiEndpointUrl: cdk.CfnOutput;
  public readonly healthCheckUrl: cdk.CfnOutput;

  constructor(scope: Construct, id: string, props: EnvironmentConfig) {
    super(scope, id, props);

    new StatefulStack(this, "StatefulStack", {
      tableScheduleName: props.stateful.tableScheduleName,
    });
  }
}
