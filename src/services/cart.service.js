const Cart = require('../dbmodels/cart.model')
const CartItem = require('../dbmodels/cartItem.model')
const Product = require('../dbmodels/product.model')

async function createCart(user)
{
    try
    {
        const cart = new Cart({user})
        const createdcart = cart.save()
        return createdcart
    }
    catch(error)
    {
        throw new Error(error.message)
    }
}
module.exports = createCart

async function findUserCart(userId) 
{
    let cart =await Cart.findOne({ user: userId })
    
    let cartItems=await CartItem.find({cart:cart._id}).populate("product")

    cart.cartItems=cartItems
    

    let totalPrice = 0;
    let totalItem = 0;

    for (const cartItem of cart.cartItems) 
    {
        totalPrice += cartItem.price;
        totalItem += cartItem.quantity;
    }

    cart.totalPrice = totalPrice;
    cart.totalItem = totalItem;
    // const updatedCart = await cart.save();
    return cart;
}
module.exports = findUserCart

async function addCartItem(userId, req) 
{
    const cart = await Cart.findOne({ user: userId });
    const product = await Product.findById(req.productId);
  
    const isPresent = await CartItem.findOne({ cart: cart._id, product: product._id, userId });
    
    if (!isPresent) 
    {
        const cartItem = new CartItem({
        product: product._id,
        cart: cart._id,
        quantity: 1,
        userId,
        price: product.price,
        });

        const createdCartItem = await cartItem.save();
        cart.cartItems.push(createdCartItem);
        await cart.save();
    }

    return 'Item added to cart';
}
module.exports = addCartItem