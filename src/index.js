const btn = document.querySelector('.addBtn');
const list = document.querySelector('ul');
btn.addEventListener('click', onAddClick);
list.addEventListener('click', onListClick);

function onProcessInput() {
  const inputElem = document.getElementById('input');
  const value = inputElem.value.trim();
  if (!value) {
    alert('Please enter value');
    return;
  }
  const item = document.createElement('li');
  item.innerHTML = value;

  const closeIcone = document.createElement('div');
  closeIcone.innerHTML = '&#10003;';
  closeIcone.className = 'closeIcon';
  item.appendChild(closeIcone);

  const list = document.getElementById('list');
  inputElem.value = '';
  list.append(item);
}

function onAddClick() {
  onProcessInput();
}

function onKeyPress() {
  if (event.keyCode === 13) {
    onAddClick();
  }
}

function onListClick() {
  const target = event.target;
  if (target.className === 'closeIcon') {
    const parent = target.parentNode;
    list.removeChild(parent);
  } else {
    target.classList.toggle('select');
  }
}
