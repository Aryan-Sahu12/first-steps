
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const completedList = document.getElementById('completed-list');

function addTodo() {
  const task = input.value.trim();
  if (task === '') {
    alert('Please enter a task');
    return;
  }

  const li = document.createElement('li');
  li.textContent = task;

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.className = 'delete-btn';
  delBtn.onclick = function () {
    todoList.removeChild(li);
  };

  const compBtn = document.createElement('button');
  compBtn.textContent = 'Mark as Complete';
  compBtn.className = 'complete-btn';
  compBtn.onclick = function () {
    todoList.removeChild(li);
    li.removeChild(compBtn);
    const completedLi = document.createElement('li');
    completedLi.textContent = task;
    completedList.append(completedLi);
    const delBtn2 = document.createElement('button');
    delBtn2.textContent = 'Delete';
    delBtn2.className = 'delete-btn';
    delBtn2.onclick = function () {
        completedList.removeChild(completedLi);
    };
    completedLi.append(delBtn2);
  };

  li.appendChild(compBtn);
  li.appendChild(delBtn);
  todoList.appendChild(li);
  input.value = '';
  input.focus();
}

addBtn.addEventListener('click', addTodo);
input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') addTodo();
});








