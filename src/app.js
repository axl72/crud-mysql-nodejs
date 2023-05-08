const express = require('express')
const path = require('path')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')
const myconnection = require('express-myconnection')

//importing routes

const customerRoutes = require('./routes/customer')

//settings

app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// middlewares
// Recuerda que todos los middlewares son funciones
app.use(morgan('dev'));

dboptions = {
    host:'den1.mysql5.gear.host',
    user: 'sistemas2',
    password: '_d3sc0n0c1d0',
    database:'sistemas2',
    port: 3306,
};

app.use(myconnection(mysql, dboptions, 'single'))
app.use(express.urlencoded({extended: false}))

//routes
app.use('/', customerRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public')));

//starting server

app.listen(app.get('port'), () =>{
    console.log('Server on port 3000')
})

