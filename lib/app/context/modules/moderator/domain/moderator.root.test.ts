import { MAX_MINUTES_WEEK } from "./moderator-schedule.vo";
import { Moderator, ModeratorPrimitives } from "./moderator.root";
import { ScheduleOutError } from "./schedule-out.error";

describe("moderator-root", () => {
  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date("2023-03-12"));
  });

  afterAll(() => {
    jest.clearAllTimers();
    jest.clearAllMocks();
  });

  describe("create moderator", () => {
    it("should fail creating a new moderator with an invalid schedule", () => {
      const schedulesBad: ModeratorPrimitives["schedules"] = [
        { startTime: -1, endTime: 10 },
        { startTime: 10, endTime: 1 },
        { startTime: MAX_MINUTES_WEEK / 2, endTime: MAX_MINUTES_WEEK + 1 },
      ];

      const newModerator: ModeratorPrimitives = {
        accountId: "coca-cola",
        email: "moderator@gmail.com",
        name: "Mike Melon",
        phone: "+573206408240",
        specialties: "all request i can attendee",
        schedules: [],
      };

      schedulesBad.forEach((scb) => {
        expect(() =>
          Moderator.create({ ...newModerator, schedules: [scb] })
        ).toThrowError(new ScheduleOutError(scb.startTime, scb.endTime));
      });
    });
  });
});
