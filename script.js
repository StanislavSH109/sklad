function getText() {
    const titleElement = document.createElement('h1');
    titleElement.textContent = 'Добавить запись';
    titleElement.classList.add('form__title');
    return titleElement;
}

function createInputsElements(type, name, placeholder, id, required) {
    let inputElement = document.createElement('input');
    inputElement.type = type;
    inputElement.name = name;
    inputElement.id = id;
    inputElement.placeholder = placeholder;
    inputElement.required = required;

    if(type == 'number') {
        inputElement.min = '0';
    }

    return inputElement;
} 

function createContainer() {
    const containerElement = document.createElement('div');
    containerElement.classList.add('container');
    return containerElement;
}

function createForm() {
    const formElement = document.createElement('form');
    formElement.classList.add('form');
    return formElement;
}

function buttonCreateWrite() {
    const buttonCreate = document.createElement('button');
    buttonCreate.textContent = 'Создать запись';
    buttonCreate.classList.add('form__button-create');
    return buttonCreate;
}

function addItem() {
    const appElement = document.querySelector('.add-app');
    const containerElement = createContainer();
    const titleElement = getText();
    const formElement = createForm();
    const buttonAdd = document.querySelector('.button-add');
    const buttonCreate = buttonCreateWrite();

    let nameInputElement = createInputsElements('text', 'item-name', 'Название', 'item', 'required');
    let shelfInputElement = createInputsElements('text', 'shelf-number', 'Полка', 'shelf', 'required');
    let weightInputElement = createInputsElements('number', 'weight-item', 'Вес', 'weight', 'required');
    let dateInputElement = createInputsElements('date', 'date-item', 'Дата назначения', 'date', 'required');

    buttonAdd.addEventListener('click', (e) => {
        e.preventDefault();
        const tableElement = document.querySelector('.table-section');
        tableElement.classList.add('table-section-none');
        appElement.append(containerElement);
    });

    buttonCreate.addEventListener('click', (e) => {
        createStorageItems();
    });

    containerElement.append(titleElement, formElement);
    formElement.append(nameInputElement, shelfInputElement, weightInputElement, dateInputElement, buttonCreate);
    renderTable();
}

function createStorageItems() {
  const name = document.querySelector('#item').value;
  const shelf = document.querySelector('#shelf').value;
  const weight = document.querySelector('#weight').value;
  const date = document.querySelector('#date').value;
  
  let existItems = JSON.parse(localStorage.getItem('items')) || [];

  let items = {
    name,
    shelf,
    weight,
    date
  }

  existItems.push(items);
  localStorage.setItem('items', JSON.stringify(existItems));

}

function renderTable() {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    const itemsTableBody = document.querySelector('#sklad-tbody');

    itemsTableBody.innerHTML = '';
    items.forEach((item) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.shelf}</td>
            <td>${item.weight}</td>
            <td>${item.date}</td>
            <td><button class="form__button-remove">Удалить</button></td>
        
        `;
        itemsTableBody.appendChild(row);
    });

}

document.addEventListener('DOMContentLoaded', function () {
    addItem();
})

