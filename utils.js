import { daysOfWeek } from "./daysoftheweekarr";

export function getCurrentDayOfWeek() {
  const currentDate = new Date();
  const currentDay = daysOfWeek[currentDate.getUTCDay()];
  return currentDay;
}

export function getCurrentUTCTime() {
  const currentDate = new Date();
  const currentUTC = currentDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return currentUTC;
}
