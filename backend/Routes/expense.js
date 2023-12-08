const express = require('express')
const { getExpense, deleteExpense, updateExpense, createExpense } = require('../Controllers/ExpenseController')

const router = express.Router()

router.get('/', getExpense)

router.post('/', createExpense)

router.delete('/:id', deleteExpense)

router.patch('/:id', updateExpense)

module.exports = router