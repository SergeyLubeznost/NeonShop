"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkneonshopspb"] = self["webpackChunkneonshopspb"] || []).push([["src_Our_advantages_advantagesImg_js"],{

/***/ "./src/Our advantages/advantagesImg.js":
/*!*********************************************!*\
  !*** ./src/Our advantages/advantagesImg.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _image_Group_2_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../image/Group (2).svg */ \"./src/image/Group (2).svg\");\n/* harmony import */ var _image_Group_5_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image/Group 5.svg */ \"./src/image/Group 5.svg\");\n/* harmony import */ var _image_Group_1_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image/Group 1.svg */ \"./src/image/Group 1.svg\");\n\r\n\r\n\r\n\r\n\r\n\r\n// Массив путей к изображениям\r\nconst images = [\r\n    _image_Group_2_svg__WEBPACK_IMPORTED_MODULE_0__,\r\n    _image_Group_5_svg__WEBPACK_IMPORTED_MODULE_1__,\r\n    _image_Group_1_svg__WEBPACK_IMPORTED_MODULE_2__\r\n  ];\r\n  \r\n  // Выбираем все элементы с классом block-advantages\r\n  const blocks = document.querySelectorAll('.block-advantages');\r\n  \r\n  // Проходим по каждому блоку и добавляем изображение перед заголовком h4\r\n  blocks.forEach((block, index) => {\r\n    // Создаем элемент img\r\n    const img = document.createElement('img');\r\n    \r\n    // Устанавливаем путь к изображению из массива\r\n    img.src = images[index];\r\n    \r\n    // Добавляем атрибуты, если необходимо\r\n    img.alt = `Image ${index + 1}`;\r\n    \r\n    // Находим заголовок h4 в текущем блоке и вставляем изображение перед ним\r\n    const heading = block.querySelector('.container-title');\r\n    if (heading) {\r\n      heading.parentNode.insertBefore(img, heading);\r\n    } else {\r\n      // Если заголовок h4 не найден, просто добавляем изображение в начало блока\r\n      block.insertBefore(img, block.firstChild);\r\n    }\r\n  });\n\n//# sourceURL=webpack://neonshopspb/./src/Our_advantages/advantagesImg.js?");

/***/ }),

/***/ "./src/image/Group (2).svg":
/*!*********************************!*\
  !*** ./src/image/Group (2).svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8be3d026b6492025fb6f.svg\";\n\n//# sourceURL=webpack://neonshopspb/./src/image/Group_(2).svg?");

/***/ }),

/***/ "./src/image/Group 1.svg":
/*!*******************************!*\
  !*** ./src/image/Group 1.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"30f80bc6088421b5cfa0.svg\";\n\n//# sourceURL=webpack://neonshopspb/./src/image/Group_1.svg?");

/***/ }),

/***/ "./src/image/Group 5.svg":
/*!*******************************!*\
  !*** ./src/image/Group 5.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fc77ec4869dbf9ae9053.svg\";\n\n//# sourceURL=webpack://neonshopspb/./src/image/Group_5.svg?");

/***/ })

}]);