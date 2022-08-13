import Burger from './img/borgar.png';

function createHome() {
  const content = document.querySelector('div#content');
  content.innerHTML = '';
  const homeContainer = document.createElement('div')
  homeContainer.setAttribute('class', 'homecontainer container')
  content.appendChild(homeContainer)
  const homeheader = document.createElement('h1');
  homeheader.innerHTML = "Dr. Amigo's Burger Palace";
  homeContainer.appendChild(homeheader);
  const homeimage = new Image();
  homeimage.src = Burger;
  homeContainer.appendChild(homeimage);
  const homeblurb = document.createElement('p');
  homeblurb.innerHTML = "Delicious, finger licking good burgers await you at the famous Dr. Amigo's Burger Palace!";
  homeContainer.appendChild(homeblurb);
}

export { createHome }