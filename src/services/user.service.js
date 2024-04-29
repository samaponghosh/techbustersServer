const User = require('../dbmodels/user.model.js')
const bcrypt = require('bcrypt')
const jwtProvider = require('../jwtProvider/jwtProvider.js')

const createUser = async(userData)=>
{
    let {firstName,lastName,password,mobile,role} = userData

    const doesUserExists = await User.findOne({mobile})
    if(doesUserExists == true)
    {
        throw new Error("User already exists with mobile number: ",mobile)
    }
    else
    {
        password = await bcrypt.hash(password,5)
        const user = await User.create({firstName,lastName,password,mobile,role})
        console.log("new User created")
        return user
    }
}
module.exports = createUser

const findUserbyMobile = async(mobile)=>
{
    const user = await User.findOne({mobile})
    // .populate("address")
    if (!user)
    {
        throw new Error("No user found with mobile number: "+mobile)
    }
    else
    {
        return user
    }
}
module.exports = findUserbyMobile

const findUserbyID = async(userId)=>
{
    const user = User.findById(userId).populate("address")
    if(!user)
    {
        throw new Error("No user found with userId: "+userId)
    }
    else
    {
        return user
    }
}
module.exports = findUserbyID

const getUserProfilefromToken = async(token)=>
{
    const userId = jwtProvider.getUserIdfromToken(token)
    const user = await findUserbyID(userId)
    if(!user)
    {
        throw new Error("No user found with userId: "+userId)
    }
    else
    {
        return user
    }
}
module.exports = getUserProfilefromToken

const getAllUsers = async()=>
{
    const allusers = User.find()
    return allusers
}
module.exports = getAllUsers
