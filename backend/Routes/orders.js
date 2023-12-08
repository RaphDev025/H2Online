const express = require('express')
const { getOrders, deleteOrder, updateOrder, createOrder } = require('../Controllers/OrderController')

const router = express.Router()

router.get('/', getOrders)

router.post('/', createOrder) 

router.delete('/:id', deleteOrder)

router.patch('/:id', updateOrder)

module.exports = router
