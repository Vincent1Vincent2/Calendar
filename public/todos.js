const addTodoBtn = document.getElementById('addTodo');
// Execute the following code when the window has finished loading
function initTodos() {
  createTodoStructure();
}

function createTodoStructure() {
  const newTodoContainer = document.getElementById('activeTodoContainer');

  newTodoContainer.innerHTML = '';

  for (let i = 0; i < todos.length; i++) {
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

    let todo = todos[i];

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
      editTodoTitle(todo);
    });

    function editTodoTitle(todo) {
      const newTitle = prompt('Enter the new title for the todo:', todo.title);
      if (newTitle !== null) {
        todo.title = newTitle;
        createTodoStructure();
      }
    }
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
