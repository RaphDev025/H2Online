const mongoose = require('mongoose')
const { Schema, ObjectId } = mongoose

const BookingSchema = new Schema({
    user_id: {
        type: ObjectId
    },
    user_name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,        
        required: true
    },
    repetition: {
        type: String,
        required: true
    },
    bookedDate: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model('Booking', BookingSchema, 'booking_db') 