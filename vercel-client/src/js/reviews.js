import { getReviewsByProductId, createReview, getProductById } from './api.js';

// Функция для создания компонента одного отзыва
const createReviewItemComponent = ({ name = 'Гость', rating = 0, text = 'Отзыв отсутствует' }) => {
    const reviewItem = document.createElement('li');
    reviewItem.className = 'review-item';

    reviewItem.innerHTML = `
        <ul>
            <li class="review-author"><h5>${name}</h5></li>
            <li class="review-rating"><h5>★ ${rating}</h5></li>
            <li class="review-text">${text}</li>
        </ul>
    `;

    return reviewItem;
};

// Функция для создания секции списка отзывов
const createReviewsListComponent = (reviews, productTitle) => {
    const reviewsList = document.createElement('ul');
    reviewsList.className = 'reviews-list';

    if (reviews.length === 0) {
        const noReviewsItem = document.createElement('li');
        noReviewsItem.className = 'no-reviews-item';
        noReviewsItem.innerHTML = `<h5 style="color: #711010">Отзывов на данный товар пока нет, но вы можете стать первым, кто поделится своими впечатлениями о "${productTitle}"</h5>`;
        reviewsList.appendChild(noReviewsItem);
    } else {
        reviews.forEach(review => {
            const reviewItem = createReviewItemComponent(review);
            reviewsList.appendChild(reviewItem);
        });
    }

    return reviewsList;
};

// Функция для отправки отзыва через API
const sendReview = async (reviewData) => {
    try {
        const response = await createReview(reviewData);
        return response;
    } catch (error) {
        console.error('Ошибка при отправке отзыва:', error);
        throw error;
    }
};

// Обработчик отправки отзыва
const addReviewSubmissionHandler = (container, productId) => {
    const sendButton = container.querySelector('.send__button');
    const ratingInputs = container.querySelectorAll('.star-rating input[name="rating"]');
    const commentTextarea = container.querySelector('textarea');

    sendButton.addEventListener('click', async () => {

        const selectedRating = Number(Array.from(ratingInputs).find(input => input.checked)?.value); // Преобразуем в число
        const commentText = commentTextarea.value.trim();
        const reviewData = {
            product_id: productId,
            name: 'Гость', // По умолчанию
            rating: selectedRating,
            text: commentText,
        };

        // Проверка на заполненность
        if (!reviewData.rating || !reviewData.text) {
            alert('Пожалуйста, заполните все поля');
            return;
        }

        try {
            // Отправляем отзыв
            await sendReview(reviewData);

            // После успешной отправки очищаем форму
            ratingInputs.forEach(input => (input.checked = false));
            commentTextarea.value = '';

            // Выводим информационное сообщение
            alert('Спасибо, ваш отзыв сохранен.');

            // Перерисовываем секцию отзывов
            await renderReviewsSection(productId);
        } catch (error) {
            alert('Произошла ошибка при отправке отзыва.');
        }
    });
};

// Функция для создания полной секции отзывов
const createReviewsSectionComponent = (reviews, productId, productTitle) => {
    const container = document.createElement('div');
    container.className = 'reviews-section';

    container.innerHTML = `
        <div class="leave-review">
            <h5>Оставить отзыв</h5>
            <ul>
                <li>
                    <label>Ваша оценка</label>
                    <div class="star-rating">
                        <input type="radio" id="star5" name="rating" value="5">
                        <label for="star5" title="Отлично">★</label>
                        
                        <input type="radio" id="star4" name="rating" value="4">
                        <label for="star4" title="Хорошо">★</label>
                        
                        <input type="radio" id="star3" name="rating" value="3">
                        <label for="star3" title="Неплохо">★</label>
                        
                        <input type="radio" id="star2" name="rating" value="2">
                        <label for="star2" title="Плохо">★</label>
                        
                        <input type="radio" id="star1" name="rating" value="1">
                        <label for="star1" title="Ужасно">★</label>
                    </div>
                </li>
                <li>
                    <label>Ваш комментарий</label>
                    <textarea placeholder="Введите текст..."></textarea>
                </li>
                <li>
                    <button class="send__button">Отправить</button>
                </li>
            </ul>
        </div>
    `;

    const reviewsListComponent = createReviewsListComponent(reviews, productTitle);
    container.prepend(reviewsListComponent);


    addReviewSubmissionHandler(container, productId);

    return container;
};

// Функция для рендеринга секции отзывов
const renderReviewsSection = async (productId) => {
    console.log('Функция renderReviewsSection вызвана с ID:', productId);
    try {
        const reviews = await getReviewsByProductId(productId);
        const product = await getProductById(productId);
        const productTitle = product.title; 

        const placeholder = document.querySelector('.reviews-placeholder');
        if (!placeholder) {
            console.error('Контейнер для отзывов не найден');
            return;
        }

        const reviewsSectionComponent = createReviewsSectionComponent(reviews || [], productId, productTitle);
        placeholder.innerHTML = ''; 
        placeholder.appendChild(reviewsSectionComponent);
    } catch (error) {
        console.error('Ошибка при рендеринге отзывов:', error);
    }
};

export { renderReviewsSection };
