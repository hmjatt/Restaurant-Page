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

/***/ "./src/generatePage1.js":
/*!******************************!*\
  !*** ./src/generatePage1.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction generatePage1() {\r\n\r\n    let content = document.getElementById(\"content\");\r\n\r\n    let page1Container = document.createElement(\"div\");\r\n    page1Container.id = \"page1Container\";\r\n\r\n\r\n    //-------for navEle-------//\r\n\r\n    let navEle = document.createElement(\"nav\");\r\n\r\n    let navLeft = document.createElement(\"div\");\r\n    navLeft.id = \"navLeft\";\r\n    \r\n    let logoImgNavLeft = document.createElement(\"img\");\r\n    logoImgNavLeft.src = \"../src/images/svg/japan-logo.svg\";\r\n    logoImgNavLeft.alt = \"logo\";\r\n    let h4NavLeft = document.createElement(\"h4\");\r\n    h4NavLeft.innerText = \"CUISINE\";\r\n\r\n    navLeft.append(logoImgNavLeft, h4NavLeft);\r\n\r\n\r\n    let navMiddle = document.createElement(\"div\");\r\n    navMiddle.id = \"navMiddle\";\r\n\r\n    let aboutLink = document.createElement(\"a\");\r\n    aboutLink.href = \"#\";\r\n    aboutLink.id = \"about\";\r\n    aboutLink.innerText = \"About\";\r\n\r\n    let menuLink = document.createElement(\"a\");\r\n    menuLink.href = \"#\";\r\n    menuLink.id = \"menu\";\r\n    menuLink.innerText = \"Menu\";\r\n\r\n    let contactLink = document.createElement(\"a\");\r\n    contactLink.href = \"#\";\r\n    contactLink.id = \"contact\";\r\n    contactLink.innerText = \"Contact\";\r\n    \r\n    navMiddle.append(aboutLink, menuLink, contactLink);\r\n\r\n\r\n    let navRight = document.createElement(\"div\");\r\n    navRight.id = \"navRight\";\r\n\r\n    let bag = document.createElement(\"div\");\r\n    bag.id = \"bag\";\r\n    let bagLogoImg = document.createElement(\"img\");\r\n    bagLogoImg.id = \"bagLogo\";\r\n    bagLogoImg.src = \"../src/images/svg/shopping-bag.svg\";\r\n    bagLogoImg.alt = \"shopping-bag\";\r\n    let bagItemsDiv = document.createElement(\"div\");\r\n    bagItemsDiv.id = \"bagItems\";\r\n    let bagItemsP = document.createElement(\"p\");\r\n    bagItemsP.innerText = \"1\";\r\n    bagItemsDiv.appendChild(bagItemsP);\r\n    bag.append(bagLogoImg, bagItemsDiv);\r\n\r\n    let github = document.createElement(\"div\");\r\n    github.id = \"github\";\r\n    let githubLink = document.createElement(\"a\");\r\n    githubLink.href = \"https://github.com/hmjatt\";\r\n    let githubLogoImg = document.createElement(\"img\");\r\n    githubLogoImg.id = \"githubLogo\";\r\n    githubLogoImg.src = \"../src/images/github.png\";\r\n    githubLogoImg.alt = \"github\";\r\n    githubLink.appendChild(githubLogoImg);\r\n    github.appendChild(githubLink);\r\n\r\n    navRight.append(bag, github);\r\n\r\n    \r\n    navEle.append(navLeft, navMiddle, navRight);\r\n\r\n    //-------for navEle-------//\r\n\r\n\r\n\r\n    //-------for sectionNameEle-------//\r\n\r\n    let sectionNameEle = document.createElement(\"section\");\r\n\r\n    let restaurantName = document.createElement(\"h1\");\r\n    let restaurantNamediv1 = document.createElement(\"div\");\r\n    let restaurantNamediv2 = document.createElement(\"div\");\r\n    let br = document.createElement(\"br\");\r\n    restaurantName.id = \"restaurantName\";\r\n    restaurantNamediv1.innerText = \"Japanese\";\r\n    restaurantNamediv2.innerText = \"Cuisine\";\r\n    restaurantName.append(restaurantNamediv1, br, restaurantNamediv2);\r\n\r\n    sectionNameEle.appendChild(restaurantName);\r\n\r\n    //-------for sectionNameEle-------//\r\n\r\n\r\n\r\n    //-------for asideEle-------//\r\n\r\n    let asideEle = document.createElement(\"aside\");\r\n\r\n    let dragonGif = document.createElement(\"img\");\r\n    dragonGif.id = \"dragonGif\";\r\n    dragonGif.src = \"../src/images/gif/dragon.gif\";\r\n    dragonGif.alt = \"dragon-gif\";\r\n\r\n    let sushiImg = document.createElement(\"img\");\r\n    sushiImg.id = \"sushiImg\";\r\n    sushiImg.src = \"../src/images/sushi.png\";\r\n    sushiImg.alt = \"sushi-img\";\r\n\r\n    let ramenImg = document.createElement(\"img\");\r\n    ramenImg.id = \"ramenImg\";\r\n    ramenImg.src = \"../src/images/ramen.png\";\r\n    ramenImg.alt = \"ramen-img\";\r\n\r\n    asideEle.append(dragonGif, sushiImg, ramenImg);\r\n\r\n    //-------for asideEle-------//\r\n\r\n\r\n\r\n    //-------for mainEle-------//\r\n\r\n    let mainEle = document.createElement(\"main\");\r\n\r\n    let mainEleArticle = document.createElement(\"article\");\r\n    let mainEleArticleH6 = document.createElement(\"h6\");\r\n    let mainEleArticleDiv1 = document.createElement(\"div\");\r\n    mainEleArticleDiv1.innerText = \"At Japanese Cuisine we strive to bring people\";\r\n    let mainEleArticleDiv2 = document.createElement(\"div\");\r\n    mainEleArticleDiv2.innerText = \"the best Japanese food prepared using the freshest\";\r\n    let mainEleArticleDiv3 = document.createElement(\"div\");\r\n    mainEleArticleDiv3.innerText = \"and best ingredients.\";\r\n\r\n    mainEleArticleH6.append(mainEleArticleDiv1, mainEleArticleDiv2, mainEleArticleDiv3);\r\n    mainEleArticle.appendChild(mainEleArticleH6);\r\n\r\n    mainEle.appendChild(mainEleArticle);\r\n\r\n    //-------for mainEle-------//\r\n\r\n\r\n\r\n    //-------for sectionButtonsEle-------//\r\n\r\n    let sectionButtonsEle = document.createElement(\"section\");\r\n    sectionButtonsEle.id = \"sectionButtons\";\r\n\r\n    let orderNowBtn = document.createElement(\"button\");\r\n    orderNowBtn.id = \"orderNowBtn\";\r\n    let orderNowH5 = document.createElement(\"h5\");\r\n    orderNowH5.innerText = \"Order Now\";\r\n    let rightArrowWhiteSvg = document.createElement(\"img\");\r\n    rightArrowWhiteSvg.src = \"../src/images/svg/right-arrow-white.svg\";\r\n    rightArrowWhiteSvg.alt = \"right-arrow-white\";\r\n\r\n    orderNowBtn.append(orderNowH5, rightArrowWhiteSvg);\r\n\r\n    let menuBtn = document.createElement(\"button\");\r\n    menuBtn.id = \"menuBtn\";\r\n    let menuH5 = document.createElement(\"h5\");\r\n    menuH5.innerText = \"Menu\";\r\n    let rightArrowSvg = document.createElement(\"img\");\r\n    rightArrowSvg.src = \"../src/images/svg/right-arrow-livid-brown.svg\";\r\n    rightArrowSvg.alt = \"right-arrow\";\r\n\r\n    menuBtn.append(menuH5, rightArrowSvg);\r\n\r\n\r\n    sectionButtonsEle.append(orderNowBtn, menuBtn);\r\n\r\n    //-------for sectionButtonsEle-------//\r\n\r\n    \r\n\r\n    //-------for sectionFooterEle-------//\r\n\r\n    let sectionFooterEle = document.createElement(\"section\");\r\n    sectionFooterEle.id = \"page1Footer\";\r\n\r\n    let footItem1 = document.createElement(\"div\");\r\n    footItem1.id = \"footItem1\";\r\n    let footItem1H3 = document.createElement(\"h3\");\r\n    footItem1H3.innerText = \"18912\"\r\n    let footItem1H6 = document.createElement(\"h6\");\r\n    footItem1H6.innerText = \"Orders Delivered\";\r\n\r\n    footItem1.append(footItem1H3, footItem1H6);\r\n\r\n    let footItem2 = document.createElement(\"div\");\r\n    footItem2.id = \"footItem2\";\r\n    let footItem2H3 = document.createElement(\"h3\");\r\n    let footItem2H3Span = document.createElement(\"span\");\r\n    footItem2H3Span.innerText = \"4.6\";\r\n    let footItem2H3Img = document.createElement(\"img\");\r\n    footItem2H3Img.src = \"../src/images/svg/star.svg\";\r\n    footItem2H3Img.alt = \"rating-star\";\r\n    footItem2H3.append(footItem2H3Span, footItem2H3Img);\r\n    let footItem2H6 = document.createElement(\"h6\");\r\n    footItem2H6.innerText = \"Google Score\";\r\n\r\n    footItem2.append(footItem2H3, footItem2H6);\r\n\r\n    let footItem3 = document.createElement(\"div\");\r\n    footItem3.id = \"footItem3\";\r\n    let footItem3H3 = document.createElement(\"h3\");\r\n    footItem3H3.innerText = \"456\";\r\n    let footItem3H6 = document.createElement(\"h6\");\r\n    footItem3H6.innerText = \"Orders this week\";\r\n\r\n    footItem3.append(footItem3H3, footItem3H6);\r\n\r\n    let footItem4 = document.createElement(\"div\");\r\n    footItem4.id = \"footItem4\";\r\n    let footItem4H3 = document.createElement(\"h3\");\r\n    footItem4H3.innerText = \"97 %\";\r\n    let footItem4H6 = document.createElement(\"h6\");\r\n    footItem4H6.innerText = \"Natural products we use\";\r\n\r\n    footItem4.append(footItem4H3, footItem4H6);\r\n\r\n\r\n    sectionFooterEle.append(footItem1, footItem2, footItem3, footItem4);\r\n\r\n    //-------for sectionFooterEle-------//\r\n\r\n\r\n\r\n    //-------for sectionAttrEle-------//\r\n    //make it secure\r\n\r\n    let sectionAttrEle = document.createElement(\"section\");\r\n\r\n    let p1 = document.createElement(\"p\");\r\n    p1.innerHTML = 'Illustration by <a href=\"https://icons8.com/illustrations/author/zD2oqC8lLBBA\">Icons 8</a> from <a href=\"https://icons8.com/illustrations\">Ouch!</a> ';\r\n\r\n    let p2 = document.createElement(\"p\");\r\n    p2.innerHTML = '<p>Illustration by <a href=\"https://www.vecteezy.com/vector-art/5152875-illustration-samurai-with-ramen\">Riven Ionia</a></a>';\r\n    \r\n    let p3 = document.createElement(\"p\");\r\n    p3.innerHTML = '<a href=\"https://www.vecteezy.com/vector-art/1234546-sushi-oriental-food-icon-set\">Sushi Vectors by Stockgiu</a>';\r\n\r\n    let p4 = document.createElement(\"p\");\r\n    p4.innerHTML = '<a href=\"https://icons8.com/icons/authors/3kSkbuAyjUdG/justicon/external-justicon-flat-justicon/external-japan-justicon-flat-justicon\">Sushi Icons by Justicon</a>';\r\n\r\n    sectionAttrEle.append(p1, p2, p3, p4);\r\n\r\n    //-------for sectionAttrEle-------//\r\n\r\n    \r\n\r\n    page1Container.append(navEle, sectionNameEle, asideEle, mainEle, sectionButtonsEle, sectionFooterEle, sectionAttrEle);\r\n\r\n    \r\n\r\n    content.appendChild(page1Container);\r\n\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generatePage1);\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/generatePage1.js?");

/***/ }),

