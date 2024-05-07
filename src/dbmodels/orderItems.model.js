const mongoose = require('mongoose')

const orderItemsSchema = mongoose.Schema({

    product:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true
    },
    quantity:
    {
        type: Number,
        required:true
    },
    price:
    {
        type: Number,
        required:true,
        default: 0
    },
    userId:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
})

const OrderItem = mongoose.model("orderItems",orderItemsSchema)
module.exports = OrderItem