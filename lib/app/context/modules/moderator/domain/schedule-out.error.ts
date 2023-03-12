export class ScheduleOutError extends Error {
  constructor(start: number, end: number) {
    super(`Schedule with start in ${start} and end in ${end} don't possible`);
  }
}
