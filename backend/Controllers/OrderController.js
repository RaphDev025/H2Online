const Order = require('../Models/OrderModel')
const mongoose = require('mongoose')

// Get 
const getOrders = async (req, res) => {
    const orders = await Order.find({}).sort({createdAt: -1})
    res.status(200).json(orders)
}

// Create 
const createOrder = async (req, res) => {
    const { total_qty, total_amount, item_list, vendor, customer, payment, delivery } = req.body
    try{
        const order = await Order.create({ total_qty, total_amount, item_list, vendor, customer, payment, delivery })
        res.status(200).json(order)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// Update 
const updateOrder = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No order found'})
    }

    const order = await Order.findOneAndUpdate({_id: id}, {
        ...req.body 
    })

    if(!order){
        return res.status(404).json({error: 'No order found'})
    }
    res.status(200).json(order)
}

// Delete 
const deleteOrder = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No order found'})
    }

    const order = await Order.findOneAndDelete({_id: id})

    if(!order){
        return res.status(404).json({error: 'No order found'})
    }
    res.status(200).json(order)
}

module.exports = { getOrders, deleteOrder, updateOrder, createOrder }