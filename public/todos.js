window.addEventListener('load', () => {
    const form = document.querySelector('.addNewTodo');
    const todoTitleInput = document.querySelector('.todoText');
    const listElement = document.querySelector('.activeTodoContainer');

    form.addEventListener('submit', (event) => {
		event.preventDefault();

		const task = todoTitleInput.value;

		const taskElement = document.createElement('div');
		taskElement.classList.add('task');

		const taskContentElement = document.createElement('div');
		taskContentElement.classList.add('content');

		taskElement.appendChild(taskContentElement);

		const taskInputElement = document.createElement('input');
		taskInputElement.classList.add('text');
		taskInputElement.type = 'text';
		taskInputElement.value = task;
		taskInputElement.setAttribute('readonly', 'readonly');

		taskContentElement.appendChild(taskInputElement);

        const taskActionsElement = document.createElement('div');
        taskActionsElement.classList.add('actions');

        const taskEditElement = document.createElement('button');
        taskEditElement.classList.add('edit');
        taskEditElement.innerHTML = 'Edit';

        const taskDeleteElement = document.createElement('button');
        taskDeleteElement.classList.add('delete');
        taskDeleteElement.innerHTML = 'Delete';

        taskActionsElement.appendChild(taskEditElement);
        taskActionsElement.appendChild(taskDeleteElement);

        taskElement.appendChild(taskActionsElement);

        listElement.appendChild(taskElement);

        todoTitleInput.value = '';

        taskEditElement.addEventListener('click', () => {
            if(taskEditElement.innerText.toLowerCase() == 'edit') {
                taskInputElement.removeAttribute('readonly');
                taskInputElement.focus();
                taskEditElement.innerText = 'Save';
            } else {
                taskInputElement.setAttribute('readonly', 'readonly');
                taskEditElement.innerText = 'Edit';
            }
        });

        taskDeleteElement.addEventListener('click', () => {
            listElement.removeChild(taskElement);
        });
	});

});


// const todoTitleInput = document.querySelector('[data-cy="todo-title-input"]');
// const todoList = document.querySelector('[data-cy="todo-list"]');
// const submitTodoButton = document.querySelector('[data-cy="save-todo-button"]');
// let dateSelector = document.getElementById('chooseTodoDate');

// submitTodoButton.addEventListener('click', function (event) {
//   event.preventDefault();

//   let selectedDate = dateSelector.value;
//   addItem(todoTitleInput.value, selectedDate);
//   todoTitleInput.value = '';
// });

// let addItem = (todoTextInput, selectedDate) => {
//   let listItem = document.createElement('li');
//   listItem.innerHTML = `
//   <div class='todo-item'>
//     <span>${todoTextInput} - ${selectedDate}</span>
//     <i class="edit-todo fas fa-trash"></i>
//     <i class="delete-todo fas fa-edit"></i>
//    </div>`;

// //    listItem.innerHTML = `
// //     <div class='todo-item'>
// //   <span>${todoTextInput} - ${selectedDate}</span>
// //   <i class="fas fa-trash"></i>
// //   <i class="fas fa-edit"></i>
// // </div>`;

//   listItem.addEventListener('click', function () {
//     this.classList.toggle('done');
//   });

//   listItem.querySelector('.delete-todo').addEventListener('click', function () {
//     listItem.remove();
//   });

//   listItem.querySelector('.edit-todo').addEventListener('click', function () {
//     console.log('Edit todo clicked')
//   });

//   todoList.appendChild(listItem);
// };
