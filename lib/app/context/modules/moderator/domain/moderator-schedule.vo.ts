import { ValueObject } from "../../../shared/domain/values-object/value-object";
import { ScheduleOutError } from "./schedule-out.error";

export const MAX_MINUTES_WEEK = 60 * 24 * 7;

export interface ModeratorSchedulePrimitives {
  startTime: number;
  endTime: number;
}

export class ModeratorSchedule extends ValueObject<ModeratorSchedulePrimitives> {
  schema: Record<string, any> = {};

  static validate(props: ModeratorSchedulePrimitives) {
    const { endTime, startTime } = props;
    const generalErrorSchedule = new ScheduleOutError(startTime, endTime);

    if (startTime >= endTime || endTime > MAX_MINUTES_WEEK || startTime < 0)
      throw generalErrorSchedule;

    return new ModeratorSchedule(props);
  }
}
