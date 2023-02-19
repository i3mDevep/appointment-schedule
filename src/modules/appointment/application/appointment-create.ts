import { AppointmentRepository } from "../domain/appointment.repository";
import { AppointmentPrimitivesCreate } from "../domain/appointment.root";

export function appointmentCreateApplication(
  repository: AppointmentRepository
) {
  return (props: AppointmentPrimitivesCreate) => repository.create(props);
}
