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

  const currentUTCDay = daysOfWeek[currentDate.getUTCDay()];
  currentDay.textContent = currentUTCDay;

  const currentUTCTime = currentDate.toUTCString();
  //  console.log(currentUTCTime)

  const formattime = currentUTCTime.split(" ");
  // console.log(formattime)

  const utctime = formattime[4];
  const gmt = formattime[5];

  const formattedtime = `${utctime}, ${gmt}`;
  currentTime.textContent = formattedtime;
});
