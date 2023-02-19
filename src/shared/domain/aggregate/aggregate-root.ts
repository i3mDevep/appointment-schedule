import { DomainEvent } from "../event/domain-event";
import { Entity } from "../entity/entity";

export abstract class AggregateRoot<Props> extends Entity<Props> {
  abstract retrieveDomainEvents(): DomainEvent[];
}
