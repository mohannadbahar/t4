document.getElementById('taskForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    addTask(taskText);
    taskInput.value = '';
  }
});

function addTask(taskText) {
  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');
  li.textContent = taskText;
  taskList.appendChild(li);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete';
  li.appendChild(deleteButton);

  deleteButton.addEventListener('click', function() {
    li.remove();
  });
}
