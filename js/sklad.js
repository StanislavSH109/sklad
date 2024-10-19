import { navigate } from "./navigate.js";

export function skladApp() {
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
                        <th>Название</th>
                        <th>Полка</th>
                        <th>Вес</th>
                        <th>Время Хранения</th>
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

    return sectionElement;
}

