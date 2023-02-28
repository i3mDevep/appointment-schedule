import { AccountId } from "../../../shared/domain/account/account-id";
import { AggregateRoot } from "../../../shared/domain/aggregate/aggregate-root";
import { PrimitivesBase } from "../../../shared/domain/entity/primitives-base";
import { DomainEvent } from "../../../shared/domain/event/domain-event";

export interface AccountProps extends PrimitivesBase {
  name: string;
  active?: boolean;
}

export class Account extends AggregateRoot<AccountProps> {
  constructor(props: AccountProps) {
    const id_ = props.id ?? props.name;
    const base = [props.created, props.modified];
    super(props, new AccountId(id_), ...base);
  }

  static create(props: AccountProps) {
    const instance = new Account(props);
    return instance;
  }

  static toDomain(props: AccountProps) {
    return new Account(props);
  }

  toDto() {
    return {
      name: this.props.name,
      active: this.props.active,
    };
  }

  retrieveDomainEvents(): DomainEvent[] {
    return [];
  }
}
