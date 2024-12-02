function loadNav() {
    const navHTML = `
        <div class="container nav-container">
            <ul>
                <li><button class="button"><h4><a href="#">ПЕРСОНАЛЬНЫЕ ПОДБОРКИ</a></h4></button></li>
                <li><button class="button button--color-active"><h4><a href="#">ВЫГОДНЫЕ ПРЕДЛОЖЕНИЯ</a></h4></button></li>
                <li><button class="button"><h4><a href="#">ДЕГУСТАЦИИ</a></h4></button></li>
                <li><button class="button"><h4><a href="#">ОБУЧЕНИЕ</a></h4></button></li>
            </ul>
        </div>
    `;
    document.getElementById('nav-container').innerHTML = navHTML; // Вставляем навигацию в контейнер
}

loadNav(); // Вызываем функцию для загрузки навигации