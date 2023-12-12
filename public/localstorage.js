function saveTodoToLS() {
  let todoString = JSON.stringify(todos);
  localStorage.setItem('todos', todoString);
}

function loadTodosFromLS() {
  todos = JSON.parse(localStorage.getItem('todos') || '[]');
}

function sortItemsByDate(todos) {
  return todos.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  });
}
