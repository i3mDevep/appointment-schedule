import { AppointmentRepository } from "../../domain/appointment.repository";

export function appointmentDynamodb(): AppointmentRepository {
  const create = () => Promise.resolve();
  const findByAccount = () => Promise.resolve([]);
  return { create, findByAccount };
}
