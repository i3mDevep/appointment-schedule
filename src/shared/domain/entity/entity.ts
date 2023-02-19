import { ulid } from "ulid";
import { schemaValidator } from "../../utils/schema-validator";
import { DomainEvent, ICreateDomainEvent } from "../event/domain-event";

export abstract class Entity<T> {
  private readonly _id: string;
  private readonly _created: string;

  private _updated: string;
  protected props: T;
  private _domainEvents: DomainEvent[] = [];

  constructor(props: T, id?: string, created?: string, updated?: string) {
    this._id = id ? id : ulid();
    this._created = created ? created : this.getISOString();
    this._updated = updated ? updated : this.getISOString();
    this.props = {
      ...props,
      id: this.id,
      created: this.created,
      updated: this.updated,
    };
  }

  public addDomainEvent(eventDetails: ICreateDomainEvent): void {
    if (eventDetails.eventSchema) {
      schemaValidator(eventDetails.eventSchema, eventDetails.event);
    }

    const event: DomainEvent = {
      source: eventDetails.source,
      eventName: eventDetails.eventName,
      event: eventDetails.event,
      eventVersion: eventDetails.eventVersion,
      eventDateTime: this.getISOString(),
    };

    this._domainEvents.push(event);
  }

  public clearDomainEvents(): void {
    this._domainEvents = [];
  }

  public get domainEvents(): DomainEvent[] {
    return this._domainEvents;
  }

  public get id(): string {
    return this._id;
  }

  public get created(): string {
    return this._created;
  }

  public get updated(): string {
    return this._updated;
  }

  public setUpdatedDate() {
    this._updated = this.getISOString();
  }

  protected validate(schema: Record<string, any>): void {
    schemaValidator(schema, this.props);
  }

  protected getISOString(): string {
    return new Date().toISOString();
  }
}
