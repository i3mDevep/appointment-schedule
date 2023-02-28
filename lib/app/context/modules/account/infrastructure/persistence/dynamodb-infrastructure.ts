import { AccountId } from "../../../../shared/domain/account/account-id";
import { AccountEntity } from "../../../../shared/infrastructure/persistence/dynamodb/entity/account-entity";
import { AccountRepository } from "../../domain/account.repository";
import { Account, AccountProps } from "../../domain/account.root";

export class DynamodbAccountInfrastructure implements AccountRepository {
  async get(accountId: AccountId): Promise<Account> {
    const response = await AccountEntity.get({ name: accountId.value });
    return Account.toDomain(response.Item as AccountProps);
  }

  async create(account: Account): Promise<void> {
    await AccountEntity.put({ ...account.toDto() });
  }
}
