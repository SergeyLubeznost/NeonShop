"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkneonshopspb"] = self["webpackChunkneonshopspb"] || []).push([["src_slider-popular_popular-slider_js"],{

/***/ "./src/slider-popular/popular-slider.js":
/*!**********************************************!*\
  !*** ./src/slider-popular/popular-slider.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   popularPrice: () => (/* binding */ popularPrice)\n/* harmony export */ });\n/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ \"./node_modules/swiper/swiper-bundle.mjs\");\n/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css/bundle */ \"./node_modules/swiper/swiper-bundle.css\");\n/* harmony import */ var _image_price_cafePetros_cafePetros_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-price/cafePetros/cafePetros.jpg */ \"./src/slider-popular/image-price/cafePetros/cafePetros.jpg\");\n/* harmony import */ var _image_price_cafePetros_20231206_035716_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-price/cafePetros/20231206_035716.jpg */ \"./src/slider-popular/image-price/cafePetros/20231206_035716.jpg\");\n/* harmony import */ var _image_price_700_700_14500_20240130_195329_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image-price/велком клуб 700х700 14500р/20240130_195329.jpg */ \"./src/slider-popular/image-price/велком клуб 700х700 14500р/20240130_195329.jpg\");\n/* harmony import */ var _image_price_700_700_14500_20240130_195324_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image-price/велком клуб 700х700 14500р/20240130_195324.jpg */ \"./src/slider-popular/image-price/велком клуб 700х700 14500р/20240130_195324.jpg\");\n/* harmony import */ var _image_price_800_545_13500_20231202_160830_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image-price/В малине 800х545 13500р/20231202_160830.jpg */ \"./src/slider-popular/image-price/В малине 800х545 13500р/20231202_160830.jpg\");\n/* harmony import */ var _image_price_800_545_13500_20231202_160910_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./image-price/В малине 800х545 13500р/20231202_160910.jpg */ \"./src/slider-popular/image-price/В малине 800х545 13500р/20231202_160910.jpg\");\n/* harmony import */ var _image_price_Gi_1000_1500_18_500_20231015_015107_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./image-price/Gi лазер студио Татьяна яковлева 1000х1500мм  18,500тр/20231015_015107.jpg */ \"./src/slider-popular/image-price/Gi лазер студио Татьяна яковлева 1000х1500мм  18,500тр/20231015_015107.jpg\");\n/* harmony import */ var _image_price_Gi_1000_1500_18_500_20231015_015203_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./image-price/Gi лазер студио Татьяна яковлева 1000х1500мм  18,500тр/20231015_015203.jpg */ \"./src/slider-popular/image-price/Gi лазер студио Татьяна яковлева 1000х1500мм  18,500тр/20231015_015203.jpg\");\n/* harmony import */ var _image_price_1000_250_14500_matreshka_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./image-price/Матрёшка 1000х250 14500р/matreshka.jpg */ \"./src/slider-popular/image-price/Матрёшка 1000х250 14500р/matreshka.jpg\");\n/* harmony import */ var _image_price_1000_250_14500_20240225_132601_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./image-price/Матрёшка 1000х250 14500р/20240225_132601.jpg */ \"./src/slider-popular/image-price/Матрёшка 1000х250 14500р/20240225_132601.jpg\");\n/* harmony import */ var _image_price_250_300_2000_20240314_001806_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./image-price/лист 250х300мм  2000р/20240314_001806.jpg */ \"./src/slider-popular/image-price/лист 250х300мм  2000р/20240314_001806.jpg\");\n/* harmony import */ var _image_price_250_300_2000_20240314_002442_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./image-price/лист 250х300мм  2000р/20240314_002442.jpg */ \"./src/slider-popular/image-price/лист 250х300мм  2000р/20240314_002442.jpg\");\n\r\n// import styles bundle\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet popularPrice = [\r\n  {\r\n    id : 1234,\r\n    image: _image_price_cafePetros_cafePetros_jpg__WEBPACK_IMPORTED_MODULE_2__,\r\n    image2: _image_price_cafePetros_20231206_035716_jpg__WEBPACK_IMPORTED_MODULE_3__,\r\n    title: \"Cafe Petros\",\r\n    discription: \"прозрачное оргстекло 5 мм\",\r\n    size: \"500x350\",\r\n    price: \"7300р\",\r\n  },\r\n  {\r\n    id : 1235,\r\n    image: _image_price_700_700_14500_20240130_195329_jpg__WEBPACK_IMPORTED_MODULE_4__,\r\n    image2: _image_price_700_700_14500_20240130_195324_jpg__WEBPACK_IMPORTED_MODULE_5__,\r\n    title: \"Welcome club\",\r\n    discription: \"прозрачное оргстекло 5 мм\",\r\n    size: \"700x700\",\r\n    price: \"14500р\",\r\n  },\r\n  {\r\n    id : 12346,\r\n    image: _image_price_800_545_13500_20231202_160830_jpg__WEBPACK_IMPORTED_MODULE_6__,\r\n    image2: _image_price_800_545_13500_20231202_160910_jpg__WEBPACK_IMPORTED_MODULE_7__,\r\n    title: \"В малине\",\r\n    discription: \"прозрачное оргстекло 5 мм\",\r\n    size: \"800x545\",\r\n    price: \"13500р\",\r\n  },\r\n  {\r\n    id : 12347,\r\n    image: _image_price_Gi_1000_1500_18_500_20231015_015107_jpg__WEBPACK_IMPORTED_MODULE_8__,\r\n    image2: _image_price_Gi_1000_1500_18_500_20231015_015203_jpg__WEBPACK_IMPORTED_MODULE_9__,\r\n    title: \"GI Laser\",\r\n    discription: \"прозрачное оргстекло 5 мм\",\r\n    size: \"1000x1500\",\r\n    price: \"18500р\",\r\n  },\r\n  {\r\n    id : 12348,\r\n    image: _image_price_1000_250_14500_matreshka_jpg__WEBPACK_IMPORTED_MODULE_10__,\r\n    image2: _image_price_1000_250_14500_20240225_132601_jpg__WEBPACK_IMPORTED_MODULE_11__,\r\n    title: \"Матрешка\",\r\n    discription: \"прозрачное оргстекло 5 мм\",\r\n    size: \"100x250\",\r\n    price: \"1500р\",\r\n  },\r\n  {\r\n    id : 12349,\r\n    image: _image_price_250_300_2000_20240314_001806_jpg__WEBPACK_IMPORTED_MODULE_12__,\r\n    image2: _image_price_250_300_2000_20240314_002442_jpg__WEBPACK_IMPORTED_MODULE_13__,\r\n    title: \"Лист\",\r\n    discription: \"прозрачное оргстекло 5 мм\",\r\n    size: \"250x300\",\r\n    price: \"2000р\",\r\n  }\r\n];\r\n\r\n\r\n  // Получаем доступ к блоку slider-block\r\nconst sliderBlock = document.getElementById('slider-block');\r\nconst sliderBlockBlur = document.getElementById('sliderContainer');\r\n\r\n// Создаем элемент swiper с классом mySwiper\r\nconst swiperContainer = document.createElement('div');\r\nswiperContainer.className = 'swiper mySwiper';\r\n\r\n// Создаем элемент wrapper с классом swiper-wrapper\r\nconst swiperWrapper = document.createElement('div');\r\nswiperWrapper.className = 'swiper-wrapper';\r\n\r\n\r\n// Проходимся по массиву popularPrice и создаем для каждого элемента слайд\r\npopularPrice.forEach((item) => {\r\n  const slide = document.createElement(\"div\");\r\n  slide.className = \"swiper-slide containerSlide\";\r\n  slide.innerHTML = `\r\n    <div class=\"image-popular\"><img src=\"${item.image}\"></div>\r\n    <div class=\"title-popular\">${item.title}</div>\r\n    <p class=\"baseTitle\">Основание:</p>\r\n    <p class=\"baseDiscription\">${item.discription}</p>\r\n    <p class=\"sizeBase\">Размер основания:</p>\r\n    <p class=\"itemSize\">${item.size}</p>\r\n    <p class=\"price\"><span>Цена:</span> ${item.price}</p>\r\n    <button class=\"order\" data-id=\"${item.id}\">Заказать</button>\r\n  `;\r\n  swiperWrapper.appendChild(slide);\r\n  const orderButton = slide.querySelector('.order');\r\n  orderButton.addEventListener('click', () => openModal(item.id));\r\n\r\n});\r\n\r\n// Создаем элементы для кнопок навигации и пагинации\r\nconst nextButton = document.createElement(\"div\");\r\nnextButton.className = 'swiper-button-next';\r\n\r\n\r\nconst prevButton = document.createElement('div');\r\nprevButton.className = 'swiper-button-prev';\r\n\r\n// Добавляем все созданные элементы в swiperContainer\r\nswiperContainer.appendChild(swiperWrapper);\r\nsliderBlockBlur.appendChild(nextButton);\r\nsliderBlockBlur.appendChild(prevButton);\r\n// swiperContainer.appendChild(pagination);\r\n\r\n// Добавляем swiperContainer в блок slider-block\r\nsliderBlock.appendChild(swiperContainer);\r\n\r\n\r\nvar swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\".mySwiper\", {\r\n  slidesPerView: 1,\r\n  speed: 500,\r\n  spaceBetween: 10,\r\n  loop: true,\r\n  autoplay: false, // Остановка автоматического переключения\r\n  navigation: {\r\n    nextEl: \".swiper-button-next\",\r\n    prevEl: \".swiper-button-prev\",\r\n  },\r\n  breakpoints: {\r\n    980: {\r\n      slidesPerView: 3,\r\n      loop: true,\r\n      spaceBetween: 20\r\n    }\r\n  },\r\n});\r\n\r\n\r\n// Находим все кнопки \"Заказать\" с классом \"order\"\r\nconst orderButtons = document.querySelectorAll('.order');\r\n\r\n\r\n\r\n// Проходимся по каждой кнопке и добавляем обработчик события на клик\r\norderButtons.forEach(button => {\r\n  button.addEventListener('click', function() {\r\n    const productId = button.getAttribute('data-id');\r\n    openModal(productId);\r\n  });\r\n});\r\n\r\n// const botToken = '7140577113:AAHgtOhZYa0H0wktR1yUv4R-XZ06aiqrlBU';\r\n// const chatId = '-4245946360';\r\n\r\nfunction openModal(productId) {\r\n  const product = popularPrice.find(item => item.id === productId);\r\n\r\n  if (product) {\r\n      const modalTitle = document.querySelector('#exampleModalLabelNew');\r\n      modalTitle.textContent = product.title || 'Название не указано';\r\n\r\n      const modalBody = document.querySelector('#exampleModalNew .modal-body');\r\n      modalBody.innerHTML = `\r\n          <div id=\"carouselExample\" class=\"carousel slide\">\r\n              <div class=\"carousel-inner\">\r\n                  <div class=\"carousel-item active\">\r\n                      <img src=\"${product.image}\" alt=\"Product Image\">\r\n                  </div>\r\n                  <div class=\"carousel-item\">\r\n                      <img src=\"${product.image2}\" alt=\"Product Image\">\r\n                  </div>\r\n              </div>\r\n              <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#carouselExample\" data-bs-slide=\"prev\">\r\n                  <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n                  <span class=\"visually-hidden\">Previous</span>\r\n              </button>\r\n              <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#carouselExample\" data-bs-slide=\"next\">\r\n                  <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n                  <span class=\"visually-hidden\">Next</span>\r\n              </button>\r\n          </div>\r\n          <p class=\"decription-product\"><strong>Основание:</strong> ${product.description || 'Описание отсутствует'}</p>\r\n          <p class=\"decription-product\"><strong>Размер основания:</strong> ${product.size || 'Размер не указан'}</p>\r\n          <p class=\"decription-product\"><strong>Цена:</strong> ${product.price || 'Цена не указана'}</p>\r\n          <form class=\"form-header\" id=\"modal-form\">\r\n              <label for=\"namePrice\">Ваше Имя</label>\r\n              <input id=\"namePrice\" type=\"text\" placeholder=\"Введите Имя\">\r\n              <label for=\"phonePrice\">Ваш телефон</label>\r\n              <input id=\"phonePrice\" type=\"tel\" placeholder=\"Введите телефон\">\r\n          </form>\r\n      `;\r\n\r\n      const carousel = new bootstrap.Carousel(document.querySelector('#carouselExample'), {\r\n          interval: false // Чтобы карусель не переключалась автоматически\r\n      });\r\n\r\n      const myModal = new bootstrap.Modal(document.getElementById('exampleModalNew'), {\r\n          keyboard: false\r\n      });\r\n\r\n      myModal.show();\r\n\r\n      const submitButton = document.querySelector('#send-price');\r\nconsole.log(submitButton);\r\n\r\n\r\nsubmitButton.addEventListener('click', async function(event) {\r\n  console.log(submitButton);\r\n  const botToken = '7140577113:AAHgtOhZYa0H0wktR1yUv4R-XZ06aiqrlBU';\r\n  const chatId = '-4245946360';\r\n    \r\n    const productName = product.title || 'Название не указано';\r\n    const productDescription = product.description || 'Описание отсутствует';\r\n    const name = document.getElementById('namePrice').value;\r\n    const phone = document.getElementById('phonePrice').value;\r\nconsole.log(name);\r\n    const data = {\r\n        productName,\r\n        productDescription,\r\n        name,\r\n        phone\r\n    };\r\n\r\n    // Sending data to the server\r\n    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${JSON.stringify(data)}`;\r\n\r\n    const toastContainer = document.querySelector('.toast-container');\r\n\r\n    try {\r\n        const response = await fetch(url, { method: 'GET' });\r\n        const responseData = await response.json();\r\n\r\n        if (responseData.ok) {\r\n            const toast = document.createElement('div');\r\n            toast.className = 'toast fade show';\r\n            toast.setAttribute('role', 'alert');\r\n            toast.setAttribute('aria-live', 'assertive');\r\n            toast.setAttribute('aria-atomic', 'true');\r\n\r\n            toast.innerHTML = `\r\n                <div class=\"toast-header\">\r\n                    <strong class=\"me-auto\">Ваша заявка ${data.name}</strong>\r\n                    <small>${new Date().toLocaleTimeString()}</small>\r\n                    <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"toast\" aria-label=\"Close\"></button>\r\n                </div>\r\n                <div class=\"toast-body\">\r\n                   Успешно отправлена\r\n                </div>`;\r\n\r\n            toastContainer.appendChild(toast);\r\n\r\n            new bootstrap.Toast(toast).show();\r\n            myModal.hide();\r\n        } else {\r\n            console.error('Ошибка при отправке данных в Telegram.');\r\n        }\r\n    } catch (error) {\r\n        console.error('Ошибка при выполнении запроса:', error);\r\n    }\r\n});\r\n\r\n\r\n  } else {\r\n      \r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://neonshopspb/./src/slider-popular/popular-slider.js?");

