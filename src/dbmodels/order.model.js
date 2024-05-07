const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({

    user:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    orderItems:
    [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "orderItems"
    }],
    orderDate:
    {
        type: Date,
        default: Date.now(),
        required:true
    },
    deliveryDate:
    {
        type: Date
    },
    shippingAddress:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "addresses"
    },
    paymentDetails:
    {
        paymentMethod:
        {
            type:String
        },
        transactionId:
        {
            type:String
        },
        paymentId:
        {
            type:String
        },
        paymentStatus:
        {
            type:String,
            default: "PENDING"
        }
    },
    totalPrice:
    {
        type: Number,
        required:true,
        default: 0 
    },
    totalItem:
    {
        type: Number,
        required: true
    },
    orderStatus:
    {
        type: String,
        required: true
    }
})

const Order = mongoose.model("orders",orderSchema)
module.exports = Order