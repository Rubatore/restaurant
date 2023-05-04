import { header } from "./modules/header.js";
import { home } from "./modules/home.js";
import { contact } from "./modules/contact.js";
import { menu } from "./modules/menu.js";

window.addEventListener("load", () => {
  header();
  home();
  let buttonHome = document.getElementById("home");
  let buttonMenu = document.getElementById("menu");
  let buttonContact = document.getElementById("contact");

  buttonHome.addEventListener("click", () => {
    home();
  });
  buttonMenu.addEventListener("click", () => {
    menu();
  });
  buttonContact.addEventListener("click", () => {
    contact();
  });
});
