const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

 let ulEl = document.querySelector(".gallery")
  // let liEl = document.createElement("li")
  // let imgEl = document.createElement("img")


const itemEl = images.map(({ url, alt }) => 
  `<li class=js-item><img src=${url}
alt='${alt}' width="150" height="150" </li> `
).join("")
console.log(itemEl)
ulEl.insertAdjacentHTML("afterbegin",itemEl)

  // imgEl.url = elem.url
  // imgEl.alt = elem.alt
  //  ulEl.append(liEl)
  
  // console.log(liEl.appendChild(imgEl))