const express = require('express')
const { getBooks, deleteBooks, updateBook, createBooks } = require('../Controllers/BookingController')

const router = express.Router()

router.get('/', getBooks)

router.post('/', createBooks)

router.delete('/:id', deleteBooks)

router.patch('/:id', updateBook)

module.exports = router