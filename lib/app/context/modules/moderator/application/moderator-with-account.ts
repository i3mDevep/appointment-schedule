import { AccountId } from "../../../shared/domain/account/account-id";
import { ModeratorRepository } from "../domain/moderator.repository";

export function moderatorWithAccountApplication(op: ModeratorRepository) {
  return (accountId: string) => {
    return op.getModeratorWithAccount(new AccountId(accountId));
  };
}
