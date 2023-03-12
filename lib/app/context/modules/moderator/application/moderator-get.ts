import { AccountId } from "../../../shared/domain/account/account-id";
import { ModeratorId } from "../../../shared/domain/moderator/moderator-id";
import { ModeratorRepository } from "../domain/moderator.repository";

export function moderatorGetApplication(op: ModeratorRepository) {
  return (moderatorId: string, accountId: string) => {
    return op.get(new AccountId(accountId), new ModeratorId(moderatorId));
  };
}
