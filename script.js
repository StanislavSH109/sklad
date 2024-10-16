function createContainer() {
    const containerElement = document.createElement('div');
    containerElement.classList.add('container');
    return containerElement
}

function createForm() {
    const formContainer = createContainer();
    const formElement = document.createElement('form');
    
}


function addItem() {
    const buttonAdd = document.querySelector('.button-add');

    buttonAdd.addEventListener('click', function (e) {
        e.preventDefault();
        const tableElement = document.querySelector('.table-section');
        tableElement.classList.add('table-section-none');
    });
}

document.addEventListener('DOMContentLoaded', function () {
    addItem();
});