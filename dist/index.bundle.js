"use strict";
(self["webpackChunkdemo_app"] = self["webpackChunkdemo_app"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print.js */ "./src/print.js");



function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default().join(['Hello', 'webpack'], ' ');

  btn.innerHTML = "Click me and check the console";
  btn.onclick = _print_js__WEBPACK_IMPORTED_MODULE_1__["default"];

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  console.log("I get called fromt print.js with dev serve");
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBdUI7QUFDVTs7QUFFakM7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixrREFBTTs7QUFFNUI7QUFDQSxnQkFBZ0IsaURBQU87O0FBRXZCOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDakJBLDZCQUFlLHNDQUFXO0FBQzFCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1vLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW1vLWFwcC8uL3NyYy9wcmludC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgcHJpbnRNZSBmcm9tIFwiLi9wcmludC5qc1wiO1xuXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsnSGVsbG8nLCAnd2VicGFjayddLCAnICcpO1xuXG4gIGJ0bi5pbm5lckhUTUwgPSBcIkNsaWNrIG1lIGFuZCBjaGVjayB0aGUgY29uc29sZVwiO1xuICBidG4ub25jbGljayA9IHByaW50TWU7XG5cbiAgZWxlbWVudC5hcHBlbmRDaGlsZChidG4pO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coXCJJIGdldCBjYWxsZWQgZnJvbXQgcHJpbnQuanMgd2l0aCBkZXYgc2VydmVcIik7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9