const userService = require('../services/user.service')
const jwtProvider = require('../jwtProvider/jwtProvider')
const bcrypt = require('bcrypt')
const cartService = require('../services/cart.service')

const register = async(req,res)=>
{
    try
    {
        const user = await userService.createUser(req.body)
        const jwt = jwtProvider.generateToken(user._id)
    
        await cartService.createCart(user)
        
        return res.status(200).send({jwt,message:"registered successful"})
    }
    catch(error)
    {
        return res.status(500).send({error:error.message})
    }
}



const login = async(req,res)=>
{
    const {password,mobile} = req.body
    try
    {
        // console.log("jhvjjgvhjgcv")
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
        
        const jwt = jwtProvider.generateToken(user._id)
        return res.status(200).send({jwt,message:"login successful"})
        
    }
    catch(error)
    {
        return res.status(500).send({error:error.message})
    }
}
module.exports = {login, register}