const mongoose = require('mongoose')
const { Schema, ObjectId } = mongoose

const ItemsSchema = new Schema({
    item_id:{
        type: ObjectId
    },
    item_name: {
        type: String
    },
    qty: {
        type: Number,
        default: 0
    },
    unit_price: {
        type: Number,
        default: 0
    },
    service:{
        type: String
    }, 
    subTotal:{
        type: Number,
        default: 0.00
    }, 
})

const CustomerSchema = new Schema({
    user_id:{
        type: ObjectId
    },
    user_name: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
})

const DeliverySchema = new Schema({
    delivery_id:{
        type: ObjectId
    },
    delivery_address: {
        type: String
    },
    progress: {
        type: String
    },
    courier: {
        type: String,
    }, 
})

const PaymentSchema = new Schema({
    settled_date:{
        type: Date
    },
    status: {
        type: String
    },
    paid: {
        type: Number,
        default: 0
    },
    balance: {
        type: Number,
        default: 0,
    },
})

const OrderSchema = new Schema({
    total_qty: {
        type: Number,
        required: true,
        default: 0     
    },
    total_amount: {
        type: Number,
        required: true,
        default: 0.00
    },
    vendor: {
        type: String,
        required: true,
    },
    customer: [CustomerSchema],
    payment: [PaymentSchema],
    delivery: [DeliverySchema],
    item_list : [ItemsSchema]
}, { timestamps: true })

module.exports = mongoose.model('Order', OrderSchema, 'order_db') 