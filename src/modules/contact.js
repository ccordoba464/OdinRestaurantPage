function loadContact() {
  const home = document.getElementById("home");
  while (home.firstChild) {
    home.firstChild.remove();
  }
  const contacts = document.createElement("div");
  contacts.id = "contacts";

  home.appendChild(contacts);
}

export default loadContact;
