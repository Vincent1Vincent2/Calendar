const addTodoBtn = document.getElementById('addTodo');
// Execute the following code when the window has finished loading
function initTodos() {
  createTodoStructure();
}

function createTodoStructure() {
  const newTodoContainer = document.getElementById('activeTodoContainer');

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

    todoTitleElement.textContent = todo.title;
    todoDateElement.textContent = ' - ' + todo.date;
    
    // todoTitleElement.textContent = todo.title;
    // todoDateElement.textContent = todo.date;

    todoTitleElement.appendChild(todoDateElement);
    todoTitleElement.appendChild(todoBtnContainer);
    todoBtnContainer.appendChild(deleteTodoBtn);
    todoBtnContainer.appendChild(editTodoBtn);
    // todoContainer.appendChild(todoDateElement);
    // todoTitleElement.appendChild(todoDateElement);

    todoContainer.appendChild(todoTitleElement);

    deleteTodoBtn.addEventListener('click', function () {
      todos.splice(i, 1);
      createTodoStructure();

      generateCalendar(currentYear, currentMonth);
    });

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
      saveTodoTitle(todo, todoTitleElement, saveButton);
    });
    todoTitleElement.after(saveButton);
  }

  function saveTodoTitle(todo, todoTitleElement, saveButton) {
    // Update the todo title and remove the save button
    const newTitle = todoTitleElement.innerText;
    if (newTitle !== null) {
      todo.title = newTitle;
      todoTitleElement.removeAttribute('contenteditable');
      saveButton.remove();
      createTodoStructure();
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

  generateCalendar(currentYear, currentMonth);


}
