import { Args, Query, Resolver } from '@nestjs/graphql';
import { QueryBus } from '@nestjs/cqrs';

import { FindAllAppointmentQuery } from '../../application';
import { AppointmentModel } from './appointment.model';

@Resolver()
export class AppointmentResolver {
  constructor(private queryBus: QueryBus) {}

  @Query(() => [AppointmentModel])
  async appointments(@Args('accountId') accountId?: string) {
    return this.queryBus.execute(new FindAllAppointmentQuery(accountId));
  }
}
