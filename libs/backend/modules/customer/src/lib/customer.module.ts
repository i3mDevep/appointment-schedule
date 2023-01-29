import { Module } from '@nestjs/common';
import { CustomerGetListApplication } from '../application';
import { CustomerInfrastructure } from '../infrastructure';

const applications = [CustomerGetListApplication];
const infrastructure = [CustomerInfrastructure];

@Module({
  controllers: [],
  providers: [...applications, ...infrastructure],
  exports: [...applications, ...infrastructure],
})
export class CustomerModule {}
