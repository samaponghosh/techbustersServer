
const jwt = require('jsonwebtoken')

const SECRET_KEY = "balersecterkey1125"
const generateToken = (userId)=>
{
    const token = jwt.sign({userId},SECRET_KEY,{expiresIn: '24h' })
    return token
}

const getUserIdfromToken = (token)=>
{
    const decodedToken = jwt.verify(token,SECRET_KEY)
    return decodedToken.userId
}

module.exports = {generateToken,getUserIdfromToken}