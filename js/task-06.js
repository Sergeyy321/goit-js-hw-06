const inputEl = document.querySelector('#validation-input')

const maxLengthEl = inputEl.getAttribute('data-length')



inputEl.addEventListener('blur', function total() {
    console.log(inputEl.value.length)
    if (inputEl.value.length < maxLengthEl || inputEl.value.length > maxLengthEl) {
      inputEl.style.borderColor = "#f44336";
    }
  if (inputEl.value.length == maxLengthEl ) {
   inputEl.style.borderColor = "#4caf50";
     

    } 
   
    
}
 
)