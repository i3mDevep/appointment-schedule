import { moderatorCreateApplication } from "./application/moderator-create";
import { DynamodbModeratorInfrastructure } from "./infrastructure/persistence/dynamodb-moderator-infrastructure";

const persistence = new DynamodbModeratorInfrastructure();

export const moderatorModule = {
  create: moderatorCreateApplication(persistence),
};
