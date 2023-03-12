import { AccountId } from "../../../../shared/domain/account/account-id";
import { ModeratorId } from "../../../../shared/domain/moderator/moderator-id";
import { ModeratorEntity } from "../../../../shared/infrastructure/persistence/dynamodb/entity/moderator-entity";
import { moderatorGet } from "../../../../shared/infrastructure/persistence/dynamodb/pattern-access/moderator-get";
import { moderatorWithAccount } from "../../../../shared/infrastructure/persistence/dynamodb/pattern-access/moderator-with-account";
import { ModeratorNotExist } from "../../../../shared/domain/moderator/moderator-not-exist.error";
import { ModeratorRepository } from "../../domain/moderator.repository";
import { Moderator } from "../../domain/moderator.root";
import { dtoDataToPrimitives } from "./moderator.dto";

export class DynamodbModeratorInfrastructure implements ModeratorRepository {
  async get(
    accountId: AccountId,
    moderatorId: ModeratorId
  ): Promise<Moderator> {
    return Moderator.toDomain(
      dtoDataToPrimitives(await this.getExistModerator(accountId, moderatorId))
    );
  }

  async getModeratorWithAccount(accountId: AccountId): Promise<Moderator[]> {
    return (await moderatorWithAccount(accountId)).moderators.map((m) =>
      Moderator.toDomain(dtoDataToPrimitives(m))
    );
  }

  async create(moderator: Moderator): Promise<void> {
    await ModeratorEntity.put({ ...moderator.toDto() });
  }

  private async getExistModerator(
    accountId: AccountId,
    moderatorId: ModeratorId
  ) {
    const { moderatorItem } = await moderatorGet(moderatorId, accountId);

    if (!moderatorItem)
      throw new ModeratorNotExist(moderatorId.toString(), accountId.toString());

    return moderatorItem;
  }
}
