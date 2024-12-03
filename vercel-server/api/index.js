const express = require('express');
const cors = require('cors');

const { products } = require('./products');
const { stores } = require('./stores');
const { prices } = require('./prices');
// Удалите старый импорт reviews, он не нужен
// const { reviews } = require('./reviews'); 

const app = express();
const port = 3000;

// Включаем CORS и поддержку JSON
app.use(cors());
app.use(express.json());

// Временное хранилище отзывов
const reviews = [];

// Базовый маршрут
app.get('/', (_, response) => response.send('Project API on Vercel'));

// GET-запросы для продуктов, магазинов и цен
app.get('/api/v1/products', (_, response) => {
    const data = products.getAll();
    response.json(data);
});

app.get('/api/v1/products/:id', (request, response) => {
    const { id } = request.params;
    const data = products.getById(id);

    if (!data) {
        response.status(404).json({ code: 'NOT_FOUND' });
        return;
    }
    response.json(data);
});

app.get('/api/v1/stores', (_, response) => {
    const data = stores.getAll();
    response.json(data);
});

app.get('/api/v1/stores/:id', (request, response) => {
    const { id } = request.params;
    const data = stores.getById(id);

    if (!data) {
        response.status(404).json({ code: 'NOT_FOUND' });
        return;
    }
    response.json(data);
});

app.get('/api/v1/prices', (_, response) => {
    const data = prices.getAll();
    response.json(data);
});

app.get('/api/v1/prices/:id', (request, response) => {
    const { id } = request.params;
    const data = prices.getById(id);

    if (!data) {
        response.status(404).json({ code: 'NOT_FOUND' });
        return;
    }
    response.json(data);
});

// GET-запрос для получения отзывов по ID продукта
app.get('/api/v1/reviews/:id', (request, response) => {
    const { id } = request.params;
    const productReviews = reviews.filter(review => review.product_id === id);

    if (productReviews.length === 0) {
        response.status(404).json({ code: 'NOT_FOUND', message: 'Отзывы не найдены' });
        return;
    }
    response.json(productReviews);
});

// POST-запрос для добавления отзыва
app.post('/api/v1/reviews', (req, res) => {
    const { product_id, name, text, rating } = req.body;

    if (!product_id || !name || !text || !rating) {
        res.status(422).json({ code: 'INCOMPLETE_REQUEST', message: 'Пожалуйста, заполните все поля' });
        return;
    }

    // Создаем новый отзыв
    const newReview = {
        id: reviews.length + 1,
        product_id,
        name,
        text,
        rating,
        created_at: new Date().toISOString(),
    };

    // Добавляем в массив
    reviews.push(newReview);

    res.status(201).json(newReview);
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
