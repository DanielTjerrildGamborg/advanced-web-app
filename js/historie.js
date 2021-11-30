"use strict";


/*
Fetches json data from the file products.json
*/

let _products = [];
async function fetchData() {
  const response = await fetch('js/data.json');
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
      <article>
        <article>
         <h1>${product.historie.title}
        </article>
          `;
  }
  document.querySelector('#historie').innerHTML = htmlTemplate;
}