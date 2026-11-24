const db = require('../utils/db_connection')
const DashboardItem = require('../models/items')


const getAllItems = async(req,res) =>{
    console.log("inside get")
  try {
    const  allItems = await DashboardItem.findAll();
    
    res.status(200).json({
        message:'items fetched successfuly',
        data:allItems
    })
    
  } catch (error) {
    res.status(500).json({
        message:error
    })
  }
}



const addItem = async(req,res) =>{
    console.log("inside post")
    try {
        const {itemName,description,price,quantity} = req.body
        const item = await DashboardItem.create({
          itemName:itemName,
          description:description,
          price:price,
          quantity:quantity
        })

        res.status(201).json({message:'item added successfuly'})
    } catch (error) {
        res.status(500).json({message:error})
    }
}



module.exports = {
  getAllItems,
  addItem
};