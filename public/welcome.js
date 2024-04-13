function initWelcome() {
  updateTime();
  setInterval(updateTime, 1000);
}

function updateTime() {
  let today = new Date();
  let currentYear = today.getFullYear();

  let days = [
    'Söndag',
    'Måndag',
    'Tisdag',
    'Onsdag',
    'Torsdag',
    'Fredag',
    'Lördag',
  ];
  let months = [
    'Januari',
    'Februari',
    'Mars',
    'April',
    'Maj',
    'Juni',
    'Juli',
    'Augusti',
    'September',
    'Oktober',
    'November',
    'December',
  ];
  let day = days[today.getDay()];
  let month = months[today.getMonth()];
  let date = addZeroIfNeeded(today.getDate());

  let welcomeDate = day + ' ' + date + ' ' + month + ' ' + currentYear;

  const welcomeSegment = document.getElementById('welcomeSegment');
  welcomeSegment.innerHTML = welcomeDate;
}

function addZeroIfNeeded(value) {
  return value < 10 ? '0' + value : value;
}
