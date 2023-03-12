import { AccountId } from "../../../../domain/account/account-id";
import { ModeratorEntity } from "../entity/moderator-entity";
import { ModeratorFacet } from "../facet/moderator-facet";
import { APPOINTMENT_KEYS } from "../keys/keys-table";

export async function moderatorWithAccount(accountId: AccountId) {
  const response = await ModeratorEntity.query(
    `${APPOINTMENT_KEYS.ACCOUNT}#${accountId.toString()}`,
    {
      beginsWith: `${APPOINTMENT_KEYS.MODERATOR}#`,
    }
  );
  const moderators = (response.Items ?? []) as ModeratorFacet[];

  return { ...response, moderators };
}
