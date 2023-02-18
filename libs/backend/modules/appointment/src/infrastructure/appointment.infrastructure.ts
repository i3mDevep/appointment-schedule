import { Injectable } from '@nestjs/common';
import { AccountId } from 'backend/modules/shared';
import { AppointmentRepository, Appointment } from '../domain';

@Injectable()
export class AppointmentInfrastructure implements AppointmentRepository {
  findAll(accountId: AccountId): Appointment[] {
    console.log(
      '🚀 ~ file: appointment.infrastructure.ts:8 ~ AppointmentInfrastructure ~ findAll ~ accountId',
      accountId
    );
    return [
      Appointment.fromPrimitives({
        id: '2a3ad682-a00d-11ed-a8fc-0242ac120004',
        accountId: 'livestreamingdemo',
        moderatorId: '2a3ad682-a00d-11ed-a8fc-0242ac120003',
        status: 'IN_MEETING',
        customer: {
          id: '2a3ad682-a00d-11ed-a8fc-0242ac120002',
          sessionId: 'MacBook',
          email: 'mayxool.11@gmail.com',
          fullName: 'Michael Atehortua Henao',
        },
        dateCreated: new Date(2023, 9, 10, 0, 0, 0),
        dateMeeting: new Date(2023, 9, 11, 0, 0, 0),
      }),
    ];
  }
  create(appointment: Appointment): Promise<void> {
    console.log(
      '🚀 ~ file: appointment.infrastructure.ts:12 ~ CustomerInfrastructure ~ create ~ appointment',
      appointment
    );
    throw new Error('Method not implemented.');
  }
}
