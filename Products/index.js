
let BASE_URL = "https://crudcrud.com/api/980ca1387f8b41aebe785b94f4a299f0/addProduct"

function handleAddProduct(event) {
    event.preventDefault();

    let productDetails = {
        price: event.target.price.value,
        name: event.target.name.value,
    };

    axios.post(`${BASE_URL}`, productDetails)
        .then((resp) => {
            showProductList(resp.data)
            const total = document.getElementById('total')
            total.textContent = Number(total.textContent) + Number(resp.data.price)
        }).catch((error) => {
            console.log(error)
        })
    event.target.reset();
}


function showProductList(data) {

    let ul = document.getElementById('ul')

    let li = document.createElement('li')

    li.textContent = `${data.price}   , ${data.name} `

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = "Delete Product"

    deleteBtn.addEventListener('click', () => deleteProduct(data, li))

    li.appendChild(deleteBtn)

    ul.appendChild(li)

}

function deleteProduct(data, li) {
    axios.delete(`${BASE_URL}/${data._id}`)
        .then((resp) => {
            li.remove()
            let total = document.getElementById('total')
            total.textContent = Number(total.textContent) - Number(data.price)
        }).catch((error) => {
            console.log(error)
        })
}

function getProductList() {
    axios.get(`${BASE_URL}`)
        .then((resp) => {
            resp.data.forEach((data) => {
                showProductList(data)
                let total = document.getElementById('total')
                total.textContent = Number(total.textContent) + Number(data.price)
            })
        }).catch((error) => {
            console.log(error)
        })
}


window.addEventListener('DOMContentLoaded', () => getProductList())