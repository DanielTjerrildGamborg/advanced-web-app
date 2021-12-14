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
    <article class="outer-flexbox">
    <div class="inner-flexbox">
         <h1>${historie.title}</h1>
         <p>${historie.description}</p>
         </div>
         <img src="${historie.img}" alt="${historie.alt}" class="main-img">
        </article>
          `;
  }
  document.querySelector('#historie').innerHTML = htmlTemplate;
}

