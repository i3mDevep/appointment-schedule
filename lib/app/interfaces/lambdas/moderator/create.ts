import { APIGatewayProxyHandler } from "aws-lambda";
import { ModeratorPrimitives } from "../../../context/modules/moderator/domain/moderator.root";
import { moderatorModule } from "../../../context/modules/moderator/moderator-module";

export const handler: APIGatewayProxyHandler = async (event) => {
  if (!event.body) {
    throw new Error("no moderator supplied");
  }
  const item = JSON.parse(event.body) as ModeratorPrimitives;

  try {
    const account = await moderatorModule.create(item);
    return {
      body: JSON.stringify(account),
      statusCode: 201,
    };
  } catch (error) {
    return {
      body: (error as { message: string }).message,
      statusCode: 400,
    };
  }
};
