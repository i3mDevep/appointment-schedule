import { AppointmentRepository } from "../domain/appointment.repository";
import {
  Appointment,
  AppointmentPrimitivesCreate,
} from "../domain/appointment.root";

export function appointmentCreateApplication(
  repository: AppointmentRepository
) {
  return async (props: AppointmentPrimitivesCreate) => {
    const instance = Appointment.create(props);
    await repository.create(instance);
  };
}
