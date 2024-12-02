const fs = require('fs');
const path = require('path');

const initialData = require('./data_reviews.json');

const PATH = path.join(__dirname, 'data_reviews.json');

class Reviews {
    _data = initialData;

    _overwrite() {
        fs.writeFileSync(PATH, JSON.stringify(this._data, null, 4));
    }
    
    getById(product_id) {
        return this._data.filter((item) => item.product_id === product_id);
    }

    create(item) {
        const newItem = {
            id: `review-${Date.now()}`,
            ...item
        };
        
        this._data.push(newItem);
        this._overwrite();

        return newItem;
    }

};

// Экспортируйте экземпляр класса Products
const reviews = new Reviews();
module.exports = { reviews };