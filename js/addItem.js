import * as components from "./components.js";
import { createStorageItems } from "./storage.js";
import { renderTable } from "./render.js";
import { getText } from "./title.js";

// Main
export function addItem() {
    const appElement = document.querySelector('.add-app');
    const containerElement = components.createContainer();
    const titleElement = getText();
    const formElement = components.createForm();
    const buttonAdd = document.querySelector('.button-add');
    const buttonCreateElement = components.buttonCreate('Добавить запись');
    const buttonToMain = components.buttonCreate('На главную');

    let nameInputElement = components.createInputsElements('text', 'item-name', 'Название', 'item', 'required');
    let shelfInputElement = components.createInputsElements('text', 'shelf-number', 'Полка', 'shelf', 'required');
    let weightInputElement = components.createInputsElements('number', 'weight-item', 'Вес', 'weight', 'required');
    let dateInputElement = components.createInputsElements('date', 'date-item', 'Дата назначения', 'date', 'required');

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
    formElement.append(nameInputElement, shelfInputElement, weightInputElement, dateInputElement, buttonCreateElement, buttonToMain);
    renderTable();
}

