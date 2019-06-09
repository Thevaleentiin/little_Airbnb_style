webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/SearchBar.js":
/*!*********************************!*\
  !*** ./components/SearchBar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Google Drive\\DEV\\3eme ANNEE\\React\\Airbnb_clone\\components\\SearchBar.js";



var SearchBar = function SearchBar(_ref) {
  var searchValue = _ref.searchValue,
      handleInputText = _ref.handleInputText,
      found = _ref.found,
      total = _ref.total;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "IptSearch",
    type: "text",
    placeholder: "tapez le nom d'un appartement",
    value: searchValue,
    onChange: handleInputText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), found ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Found ", found, " out of ", total) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "No appartment found"));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchBar);
SearchBar.propTypes = {
  searchValue: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired,
  handleInputText: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired,
  found: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  total: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired
};

/***/ })

})
//# sourceMappingURL=index.js.bd4a4eb737bbac72b2a9.hot-update.js.map