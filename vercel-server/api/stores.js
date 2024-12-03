const fs = require('fs');
const path = require('path');

const initialData = require('./data_store.json');

const PATH = path.join(__dirname, 'data_store.json');

class Stores {
    _data = initialData;

    _overwrite() {
        fs.writeFileSync(PATH, JSON.stringify(this._data, null, 4));
    }
    
    getAll() {
        return this._data;
    }

    getById(id) {
        return this._data.find((item) => item.id === id);
    }

};

// Экспортируйте экземпляр класса Products
const stores = new Stores();
module.exports = { stores };