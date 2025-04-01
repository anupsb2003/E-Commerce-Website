const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productSchema =  mongoose.Schema ({
    name:String,
    price:Number,
    link:String,
    img:String,
    description:String,
    rating:Number,
    reviews:String,
    category:String,
    discount:Number,
    offerprice:Number
});
const Product = mongoose.model("Product",productSchema);
module.exports = Product;