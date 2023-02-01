import { Query, Resolver } from '@nestjs/graphql';
import { CustomerModel } from './customer.model';
import { FindAllCustomerQuery } from '../../application';
import { QueryBus } from '@nestjs/cqrs';

@Resolver()
export class CustomerResolver {
  constructor(private queryBus: QueryBus) {}

  @Query(() => [CustomerModel])
  async customers() {
    return this.queryBus.execute(new FindAllCustomerQuery('toy'));
  }
}
