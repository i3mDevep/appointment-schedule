import { appointmentModule } from ".";
import { AppointmentPrimitivesCreate } from "./domain/appointment.root";

const createAppointment: AppointmentPrimitivesCreate = {
  accountId: "vtex",
  customer: {
    email: "a",
    name: "a",
    nps: { comment: "hi", points: 3 },
    sessionId: "12",
  },
  moderator: "1",
  dateMeeting: new Date(),
};
describe("appointment-module with injection", () => {
  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date("2023-01-01"));
  });

  afterAll(() => {
    jest.clearAllTimers();
    jest.clearAllMocks();
  });
  test("should create the appointment", () => {
    appointmentModule
      .create({
        ...createAppointment,
      })
      .then(() => console.log("god"))
      .catch((e) => console.log(e));

    // const account = Account.create(accountFake);
    // expect(account.id.value).toBe(accountFake.name);
  });
});
