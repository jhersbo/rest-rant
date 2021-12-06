//Modules and globals
require('dotenv').config()
const express = require('express')
const app = express()

//Express settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

//Controllers and routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) =>{ 
    res.render('Home')
})

app.get('*', (req, res) =>{
    res.render('Error404')
})

//Listen for connections
app.listen(process.env.PORT)