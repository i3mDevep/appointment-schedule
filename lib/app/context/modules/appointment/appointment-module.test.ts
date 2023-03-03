import { appointmentModule } from "./appointment-module";
import { AppointmentPrimitivesCreate } from "./domain/appointment.root";

const createAppointment: AppointmentPrimitivesCreate = {
  accountId: "exito",
  customer: {
    email: "mayxool.11@gmail.com",
    name: "Jeslyn Atehortua",
    nps: { comment: "hi", points: 3 },
    sessionId: "12",
  },
  moderator: "1",
  dateMeeting: new Date().toISOString(),
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
      .then((appointment) => expect(!!appointment.id).toBeTruthy())
      .catch((e) => console.log(e));

    // const account = Account.create(accountFake);
    // expect(account.id.value).toBe(accountFake.name);
  });

  test("should to get the appointment pass", () => {
    appointmentModule
      .get("01GTCW6C1V5CBXXHPQ0ZSCZR3M", "exito")
      .then((appointment) => console.log(appointment))
      .catch(() => null);
  });

  test("should to get the appointments with account", () => {
    appointmentModule
      .getWithAccount("exito")
      .then((appointment) => console.log(appointment))
      .catch(() => null);
  });

  // test("should get account created", () => {

  // })
});
