import { AccountId } from "../../../shared/domain/account/account-id";
import { Account } from "./account.root";

export interface AccountRepository {
  create(account: Account): Promise<void>;
  get(accountId: AccountId): Promise<Account>;
}
