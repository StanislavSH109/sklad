import { renderTable } from "./render.js";
import { createContainer } from "./components.js";
import { createForm } from "./components.js";
import { buttonCreate } from "./components.js";
import { getText } from "./title.js";

// Main
export function addItem() {
    const appElement = document.querySelector('.add-app');
    const containerElement = createContainer();
    const titleElement = getText();
    const formElement = createForm();
    const buttonAdd = document.querySelector('.button-add');
    const buttonCreateElement = buttonCreate('Добавить запись');
    const buttonToMain = buttonCreate('На главную');

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

    buttonCreateElement.addEventListener('click', (e) => {
        createStorageItems();
    });

    buttonToMain.addEventListener('click', () => {
        appElement.innerHTML = '';
        const tableElement = document.querySelector('.table-section');
        tableElement.classList.remove('table-section-none');
    });

    containerElement.append(titleElement, formElement);
    formElement.append(nameInputElement, shelfInputElement, weightInputElement, dateInputElement, buttonCreate, buttonToMain);
    renderTable();
}

