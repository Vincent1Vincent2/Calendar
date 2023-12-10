function initWelcome() {
  updateTime();
  setInterval(updateTime, 1000);
}

function updateTime() {
  let today = new Date();
  let currentYear = today.getFullYear();

  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let day = days[today.getDay()];
  let month = months[today.getMonth()];
  let date = addZeroIfNeeded(today.getDate());
  let hours = addZeroIfNeeded(today.getHours());
  let minutes = addZeroIfNeeded(today.getMinutes());
  let seconds = addZeroIfNeeded(today.getSeconds());

  let welcomeDate =
    day +
    ' ' +
    date +
    ' ' +
    month +
    ' ' +
    currentYear +
    ' ' +
    hours +
    ':' +
    minutes +
    ':' +
    seconds;

  const welcomeSegment = document.getElementById('welcomeSegment');
  welcomeSegment.innerHTML = welcomeDate;
}

function addZeroIfNeeded(value) {
  return value < 10 ? '0' + value : value;
}
