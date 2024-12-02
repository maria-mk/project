import { getProductById, getPriceByProductId, getReviewsByProductId } from './api.js';


console.log('getProductById:', getProductById); 

const createProductDetailComponent = ({ title, image, rating, taste, aroma, min_price }) => {
    const component = document.createElement('div');

    component.className = 'product-details';
    component.innerHTML = `
        <div class="product-info">
            <p class="product-name">${title.toUpperCase()}</p>
            <div>
                <span class="product-rating"><h5>★ ${rating}</h5></span>
            </div>
            <div class="taste-aroma">
                <div class="taste">
                    <h5>Вкус</h5>
                    <p>${taste}</p>
                </div>
                <div class="aroma">
                    <h5>Аромат</h5>
                    <p>${aroma}</p>
                </div>
            </div>
            <p class="price">ЦЕНА ОТ ${min_price} руб</p>
        </div>
        <div class="product-image">
            <img src="${image}" alt="${title}">
        </div>
    `;

    return component;
};

// Функция для рендеринга деталей продукта
const renderProductDetails = async (productId) => {
    try {
        const product = await getProductById(productId);
        console.log(product); 

        const productDetailsContainer = document.querySelector('.product-details');
        console.log(productDetailsContainer); 

        if (!product) {
            console.error('Продукт не найден');
            return;
        }

        // Получение минимальной цены через API
        const prices = await getPriceByProductId(productId);
        const min_price = prices.length > 0 ? Math.min(...prices.map(price => price.price)) : 0; // Находим минимальную цену

        // Получение отзывов для расчета среднего рейтинга
        const reviews = await getReviewsByProductId(productId);
        const averageRating = reviews.length > 0 
            ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1) 
            : "Нет отзывов"; // Если отзывов нет, выводим "Нет отзывов"

        const productDetailComponent = createProductDetailComponent({ 
            ...product, 
            rating: averageRating, // Используем средний рейтинг или "Нет отзывов"
            min_price // Используем минимальную цену
        });
        productDetailsContainer.innerHTML = ''; // Очищаем контейнер
        productDetailsContainer.appendChild(productDetailComponent);
    } catch (error) {
        console.error('Ошибка при получении данных о продукте:', error);
    }
};

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('productId');
    if (productId) {
        renderProductDetails(productId);
    } else {
        console.error('ID продукта не указан в URL.');
    }
});