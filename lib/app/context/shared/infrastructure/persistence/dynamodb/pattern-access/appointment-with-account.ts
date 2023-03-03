import { AccountId } from "../../../../domain/account/account-id";
import { AppointmentEntity } from "../entity/appointment-entity";
import { AppointmentFacet } from "../facet/appointment-facet";
import { APPOINTMENT_KEYS } from "../keys/keys-table";

export async function appointmentWithAccount(accountId: AccountId) {
  const response = await AppointmentEntity.query(
    `${APPOINTMENT_KEYS.ACCOUNT}#${accountId.toString()}`,
    {
      beginsWith: `${APPOINTMENT_KEYS.APPOINTMENT}#`,
    }
  );
  const appointments = (response.Items ?? []) as AppointmentFacet[];

  return { ...response, appointments };
}
