const express = require('express')
const router = express.Router()
const Orders=require('../models/OrdersModel')
const { trusted } = require('mongoose')
// const validate = require('../config/auth')

router.get('/all',async(req,res)=>
{
    try{
        const orders = await Orders.find()
        res.status(200).json(orders)
    }
    catch(error){
        res.status(500).json({message:error})
    }
})
//POST
router.post('/add',async(req,res)=>{
    try{
        const OrderData = new Orders(req.body)
        const {userID,phone,price,email,orderDate, shippingDate} = OrderData
        if(!userID||!phone||!price||!email||!orderDate||!shippingDate){
            res.status(401).json({message:"All fields required"})  
        }
        const storedata = await OrderData.save()
        res.status(201).json(OrderData)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})


//PUT
router.put('/edit/:id',async(req,res)=>{
    try{
        const id = req.params.id
        const existingorder = await Orders.findOne({_id:id})
        if(!existingorder){
            res.status(404).json({message:"Product not found"})
        }
        const updateorder = await Orders.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(updateorder)
    }  
    catch(error){
        res.status(500).json({message:error.message})
    }  
})

//DELETE
router.delete('/delete/:id',async(req,res)=>{
    try{
        const id = req.params.id
        const existingorder = await Orders.findOne({_id:id})
        if(!existingorder){
            res.status(404).json({message:"Order not found"})
        }
        await Orders.findByIdAndDelete(id)
        res.status(200).json({message:"Product Deleted"})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})
module.exports= router