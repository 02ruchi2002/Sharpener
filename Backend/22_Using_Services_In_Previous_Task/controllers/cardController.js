
const getCardByUserId = (req,res) =>{
   res.send(`Fetching cart for user with ID: ${req.params.userId}`)
}

const addProductInCardByUserId = (req,res)=>{
    res.send(`Adding product to cart for user with ID: ${userId}`)
}

module.exports = {
    getCardByUserId,
    addProductInCardByUserId
}