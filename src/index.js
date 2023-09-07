document.addEventListener("DOMContentLoaded", function () {
  const currentDay = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );
  const currentTime = document.querySelector('[data-testid="currentUTCTime"]');

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();

  const currentUTCTime = currentDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  currentTime.textContent = currentUTCTime;

  const currentUTCDay = daysOfWeek[currentDate.getDay()];

  currentDay.textContent = currentUTCDay;
});
