const userService = require('../services/user.service')

const getUserProfile = async(req,res)=>
{
    console.log("rvkwjbvwkljvbwljhvb")
    try
    {
        const jwt = req.headers.authorization?.split(" ")[1] //.split(" ") function space dekhlei sekahane break kore array banay
                                                            //headers.authorization "bearer token" format e ase, then split function break kore array banay like ["bearer", "token"], then amra kebol 1 index e thaka token ke nilam 
        if(!jwt)
        {
            return res.status(404).send({message:"token not found"})
        }
        const user = await userService.getUserProfilefromToken(jwt)
    
        return res.status(200).send(user)
    }
    catch(error)
    {
        return res.status(500).send({error:error.message})
    }
}
module.exports = getUserProfile

const getallusers = async(req,res)=>
{
    try
    {
        console.log("wlkjhvbwhvowvwjc")
        const users = await userService.getAllUsers()
        return res.status(200).send(users)
    }
    catch(error)
    {
        return res.status(500).send({error:error.message})
    }
}
module.exports = getallusers