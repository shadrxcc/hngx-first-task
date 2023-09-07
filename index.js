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

  const currentUTCTimeMillis = Date.now();
  currentTime.textContent = currentUTCTimeMillis;
});

//older function for getting time in hrs:mins:seconds
// function updateCurrentTime() {
//   // const currentDate = new Date();
//   // const currentUTCTime = currentDate.getUTCDate();

//   // const formattime = currentUTCTime.split(" ");

//   // const date = formattime[1];

//   // const year = formattime[3]

//   // const month = formattime[2];

//   // const utctime = formattime[4].split(":");
//   // // console.log(utctime);
//   // const hr = utctime[0];
//   // const min = utctime[1];

//   // const gmt = formattime[5];

//   // const formattedtime = `${date} ${month} ${year} ${hr}:${min}`;
//   // currentTime.textContent = formattedtime;
// }

// updateCurrentTime();
// setInterval(updateCurrentTime, 1000);
