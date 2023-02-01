import { Module } from '@nestjs/common';
import {
  CustomerFindAllApplication,
  CustomerCreateApplication,
  FindAllCustomerHandler,
  CreateCustomerHandler,
} from '../application';

import { CustomerInfrastructure } from '../infrastructure';
import { CustomerController } from '../interfaces/http';
import { CustomerResolver } from '../interfaces/graphql';
import { CqrsModule } from '@nestjs/cqrs';

const applications = [CustomerFindAllApplication];
const infrastructure = [CustomerInfrastructure, CustomerCreateApplication];
const adapters = [CustomerController];
const resolvers = [CustomerResolver];

const commandsHandler = [CreateCustomerHandler];
const queriesHandler = [FindAllCustomerHandler];
@Module({
  imports: [CqrsModule],
  controllers: [...adapters],
  providers: [
    ...applications,
    ...infrastructure,
    ...resolvers,
    ...queriesHandler,
    ...commandsHandler,
  ],
  exports: [
    ...applications,
    ...infrastructure,
    ...resolvers,
    ...queriesHandler,
    ...commandsHandler,
  ],
})
export class CustomerModule {}
