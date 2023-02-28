import { accountCreateApplication } from "./application/account-create";
import { accountGetApplication } from "./application/account-get";
import { DynamodbAccountInfrastructure } from "./infrastructure/persistence/dynamodb-account-infrastructure";

const persistence = new DynamodbAccountInfrastructure();

export const accountModule = {
  create: accountCreateApplication(persistence),
  get: accountGetApplication(persistence),
};
