
/*//import express, { json } from 'express'
const express = require('express')
const app = express()
const port = 3000
const db = require('./config/db')
app.use(express.json())
const Products = require('./routes/ProductRoute')

//const Users=require('./models/UserModel)
app.get('/', (req, res) => res.status(200).json({ message: "Welcome" }))
//localhost:3000/
app.use('/products',Products)
//localhost:3000/products
app.listen(port, (() => console.log(`Listening on ${port}`)))*/



const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
const db = require('./config/db')
const Products = require('./routes/ProductRoute')
const Users = require('./routes/UserRoute')
const Orders = require('./routes/OrderRoute')
const Auth = require('./routes/AuthRoute')
app.get('/', (req, res) => res.status(200).json({ message: "Welcome" }))
app.use('/products', Products)
app.use('/users', Users)
app.use('/orders', Orders)
app.use('/auth', Auth)

app.listen(port, (() => console.log(`Listening on ${port}`)))