function getText() {
    const titleElement = document.createElement('h1');
    titleElement.textContent = 'Добавить запись';
    titleElement.classList.add('form__title');
    return titleElement
}

function createInputsElements(type, name, placeholder, required) {
    let inputElement = document.createElement('input');
    inputElement.type = type;
    inputElement.name = name;
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

    let nameInputElement = createInputsElements('text', 'item-name', 'Название', 'required');
    let shelfInputElement = createInputsElements('number', 'shelf-number', 'Полка', 'required');
    // let weightInputElement = createInputsElements('te')

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

