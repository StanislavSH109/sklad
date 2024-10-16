function getText() {
    const titleElement = document.createElement('h1');
    titleElement.textContent = 'Добавить запись';
    titleElement.classList.add('form__title');
    return titleElement
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

    // let nameInput = document.createElement('')

    buttonAdd.addEventListener('click', function (e) {
        e.preventDefault();
        const tableElement = document.querySelector('.table-section');
        tableElement.classList.add('table-section-none');
    });

    containerElement.append(titleElement, formElement);
    appElement.append(containerElement, );

}

document.addEventListener('DOMContentLoaded', function (e) {
    addItem();
})

