import './style.css';

let content = document.querySelector('div#content')

/*
let header = document.createElement('div');
content.before(header);
let headline = document.createElement('h1');
headline.innerHTML = "Dr. Amigo's Pizza";
header.appendChild(headline);
*/

let navcont = document.createElement('div');
navcont.setAttribute('class', 'nav');
content.before(navcont);
let button1 = document.createElement('button');
button1.setAttribute('class', 'nav__button');
button1.innerHTML = 'Home';
navcont.appendChild(button1);
let button2 = document.createElement('button');
button2.setAttribute('class', 'nav__button');
button2.innerHTML = 'Contact';
navcont.appendChild(button2);
let button3 = document.createElement('button');
button3.setAttribute('class', 'nav__button');
button3.innerHTML = 'Menu';
navcont.appendChild(button3);