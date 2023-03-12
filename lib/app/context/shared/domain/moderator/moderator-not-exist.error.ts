export class ModeratorNotExist extends Error {
  constructor(id: string, account: string) {
    super(`Moderator ${id} in account ${account} don't exist`);
  }
}
