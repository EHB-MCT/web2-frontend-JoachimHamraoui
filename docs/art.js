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

/***/ "./src/art.js":
/*!********************!*\
  !*** ./src/art.js ***!
  \********************/
/***/ (() => {

eval("window.onload = function () {\r\n\r\n    let selectedId = document.location.search.replace(/^.*?\\=/, '');\r\n\r\n    let searchItemHtml = document.getElementById('search-results');\r\n    //   \r\n    async function searchEngine() {\r\n\r\n        const response = await fetch(`http://acnhapi.com/v1/art`);\r\n        const data = await response.json();\r\n        // console.log(data.birthday);\r\n\r\n        for (let element in data) {\r\n\r\n            let art = data[element];\r\n\r\n            let htmlString = `<a href=\"art-info.html?item-id=${art.id}\" class=\"search-item\">\r\n                <div>\r\n                    <img src=\"https://acnhapi.com/v1/images/art/${art[\"file-name\"]}\" alt=\"villager-image\">\r\n                    <p>${art.name['name-EUen']}</p>\r\n                </div>\r\n            </a>`\r\n\r\n            searchItemHtml.innerHTML += htmlString;\r\n\r\n        }\r\n    }\r\n\r\n    async function displaySearched() {\r\n\r\n        const response = await fetch(`http://acnhapi.com/v1/art/${selectedId}`);\r\n        const data = await response.json();\r\n        console.log(data.birthday);\r\n\r\n        let infoHtml = document.getElementById('selected');\r\n\r\n        let infoData = `<div id=\"arrow-back\">\r\n\r\n        </div>\r\n        <section id=\"selected-ui2\">\r\n            <div id=\"selected-pic\">\r\n                <img class=\"art-img\" src=\"https://acnhapi.com/v1/images/art/${data[\"file-name\"]}\" alt=\"a picture of fauna\">\r\n            </div>\r\n            <div id=\"selected-info\">\r\n                <div id=\"selected-name\">\r\n                    <p>Name</p>\r\n                    <h1>${data.name[\"name-EUen\"]}</h1>\r\n                </div>\r\n                <div id=\"selected-cred\">\r\n                    <div>\r\n                        <p>Buy Price</p>\r\n                        <h2>${data[\"buy-price\"]} Bells</h2>\r\n                    </div>\r\n                    <div>\r\n                        <p>Sell Price</p>\r\n                        <h2>${data[\"sell-price\"]} Bells</h2>\r\n                    </div>\r\n                    <div id=\"description\">\r\n                        <p>Catchphrase</p>\r\n                        <h3>${data[\"museum-desc\"]}</h3>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>`\r\n\r\n        infoHtml.innerHTML = infoData;\r\n\r\n    }\r\n\r\n\r\n    searchEngine();\r\n    displaySearched();\r\n}\n\n//# sourceURL=webpack://web2-frontend-joachimhamraoui/./src/art.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/art.js"]();
/******/ 	
/******/ })()
;