export class AccountNotExist extends Error {
  constructor(id: string) {
    super(`Account ${id} don't exist`);
  }
}
