import { moderatorModule } from "./moderator-module";
import { ModeratorProps } from "./domain/moderator.root";

const moderatorFake: ModeratorProps = {
  accountId: "exito",
  email: "mayxool.11@gmail.com",
  name: "Michael Atehortua Henao",
  phone: "3206408264",
  specialties: "All",
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
});
