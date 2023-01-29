import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CustomerGetListApplication } from 'backend/modules/customer';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly customerApplication: CustomerGetListApplication
  ) {}

  @Get()
  getData() {
    return this.customerApplication.customerRepository.getList();
  }
}
