const Expense = require('../Models/ExpenseModel')
const mongoose = require('mongoose')

// Get all products
const getExpense = async (req, res) => {
    const products = await Expense.find({}).sort({createdAt: -1})
    res.status(200).json(products)
}

// Create Product
const createExpense = async (req, res) => {
    const { item_name, qty, unit_price, total_amount } = req.body
    try{
        const product = await Expense.create({ item_name, qty, unit_price, total_amount })
        res.status(200).json(product)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// Update Product
const updateExpense = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No expense found'})
    }

    const product = await Expense.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!product){
        return res.status(404).json({error: 'No expense found'})
    }
    res.status(200).json(product)
}

// Delete Product
const deleteExpense = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No expense found'})
    }

    const product = await Expense.findOneAndDelete({_id: id})

    if(!product){
        return res.status(404).json({error: 'No expense found'})
    }
    res.status(200).json(product)
}

module.exports = { getExpense, deleteExpense, updateExpense, createExpense }