/***/ }),

/***/ "./src/slider-popular/image-price/Gi лазер студио Татьяна яковлева 1000х1500мм  18,500тр/20231015_015107.jpg":
/*!*******************************************************************************************************************!*\
  !*** ./src/slider-popular/image-price/Gi лазер студио Татьяна яковлева 1000х1500мм  18,500тр/20231015_015107.jpg ***!
  \*******************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b927370f33183dbb2a23.jpg\";\n\n//# sourceURL=webpack://neonshopspb/./src/slider-popular/image-price/Gi_%D0%BB%D0%B0%D0%B7%D0%B5%D1%80_%D1%81%D1%82%D1%83%D0%B4%D0%B8%D0%BE_%D0%A2%D0%B0%D1%82%D1%8C%D1%8F%D0%BD%D0%B0_%D1%8F%D0%BA%D0%BE%D0%B2%D0%BB%D0%B5%D0%B2%D0%B0_1000%D1%851500%D0%BC%D0%BC__18,500%D1%82%D1%80/20231015_015107.jpg?");

/***/ }),

/***/ "./src/slider-popular/image-price/Gi лазер студио Татьяна яковлева 1000х1500мм  18,500тр/20231015_015203.jpg":
/*!*******************************************************************************************************************!*\
  !*** ./src/slider-popular/image-price/Gi лазер студио Татьяна яковлева 1000х1500мм  18,500тр/20231015_015203.jpg ***!
  \*******************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e21f261cb8836cd79bb2.jpg\";\n\n//# sourceURL=webpack://neonshopspb/./src/slider-popular/image-price/Gi_%D0%BB%D0%B0%D0%B7%D0%B5%D1%80_%D1%81%D1%82%D1%83%D0%B4%D0%B8%D0%BE_%D0%A2%D0%B0%D1%82%D1%8C%D1%8F%D0%BD%D0%B0_%D1%8F%D0%BA%D0%BE%D0%B2%D0%BB%D0%B5%D0%B2%D0%B0_1000%D1%851500%D0%BC%D0%BC__18,500%D1%82%D1%80/20231015_015203.jpg?");

/***/ }),

