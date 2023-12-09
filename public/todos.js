const addTodoBtn = document.getElementById('addTodo');
// Execute the following code when the window has finished loading
function initTodos() {
  createTodoStructure();
  displayTodayTodo();
}

function displayTodayTodo() {
  const newTodoContainer = document.getElementById('activeTodoContainer');

  const today = new Date();

  const todaysDate = `${today.getFullYear()}-${String(
    today.getMonth() + 1,
  ).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  const matchTodos = todos.filter(function (todo) {
    return todo.date === todaysDate;
  });
  newTodoContainer.innerHTML = ' ';

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
              createTodoStructure();
              generateCalendar(currentYear, currentMonth);
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
      editTodoTitle(todo, todoTitleElement);
    });
  }
}

function createTodoStructure(clickedDate) {
  const newTodoContainer = document.getElementById('activeTodoContainer');

  const matchTodos = clickedDate
    ? todos.filter(function (todo) {
        return todo.date === clickedDate;
      })
    : todos;
  // const matchTodos = todos.filter(function (todo) {
  //   return todo.date === clickedDate;
  // });

  newTodoContainer.innerHTML = '';
  
  const todoContainer = document.createElement('ul');
  todoContainer.setAttribute('data-cy', 'todo-list');

  for (let i = 0; i < todos.length; i++) {
    const todoTitleElement = document.createElement('li');
    const todoDateElement = document.createElement('span');
    const todoBtnContainer = document.createElement('div');
    const deleteTodoBtn = document.createElement('button');
    const editTodoBtn = document.createElement('button');

    todoContainer.setAttribute('id', 'todo-' + todos[i].id);
    todoTitleElement.classList.add('todoTitle');
    todoDateElement.classList.add('todoDate');
    todoBtnContainer.classList.add('todoBtns');

    deleteTodoBtn.setAttribute('data-cy', 'delete-todo-button');
    deleteTodoBtn.textContent = 'Delete';

    editTodoBtn.setAttribute('data-cy', 'edit-todo-button');
    editTodoBtn.textContent = 'Edit';

    let todo = todos[i];

    todoDateElement.textContent = ' - ' + todo.date;
    
    // Create a text node for the title and append it to the todoTitleElement
    const todoTitleTextNode = document.createTextNode(todo.title);
    todoTitleElement.appendChild(todoTitleTextNode);
    todoTitleElement.appendChild(todoDateElement);
    todoTitleElement.appendChild(todoBtnContainer);
    todoBtnContainer.appendChild(deleteTodoBtn);
    todoBtnContainer.appendChild(editTodoBtn);
    todoContainer.appendChild(todoTitleElement);

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
              createTodoStructure();
              generateCalendar(currentYear, currentMonth);
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
      editTodoTitle(todo, todoTitleElement);
    });

  }
  newTodoContainer.appendChild(todoContainer);

}

function editTodoTitle(todo, todoTitleElement) {
    // Set the todo title to be editable and focus on it
    todoTitleElement.setAttribute('contenteditable', 'true');
    todoTitleElement.focus();
  
    // Create and add the save button
    const saveButton = document.createElement('button');
    saveButton.innerText = 'Save';
    saveButton.addEventListener('click', function() {
      saveTodoTitle(todo, todoTitleElement, saveButton, todo.date);
    });
    todoTitleElement.after(saveButton);
  }

  function saveTodoTitle(todo, todoTitleElement, saveButton, date) {
    // Update the todo title and remove the save button
    const newTitle = todoTitleElement.firstChild.nodeValue;
    if (newTitle !== null) {
      todo.title = newTitle;
      todoTitleElement.removeAttribute('contenteditable');
      saveButton.remove();
      createTodoStructure(date);
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
    id: todos.length,
  };
  todos.push(newTodo);
  createTodoStructure();
  // displayTodayTodo();
  generateCalendar(currentYear, currentMonth);


}