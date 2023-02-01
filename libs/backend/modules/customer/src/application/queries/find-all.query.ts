import { IQuery } from '@nestjs/cqrs';
import { CustomerPrimitives } from '../../domain';

import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { CustomerCreateApplication } from '../create.application';

export class FindAllCustomerQuery implements IQuery {}

@QueryHandler(FindAllCustomerQuery)
export class FindAllCustomerHandler
  implements IQueryHandler<FindAllCustomerQuery>
{
  constructor(private repository: CustomerCreateApplication) {}

  async execute(): Promise<CustomerPrimitives[]> {
    return this.repository.customerRepository
      .getList()
      .map((customer) => customer.toPrimitives());
  }
}
