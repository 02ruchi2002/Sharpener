const db = require('../utils/db_connection')
const Expense = require('../models/expense')


const getAllExpense = async(req,res) =>{
    console.log("inside get")
  try {
    const  allExpense = await Expense.findAll();
    
    res.status(200).json({
        message:'expense fetched successfuly',
        data:allExpense
    })
    
  } catch (error) {
    res.status(500).json({
        message:error
    })
  }
}



const addExpense = async(req,res) =>{
    console.log("inside post")
    try {
        const {amount,description,category} = req.body
        const expense = await Expense.create({
           amount:amount,
           description:description,
           category:category
        })

        res.status(201).json({message:'expense added successfuly'})
    } catch (error) {
        res.status(500).json({message:error})
    }
}



const deleteExpense = async(req,res) =>{
    console.log("inside delete")
   try {
    const {id} = req.params;

    const deleteExpense = await Expense.destroy({
        where:{
            id:id
        }
    })

    if(deleteExpense === 0){
        res.status(404).json({message:'expense not found'})
    }

    res.status(200).json({message:'expense deleted'})
    
   } catch (error) {
    res.status(500).json({message:error})
   }
}



const editExpense = async(req,res) =>{
    console.log("inside edit")
  try {
    const {amount,description,category} = req.body;
    const {id} = req.params;

    console.log(id)

    const editExpense = await Expense.findByPk(id)

    if(!editExpense){
        res.status(404).json({message:'expense not found'})
    }

    editExpense.amount = amount;
    editExpense.description = description;
    editExpense.category = category;

    await editExpense.save();

    res.status(200).json({message:'expense has been updated'})
    
  } catch (error) {
    res.status(500).json({message:error})
  }
}



module.exports = {
   getAllExpense,
   addExpense,
   deleteExpense,
   editExpense
};