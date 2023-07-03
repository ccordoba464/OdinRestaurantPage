import loadPage from "./modules/initial-page-load";
import loadHome from "./modules/home";
import loadContact from "./modules/contact";
import loadMenu from "./modules/menu";

init();

function addNavEvents() {
  const homeTab = document.getElementById("homeTab");
  const contactTab = document.getElementById("contactTab");
  const menuTab = document.getElementById("menuTab");

  homeTab.addEventListener("click", loadHome);
  contactTab.addEventListener("click", loadContact);
  menuTab.addEventListener("click", loadMenu);
}

function init() {
  loadPage();
  loadHome();
  addNavEvents();
}
