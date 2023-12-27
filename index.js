const inputText = document.querySelector("#inputText");
const submit = document.querySelector("#submit");
const todoList = document.querySelector("#list")

submit.addEventListener('click', () => {
  const todo = createTodoItem(inputText.value);
  putItemInList(todo);
  clearInput();
})

function createTodoItem(t){
  const id = getRandomId();
  const todo = `
    <li class="list-group-item d-flex justify-content-between align-items-center" id="${id}">
      <span class="text-break">
        ${t}
      </span>
      <button type="button" class="btn btn-danger delete-btn" onclick="deleteTodo('${id}')">Delete</button>
    </li>
  `
  return todo
}

function putItemInList(todo) {
  todoList.insertAdjacentHTML('afterbegin', todo)
}

function clearInput() {
  inputText.value = ''
}

function getRandomId() {
  return Math.random().toString(36).substring(2, 8).replace(/\d/g, 'a');
  ;
}

function deleteTodo(id) {
  document.querySelector(`#${id}`).remove();
}