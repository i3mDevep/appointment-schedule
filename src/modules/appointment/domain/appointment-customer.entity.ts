import { Entity } from "../../../shared/domain/entity/entity";

export interface Nps {
  comment: string;
  points: number;
}

export interface AppointmentCustomerPrimitives {
  name: string;
  email: string;
  sessionId: string;
  nps?: Nps;
}

export class AppointmentCustomer extends Entity<AppointmentCustomerPrimitives> {
  public static create(
    props: AppointmentCustomerPrimitives
  ): AppointmentCustomer {
    // const customerAccountProps: CreateCustomerPlaylistProps = {
    //   playlistName: props.playlistName,
    //   songIds: [],
    // };

    const instance = new AppointmentCustomer(props);

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

  public updateNps(nps: Nps) {
    this.props.nps = nps;
  }
}
