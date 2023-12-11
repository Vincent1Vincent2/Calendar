window.addEventListener('DOMContentLoaded', main);

let todos = [];

function main() {
  // load from LS
  initTodos();
  initWelcome();
  initCalender();
  initLS();
}
