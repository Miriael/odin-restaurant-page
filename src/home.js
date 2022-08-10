import Burger from './img/borgar.png';

function createHome() {
  const content = document.querySelector('div#content');
  content.innerHTML = '';
  const homeheader = document.createElement('h1');
  homeheader.innerHTML = "Dr. Amigo's Burger Palace";
  content.appendChild(homeheader);
  const homeimage = new Image();
  homeimage.src = Burger;
  content.appendChild(homeimage);
  const homeblurb = document.createElement('p');
  homeblurb.innerHTML = "Delicious, finger licking good burgers await you at the famous Dr. Amigo's Burger Palace!";
  content.appendChild(homeblurb);
}

export { createHome }