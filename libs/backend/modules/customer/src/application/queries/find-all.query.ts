import { IQuery } from '@nestjs/cqrs';
import { CustomerPrimitives } from '../../domain';

import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { AccountId } from 'backend/modules/shared';
import { CustomerCreateApplication } from '../create.application';

export class FindAllCustomerQuery
  implements Pick<CustomerPrimitives, 'accountId'>, IQuery
{
  constructor(public readonly accountId: string) {}
}

@QueryHandler(FindAllCustomerQuery)
export class FindAllCustomerHandler
  implements IQueryHandler<FindAllCustomerQuery>
{
  constructor(private repository: CustomerCreateApplication) {}

  async execute(query: FindAllCustomerQuery): Promise<CustomerPrimitives[]> {
    const { accountId } = query;
    return this.repository.customerRepository
      .getList(new AccountId(accountId))
      .map((customer) => customer.toPrimitives());
  }
}
