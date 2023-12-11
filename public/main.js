window.addEventListener('DOMContentLoaded', main);

let todos = [];

function main() {
  loadTodosFromLS();
  initTodos();
  initWelcome();
  initCalender();
}
