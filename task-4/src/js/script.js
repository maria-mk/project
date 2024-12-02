import { renderStoresAndMap } from './stores.js';
import { renderReviewsSection } from './reviews.js';

document.addEventListener('DOMContentLoaded', function () {
    // Получаем productId из URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('productId');

    if (!productId) {
        console.error('ID продукта не указан в URL.');
        return; // Если ID нет, останавливаем дальнейшее выполнение
    }

    const reviewsButton = document.querySelector('.filter_text_button_big:nth-child(2)'); // Отзывы
    const whereToBuyButton = document.querySelector('.filter_text_button_big:nth-child(1)'); // Где купить
    const reviewsPlaceholder = document.querySelector('.reviews-placeholder');
    const storesPlaceholder = document.querySelector('.stores-and-map-placeholder');

    function activateButton(activeButton) {
        document.querySelectorAll('.filter_text_button_big').forEach(button => 
            button.classList.remove('filter_button--color-active')
        );
        activeButton.classList.add('filter_button--color-active');

        // Очищаем контейнеры
        reviewsPlaceholder.innerHTML = '';
        storesPlaceholder.innerHTML = '';
    }

    whereToBuyButton.addEventListener('click', async function () {
        activateButton(whereToBuyButton);
        console.log('Кнопка "Где купить" нажата');
        await renderStoresAndMap(productId); // Используем ID из URL
    });

    reviewsButton.addEventListener('click', async function () {
        activateButton(reviewsButton);
        console.log('Кнопка "Отзывы" нажата');
        await renderReviewsSection(productId); // Используем ID из URL
    });
});
