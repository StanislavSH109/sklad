// Создание input полей
export function createInputsElements(type, name, placeholder, id, required) {
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

// Создание контейнера
export function createContainer() {
    const containerElement = document.createElement('div');
    containerElement.classList.add('container');
    return containerElement;
}


// Создание формы
export function createForm() {
    const formElement = document.createElement('form');
    formElement.classList.add('form');
    return formElement;
}

// Создание кнопки
export function buttonCreate(text) {
    const buttonCreate = document.createElement('button');
    buttonCreate.textContent = text;
    buttonCreate.classList.add('form__button-create');
    return buttonCreate;
}