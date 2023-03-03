/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { AppointmentFacet } from "../../../../shared/infrastructure/persistence/dynamodb/facet/appointment-facet";
import { accountGetType } from "../../../../shared/infrastructure/persistence/dynamodb/pattern-access/account-get";
import { AppointmentAccountModel } from "../../domain/appointment-account.model";
import { AppointmentPrimitives } from "../../domain/appointment.root";

export const appointmentInfraDto = {
  getAccountDto(data: accountGetType): AppointmentAccountModel {
    return {
      account: data.accountItem?.name as string,
      exist: !!data.accountItem?.active,
    };
  },

  getAppointmentDto(data: AppointmentFacet): AppointmentPrimitives {
    return {
      id: data.id,
      accountId: data.account,
      customer: data.customer,
      dateMeeting: data.dateMeeting,
      moderator: data.moderator,
      status: data.status,
      created: data.created,
      dateFinish: data?.dateFinish,
      modified: data?.modified,
    };
  },
};
