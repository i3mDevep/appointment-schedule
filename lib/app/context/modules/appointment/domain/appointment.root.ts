import { AccountId } from "../../../shared/domain/account/account-id";
import { AggregateRoot } from "../../../shared/domain/aggregate/aggregate-root";
import { DomainEvent } from "../../../shared/domain/event/domain-event";
import { ModeratorId } from "../../../shared/domain/moderator/moderator-id";
import { PrimitivesBase } from "../../../shared/domain/entity/primitives-base";

import {
  AppointmentCustomer,
  AppointmentCustomerPrimitives,
} from "./appointment-customer.entity";
import {
  AppointmentStatus,
  AppointmentStatusOptions,
} from "./appointment-status.vo";
import { AppointmentId } from "../../../shared/domain/appointment/appointment-id";

export interface AppointmentProps extends Omit<PrimitivesBase, "id"> {
  id?: AppointmentId;
  accountId: AccountId;
  moderator: ModeratorId;
  customer: AppointmentCustomer;
  status: AppointmentStatus;
  dateMeeting: string;
  dateFinish?: string;
}

export interface AppointmentPrimitives extends PrimitivesBase {
  accountId: string;
  moderator: string;
  customer: AppointmentCustomerPrimitives;
  status: string;
  dateMeeting: string;
  dateFinish?: string;
}

export type AppointmentPrimitivesCreate = Pick<
  AppointmentPrimitives,
  "accountId" | "moderator" | "dateMeeting" | "customer"
>;

export class Appointment extends AggregateRoot<AppointmentProps> {
  constructor(props: AppointmentProps) {
    const id_ = props.id;
    const base = [props.created, props.modified];
    super(props, id_, ...base);
  }

  static create(props: AppointmentPrimitivesCreate): Appointment {
    const instance = Appointment.toDomain({
      ...props,
      status: AppointmentStatusOptions.CREATED,
    });
    return instance;
  }

  static toDomain(primitives: AppointmentPrimitives): Appointment {
    return new Appointment({
      ...primitives,
      id: primitives.id ? new AppointmentId(primitives.id) : undefined,
      accountId: new AccountId(primitives.accountId),
      moderator: new ModeratorId(primitives.moderator),
      customer: new AppointmentCustomer({ ...primitives.customer }),
      status: new AppointmentStatus({ value: primitives.status }),
    });
  }

  toDto() {
    return {
      id: this.id.value,
      account: this.props.accountId.value,
      status: this.props.status.props_.value,
      moderator: this.props.moderator.value,
      dateMeeting: this.props.dateMeeting,
      customer: this.props.customer.toDto(),
    };
  }

  retrieveDomainEvents(): DomainEvent[] {
    return [];
  }
}
