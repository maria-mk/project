import { getLogoTemplate } from './icons';
import { getGeoTemplate } from './icons';
import { getPersonTemplate } from './icons';
import { getSearchTemplate } from './icons';

function loadHeader() {
    const headerHTML = `
        <header class="header">
            <div class="header-content">
                <div style="margin-left: 35px; margin-right: 10px;">${getLogoTemplate()}</div>
                <h2 class="logo"><a href="/">NaVino</a></h2>
                <ul class="header-navigation">
                    <li>
                        <div style="position: relative; width: 100%;">
                            <input type="text" class="search" placeholder="Chateau Tamagne" style="padding-left: 40px;">
                            <div class="search-icon" style="position: absolute; left: 15px; top: 50%; transform: translateY(-50%); width: 20px; height: 20px;">${getSearchTemplate()}</div>
                        </div>
                    </li>
                    <li> ${getGeoTemplate()}
                        <select class="option">
                        <option>Москва</option>
                        <option selected>Санкт-Петербург</option>
                        </select>
                    </li> 
                    <li>
                        ${getPersonTemplate()}
                        <a href="#">Войти</a>
                    </li>                     
                </ul>
            </div>
        </header>
    `;
    document.getElementById('header-container').innerHTML = headerHTML; // Вставляем заголовок в контейнер
}

loadHeader(); // Вызываем функцию для загрузки заголовка