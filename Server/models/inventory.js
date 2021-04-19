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
    date: {
        type: Date,
        default: Date.now
    }
});

const InventoryItem = mongoose.model('InventoryItem', InventorySchema);

module.exports = InventoryItem;