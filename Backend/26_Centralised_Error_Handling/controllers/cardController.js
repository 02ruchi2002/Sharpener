const { sendResponse, sendErrorResponse } = require("../utils/response");

const getCardByUserId = (req,res) =>{
   try {
    const id = req.params.userId;
    if(id > 10){
         let error = new Error('card not found');
         error.statusCode = 404;

         throw error
    }
    sendResponse(res,id,200)
    
   } catch (error) {
       sendErrorResponse(res,error)
   }
}

const addProductInCardByUserId = (req,res) =>{
 try {
        const { cardDetail } = req.body;

        if (cardDetail) {
            let error = new Error('id is required')
            error.statusCode = 400;

            throw error;
        }

        const user = { id: 1, name, email }

        return sendResponse(res, cardDetail, 201)

    } catch (err) {
        return sendErrorResponse(res, err)
    }
}

module.exports ={
    getCardByUserId,
    addProductInCardByUserId
}