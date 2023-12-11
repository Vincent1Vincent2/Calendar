function saveTodoToLS() {
  let todoString = JSON.stringify(todos);
  localStorage.setItem('todos', todoString);
}

function loadTodosFromLS() {
  todos = JSON.parse(localStorage.getItem('todos') || '[]');
}
