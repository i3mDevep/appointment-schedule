import { Entity } from "dynamodb-toolbox";
import { APPOINTMENT_KEYS } from "../keys/keys-table";
import { appointmentScheduleTable } from "../table/appointment-schedule-table";

interface ItemDependsOnAccount {
  name: string;
}

export const AccountEntity = new Entity({
  name: "Account",
  attributes: {
    PK: {
      partitionKey: true,
      hidden: true,
      dependsOn: ["name"],
      default: ({ name }: ItemDependsOnAccount) =>
        `${APPOINTMENT_KEYS.ACCOUNT}#${name}`,
    },
    SK: {
      sortKey: true,
      hidden: true,
      dependsOn: ["name"],
      default: ({ name }: ItemDependsOnAccount) =>
        `${APPOINTMENT_KEYS.ACCOUNT}#${name}`,
    },
    name: { type: "string", required: true },
    active: { type: "boolean", default: true },
  },
  table: appointmentScheduleTable,
} as const);
