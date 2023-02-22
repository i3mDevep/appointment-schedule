import { Account } from "./account.root";

export interface AccountRepository {
  create(account: Account): Promise<void>;
}
