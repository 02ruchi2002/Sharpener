const { sendResponse, sendErrorResponse } = require("../utils/response");

const getProduct = (req,res) =>{
   try {
    const id = req.params.id;
    if(id > 10){
         let error = new Error('product not found');
         error.statusCode = 404;

         throw error
    }
    sendResponse(res,id,200)
    
   } catch (error) {
       sendErrorResponse(res,error)
   }
}

const addNewProduct = (req,res) =>{
 try {
        const { productName } = req.body;

        if (!productName) {
            let error = new Error('product name is required')
            error.statusCode = 400;

            throw error;
        }

        const user = { id: 1, name, email }

        return sendResponse(res, productName, 201)

    } catch (err) {
        return sendErrorResponse(res, err)
    }
}

module.exports ={
    getProduct,
    addNewProduct
}