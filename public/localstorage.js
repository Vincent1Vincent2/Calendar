function initLS() {
    saveTodoToLS();
}

function saveTodoToLS() {
    const todoString = JSON.stringify(todos);
    localStorage.setItem("todos", todoString);
  }