import { AccountId } from "../../../shared/domain/account/account-id";
import { AccountNotExist } from "../../../shared/domain/account/account-not-exist.error";
import { AppointmentRepository } from "../domain/appointment.repository";
import {
  Appointment,
  AppointmentPrimitivesCreate,
} from "../domain/appointment.root";

export function appointmentCreateApplication(op: AppointmentRepository) {
  return async (props: AppointmentPrimitivesCreate) => {
    const instance = Appointment.create(props);
    const { exist } = await op.getAccount(new AccountId(props.accountId));
    if (!exist) throw new AccountNotExist(props.accountId);
    await op.create(instance);
    return instance;
  };
}
