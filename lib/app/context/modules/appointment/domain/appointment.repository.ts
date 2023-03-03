import { AccountId } from "../../../shared/domain/account/account-id";
import { AppointmentId } from "../../../shared/domain/appointment/appointment-id";
import { AppointmentAccountModel } from "./appointment-account.model";
import { Appointment } from "./appointment.root";

export interface AppointmentRepository {
  get(appointmentId: AppointmentId, accountId: AccountId): Promise<Appointment>;
  getAppointmentWithAccount(accountId: AccountId): Promise<Appointment[]>;
  getAccount(accountId: AccountId): Promise<AppointmentAccountModel>;
  create(props: Appointment): Promise<void>;
}
