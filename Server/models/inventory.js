const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const InventoryItem = mongoose.model('InventoryItem', InventorySchema);

module.exports = InventoryItem;