export class IsoDateError extends Error {
  constructor() {
    super("Format date must be to ISO");
  }
}
