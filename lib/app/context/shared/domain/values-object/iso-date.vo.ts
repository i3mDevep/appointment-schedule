import { IsoDateError } from "../../error/iso-date.error";
import { isIsoDate } from "../../utils/is-iso-date";

export class IsoDate {
  readonly value: string;

  constructor(value: string) {
    this.value = value;
  }

  static create(value: string) {
    if (!isIsoDate(value)) throw new IsoDateError();
    return new IsoDate(value);
  }

  toString(): string {
    return this.value;
  }
}
