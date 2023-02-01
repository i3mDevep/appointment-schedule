import { ICommand } from '@nestjs/cqrs';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CustomerCreateApplication } from '../create.application';
import { CustomerPrimitives, Customer } from '../../domain';

export class CreateCustomerCommand implements CustomerPrimitives, ICommand {
  constructor(
    public readonly id: string,
    public readonly sessionId: string,
    public readonly appointmentId: string,
    public readonly fullName: string,
    public readonly email: string
  ) {}
}

@CommandHandler(CreateCustomerCommand)
export class CreateCustomerHandler
  implements ICommandHandler<CreateCustomerCommand>
{
  constructor(private repository: CustomerCreateApplication) {}

  async execute(command: CreateCustomerCommand) {
    await this.repository.customerRepository.create(
      Customer.fromPrimitives(command)
    );
  }
}
