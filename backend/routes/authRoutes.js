const express = require('express')
const { register, login, logoutUser, userStatus } = require('../controllers/auth')
const authenticateUser = require('../middleware/authentication')

const router = express.Router()


router.post('/register', register)
router.post('/login', login)
router.get('/logout' , logoutUser)
router.get('/user',authenticateUser, userStatus)



module.exports = router

