const BASE_URL = 'http://localhost:3200/appointments'

let appointmentId = null;

function handleSubmit(event) {
   event.preventDefault();

   const submitBtn = document.getElementById('submitBtn')

   const type = submitBtn.textContent;

   if (type == 'Edit') {
      const userName = event.target.userName.value
      const phoneNumber = event.target.phoneNumber.value
      const email = event.target.email.value

      let appointmentDetails = {
         userName,
         phoneNumber,
         email
      }

      axios.put(`${BASE_URL}/update/${appointmentId}`, appointmentDetails)
         .then((resp) => {
            console.log(resp.data)
            alert('Appointment updated')
            let ulEle = document.getElementById('ul')
            ulEle.innerHTML = null;
            getAppointments();
         }).catch((err) => {
            console.log(err)
            alert(' failed to update appointment')
         })

      event.target.reset();

      submitBtn.textContent = 'Submit'

      appointmentId = null;

   } else {

      let appointmentDetails = {
         userName: event.target.userName.value,
         phoneNumber: event.target.phoneNumber.value,
         email: event.target.email.value
      }
      // console.log(appointmentDetails)

      axios.post(`${BASE_URL}/add`, appointmentDetails)
         .then((resp) => {
            // console.log(resp)
            showAppointments(resp.data)
            let ulEle = document.getElementById('ul')
            ulEle.innerHTML = null;
            getAppointments();
            event.target.reset();
         }).catch((error) => {
            console.log(error)
         })

   }
}

function showAppointments(data) {
   const ul = document.getElementById('ul')

   const li = document.createElement('li')

   li.textContent = `${data.userName}  ${data.email} `

   const editBtn = document.createElement('button')
   editBtn.textContent = 'Edit'
   editBtn.addEventListener('click', () => updateAppointment(data))


   const deleteBtn = document.createElement('button')
   deleteBtn.textContent = 'Delete'
   deleteBtn.addEventListener('click', () => deleteAppointment(data, li))

   li.appendChild(editBtn)
   li.appendChild(deleteBtn)

   ul.appendChild(li);
}


function updateAppointment(data) {
   // console.log(data)

   const userName = document.querySelector('#userName')
   const phoneNumber = document.querySelector('#phoneNumber')
   const email = document.querySelector('#email')

   userName.value = data.userName,
      phoneNumber.value = data.phoneNumber,
      email.value = data.email

   const editBtn = document.getElementById('submitBtn')

   editBtn.textContent = 'Edit'

   appointmentId = data.id

}


function deleteAppointment(data, li) {
   // console.log(data)
   axios.delete(`${BASE_URL}/delete/${data.id}`)
      .then(() => {
         li.remove()
      }).catch((err) => {
         console.log(err)
      })
}


function getAppointments() {
   axios.get(BASE_URL).then((resp) => {
      //   console.log(resp.data.data)
      resp.data.data.forEach((data) => {
         showAppointments(data)
      });
   }).catch((error) => {
      console.log(error)
   })
}

window.addEventListener('DOMContentLoaded', () => getAppointments())