const path = require('path')

const getAllProducts = (req,res) =>{
   res.sendFile(path.join(__dirname,'..','view','product.html'))
}

const addNewProduct = (req,res)=>{
    res.send('Adding a new product')
}

const getProductById = (req,res)=>{
    res.send(`Fetching product with ID: ${req.params.id}`)
}

module.exports = {
    getAllProducts,
    addNewProduct,
    getProductById
}

