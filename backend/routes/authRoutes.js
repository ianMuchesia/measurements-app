const express = require('express')
const { register, login, logoutUser } = require('../controllers/auth')

const router = express.Router()


router.post('/register', register)
router.post('/login', login)
router.get('/logout' , logoutUser)



module.exports = router

