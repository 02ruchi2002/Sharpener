
let BASE_URL = "https://crudcrud.com/api/ff5126c5912e42bd85b8b3486323c2db"

function handleAddProduct(event){
    event.preventDefault();

   let productDetails = {
       price: event.target.price.value,
       name: event.target.name.value,
   };

   axios.post(`${BASE_URL}/addProduct`,productDetails)
   .then((resp)=>{
       showProductList(resp.data)
       const total = document.getElementById('total')
       total.textContent = Number(total.textContent) + Number(resp.data.price)
   }).catch((error)=>{
      console.log(error)
   })
   event.target.reset();
}


function showProductList (data) {

  let ul = document.getElementById('ul')

  let li = document.createElement('li')

  li.textContent =  `${data.price}   , ${data.name} `

  let deleteBtn = document.createElement('button')
  deleteBtn.textContent = "Delete Product"

  deleteBtn.addEventListener('click',()=>deleteProduct(data,li))

  li.appendChild(deleteBtn)
  
  ul.appendChild(li)

}

function deleteProduct(data,li){
    axios.delete(`${BASE_URL}/addProduct/${data._id}`)
    .then((resp)=>{
        li.remove()
        let total = document.getElementById('total')
        total.textContent = Number(total.textContent) - Number(data.price)
    }).catch((error)=>{
       console.log(error)
    })
}

function getProductList(){
  axios.get(`${BASE_URL}/addProduct`)
 .then((resp)=>{
     resp.data.forEach((data) =>{
        showProductList(data)
        let total = document.getElementById('total')
        total.textContent = Number(total.textContent) + Number(data.price)
    })
 }).catch((error)=>{
    console.log(error)
 })
}


window.addEventListener('DOMContentLoaded',()=>getProductList())