const form = document.getElementById('form');
const input = document.getElementById('input');
const list = document.getElementById('list');

form.addEventListener('submit', addTask);

function addTask(event) {
  event.preventDefault();
  const task = input.value;
  if (task !== '') {
    const li = document.createElement('li');
    li.innerHTML = task + '<span>X</span>';
    list.appendChild(li);
    input.value = '';
    const span = li.querySelector('span');
    span.addEventListener('click', removeTask);
  }
}

function removeTask(event) {
  const li = event.target.parentElement;
  list.removeChild(li);
}
