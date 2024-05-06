const User = require('../dbmodels/user.model.js')
const bcrypt = require('bcrypt')
const jwtProvider = require('../jwtProvider/jwtProvider.js')

const createUser = async(userData)=>
{
    try
    {

        let {firstName,lastName,password,mobile,role} = userData
    
        const doesUserExists = await User.findOne({mobile})
        if(doesUserExists)
        {
            throw new Error("User already exists with mobile number: ",mobile)
        }
        
        password = await bcrypt.hash(password,8)
        const user = await User.create({firstName,lastName,password,mobile,role})
        console.log("new User created", user)
        return user
        
    }
    catch(error)
    {
        throw new Error(error.message)
    }
}


const findUserbyMobile = async(mobile)=>
{
    const user = await User.findOne({mobile})
    // .populate("address")
    if (!user)
    {
        throw new Error("No user found with mobile number: ",mobile)
    }
    return user
}


const findUserbyID = async(userId)=>
{
    const user = await User.findById(userId)
    if(!user)
    {
        throw new Error("No user found with userId: "+userId)
    }
    
    return user
}


const getUserProfilefromToken = async(token)=>
{
    const userId = jwtProvider.getUserIdfromToken(token)
    const user = (await findUserbyID(userId)).populate("addresses")
    user.password = null
    if(!user)
    {
        throw new Error("No user found with userId: "+userId)
    }
    return user
}


const getAllUsers = async()=>
{
    const users = await User.find()
    return users
}
module.exports = { getAllUsers, getUserProfilefromToken, findUserbyID, createUser, findUserbyMobile }