/***/ "./src/slider-popular/image-price/cafePetros/20231206_035716.jpg":
/*!***********************************************************************!*\
  !*** ./src/slider-popular/image-price/cafePetros/20231206_035716.jpg ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"954e20874edec22fe76b.jpg\";\n\n//# sourceURL=webpack://neonshopspb/./src/slider-popular/image-price/cafePetros/20231206_035716.jpg?");

/***/ }),

/***/ "./src/slider-popular/image-price/cafePetros/cafePetros.jpg":
/*!******************************************************************!*\
  !*** ./src/slider-popular/image-price/cafePetros/cafePetros.jpg ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"674a7d34e673372bd6d3.jpg\";\n\n//# sourceURL=webpack://neonshopspb/./src/slider-popular/image-price/cafePetros/cafePetros.jpg?");

/***/ }),

/***/ "./src/slider-popular/image-price/В малине 800х545 13500р/20231202_160830.jpg":
/*!************************************************************************************!*\
  !*** ./src/slider-popular/image-price/В малине 800х545 13500р/20231202_160830.jpg ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8db61c361eae026c5de0.jpg\";\n\n//# sourceURL=webpack://neonshopspb/./src/slider-popular/image-price/%D0%92_%D0%BC%D0%B0%D0%BB%D0%B8%D0%BD%D0%B5_800%D1%85545_13500%D1%80/20231202_160830.jpg?");

/***/ }),

