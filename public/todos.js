const addTodoBtn = document.getElementById('addTodo');
const saveBtn = document.createElement('button');
// Execute the following code when the window has finished loading
function initTodos() {
  displayTodos();
}

function displayTodos(clickedDate) {
  const newTodoContainer = document.getElementById('activeTodoContainer');

  const matchTodos = todos.filter(function (todo) {
    return !clickedDate || todo.date === clickedDate;
  });
  newTodoContainer.innerHTML = ' ';

  for (let i = 0; i < matchTodos.length; i++) {
    const todo = matchTodos[i];
    const todoContainer = document.createElement('ul');
    const todoTitleElement = document.createElement('li');
    const todoDateElement = document.createElement('span');
    const todoBtnContainer = document.createElement('div');
    const deleteTodoBtn = document.createElement('button');
    const editTodoBtn = document.createElement('button');

    todoContainer.setAttribute('data-cy', 'todo-list');
    todoContainer.classList.add('todo');
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
    todoTitleElement.appendChild(todoDateElement);
    todoTitleElement.appendChild(todoBtnContainer);
    todoBtnContainer.appendChild(deleteTodoBtn);
    todoBtnContainer.appendChild(editTodoBtn);

    generateCalendar(currentYear, currentMonth);

    deleteTodoBtn.addEventListener(
      'click',
      (function (clickedTodo) {
        return function () {
          for (let i = 0; i < todos.length; i++) {
            if (
              todos[i].title === clickedTodo.title &&
              todos[i].date === clickedTodo.date
            ) {
              todos.splice(i, 1);
              displayTodos();
              displayTodos(clickedDate);
              generateCalendar(currentYear, currentMonth);
              saveTodoToLS();
              const emptyUl = document.createElement('ul');
              newTodoContainer.appendChild(emptyUl);
              emptyUl.setAttribute('data-cy', 'todo-list');
              break;
            }
          }
        };
      })(todo),
    );

    editTodoBtn.addEventListener('click', function () {
      todos.splice(i, 1);
      const editTodoInput = document.createElement('input');
      const editDateInput = document.createElement('input');
      const saveBtn = document.createElement('button');
      saveBtn.setAttribute('data-cy', 'save-todo-button');
      addTodoBtn.setAttribute('data-cy', ' ');
      editTodoInput.value = todo.title;
      editDateInput.value = todo.date;
      editTodoInput.classList.add('todoTitle');
      editTodoInput.setAttribute('data-cy', 'todo-title-input');
      editDateInput.setAttribute('data-cy', 'todo-date-input');
      const todoTitleInput = document.getElementById('todoTitleInput');
      let dateSelector = document.getElementById('chooseTodoDate');
      todoTitleInput.setAttribute('data-cy', ' ');
      dateSelector.setAttribute('data-cy', ' ');
      todoTitleElement.replaceWith(editTodoInput);
      todoContainer.appendChild(todoDateElement);
      todoDateElement.replaceWith(editDateInput);
      todoContainer.appendChild(todoBtnContainer);

      editTodoBtn.replaceWith(saveBtn);
      editDateInput.setAttribute('type', 'date');
      saveBtn.textContent = 'Save';
      saveBtn.addEventListener('click', function () {
        const todoTitleElement = document.createElement('li');
        const todoDateElement = document.createElement('span');
        todoTitleElement.classList.add('todoTitle');
        let todoEdit = editTodoInput.value;
        let dateEdit = editDateInput.value;
        editTodoInput.replaceWith(todoTitleElement);
        editDateInput.replaceWith(todoDateElement);
        saveBtn.replaceWith(editTodoBtn);
        todoTitleElement.textContent = todoEdit;
        todoDateElement.textContent = dateEdit;
        todoTitleElement.appendChild(todoDateElement);
        let newTodo = {
          title: todoEdit,
          date: dateEdit,
        };
        todos.push(newTodo);
        sortItemsByDate(todos);
        saveTodoToLS();
        window.location.reload();
      });
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
  displayTodos();
  displayTodos();
  generateCalendar(currentYear, currentMonth);
  sortItemsByDate(todos);
  saveTodoToLS();
  window.location.reload();
}
