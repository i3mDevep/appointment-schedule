import * as cdk from "aws-cdk-lib";

import { Construct } from "constructs";
import { EnvironmentConfig } from "../pipeline-types/pipeline-types";
import { StatefulStack } from "../../app/stateful/stateful-stack";
import { StatelessStack } from "../../app/stateless/stateless-stack";

export class PipelineStage extends cdk.Stage {
  public readonly apiEndpointUrl: cdk.CfnOutput;

  constructor(scope: Construct, id: string, props: EnvironmentConfig) {
    super(scope, id, props);

    const { tableAppointmentSchedule } = new StatefulStack(
      this,
      "StatefulStack",
      {
        tableScheduleName: props.stateful.tableScheduleName,
      }
    );

    const statelessStack = new StatelessStack(this, "StatelessStack", {
      env: {
        account: props.env.account,
        region: props.env.region,
      },
      stageName: props.stageName,
      table: tableAppointmentSchedule,
    });

    this.apiEndpointUrl = statelessStack.apiEndpointUrl;
  }
}
