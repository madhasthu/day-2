//console.log('hi')
const express = require('express')
 const port=3000  //port should < 9000

 const app=express()

 
app.use(express.json())

app.get('/',(req,res) => {
    res.status(200).json("Hello");
}) 

 app.listen(port,() => {

   // console.log(" hiiiii "+ port)
    console.log("server is running in port: ${port}")
 }
)