/***/ "./src/slider-popular/image-price/В малине 800х545 13500р/20231202_160910.jpg":
/*!************************************************************************************!*\
  !*** ./src/slider-popular/image-price/В малине 800х545 13500р/20231202_160910.jpg ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c7647e499c7211620fce.jpg\";\n\n//# sourceURL=webpack://neonshopspb/./src/slider-popular/image-price/%D0%92_%D0%BC%D0%B0%D0%BB%D0%B8%D0%BD%D0%B5_800%D1%85545_13500%D1%80/20231202_160910.jpg?");

/***/ }),

/***/ "./src/slider-popular/image-price/Матрёшка 1000х250 14500р/20240225_132601.jpg":
/*!*************************************************************************************!*\
  !*** ./src/slider-popular/image-price/Матрёшка 1000х250 14500р/20240225_132601.jpg ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cb80c4341716e62b8b70.jpg\";\n\n//# sourceURL=webpack://neonshopspb/./src/slider-popular/image-price/%D0%9C%D0%B0%D1%82%D1%80%D1%91%D1%88%D0%BA%D0%B0_1000%D1%85250_14500%D1%80/20240225_132601.jpg?");

/***/ }),

/***/ "./src/slider-popular/image-price/Матрёшка 1000х250 14500р/matreshka.jpg":
/*!*******************************************************************************!*\
  !*** ./src/slider-popular/image-price/Матрёшка 1000х250 14500р/matreshka.jpg ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"46638f154ec16298c485.jpg\";\n\n//# sourceURL=webpack://neonshopspb/./src/slider-popular/image-price/%D0%9C%D0%B0%D1%82%D1%80%D1%91%D1%88%D0%BA%D0%B0_1000%D1%85250_14500%D1%80/matreshka.jpg?");

/***/ }),

