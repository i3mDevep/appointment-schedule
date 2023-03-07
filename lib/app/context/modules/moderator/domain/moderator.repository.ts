import { AccountId } from "../../../shared/domain/account/account-id";
import { ModeratorId } from "../../../shared/domain/moderator/moderator-id";
import { Moderator } from "./moderator.root";

export interface ModeratorRepository {
  create(moderator: Moderator): Promise<void>;
  get(accountId: AccountId, moderatorId: ModeratorId): Promise<Moderator>;
  getWithAccount(accountId: AccountId): Promise<Moderator[]>;
}
