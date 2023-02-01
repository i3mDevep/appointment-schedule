import { CustomerId } from './id';
import { Email } from './email';
import { FullName } from './full-name';
import { SessionId } from './session-id';

export interface CustomerProps {
  readonly id: CustomerId;
  readonly sessionId: SessionId;
  readonly fullName: FullName;
  readonly email: Email;
}

export interface CustomerPrimitives {
  id: string;
  sessionId: string;
  fullName: string;
  email: string;
}

export class Customer implements CustomerProps {
  id: CustomerId;
  sessionId: SessionId;
  fullName: FullName;
  email: Email;

  constructor(props: CustomerProps) {
    Object.assign(this, props);
  }

  toPrimitives(): CustomerPrimitives {
    return {
      id: this.id.value,
      fullName: this.fullName.value,
      email: this.email.value,
      sessionId: this.sessionId.value,
    };
  }

  static fromPrimitives(primitives: CustomerPrimitives) {
    return new Customer({
      id: new CustomerId(primitives.id),
      email: new Email(primitives.email),
      fullName: new FullName(primitives.fullName),
      sessionId: new SessionId(primitives.sessionId),
    });
  }
}
