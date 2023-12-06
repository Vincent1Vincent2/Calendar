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
    todoTitleElement.classList.add = 'todoTitle';
    todoDateElement.classList.add('todoDate');
    todoBtnContainer.classList.add('todoBtns');

    deleteTodoBtn.setAttribute('data-cy', 'delete-todo-button');
    deleteTodoBtn.textContent = 'Delete';

    editTodoBtn.setAttribute('data-cy', 'edit-todo-button');
    editTodoBtn.textContent = 'Edit';

    let title = todos[i]['title'];
    let date = todos[i]['date'];

    todoTitleElement.textContent = title;
    todoDateElement.textContent = date;

    newTodoContainer.appendChild(todoContainer);
    todoContainer.appendChild(todoTitleElement);
    todoContainer.appendChild(todoDateElement);
    todoContainer.appendChild(todoBtnContainer);
    todoBtnContainer.appendChild(deleteTodoBtn);
    todoTitleElement.appendChild(editTodoBtn);

    deleteTodoBtn.addEventListener('click', function () {
      todos.splice(i, 1);
      createTodoStructure();
    });
    editTodoBtn.addEventListener('click', function () {
        editTodoTitle(i, todoTitleElement);
    });
  }
}

// Funktion redigera titeln todo
function editTodoTitle(index, titleElement) {
    const newTitle = prompt('Edit Todo Title:', titleElement.textContent); // Pop-up prompt med ny titel, använder den nuvarande titels dom standardvärd
    // Kontrollera om användaren klickat på cancel eller om ny titel är empty
    if (newTitle !== null && newTitle.trim() !== '') {
      titleElement.textContent = newTitle; // Uppdaterar textinnehållet i todo med nya titeln
      todos[index].title = newTitle; // Uppdaterar arrayen med nya titeln på rätt plats
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

//   todoTitleInput.value = '';

}

// Add an event listener to the form to handle todo submission
/* form.addEventListener('submit', event => {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the todo-task and selected date form input-field

  // Create a new task element as todo
  const taskElement = document.createElement('div');
  taskElement.classList.add('task');

  // Create a content element to hold the task details
  const taskContentElement = document.createElement('div');
  taskContentElement.classList.add('content');

  taskElement.appendChild(taskContentElement); // Append the content element to the task element

  // Create an input element to display the task text
  const taskInputElement = document.createElement('input');
  taskInputElement.classList.add('text');
  taskInputElement.type = 'text';
  taskInputElement.value = task + ' - ' + selectedDate; // Combines task and date
  taskInputElement.setAttribute('readonly', 'readonly'); // Makes the input readonly

  taskContentElement.appendChild(taskInputElement); // Append the input element to the content element

  // Create action element to hold edit and delete-buttons
  const taskActionsElement = document.createElement('div');
  taskActionsElement.classList.add('actions');

  // Create an edit-button
  const taskEditElement = document.createElement('button');
  taskEditElement.classList.add('edit');
  taskEditElement.setAttribute('data-cy', 'edit-todo-button');
  taskEditElement.innerHTML = 'Edit';

  // Create an delete-button
  const taskDeleteElement = document.createElement('button');
  taskDeleteElement.classList.add('delete');
  taskDeleteElement.setAttribute('data-cy', 'delete-todo-button');
  taskDeleteElement.innerHTML = 'Delete';

  // Append edit and delete buttons to the actions element
  taskActionsElement.appendChild(taskEditElement);
  taskActionsElement.appendChild(taskDeleteElement);

  // Append the actions element to the task element
  taskElement.appendChild(taskActionsElement);

  // Append the task element to the list container
  listElement.appendChild(taskElement);

  // Clears the input field
  todoTitleInput.value = '';

  // Add event listener for edit button click
  taskEditElement.addEventListener('click', () => {
    // Toggle between editing and saving mode
    if (taskEditElement.innerText.toLowerCase() == 'edit') {
      taskInputElement.removeAttribute('readonly'); // Allows editing
      taskInputElement.focus(); // Set focus to the input
      taskEditElement.innerText = 'Save'; // Change button text to "Save"
    } else {
      taskInputElement.setAttribute('readonly', 'readonly'); // Make input readonly
      taskEditElement.innerText = 'Edit'; // Change button text back to "Edit"
    }
  });


 */
