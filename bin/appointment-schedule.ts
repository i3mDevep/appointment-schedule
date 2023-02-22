#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { PipelineStage } from "../lib/pipeline/pipeline-stage/pipeline-stage";
import { environments } from "../lib/pipeline/pipeline-environment/pipeline-environment";

const app = new cdk.App();

new PipelineStage(app, "AppointmentSchedule", {
  ...environments.develop,
});

app.synth();
