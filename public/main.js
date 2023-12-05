window.addEventListener('DOMContentLoaded', main);

let todos = [
  {
    title: 'laga julmat',
    date: '2023-12-05',
  },
  {
    title: 'Cykla',
    date: '2023-11-05',
  },
];

function main() {
  console.log('Hi students!');
  // load from LS
  initTodos();
  initWelcome();
  initCalender();
}
