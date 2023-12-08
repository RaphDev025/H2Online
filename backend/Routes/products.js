const express = require('express')
const { getProducts, deleteProduct, updateProduct, getProductId, createProduct } = require('../Controllers/ProductController')

const router = express.Router()

router.get('/', getProducts)

router.get('/:id', getProductId) 

router.post('/', createProduct)

router.delete('/:id', deleteProduct)

router.patch('/:id', updateProduct)

module.exports = router