function loadContact() {
  const home = document.getElementById("home");
  while (home.firstChild) {
    home.firstChild.remove();
  }
  const contacts = document.createElement("div");
  contacts.id = "contacts";

  const contact1 = document.createElement("div");
  contact1.classList.add("contact");
  contact1.textContent = "Chef: Rimbo";

  const contact2 = document.createElement("div");
  contact2.classList.add("contact");
  contact2.textContent = "Manager: Zeke";

  const contact3 = document.createElement("div");
  contact3.classList.add("contact");
  contact3.textContent = "Waiter: SJ";

  contacts.append(contact1, contact2, contact3);

  home.appendChild(contacts);
}

export default loadContact;
