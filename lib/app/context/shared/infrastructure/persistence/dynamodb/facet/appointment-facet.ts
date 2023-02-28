import { AppointmentEntity } from "../entity/appointment-entity";

type AppointmentTypes = typeof AppointmentEntity["_typesOnly"];

export type AppointmentFacet = Omit<
  AppointmentTypes["_item"],
  "PK" | "SK" | "GSI1PK" | "GSI1SK"
>;
