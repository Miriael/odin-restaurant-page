import { createContact } from "./contact";
import { createHome } from "./home";

function initPage() {
  const content = document.querySelector('div#content')
  const navcont = document.createElement('div');
  navcont.setAttribute('class', 'nav');
  content.before(navcont);
  const button1 = document.createElement('button');
  button1.setAttribute('class', 'nav__button');
  button1.innerHTML = 'Home';
  button1.addEventListener('click', () => {
    createHome()
  })
  navcont.appendChild(button1);
  const button2 = document.createElement('button');
  button2.setAttribute('class', 'nav__button');
  button2.innerHTML = 'Contact';
  button2.addEventListener('click', () => {
    createContact();
  })
  navcont.appendChild(button2);
  const button3 = document.createElement('button');
  button3.setAttribute('class', 'nav__button');
  button3.innerHTML = 'Menu';
  navcont.appendChild(button3);
}

export { initPage }