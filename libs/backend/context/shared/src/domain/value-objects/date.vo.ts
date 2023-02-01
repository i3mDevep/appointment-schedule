import { ValueObject } from './value.vo';

export abstract class DateValueObject extends ValueObject<Date> {
  isBiggerThan(other: DateValueObject): boolean {
    return this.value.getTime() > other.value.getTime();
  }
}
