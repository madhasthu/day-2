const mongoose = require("mongoose")
const OrderSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    Order: {
        type: string,
        required: true,

    },
    shippingdate: {
        type: Date,
        required: true
    },
    orderdate: {
        type: Date,
        required: true,

    },


})