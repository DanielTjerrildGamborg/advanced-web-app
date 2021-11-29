"use strict";

// =========== Product functionality =========== //
/*
global variables: _products _selectedProductId
*/
let _products = [];
let _selectedProductId;

/*
Fetches json data from the file products.json
*/
async function fetchData() {
  const response = await fetch('json/products.json');
  const data = await response.json();
  _products = data;
  console.log(_products);
  appendProducts(_products);
}

fetchData();


function appendProducts(products) {
  let htmlTemplate = "";
  for (let product of products) {
    htmlTemplate += /*html*/`
      <article class="${product.status}">
        <article>
         
        </article>
          `;
  }
  document.querySelector('#historie').innerHTML = htmlTemplate;
}