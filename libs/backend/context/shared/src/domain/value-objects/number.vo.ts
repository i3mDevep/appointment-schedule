import { ValueObject } from './value.vo';

export abstract class NumberValueObject extends ValueObject<number> {
  isBiggerThan(other: NumberValueObject): boolean {
    return this.value > other.value;
  }
}
