import { Query, Resolver } from '@nestjs/graphql';
import { QueryBus } from '@nestjs/cqrs';

import { FindAllAppointmentQuery } from '../../application';
import { AppointmentModel } from './appointment.model';

@Resolver()
export class AppointmentResolver {
  constructor(private queryBus: QueryBus) {}

  @Query(() => [AppointmentModel])
  async appointments() {
    return this.queryBus.execute(
      new FindAllAppointmentQuery('account-example')
    );
  }
}
