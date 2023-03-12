import { IsoDateError } from "../../../shared/error/iso-date.error";
import { Appointment, AppointmentPrimitivesCreate } from "./appointment.root";

describe("appointment-root", () => {
  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date("2023-03-12"));
  });

  afterAll(() => {
    jest.clearAllTimers();
    jest.clearAllMocks();
  });

  describe("create appointment", () => {
    it("should fail creating a new appointment  with an invalid date meeting", () => {
      const newAppointment: AppointmentPrimitivesCreate = {
        accountId: "coca-cola",
        customer: {
          email: "mss.11@gmail.com",
          name: "Lionel Mess",
          sessionId: "12",
        },
        moderator: "1",
        dateMeeting: new Date().toDateString(),
      };

      expect(() => Appointment.create(newAppointment)).toThrowError(
        new IsoDateError()
      );
    });
  });
});
