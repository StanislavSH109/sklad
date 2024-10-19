import { addItem } from "./addItem.js";
import { enterApp } from "./enter.js";
import { skladApp } from "./sklad.js";

export function navigate(appElement) {
    const mainElement = document.querySelector('.main');
    mainElement.innerHTML = '';

    const loaderElement = 


    switch(appElement) {
        case 'sklad':
            skladApp();
            break
        case 'add':
            addItem();
            break
        default:
            enterApp();
            break
    }
}