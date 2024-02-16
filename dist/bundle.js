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

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/***/ (() => {

eval("window.searchCities = function () {\n  var input = document.getElementById(\"location\").value;\n  if (input.length < 3) return;\n  var url = \"/api/searchCities?q=\".concat(input);\n  fetch(url).then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    console.log(data);\n    showSuggestions(data.geonames);\n  })[\"catch\"](function (error) {\n    return console.error(\"Error fetching data: \", error);\n  });\n};\nfunction showSuggestions(geonames) {\n  var showSuggestionsList = document.getElementById(\"suggestions\");\n  showSuggestionsList.innerHTML = \"\";\n  geonames.forEach(function (place) {\n    var option = document.createElement(\"option\");\n    option.value = place.name;\n    showSuggestionsList.appendChild(option);\n  });\n}\n\n//# sourceURL=webpack://travel-app/./src/client/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/index.js"]();
/******/ 	
/******/ })()
;