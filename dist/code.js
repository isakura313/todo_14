/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./code.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ItemDeal.js":
/*!*********************!*\
  !*** ./ItemDeal.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ItemDeal; });\nclass ItemDeal{\r\n    constructor(name,color){\r\n        this.name = name;\r\n        this.color = color;\r\n        this.now = new Date;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./ItemDeal.js?");

/***/ }),

/***/ "./code.js":
/*!*****************!*\
  !*** ./code.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ItemDeal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemDeal */ \"./ItemDeal.js\");\n\r\n\r\nlet motivation_array = [\r\n    'люблю webpack',\r\n    'кто не работает, тот ест',\r\n    'как не быть ленивым??',\r\n    'Д/з само себя не сделает))'\r\n];\r\n\r\nlet background_array = [\r\n    'has-background-danger',\r\n    'has-background-warning',\r\n    'has-background-success',\r\n    'has-background-primary',\r\n    'has-background-info',\r\n    'has-background-link'\r\n];\r\n\r\nlet IA = [\r\n    'has-text-danger',\r\n    'has-text-warning',\r\n    'has-text-success'\r\n];\r\n\r\nlet Animation_Array = [\r\n    'bounceOut',\r\n    'rollOut',\r\n    'rotateOut',\r\n    \"lightSpeedOut\"\r\n];\r\nlet Month_Array = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября','Ноября', 'Декабря'];\r\n\r\nlet select = document.querySelector(\"select\");\r\nlet field = document.querySelector(\"input\");\r\nlet button = document.querySelector(\".button_plus\");\r\nlet deals = document.querySelector(\".deals\");\r\nlet hero = document.querySelector(\".hero\");\r\nlet random_color = Math.floor(Math.random() * 3 + 3);\r\n\r\n\r\n\r\nhero.classList.add(background_array[random_color]);\r\n\r\n//функция создания нашего дела\r\nfunction addDeal(){\r\n    let content = field.value;\r\n    if(!content){\r\n        return;\r\n    }\r\n    let item = new _ItemDeal__WEBPACK_IMPORTED_MODULE_0__[\"default\"](content, select.value-1);\r\n    let item_to_JSON = JSON.stringify(item);\r\n    localStorage.setItem(+item.now, item_to_JSON);\r\n    GenerateDOM(item);\r\n    field.value = '';\r\n}\r\n\r\nbutton.addEventListener(\"click\", addDeal);\r\ndocument.addEventListener(\"keypress\", (e)=>{\r\n    if(e.keyCode == 13){\r\n        addDeal();\r\n    }\r\n})\r\n\r\nfunction drawOnLoad(){\r\n    for (let i = 0; i < localStorage.length; i++) {\r\n        let lk_key = localStorage.key(i); // получить по номеру в объекте\r\n        let content = localStorage.getItem(lk_key);\r\n        let item = JSON.parse(content); \r\n        let tempo_dat = Date.parse(item.now);\r\n        item.now = new Date(tempo_dat);\r\n        GenerateDOM(item);\r\n    }\r\n};\r\ndrawOnLoad();\r\n\r\n\r\n//д/з\r\n// сделать классный дизайн, что бы срочное дело имело яркий красный цвет\r\n// несрочное - зеленый или другой ( какой найдете в бульма)\r\n// самое несрочное - любой нейтральный\r\n// немного поиграть с дизайном\r\n// все сдать пулл реквестом\r\n\r\nfunction GenerateDOM(obj){\r\n    deals.insertAdjacentHTML(\"afterbegin\",\r\n    `<div class=\"wrap_task animated ${background_array[obj.color]} bounce\" id=\"${+obj.now}\">\r\n        <div class=\"task is-size-4\">\r\n            <p> <span class=\"has-text-white\"> ${obj.name}</span>\r\n            ${obj.now.getDate()} ${Month_Array[obj.now.getMonth()]}\r\n            </p>\r\n        </div>\r\n        <span class=\"icon is-large tr\">\r\n            <i class=\"fa fa-trash thrash\"></i>\r\n        </span>\r\n        </div>\r\n    `)\r\n}\r\n\r\n\r\ndeals.addEventListener(\"click\", (e) =>{\r\n    // let trash = e.target.closest(\"i\");\r\n    let wrap_task = e.target.closest(\".wrap_task\");\r\n    wrap_task.classList.remove(\"zoomInLeft\");\r\n    wrap_task.classList.add(Animation_Array[GR(Animation_Array)]);\r\n    setTimeout(() => {\r\n        wrap_task.remove();\r\n        localStorage.removeItem(wrap_task.id);\r\n    }, 500);\r\n    \r\n});\r\n\r\n\r\nfunction ChangeColorSelect(el){\r\n    switch(el.value){\r\n        case '1':\r\n            el.className =\" has-background-danger has-text-white\";\r\n            importance = background_array[0];\r\n            \r\n            break;\r\n        case '2':\r\n            el.className =\" has-background-warning has-text-white\";\r\n            importance = background_array[1];\r\n            break;\r\n        case '3':\r\n            el.className =\" has-background-success has-text-white\";\r\n            importance = background_array[2];\r\n            break;\r\n        default:\r\n            break;\r\n    }\r\n}\r\n\r\nwindow.onload = () => {\r\n    ChangeColorSelect(select);\r\n}\r\n\r\nselect.onchange = () =>{\r\n    ChangeColorSelect(select);\r\n}\r\n\r\nfunction GR(arr){\r\n    return Math.round(Math.random() * (arr.length-1));\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./code.js?");

/***/ })

/******/ });