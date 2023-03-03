import { AccountId } from "../../../../domain/account/account-id";
import { AppointmentId } from "../../../../domain/appointment/appointment-id";
import { AppointmentEntity } from "../entity/appointment-entity";
import { AppointmentFacet } from "../facet/appointment-facet";

export type appointmentGetType = {
  appointmentItem: AppointmentFacet;
  existAppointment: boolean;
};

export async function appointmentGet(
  appointmentId: AppointmentId,
  accountId: AccountId
): Promise<appointmentGetType> {
  const response = await AppointmentEntity.get({
    account: accountId.toString(),
    id: appointmentId.toString(),
  });
  const appointmentItem = response.Item as AppointmentFacet;
  return { appointmentItem, existAppointment: !!appointmentItem };
}
