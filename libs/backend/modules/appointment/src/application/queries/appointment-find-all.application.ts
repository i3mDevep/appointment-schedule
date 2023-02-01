import { Inject, Injectable } from '@nestjs/common';
import { AccountId } from 'backend/modules/shared';
import { AppointmentRepository } from '../../domain';
import { AppointmentInfrastructure } from '../../infrastructure/appointment.infrastructure';

@Injectable()
export class AppointmentFindAllApplication {
  constructor(
    @Inject(AppointmentInfrastructure)
    private readonly appointmentRepository: AppointmentRepository
  ) {}

  public run(accountId: AccountId) {
    return this.appointmentRepository.findAll(accountId);
  }
}
