const express = require('express')
const { getMeter, createMeter, updateMeter, deleteMeter } = require('../Controllers/MeterController')

const router = express.Router()

router.get('/', getMeter)

router.post('/', createMeter)

router.delete('/:id', deleteMeter)

router.patch('/:id', updateMeter)

module.exports = router