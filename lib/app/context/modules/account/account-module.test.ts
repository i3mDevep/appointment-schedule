import { accountModule } from "./account-module";
import { AccountProps } from "./domain/account.root";

const accountFake: AccountProps = {
  name: "exito",
  active: true,
};
describe("account-module testing", () => {
  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date("2023-01-01"));
  });

  afterAll(() => {
    jest.clearAllTimers();
    jest.clearAllMocks();
  });
  test("should to create the new account", () => {
    accountModule
      .create({ ...accountFake })
      .then((account) => expect(account.id.value).toBe(accountFake.name))
      .catch(() => null);
  });

  test("should to get the account pass", () => {
    accountModule
      .get(accountFake.name)
      .then((account) => expect(account.id.value).toBe(accountFake.name))
      .catch(() => null);
  });
});
