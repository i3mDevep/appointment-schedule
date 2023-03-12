import { AccountId } from "../../../shared/domain/account/account-id";
import { AppointmentId } from "../../../shared/domain/appointment/appointment-id";
import { ModeratorId } from "../../../shared/domain/moderator/moderator-id";
import { AppointmentAccountModel } from "./appointment-account.model";
import { AppointmentModeratorModel as ModeratorModel } from "./appointment-moderator.model";
import { Appointment } from "./appointment.root";

export interface AppointmentRepository {
  get(appointmentId: AppointmentId, accountId: AccountId): Promise<Appointment>;
  getAppointmentWithAccount(accountId: AccountId): Promise<Appointment[]>;
  getAccount(accountId: AccountId): Promise<AppointmentAccountModel>;
  getModerator(acc: AccountId, mod: ModeratorId): Promise<ModeratorModel>;
  create(props: Appointment): Promise<void>;
}
