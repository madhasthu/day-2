const express = require("express")
const User = express.Router()
const user = require('.../models/UserModel')

router.get('/all',async(req,res)=>{
    try{
        const user =await user.find()
        res.status(200).json(user)
    } catch(error){
        res.status(500).json({message:error})
    }
}
)