
function handleAddVeg(event){
    event.preventDefault();

   let vegDetails = {
       name: event.target.name.value,
       price: event.target.price.value,
       quantity: event.target.quantity.value,
   };

   axios.post('https://crudcrud.com/api/fd736367023145a3bf5350d3efddd626/addVegList',vegDetails)
   .then((resp)=>{
       showVegList(resp.data)
       const total = document.getElementById('total')
       total.textContent = Number(total.textContent) + 1
   }).catch((error)=>{
      console.log(error)
   })
   event.target.reset();
}


function showVegList (data) {
  let ul = document.getElementById('ul')

  ul.innerHTML = null;

  let li = document.createElement('li')

  let input = document.createElement('input')

  input.type = "number";

  let selectedQuantity = 0;

  input.addEventListener('change',(event)=>{
      selectedQuantity = event.target.value
      input.textContent = event.target.value
  })

  li.textContent =  `${data.name}   ,   RS:${data.price}   ,   ${data.quantity}KG    `

  li.style.listStyle = "none"

  let buyBtn = document.createElement('button')
  buyBtn.textContent = "Buy"

  buyBtn.addEventListener('click',()=> buyVeg(data._id,li,data.quantity,data.name,data.price,selectedQuantity))
  
  let deleteBtn = document.createElement('button')
  deleteBtn.textContent = "Delete"

  deleteBtn.addEventListener('click', ()=> deleteVeg(data._id,li))


  li.appendChild(input)

  li.appendChild(buyBtn)

  li.appendChild(deleteBtn)
  
  ul.appendChild(li)

}

function buyVeg(id,li,quantity,name,price,selectedQuantity){
    axios.put(`https://crudcrud.com/api/fd736367023145a3bf5350d3efddd626/addVegList/${id}`,{
         id:id,
         name:name,
         price:price,
         quantity:Math.abs(quantity-selectedQuantity),
    })
    .then((resp)=>{
        getVegList()
    }).catch((error)=>{
       console.log(error)
    })
}

function deleteVeg(id,li){
    axios.delete(`https://crudcrud.com/api/fd736367023145a3bf5350d3efddd626/addVegList/${id}`)
    .then((resp)=>{
        li.remove()
        let total = document.getElementById('total')
        total.textContent = Number(total.textContent) - 1
    }).catch((error)=>{
       console.log(error)
    })
}

function getVegList(){
  axios.get('https://crudcrud.com/api/fd736367023145a3bf5350d3efddd626/addVegList')
 .then((resp)=>{
     resp.data.forEach(data=>showVegList(data))
       document.getElementById('total').textContent = resp.data.length;
 }).catch((error)=>{
    console.log(error)
 })
}


window.addEventListener('DOMContentLoaded',()=>getVegList())