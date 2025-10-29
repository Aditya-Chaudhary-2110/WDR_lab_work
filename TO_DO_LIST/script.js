const input = document.getElementById("text_field");
const list = document.getElementById("unordered_task");
const mainInputDiv = document.getElementById("main_input");

// create a small paragraph for messages
const message = document.createElement("p");
message.style.color = "red";
message.style.marginTop = "8px";
mainInputDiv.appendChild(message);

function addTask() {
  const text = input.value.trim();

  // show message if empty input
  if (text === "") {
    message.textContent = "Please enter a task before adding!";
    return;
  } else {
    message.textContent = ""; // clear message
  }

  let index = Date.now();

  // create a div in which we can add the list and button
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task-item");
  taskDiv.dataset.id = index;
  taskDiv.style.display = "flex";
  taskDiv.style.alignItems = "center";
  taskDiv.style.gap = "10px";

  // create list item
  const li = document.createElement("li");
  li.classList.add("list");
  li.dataset.id = index;

  // text span
  const span = document.createElement("span");
  span.textContent = text;
  span.classList.add("task-text");

  // mark done button
  const markBtn = document.createElement("button");
  markBtn.textContent = "Done";
  markBtn.classList.add("mark_btn");
  markBtn.dataset.id = index;

  markBtn.addEventListener("click", () => {
    if (markBtn.dataset.id == li.dataset.id) {
      li.classList.toggle("completed");
    }
  });

  // delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.classList.add("delete_btn");
  delBtn.dataset.id = index;

  delBtn.addEventListener("click", () => {
    if (delBtn.dataset.id == li.dataset.id) {
      taskDiv.remove();
    }
  });

  // append span and buttons inside list item
  li.append(span);
  taskDiv.append(li, markBtn, delBtn);

  // add list item to unordered list
  list.appendChild(taskDiv);

  // clear input
  input.value = "";
}
