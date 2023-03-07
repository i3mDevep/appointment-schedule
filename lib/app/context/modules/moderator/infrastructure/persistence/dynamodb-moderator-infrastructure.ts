import { AccountId } from "../../../../shared/domain/account/account-id";
import { ModeratorId } from "../../../../shared/domain/moderator/moderator-id";
import { ModeratorEntity } from "../../../../shared/infrastructure/persistence/dynamodb/entity/moderator-entity";
import { ModeratorRepository } from "../../domain/moderator.repository";
import { Moderator } from "../../domain/moderator.root";

export class DynamodbModeratorInfrastructure implements ModeratorRepository {
  get(accountId: AccountId, moderatorId: ModeratorId): Promise<Moderator> {
    throw new Error("Method not implemented.");
  }
  getWithAccount(accountId: AccountId): Promise<Moderator[]> {
    throw new Error("Method not implemented.");
  }

  async create(moderator: Moderator): Promise<void> {
    await ModeratorEntity.put({ ...moderator.toDto() });
  }
}
