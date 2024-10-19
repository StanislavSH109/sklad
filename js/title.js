// Создание заголовка для формы
function getText() {
    const titleElement = document.createElement('h1');
    titleElement.textContent = 'Добавить запись';
    titleElement.classList.add('form__title');
    return titleElement;
}