const express = require('express')
const route = express.Router()

// Login page...
route.get('/login', (request, response) => response.render('login'))

// Signup page...
route.get('/signup', (request, response) => response.render('signup'))

// Dashboard page...
route.get('/dashboard', (request, response) => response.render('dashboard'))

module.exports = route;