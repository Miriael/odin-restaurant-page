function createMenu() {
  const content = document.querySelector('div#content');
  content.innerHTML = '';
  const menuContainer = document.createElement('div')
  menuContainer.setAttribute('class', 'menucontainer container')
  content.appendChild(menuContainer)
  const menuHeader = document.createElement('h1');
  menuHeader.innerHTML = 'Menu';
  menuContainer.appendChild(menuHeader);
  const menuContent = document.createElement('p');
  menuContent.innerHTML = "American style borgler: 2$<br>Dr. Amigo's Special: 5$<br>Cheeseborgler: 2$<br>Double borgler: 5$";
  menuContainer.appendChild(menuContent);  
}

export { createMenu }