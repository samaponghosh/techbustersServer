const userService = require('../services/user.service')
const jwtProvider = require('../jwtProvider/jwtProvider')
const bcrypt = require('bcrypt')
const cartService = require('../services/cart.service')

const register = async(req,res)=>
{
    const user = await userService.createUser(req.body)
    const jwt = jwtProvider.generateToken(user._id)

    await cartService.createCart(user)
    
    return response.status(200).send({jwt,message:"registered successful"})
}
module.exports = register


const login = async(req,res)=>
{
    console.log("jhvjjgvhjgcv")
    const {password,mobile} = req.body

    const user = await userService.findUserbyMobile(mobile)
    if (!user)
    {
        return res.send({message:"No user found with this mobile",mobile})
    }

    const checkPassword = await bcrypt.compare(password,user.password)
    if(!checkPassword)
    {
        return res.status(401).send({message:"invalid password"})
    }
    else
    {
        const jwt = jwtProvider.generateToken(user._id)
        return res.status(200).send({message:"login successful",jwt})
    }
}
module.exports = login