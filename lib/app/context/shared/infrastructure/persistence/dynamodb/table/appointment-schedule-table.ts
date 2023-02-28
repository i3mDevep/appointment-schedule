import { Table } from "dynamodb-toolbox";
import { DocumentClient } from "aws-sdk/clients/dynamodb";

const documentClient = new DocumentClient({
  region: "us-east-1",
  convertEmptyValues: false,
});

export const appointmentScheduleTable = new Table({
  name: "appointment-schedule-dev",
  partitionKey: "PK",
  sortKey: "SK",
  indexes: {
    GSI1: {
      partitionKey: "GSI1PK",
      sortKey: "GSI1SK",
    },
  },
  DocumentClient: documentClient,
});
