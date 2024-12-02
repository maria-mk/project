var expanded = false;

// Функция для отображения или скрытия выпадающего списка чекбоксов
function showCheckboxes() {
    const checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}

// генерация фильтров
const renderFilters = () => {
    const container = document.getElementById('filter-container');
    if (!container) {
        throw new Error('#filter-container not found');
    }

    container.innerHTML = `
        <ul>
            <li>
                <button class="filter-name"><h5>ТОРГОВАЯ СЕТЬ</h5></button>
            </li>
            <li>
                <form>
                    <div class="multiselect">
                        <div class="selectBox">
                            <select>
                                <option>Выберите магазин</option>
                            </select>
                            <div class="overSelect"></div>
                        </div>
                        <div id="checkboxes">
                            ${['Перекресток', 'Ароматный Мир', 'Лента', 'Красное и Белое', 'ВинЛаб', 'Пятерочка', 'Дикси']
                                .map(
                                    (store, index) => `
                                    <label for="store-${index}">
                                        <input type="checkbox" id="store-${index}" />${store}
                                    </label>
                                `
                                )
                                .join('')}
                        </div>
                    </div>
                </form>
            </li>
            <li>
                <button class="filter-name"><h5>ЦЕНА</h5></button>
            </li>
            <li>
                <div class="price-range">
                    <input class="filter_number_button" type="number" placeholder="ОТ">
                    <input class="filter_number_button" type="number" placeholder="ДО">
                </div>
            </li>
            <li>
                <button class="filter-name"><h5>РАЗМЕР СКИДКИ</h5></button>
            </li>
            <li>
                <div class="discount-range">
                    <input class="filter_number_button" type="number" placeholder="ОТ 1%">
                    <input class="filter_number_button" type="number" placeholder="ДО 99%">
                </div>
            </li>
            <li>
                <button class="filter-name"><h5>ТИП ВИНА</h5></button>
            </li>
            <li>
                <div class="wine-type">
                    ${['Тихое', 'Игристое', 'Крепленое', 'Десертное']
                        .map(type => `<button class="filter_text_button">${type}</button>`)
                        .join('')}
                </div>
            </li>
            <li>
                <button class="filter-name"><h5>ЦВЕТ ВИНА</h5></button>
            </li>
            <li>
                <div class="wine-color">
                    ${['Белое', 'Красное', 'Розовое', 'Оранжевое']
                        .map(color => `<button class="filter_text_button">${color}</button>`)
                        .join('')}
                </div>
            </li>
            <li>
                <button class="filter-name"><h5>СОДЕРЖАНИЕ САХАРА</h5></button>
            </li>
            <li>
                <div class="sugar-content">
                    ${['Сухое', 'Полусухое', 'Полусладкое', 'Сладкое']
                        .map(sugar => `<button class="filter_text_button">${sugar}</button>`)
                        .join('')}
                </div>
            </li>
        </ul>
    `;
};


const initializeEventHandlers = () => {
    // Добавляем обработчик на selectBox
    const selectBox = document.querySelector('.selectBox');
    if (selectBox) {
        selectBox.addEventListener('click', showCheckboxes);
    }


    const filterContainer = document.getElementById('filter-container');
    if (filterContainer) {
        filterContainer.addEventListener('click', function (event) {
            if (event.target.classList.contains('filter_text_button')) {
                console.log('Кнопка нажата:', event.target.textContent); 
                event.target.classList.toggle('filter_button--color-active'); 
                console.log('Текущие классы:', event.target.className); 
            }
        });
    }
};


document.addEventListener('DOMContentLoaded', function () {
    renderFilters(); // Генерируем фильтры
    initializeEventHandlers(); // Подключаем обработчики событий
});
