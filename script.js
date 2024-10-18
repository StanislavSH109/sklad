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

function buttonCreateWrite(text) {
    const buttonCreate = document.createElement('button');
    buttonCreate.textContent = text;
    buttonCreate.classList.add('form__button-create');
    return buttonCreate;
}

function addItem() {
    const appElement = document.querySelector('.add-app');
    const containerElement = createContainer();
    const titleElement = getText();
    const formElement = createForm();
    const buttonAdd = document.querySelector('.button-add');
    const buttonCreate = buttonCreateWrite('Создать запись');


    let nameInputElement = createInputsElements('text', 'item-name', 'Название', 'item', 'required');
    let shelfInputElement = createInputsElements('text', 'shelf-number', 'Полка', 'shelf', 'required');
    let weightInputElement = createInputsElements('number', 'weight-item', 'Вес', 'weight', 'required');
    let dateInputElement = createInputsElements('date', 'date-item', 'Дата назначения', 'date', 'required');

    buttonAdd.addEventListener('click', function (e) {
        e.preventDefault();
        const tableElement = document.querySelector('.table-section');
        tableElement.classList.add('table-section-none');
        appElement.append(containerElement);
    });

    containerElement.append(titleElement, formElement);
    formElement.append(nameInputElement, shelfInputElement, weightInputElement, dateInputElement, buttonCreate);

}



document.addEventListener('DOMContentLoaded', function () {
    addItem();
})

