import { getProductById, getPriceByProductId, getStoreById } from './api.js';

// Создание компонента для одного магазина
const createStoreItemComponent = ({ storeNet, logo, storePrices }) => {
    const storeItem = document.createElement('li');
    storeItem.className = 'store-item';

    const addressOptions = storePrices
        .map(({ address }) => `<option>${address}</option>`)
        .join('');

    const initialPrice = storePrices[0].price;

    storeItem.innerHTML = `
        <ul>
            <li class="store-logo"><img src="${logo}" alt="${storeNet}"></li>
            <li class="store-info">
                <h5>${storeNet}</h5>
                <select class="option" style="color: var(--color-accent);">
                    ${addressOptions}
                </select>
                <span class="price">${initialPrice} руб</span>
            </li>
        </ul>
    `;

    // Добавление логики смены цены при переключении адреса
    const selectElement = storeItem.querySelector('select');
    const priceElement = storeItem.querySelector('.price');

    selectElement.addEventListener('change', (event) => {
        const selectedAddress = event.target.value;
        const selectedPrice = storePrices.find(({ address }) => address === selectedAddress)?.price;
        priceElement.textContent = `${selectedPrice} руб`;
    });

    return storeItem;
};

// Создание компонента списка магазинов
const createStoresListComponent = (stores) => {
    const storesList = document.createElement('ul');
    storesList.className = 'store-list';

    stores.forEach(store => {
        const storeItemComponent = createStoreItemComponent(store);
        storesList.appendChild(storeItemComponent);
    });

    return storesList;
};

// Создание компонента карты и магазинов
const createStoresAndMapComponent = (stores) => {
    const container = document.createElement('div');
    container.className = 'stores-and-map';

    container.innerHTML = `

        <div class="stores-list"></div>
        <div class="map">                    
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A74855c3ad79ff2cb3d1fd8f5a6b2bb9c5189203ed5ed392334cbf42f90e339d8&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
        </div>
    `;

    const storesListComponent = createStoresListComponent(stores);
    container.querySelector('.stores-list').appendChild(storesListComponent);

    return container;
};

// Функция для получения данных о магазинах с группировкой по store_net
const fetchGroupedStoresData = async (productId) => {
    try {
        const product = await getProductById(productId);
        if (!product || !product.stores_id) {
            console.error('Продукт или список магазинов не найден');
            return [];
        }

        const prices = await getPriceByProductId(productId);
        const storePromises = product.stores_id.map(storeId => getStoreById(storeId));
        const stores = await Promise.all(storePromises);

        // Группировка данных
        const groupedStores = stores.reduce((acc, store) => {
            const storePrices = prices
                .filter(price => price.store_id === store.id)
                .map(price => ({ address: store.address, price: price.price }));

            if (!acc[store.store_net]) {
                acc[store.store_net] = {
                    storeNet: store.store_net,
                    logo: store.image,
                    storePrices: []
                };
            }

            acc[store.store_net].storePrices.push(...storePrices);
            return acc;
        }, {});

        // Сортировка магазинов по минимальной цене
        const sortedStores = Object.values(groupedStores).map(store => {
            store.storePrices.sort((a, b) => a.price - b.price); // Сортируем цены в магазине
            return store;
        }).sort((a, b) => {
            const minPriceA = Math.min(...a.storePrices.map(price => price.price));
            const minPriceB = Math.min(...b.storePrices.map(price => price.price));
            return minPriceA - minPriceB; // Сортируем магазины по минимальной цене
        });

        return sortedStores;
    } catch (error) {
        console.error('Ошибка при получении данных о магазинах:', error);
        return [];
    }
};

// Рендеринг компонентов
const renderStoresAndMap = async (productId) => {
    try {
        const storesData = await fetchGroupedStoresData(productId);

        const placeholder = document.querySelector('.stores-and-map-placeholder');
        if (!placeholder) {
            console.error('Контейнер для списка магазинов не найден');
            return;
        }

        const storesAndMapComponent = createStoresAndMapComponent(storesData);
        placeholder.innerHTML = ''; // Очищаем контейнер
        placeholder.appendChild(storesAndMapComponent);
    } catch (error) {
        console.error('Ошибка при рендеринге списка магазинов:', error);
    }
};

export { renderStoresAndMap };

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('productId');
    if (productId) {
        renderStoresAndMap(productId);
    } else {
        console.error('ID продукта не указан в URL.');
    }
});