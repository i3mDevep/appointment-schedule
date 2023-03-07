import { Entity } from "dynamodb-toolbox";
import { dateFormatterDatabase } from "../../../../utils/custom-date";
import { APPOINTMENT_KEYS } from "../keys/keys-table";
import { appointmentScheduleTable } from "../table/appointment-schedule-table";

const { ACCOUNT, DATE_MEETING, TIME_MEETING, APPOINTMENT, MODERATOR } =
  APPOINTMENT_KEYS;
interface ItemDependsOnAppointment {
  account: string;
  moderator: string;
  dateMeeting: string;
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
        `${ACCOUNT}#${account}`,
    },
    SK: {
      sortKey: true,
      hidden: true,
      dependsOn: ["account", "id"],
      default: ({ id }: ItemDependsOnAppointment) => `${APPOINTMENT}#${id}`,
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
      dependsOn: ["account", "dateMeeting"],
      default: ({ account, dateMeeting }: ItemDependsOnAppointment) =>
        `${ACCOUNT}#${account}#${DATE_MEETING}#${
          dateFormatterDatabase(new Date(dateMeeting)).date_
        }`,
    },
    GSI1SK: {
      hidden: true,
      dependsOn: ["moderator", "dateMeeting"],
      default: ({ moderator, dateMeeting }: ItemDependsOnAppointment) =>
        `${MODERATOR}#${moderator}#${TIME_MEETING}#${
          dateFormatterDatabase(new Date(dateMeeting)).time_
        }`,
    },
  },
  table: appointmentScheduleTable,
} as const);
