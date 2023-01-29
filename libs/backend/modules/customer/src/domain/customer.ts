import { AggregateRoot, Uuid } from 'backend/context/shared';
import { Email } from './email';
import { FullName } from './fullName';
import { SessionId } from './sessionId';

export interface CustomerProps {
  readonly id: Uuid;
  readonly sessionId: SessionId;
  readonly appointmentId: string;
  readonly fullName: FullName;
  readonly email: Email;
}

export interface CustomerPrimitives {
  id: string;
  sessionId: string;
  appointmentId: string;
  fullName: string;
  email: string;
}

export class Customer
  extends AggregateRoot<CustomerPrimitives>
  implements CustomerProps
{
  id: Uuid;
  sessionId: SessionId;
  appointmentId: string;
  fullName: FullName;
  email: Email;

  constructor(props: CustomerProps) {
    super();
    Object.assign(this, props);
  }

  toPrimitives(): CustomerPrimitives {
    return {
      id: this.id.value,
      fullName: this.fullName.value,
      appointmentId: this.appointmentId,
      email: this.email.value,
      sessionId: this.sessionId.value,
    };
  }

  static fromPrimitives(primitives: CustomerPrimitives) {
    return new Customer({
      id: new Uuid(primitives.id),
      appointmentId: primitives.appointmentId,
      email: new Email(primitives.email),
      fullName: new FullName(primitives.fullName),
      sessionId: new SessionId(primitives.sessionId),
    });
  }
}
