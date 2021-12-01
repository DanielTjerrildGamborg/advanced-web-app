"use strict";


/*
Fetches json data from the file products.json
*/
let _spil = [];
async function fetchSpil() {
  const response = await fetch('json/spil.json');
  const data = await response.json();
  _spil= data;
  console.log(_spil);
  appendSpil(_spil);
}

fetchSpil();


function appendSpil(spils) {
  let htmlTemplate = "";
  for (let spil of spils) {
    htmlTemplate += /*html*/`
      <article>
        <article>
         <h1>${spil.title}</h1>
         <p>${spil.description}</p>
         <p>${spil.gameinfo}</p>
         <p>${spil.disclaimer}</p>
         <iframe src="https://showcase.leadfamly.com/oscar-projekt-dont-delete?onlyflow=1&iframe=dontbreakout" style="border:none;width:100%;height:500px;" scrolling="no" allow="autoplay; fullscreen"></iframe>
        </article>
          `;
  }
  document.querySelector('#spil').innerHTML = htmlTemplate;
}

