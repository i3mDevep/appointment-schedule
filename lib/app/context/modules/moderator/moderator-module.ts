import { moderatorCreateApplication } from "./application/moderator-create";
import { moderatorGetApplication } from "./application/moderator-get";
import { moderatorWithAccountApplication } from "./application/moderator-with-account";
import { DynamodbModeratorInfrastructure } from "./infrastructure/persistence/dynamodb-moderator-infrastructure";

const persistence = new DynamodbModeratorInfrastructure();

export const moderatorModule = {
  create: moderatorCreateApplication(persistence),
  get: moderatorGetApplication(persistence),
  getWithAccount: moderatorWithAccountApplication(persistence),
};
