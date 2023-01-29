import { Injectable } from '@nestjs/common';
import { Customer, CustomerRepository } from '../domain';

@Injectable()
export class CustomerInfrastructure implements CustomerRepository {
  getList(): Customer[] {
    return [
      Customer.fromPrimitives({ id: '1', name: 'Michael Steven' }),
      Customer.fromPrimitives({ id: '2', name: 'Mary Eugenia' }),
    ];
  }
}
