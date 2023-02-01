import { AggregateRoot } from 'backend/context/shared';
import { AccountId, AppointmentId, CustomerId } from 'backend/modules/shared';

import { Email } from './email';
import { FullName } from './fullName';
import { SessionId } from './sessionId';

export interface CustomerProps {
  readonly id: CustomerId;
  readonly accountId: AccountId;
  readonly sessionId: SessionId;
  readonly appointmentId: AppointmentId;
  readonly fullName: FullName;
  readonly email: Email;
}

export interface CustomerPrimitives {
  id: string;
  accountId: string;
  sessionId: string;
  appointmentId: string;
  fullName: string;
  email: string;
}

export class Customer
  extends AggregateRoot<CustomerPrimitives>
  implements CustomerProps
{
  id: CustomerId;
  accountId: AccountId;
  sessionId: SessionId;
  appointmentId: AppointmentId;
  fullName: FullName;
  email: Email;

  constructor(props: CustomerProps) {
    super();
    Object.assign(this, props);
  }

  toPrimitives(): CustomerPrimitives {
    return {
      id: this.id.value,
      accountId: this.accountId.value,
      fullName: this.fullName.value,
      appointmentId: this.appointmentId.value,
      email: this.email.value,
      sessionId: this.sessionId.value,
    };
  }

  static fromPrimitives(primitives: CustomerPrimitives) {
    return new Customer({
      id: new CustomerId(primitives.id),
      accountId: new AccountId(primitives.accountId),
      appointmentId: new AppointmentId(primitives.appointmentId),
      email: new Email(primitives.email),
      fullName: new FullName(primitives.fullName),
      sessionId: new SessionId(primitives.sessionId),
    });
  }
}
