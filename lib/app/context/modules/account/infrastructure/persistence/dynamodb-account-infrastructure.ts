import { AccountId } from "../../../../shared/domain/account/account-id";
import { AccountNotExist } from "../../../../shared/domain/account/account-not-exist.error";
import { AccountEntity } from "../../../../shared/infrastructure/persistence/dynamodb/entity/account-entity";
import { accountGet } from "../../../../shared/infrastructure/persistence/dynamodb/pattern-access/account-get";
import { AccountRepository } from "../../domain/account.repository";
import { Account } from "../../domain/account.root";

export class DynamodbAccountInfrastructure implements AccountRepository {
  async get(accountId: AccountId): Promise<Account> {
    const { accountItem } = await accountGet(accountId);
    if (!accountItem) throw new AccountNotExist(accountId.toString());
    return Account.toDomain(accountItem);
  }

  async create(account: Account): Promise<void> {
    await AccountEntity.put({ ...account.toDto() });
  }
}
