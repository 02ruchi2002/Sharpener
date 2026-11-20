

const BASE_URL = 'http://localhost:3200/expense'

let expenseId = null;

function handleSubmit(event) {
   event.preventDefault();

   const submitBtn = document.getElementById('submitBtn')

   const type = submitBtn.textContent;

   if (type == 'Edit') {
       const amount = event.target.amount.value
       const description = event.target.description.value
      const category = event.target.category.value

      let expenseDetails = {
         amount,
         description,
         category
      }

      axios.put(`${BASE_URL}/update/${expenseId}`, expenseDetails)
         .then((resp) => {
            console.log(resp.data)
            alert('Appointment updated')
            let ulEle = document.getElementById('ul')
            ulEle.innerHTML = null;
            getExpense();
         }).catch((err) => {
            console.log(err)
            alert(' failed to update expense')
         })

      event.target.reset();

      submitBtn.textContent = 'Add'

      expenseId = null;

   } else {

      let expenseDetails = {
         amount: event.target.amount.value,
         description: event.target.description.value,
         category: event.target.category.value
      }
    

      axios.post(`${BASE_URL}/add`, expenseDetails)
         .then((resp) => {
            // console.log(resp)
            showExpense(resp.data)
            let ulEle = document.getElementById('ul')
            ulEle.innerHTML = null;
            getExpense();
            event.target.reset();
         }).catch((error) => {
            console.log(error)
         })

   }
}

function showExpense(data) {
   const ul = document.getElementById('ul')

   const li = document.createElement('li')

   li.textContent = `${data.amount}  ${data.description}  ${data.category}`

   const editBtn = document.createElement('button')
   editBtn.textContent = 'Edit'
   editBtn.addEventListener('click', () => updateExpense(data))


   const deleteBtn = document.createElement('button')
   deleteBtn.textContent = 'Delete'
   deleteBtn.addEventListener('click', () => deleteExpense(data, li))

   li.appendChild(editBtn)
   li.appendChild(deleteBtn)

   ul.appendChild(li);
}


function updateExpense(data) {
   // console.log(data)

   const amount = document.querySelector('#amount')
   const description = document.querySelector('#description')
   const category = document.querySelector('#category')

      amount.value = data.amount,
      description.value = data.description,
      category.value = data.category

   const editBtn = document.getElementById('submitBtn')

   editBtn.textContent = 'Edit'

   expenseId = data.id

}


function deleteExpense(data, li) {
   // console.log(data)
   axios.delete(`${BASE_URL}/delete/${data.id}`)
      .then(() => {
         li.remove()
      }).catch((err) => {
         console.log(err)
      })
}


function getExpense() {
   axios.get(BASE_URL).then((resp) => {
      //   console.log(resp.data.data)
      resp.data.data.forEach((data) => {
         showExpense(data)
      });
   }).catch((error) => {
      console.log(error)
   })
}

window.addEventListener('DOMContentLoaded', () => getExpense())