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

/***/ "./src/generatePage.js":
/*!*****************************!*\
  !*** ./src/generatePage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction generatePage() {\r\n    \r\n    let content = document.getElementById(\"content\");\r\n\r\n    let page1Container = document.createElement(\"div\");\r\n    page1Container.id = \"page1Container\";\r\n\r\n    \r\n    \r\n    let sectionAttrEle = document.createElement(\"section\");\r\n\r\n\r\n\r\n    //-------for navEle-------//\r\n\r\n    let navEle = document.createElement(\"nav\");\r\n\r\n    let navLeft = document.createElement(\"div\");\r\n    navLeft.id = \"navLeft\";\r\n    \r\n    let logoImgNavLeft = document.createElement(\"img\");\r\n    logoImgNavLeft.src = \"../src/images/svg/japan-logo.svg\";\r\n    logoImgNavLeft.alt = \"logo\";\r\n    let h4NavLeft = document.createElement(\"h4\");\r\n    h4NavLeft.innerText = \"CUISINE\";\r\n\r\n    navLeft.append(logoImgNavLeft, h4NavLeft);\r\n\r\n\r\n    let navMiddle = document.createElement(\"div\");\r\n    navMiddle.id = \"navMiddle\";\r\n\r\n    let aboutLink = document.createElement(\"a\");\r\n    aboutLink.href = \"#\";\r\n    aboutLink.id = \"about\";\r\n    aboutLink.innerText = \"About\";\r\n\r\n    let menuLink = document.createElement(\"a\");\r\n    menuLink.href = \"#\";\r\n    menuLink.id = \"menu\";\r\n    menuLink.innerText = \"Menu\";\r\n\r\n    let contactLink = document.createElement(\"a\");\r\n    contactLink.href = \"#\";\r\n    contactLink.id = \"contact\";\r\n    contactLink.innerText = \"Contact\";\r\n    \r\n    navMiddle.append(aboutLink, menuLink, contactLink);\r\n\r\n\r\n    let navRight = document.createElement(\"div\");\r\n    navRight.id = \"navRight\";\r\n\r\n    let bag = document.createElement(\"div\");\r\n    bag.id = \"bag\";\r\n    let bagLogoImg = document.createElement(\"img\");\r\n    bagLogoImg.id = \"bagLogo\";\r\n    bagLogoImg.src = \"../src/images/svg/shopping-bag.svg\";\r\n    bagLogoImg.alt = \"shopping-bag\";\r\n    let bagItemsDiv = document.createElement(\"div\");\r\n    bagItemsDiv.id = \"bagItems\";\r\n    let bagItemsP = document.createElement(\"p\");\r\n    bagItemsP.innerText = \"1\";\r\n    bagItemsDiv.appendChild(bagItemsP);\r\n    bag.append(bagLogoImg, bagItemsDiv);\r\n\r\n    let github = document.createElement(\"div\");\r\n    github.id = \"github\";\r\n    let githubLink = document.createElement(\"a\");\r\n    githubLink.href = \"https://github.com/hmjatt\";\r\n    let githubLogoImg = document.createElement(\"img\");\r\n    githubLogoImg.id = \"githubLogo\";\r\n    githubLogoImg.src = \"../src/images/github.png\";\r\n    githubLogoImg.alt = \"github\";\r\n    githubLink.appendChild(githubLogoImg);\r\n    github.appendChild(githubLink);\r\n\r\n    navRight.append(bag, github);\r\n\r\n    \r\n    navEle.append(navLeft, navMiddle, navRight);\r\n\r\n    //-------for navEle-------//\r\n\r\n\r\n\r\n    //-------for sectionNameEle-------//\r\n\r\n    let sectionNameEle = document.createElement(\"section\");\r\n\r\n    let restaurantName = document.createElement(\"h1\");\r\n    let restaurantNamediv1 = document.createElement(\"div\");\r\n    let restaurantNamediv2 = document.createElement(\"div\");\r\n    let br = document.createElement(\"br\");\r\n    restaurantName.id = \"restaurantName\";\r\n    restaurantNamediv1.innerText = \"Japanese\";\r\n    restaurantNamediv2.innerText = \"Cuisine\";\r\n    restaurantName.append(restaurantNamediv1, br, restaurantNamediv2);\r\n\r\n    sectionNameEle.appendChild(restaurantName);\r\n\r\n    //-------for sectionNameEle-------//\r\n\r\n\r\n\r\n    //-------for asideEle-------//\r\n\r\n    let asideEle = document.createElement(\"aside\");\r\n\r\n    let dragonGif = document.createElement(\"img\");\r\n    dragonGif.id = \"dragonGif\";\r\n    dragonGif.src = \"../src/images/gif/dragon.gif\";\r\n    dragonGif.alt = \"dragon-gif\";\r\n\r\n    let sushiImg = document.createElement(\"img\");\r\n    sushiImg.id = \"sushiImg\";\r\n    sushiImg.src = \"../src/images/sushi.png\";\r\n    sushiImg.alt = \"sushi-img\";\r\n\r\n    let ramenImg = document.createElement(\"img\");\r\n    ramenImg.id = \"ramenImg\";\r\n    ramenImg.src = \"../src/images/ramen.png\";\r\n    ramenImg.alt = \"ramen-img\";\r\n\r\n    asideEle.append(dragonGif, sushiImg, ramenImg);\r\n\r\n    //-------for asideEle-------//\r\n\r\n\r\n\r\n    //-------for mainEle-------//\r\n\r\n    let mainEle = document.createElement(\"main\");\r\n\r\n    let mainEleArticle = document.createElement(\"article\");\r\n    let mainEleArticleH6 = document.createElement(\"h6\");\r\n    let mainEleArticleDiv1 = document.createElement(\"div\");\r\n    mainEleArticleDiv1.innerText = \"At Japanese Cuisine we strive to bring people\";\r\n    let mainEleArticleDiv2 = document.createElement(\"div\");\r\n    mainEleArticleDiv2.innerText = \"the best Japanese food prepared using the freshest\";\r\n    let mainEleArticleDiv3 = document.createElement(\"div\");\r\n    mainEleArticleDiv3.innerText = \"and best ingredients.\";\r\n\r\n    mainEleArticleH6.append(mainEleArticleDiv1, mainEleArticleDiv2, mainEleArticleDiv3);\r\n    mainEleArticle.appendChild(mainEleArticleH6);\r\n\r\n    mainEle.appendChild(mainEleArticle);\r\n\r\n    //-------for mainEle-------//\r\n\r\n\r\n\r\n    //-------for sectionButtonsEle-------//\r\n\r\n    let sectionButtonsEle = document.createElement(\"section\");\r\n    sectionButtonsEle.id = \"sectionButtons\";\r\n\r\n    let orderNowBtn = document.createElement(\"button\");\r\n    orderNowBtn.id = \"orderNowBtn\";\r\n    let orderNowH5 = document.createElement(\"h5\");\r\n    orderNowH5.innerText = \"Order Now\";\r\n    let rightArrowWhiteSvg = document.createElement(\"img\");\r\n    rightArrowWhiteSvg.src = \"../src/images/svg/right-arrow-white.svg\";\r\n    rightArrowWhiteSvg.alt = \"right-arrow-white\";\r\n\r\n    orderNowBtn.append(orderNowH5, rightArrowWhiteSvg);\r\n\r\n    let menuBtn = document.createElement(\"button\");\r\n    menuBtn.id = \"menuBtn\";\r\n    let menuH5 = document.createElement(\"h5\");\r\n    menuH5.innerText = \"Menu\";\r\n    let rightArrowSvg = document.createElement(\"img\");\r\n    rightArrowSvg.src = \"../src/images/svg/right-arrow-livid-brown.svg\";\r\n    rightArrowSvg.alt = \"right-arrow\";\r\n\r\n    menuBtn.append(menuH5, rightArrowSvg);\r\n\r\n\r\n    sectionButtonsEle.append(orderNowBtn, menuBtn);\r\n\r\n    //-------for sectionButtonsEle-------//\r\n\r\n    \r\n\r\n    //-------for sectionFooterEle-------//\r\n\r\n    let sectionFooterEle = document.createElement(\"section\");\r\n    sectionFooterEle.id = \"page1Footer\";\r\n\r\n    let footItem1 = document.createElement(\"div\");\r\n    footItem1.id = \"footItem1\";\r\n    let footItem1H3 = document.createElement(\"h3\");\r\n    footItem1H3.innerText = \"18912\"\r\n    let footItem1H6 = document.createElement(\"h6\");\r\n    footItem1H6.innerText = \"Orders Delivered\";\r\n\r\n    footItem1.append(footItem1H3, footItem1H6);\r\n\r\n    let footItem2 = document.createElement(\"div\");\r\n    footItem2.id = \"footItem2\";\r\n    let footItem2H3 = document.createElement(\"h3\");\r\n    let footItem2H3Span = document.createElement(\"span\");\r\n    footItem2H3Span.innerText = \"4.6\";\r\n    let footItem2H3Img = document.createElement(\"img\");\r\n    footItem2H3Img.src = \"../src/images/svg/star.svg\";\r\n    footItem2H3Img.alt = \"rating-star\";\r\n    footItem2H3.append(footItem2H3Span, footItem2H3Img);\r\n    let footItem2H6 = document.createElement(\"h6\");\r\n    footItem2H6.innerText = \"Google Score\";\r\n\r\n    footItem2.append(footItem2H3, footItem2H6);\r\n\r\n    let footItem3 = document.createElement(\"div\");\r\n    footItem3.id = \"footItem3\";\r\n    let footItem3H3 = document.createElement(\"h3\");\r\n    footItem3H3.innerText = \"456\";\r\n    let footItem3H6 = document.createElement(\"h6\");\r\n    footItem3H6.innerText = \"Orders this week\";\r\n\r\n    footItem3.append(footItem3H3, footItem3H6);\r\n\r\n    let footItem4 = document.createElement(\"div\");\r\n    footItem4.id = \"footItem4\";\r\n    let footItem4H3 = document.createElement(\"h3\");\r\n    footItem4H3.innerText = \"97 %\";\r\n    let footItem4H6 = document.createElement(\"h6\");\r\n    footItem4H6.innerText = \"Natural products we use\";\r\n\r\n    footItem4.append(footItem4H3, footItem4H6);\r\n\r\n\r\n    sectionFooterEle.append(footItem1, footItem2, footItem3, footItem4);\r\n\r\n\r\n    //             <section id=\"page1Footer\">\r\n//                 <div id=\"footItem1\">\r\n//                     <h3>18000</h3>\r\n//                     <h6>Orders Delivered</h6>\r\n//                 </div>\r\n//                 <div id=\"footItem2\">\r\n//                     <h3>4.5<img src=\"../src/images/svg/star.svg\" alt=\"rating-star\"></h3>\r\n//                     <h6>Google Score</h6>\r\n//                 </div>\r\n//                 <div id=\"footItem3\">\r\n//                     <h3>456</h3>\r\n//                     <h6>Orders this week</h6>\r\n//                 </div>\r\n//                 <div id=\"footItem4\">\r\n//                     <h3>97 %</h3>\r\n//                     <h6>Natural products we use</h6>\r\n//                 </div>\r\n//             </section>\r\n\r\n    \r\n\r\n    //-------for sectionFooterEle-------//\r\n\r\n\r\n    page1Container.append(navEle, sectionNameEle, asideEle, mainEle, sectionButtonsEle, sectionFooterEle, sectionAttrEle);\r\n\r\n    content.appendChild(page1Container);\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generatePage);\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// <!-- <div id=\"page1Container\">\r\n//             <nav>\r\n//                 <div id=\"navLeft\">\r\n//                     <img src=\"../src/images/svg/japan-logo.svg\" alt=\"logo\">\r\n//                     <h4>CUISINE</h4>\r\n//                 </div>\r\n//                 <div id=\"navMiddle\">\r\n//                     <a href=\"#\" id=\"about\">About</a>\r\n//                     <a href=\"#\" id=\"Menu\">Menu</a>\r\n//                     <a href=\"#\" id=\"contact\">Contact</a>\r\n//                 </div>\r\n//                 <div id=\"navRight\">                 \r\n//                     <div id=\"bag\">\r\n//                         <img id=\"bagLogo\" src=\"../src/images/svg/shopping-bag.svg\" alt=\"shopping-bag\">\r\n//                         <div id=\"bagItems\"><p>1</p></div>\r\n//                     </div>\r\n//                     <div id=\"github\"><a href=\"https://github.com/hmjatt\"><img id=\"githubLogo\" src=\"../src/images/github.png\" alt=\"github\"></a></div>\r\n//                 </div>\r\n\r\n//             </nav>\r\n    \r\n//             <section>\r\n//                 <h1 id=\"restaurantName\">Japanese <br> Cuisine</h1>\r\n//             </section>\r\n\r\n//             <aside>\r\n//                 <img src=\"../src/images/gif/dragon.gif\" alt=\"dragon\" id=\"dragonGif\">\r\n//                 <img src=\"../src/images/sushi.png\" alt=\"sushi-img\" id=\"sushiImg\">\r\n//                 <img src=\"../src/images/ramen.png\" alt=\"ramen-img\" id=\"ramenImg\">\r\n//             </aside>\r\n            \r\n//             <main>\r\n//                 <article>\r\n//                     <h6>At Japanese Cuisine we strive to bring people <br> the best Japanese food prepared using the freshest<br> and best ingredients.</h6>\r\n//                 </article>\r\n//             </main>\r\n    \r\n//             <section id=\"sectionButtons\">\r\n//                 <button id=\"orderNowBtn\">\r\n//                     <h5>Order Now</h5>\r\n//                     <img src=\"../src/images/svg/right-arrow-white.svg\" alt=\"right-arrow\">\r\n//                 </button>\r\n//                 <button id=\"menuBtn\">\r\n//                     <h5>Menu</h5>\r\n//                     <img src=\"../src/images/svg/right-arrow-livid-brown.svg\" alt=\"right-arrow\">\r\n//                 </button>\r\n//             </section>\r\n    \r\n//             <section id=\"page1Footer\">\r\n//                 <div id=\"footItem1\">\r\n//                     <h3>18000</h3>\r\n//                     <h6>Orders Delivered</h6>\r\n//                 </div>\r\n//                 <div id=\"footItem2\">\r\n//                     <h3>4.5<img src=\"../src/images/svg/star.svg\" alt=\"rating-star\"></h3>\r\n//                     <h6>Google Score</h6>\r\n//                 </div>\r\n//                 <div id=\"footItem3\">\r\n//                     <h3>456</h3>\r\n//                     <h6>Orders this week</h6>\r\n//                 </div>\r\n//                 <div id=\"footItem4\">\r\n//                     <h3>97 %</h3>\r\n//                     <h6>Natural products we use</h6>\r\n//                 </div>\r\n//             </section>\r\n\r\n//              <section>\r\n//                 <p>Illustration by <a href=\"https://icons8.com/illustrations/author/zD2oqC8lLBBA\">Icons 8</a> from <a href=\"https://icons8.com/illustrations\">Ouch!</a></p>\r\n//                 <p>Illustration by <a href=\"https://icons8.com/illustrations/author/oZpGJx8ts63Q\">Thierry Fousse</a> from <a href=\"https://icons8.com/illustrations\">Ouch!</a></p>\r\n//             </section> \r\n//         </div> --></main>\n\n//# sourceURL=webpack://restaurant-page/./src/generatePage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _generatePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generatePage */ \"./src/generatePage.js\");\n\r\n\r\n\r\nconsole.log((0,_generatePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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