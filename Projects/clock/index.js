// Add a completed flag
let todos = [
  { id: 1, task: "Learn JavaScript", completed: false },
  { id: 2, task: "Build a project", completed: false },
  { id: 3, task: "Practice coding", completed: false }
];

// Function to render todos
function renderTodos() {
  const list = document.getElementById("todoList");
  list.innerHTML = "";
  todos.forEach(todo => {
    const li = document.createElement("li");
    li.innerHTML = `<span style="text-decoration:${todo.completed ? 'line-through' : 'none'}">
                      ${todo.task}
                    </span>
                    <button onclick="toggleTodo(${todo.id})">
                      ${todo.completed ? 'Undo' : 'Complete'}
                    </button>
                    <button onclick="deleteTodo(${todo.id})">Delete</button>`;
    list.appendChild(li);
  });
}

// Toggle completed
function toggleTodo(id) {
  todos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
  renderTodos();
}

// Add new todo remains the same
function addTodo() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();
  if (task === "") return;
  todos.push({ id: Date.now(), task, completed: false });
  taskInput.value = "";
  renderTodos();
}

// Delete todo remains the same
function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  renderTodos();
}

// Initial render
renderTodos();
