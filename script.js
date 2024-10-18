function getText() {
    const titleElement = document.createElement('h1');
    titleElement.textContent = 'Добавить запись';
    titleElement.classList.add('form__title');
    return titleElement
}

function createInputsElements(type, name, placeholder, id, required) {
    let inputElement = document.createElement('input');
    inputElement.type = type;
    inputElement.name = name;
    inputElement.id = id;
    inputElement.placeholder = placeholder;
    inputElement.required = required;
    return inputElement
} 

function createContainer() {
    const containerElement = document.createElement('div');
    containerElement.classList.add('container');
    return containerElement
}

function createForm() {
    const formElement = document.createElement('form');
    formElement.classList.add('form');
    return formElement;
}

function addItem() {
    const appElement = document.querySelector('.add-app');
    const containerElement = createContainer();
    const titleElement = getText();
    const formElement = createForm();
    const buttonAdd = document.querySelector('.button-add');

    let nameInputElement = createInputsElements('text', 'item-name', 'Название', 'item', 'required');
    let shelfInputElement = createInputsElements('text', 'shelf-number', 'Полка', 'shelf', 'required');
    let weightInputElement = createInputsElements('')

    buttonAdd.addEventListener('click', function (e) {
        e.preventDefault();
        const tableElement = document.querySelector('.table-section');
        tableElement.classList.add('table-section-none');
        appElement.append(containerElement);
    });

    containerElement.append(titleElement, formElement);
    formElement.append(nameInputElement, shelfInputElement);

}

document.addEventListener('DOMContentLoaded', function () {
    addItem();
})

