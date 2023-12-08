const Reservation = require('../Models/BookingModel')
const mongoose = require('mongoose')

// Get all products
const getBooks = async (req, res) => {
    const products = await Reservation.find({}).sort({createdAt: -1})
    res.status(200).json(products)
}

// Create Product
const createBooks = async (req, res) => {
    const { user_id, user_name, address, phone, repetition, bookedDate } = req.body
    try{
        const product = await Reservation.create({ user_id, user_name, address, phone, repetition, bookedDate })
        res.status(200).json(product)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// Update Product
const updateBook = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No reservation found'})
    }

    const product = await Reservation.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!product){
        return res.status(404).json({error: 'No reservation found'})
    }
    res.status(200).json(product)
}

// Delete Product
const deleteBooks = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No reservation found'})
    }

    const product = await Reservation.findOneAndDelete({_id: id})

    if(!product){
        return res.status(404).json({error: 'No reservation found'})
    }
    res.status(200).json(product)
}

module.exports = { getBooks, deleteBooks, updateBook, createBooks }