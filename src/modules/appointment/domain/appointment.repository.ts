import { Appointment, AppointmentPrimitivesCreate } from "./appointment.root";

export interface AppointmentRepository {
  create(props: AppointmentPrimitivesCreate): Promise<void>;
  findByAccount(account: string): Promise<Appointment[]>;
}
