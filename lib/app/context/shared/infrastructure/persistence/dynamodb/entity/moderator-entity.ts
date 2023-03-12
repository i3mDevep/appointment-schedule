import { Entity } from "dynamodb-toolbox";
import { APPOINTMENT_KEYS } from "../keys/keys-table";
import { appointmentScheduleTable } from "../table/appointment-schedule-table";

interface ItemDependsOnModerator {
  id: string;
  account: string;
}

export const ModeratorEntity = new Entity({
  name: "Moderator",
  attributes: {
    PK: {
      partitionKey: true,
      hidden: true,
      dependsOn: ["account"],
      default: ({ account }: ItemDependsOnModerator) =>
        `${APPOINTMENT_KEYS.ACCOUNT}#${account}`,
    },
    SK: {
      sortKey: true,
      hidden: true,
      dependsOn: ["id"],
      default: ({ id }: ItemDependsOnModerator) =>
        `${APPOINTMENT_KEYS.MODERATOR}#${id}`,
    },
    id: { type: "string", required: true },
    account: { type: "string", required: true },
    name: { type: "string", required: true },
    email: { type: "string", required: true },
    phone: { type: "string", required: true },
    schedules: { type: "list", default: [], required: true },
    specialties: { type: "string", required: true },
  },
  table: appointmentScheduleTable,
} as const);