/***/ "./src/slider-popular/image-price/велком клуб 700х700 14500р/20240130_195324.jpg":
/*!***************************************************************************************!*\
  !*** ./src/slider-popular/image-price/велком клуб 700х700 14500р/20240130_195324.jpg ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6e0f7dec3f1af59cc3fe.jpg\";\n\n//# sourceURL=webpack://neonshopspb/./src/slider-popular/image-price/%D0%B2%D0%B5%D0%BB%D0%BA%D0%BE%D0%BC_%D0%BA%D0%BB%D1%83%D0%B1_700%D1%85700_14500%D1%80/20240130_195324.jpg?");

/***/ }),

/***/ "./src/slider-popular/image-price/велком клуб 700х700 14500р/20240130_195329.jpg":
/*!***************************************************************************************!*\
  !*** ./src/slider-popular/image-price/велком клуб 700х700 14500р/20240130_195329.jpg ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3909f7ed5c7a082a18ec.jpg\";\n\n//# sourceURL=webpack://neonshopspb/./src/slider-popular/image-price/%D0%B2%D0%B5%D0%BB%D0%BA%D0%BE%D0%BC_%D0%BA%D0%BB%D1%83%D0%B1_700%D1%85700_14500%D1%80/20240130_195329.jpg?");

/***/ }),

/***/ "./src/slider-popular/image-price/лист 250х300мм  2000р/20240314_001806.jpg":
/*!**********************************************************************************!*\
  !*** ./src/slider-popular/image-price/лист 250х300мм  2000р/20240314_001806.jpg ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9471fbb15aa6ecd3095b.jpg\";\n\n//# sourceURL=webpack://neonshopspb/./src/slider-popular/image-price/%D0%BB%D0%B8%D1%81%D1%82_250%D1%85300%D0%BC%D0%BC__2000%D1%80/20240314_001806.jpg?");

/***/ }),

/***/ "./src/slider-popular/image-price/лист 250х300мм  2000р/20240314_002442.jpg":
/*!**********************************************************************************!*\
  !*** ./src/slider-popular/image-price/лист 250х300мм  2000р/20240314_002442.jpg ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"026935353dcbfa66e6df.jpg\";\n\n//# sourceURL=webpack://neonshopspb/./src/slider-popular/image-price/%D0%BB%D0%B8%D1%81%D1%82_250%D1%85300%D0%BC%D0%BC__2000%D1%80/20240314_002442.jpg?");

/***/ })

}]);