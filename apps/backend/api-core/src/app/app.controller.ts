import { Controller, Get } from '@nestjs/common';
import { SharedService } from 'backend/modules/shared';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly sharedService: SharedService
  ) {}

  @Get()
  getData() {
    return this.sharedService.getData();
  }
}
