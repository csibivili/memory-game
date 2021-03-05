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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("const cardElement = document.querySelector('.flip-card');\nfor (let index = 0; index < 15; index++) {\n    const clone = cardElement.cloneNode(true);\n    document.getElementById('game-area').appendChild(clone);\n}\nconst cards = document.querySelectorAll('.flip-card');\nconst order = new Array(16)\n    .fill(0)\n    .map((_, i) => ({ order: i + 1, sort: Math.random() }))\n    .sort((a, b) => a.sort - b.sort)\n    .map((n) => n.order);\nfor (let index = 1; index <= cards.length; index += 2) {\n    const card1 = cards[index - 1];\n    const card1Back = card1.querySelector('.flip-card-back');\n    card1Back.style.backgroundImage = `url(../dist/assets/${Math.round(index / 2)}.jpg)`;\n    card1.style.order = String(order[index - 1]);\n    const card2 = cards[index];\n    const card2Back = card2.querySelector('.flip-card-back');\n    card2Back.style.backgroundImage = `url(../dist/assets/${Math.round(index / 2)}.jpg)`;\n    card2.style.order = String(order[index]);\n}\n\n\n//# sourceURL=webpack://memory-game/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;