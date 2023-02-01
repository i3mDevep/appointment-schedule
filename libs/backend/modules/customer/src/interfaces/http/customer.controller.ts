import { Controller, Get } from '@nestjs/common';
import { CustomerFindAllApplication } from '../../application';

@Controller('customer')
export class CustomerController {
  constructor(
    private readonly getListApplication: CustomerFindAllApplication
  ) {}

  // @Get()
  // getData() {
  //   return this.getListApplication.customerRepository.getList('lives');
  // }
}
