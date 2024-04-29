const mongoose =  require('mongoose')

const categorySchema = mongoose.Schema(
    {
        name:{
            type: String,
            require: true
        },
        parentCategory:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "categories"
        },
        level:
        {
            type: Number,
            required: true
        }
    }
)
const Category = mongoose.model("categories", categorySchema);
module.exports = Category