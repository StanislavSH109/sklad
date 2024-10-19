import * as components from "./components.js";
import { createStorageItems } from "./storage.js";
import { renderTable } from "./render.js";
import { getText } from "./title.js";
import { navigate } from "./navigate.js";


// Main
export function addItem() {
    const mainElement = document.querySelector('.main');
    mainElement.innerHTML = '';

    const appElement = document.createElement('div');
    appElement.classList.add('add-app');
    mainElement.append(appElement);

    const containerElement = components.createContainer();
    const titleElement = getText();
    const formElement = components.createForm();
    const buttonCreateElement = components.buttonCreate('Добавить запись');
    const buttonToMain = components.buttonCreate('На главную');

    let nameInputElement = components.createInputsElements('text', 'item-name', 'Название', 'item', 'required');
    let shelfInputElement = components.createInputsElements('text', 'shelf-number', 'Полка', 'shelf', 'required');
    let weightInputElement = components.createInputsElements('number', 'weight-item', 'Вес', 'weight', 'required');
    let dateInputElement = components.createInputsElements('date', 'date-item', 'Дата назначения', 'date', 'required');

    buttonCreateElement.addEventListener('click', (e) => {
        e.preventDefault();
        createStorageItems();
        navigate('sklad');
    });

    buttonToMain.addEventListener('click', (e) => {
        e.preventDefault();
        navigate('sklad');
    });

    containerElement.append(titleElement, formElement);
    formElement.append(nameInputElement, shelfInputElement, weightInputElement, dateInputElement, buttonCreateElement, buttonToMain);
    appElement.append(containerElement);
    renderTable();
}

