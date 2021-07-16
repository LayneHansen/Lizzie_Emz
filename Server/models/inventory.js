const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Item = mongoose.model('Item', InventorySchema);

module.exports = Item;