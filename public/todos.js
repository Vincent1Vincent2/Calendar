const addTodoBtn = document.getElementById('addTodo');
// Execute the following code when the window has finished loading
function initTodos() {
  createTodoStructure();
}

function createTodoStructure() {
  const newTodoContainer = document.getElementById('activeTodoContainer');
  const currentDate = new Date().toISOString().split('T')[0];

  const matchTodos = todos.filter(function (todo) {
    return todo.date === currentDate;
  });
  newTodoContainer.innerHTML = '';

  for (let i = 0; i < matchTodos.length; i++) {
    const todo = matchTodos[i];
    const todoContainer = document.createElement('ul');
    const todoTitleElement = document.createElement('li');
    const todoDateElement = document.createElement('li');
    const todoBtnContainer = document.createElement('div');
    const deleteTodoBtn = document.createElement('button');
    const editTodoBtn = document.createElement('button');

    todoContainer.setAttribute('data-cy', 'todo-list');
    todoTitleElement.classList.add('todoTitle');
    todoDateElement.classList.add('todoDate');
    todoBtnContainer.classList.add('todoBtns');

    deleteTodoBtn.setAttribute('data-cy', 'delete-todo-button');
    deleteTodoBtn.textContent = 'Delete';

    editTodoBtn.setAttribute('data-cy', 'edit-todo-button');
    editTodoBtn.textContent = 'Edit';

    todoTitleElement.textContent = todo.title;
    todoDateElement.textContent = todo.date;

    newTodoContainer.appendChild(todoContainer);
    todoContainer.appendChild(todoTitleElement);
    todoContainer.appendChild(todoDateElement);
    todoTitleElement.appendChild(todoBtnContainer);
    todoBtnContainer.appendChild(deleteTodoBtn);
    todoBtnContainer.appendChild(editTodoBtn);

    deleteTodoBtn.addEventListener('click', function () {
      todos.splice(i, 1);
      createTodoStructure();

      generateCalendar(currentYear, currentMonth);

    });
    editTodoBtn.addEventListener('click', function () {
      todo.title = 'todo';
      createTodoStructure();
    });
  }
}

addTodoBtn.addEventListener('click', function () {
  addTodo();
});

function addTodo() {
  const todoTitleInput = document.getElementById('todoTitleInput');
  let dateSelector = document.getElementById('chooseTodoDate');
  const todo = todoTitleInput.value;
  const selectedDate = dateSelector.value;
  let newTodo = {
    title: todo,
    date: selectedDate,
  };
  todos.push(newTodo);
  createTodoStructure();

  generateCalendar(currentYear, currentMonth);


}
