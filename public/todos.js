const todoTitleInput = document.querySelector('[data-cy="todo-title-input"]');
const todoList = document.querySelector('[data-cy="todo-list"]');
const submitTodoButton = document.querySelector('[data-cy="save-todo-button"]');

submitTodoButton.addEventListener('click', function(event){
    event.preventDefault();

    addItem(todoTitleInput.value);
    todoTitleInput.value = "";
})

let addItem = (todoTextInput) => {
    console.log('Adding item:', todoTextInput);
    let listItem = document.createElement("li");
    listItem.innerHTML = `${todoTextInput}<i></i>`;

    listItem.addEventListener('click', function() {
        this.classList.toggle("done");
    });

    listItem.querySelector("i").addEventListener("click", function() {
        listItem.remove();
    })

    todoList.appendChild(listItem);
}