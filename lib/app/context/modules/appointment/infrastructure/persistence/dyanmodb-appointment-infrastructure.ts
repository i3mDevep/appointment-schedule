import { AccountId } from "../../../../shared/domain/account/account-id";
import { AppointmentEntity } from "../../../../shared/infrastructure/persistence/dynamodb/entity/appointment-entity";
import { accountGet } from "../../../../shared/infrastructure/persistence/dynamodb/query/account-get";
import { AppointmentAccountModel } from "../../domain/appointment-account.model";
import { AppointmentId } from "../../domain/appointment-id.vo";
import { AppointmentNotExist } from "../../domain/appointment-not-exist.error";
import { AppointmentRepository } from "../../domain/appointment.repository";
import { Appointment } from "../../domain/appointment.root";
import { appointmentAccountDto } from "./appointment-account.dto";

export class AppointmentDynamodb implements AppointmentRepository {
  async get(
    appointmentId: AppointmentId,
    accountId: AccountId
  ): Promise<Appointment> {
    const { Item: appointmentItem } = await AppointmentEntity.get({
      account: accountId.toString(),
      id: appointmentId.toString(),
    });
    console.log(
      "🚀 ~ file: dyanmodb-appointment-infrastructure.ts:20 ~ AppointmentDynamodb ~ appointmentItem:",
      appointmentItem
    );
    throw new AppointmentNotExist(appointmentId.toString());

    // if (!appointmentItem)
    //   throw new AppointmentNotExist(appointmentId.toString());

    // return Appointment.toDomain(
    //   appointmentAccountDto.getAppointmentDto(appointmentItem)
    // );
  }

  async getAccount(accountId: AccountId): Promise<AppointmentAccountModel> {
    const account = await accountGet(accountId);
    return appointmentAccountDto.getAccountDto(account);
  }

  async create(instance: Appointment): Promise<void> {
    await AppointmentEntity.put({
      ...instance.toDto(),
    });
  }
}
