"use strict";


/*
Fetches json data from the file products.json
*/

let _content = [];
async function fetchData() {
  const response = await fetch('js/data.json');
  const data = await response.json();
  _content = data;
  console.log(data.forside);
  appendForside(_content);
}

fetchData();


function appendForside(contents) {
  let htmlTemplate = "";
  for (let content of contents) {
    htmlTemplate += /*html*/`
      <article>
        <article>
         <h1>${content.forside.title}
        </article>
          `;
  }
  document.querySelector('#forside').innerHTML = htmlTemplate;
}