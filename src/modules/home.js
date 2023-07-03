function loadHome() {
  const home = document.getElementById("home");
  const description = document.createElement("div");
  description.id = "description";
  description.textContent =
    "Rimbo's Pizzeria is the greatest pizzeria you will step foot in. Pizza made with love and care by fellow Vowel Gang member Rimbo, along with his crewmates SJ and Zeke.";

  home.appendChild(description);
}

export default loadHome;
