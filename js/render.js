import { removeItem } from "./remove.js";
import { sort } from "./sort.js";

// Отрисовка таблицы
export function renderTable() {
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
    sort();
}