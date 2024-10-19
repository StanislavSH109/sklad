import { navigate } from "./navigate.js";

export function enterApp() {
    const mainElement = document.querySelector('.main');
    const enterElement = document.createElement('div');
    enterElement.classList.add('enter');

    const enterButton = document.createElement('button');
    enterButton.textContent = 'Войти в приложение';
    enterButton.classList.add('enter__button');

    mainElement.append(enterElement);
    enterElement.append(enterButton);

    enterButton.addEventListener('click', (e) => {
        e.preventDefault();
        navigate('sklad');
    });

}

