import { AggregateRoot } from 'backend/context/shared';

export interface CustomerPrimitives {
  id: string;
  name: string;
}

export class Customer extends AggregateRoot<CustomerPrimitives> {
  private readonly id: string;
  private readonly name: string;

  constructor(props: CustomerPrimitives) {
    super();
    Object.assign(this, props);
  }

  toPrimitives(): CustomerPrimitives {
    return {
      id: this.id,
      name: this.name,
    };
  }

  static fromPrimitives(primitives: CustomerPrimitives) {
    return new Customer(primitives);
  }
}
