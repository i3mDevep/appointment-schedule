import { AccountId } from "../../../../shared/domain/account/account-id";
import { AppointmentId } from "../../../../shared/domain/appointment/appointment-id";
import { AppointmentNotExist } from "../../../../shared/domain/appointment/appointment-not-exist.error";
import { ModeratorId } from "../../../../shared/domain/moderator/moderator-id";
import { AppointmentEntity } from "../../../../shared/infrastructure/persistence/dynamodb/entity/appointment-entity";
import { accountGet } from "../../../../shared/infrastructure/persistence/dynamodb/pattern-access/account-get";
import { appointmentGet } from "../../../../shared/infrastructure/persistence/dynamodb/pattern-access/appointment-get";
import { appointmentWithAccount } from "../../../../shared/infrastructure/persistence/dynamodb/pattern-access/appointment-with-account";
import { moderatorGet } from "../../../../shared/infrastructure/persistence/dynamodb/pattern-access/moderator-get";
import { AppointmentAccountModel } from "../../domain/appointment-account.model";
import { AppointmentModeratorModel } from "../../domain/appointment-moderator.model";
import { AppointmentRepository } from "../../domain/appointment.repository";
import { Appointment } from "../../domain/appointment.root";
import { appointmentInfraDto } from "./appointment.dto";

export class AppointmentDynamodb implements AppointmentRepository {
  async getAppointmentWithAccount(
    accountId: AccountId
  ): Promise<Appointment[]> {
    const { appointments } = await appointmentWithAccount(accountId);
    return appointments.map((item) =>
      Appointment.toDomain(appointmentInfraDto.getAppointmentDto(item))
    );
  }

  async get(
    appointmentId: AppointmentId,
    accountId: AccountId
  ): Promise<Appointment> {
    return Appointment.toDomain(
      appointmentInfraDto.getAppointmentDto(
        await this.getExistAppointment(appointmentId, accountId)
      )
    );
  }

  async create(instance: Appointment): Promise<void> {
    await AppointmentEntity.put({
      ...instance.toDto(),
    });
  }

  async getAccount(accountId: AccountId): Promise<AppointmentAccountModel> {
    return appointmentInfraDto.getAccountDto(await accountGet(accountId));
  }

  async getModerator(
    acc: AccountId,
    mod: ModeratorId
  ): Promise<AppointmentModeratorModel> {
    const { existModerator } = await moderatorGet(mod, acc);
    return { exist: existModerator };
  }

  private async getExistAppointment(
    appointmentId: AppointmentId,
    accountId: AccountId
  ) {
    const { appointmentItem } = await appointmentGet(appointmentId, accountId);

    if (!appointmentItem)
      throw new AppointmentNotExist(appointmentId.toString());

    return appointmentItem;
  }
}
