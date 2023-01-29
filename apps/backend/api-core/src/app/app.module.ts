import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CustomerModule } from 'backend/modules/customer';

const modules = [CustomerModule];
@Module({
  imports: [...modules],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
