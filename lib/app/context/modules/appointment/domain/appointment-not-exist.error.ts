export class AppointmentNotExist extends Error {
  constructor(id: string) {
    super(`Appointment ${id} don't exist`);
  }
}
