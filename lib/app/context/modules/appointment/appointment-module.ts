import { appointmentCreateApplication } from "./application/appointment-create";
import { appointmentGetApplication } from "./application/appointment-get";
import { appointmentWithAccountApplication } from "./application/appointment-with-account";
import { AppointmentDynamodb } from "./infrastructure/persistence/dyanmodb-appointment.infrastructure";

const persistence = new AppointmentDynamodb();

export const appointmentModule = {
  get: appointmentGetApplication(persistence),
  create: appointmentCreateApplication(persistence),
  getWithAccount: appointmentWithAccountApplication(persistence),
};
