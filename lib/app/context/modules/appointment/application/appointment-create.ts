import { AccountId } from "../../../shared/domain/account/account-id";
import { AccountNotExist } from "../../../shared/domain/account/account-not-exist.error";
import { ModeratorId } from "../../../shared/domain/moderator/moderator-id";
import { ModeratorNotExist } from "../../../shared/domain/moderator/moderator-not-exist.error";
import { AppointmentRepository } from "../domain/appointment.repository";
import {
  Appointment,
  AppointmentPrimitivesCreate,
} from "../domain/appointment.root";

export function appointmentCreateApplication(op: AppointmentRepository) {
  return async (props: AppointmentPrimitivesCreate) => {
    const instance = Appointment.create(props);

    const accountId = new AccountId(props.accountId);
    const moderatorId = new ModeratorId(props.moderator);

    const { exist: existAccount } = await op.getAccount(accountId);

    const { exist: existModerator } = await op.getModerator(
      accountId,
      moderatorId
    );

    if (!existAccount) throw new AccountNotExist(props.accountId);
    if (!existModerator)
      throw new ModeratorNotExist(props.moderator, props.accountId);

    await op.create(instance);

    return instance;
  };
}
