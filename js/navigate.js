import { addItem } from "./addItem.js";
import { enterApp } from "./enter.js";
import { skladApp } from "./sklad.js";
import { getLoader } from "./components.js";

export function navigate(appElement) {
    const mainElement = document.querySelector('.main');
    mainElement.innerHTML = '';

    const loaderElement = getLoader();
    mainElement.append(loaderElement);

    switch(appElement) {
        case 'sklad':
            skladApp();
            break
        case 'add':
            addItem();
            break
        default:
            enterApp();
            loaderElement.remove();
            break
    }
}