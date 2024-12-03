var t=!1;function u(){let u=document.getElementById("checkboxes");t?(u.style.display="none",t=!1):(u.style.display="block",t=!0)}const e=()=>{let t=document.getElementById("filter-container");if(!t)throw Error("#filter-container not found");t.innerHTML=`
        <ul>
            <li>
                <button class="filter-name"><h5>\u{422}\u{41E}\u{420}\u{413}\u{41E}\u{412}\u{410}\u{42F} \u{421}\u{415}\u{422}\u{42C}</h5></button>
            </li>
            <li>
                <form>
                    <div class="multiselect">
                        <div class="selectBox">
                            <select>
                                <option>\u{412}\u{44B}\u{431}\u{435}\u{440}\u{438}\u{442}\u{435} \u{43C}\u{430}\u{433}\u{430}\u{437}\u{438}\u{43D}</option>
                            </select>
                            <div class="overSelect"></div>
                        </div>
                        <div id="checkboxes">
                            ${["Перекресток","Ароматный Мир","Лента","Красное и Белое","ВинЛаб","Пятерочка","Дикси"].map((t,u)=>`
                                    <label for="store-${u}">
                                        <input type="checkbox" id="store-${u}" />${t}
                                    </label>
                                `).join("")}
                        </div>
                    </div>
                </form>
            </li>
            <li>
                <button class="filter-name"><h5>\u{426}\u{415}\u{41D}\u{410}</h5></button>
            </li>
            <li>
                <div class="price-range">
                    <input class="filter_number_button" type="number" placeholder="\u{41E}\u{422}">
                    <input class="filter_number_button" type="number" placeholder="\u{414}\u{41E}">
                </div>
            </li>
            <li>
                <button class="filter-name"><h5>\u{420}\u{410}\u{417}\u{41C}\u{415}\u{420} \u{421}\u{41A}\u{418}\u{414}\u{41A}\u{418}</h5></button>
            </li>
            <li>
                <div class="discount-range">
                    <input class="filter_number_button" type="number" placeholder="\u{41E}\u{422} 1%">
                    <input class="filter_number_button" type="number" placeholder="\u{414}\u{41E} 99%">
                </div>
            </li>
            <li>
                <button class="filter-name"><h5>\u{422}\u{418}\u{41F} \u{412}\u{418}\u{41D}\u{410}</h5></button>
            </li>
            <li>
                <div class="wine-type">
                    ${["Тихое","Игристое","Крепленое","Десертное"].map(t=>`<button class="filter_text_button">${t}</button>`).join("")}
                </div>
            </li>
            <li>
                <button class="filter-name"><h5>\u{426}\u{412}\u{415}\u{422} \u{412}\u{418}\u{41D}\u{410}</h5></button>
            </li>
            <li>
                <div class="wine-color">
                    ${["Белое","Красное","Розовое","Оранжевое"].map(t=>`<button class="filter_text_button">${t}</button>`).join("")}
                </div>
            </li>
            <li>
                <button class="filter-name"><h5>\u{421}\u{41E}\u{414}\u{415}\u{420}\u{416}\u{410}\u{41D}\u{418}\u{415} \u{421}\u{410}\u{425}\u{410}\u{420}\u{410}</h5></button>
            </li>
            <li>
                <div class="sugar-content">
                    ${["Сухое","Полусухое","Полусладкое","Сладкое"].map(t=>`<button class="filter_text_button">${t}</button>`).join("")}
                </div>
            </li>
        </ul>
    `},l=()=>{let t=document.querySelector(".selectBox");t&&t.addEventListener("click",u);let e=document.getElementById("filter-container");e&&e.addEventListener("click",function(t){t.target.classList.contains("filter_text_button")&&(console.log("Кнопка нажата:",t.target.textContent),t.target.classList.toggle("filter_button--color-active"),console.log("Текущие классы:",t.target.className))})};document.addEventListener("DOMContentLoaded",function(){e(),l()});