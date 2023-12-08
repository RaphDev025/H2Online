const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MeterSchema = new Schema({
    day_read: {
        type: String,
    },
    evening_read: {
        type: String,
    },
}, { timestamps: true })

module.exports = mongoose.model('Meter', MeterSchema, 'meter_db') 