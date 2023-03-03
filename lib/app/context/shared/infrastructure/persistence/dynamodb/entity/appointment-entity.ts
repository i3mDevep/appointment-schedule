import { Entity } from "dynamodb-toolbox";
import { APPOINTMENT_KEYS } from "../keys/keys-table";
import { appointmentScheduleTable } from "../table/appointment-schedule-table";

interface ItemDependsOnAppointment {
  account: string;
  moderator: string;
  id: string;
}

export const AppointmentEntity = new Entity({
  name: "Appointment",
  attributes: {
    PK: {
      partitionKey: true,
      hidden: true,
      dependsOn: ["account"],
      default: ({ account }: ItemDependsOnAppointment) =>
        `${APPOINTMENT_KEYS.ACCOUNT}#${account}`,
    },
    SK: {
      sortKey: true,
      hidden: true,
      dependsOn: ["account", "id"],
      default: ({ id }: ItemDependsOnAppointment) =>
        `${APPOINTMENT_KEYS.APPOINTMENT}#${id}`,
    },
    id: { type: "string", required: true },
    account: { type: "string", required: true },
    moderator: { type: "string", required: true },
    status: { type: "string", required: true },
    dateMeeting: { type: "string", required: true },
    dateFinish: { type: "string", default: null },
    customer: { type: "map" },
    GSI1PK: {
      hidden: true,
      dependsOn: ["moderator"],
      default: ({ moderator }: ItemDependsOnAppointment) =>
        `${APPOINTMENT_KEYS.MODERATOR}#${moderator}`,
    },
    GSI1SK: {
      hidden: true,
      dependsOn: ["id"],
      default: ({ id }: ItemDependsOnAppointment) =>
        `${APPOINTMENT_KEYS.APPOINTMENT}#${id}`,
    },
  },
  table: appointmentScheduleTable,
} as const);
