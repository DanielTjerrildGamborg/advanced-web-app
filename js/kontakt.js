"use strict";


/*
Fetches json data from the file products.json
*/
let _contacts = [];
async function fetchKontakt() {
  const response = await fetch('json/kontakt.json');
  const data = await response.json();
  _contacts= data;
  console.log(_contacts);
  appendKontakt(_contacts);
}

fetchKontakt();


function appendKontakt(contacts) {
  let htmlTemplate = "";
  for (let contact of contacts) {
    htmlTemplate += /*html*/`
      <article>
        <article>
         <h1>${contact.title}</h1>
         <p>${contact.description}</p>
         <h2>${contact.hoursheader}</h2>
         <p>${contact.hours}</p>
         <h2>${contact.contactheader}</h2>
         <p>${contact.contact}</p>
         <p>${contact.address}</p>
        </article>
          `;
  }
  document.querySelector('#kontakt').innerHTML = htmlTemplate;
}

