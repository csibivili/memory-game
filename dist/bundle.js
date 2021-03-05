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

/***/ "./src/Card.ts":
/*!*********************!*\
  !*** ./src/Card.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Card = void 0;\nconst Game_1 = __webpack_require__(/*! ./Game */ \"./src/Game.ts\");\nclass Card {\n    constructor(htmlElement, area) {\n        this.flipped = false;\n        this.htmlElement = null;\n        this.area = null;\n        this.htmlElement = htmlElement;\n        this.area = area;\n        this.addListener();\n    }\n    setOrder(order) {\n        this.htmlElement.style.order = String(order);\n    }\n    setImage(index) {\n        const cardBack = this.htmlElement.querySelector('.flip-card-back');\n        cardBack.style.backgroundImage = `url(../dist/assets/${Math.round(index / 2)}.jpg)`;\n    }\n    flipBack() {\n        if (this.flipped) {\n            this.htmlElement.classList.remove('flipped');\n        }\n    }\n    getFlipped() {\n        return this.flipped;\n    }\n    addListener() {\n        this.htmlElement.addEventListener('click', () => {\n            if (!this.flipped && Game_1.Game.nrOfFlippedCards < 2) {\n                this.htmlElement.classList.add('flipped');\n                this.flipped = !this.flipped;\n                Game_1.Game.nrOfFlippedCards++;\n                if (Game_1.Game.nrOfFlippedCards >= 2) {\n                    const event = document.createEvent('Event');\n                    event.initEvent('flipback');\n                    this.area.dispatchEvent(event);\n                }\n            }\n        });\n    }\n}\nexports.Card = Card;\n\n\n//# sourceURL=webpack://memory-game/./src/Card.ts?");

/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Game = void 0;\nconst Card_1 = __webpack_require__(/*! ./Card */ \"./src/Card.ts\");\nclass Game {\n    constructor() {\n        this.cards = [];\n        this.area = document.getElementById('game-area');\n    }\n    initialize() {\n        this.renderCards();\n        this.fillPhotosInRandomOrder();\n    }\n    reorder() {\n        const newOrder = this.getRandomOrder();\n        for (let index = 1; index <= this.cards.length; index += 2) {\n            this.cards[index - 1].setOrder(newOrder[index - 1]);\n            this.cards[index].setOrder(newOrder[index]);\n        }\n    }\n    renderCards() {\n        const cardElement = document.querySelector('.flip-card');\n        for (let index = 0; index < 15; index++) {\n            const clone = cardElement.cloneNode(true);\n            this.area.appendChild(clone);\n        }\n    }\n    fillPhotosInRandomOrder() {\n        const cards = this.getCards();\n        const order = this.getRandomOrder();\n        for (let index = 1; index <= cards.length; index += 2) {\n            const card1 = new Card_1.Card(cards[index - 1], this.area);\n            card1.setOrder(order[index - 1]);\n            card1.setImage(index);\n            const card2 = new Card_1.Card(cards[index], this.area);\n            card2.setOrder(order[index]);\n            card2.setImage(index);\n            this.cards.push(card1);\n            this.cards.push(card2);\n        }\n    }\n    getRandomOrder() {\n        return new Array(16)\n            .fill(0)\n            .map((_, i) => ({ order: i + 1, sort: Math.random() }))\n            .sort((a, b) => a.sort - b.sort)\n            .map((n) => n.order);\n    }\n    getCards() {\n        return document.querySelectorAll('.flip-card');\n    }\n}\nexports.Game = Game;\nGame.nrOfFlippedCards = 0;\n\n\n//# sourceURL=webpack://memory-game/./src/Game.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Game_1 = __webpack_require__(/*! ./Game */ \"./src/Game.ts\");\nconst game = new Game_1.Game();\ngame.initialize();\ndocument.querySelector('button').addEventListener('click', () => {\n    game.reorder();\n});\n\n\n//# sourceURL=webpack://memory-game/./src/index.ts?");

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