/***/ "./src/generatePage2.js":
/*!******************************!*\
  !*** ./src/generatePage2.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction generatePage2() {\r\n\r\n    let content = document.getElementById(\"content\");\r\n\r\n    let page2Container = document.createElement(\"div\");\r\n    page2Container.id = \"page2Container\";\r\n\r\n\r\n    let asideEle = document.createElement(\"aside\");\r\n\r\n    let samuraiImg = document.createElement(\"img\");\r\n    samuraiImg.id = \"samuraiImg\";\r\n    samuraiImg.src = \"../src/images/samurai-img.png\";\r\n    samuraiImg.alt = \"samurai-img\";\r\n\r\n\r\n    asideEle.appendChild(samuraiImg);\r\n\r\n\r\n    let mainEle = document.createElement(\"main\");\r\n\r\n\r\n    let articleEle = document.createElement(\"article\");\r\n    let lineBreakEle = document.createElement(\"br\");\r\n    let h2Ele = document.createElement(\"h2\");\r\n    h2Ele.innerText = \"Our Story\";\r\n\r\n    let h6Ele1 = document.createElement(\"h6\");\r\n    h6Ele1.innerText = \"At Japanese Cuisine we strive to bring people\";\r\n    let h6Ele2 = document.createElement(\"h6\");\r\n    h6Ele2.innerText = \"the best Japanese food prepared using the freshest \";\r\n    let h6Ele3 = document.createElement(\"h6\");\r\n    h6Ele3.innerText = \"and best ingredients. Amazing Japanese \";\r\n    let h6Ele4 = document.createElement(\"h6\");\r\n    h6Ele4.innerText = \"food and a Fantastic Sushi Bar. Great \";\r\n    let h6Ele5 = document.createElement(\"h6\");\r\n    h6Ele5.innerText = \"selection of sake, dumplings and more. Perfect for dates, families, \";\r\n    let h6Ele6 = document.createElement(\"h6\");\r\n    h6Ele6.innerText = \"and business meetings. Come in and enjoy!!! \";\r\n    let h6Ele7 = document.createElement(\"h6\");\r\n    h6Ele7.innerText = \"Youkoso\";\r\n    h6Ele7.style.fontWeight = \"bold\";\r\n    let h6Ele8 = document.createElement(\"h6\");\r\n    h6Ele8.innerText = \"(Welcome)\";\r\n    \r\n    articleEle.append(h6Ele1, lineBreakEle, h6Ele2, lineBreakEle, h6Ele3, lineBreakEle, h6Ele4, lineBreakEle, h6Ele5, lineBreakEle, h6Ele6, lineBreakEle, h6Ele7, h6Ele8);\r\n    \r\n\r\n    mainEle.append(h2Ele, articleEle);\r\n\r\n\r\n    page2Container.append(asideEle, mainEle);\r\n\r\n    \r\n\r\n    content.appendChild(page2Container);\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generatePage2);\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/generatePage2.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _generatePage1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generatePage1 */ \"./src/generatePage1.js\");\n/* harmony import */ var _generatePage2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generatePage2 */ \"./src/generatePage2.js\");\n\r\n\r\n// import generatePage3 from \"./generatePage3\";\r\n\r\n\r\n\r\ndocument.addEventListener(\"load\",  (0,_generatePage1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n\r\n\r\n\r\nlet aboutLink = document.getElementById(\"about\");\r\n\r\naboutLink.addEventListener(\"click\", (0,_generatePage2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;