import { appointmentCreateApplication } from "./application/appointment-create";
import { appointmentDynamodb } from "./infrastructure/persistence/dyanmodb-infrastructure";

const persistence = appointmentDynamodb();

export const appointmentModule = {
  create: appointmentCreateApplication(persistence),
};

appointmentModule
  .create({
    accountId: "livestreamigndemo",
    customer: {
      email: "a",
      name: "a",
      nps: { comment: "hi", points: 3 },
      sessionId: "12",
    },
    moderator: "1",
    dateMeeting: new Date(),
  })
  .then(() => console.log("god"))
  .catch((e) => console.log(e));
