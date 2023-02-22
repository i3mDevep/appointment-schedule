import { appointmentCreateApplication } from "./application/appointment-create";
import { AppointmentDynamodb } from "./infrastructure/persistence/dyanmodb-infrastructure";

const persistence = new AppointmentDynamodb();

export const appointmentModule = {
  create: appointmentCreateApplication(persistence),
};
