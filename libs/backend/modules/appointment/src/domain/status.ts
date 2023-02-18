import { StringValueObject } from 'backend/context/shared';
export enum StatusOptions {
  CREATED = 'CREATED',
  IN_MEETING = 'IN_MEETING',
  FINALIZED = 'FINALIZED',
  CANCELED = 'CANCELED',
}
export class Status extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureStatusIsValid();
  }

  private ensureStatusIsValid() {
    if (!(this.value in StatusOptions)) {
      throw new Error(
        `Status must be some this options ${Object.entries(StatusOptions)
          .map(([key]) => key)
          .join(',')}`
      );
    }
  }
}
