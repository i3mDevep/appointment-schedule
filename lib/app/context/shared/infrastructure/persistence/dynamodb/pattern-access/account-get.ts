import { AccountId } from "../../../../domain/account/account-id";
import { AccountEntity } from "../entity/account-entity";
import { AccountFacet } from "../facet/account-facet";

export type accountGetType = {
  accountItem?: AccountFacet;
  existAccount: boolean;
};

export async function accountGet(
  accountId: AccountId
): Promise<accountGetType> {
  const response = await AccountEntity.get({ name: accountId.toString() });
  const accountItem = response.Item as AccountFacet;
  return { accountItem, existAccount: !!accountItem };
}
