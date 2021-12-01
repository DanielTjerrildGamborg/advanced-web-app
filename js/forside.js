"use strict";


/*
Fetches json data from the file products.json
*/
let _contents = [];
async function fetchForside() {
  const response = await fetch('json/forside.json');
  const data = await response.json();
  _contents= data;
  console.log(_contents);
  appendForside(_contents);
}

fetchForside();


function appendForside(contents) {
  let htmlTemplate = "";
  for (let content of contents) {
    htmlTemplate += /*html*/`
      <article>
         <h1>${content.title}</h1>
         <p>${content.description}</p>
         <img src="${content.img}">
        </article>
          `;
  }
  document.querySelector('.grid-container').innerHTML = htmlTemplate;
}

