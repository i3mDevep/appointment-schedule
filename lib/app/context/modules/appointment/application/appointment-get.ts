import { AccountId } from "../../../shared/domain/account/account-id";
import { AppointmentId } from "../domain/appointment-id.vo";
import { AppointmentRepository } from "../domain/appointment.repository";

export function appointmentGetApplication(repository: AppointmentRepository) {
  return async (appointmentId: string, accountId: string) => {
    return repository.get(
      new AppointmentId(appointmentId),
      new AccountId(accountId)
    );
  };
}
