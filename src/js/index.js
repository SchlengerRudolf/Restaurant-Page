import "../styles.css";
import { homepage } from "./homepage.js";
import { menuPage } from "./menuPage.js";
import { aboutPage } from "./aboutPage.js";

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");

homeButton.addEventListener("click", () => {
    homepage.display();
})

menuButton.addEventListener("click", () => {
    menuPage.display();
})

aboutButton.addEventListener("click", () => {
    aboutPage.display();
})

homepage.display();