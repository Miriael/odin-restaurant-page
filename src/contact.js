function createContact() {
  const content = document.querySelector('div#content');
  content.innerHTML = '';
  const contactheader = document.createElement('h1');
  contactheader.innerHTML = "Contact us!";
  content.appendChild(contactheader);
  const contactblurb = document.createElement('p');
  contactblurb.innerHTML = "Address: Somethingorother street 11<br>Phone number: 123-456-78<br>Email: dramigo@dramigo.com";
  content.appendChild(contactblurb);
}

export { createContact }