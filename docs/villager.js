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

/***/ "./src/villager.js":
/*!*************************!*\
  !*** ./src/villager.js ***!
  \*************************/
/***/ (() => {

eval("window.onload = function () {\r\n\r\n    let selectedId = document.location.search.replace(/^.*?\\=/, '');\r\n\r\n    async function searchVillagerEngine() {\r\n        let searchItemHtml = document.getElementById('search-results');\r\n        let listSpecies = document.getElementById('search-villager');\r\n\r\n        const response = await fetch(`http://acnhapi.com/v1/villagers`);\r\n        const data = await response.json();\r\n        // const readableData = data.data;\r\n        // console.log(data.birthday);\r\n\r\n\r\n        listSpecies.addEventListener('click', e => {\r\n            searchItemHtml.innerHTML = \"\";\r\n            let select = document.getElementById('villager-species');\r\n\r\n            for (let element in data) {\r\n \r\n\r\n                // https://ricardometring.com/getting-the-value-of-a-select-in-javascript\r\n                let speciesValue = select.options[select.selectedIndex].value;\r\n\r\n                let villager = data[element];\r\n\r\n                if (speciesValue == villager.species) {\r\n\r\n                    let htmlString = `<a href=\"villager-info.html?item-id=${villager.id}\" class=\"search-item\">\r\n                            <div>\r\n                                <img src=\"https://acnhapi.com/v1/icons/villagers/${villager.id}\" alt=\"villager-image\">\r\n                                <p>${villager.name[\"name-EUen\"]}</p>\r\n                            </div>      \r\n                        </a>`\r\n\r\n                    searchItemHtml.innerHTML += htmlString;\r\n\r\n                }\r\n\r\n            }\r\n\r\n            e.preventDefault();\r\n        })\r\n\r\n\r\n\r\n    }\r\n\r\n    async function displayVillager() {\r\n\r\n        const response = await fetch(`http://acnhapi.com/v1/villagers/${selectedId}`);\r\n        const data = await response.json();\r\n        console.log(data.birthday);\r\n\r\n        let villagerHtml = document.getElementById('selected');\r\n\r\n        let villagerData = `<div id=\"arrow-back\">\r\n\r\n        </div>\r\n        <section id=\"selected-ui2\">\r\n            <div id=\"selected-pic\">\r\n                <img src=\"https://acnhapi.com/v1/images/villagers/${selectedId}\" alt=\"a picture of fauna\">\r\n            </div>\r\n            <div id=\"selected-info\">\r\n                <div id=\"selected-name\">\r\n                    <p>Name</p>\r\n                    <h1>${data.name[\"name-EUen\"]}</h1>\r\n                </div>\r\n                <div id=\"selected-cred\">\r\n                    <div>\r\n                        <p>Birthday</p>\r\n                        <h2>${data.birthday}</h2>\r\n                    </div>\r\n                    <div>\r\n                        <p>Species</p>\r\n                        <h2>${data.species}</h2>\r\n                    </div>\r\n                    <div>\r\n                        <p>Gender</p>\r\n                        <h2>${data.gender}</h2>\r\n                    </div>\r\n                    <div>\r\n                        <p>Hobby</p>\r\n                        <h2>${data.hobby}</h2>\r\n                    </div>\r\n                    <div>\r\n                        <p>Personality</p>\r\n                        <h2>${data.personality}</h2>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>`\r\n\r\n        villagerHtml.innerHTML = villagerData;\r\n\r\n    }\r\n\r\n    searchVillagerEngine()\r\n    displayVillager();\r\n\r\n}\n\n//# sourceURL=webpack://web2-frontend-joachimhamraoui/./src/villager.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/villager.js"]();
/******/ 	
/******/ })()
;