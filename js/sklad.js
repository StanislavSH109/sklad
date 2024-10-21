import { navigate } from "./navigate.js";
import { renderTable } from "./render.js";

export default function skladApp() {
    const mainElement = document.querySelector('.main');
    const sectionElement = document.createElement('section');
    sectionElement.classList.add('table-section');
    sectionElement.innerHTML = `
        <div class="container">
            <div class="wrapper">
                <h2 class="title">Полка товаров</h2>
                <button class="button-add">Добавить</button>
            </div>
            <table class="table" id="table">
                <thead class="table-head">
                    <tr>
                        <th><button class="table__btn-sort" id="name-sort">Название</button></th>
                        <th><button class="table__btn-sort" id="shelf-sort">Полка</button></th>
                        <th><button class="table__btn-sort" id="weight-sort">Вес</button></th>
                        <th><button class="table__btn-sort" id="time-sort">Время Хранения</button></th>
                    </tr>
                </thead>
                <tbody class="sklad-tbody" id="sklad-tbody">

                </tbody>
            </table>
        </div>
    `

   
    mainElement.append(sectionElement);

    const buttonAdd = document.querySelector('.button-add');
    buttonAdd.addEventListener('click', (e) => {
        navigate('add');
    });

    renderTable();

    return sectionElement;
}

