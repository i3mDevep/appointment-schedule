import { AccountRepository } from "../domain/account.repository";
import { Account, AccountPrimitives } from "../domain/account.root";

export function accountCreateApplication(repository: AccountRepository) {
  return async (props: AccountPrimitives) => {
    const instance = Account.create(props);
    await repository.create(instance);
  };
}
