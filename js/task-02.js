const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

 const ingredientsEl = document.querySelector("ul")

ingredients.forEach(function (elem) {
  const liEl = document.createElement("li") 
  liEl.classList.add("item")
  liEl.textContent = elem


  console.log(ingredientsEl.appendChild(liEl))

}
)