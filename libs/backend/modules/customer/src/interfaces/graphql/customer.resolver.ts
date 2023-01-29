import { Query, Resolver } from '@nestjs/graphql';
import { CustomerModel } from './customer.model';
import { CustomerGetListApplication } from '../../application';

@Resolver()
export class AuthorsResolver {
  constructor(private getListApplication: CustomerGetListApplication) {}

  @Query(() => [CustomerModel])
  async customers() {
    return this.getListApplication.customerRepository.getList();
  }
}
