import { APIGatewayProxyHandler } from "aws-lambda";
import { appointmentModule } from "../../../context/modules/appointment/appointment-module";
import { AppointmentPrimitives } from "../../../context/modules/appointment/domain/appointment.root";

export const handler: APIGatewayProxyHandler = async (event) => {
  if (!event.body) {
    throw new Error("no appointment supplied");
  }
  const item = JSON.parse(event.body) as AppointmentPrimitives;

  try {
    const account = await appointmentModule.create(item);
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
