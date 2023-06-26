const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

 const ingredientsEl = document.querySelector("ul")
 const totalEl = []
ingredients.forEach(function (elem) {
   const liEl = document.createElement("li") 
  totalEl.push(liEl)
  liEl.classList.add("item")
  liEl.textContent = elem




}
)
  console.log(ingredientsEl.append(...totalEl))