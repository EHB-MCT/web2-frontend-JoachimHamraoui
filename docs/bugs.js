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

/***/ "./src/bugs.js":
/*!*********************!*\
  !*** ./src/bugs.js ***!
  \*********************/
/***/ (() => {

eval("window.onload = function () {\r\n\r\n    let selectedId = document.location.search.replace(/^.*?\\=/, '');\r\n\r\n    let searchItemHtml = document.getElementById('search-results');\r\n    let searchBar = document.getElementById('search');\r\n    async function searchEngine() {\r\n\r\n        const response = await fetch(`http://acnhapi.com/v1/bugs`);\r\n        const data = await response.json();\r\n        // console.log(data.birthday);\r\n\r\n        searchBar.addEventListener('keypress', e => {\r\n            if (e.key === 'Enter') {\r\n                searchItemHtml.innerHTML = \"\";\r\n                let inputValue = searchBar.value;\r\n\r\n                // https://www.codegrepper.com/code-examples/javascript/javascript+add+underscore+to+string\r\n                let searchResult = inputValue.replace(/ /g, \"_\");\r\n                e.preventDefault();\r\n\r\n                for (let element in data) {\r\n\r\n                    let bug = data[element];\r\n\r\n                    if (searchResult == bug[\"file-name\"]) {\r\n\r\n                        let htmlString = `<a href=\"bugs-info.html?item-id=${bug.id}\" class=\"search-item\">\r\n                        <div>\r\n                            <img src=\"https://acnhapi.com/v1/icons/bugs/${bug.id}\" alt=\"villager-image\">\r\n                            <p>${bug.name['name-EUen']}</p>\r\n                        </div>\r\n                    </a>`\r\n\r\n                        searchItemHtml.innerHTML = htmlString;\r\n\r\n                    }\r\n\r\n\r\n                }\r\n\r\n\r\n            }\r\n        })\r\n\r\n    }\r\n\r\n    async function displaySearched() {\r\n\r\n        const response = await fetch(`http://acnhapi.com/v1/bugs/${selectedId}`);\r\n        const data = await response.json();\r\n        console.log(data.birthday);\r\n\r\n        let infoHtml = document.getElementById('selected');\r\n\r\n        let infoData = `<div id=\"arrow-back\">\r\n\r\n        </div>\r\n        <section id=\"selected-ui2\">\r\n            <div id=\"selected-pic\">\r\n                <img src=\"https://acnhapi.com/v1/images/bugs/${selectedId}\" alt=\"a picture of fauna\">\r\n            </div>\r\n            <div id=\"selected-info\">\r\n                <div id=\"selected-name\">\r\n                    <p>Name</p>\r\n                    <h1>${data.name[\"name-EUen\"]}</h1>\r\n                </div>\r\n                <div id=\"selected-cred\">\r\n                    <div>\r\n                        <p>Location</p>\r\n                        <h2>${data.availability[\"location\"]}</h2>\r\n                    </div>\r\n                    <div>\r\n                        <p>Rarity</p>\r\n                        <h2>${data.availability[\"rarity\"]}</h2>\r\n                    </div>\r\n                    <div>\r\n                        <p>Price</p>\r\n                        <h2>${data.price}</h2>\r\n                    </div>\r\n                    <div>\r\n                        <p>Flick Price</p>\r\n                        <h2>${data[\"price-flick\"]}</h2>\r\n                    </div>\r\n                    <div id=\"description\">\r\n                        <p>Catchphrase</p>\r\n                        <h3>${data[\"catch-phrase\"]}</h3>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>`\r\n\r\n        infoHtml.innerHTML = infoData;\r\n\r\n    }\r\n\r\n\r\n    searchEngine();\r\n    displaySearched();\r\n}\n\n//# sourceURL=webpack://web2-frontend-joachimhamraoui/./src/bugs.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/bugs.js"]();
/******/ 	
/******/ })()
;