
const formEl = document.querySelector('.login-form')





formEl.addEventListener('submit', function submit(event) {
  event.preventDefault()
  const {email,password} = event.currentTarget.elements

    if (!email.value || !password.value) {
      alert('Всі поля повинні бути заповнені!')
    } else {
      const dataEl = {
  email: email.value,
password:password.value

      }
    console.log(dataEl)  
    }
  formEl.reset()
})