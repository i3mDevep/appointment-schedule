import { AccountId } from "../../../../domain/account/account-id";
import { ModeratorId } from "../../../../domain/moderator/moderator-id";
import { ModeratorEntity } from "../entity/moderator-entity";
import { ModeratorFacet } from "../facet/moderator-facet";

export type moderatorGetType = {
  moderatorItem?: ModeratorFacet;
  existModerator: boolean;
};

export async function moderatorGet(
  moderatorId: ModeratorId,
  accountId: AccountId
): Promise<moderatorGetType> {
  const response = await ModeratorEntity.get({
    account: accountId.toString(),
    id: moderatorId.toString(),
  });
  const moderatorItem = response.Item as ModeratorFacet;
  return { moderatorItem, existModerator: !!moderatorItem };
}
