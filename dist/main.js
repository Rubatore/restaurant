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

eval("function home(container) {\n  container.innerHTML = `\n          <h3>HERZLICH WILLKOMMEN BEIM MESSNERWIRT*** IN ANTHOLZ</h3>\n          <div class=\"textcontent\">\n          <h4>Über uns</h4>\n          <a>\n            Inmitten des Antholzertales in Südtirol, umrahmt von der mächtigen\n            Rieserfernergruppe, dem Kronplatz und den Dolomiten, liegen unser\n            Hotel und das Messnerwirtsgut. Unsere Gäste schwärmen besonders von\n            der heimeligen Atmosphäre, gepaart mit noch ursprünglicher und\n            echter Gastfreundschaft und Herzlichkeit und den kulinarisch\n            kreativen Köstlichkeiten aus frischen, natürlichen Produkten unseres\n            Bauernhofs.\n          </a>\n          <p> Wir freuen uns auf Sie! </p>\n          <h4>Öffnungszeiten</h4>\n          <p>Dienstag bis Sonntag: 12-14 Uhr und 18 bis 21 Uhr</br>Montag Ruhetag</p>\n          <h4>Adresse</h4>\n          <p>Niedertaler Straße, 5, 39030 Antholz Niedertal</br> Provinz Bozen - Südtirol, Italien</p>\n        `;\n}\nfunction menu(container) {\n  container.innerHTML = `\n            `;\n}\nfunction contact(container) {\n  container.innerHTML = `\n          <h3>HERZLICH WILLKOMMEN BEIM MESSNERWIRT*** IN ANTHOLZ</h3>\n          <div class=\"textcontent\">\n          <h4>Über uns</h4>\n          <a>\n            Inmitten des Antholzertales in Südtirol, umrahmt von der mächtigen\n            Rieserfernergruppe, dem Kronplatz und den Dolomiten, liegen unser\n            Hotel und das Messnerwirtsgut. Unsere Gäste schwärmen besonders von\n            der heimeligen Atmosphäre, gepaart mit noch ursprünglicher und\n            echter Gastfreundschaft und Herzlichkeit und den kulinarisch\n            kreativen Köstlichkeiten aus frischen, natürlichen Produkten unseres\n            Bauernhofs.\n          </a>\n          <p> Wir freuen uns auf Sie! </p>\n          <h4>Öffnungszeiten</h4>\n          <p>Dienstag bis Sonntag: 12-14 Uhr und 18 bis 21 Uhr</br>Montag Ruhetag</p>\n          <h4>Adresse</h4>\n          <p>Niedertaler Straße, 5, 39030 Antholz Niedertal</br> Provinz Bozen - Südtirol, Italien</p>\n          `;\n}\nwindow.addEventListener(\"load\", () => {\n  let content = document.getElementById(\"content\");\n  content.innerHTML = `\n    <div class=\"background\">\n      <div class=\"header\">\n        <div class=\"item\" id=\"home\">Home</div>\n        <div class=\"item\" id=\"menu\">Menü</div>\n        <div class=\"item\" id=\"contact\">Contact</div>\n      </div>\n      <div class=\"container\"></div>\n    </div>\n  `;\n  let container = document.querySelector(\".container\");\n  home(container);\n  let buttonHome = document.getElementById(\"home\");\n  let buttonMenu = document.getElementById(\"menu\");\n  let buttonContact = document.getElementById(\"contact\");\n\n  buttonHome.addEventListener(\"click\", () => {\n    home(container);\n  });\n  buttonMenu.addEventListener(\"click\", () => {\n    menu(container);\n  });\n  buttonContact.addEventListener(\"click\", () => {\n    contact(container);\n  });\n});\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

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