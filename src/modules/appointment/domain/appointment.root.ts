import { AccountId } from "../../../shared/domain/account/account-id";
import { AggregateRoot } from "../../../shared/domain/aggregate/aggregate-root";
import { DomainEvent } from "../../../shared/domain/event/domain-event";
import {
  AppointmentCustomer,
  AppointmentCustomerPrimitives,
} from "./appointment-customer.entity";
import { AppointmentModeratorId } from "./appointment-moderator.entity";
import {
  AppointmentStatus,
  AppointmentStatusOptions,
} from "./appointment-status.vo";

export interface AppointmentProps {
  moderator: AppointmentModeratorId;
  customer: AppointmentCustomer;
  status: AppointmentStatus;
  accountId: AccountId;
  dateMeeting: Date;
  dateFinish?: Date;
}

export interface AppointmentPrimitives {
  moderator: AppointmentModeratorId;
  customer: AppointmentCustomerPrimitives;
  status: string;
  accountId: AccountId;
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
      customer: new AppointmentCustomer({ ...props.customer }),
      status: new AppointmentStatus({ value: props.status }),
    });
  }

  retrieveDomainEvents(): DomainEvent[] {
    return [];
  }
}
