window.addEventListener('DOMContentLoaded', main);

let todos = [
  {
    title: 'laga julmat',
    date: '2023-12-05',
  },
  {
    title: 'sleep',
    date: '2023-12-07',
  },
];

function main() {
  console.log('Hi students!');
  // load from LS
  initTodos();
  initWelcome();
  initCalender();
}
