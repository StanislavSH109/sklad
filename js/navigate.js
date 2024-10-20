import { getLoader } from "./components.js";

export async function navigate(appElement) {
    const mainElement = document.querySelector('.main');
    mainElement.innerHTML = '';

    const loaderElement = getLoader();
    mainElement.append(loaderElement);

    switch(appElement) {
        case 'sklad':
            const skladApp = await import("./sklad.js");
            skladApp.default();
            loaderElement.remove();
            break
        case 'add':
            const addItem = await import("./addItem.js");
            addItem.default();
            loaderElement.remove();
            break
        default:
            const enterApp = await import("./enter.js")
            enterApp.default();
            loaderElement.remove();
            break
    }
    
}