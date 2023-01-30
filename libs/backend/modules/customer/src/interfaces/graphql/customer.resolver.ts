import { Query, Resolver } from '@nestjs/graphql';
import { CustomerModel } from './customer.model';
import { CustomerFindAllApplication } from '../../application';

@Resolver()
export class AuthorsResolver {
  constructor(private getListApplication: CustomerFindAllApplication) {}

  @Query(() => [CustomerModel])
  async customers() {
    return this.getListApplication.customerRepository.getList();
  }
}
