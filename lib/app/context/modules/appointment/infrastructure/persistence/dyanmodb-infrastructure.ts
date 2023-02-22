import { LocalPersistence } from "../../../../shared/infrastructure/persistence/local-infrastructure";
import { AppointmentRepository } from "../../domain/appointment.repository";
import { AppointmentProps } from "../../domain/appointment.root";

export class AppointmentDynamodb
  extends LocalPersistence<AppointmentProps>
  implements AppointmentRepository
{
  constructor() {
    super("appointment");
  }
}
