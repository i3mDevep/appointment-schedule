import { AccountId } from "../../../shared/domain/account/account-id";
import { AppointmentId } from "../../../shared/domain/appointment/appointment-id";
import { AppointmentRepository } from "../domain/appointment.repository";

export function appointmentGetApplication(op: AppointmentRepository) {
  return (appointmentId: string, accountId: string) => {
    return op.get(new AppointmentId(appointmentId), new AccountId(accountId));
  };
}
