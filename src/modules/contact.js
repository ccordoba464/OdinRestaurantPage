function loadContact() {
  const home = document.getElementById("home");
  const description = document.createElement("div");
  description.id = "contacts";

  home.appendChild(description);
}

export default loadContact;