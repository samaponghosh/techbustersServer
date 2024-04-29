const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller.js')

// router.post("/signup", authController.register)
// router.post("/login", authController.login)
router.post('/signup', (req, res) =>{
    authController.register
  });

router.post('/login', (req, res) =>{
        authController.login
})

router.get('/bird', function (req, res) {
  res.send('Birds home page')
})

module.exports = router