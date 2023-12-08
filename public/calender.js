function initCalender() {
  displayCurrentMonth();
  //Display current months calendar
  generateCalendar(today.getFullYear(), today.getMonth());
}
//Declare variables
const monthBack = document.getElementById('monthBack');
const monthForward = document.getElementById('monthForward');

//Date variables
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

//List of months 0-11.
//We fetch the "months" 0-11 and then our "currentMonth" takes current number 0-11.
//Then displays it in the DOM along with the year
function displayCurrentMonth() {
  const months = [
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
  const currentMonthElement = document.getElementById('currentMonth');
  currentMonthElement.textContent = months[currentMonth] + ' ' + currentYear;

  //Function to update the days when going back or forward in the months
  generateCalendar(currentYear, currentMonth);
}

//if current month === 0 (January) then we change currentMonth  = 11 (December), we also change the currentYear--
monthBack.addEventListener('click', function () {
  if (currentMonth === 0) {
    currentMonth = 11;
    currentYear--;
  } else {
    //Else we just go back one step
    currentMonth--;
  }
  displayCurrentMonth();
});

//Here is the same as above but reverse
monthForward.addEventListener('click', function () {
  if (currentMonth === 11) {
    currentMonth = 0;
    currentYear++;
  } else {
    currentMonth++;
  }
  displayCurrentMonth();
});

//We declare the current date in a variable
const today = new Date();

//Here we get the days in a month
function daysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

//Function to get the starting day of the month (1 = monday)
function getFirstDayOfMonth(month, year) {
  let day = new Date(year, month, 1).getDay() - 1;
  if (day === -1) {
    day += 7;
  }
  return day;
}

//Function to generate the numbers/days in calendar
function generateCalendar(year, month) {
  const days = daysInMonth(month, year);
  const dateContainer = document.getElementById('dateContainer');
  const firstDay = getFirstDayOfMonth(month, year);

  //Clear current dates
  dateContainer.innerHTML = '';

  //Add empty li elements before the first day and remove hover effect
  for (let i = 0; i < firstDay; i++) {
    const emptyLi = document.createElement('li');
    emptyLi.className = 'date empty';
    emptyLi.style.pointerEvents = 'none';
    emptyLi.dataset.cy = 'calendar-cell';
    dateContainer.appendChild(emptyLi);
  }

  for (let i = 1; i <= days; i++) {
    const calanderDate = document.createElement('li');
    const dateSpan = document.createElement('span');
    calanderDate.className = 'date';
    const currentDate = `${currentYear}-${String(currentMonth + 1).padStart(
      2,
      '0',
    )}-${String(i).padStart(2, '0')}`;
    calanderDate.dataset.date = currentDate;

    // Apply a class for styling today's date
    if (
      i === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      calanderDate.classList.add('today');
    }

    calanderDate.dataset.cy = 'calendar-cell';
    dateSpan.dataset.cy = 'calendar-cell-date';
    dateSpan.textContent = i;
    dateContainer.appendChild(calanderDate);
    calanderDate.appendChild(dateSpan);

    const todoCount = todos.filter(function (todo) {
      return todo.date === currentDate;
    }).length;

    if (todoCount > 0) {
      const todoNumberSpan = document.createElement('span');
      todoNumberSpan.classList.add('todoCount');
      todoNumberSpan.dataset.cy = 'calendar-cell-todos';
      todoNumberSpan.textContent = todoCount;
      calanderDate.appendChild(todoNumberSpan);
    }
    calanderDate.addEventListener('mouseover', function () {
      const clickedDate = this.dataset.date;
      createTodoStructure(clickedDate);
    });
  }
}
