import { Inject, Injectable } from '@nestjs/common';
import { AppointmentInfrastructure } from '../../infrastructure';
import { Appointment, AppointmentRepository } from '../../domain';

@Injectable()
export class AppointmentCreateApplication {
  constructor(
    @Inject(AppointmentInfrastructure)
    private readonly appointmentRepository: AppointmentRepository
  ) {}

  public run(appointment: Appointment) {
    return this.appointmentRepository.create(appointment);
  }
}
