import { AccountRepository } from "../domain/account.repository";
import { Account, AccountProps } from "../domain/account.root";

export function accountCreateApplication(repository: AccountRepository) {
  return async (props: AccountProps) => {
    const instance = Account.create(props);
    await repository.create(instance);
    return instance;
  };
}
