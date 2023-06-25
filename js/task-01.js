const allCategoriesEl = document.querySelectorAll(".item") 
console.log("Number of categories:",allCategoriesEl.length)


// console.log("Category:",categories.textContent,"Elements:")
allCategoriesEl.forEach((elem) =>  {
    console.log("Category:", elem.children[0].textContent)
    console.log("Elements:",elem.children[1].children.length)
}
)