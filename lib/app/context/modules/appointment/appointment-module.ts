import { appointmentCreateApplication } from "./application/appointment-create";
import { appointmentGetApplication } from "./application/appointment-get";
import { AppointmentDynamodb } from "./infrastructure/persistence/dyanmodb-appointment-infrastructure";

const persistence = new AppointmentDynamodb();

export const appointmentModule = {
  create: appointmentCreateApplication(persistence),
  get: appointmentGetApplication(persistence),
};
