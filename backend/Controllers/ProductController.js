const Product = require('../Models/ProductModel')
const mongoose = require('mongoose')

// Get all products
const getProducts = async (req, res) => {
    const products = await Product.find({}).sort({createdAt: -1})
    res.status(200).json(products)
}

// get single user
const getProductId = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Product Found'})
    }
    const product = await Product.findById(id)

    if(!product){
        return res.status(404).json({error: 'No Product Found'})
    }
    res.status(200).json(product)
}

// Create Product
const createProduct = async (req, res) => {
    const { category, item_name, stock, max_stock, unit_price, product_img } = req.body
    try{
        const product = await Product.create({ category, item_name, stock, max_stock, unit_price, product_img })
        res.status(200).json(product)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// Update Product
const updateProduct = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No product found'})
    }

    const product = await Product.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!product){
        return res.status(404).json({error: 'No product found'})
    }
    res.status(200).json(product)
}

// Delete Product
const deleteProduct = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No product found'})
    }

    const product = await Product.findOneAndDelete({_id: id})

    if(!product){
        return res.status(404).json({error: 'No product found'})
    }
    res.status(200).json(product)
}

module.exports = { getProducts, getProductId, deleteProduct, updateProduct, createProduct }