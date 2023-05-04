/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function home(container) {\n  container.innerHTML = `\n          <h3>HERZLICH WILLKOMMEN BEIM MESSNERWIRT*** IN ANTHOLZ</h3>\n          <h4>Über uns</h4>\n          <p>\n            Inmitten des Antholzertales in Südtirol, umrahmt von der mächtigen\n            Rieserfernergruppe, dem Kronplatz und den Dolomiten, liegen unser\n            Hotel und das Messnerwirtsgut. Unsere Gäste schwärmen besonders von\n            der heimeligen Atmosphäre, gepaart mit noch ursprünglicher und\n            echter Gastfreundschaft und Herzlichkeit und den kulinarisch\n            kreativen Köstlichkeiten aus frischen, natürlichen Produkten unseres\n            Bauernhofs.\n          </p>\n          <p> Wir freuen uns auf Sie! </p>\n          <h4>Öffnungszeiten</h4>\n          <p>Dienstag bis Sonntag: 12-14 Uhr und 18 bis 21 Uhr</br>Montag Ruhetag</p>\n          <h4>Adresse</h4>\n          <p>Niedertaler Straße, 5, 39030 Antholz Niedertal</br> Provinz Bozen - Südtirol, Italien</p>\n        `;\n}\nfunction menu(container) {\n  container.innerHTML = `\n  <h3>Menü</h3>\n  <p>\n  <div class=\"foodcontainer\">\n    <div class=\"food\"\n    style=\"background: url('../images/tiroler-speckknoedel-img-133349.jpg') \n    no-repeat center;\n    background-size: cover;\">\n    </div>\n    <div class=\"footdescription\">Südtiroler Speckknödel</div>\n    <div class=\"price\">10€</div>\n  </div>\n  </p>\n  <div class=\"foodcontainer\">\n    <div class=\"food\"\n    style=\"background: url('../images/spinatknoedel-e1662105655573.jpg') \n    no-repeat center;\n    background-size: cover;\">\n    </div>\n    <div class=\"fooddescription\">Hausgemachte Spinatknödel</div>\n    <div class=\"price\">10€</div>\n  </div>\n  </p>\n  <p>\n  <div class=\"foodcontainer\">\n    <div class=\"food\"\n    style=\"background: url('../images/schlutzkrapfen-3e2c0f2592c2d8775d4aff25d4007517-et2011091122-jpg--4889-.jpg') \n    no-repeat center;\n    background-size: cover;\">\n    </div>\n    <div class=\"fooddescription\">Schlutzkrapfen</div>\n    <div class=\"price\">13€</div>\n  </div>\n  </p>\n  <p>\n  <div class=\"foodcontainer\">\n    <div class=\"food\"\n    style=\"background: url('../images/J_Tiroler_Gröstl.jpg') \n    no-repeat center;\n    background-size: cover;\">\n    </div>\n    <div class=\"fooddescription\">Tiroler Gröstl</div>\n    <div class=\"price\">14€</div>\n  </div>\n  </p>\n  <p>\n  <div class=\"foodcontainer\">\n    <div class=\"food\"\n    style=\"background: url('../images/hirschrueckensteak-default.jpg') \n    no-repeat center;\n    background-size: cover;\">\n    </div>\n    <div class=\"fooddescription\">Antholzer Hirschrückensteak</div>\n    <div class=\"price\">33€</div>\n  </div>\n  </p>\n  <p>\n  <div class=\"foodcontainer\">\n    <div class=\"food\"\n    style=\"background: url('../images/Recipe_178.jpg') \n    no-repeat center;\n    background-size: cover;\">\n    </div>\n    <div class=\"fooddescription\">Zwiebelrostbraten</div>\n    <div class=\"price\">25€</div>\n  </div>\n  </p>\n  <p>\n`;\n}\nfunction contact(container) {\n  container.innerHTML = `\n          <h3>Kontakt</h3>\n          <p>\n          <i class=\"fa-solid fa-phone\"></i>+39 0474 492 144\n          </p>\n          <p>\n          <i class=\"fa-solid fa-envelope\"></i>info@hotelmessnerwirt.com\n          </p>\n  `;\n}\nwindow.addEventListener(\"load\", () => {\n  let content = document.getElementById(\"content\");\n  content.innerHTML = `\n      <div class=\"header\">\n        <div class=\"item\" id=\"home\">Home</div>\n        <div class=\"item\" id=\"menu\">Menü</div>\n        <div class=\"item\" id=\"contact\">Kontakt</div>\n      </div>\n      <div class=\"container\"></div>\n  `;\n  let container = document.querySelector(\".container\");\n  home(container);\n  let buttonHome = document.getElementById(\"home\");\n  let buttonMenu = document.getElementById(\"menu\");\n  let buttonContact = document.getElementById(\"contact\");\n\n  buttonHome.addEventListener(\"click\", () => {\n    home(container);\n  });\n  buttonMenu.addEventListener(\"click\", () => {\n    menu(container);\n  });\n  buttonContact.addEventListener(\"click\", () => {\n    contact(container);\n  });\n});\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;