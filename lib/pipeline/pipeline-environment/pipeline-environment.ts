import {
  Account,
  EnvironmentConfig,
  Region,
  Stage,
} from "../pipeline-types/pipeline-types";

export const environments: Record<Stage, EnvironmentConfig> = {
  [Stage.develop]: {
    env: {
      account:
        process.env.ACCOUNT || (process.env.CDK_DEFAULT_ACCOUNT as string),
      region: process.env.REGION || (process.env.CDK_DEFAULT_REGION as string),
    },
    stateful: {
      tableScheduleName: "appointment-schedule-dev",
    },
    stageName: process.env.PR_NUMBER || Stage.develop,
  },
  [Stage.featureDev]: {
    env: {
      account: Account.featureDev,
      region: Region.dublin,
    },
    stateful: {
      tableScheduleName: "appointment-schedule-featureDev",
    },
    stageName: Stage.featureDev,
  },
  [Stage.staging]: {
    env: {
      account: Account.staging,
      region: Region.dublin,
    },
    stateful: {
      tableScheduleName: "appointment-schedule-featureDev",
    },

    stageName: Stage.staging,
  },
  [Stage.prod]: {
    env: {
      account: Account.prod,
      region: Region.dublin,
    },
    stateful: {
      tableScheduleName: "appointment-schedule-featureDev",
    },
    stageName: Stage.prod,
  },
};
