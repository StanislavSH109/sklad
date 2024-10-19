// Удаление записи из таблицы
function removeItem(index) {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    console.log(items);
    items.splice(index, 1);

    localStorage.setItem('items', JSON.stringify(items));
    renderTable();
}
