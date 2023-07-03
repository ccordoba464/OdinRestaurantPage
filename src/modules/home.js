function loadHome() {
  const content = document.getElementById("content");

  const header = document.createElement("div");
  header.id = "header";
  header.textContent = "Rimbo's Pizzeria";

  const home = document.createElement("div");
  home.id = "home";

  const description = document.createElement("div");
  description.id = "description";
  description.textContent =
    "Rimbo's Pizzeria is the greatest pizzeria you will step foot in. Pizza made with love and care by fellow Vowel Gang member Rimbo, along with his crewmates SJ and Zeke.";

  home.appendChild(description);
  content.append(header, home);
}

export default loadHome;
