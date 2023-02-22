import { ValueObject } from "../../../shared/domain/values-object/value-object";

export enum AppointmentStatusOptions {
  CREATED = "created",
  IN_MEETING = "in-meeting",
}

export class AppointmentStatus extends ValueObject {
  schema: {
    type: "object";
    properties: {
      value: { type: "string" };
    };
  };
}
