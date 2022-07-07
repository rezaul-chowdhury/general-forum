const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')


const app = express()

// DB config...
const db = require('./config/keys').MongoURI;

// Connect to Mongo...
mongoose.connect(db)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err))

// const dotenv = require('dotenv').config();
// const url = process.env.MONGOLAB_URL;

const PORT = process.env.PORT || 8000;

// EJS...
app.use(expressLayouts)
app.set('view engine', 'ejs');

// Bodyparser...
app.use(express.urlencoded({ extended: false }))

// Routes...
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

    // MongoClient.connect(url)
    //     .then(client => {
    //         console.log('Connecting to MongoDB')
    //         const db = client.db('general-forum')
    //         const usersCollection = db.collection('users')
    //         app.use(bodyParser.urlencoded({extended: true}))
    //         app.use(express.static('public'))
    //         app.get('/', (request, response) => {
    //             response.sendFile(__dirname + '/index.html')
    //         })
    //         app.get('/signup', (request, response) => {
    //             response.sendFile(__dirname + '/signup.html')
    //         })
    //
    //         app.post('/users', (request, response) => {
    //             usersCollection.insertOne(request.body)
    //                 .then(result => {
    //                     response.redirect('/')
    //                 })
    //                 .catch(error => console.error(error))
    //         })
            app.listen(PORT, () => {
                console.log(`The server is running on port ${PORT}! Better Go Catch it!`)
            })
        // })
        // .catch(error => console.error(error))



// app.get('/login', (request, response) => {
//     response.sendFile(__dirname + '/login.html')
// })
//
// app.get('/logout', (request, response) => {
//     response.sendFile(__dirname + '/logout.html')
// })

