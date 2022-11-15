const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users')
const isLoggedIn = require('../Helper/isLoggedIn')

//Creating a new user)
router.post('/users', usersController.user_create_post)

//User Login 
router.post('/users/login', usersController.user_login_post)

//View user details
router.get('/users/:userId', usersController.user_details_get)

//update user
router.put('/users/:userId', usersController.user_update_put)

//delete user route
router.delete('/users/:userId', usersController.user_delete)

//Creating a new event
router.post('/users/:userId/events',isLoggedIn, usersController.event_create_post)

module.exports = router