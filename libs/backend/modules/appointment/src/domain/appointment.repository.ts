import { AccountId } from 'backend/modules/shared';
import { Appointment } from './appointment';

export interface AppointmentRepository {
  findAll(accountId: AccountId): Appointment[];
  create(appointment: Appointment): Promise<void>;
}
