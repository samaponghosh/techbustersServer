const mongoose = require('mongoose')

const ratingSchema = mongoose.Schema({
    user:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        // required: true
    },
    product:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref: "products",
        // required: true
    },
    ratings:
    {
        type:Number,
        default: 0,
        // required: true
    },
    createdAt:
    {
        type: Date,
        default: Date.now()
    }
})

const Ratings = mongoose.model("ratings",ratingSchema)
module.exports = Ratings