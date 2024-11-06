const express = require("express")
const router = express.Router()
const Products = require('../models/ProductsModel')
//Method:GET|API URL:localhost:3000/products/all
router.get('/all', async (req, res) => {
    try {
        const products = await Products.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message:error});
    }
});
//Method:POST |API localhost:3000/products/add
router.post('/add', async (req, res) => {
    try {
        const ProductData = new Products(req.body)
        const { name, img, price } = ProductData;
        if (!name || !img || !price) {
            res.status(401).json({message:"All fields required"})
        }
        const storedata=await ProductData.save();
        res.status(200).json(ProductData);
    } catch (error){
        res.status(500).json({message:error.message});
    }

});
//Method:PUT |API
router.put('/edit/:id', async (req, res) => {
    try { 
        const id =req.params.id
        const existingproduct = await Products.findOne({ _id:id})
        if (!existingproduct) {
            res.status(404).json({message:"Product not found!"})
        }
        const updateproduct = await Products.findByIdAndUpdate(id, req.body, {new:true})
        res.status(200).json(updateproduct);
    } catch (error){
        res.status(500).json({message:error.message});
    }
});
//DELETE
router.delete('/delete/:id', async (req, res) => {
    try { 
        const id =req.params.id
        const existingproduct = await Products.findOne({ _id:id})
        if (!existingproduct) {
            res.status(404).json({message:"Product not found!"})
        }
        await Products.findByIdAndDelete(id)
        res.status(200).json({message : "product deleted"})
    } catch (error){
        res.status(500).json({message:error.message});
    }
});
module.exports = router;