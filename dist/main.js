(()=>{"use strict";const e=function(){const e=document.getElementById("home");for(;e.firstChild;)e.firstChild.remove();const t=document.createElement("div");t.id="description",t.textContent="Rimbo's Pizzeria is the greatest pizzeria you will step foot in. Pizza made with love and care by fellow Vowel Gang member Rimbo, along with his crewmates SJ and Zeke.",e.appendChild(t)},t=function(){const e=document.getElementById("home");for(;e.firstChild;)e.firstChild.remove();const t=document.createElement("div");t.id="contacts";const n=document.createElement("div");n.classList.add("contact"),n.textContent="Chef: Rimbo";const c=document.createElement("div");c.classList.add("contact"),c.textContent="Manager: Zeke";const o=document.createElement("div");o.classList.add("contact"),o.textContent="Waiter: SJ",t.append(n,c,o),e.appendChild(t)},n=function(){const e=document.getElementById("home");for(;e.firstChild;)e.firstChild.remove();const t=document.createElement("div");t.id="menu";const n=document.createElement("div");n.classList.add("menu-item"),n.textContent="Cheese Pizza: Gold AR level Pizza";const c=document.createElement("div");c.classList.add("menu-item"),c.textContent="Pepperoni Pizza: SJ and Zeke sliced pepperoni slices on cheese";const o=document.createElement("div");o.classList.add("menu-item"),o.textContent="Meat Lovers Pizza: If you love meat :D";const d=document.createElement("div");d.classList.add("menu-item"),d.textContent="Hawaiian Pizza: Cheese Pizza but made by a Hawaiian dude",t.append(n,c,o,d),e.appendChild(t)};(function(){const e=document.getElementById("content"),t=function(){const e=document.createElement("div"),t=document.createElement("div");t.id="title",t.textContent="Rimbo's Pizzeria",e.id="header";const n=function(){const e=document.createElement("nav");e.id="nav";const t=document.createElement("ul"),n=document.createElement("li");n.textContent="Home",n.id="homeTab";const c=document.createElement("li");c.textContent="Contact",c.id="contactTab";const o=document.createElement("li");return o.textContent="Menu",o.id="menuTab",t.append(n,c,o),e.appendChild(t),e}();return e.append(t,n),e}(),n=function(){const e=document.createElement("div");return e.id="home",e}();e.append(t,n)})(),e(),function(){const c=document.getElementById("homeTab"),o=document.getElementById("contactTab"),d=document.getElementById("menuTab");c.addEventListener("click",e),o.addEventListener("click",t),d.addEventListener("click",n)}()})();