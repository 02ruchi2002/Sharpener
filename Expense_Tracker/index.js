
const EXPENSE_KEY = "expenseList";

let editId = null;

function handleSubmit(event){
    event.preventDefault();

    const submitBtn = document.querySelector("#submitBtn")

    let type = submitBtn.textContent

    if(type == 'Edit'){
     const amount = event.target.amount.value;
    const description = event.target.description.value;
    const category = event.target.category.value;

    let expenseList = JSON.parse(localStorage.getItem(EXPENSE_KEY))

    expenseList = expenseList.map((item)=>{
        if(item.id == editId){
            return{
                ...item,
                amount,
                description,
                category
            };
        }
        return item;
    })
    localStorage.setItem(EXPENSE_KEY,JSON.stringify(expenseList));

    document.querySelector('ul').innerHTML = "";

    expenseList.forEach(element =>  display(element)
    );

    event.target.reset();

    submitBtn.textContent = "Add"

    editId = null;

    }else{
    const amount = event.target.amount.value;
    const description = event.target.description.value;
    const category = event.target.category.value;

    const expenseList = JSON.parse(localStorage.getItem(EXPENSE_KEY))

    const expenseDetail = {
        id: Date.now(),
        amount,
        description,
        category,
    }
    
    expenseList.push(expenseDetail)
   
    localStorage.setItem(EXPENSE_KEY, JSON.stringify(expenseList))
    
    event.target.reset()
   
    display(expenseDetail);
}

}


function display(expense){

    let ulEle = document.querySelector('ul')

        let liEle = document.createElement('li')

        liEle.textContent = expense.amount + " " + expense.description + " " + expense.category;
        
        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = "Delete expense"

        deleteBtn.addEventListener('click',()=>deleteExpense(expense.id,liEle))
        
        const editBtn = document.createElement('button')
        editBtn.textContent = "Edit expense"
        
        editBtn.addEventListener('click',()=>editExpense(expense))

        liEle.appendChild(deleteBtn)
        liEle.appendChild(editBtn)

        ulEle.appendChild(liEle)

}


function deleteExpense(id,liEle){

    let expenseList = JSON.parse(localStorage.getItem(EXPENSE_KEY))
   let newExpenseList = [];

   for(let item of expenseList){
       if(item.id != id){
        newExpenseList.push(item)
       }
   }

   localStorage.setItem(EXPENSE_KEY,JSON.stringify(newExpenseList))

   liEle.remove();

}


function editExpense(expense){
   const amount = document.querySelector("#amount")
   const description = document.querySelector("#description")
   const category = document.querySelector("#category")

   amount.value = expense.amount
   description.value = expense.description
   category.value = expense.category

   const editBtn = document.querySelector("#submitBtn")

   editBtn.textContent = 'Edit'

   editId = expense.id;

}


(()=>{
    if(!localStorage.getItem("expenseList")){
       localStorage.setItem("expenseList", JSON.stringify([]))
    }else{
        let list = JSON.parse(localStorage.getItem('expenseList'))
        for(let i=0;i<list.length;i++){
            display(list[i])
        }
    }
})()