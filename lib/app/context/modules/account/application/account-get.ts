import { AccountId } from "../../../shared/domain/account/account-id";
import { AccountRepository } from "../domain/account.repository";

export function accountGetApplication(repository: AccountRepository) {
  return async (accountId: string) => {
    return repository.get(new AccountId(accountId));
  };
}
