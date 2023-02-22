import { AccountId } from "../../../shared/domain/account/account-id";
import { Entity } from "../../../shared/domain/entity/entity";
import { ModeratorId } from "../../../shared/domain/moderator/moderator-id";

export interface ModeratorPrimitives {
  name: string;
  email: string;
  accountId: AccountId;
}

export class Moderator extends Entity<ModeratorPrimitives, ModeratorId> {
  public static create(props: ModeratorPrimitives): Moderator {
    // const customerAccountProps: CreateCustomerPlaylistProps = {
    //   playlistName: props.playlistName,
    //   songIds: [],
    // };

    const instance = new Moderator(props);

    // instance.validate(schema);

    // instance.addDomainEvent({
    //   event: instance.toDto(),
    //   eventName: customerPlaylistCreatedEvent.eventName,
    //   source: customerPlaylistCreatedEvent.eventSource,
    //   eventSchema: customerPlaylistCreatedEvent.eventSchema,
    //   eventVersion: customerPlaylistCreatedEvent.eventVersion,
    // });

    return instance;
  }
}
