import { AccountId } from "../../../shared/domain/account/account-id";
import { AppointmentRepository } from "../domain/appointment.repository";

export function appointmentWithAccountApplication(op: AppointmentRepository) {
  return (accountId: string) => {
    return op.getAppointmentWithAccount(new AccountId(accountId));
  };
}
