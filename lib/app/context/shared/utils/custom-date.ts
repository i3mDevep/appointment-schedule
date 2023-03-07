export function dateFormatterDatabase(date: Date) {
  const dateBase = date.toISOString().split("T");
  const date_ = dateBase[0];
  const time_ = dateBase[1].split(".")[0];
  return { time_, date_ };
}
