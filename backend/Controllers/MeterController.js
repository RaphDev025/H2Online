const Meter = require('../Models/MeterModel')
const mongoose = require('mongoose')

// Get all products
const getMeter = async (req, res) => {
    const products = await Meter.find({}).sort({createdAt: -1})
    res.status(200).json(products)
}

// Create Product
const createMeter = async (req, res) => {
    const { day_read, evening_read } = req.body
    try{
        const product = await Meter.create({ day_read, evening_read })
        res.status(200).json(product)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// Update Product
const updateMeter = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No expense found'})
    }

    const product = await Meter.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!product){
        return res.status(404).json({error: 'No expense found'})
    }
    res.status(200).json(product)
}

// Delete Product
const deleteMeter = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No expense found'})
    }

    const product = await Meter.findOneAndDelete({_id: id})

    if(!product){
        return res.status(404).json({error: 'No expense found'})
    }
    res.status(200).json(product)
}

module.exports = { getMeter, createMeter, updateMeter, deleteMeter }