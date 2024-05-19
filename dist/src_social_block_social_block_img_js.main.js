"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkneonshopspb"] = self["webpackChunkneonshopspb"] || []).push([["src_social_block_social_block_img_js"],{

/***/ "./src/social_block/social_block_img.js":
/*!**********************************************!*\
  !*** ./src/social_block/social_block_img.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _image_tg_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../image/tg.svg */ \"./src/image/tg.svg\");\n/* harmony import */ var _image_vk_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image/vk.svg */ \"./src/image/vk.svg\");\n\r\n\r\n\r\nconst blocksSocial = document.querySelector('.block_img_container');\r\n\r\n// Создание элемента для изображения tg\r\nconst imgTg = document.createElement('img');\r\nimgTg.src = _image_tg_svg__WEBPACK_IMPORTED_MODULE_0__;\r\nimgTg.alt = 'Telegram Icon'; // Атрибут alt для доступности\r\n\r\n// Создание ссылки для изображения tg\r\nconst linkTg = document.createElement('a');\r\nlinkTg.href = '#'; // Укажите ссылку для Telegram\r\nlinkTg.appendChild(imgTg); // Добавляем изображение внутрь ссылки\r\n\r\n// Создание элемента для изображения vk\r\nconst imgVk = document.createElement('img');\r\nimgVk.src = _image_vk_svg__WEBPACK_IMPORTED_MODULE_1__;\r\nimgVk.alt = 'VK Icon'; // Атрибут alt для доступности\r\n\r\n// Создание ссылки для изображения vk\r\nconst linkVk = document.createElement('a');\r\nlinkVk.href = '#'; // Укажите ссылку для VK\r\nlinkVk.appendChild(imgVk); // Добавляем изображение внутрь ссылки\r\n\r\n// Добавление ссылок с изображениями в блок blocksSocial\r\nblocksSocial.appendChild(linkTg);\r\nblocksSocial.appendChild(linkVk);\n\n//# sourceURL=webpack://neonshopspb/./src/social_block/social_block_img.js?");

/***/ }),

/***/ "./src/image/tg.svg":
/*!**************************!*\
  !*** ./src/image/tg.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6a33fd4defeae21cc160.svg\";\n\n//# sourceURL=webpack://neonshopspb/./src/image/tg.svg?");

/***/ }),

/***/ "./src/image/vk.svg":
/*!**************************!*\
  !*** ./src/image/vk.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"642b9ce5b4998ce06136.svg\";\n\n//# sourceURL=webpack://neonshopspb/./src/image/vk.svg?");

/***/ })

}]);