
const BASE_URL = 'http://localhost:3200/item'


function handleSubmit(event) {
   event.preventDefault();

      let itemDetails = {
         itemName: event.target.itemName.value,
         description: event.target.description.value,
         price: event.target.price.value,
         quantity: event.target.quantity.value,
      }
    

      axios.post(`${BASE_URL}/add`, itemDetails)
         .then((resp) => {
            // console.log(resp)
            showItem(resp.data)
            let ulEle = document.getElementById('ul')
            ulEle.innerHTML = null;
            getItem();
            event.target.reset();
         }).catch((error) => {
            console.log(error)
         })

}

function showItem(data) {
   const ul = document.getElementById('ul')

   const li = document.createElement('li')

   li.textContent = `${data.itemName}  ${data.description}  ${data.price}  ${data.quantity}`

   const buyOne = document.createElement('button')
   buyOne.textContent = 'Buy 1'
   buyOne.addEventListener('click', () => buy1(data.id))

   const buyTwo = document.createElement('button')
   buyTwo.textContent = 'Buy 2'
   buyTwo.addEventListener('click', () => buy2(data))

   const buyThree = document.createElement('button')
   buyThree.textContent = 'Buy 3'
   buyThree.addEventListener('click', () => buy3(data))


   li.appendChild(buyOne)
   li.appendChild(buyTwo)
   li.appendChild(buyThree)

   ul.appendChild(li);
}


function buy1(id){
   console.log(id)

   const quantity = document.getElementById('quantity')

   let  no = quantity.textContent

    quantity.textContent = no - 1

}

function buy2(data){
   

}

function buy3(data){
   

}


function getItem() {
   axios.get(BASE_URL).then((resp) => {
      //   console.log(resp.data.data)
      resp.data.data.forEach((data) => {
         showItem(data)
      });
   }).catch((error) => {
      console.log(error)
   })
}

window.addEventListener('DOMContentLoaded', () => getItem())