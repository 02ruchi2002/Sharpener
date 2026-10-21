const productServices = require('../services/productServices')

const getAllProducts = (req,res) =>{
   res.send(productServices.getAllProducts())
}

const addNewProduct = (req,res)=>{
    res.send(productServices.addNewProduct())
}

const getProductById = (req,res)=>{
    let id = req.params.id
    console.log(id)
    res.send(productServices.getProductById(id))
}

module.exports = {
    getAllProducts,
    addNewProduct,
    getProductById
}

