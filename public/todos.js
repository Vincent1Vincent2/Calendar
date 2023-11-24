const todoTitleInput = document.querySelector('[data-cy="todo-title-input"]');
const todoList = document.querySelector('[data-cy="todo-list"]');
const submitTodoButton = document.querySelector('[data-cy="save-todo-button"]');
let dateSelector = document.getElementById('chooseTodoDate');

submitTodoButton.addEventListener('click', function (event) {
  event.preventDefault();

  let selectedDate = dateSelector.value;
  addItem(todoTitleInput.value, selectedDate);
  todoTitleInput.value = '';
});

let addItem = (todoTextInput, selectedDate) => {
  let listItem = document.createElement('li');
  listItem.innerHTML = `${todoTextInput} - ${selectedDate}<i></i>`;

  listItem.addEventListener('click', function () {
    this.classList.toggle('done');
  });

  listItem.querySelector('i').addEventListener('click', function () {
    listItem.remove();
  });

  todoList.appendChild(listItem);
};
