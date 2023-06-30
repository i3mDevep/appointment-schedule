import { APIGatewayProxyHandler } from "aws-lambda";
import { accountModule } from "../../../context/modules/account/account-module";

export const handler: APIGatewayProxyHandler = async (event) => {
  if (!event.body) {
    throw new Error("no account supplied");
  }
  const { name } = JSON.parse(event.body) as { name: string };
  const account = await accountModule.create({ name, active: true });
  return {
    body: JSON.stringify(account),
    statusCode: 201,
  };
};
