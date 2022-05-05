const form = document.getElementById("form");
const input = document.getElementById("input");
const todo_list = document.getElementById("todo_list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo() {
  const todo = input.value;
  if (todo) {
    const todoLi = document.createElement("li");
    todoLi.innerHTML = todo;
    todo_list.appendChild(todoLi);
    input.value = "";
    todoLi.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todoLi.remove();
      updateList();
    });

    todoLi.addEventListener("click", () => {
      todoLi.classList.toggle("completed");
      updateList();
    });
    updateList();
  }
}
function updateList() {
  const todoList = document.querySelectorAll("li");
  const todoArr = [];
  todoList.forEach((todoLi) => {
    todoArr.push({
      text: todoLi.innerHTML,
      completed: todoLi.classList.contains("completed"),
    });
  });
  localStorage.setItem("todoArr", JSON.stringify(todoArr));
}
