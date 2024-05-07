const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    user:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    product:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true
    },
    review:
    {
        type:String,
        required: true
    },
    createdAt:
    {
        type: Date,
        default: Date.now()
    }
})

const Reviews = mongoose.model("reviews", reviewSchema)
module.exports = Reviews