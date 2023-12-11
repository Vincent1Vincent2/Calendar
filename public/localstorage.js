function initLS() {
  loadTodosFromLS();
}

function saveTodoToLS() {
  const todoString = JSON.stringify(todos);
  localStorage.setItem('todos', todoString);
}

function loadTodosFromLS() {
  if (localStorage.key(todos)) {
    const todoString = localStorage.getItem(todos);
    todos = JSON.parse(todoString);
  }
}
