/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Game = void 0;\nclass Game {\n    initialize() {\n        this.renderCards();\n        this.fillPhotosInRandomOrder();\n    }\n    renderCards() {\n        const cardElement = document.querySelector('.flip-card');\n        for (let index = 0; index < 15; index++) {\n            const clone = cardElement.cloneNode(true);\n            document.getElementById('game-area').appendChild(clone);\n        }\n    }\n    fillPhotosInRandomOrder() {\n        const cards = document.querySelectorAll('.flip-card');\n        const order = new Array(16)\n            .fill(0)\n            .map((_, i) => ({ order: i + 1, sort: Math.random() }))\n            .sort((a, b) => a.sort - b.sort)\n            .map((n) => n.order);\n        for (let index = 1; index <= cards.length; index += 2) {\n            const card1 = cards[index - 1];\n            const card1Back = card1.querySelector('.flip-card-back');\n            card1Back.style.backgroundImage = `url(../dist/assets/${Math.round(index / 2)}.jpg)`;\n            card1.style.order = String(order[index - 1]);\n            const card2 = cards[index];\n            const card2Back = card2.querySelector('.flip-card-back');\n            card2Back.style.backgroundImage = `url(../dist/assets/${Math.round(index / 2)}.jpg)`;\n            card2.style.order = String(order[index]);\n        }\n    }\n}\nexports.Game = Game;\n\n\n//# sourceURL=webpack://memory-game/./src/Game.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Game_1 = __webpack_require__(/*! ./Game */ \"./src/Game.ts\");\nconst game = new Game_1.Game();\ngame.initialize();\n\n\n//# sourceURL=webpack://memory-game/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;