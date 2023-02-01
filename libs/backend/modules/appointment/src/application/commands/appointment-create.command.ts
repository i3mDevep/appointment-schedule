import { ICommand } from '@nestjs/cqrs';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CustomerPrimitives } from 'backend/modules/shared';
import { AppointmentCreateApplication } from './appointment-create.application';
import { AppointmentPrimitives, Appointment } from '../../domain';

export class CreateAppointmentCommand
  implements AppointmentPrimitives, ICommand
{
  constructor(
    public readonly id: string,
    public readonly accountId: string,
    public readonly moderatorId: string,
    public readonly customer: CustomerPrimitives,
    public readonly status: number,
    public readonly dateCreated: Date,
    public readonly dateMeeting: Date,
    public readonly dateUpdate?: Date,
    public readonly dateFinish?: Date
  ) {}
}

@CommandHandler(CreateAppointmentCommand)
export class CreateAppointmentHandler
  implements ICommandHandler<CreateAppointmentCommand>
{
  constructor(private application: AppointmentCreateApplication) {}

  async execute(command: CreateAppointmentCommand) {
    await this.application.run(Appointment.fromPrimitives(command));
  }
}
