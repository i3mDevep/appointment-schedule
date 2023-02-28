import { AccountId } from "../../../shared/domain/account/account-id";
import { AppointmentAccountModel } from "./appointment-account.model";
import { AppointmentId } from "./appointment-id.vo";
import { Appointment } from "./appointment.root";

export interface AppointmentRepository {
  get(appointmentId: AppointmentId, accountId: AccountId): Promise<Appointment>;
  create(props: Appointment): Promise<void>;
  getAccount(accountId: AccountId): Promise<AppointmentAccountModel>;
}
