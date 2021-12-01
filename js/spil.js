"use strict";


/*
Fetches json data from the file products.json
*/
let _spil = [];
async function fetchForside() {
  const response = await fetch('json/spil.json');
  const data = await response.json();
  _spil= data;
  console.log(_spil);
  appendForside(_spil);
}

fetchForside();


function appendForside(spils) {
  let htmlTemplate = "";
  for (let spil of spils) {
    htmlTemplate += /*html*/`
      <article>
        <article>
         <h1>${spil.title}</h1>
         <p>${spil.description}</p>
         <p>${spil.gameinfo}</p>
         <p>${spil.disclaimer}</p>
        </article>
          `;
  }
  document.querySelector('#spil').innerHTML = htmlTemplate;
}

