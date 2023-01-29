import { Module } from '@nestjs/common';
import { CustomerGetListApplication } from '../application';
import { CustomerInfrastructure } from '../infrastructure';
import { CustomerController } from '../interfaces/http';
import { AuthorsResolver } from '../interfaces/graphql';

const applications = [CustomerGetListApplication];
const infrastructure = [CustomerInfrastructure];
const adapters = [CustomerController];
const resolvers = [AuthorsResolver];
@Module({
  controllers: [...adapters],
  providers: [...applications, ...infrastructure, ...resolvers],
  exports: [...applications, ...infrastructure, ...resolvers],
})
export class CustomerModule {}