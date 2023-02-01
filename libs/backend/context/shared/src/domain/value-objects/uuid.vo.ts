import * as validate from 'uuid-validate';
import { ValueObject } from './value.vo';

export class Uuid extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.ensureIsValidUuid(value);
  }

  private ensureIsValidUuid(id: string): void {
    if (!validate(id)) {
      throw new Error(
        `<${this.constructor.name}> does not allow the value <${id}>`
      );
    }
  }
}
