import { AccountId } from "../../../shared/domain/account/account-id";
import { AggregateRoot } from "../../../shared/domain/aggregate/aggregate-root";
import { DomainEvent } from "../../../shared/domain/event/domain-event";
import { ModeratorId } from "../../../shared/domain/moderator/moderator-id";
import {
  AppointmentCustomer,
  AppointmentCustomerPrimitives,
} from "./appointment-customer.entity";
import {
  AppointmentStatus,
  AppointmentStatusOptions,
} from "./appointment-status.vo";

export interface AppointmentProps {
  moderator: ModeratorId;
  customer: AppointmentCustomer;
  status: AppointmentStatus;
  accountId: AccountId;
  dateMeeting: Date;
  dateFinish?: Date;
}

export interface AppointmentPrimitives {
  moderator: string;
  customer: AppointmentCustomerPrimitives;
  accountId: string;
  status: string;
  dateMeeting: Date;
  dateFinish?: Date;
}

export type AppointmentPrimitivesCreate = Pick<
  AppointmentPrimitives,
  "accountId" | "moderator" | "dateMeeting" | "customer"
>;

export class Appointment extends AggregateRoot<AppointmentProps> {
  static create(props: AppointmentPrimitivesCreate): Appointment {
    const instance = Appointment.fromPrimitives({
      ...props,
      status: AppointmentStatusOptions.CREATED,
    });
    return instance;
  }

  static fromPrimitives(props: AppointmentPrimitives): Appointment {
    return new Appointment({
      ...props,
      accountId: new AccountId(props.accountId),
      moderator: new ModeratorId(props.moderator),
      customer: new AppointmentCustomer({ ...props.customer }),
      status: new AppointmentStatus({ value: props.status }),
    });
  }

  retrieveDomainEvents(): DomainEvent[] {
    return [];
  }
}
