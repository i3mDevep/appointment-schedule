import { NumberValueObject } from 'backend/context/shared';
export enum StatusOptions {
  CREATED,
  IN_MEETING,
  FINALIZED,
  CANCELED,
}
export class Status extends NumberValueObject {
  constructor(value: number) {
    super(value);
    this.ensureStatusIsValid();
  }
  private ensureStatusIsValid() {
    if (!(this.value in StatusOptions)) {
      throw new Error(
        `Status must be some this options ${Object.entries(StatusOptions)
          .splice(0, Object.values(StatusOptions).length / 2)
          .map(([key, value]) => `${value}: ${key}`)
          .join(',')}`
      );
    }
  }
}
