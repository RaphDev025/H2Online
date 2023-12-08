const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ExpenseSchema = new Schema({
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
    qty: {
        type: Number,
        required: true,
        default: 0     
    },
    total_amount: {
        type: Number,
        required: true,
        default: 0     
    }
}, { timestamps: true })

module.exports = mongoose.model('Expense', ExpenseSchema, 'expense_db') 