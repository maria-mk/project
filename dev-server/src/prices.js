const fs = require('fs');
const path = require('path');

const initialData = require('./data_prices.json');

const PATH = path.join(__dirname, 'data_prices.json');

class Prices {
    _data = initialData;

    _overwrite() {
        fs.writeFileSync(PATH, JSON.stringify(this._data, null, 4));
    }
    
    getAll() {
        return this._data;
    }

    getById(product_id) {
        return this._data.filter((item) => item.product_id === product_id);
    }

};

// Экспортируйте экземпляр класса Products
const prices = new Prices();
module.exports = { prices };