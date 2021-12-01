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
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1110.8309201322872!2d10.218737458343341!3d56.16295118870878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c3ffb13ce65bf%3A0xf48609e661e1256c!2sHveensgade%201%2C%208000%20Aarhus!5e0!3m2!1sda!2sdk!4v1638353209584!5m2!1sda!2sdk" width="90%" height="90%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </article>
          `;
  }
  document.querySelector('#kontakt').innerHTML = htmlTemplate;
}

