const inputEl = document.querySelector('#font-size-control')
const textEL = document.querySelector('#text')
   textEL.style.fontSize = inputEl.value + 'px' ;
inputEl.addEventListener("input", function changeFontSize(event) {
   
   textEL.style.fontSize = event.currentTarget.value + 'px' ;


}
)