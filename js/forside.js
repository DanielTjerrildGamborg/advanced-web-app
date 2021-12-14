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
      <article class="outer-flexbox">
         <div class="inner-flexbox">
         <h1>${content.title}</h1>
         <p>${content.description}</p>
         <button type="button" onclick="navigateTo('${content.buttonlink}')" id="main-btn">${content.buttontxt}</button>
         </div>
         <img src="${content.img}" class="main-img" alt="${content.alt}">
        </article>
          `;
  }
  document.querySelector('.forside-section').innerHTML = htmlTemplate;
}

