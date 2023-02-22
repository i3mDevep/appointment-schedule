import { Appointment } from "./appointment.root";

export interface AppointmentRepository {
  create(props: Appointment): Promise<void>;
  findByAccount(account: string): Promise<Appointment[]>;
}
