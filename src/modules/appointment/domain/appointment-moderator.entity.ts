import { Entity } from "../../../shared/domain/entity/entity";

export type AppointmentModeratorId = string;
export interface AppointmentModeratorPrimitives {
  name: string;
  email: string;
}

export class AppointmentModerator extends Entity<AppointmentModeratorPrimitives> {
  public static create(
    props: AppointmentModeratorPrimitives
  ): AppointmentModerator {
    // const customerAccountProps: CreateCustomerPlaylistProps = {
    //   playlistName: props.playlistName,
    //   songIds: [],
    // };

    const instance = new AppointmentModerator(props);

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
