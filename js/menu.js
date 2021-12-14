"use strict";


/*
Fetches json data from the file products.json
*/
let _menu = [];
async function fetchMenu() {
  const response = await fetch('json/menu.json');
  const data = await response.json();
  _menu= data;
  console.log(_menu);
  appendMenu(_menu);
}

fetchMenu();


function appendMenu(menus) {
  let htmlTemplate = "";
  for (let menu of menus) {
    htmlTemplate += /*html*/`
        <div class="shop-item">
         <span class="shop-item-title">${menu.title}</span>
         <p class="shop-item-description">${menu.description}</p>
         <img src="${menu.img}" class="shop-item-image" alt="${menu.alt}">
         <div class="shop-item-details">
         <span class="shop-item-price">${menu.price} kr.</span>
         <button class="btn btn-primary shop-item-button" type="button">Læg i kurv</button>
         </div>
        </div>
        
          `;
  }
  document.querySelector('.bestil-section').innerHTML = htmlTemplate;
}