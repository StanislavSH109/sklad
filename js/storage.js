// Получение значений и добавление в LocalStorage
export function createStorageItems() {
    const name = document.querySelector('#item').value;
    const shelf = document.querySelector('#shelf').value;
    const weight = document.querySelector('#weight').value;
    const date = document.querySelector('#date').value;
    const itemId = document.querySelector('#itemId');
    
    let existItems = JSON.parse(localStorage.getItem('items')) || [];
  
    let items = {
      name,
      shelf,
      weight,
      date,
      id: Date.now()
    }
  
    existItems.push(items);
    localStorage.setItem('items', JSON.stringify(existItems));
  
  }