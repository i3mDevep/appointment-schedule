import { Module } from '@nestjs/common';
import {
  AppointmentFindAllApplication,
  AppointmentCreateApplication,
  FindAllAppointmentHandler,
  CreateAppointmentHandler,
} from '../application';

import { AppointmentInfrastructure } from '../infrastructure';
import { AppointmentResolver } from '../interfaces/graphql';
import { CqrsModule } from '@nestjs/cqrs';

const applications = [AppointmentFindAllApplication];
const infrastructure = [
  AppointmentInfrastructure,
  AppointmentCreateApplication,
];
const controllers = [];
const resolvers = [AppointmentResolver];

const commandsHandler = [FindAllAppointmentHandler];
const queriesHandler = [CreateAppointmentHandler];

const providers = [
  ...applications,
  ...infrastructure,
  ...resolvers,
  ...queriesHandler,
  ...commandsHandler,
];

@Module({
  imports: [CqrsModule],
  controllers: [...controllers],
  providers,
  exports: providers,
})
export class AppointmentModule {}
