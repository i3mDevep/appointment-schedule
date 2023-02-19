import { AggregateRoot } from "../../../shared/domain/aggregate/aggregate-root";
import { DomainEvent } from "../../../shared/domain/event/domain-event";

export interface AccountPrimitives {
  name: string;
}

export class Account extends AggregateRoot<AccountPrimitives> {
  constructor(props: AccountPrimitives) {
    super({ ...props }, props.name);
  }

  static create(props: AccountPrimitives) {
    const instance = new Account(props);
    return instance;
  }

  fromPrimitives(props: AccountPrimitives) {
    return new Account(props);
  }

  retrieveDomainEvents(): DomainEvent[] {
    return [];
  }
}
