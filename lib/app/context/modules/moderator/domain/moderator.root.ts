import { AggregateRoot } from "../../../shared/domain/aggregate/aggregate-root";
import { PrimitivesBase } from "../../../shared/domain/entity/primitives-base";
import { DomainEvent } from "../../../shared/domain/event/domain-event";
import { ModeratorId } from "../../../shared/domain/moderator/moderator-id";

export interface ModeratorProps extends PrimitivesBase {
  accountId: string;
  name: string;
  email: string;
  phone: string;
  specialties: string;
}

export class Moderator extends AggregateRoot<ModeratorProps> {
  constructor(props: ModeratorProps) {
    const id_ = props?.id;
    const base = [props.created, props.modified];
    super(props, id_ ? new ModeratorId(id_) : undefined, ...base);
  }

  public static create(props: ModeratorProps): Moderator {
    const instance = new Moderator(props);
    return instance;
  }

  static toDomain(props: ModeratorProps): Moderator {
    return new Moderator(props);
  }

  toDto() {
    return {
      id: this.id.toString(),
      account: this.props.accountId,
      name: this.props.name,
      email: this.props.email,
      phone: this.props.phone,
      specialties: this.props.specialties,
    };
  }

  retrieveDomainEvents(): DomainEvent[] {
    return [];
  }
}
