import { Injectable } from '@nestjs/common';
import { Customer, CustomerRepository } from '../domain';

@Injectable()
export class CustomerInfrastructure implements CustomerRepository {
  create(input: Customer): Promise<void> {
    console.log(
      '🚀 ~ file: customer.infrastructure.ts:7 ~ CustomerInfrastructure ~ create ~ input',
      input
    );
    throw new Error('Method not implemented.');
  }
  getList(): Customer[] {
    return [
      Customer.fromPrimitives({
        id: '2a3ad682-a00d-11ed-a8fc-0242ac120002',
        fullName: 'Michael Steven',
        sessionId: '102',
        appointmentId: '2',
        email: '',
      }),
      Customer.fromPrimitives({
        id: '2a3ad682-a00d-11ed-a8fc-0242ac120003',
        fullName: 'Mary Eugenia',
        sessionId: '332',
        appointmentId: '2',
        email: '',
      }),
    ];
  }
}
