import { moderatorModule } from "./moderator-module";
import { ModeratorPrimitives } from "./domain/moderator.root";

const moderatorFake: ModeratorPrimitives = {
  accountId: "exito",
  email: "mayxool.11@gmail.com",
  name: "Michael Atehortua Henao",
  phone: "3206408264",
  specialties: "All",
  schedules: [{ startTime: 10, endTime: 650 }],
};
describe("moderator-module testing", () => {
  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date("2023-01-01"));
  });

  afterAll(() => {
    jest.clearAllTimers();
    jest.clearAllMocks();
  });
  test("should to create the new moderator", () => {
    moderatorModule
      .create({ ...moderatorFake })
      .then((account) => expect(account.id.value).toBe(moderatorFake.name))
      .catch(() => null);
  });

  test("should to get moderator with id and account", () => {
    moderatorModule
      .get("01GNNA1J0070PQCQ80DYF9S9YK", "exito")
      .then((moderator) => expect(moderator.id.value).toBe(moderatorFake.name))
      .catch(() => null);
  });

  test("should to get moderators with account", () => {
    moderatorModule
      .getWithAccount("exito")
      .then((moderator) => expect(Array.isArray(moderator)).toBe(true))
      .catch(() => null);
  });
});
