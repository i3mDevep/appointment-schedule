import { AggregateRoot } from 'backend/context/shared';
import {
  AccountId,
  AppointmentId,
  Customer,
  CustomerPrimitives,
  ModeratorId,
} from 'backend/modules/shared';
import { DatePoint } from './date-point';
import { Status } from './status';

export interface AppointmentProps {
  readonly id: AppointmentId;
  readonly accountId: AccountId;
  readonly moderatorId: ModeratorId;
  readonly customer: Customer;
  readonly status: Status;
  readonly dateCreated: DatePoint;
  readonly dateUpdate?: DatePoint;
  readonly dateMeeting: DatePoint;
  readonly dateFinish?: DatePoint;
}

export interface AppointmentPrimitives {
  id: string;
  accountId: string;
  moderatorId: string;
  customer: CustomerPrimitives;
  status: string;
  dateCreated: Date;
  dateUpdate?: Date;
  dateMeeting: Date;
  dateFinish?: Date;
}

export class Appointment
  extends AggregateRoot<AppointmentPrimitives>
  implements AppointmentProps
{
  readonly id: AppointmentId;
  readonly accountId: AccountId;
  readonly moderatorId: ModeratorId;
  readonly customer: Customer;
  readonly status: Status;
  readonly dateCreated: DatePoint;
  readonly dateUpdate?: DatePoint;
  readonly dateMeeting: DatePoint;
  readonly dateFinish?: DatePoint;

  constructor(props: AppointmentProps) {
    super();
    Object.assign(this, props);
  }

  toPrimitives(): AppointmentPrimitives {
    return {
      id: this.id.value,
      accountId: this.accountId.value,
      moderatorId: this.moderatorId.value,
      status: this.status.value,
      customer: this.customer.toPrimitives(),
      dateCreated: this.dateCreated.value,
      dateUpdate: this.dateUpdate?.value,
      dateMeeting: this.dateMeeting.value,
      dateFinish: this.dateFinish?.value,
    };
  }

  static fromPrimitives(primitives: AppointmentPrimitives) {
    return new Appointment({
      id: new AppointmentId(primitives.id),
      accountId: new AccountId(primitives.accountId),
      customer: Customer.fromPrimitives(primitives.customer),
      moderatorId: new ModeratorId(primitives.moderatorId),
      status: new Status(primitives.status),
      dateCreated: new DatePoint(primitives.dateCreated),
      dateMeeting: new DatePoint(primitives.dateMeeting),
      dateFinish: primitives?.dateFinish
        ? new DatePoint(primitives.dateFinish)
        : undefined,
      dateUpdate: primitives?.dateUpdate
        ? new DatePoint(primitives.dateUpdate)
        : undefined,
    });
  }
}
