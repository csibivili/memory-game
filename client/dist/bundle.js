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

/***/ "./src/Board.ts":
/*!**********************!*\
  !*** ./src/Board.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Board = void 0;\nconst Card_1 = __webpack_require__(/*! ./Card */ \"./src/Card.ts\");\nclass Board {\n    constructor() {\n        this.cards = [];\n        this.board = null;\n        this.board = document.getElementById('board');\n    }\n    initialize() {\n        this.renderCards();\n        this.fillPhotosInRandomOrder();\n        this.shuffle();\n    }\n    shuffle() {\n        new Array(16)\n            .fill(0)\n            .map((_, i) => ({ order: i + 1, sort: Math.random() }))\n            .sort((a, b) => a.sort - b.sort)\n            .forEach((o, i) => this.cards[i].setOrder(o.order));\n    }\n    flip() {\n        this.cards.forEach((c) => c.flip());\n    }\n    renderCards() {\n        const cardElement = document.querySelector('.flip-card');\n        for (let index = 0; index < 15; index++) {\n            const clone = cardElement.cloneNode(true);\n            this.board.appendChild(clone);\n        }\n    }\n    fillPhotosInRandomOrder() {\n        const cards = document.querySelectorAll('.flip-card');\n        for (let index = 1; index <= cards.length; index += 2) {\n            const card1 = new Card_1.Card(cards[index - 1]);\n            const card2 = new Card_1.Card(cards[index]);\n            card1.setImage(index);\n            card2.setImage(index);\n            this.cards.push(card1);\n            this.cards.push(card2);\n        }\n    }\n}\nexports.Board = Board;\n\n\n//# sourceURL=webpack://memory-game/./src/Board.ts?");

/***/ }),

/***/ "./src/Card.ts":
/*!*********************!*\
  !*** ./src/Card.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Card = void 0;\nclass Card {\n    constructor(card) {\n        this.flipped = false;\n        this.card = null;\n        this.card = card;\n    }\n    setOrder(order) {\n        this.card.style.order = String(order);\n    }\n    setImage(index) {\n        const cardBack = this.card.querySelector('.flip-card-back');\n        cardBack.style.backgroundImage = `url(assets/${Math.round(index / 2)}.jpg)`;\n    }\n    flip() {\n        this.flipped = !this.flipped;\n        if (this.flipped) {\n            this.card.classList.add('flipped');\n        }\n        else {\n            this.card.classList.remove('flipped');\n        }\n    }\n    getFlipped() {\n        return this.flipped;\n    }\n}\nexports.Card = Card;\n\n\n//# sourceURL=webpack://memory-game/./src/Card.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Board_1 = __webpack_require__(/*! ./Board */ \"./src/Board.ts\");\nconst board = new Board_1.Board();\nboard.initialize();\ndocument.getElementById('shuffle').addEventListener('click', () => {\n    board.shuffle();\n});\ndocument.getElementById('flip').addEventListener('click', () => {\n    board.flip();\n});\n\n\n//# sourceURL=webpack://memory-game/./src/index.ts?");

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