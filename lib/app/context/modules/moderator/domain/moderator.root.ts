import { AggregateRoot } from "../../../shared/domain/aggregate/aggregate-root";
import { PrimitivesBase } from "../../../shared/domain/entity/primitives-base";
import { DomainEvent } from "../../../shared/domain/event/domain-event";
import { ModeratorId } from "../../../shared/domain/moderator/moderator-id";
import {
  ModeratorSchedule,
  ModeratorSchedulePrimitives,
} from "./moderator-schedule.vo";

export interface ModeratorPrimitives extends PrimitivesBase {
  accountId: string;
  name: string;
  email: string;
  phone: string;
  specialties: string;
  schedules: ModeratorSchedulePrimitives[];
}

export interface ModeratorProps extends Omit<ModeratorPrimitives, "schedules"> {
  schedules: ModeratorSchedule[];
}

export class Moderator extends AggregateRoot<ModeratorProps> {
  constructor(props: ModeratorProps) {
    const id_ = props?.id;
    const base = [props.created, props.modified];
    super(props, id_ ? new ModeratorId(id_) : undefined, ...base);
  }

  public static create(props: ModeratorPrimitives): Moderator {
    const instance = new Moderator({
      ...props,
      schedules: props.schedules.map((sm) => ModeratorSchedule.validate(sm)),
    });
    return instance;
  }

  static toDomain(primitives: ModeratorPrimitives): Moderator {
    return new Moderator({
      ...primitives,
      schedules: primitives.schedules.map((s) => new ModeratorSchedule(s)),
    });
  }

  toDto() {
    return {
      id: this.id.toString(),
      account: this.props.accountId,
      name: this.props.name,
      email: this.props.email,
      phone: this.props.phone,
      schedules: this.props.schedules.map((s) => s.props_),
      specialties: this.props.specialties,
    };
  }

  retrieveDomainEvents(): DomainEvent[] {
    return [];
  }
}
