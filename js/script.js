function addItem() {
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

function renderTable() {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    const itemsTableBody = document.querySelector('#sklad-tbody');

    itemsTableBody.innerHTML = '';
    items.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.shelf}</td>
            <td>${item.weight}</td>
            <td>${item.date}</td>
            <td><button class="form__button-remove">Удалить</button></td>
        
        `;
        itemsTableBody.appendChild(row);

        row.querySelector('.form__button-remove').addEventListener('click', (e) => {
            removeItem(index);
        })
    });

}

function removeItem(index) {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    console.log(items);
    items.splice(index, 1);

    localStorage.setItem('items', JSON.stringify(items));
    renderTable();
}



document.addEventListener('DOMContentLoaded', function () {
    addItem();
})

