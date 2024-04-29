const express = require('express')
const router = express.Router()
const { getUserProfile, getallusers} = require('../controllers/user.controller.js')

// router.get("/profile",userController.getUserProfile)
router.get("/profile", function(req,res)
{
    getUserProfile
})
// router.get("/",userController.getallusers)
router.get("/", function(req,res)
{
    getallusers
})

module.exports = router