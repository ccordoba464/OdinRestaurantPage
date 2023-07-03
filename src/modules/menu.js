function loadMenu() {
  const home = document.getElementById("home");
  while (home.firstChild) {
    home.firstChild.remove();
  }
  const menu = document.createElement("div");
  menu.id = "menu";

  home.appendChild(menu);
}

export default loadMenu;
