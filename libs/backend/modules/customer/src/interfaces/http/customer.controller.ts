import { Controller, Get } from '@nestjs/common';
import { CustomerGetListApplication } from '../../application';

@Controller('customer')
export class CustomerController {
  constructor(
    private readonly getListApplication: CustomerGetListApplication
  ) {}

  @Get()
  getData() {
    return this.getListApplication.customerRepository.getList();
  }
}
