const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    item_name: {
        type: String,
        required: true,
        unique: true
    },
    unit_price: {
        type: Number,
        required: true,
        default: 0.00
    },
    stock: {
        type: Number,
        required: true,
        default: 0     
    },
    max_stock: {
        type: Number,
        required: true,
        default: 0     
    },
    category: {
        type: String,
        required: false
    },
    product_img: String,
}, { timestamps: true })

module.exports = mongoose.model('Product', ProductSchema, 'product_db') 