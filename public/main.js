window.addEventListener('DOMContentLoaded', main);

let todos = [
  {
    title: 'laga julmat',
    date: '2023-12-07',
  },
  {
    title: 'Cykla',
    date: '2023-12-07',
  },
];

function main() {
  // load from LS
  initTodos();
  initWelcome();
  initCalender();
}
