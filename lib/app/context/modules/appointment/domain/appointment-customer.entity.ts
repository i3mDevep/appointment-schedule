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
    const instance = new AppointmentCustomer(props);
    return instance;
  }

  toDto() {
    return {
      id: this.id.value,
      name: this.props.name,
      email: this.props.email,
      sessionId: this.props.sessionId,
    };
  }
}
