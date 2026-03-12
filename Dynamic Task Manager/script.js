let tasks = [];

// ADD TASK
document.getElementById('addTaskButton').addEventListener('click', function () {

  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    tasks.push({ text: taskText, completed: false });
    taskInput.value = '';
    renderTasks();
  }

});


// RENDER TASKS
function renderTasks() {

  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  // Empty state
  if (tasks.length === 0) {
    const emptyMessage = document.createElement('li');
    emptyMessage.textContent = "No tasks available";
    emptyMessage.style.listStyle = "none";
    taskList.appendChild(emptyMessage);
    return;
  }

  tasks.forEach((task, index) => {

    const li = document.createElement('li');
    li.dataset.index = index;

    if (task.completed) {
      li.style.textDecoration = "line-through";
      li.style.opacity = "0.6";
    }

    li.textContent = task.text;

    // DELETE BUTTON
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add("delete-btn");
   

    // COMPLETE BUTTON
    const completeButton = document.createElement('button');
    completeButton.textContent = task.completed ? '✔' : 'Complete';
    completeButton.classList.add("complete-btn");
    li.appendChild(deleteButton);
    li.appendChild(completeButton);
    taskList.appendChild(li);

  });
}


// EVENT DELEGATION
document.getElementById("taskList").addEventListener("click", function (e) {

  const li = e.target.closest("li");
  if (!li) return;

  const index = li.dataset.index;

  // DELETE TASK
  if (e.target.classList.contains("delete-btn")) {
    tasks.splice(index, 1);
    renderTasks();
    return;
  }

  // COMPLETE TOGGLE
  if (e.target.classList.contains("complete-btn")) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
  }

});


// LOAD FROM LOCAL STORAGE
if (localStorage.getItem('tasks')) {
  tasks = JSON.parse(localStorage.getItem('tasks'));
  renderTasks();
}


// SAVE BEFORE REFRESH
window.addEventListener('beforeunload', function () {
  localStorage.setItem('tasks', JSON.stringify(tasks));
});