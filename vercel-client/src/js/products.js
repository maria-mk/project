import { getAllProducts, getPriceByProductId, getReviewsByProductId } from './api.js';

const createProductCardComponent = async ({ id, title, image, color, sugar, type }) => {
    const component = document.createElement('div');

    component.className = 'product-card';

    // Получение минимальной цены через API
    const prices = await getPriceByProductId(id);
    const min_price = prices.length > 0 ? Math.min(...prices.map(price => price.price)) : 0; // Находим минимальную цену

    // Получение отзывов для расчета среднего рейтинга
    const reviews = await getReviewsByProductId(id);
    const averageRating = reviews.length > 0 
        ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1) 
        : "Нет отзывов"; // Если отзывов нет, выводим "Нет отзывов"

    component.innerHTML = `
        <div class="product-card__image-container">
            <img class="product-card__image" src="${image}" alt="${title}">
        </div>
        <div class="product-card__content">
            <h3 class="product-card__title">${title.toUpperCase()}</h3>
            <div class="product-card__rating">
                <span class="product-card__rating-star">★</span>
                <span class="product-card__rating-value">${averageRating}</span>
            </div>
            <div class="product-card__characteristics">
                <span class="product-card__characteristic">${color}</span>
                <span class="product-card__characteristic">${sugar}</span>
                <span class="product-card__characteristic">${type}</span>
            </div>
            <div class="product-card__price-button-container">
                <p class="product-card__price">ЦЕНА ОТ ${min_price} руб</p>
                <a href="page2.html?productId=${id}" class="product-card__button">Подробнее</a>
            </div>
        </div>
    `;

    return component;
};

// Рендеринг списка карточек
export const renderProductCards = async (products) => {
    const container = document.querySelector('.products');

    if (!container) {
        throw new Error('.products not found');
    }

    for (const product of products) {
        const productComponent = await createProductCardComponent(product); 


        const listItem = document.createElement('div');
        listItem.appendChild(productComponent);

        container.appendChild(listItem);
    }
};

const displayProducts = async () => {
    try {
    
        const products = await getAllProducts();


        await renderProductCards(products); 
    } catch (error) {
        console.error('Ошибка при загрузке продуктов:', error);

        const container = document.querySelector('.products');
        if (container) {
            container.innerHTML = `<p>Не удалось загрузить продукты. Пожалуйста, попробуйте позже.</p>`;
        }
    }
};


displayProducts();
