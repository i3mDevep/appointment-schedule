import { Account, AccountPrimitives } from "./account.root";

const accountFake: AccountPrimitives = {
  name: "livestreaming",
};
describe("account-domain", () => {
  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date("2023-01-01"));
  });

  afterAll(() => {
    jest.clearAllTimers();
    jest.clearAllMocks();
  });
  test("should create the account successfully and put name like id", () => {
    const account = Account.create(accountFake);
    expect(account.id.value).toBe(accountFake.name);
  });
});
