import { Inject, Injectable } from '@nestjs/common';
import { CustomerRepository } from '../domain';
import { CustomerInfrastructure } from '../infrastructure/customer.infrastructure';

@Injectable()
export class CustomerFindAllApplication {
  constructor(
    @Inject(CustomerInfrastructure)
    public readonly customerRepository: CustomerRepository
  ) {}
}
