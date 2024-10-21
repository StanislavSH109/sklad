import { renderTable } from "./render.js";

export function sort() {
    const buttonSortElement = document.querySelectorAll('.table__btn-sort');
    let existItems = JSON.parse(localStorage.getItem('items')) || [];
    
    buttonSortElement.forEach((item) => {
        item.addEventListener('click', (e) => {
            if (item.id === "name-sort") {
               existItems.sort((a, b) => a.name.localeCompare(b.name));
            }
            localStorage.setItem('items', JSON.stringify(existItems));
            renderTable();

            if (item.id === 'shelf-sort') {
                existItems.sort((a, b) => a.shelf.localeCompare(b.shelf));
            }
            localStorage.setItem('items', JSON.stringify(existItems));
            renderTable();

            if (item.id === 'weight-sort') {
                existItems.sort((a, b) => a.weight - b.weight);
            }
            localStorage.setItem('items', JSON.stringify(existItems));
            renderTable();

            if (item.id === 'time-sort') {
                existItems.sort((a, b) => new Date(a.date) - new Date(b.date));
            }
            localStorage.setItem('items', JSON.stringify(existItems));
            renderTable();
        });
        
    });
    
}

