import { renderTable } from "./render.js";

// Удаление записи из таблицы
export function removeItem(index) {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    items.splice(index, 1);

    localStorage.setItem('items', JSON.stringify(items));
    renderTable();
}
