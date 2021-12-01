"use strict";


/*
Fetches json data from the file products.json
*/
let _historie = [];
async function fetchHistorie() {
  const response = await fetch('json/historie.json');
  const data = await response.json();
  _historie= data;
  console.log(_historie);
  appendHistorie(_historie);
}

fetchHistorie();


function appendHistorie(historier) {
  let htmlTemplate = "";
  for (let historie of historier) {
    htmlTemplate += /*html*/`
      <article>
         <h1>${historie.title}</h1>
         <p>${historie.description}</p>
         <img src="${historie.img}">
        </article>
          `;
  }
  document.querySelector('.grid-historie').innerHTML = htmlTemplate;
}

