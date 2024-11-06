
const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://mhpriya09:905231hari@in-aws.z4ohv.mongodb.net/hari?retryWrites=true&w=majority&appName=IN-AWS")

const connection = mongoose.connection;

connection.on('connected',() =>(console.log("DB connected")))
connection.on('error',()=>(console.log("DB error")))


// const db = require('./config/db')
module.exports = mongoose