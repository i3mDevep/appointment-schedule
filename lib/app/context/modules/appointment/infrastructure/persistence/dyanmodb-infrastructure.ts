import { AppointmentRepository } from "../../domain/appointment.repository";
import { Appointment } from "../../domain/appointment.root";

export class AppointmentDynamodb implements AppointmentRepository {
  async create(instance: Appointment): Promise<void> {
    // await Account.get({ name: "active" });
  }
  findByAccount(account: string): Promise<Appointment[]> {
    throw new Error("Method not implemented.");
  }
}
