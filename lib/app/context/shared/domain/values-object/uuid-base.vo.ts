import { ulid } from "ulid";

export class UuidBase {
  readonly value: string;

  constructor(value: string) {
    this.value = value;
  }

  static create() {
    return new UuidBase(ulid());
  }

  toString(): string {
    return this.value;
  }
}
