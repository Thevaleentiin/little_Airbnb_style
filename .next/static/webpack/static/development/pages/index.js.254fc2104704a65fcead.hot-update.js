webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Appartment.js":
/*!**********************************!*\
  !*** ./components/Appartment.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style.css */ "./style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "D:\\Google Drive\\DEV\\3eme ANNEE\\React\\Airbnb_clone\\components\\Appartment.js";





var Appartment = function Appartment(_ref) {
  var _ref$appartment = _ref.appartment,
      id = _ref$appartment.id,
      slug = _ref$appartment.slug,
      title = _ref$appartment.title,
      acf = _ref$appartment.acf,
      favorites = _ref.favorites,
      toggleFav = _ref.toggleFav;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "appart-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: acf.image,
    alt: "lol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container-text-appartement",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    height: "20",
    width: "20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "10",
    fill: acf.available ? 'green' : 'red',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), title.rendered, favorites.includes(id) && '❤️'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "Btn-primary",
    onClick: function onClick(e) {
      return toggleFav(e, id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, favorites.includes(id) ? 'Remove favorite' : 'Set favorite'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "Btn-primary",
    as: "/Appartement/".concat(id),
    href: "/Appartement?id=".concat(id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Voir l'annonce")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "$", acf.price, " per night"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, new Array(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(acf.rating)).fill('⭐️️️️️'))));
};

/* harmony default export */ __webpack_exports__["default"] = (Appartment);
Appartment.propTypes = {
  appartment: prop_types__WEBPACK_IMPORTED_MODULE_2__["object"].isRequired,
  favorites: prop_types__WEBPACK_IMPORTED_MODULE_2__["array"].isRequired,
  toggleFav: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"].isRequired
};

/***/ })

})
//# sourceMappingURL=index.js.254fc2104704a65fcead.hot-update.js.map