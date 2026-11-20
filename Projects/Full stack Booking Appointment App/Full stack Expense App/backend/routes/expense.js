const express = require('express');
const expenseController = require('../controller/expense')

const router = express.Router();

router.get('/',expenseController.getAllExpense)
router.post('/add',expenseController.addExpense)
router.put('/update/:id',expenseController.editExpense)
router.delete('/delete/:id',expenseController.deleteExpense)

module.exports = router;