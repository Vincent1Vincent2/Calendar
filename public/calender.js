//Declare variables
const monthBack = document.getElementById("monthBack");
const monthForward = document.getElementById("monthForward");

//Date variables
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

//List of months 0-11.
//We fetch the "months" 0-11 and then our "currentMonth" takes current number 0-11.
//Then displays it in the DOM along with the year
function displayCurrentMonth() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonthElement = document.getElementById("currentMonth");
  currentMonthElement.textContent = months[currentMonth] + " " + currentYear;
}

displayCurrentMonth();

//if current month === 0 (January) then we change currentMonth  = 11 (December), we also change the currentYear--
monthBack.addEventListener("click", function () {
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
monthForward.addEventListener("click", function () {
  if (currentMonth === 11) {
    currentMonth = 0;
    currentYear++;
  } else {
    currentMonth++;
  }
  displayCurrentMonth();
});
