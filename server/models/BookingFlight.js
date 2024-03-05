const mongoose = require('mongoose')

const Schema = mongoose.Schema

const BookingSchema = new Schema({
    from: Date,
    to: Date,
    days: Number,
    source: String,
    destination: String,
    bookedOn: {type: Date, default: Date.now},
    paid: Boolean,
    amount: Number,
    numOfSeats: Number,
    bookedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    people: {children: Number, adults: Number},
    flight: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel'
    }
})

module.exports = new mongoose.model('Booking', BookingSchema)