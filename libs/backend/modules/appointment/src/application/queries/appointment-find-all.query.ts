import { IQuery } from '@nestjs/cqrs';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { AccountId } from 'backend/modules/shared';

import { AppointmentPrimitives } from '../../domain';
import { AppointmentFindAllApplication } from '../queries/appointment-find-all.application';

export class FindAllAppointmentQuery
  implements Pick<AppointmentPrimitives, 'accountId'>, IQuery
{
  constructor(public readonly accountId: string) {}
}

@QueryHandler(FindAllAppointmentQuery)
export class FindAllAppointmentHandler
  implements IQueryHandler<FindAllAppointmentQuery>
{
  constructor(private application: AppointmentFindAllApplication) {}

  async execute(
    query: FindAllAppointmentQuery
  ): Promise<AppointmentPrimitives[]> {
    const { accountId } = query;
    return this.application
      .run(new AccountId(accountId))
      .map((customer) => customer.toPrimitives());
  }
}
