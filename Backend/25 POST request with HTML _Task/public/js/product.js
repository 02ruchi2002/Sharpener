const onSubmitHandler = (event) =>{
   event.preventDefault()
   console.log("inside submit function")
   const product = event.target.productName.value;

   const obj = {
    productName:product
   }

   axios.post('http://localhost:3200/'+'products',obj).then((result)=>{
      console.log('value return from  post request'+ result.data.value)
   }) 
}