import { Entity } from "dynamodb-toolbox";
import { appointmentScheduleTable } from "../table/appointment-schedule-table";

export enum ACCOUNT_KEY {
  ACCOUNT = "ACC",
}

export const AccountEntity = new Entity({
  name: "Account",
  attributes: {
    PK: {
      partitionKey: true,
      hidden: true,
      dependsOn: ["name"],
      default: ({ name }: { name: string }) => `${ACCOUNT_KEY.ACCOUNT}#${name}`,
    },
    SK: {
      sortKey: true,
      hidden: true,
      dependsOn: ["name"],
      default: ({ name }: { name: string }) => `${ACCOUNT_KEY.ACCOUNT}#${name}`,
    },
    name: { type: "string", required: true },
    active: { type: "boolean", default: true },
  },
  table: appointmentScheduleTable,
} as const);
