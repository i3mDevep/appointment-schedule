import { DomainEvent } from "../event/domain-event";
import { Entity } from "../entity/entity";
import { UuidBase } from "../values-object/uuid-base.vo";

export abstract class AggregateRoot<
  Props,
  ID extends UuidBase = UuidBase
> extends Entity<Props, ID> {
  abstract retrieveDomainEvents(): DomainEvent[];
}
