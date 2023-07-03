function loadMenu() {
  const home = document.getElementById("home");
  while (home.firstChild) {
    home.firstChild.remove();
  }
  const menu = document.createElement("div");
  menu.id = "menu";

  const menuItem1 = document.createElement("div");
  menuItem1.classList.add("menu-item");
  menuItem1.textContent = "Cheese Pizza: Gold AR level Pizza";

  const menuItem2 = document.createElement("div");
  menuItem2.classList.add("menu-item");
  menuItem2.textContent =
    "Pepperoni Pizza: SJ and Zeke sliced pepperoni slices on cheese";

  const menuItem3 = document.createElement("div");
  menuItem3.classList.add("menu-item");
  menuItem3.textContent = "Meat Lovers Pizza: If you love meat :D";

  const menuItem4 = document.createElement("div");
  menuItem4.classList.add("menu-item");
  menuItem4.textContent =
    "Hawaiian Pizza: Cheese Pizza but made by a Hawaiian dude";

  menu.append(menuItem1, menuItem2, menuItem3, menuItem4);

  home.appendChild(menu);
}

export default loadMenu;
