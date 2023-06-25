const counterValue = document.querySelector("#value")
const incrementBtn = document.querySelector('[data-action="increment"]')
const decrementBtn = document.querySelector('[data-action="decrement"]')
let count = 0 


const onClick = () => {
   count -= 1 
  counterValue.textContent = count
}
decrementBtn.addEventListener("click",onClick)
const onClickUp = () => {
   count += 1 
counterValue.textContent = count
}
incrementBtn.addEventListener("click",onClickUp)