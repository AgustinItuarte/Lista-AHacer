/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./JosefinSans-Regular.ttf */ "./src/JosefinSans-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./delete.png */ "./src/delete.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./text-box-edit.png */ "./src/text-box-edit.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: Josefin Sans;\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\nhtml,\r\nbody {\r\n    max-width: 100%;\r\n    overflow-x: hidden;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n    width: 100vw;\r\n    font-size: 1.5rem;\r\n    font-family: 'Josefin Sans';\r\n    background-color: #94a3b8;\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: start;\r\n    height: 15vh;\r\n    padding: 20px;\r\n}\r\n\r\n#contenido {\r\n    display: grid;\r\n    grid-template-columns: 20% 80%;\r\n    height: 81vh;\r\n    width: 100vw;\r\n    font-size: 1.5rem;\r\n}\r\n\r\nfooter {\r\n    height: 4vh;\r\n    font-size: 0.9rem;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\nheader, footer {\r\n    background-color: #1e293b;\r\n    color: #f8fafc;\r\n    border-bottom: 3px solid #f8fafc;\r\n}\r\n\r\n.sidebar {\r\n    background-color: #64748b;\r\n    font-size: 1.5rem;\r\n    box-shadow: 5px 0 5px -5px #333;\r\n}\r\n\r\n.total-tareas {\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.total-tareas:hover {\r\n    color: black;\r\n    transition: 0.1s;\r\n}\r\n\r\n.proyectos_titulo,\r\n.total-tareas {\r\n    color: white;\r\n    font-size: 1.7rem;\r\n}\r\n\r\nul {\r\n    cursor: default;\r\n    padding-top: 10px;\r\n}\r\n\r\nul li {\r\n    list-style: none;\r\n    padding-left: 14px;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\nul li:hover {\r\n    background-color: #94a3b8;\r\n    transition: 0.1s;\r\n}\r\n\r\nul li:active {\r\n    box-shadow: 0px 0px 5px black;\r\n}\r\n\r\nbutton {\r\n    cursor: pointer;\r\n    border: none;\r\n    background-color: #1e293b;\r\n    font-weight: bold;\r\n    color: white;\r\n    border: 1px solid white;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n\r\nbutton:hover {\r\n    transition: 0.1s;\r\n    box-shadow: 1px 1px 5px black;\r\n}\r\n\r\nbutton:active {\r\n    border: 1px solid #1e293b;\r\n}\r\n\r\n.main-content {\r\n    background-color: #cbd5e1;\r\n    font-size: 0.6rem;\r\n}\r\n\r\n.contenedor-tareas {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    overflow: auto;\r\n}\r\n\r\n.tareas {\r\n    display: grid;\r\n    align-items: center;\r\n    align-self: center;\r\n    grid-template-columns: 1% 15% 55% 15% 14%;\r\n    grid-template-rows: 50% 50%;\r\n    background-color: #64748b;\r\n    height: fit-content;\r\n    width: 100%;\r\n    border: 3px solid black;\r\n    border-radius: 5px;\r\n}\r\n\r\n.tareas:hover {\r\n    transition: 0.3s;\r\n    background-color: #525f70;\r\n    cursor: pointer;\r\n    color: white;\r\n}\r\n\r\n.tareas:active {\r\n    transition: 0.2s;\r\n    border: 3px solid white;\r\n}\r\n\r\n.titulo-tareas {\r\n    grid-column: 2 / 3;\r\n}\r\n\r\n.detalles-tareas {\r\n    grid-column: 2 / 4;\r\n    grid-row: 2 / 3;\r\n}\r\n\r\n.fecha-tareas {\r\n    display: flex;\r\n    justify-content: end;\r\n    padding-right: 250px;\r\n    padding-top: 55px;\r\n}\r\n\r\n.prioridad-tareas {\r\n    grid-column: 1 / 2;\r\n    grid-row: 1 / 3;\r\n    height: 100%;\r\n    border-radius: 2px;\r\n}\r\n\r\n.borrar-tarea,\r\n.editar-tarea {\r\n    grid-row: 1 / 3;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: fit-content;\r\n    cursor: pointer;\r\n    width: 15%;\r\n}\r\n\r\n.borrar-tarea {\r\n    grid-column: 5 / 6;\r\n    content: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\n.editar-tarea {\r\n    grid-column: 4 / 5;\r\n    content: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n\r\n.borrar-tarea:hover,\r\n.editar-tarea:hover {\r\n    background-color: #94a3b8;\r\n    border-radius: 3px;\r\n}\r\n\r\n.borrar-tarea:active,\r\n.editar-tarea:active {\r\n    background-color: #94a3b8;\r\n    border-radius: 3px;\r\n    box-shadow: 1px 1px 5px black;\r\n}\r\n\r\n.btn-añadir-tarea {\r\n    width: fit-content;\r\n}\r\n\r\n.form-añadir-tarea,\r\n.form-editar-tarea {\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: #64748b;\r\n    padding: 10px;\r\n}\r\n\r\ninput, label,\r\ntextarea {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\ninput {\r\n    height: 30px;\r\n}\r\n\r\ntextarea {\r\n    height: 90px;\r\n}\r\n\r\n.sidebar,\r\n.main-content,\r\n.contenedor-tareas {\r\n    padding: 50px;\r\n}\r\n\r\nli:hover {\r\n    cursor: pointer;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,4CAAqC;AACzC;;AAEA;;IAEI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,iBAAiB;IACjB,2BAA2B;IAC3B,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;IACZ,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,gCAAgC;AACpC;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;IACjB,+BAA+B;AACnC;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,gBAAgB;AACpB;;AAEA;;IAEI,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,yBAAyB;IACzB,iBAAiB;IACjB,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,6BAA6B;AACjC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,yCAAyC;IACzC,2BAA2B;IAC3B,yBAAyB;IACzB,mBAAmB;IACnB,WAAW;IACX,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,oBAAoB;IACpB,oBAAoB;IACpB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,kBAAkB;AACtB;;AAEA;;IAEI,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;IACnB,eAAe;IACf,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,gDAA4B;AAChC;;AAEA;IACI,kBAAkB;IAClB,gDAAmC;AACvC;;AAEA;;IAEI,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;;IAEI,yBAAyB;IACzB,kBAAkB;IAClB,6BAA6B;AACjC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,aAAa;AACjB;;AAEA;;IAEI,cAAc;IACd,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;;;IAGI,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB","sourcesContent":["@font-face {\r\n    font-family: Josefin Sans;\r\n    src: url('./JosefinSans-Regular.ttf');\r\n}\r\n\r\nhtml,\r\nbody {\r\n    max-width: 100%;\r\n    overflow-x: hidden;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n    width: 100vw;\r\n    font-size: 1.5rem;\r\n    font-family: 'Josefin Sans';\r\n    background-color: #94a3b8;\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: start;\r\n    height: 15vh;\r\n    padding: 20px;\r\n}\r\n\r\n#contenido {\r\n    display: grid;\r\n    grid-template-columns: 20% 80%;\r\n    height: 81vh;\r\n    width: 100vw;\r\n    font-size: 1.5rem;\r\n}\r\n\r\nfooter {\r\n    height: 4vh;\r\n    font-size: 0.9rem;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\nheader, footer {\r\n    background-color: #1e293b;\r\n    color: #f8fafc;\r\n    border-bottom: 3px solid #f8fafc;\r\n}\r\n\r\n.sidebar {\r\n    background-color: #64748b;\r\n    font-size: 1.5rem;\r\n    box-shadow: 5px 0 5px -5px #333;\r\n}\r\n\r\n.total-tareas {\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.total-tareas:hover {\r\n    color: black;\r\n    transition: 0.1s;\r\n}\r\n\r\n.proyectos_titulo,\r\n.total-tareas {\r\n    color: white;\r\n    font-size: 1.7rem;\r\n}\r\n\r\nul {\r\n    cursor: default;\r\n    padding-top: 10px;\r\n}\r\n\r\nul li {\r\n    list-style: none;\r\n    padding-left: 14px;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\nul li:hover {\r\n    background-color: #94a3b8;\r\n    transition: 0.1s;\r\n}\r\n\r\nul li:active {\r\n    box-shadow: 0px 0px 5px black;\r\n}\r\n\r\nbutton {\r\n    cursor: pointer;\r\n    border: none;\r\n    background-color: #1e293b;\r\n    font-weight: bold;\r\n    color: white;\r\n    border: 1px solid white;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n\r\nbutton:hover {\r\n    transition: 0.1s;\r\n    box-shadow: 1px 1px 5px black;\r\n}\r\n\r\nbutton:active {\r\n    border: 1px solid #1e293b;\r\n}\r\n\r\n.main-content {\r\n    background-color: #cbd5e1;\r\n    font-size: 0.6rem;\r\n}\r\n\r\n.contenedor-tareas {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    overflow: auto;\r\n}\r\n\r\n.tareas {\r\n    display: grid;\r\n    align-items: center;\r\n    align-self: center;\r\n    grid-template-columns: 1% 15% 55% 15% 14%;\r\n    grid-template-rows: 50% 50%;\r\n    background-color: #64748b;\r\n    height: fit-content;\r\n    width: 100%;\r\n    border: 3px solid black;\r\n    border-radius: 5px;\r\n}\r\n\r\n.tareas:hover {\r\n    transition: 0.3s;\r\n    background-color: #525f70;\r\n    cursor: pointer;\r\n    color: white;\r\n}\r\n\r\n.tareas:active {\r\n    transition: 0.2s;\r\n    border: 3px solid white;\r\n}\r\n\r\n.titulo-tareas {\r\n    grid-column: 2 / 3;\r\n}\r\n\r\n.detalles-tareas {\r\n    grid-column: 2 / 4;\r\n    grid-row: 2 / 3;\r\n}\r\n\r\n.fecha-tareas {\r\n    display: flex;\r\n    justify-content: end;\r\n    padding-right: 250px;\r\n    padding-top: 55px;\r\n}\r\n\r\n.prioridad-tareas {\r\n    grid-column: 1 / 2;\r\n    grid-row: 1 / 3;\r\n    height: 100%;\r\n    border-radius: 2px;\r\n}\r\n\r\n.borrar-tarea,\r\n.editar-tarea {\r\n    grid-row: 1 / 3;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: fit-content;\r\n    cursor: pointer;\r\n    width: 15%;\r\n}\r\n\r\n.borrar-tarea {\r\n    grid-column: 5 / 6;\r\n    content: url('./delete.png');\r\n}\r\n\r\n.editar-tarea {\r\n    grid-column: 4 / 5;\r\n    content: url('./text-box-edit.png');\r\n}\r\n\r\n.borrar-tarea:hover,\r\n.editar-tarea:hover {\r\n    background-color: #94a3b8;\r\n    border-radius: 3px;\r\n}\r\n\r\n.borrar-tarea:active,\r\n.editar-tarea:active {\r\n    background-color: #94a3b8;\r\n    border-radius: 3px;\r\n    box-shadow: 1px 1px 5px black;\r\n}\r\n\r\n.btn-añadir-tarea {\r\n    width: fit-content;\r\n}\r\n\r\n.form-añadir-tarea,\r\n.form-editar-tarea {\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: #64748b;\r\n    padding: 10px;\r\n}\r\n\r\ninput, label,\r\ntextarea {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\ninput {\r\n    height: 30px;\r\n}\r\n\r\ntextarea {\r\n    height: 90px;\r\n}\r\n\r\n.sidebar,\r\n.main-content,\r\n.contenedor-tareas {\r\n    padding: 50px;\r\n}\r\n\r\nli:hover {\r\n    cursor: pointer;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/añadir_proyecto.js":
/*!********************************!*\
  !*** ./src/añadir_proyecto.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "añadirProyecto": () => (/* binding */ añadirProyecto),
/* harmony export */   "añadirProyectoEntorno": () => (/* binding */ añadirProyectoEntorno),
/* harmony export */   "crearPrioridades": () => (/* binding */ crearPrioridades),
/* harmony export */   "poblarUl": () => (/* binding */ poblarUl)
/* harmony export */ });
function añadirProyecto() {

    let proyectos = JSON.parse(localStorage.getItem('proyectos'));
    if(proyectos == null) proyectos = [];
    
    const form_proyecto = document.querySelector('.form-proyecto');
    let ultimoElem = proyectos.length - 1;
    const proyectosUl = document.querySelector('ul');

    if (form_proyecto.elements[0].value !== '') {

        const proyecto = document.createElement('li');

        proyecto.dataset.id = `${ultimoElem + 1}`;
        proyecto.className = 'proyecto';

        proyecto.textContent = form_proyecto.elements[0].value;
        proyectos.push(proyecto.textContent);

        proyectosUl.appendChild(proyecto);

        localStorage.setItem('proyectos', JSON.stringify(proyectos));

    } else {

        alert('Hay campos vacios');
        
    }


};

function añadirProyectoEntorno(evento) {

    const elemento = evento.target
    if (elemento.classList.contains('proyecto') || elemento.classList.contains('btn-aceptar') || elemento.classList.contains('borrar-tarea') || elemento.classList.contains('total-tareas') || elemento.classList.contains('btn-aceptar-editar') ) {

        const contenedor_anterior = document.querySelector('.contenedor-tareas');
        const main_content = document.querySelector('#contenido');
        const contenedor = document.createElement('div');

        if (elemento.classList.contains('btn-aceptar') || elemento.classList.contains('btn-aceptar-editar')) {

            const nom_proyecto = document.querySelector('h2');
            contenedor.appendChild(nom_proyecto);

        } if (elemento.classList.contains('borrar-tarea')) {

            const nom_proyecto = document.querySelector('h2');
            contenedor.appendChild(nom_proyecto);

        }  if (elemento.classList.contains('proyecto')) {

            const nom_proyecto = document.createElement('h2');
            nom_proyecto.innerHTML = elemento.textContent;
            contenedor.appendChild(nom_proyecto);

        } if (elemento.classList.contains('total-tareas')) {

            const nom_proyecto = document.createElement('h2');
            nom_proyecto.innerHTML = 'Tareas';
            contenedor.appendChild(nom_proyecto);
            
        }

        const btn_añadir_tarea = document.createElement('button');
        const id = elemento.dataset.id;
        const form = document.createElement('form');
        const label_titulo = document.createElement('label');
        const label_detalles = document.createElement('label');
        const label_fecha = document.createElement('label');
        const input_titulo = document.createElement('input');
        const input_detalles = document.createElement('textarea');
        const fecha = document.createElement('input');
        const btn_aceptar = document.createElement('button');
        const btn_cancelar = document.createElement('button');
        const botones = document.createElement('div');
        const prioridad = document.createElement('select');

        crearPrioridades(prioridad);
        contenedor_anterior.remove();

        btn_añadir_tarea.innerHTML = '+ Añadir Tarea';
        label_titulo.textContent = 'Titulo:';
        label_detalles.textContent = 'Detalles:';
        label_fecha.textContent = 'Fecha:';
        btn_aceptar.textContent = 'Aceptar';
        btn_cancelar.textContent = 'Cancelar';

        main_content.appendChild(contenedor);
        contenedor.appendChild(btn_añadir_tarea);
        contenedor.appendChild(form);
        form.appendChild(label_titulo);
        form.appendChild(input_titulo);
        form.appendChild(label_detalles);
        form.appendChild(input_detalles);
        form.appendChild(label_fecha);
        form.appendChild(fecha);
        form.appendChild(prioridad);
        form.appendChild(botones);
        botones.appendChild(btn_aceptar);
        botones.appendChild(btn_cancelar);

        contenedor.className = 'contenedor-tareas';
        btn_añadir_tarea.className = 'btn-añadir-tarea';
        form.className = 'form-añadir-tarea';
        input_titulo.id = 'titulo-tarea';
        label_titulo.htmlFor = input_titulo.id;
        btn_aceptar.className = 'btn-aceptar';
        btn_cancelar.className = 'btn-cancelar';

        input_titulo.setAttribute('required', '');


        let contenedor_nuevo = document.querySelector('.contenedor-tareas')
        contenedor_nuevo.dataset.id = id;
        nom_proyecto.dataset.id = id;
        btn_añadir_tarea.dataset.id = id;
        btn_aceptar.dataset.id = id;
        form.style.display = 'none';
        form.action = 'post'
        input_titulo.name = 'titulo-tarea';
        input_titulo.type = 'text';
        fecha.type = 'date';

        if (elemento.classList.contains('total-tareas')) {

            btn_añadir_tarea.remove();
            contenedor_nuevo.dataset.id = 'tareas'

        }

        if (elemento.classList.contains('borrar-tarea') && contenedor_nuevo.dataset.id === 'tareas') {

            btn_añadir_tarea.remove();
            contenedor_nuevo.dataset.id = 'tareas'

        }

        if (elemento.dataset.id === 'tareas') {

            btn_añadir_tarea.remove();

        }

    }

};

function poblarUl() {

    let proyectos = JSON.parse(localStorage.getItem('proyectos'));
    if(proyectos == null) proyectos = [];
    const div = document.querySelector('ul')

    let index = 0;
    proyectos.forEach(proyecto => {

        let li = document.createElement('li')
        div.appendChild(li);
        li.textContent = proyecto;
        li.dataset.id = index;
        li.className = 'proyecto';
        index++

    });
    
}

function crearPrioridades(datalist) {

    const prioridades = ['Baja', 'Media', 'Alta'];

    for (let i = 0; i < prioridades.length; i++) {
        
        const opcion = document.createElement('option');
        opcion.value = prioridades[i];
        opcion.text = prioridades[i];
        
        datalist.appendChild(opcion);
    }
    
}

/***/ }),

/***/ "./src/tareas.js":
/*!***********************!*\
  !*** ./src/tareas.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "añadirTarea": () => (/* binding */ añadirTarea),
/* harmony export */   "borrarTarea": () => (/* binding */ borrarTarea),
/* harmony export */   "cambiarTareaArray": () => (/* binding */ cambiarTareaArray),
/* harmony export */   "default": () => (/* binding */ Tarea),
/* harmony export */   "editarTarea": () => (/* binding */ editarTarea),
/* harmony export */   "listarTareas": () => (/* binding */ listarTareas),
/* harmony export */   "mostrarFormTareas": () => (/* binding */ mostrarFormTareas),
/* harmony export */   "ocultarFormEditarTareas": () => (/* binding */ ocultarFormEditarTareas),
/* harmony export */   "ocultarFormTareas": () => (/* binding */ ocultarFormTareas)
/* harmony export */ });
/* harmony import */ var _a_adir_proyecto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./añadir_proyecto.js */ "./src/añadir_proyecto.js");


class Tarea{

    constructor(titulo, detalles, finFecha, prioridad, id, posicion){

        this.titulo = titulo;
        this.detalles = detalles;
        this.finFecha = finFecha;
        this.prioridad = prioridad;
        this.id = id;
        this.posicion = posicion;

    }

}

function añadirTarea(evento) {

    const elemento = evento.target

    if (elemento.classList.contains('btn-aceptar')) {

        const form = document.querySelector('.form-añadir-tarea');
        
        let input_titulo = form.elements[0].value;
        let detalles = form.elements[1].value;
        let finFecha = form.elements[2].value;
        let prioridad = form.elements[3].value;

        if (input_titulo !== '' && detalles !== '' && finFecha !== '' && prioridad !== '') {

            let tarea = new Tarea(input_titulo, detalles, finFecha, prioridad, elemento.dataset.id)
            let tareas = JSON.parse(localStorage.getItem('tareas'));
            if(tareas == null) tareas = [];
            tareas.push(tarea);
            let ultimoElem = tareas.length - 1;
            tarea.posicion = ultimoElem;

            localStorage.setItem('tareas', JSON.stringify(tareas));

        } else {

            alert('Hay campos vacios');

        }
        
        

    }

}

function listarTareas(evento) {
    
    const elemento = evento.target;
    let tareas = JSON.parse(localStorage.getItem('tareas'));
    if(tareas == null) tareas = [];
    let contenido = document.querySelector('.contenedor-tareas');

    if (elemento.classList.contains('proyecto') ||
     elemento.classList.contains('btn-aceptar') ||
      elemento.classList.contains('borrar-tarea') ||
       elemento.classList.contains('total-tareas') ||
        elemento.classList.contains('btn-aceptar-editar')) {

        tareas.forEach(tarea => {
            
            if (tarea.id === contenido.dataset.id ||
                 elemento.classList.contains('total-tareas') ||
                  elemento.dataset.id === 'tareas') {

                if (tarea !== '') {

                    let div_tarea = document.createElement('div');
                    let borrar_tarea = document.createElement('div');
                    let editar_tarea = document.createElement('div');
                    let titulo = document.createElement('div');
                    let detalles = document.createElement('div');
                    let fecha = document.createElement('div');
                    let prioridad = document.createElement('div');

                    titulo.className = 'titulo-tareas';
                    detalles.className = 'detalles-tareas';
                    fecha.className = 'fecha-tareas';
                    div_tarea.className = 'tareas';
                    borrar_tarea.className = 'borrar-tarea';
                    editar_tarea.className = 'editar-tarea';
                    prioridad.className = 'prioridad-tareas';

                    if (tarea.prioridad === 'Baja') {
                        prioridad.style.backgroundColor = '#16a34a'
                    } if (tarea.prioridad === 'Media') {
                        prioridad.style.backgroundColor = '#fcd34d'
                    } if (tarea.prioridad === 'Alta') {
                        prioridad.style.backgroundColor = '#b91c1c'
                    }

                    titulo.textContent = tarea.titulo;
                    detalles.textContent = tarea.detalles;
                    fecha.textContent = tarea.finFecha;
                    div_tarea.dataset.posicion = tarea.posicion;
                    borrar_tarea.dataset.posicion = tarea.posicion;
                    editar_tarea.dataset.posicion = tarea.posicion;
                    editar_tarea.dataset.id = tarea.id;
                    titulo.dataset.posicion = tarea.posicion;
                    detalles.dataset.posicion = tarea.posicion;
                    fecha.dataset.posicion = tarea.posicion;
                    prioridad.dataset.posicion = tarea.posicion;

                    if (elemento.classList.contains('total-tareas') || elemento.dataset.id === 'tareas') {
                        borrar_tarea.dataset.id = 'tareas';
                    } else {
                        borrar_tarea.dataset.id = tarea.id;
                    }

                    div_tarea.appendChild(titulo);
                    div_tarea.appendChild(detalles);
                    div_tarea.appendChild(fecha);
                    div_tarea.appendChild(prioridad);
                    div_tarea.appendChild(borrar_tarea);
                    div_tarea.appendChild(editar_tarea);
                    contenido.appendChild(div_tarea);

                }

            }
        
        });

    }

}

function borrarTarea(evento) {

    let elemento = evento.target
    
    if (elemento.classList.contains('borrar-tarea')) {

        let tareas = JSON.parse(localStorage.getItem('tareas'));
        if(tareas == null) tareas = [];
        let posicion = elemento.dataset.posicion;
        tareas[posicion] = '';

        localStorage.setItem('tareas', JSON.stringify(tareas));

    }

}

function editarTarea(evento) {

    let elemento = evento.target;
    let posicion = elemento.dataset.posicion;

    if (elemento.classList.contains('editar-tarea')) {

        let tareas = JSON.parse(localStorage.getItem('tareas'));
        if(tareas == null) tareas = [];

        let posicion1 = posicion;
        let titulo = tareas[posicion].titulo;
        let detalles = tareas[posicion].detalles;
        let fin_fecha = tareas[posicion].finFecha;
        let prioridad1 = tareas[posicion].prioridad;
        let id = tareas[posicion].id;

        generarFormEditar(posicion1, id, titulo, detalles, fin_fecha, prioridad1);

        localStorage.setItem('tareas', JSON.stringify(tareas));

    }

}

function cambiarTareaArray(evento) {
    
    let elemento = evento.target

    if (elemento.classList.contains('btn-aceptar-editar')) {

        let tareas = JSON.parse(localStorage.getItem('tareas'));
        if(tareas == null) tareas = [];
        let form = document.querySelector('.form-editar-tarea');
        let posicion = elemento.dataset.posicion;

        

        if (form.elements[0].value !== '' && form.elements[1].value !== '' && form.elements[2].value !== '' && form.elements[3].value !== '') {

            tareas[posicion].titulo = form.elements[0].value;
            tareas[posicion].detalles = form.elements[1].value;
            tareas[posicion].finFecha = form.elements[2].value;
            tareas[posicion].prioridad = form.elements[3].value;

            localStorage.setItem('tareas', JSON.stringify(tareas));

        } else {

            alert('Hay campos vacios');

        }

    }

}

function generarFormEditar(posicion, id, titulo, detalles, fin_fecha, prioridad1) {

    let contenedor_tareas_totales = document.querySelector(`div[data-id='tareas']`);
    const tareas = document.querySelectorAll(`div[data-posicion='${posicion}'`);
    const div_contenedor = tareas[0]
    const form = document.createElement('form');
    const label_titulo = document.createElement('label');
    const label_detalles = document.createElement('label');
    const label_fecha = document.createElement('label');
    const input_titulo = document.createElement('input');
    const input_detalles = document.createElement('textarea');
    const fecha = document.createElement('input');
    const btn_aceptar = document.createElement('button');
    const btn_cancelar = document.createElement('button');
    const botones = document.createElement('div');
    const prioridad = document.createElement('select');

    (0,_a_adir_proyecto_js__WEBPACK_IMPORTED_MODULE_0__.crearPrioridades)(prioridad);

    for (let i = 1; i < tareas.length; i++) {

        tareas[i].style.display = 'none'
        
    }

    label_titulo.textContent = 'Titulo:';
    label_detalles.textContent = 'Detalles:';
    label_fecha.textContent = 'Fecha:';
    btn_aceptar.textContent = 'Aceptar';
    btn_cancelar.textContent = 'Cancelar';

    input_titulo.value = titulo;
    input_detalles.value = detalles;
    fecha.value = fin_fecha;
    prioridad.value = prioridad1;

    div_contenedor.appendChild(form);
    form.appendChild(label_titulo);
    form.appendChild(input_titulo);
    form.appendChild(label_detalles);
    form.appendChild(input_detalles);
    form.appendChild(label_fecha);
    form.appendChild(fecha);
    form.appendChild(prioridad);
    form.appendChild(botones);
    botones.appendChild(btn_aceptar);
    botones.appendChild(btn_cancelar);

    form.className = 'form-editar-tarea';
    btn_aceptar.className = 'btn-aceptar-editar';
    btn_cancelar.className = 'btn-cancelar-editar';
    btn_aceptar.dataset.posicion = posicion;

    form.dataset.posicion = posicion;
    form.dataset.id = id;
    
    if (contenedor_tareas_totales) {
        btn_aceptar.dataset.id = 'tareas';
    } else {
        btn_aceptar.dataset.id = id;
    }
    
    input_titulo.id = 'titulo-tarea';
    btn_cancelar.dataset.posicion = posicion;
    label_titulo.htmlFor = input_titulo.id;
    form.style.display = 'none';
    form.action = 'post'
    input_titulo.name = 'titulo-tarea';
    input_titulo.type = 'text';
    fecha.type = 'date';

    form.style.display = 'block';
    div_contenedor.style.display = 'block';
    div_contenedor.style.height = 'fit-content';

}

function mostrarFormTareas(evento) {
    
    evento.preventDefault();
    let elemento = evento.target
    const form = document.querySelector('.form-añadir-tarea');

    if (elemento.classList.contains('btn-añadir-tarea')) {
        form.style.display = 'block';
    }

}

function ocultarFormTareas(evento) {
    
    evento.preventDefault();
    let elemento = evento.target
    const form = document.querySelector('.form-añadir-tarea');
    
    if (elemento.classList.contains('btn-cancelar')) {
        form.style.display = 'none';
    }

}

function ocultarFormEditarTareas(evento) {

    evento.preventDefault();
    let elemento = evento.target
    let posicion = elemento.dataset.posicion;

    if (elemento.classList.contains('proyecto')) {

        let array = JSON.parse(localStorage.getItem('array'));
        if(array == null) array = [];        

        array = [];


        localStorage.setItem('array', JSON.stringify(array));
    }

    if (elemento.classList.contains('btn-cancelar-editar')) {

        const tarea = document.querySelectorAll(`div[data-posicion='${posicion}']`);
        let form = document.querySelector(`form[data-posicion='${posicion}']`);
        
        tarea.forEach(div => {
            div.style.display = 'block';

            if (div.classList.contains('fecha-tareas')) {
                div.style.display = 'flex'
            }
        });

        tarea[0].style.display = 'grid';
        form.remove();

    } if (elemento.classList.contains('editar-tarea')) {

        let array = JSON.parse(localStorage.getItem('array'));
        if(array == null) array = [];

        let form = document.querySelector(`form[data-posicion='${posicion}']`)
        
        array.push(form.dataset.posicion)
        
        if (array[0] === array[1]) {

            let form = document.querySelector(`form[data-posicion='${array[0]}']`)
            if (form) {
                form.remove();
            }
            
            let divs = document.querySelectorAll(`div[data-posicion='${array[0]}']`)
            divs.forEach(elemento => {
                
                elemento.style.display = 'block'

                if (elemento.classList.contains('fecha-tareas')) {
                    elemento.style.display = 'flex'
                }
            });

            divs[0].style.display = 'grid';
            array = []

        } if (array.length > 1) {

            let form = document.querySelector(`form[data-posicion='${array[0]}']`)
            if (form) {
                form.remove();
            }
            let divs = document.querySelectorAll(`div[data-posicion='${array[0]}']`)

            array.splice(0, 1);

            divs.forEach(elemento => {
                
                elemento.style.display = 'block'

                if (elemento.classList.contains('fecha-tareas')) {
                    elemento.style.display = 'flex'
                }

            });

            divs[0].style.display = 'grid';

        }

        localStorage.setItem('array', JSON.stringify(array));

    } 

}

/***/ }),

/***/ "./src/JosefinSans-Regular.ttf":
/*!*************************************!*\
  !*** ./src/JosefinSans-Regular.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0e82e3d2c82cf1e38a33.ttf";

/***/ }),

/***/ "./src/delete.png":
/*!************************!*\
  !*** ./src/delete.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f7555d7340303a48da7.png";

/***/ }),

/***/ "./src/text-box-edit.png":
/*!*******************************!*\
  !*** ./src/text-box-edit.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e7a2d9d3e49ef34ac2d1.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _a_adir_proyecto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./añadir_proyecto.js */ "./src/añadir_proyecto.js");
/* harmony import */ var _tareas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tareas */ "./src/tareas.js");




(0,_a_adir_proyecto_js__WEBPACK_IMPORTED_MODULE_1__.poblarUl)();

const btn_añadir = document.querySelector('.btn-añadirP');
const btn_aceptar = document.querySelector('.btn-aceptar1');
const btn_cancelar = document.querySelector('.btn-cancelar1');
const form_proyecto = document.querySelector('.form-proyecto');

btn_añadir.addEventListener('click', () => { form_proyecto.hidden = false;  btn_añadir.hidden = true; });

document.addEventListener('click', _tareas__WEBPACK_IMPORTED_MODULE_2__["añadirTarea"]);

document.addEventListener('click', _tareas__WEBPACK_IMPORTED_MODULE_2__.borrarTarea);

document.addEventListener('click', _tareas__WEBPACK_IMPORTED_MODULE_2__.editarTarea);

document.addEventListener('click', _tareas__WEBPACK_IMPORTED_MODULE_2__.cambiarTareaArray);

document.addEventListener('click', _a_adir_proyecto_js__WEBPACK_IMPORTED_MODULE_1__["añadirProyectoEntorno"]);

document.addEventListener('click', _tareas__WEBPACK_IMPORTED_MODULE_2__.listarTareas);

document.addEventListener('click', _tareas__WEBPACK_IMPORTED_MODULE_2__.mostrarFormTareas);

document.addEventListener('click', _tareas__WEBPACK_IMPORTED_MODULE_2__.ocultarFormTareas);

document.addEventListener('click', _tareas__WEBPACK_IMPORTED_MODULE_2__.ocultarFormEditarTareas);

btn_cancelar.addEventListener('click', function(e) { 
    e.preventDefault(); 
    form_proyecto.hidden = true;
    btn_añadir.hidden = false;
    form_proyecto.elements[0].value = '';
});

btn_aceptar.addEventListener('click', function(e) { 
    e.preventDefault(); 
    (0,_a_adir_proyecto_js__WEBPACK_IMPORTED_MODULE_1__["añadirProyecto"])();
    form_proyecto.hidden = true;
    btn_añadir.hidden = false;
    form_proyecto.elements[0].value = '';
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7OztBQ2ZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3QkFBd0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RMd0Q7QUFDeEQ7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLFNBQVM7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFFQUFnQjtBQUNwQjtBQUNBLG9CQUFvQixtQkFBbUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSxTQUFTO0FBQy9FLGlFQUFpRSxTQUFTO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLFNBQVM7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRSxTQUFTO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLFNBQVM7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxxRUFBcUUsU0FBUztBQUM5RTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUUsU0FBUztBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvWUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNnRTtBQUM0RTtBQUNqSztBQUNBLDZEQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLCtCQUErQiwyQkFBMkI7QUFDdkc7QUFDQSxtQ0FBbUMsbURBQVc7QUFDOUM7QUFDQSxtQ0FBbUMsZ0RBQVc7QUFDOUM7QUFDQSxtQ0FBbUMsZ0RBQVc7QUFDOUM7QUFDQSxtQ0FBbUMsc0RBQWlCO0FBQ3BEO0FBQ0EsbUNBQW1DLHlFQUFxQjtBQUN4RDtBQUNBLG1DQUFtQyxpREFBWTtBQUMvQztBQUNBLG1DQUFtQyxzREFBaUI7QUFDcEQ7QUFDQSxtQ0FBbUMsc0RBQWlCO0FBQ3BEO0FBQ0EsbUNBQW1DLDREQUF1QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzRUFBYztBQUNsQjtBQUNBO0FBQ0E7QUFDQSxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXN0YS1haGFjZXIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2xpc3RhLWFoYWNlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGlzdGEtYWhhY2VyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9saXN0YS1haGFjZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9saXN0YS1haGFjZXIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbGlzdGEtYWhhY2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2xpc3RhLWFoYWNlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGlzdGEtYWhhY2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xpc3RhLWFoYWNlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9saXN0YS1haGFjZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9saXN0YS1haGFjZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9saXN0YS1haGFjZXIvLi9zcmMvYcOxYWRpcl9wcm95ZWN0by5qcyIsIndlYnBhY2s6Ly9saXN0YS1haGFjZXIvLi9zcmMvdGFyZWFzLmpzIiwid2VicGFjazovL2xpc3RhLWFoYWNlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9saXN0YS1haGFjZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbGlzdGEtYWhhY2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9saXN0YS1haGFjZXIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9saXN0YS1haGFjZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9saXN0YS1haGFjZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9saXN0YS1haGFjZXIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbGlzdGEtYWhhY2VyL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2xpc3RhLWFoYWNlci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbGlzdGEtYWhhY2VyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0pvc2VmaW5TYW5zLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9kZWxldGUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi90ZXh0LWJveC1lZGl0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBKb3NlZmluIFNhbnM7XFxyXFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2Fucyc7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NGEzYjg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICAgIGhlaWdodDogMTV2aDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbmlkbyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDgwJTtcXHJcXG4gICAgaGVpZ2h0OiA4MXZoO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgICBoZWlnaHQ6IDR2aDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIsIGZvb3RlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTI5M2I7XFxyXFxuICAgIGNvbG9yOiAjZjhmYWZjO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2Y4ZmFmYztcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogNXB4IDAgNXB4IC01cHggIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLnRvdGFsLXRhcmVhcyB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG90YWwtdGFyZWFzOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJveWVjdG9zX3RpdHVsbyxcXHJcXG4udG90YWwtdGFyZWFzIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG51bCBsaSB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTRweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG51bCBsaTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NGEzYjg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMXM7XFxyXFxufVxcclxcblxcclxcbnVsIGxpOmFjdGl2ZSB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxZTI5M2I7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRlbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkNWUxO1xcclxcbiAgICBmb250LXNpemU6IDAuNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbmVkb3ItdGFyZWFzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnRhcmVhcyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxJSAxNSUgNTUlIDE1JSAxNCU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTAlIDUwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi50YXJlYXM6aG92ZXIge1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI1ZjcwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhcmVhczphY3RpdmUge1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdHVsby10YXJlYXMge1xcclxcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxyXFxufVxcclxcblxcclxcbi5kZXRhbGxlcy10YXJlYXMge1xcclxcbiAgICBncmlkLWNvbHVtbjogMiAvIDQ7XFxyXFxuICAgIGdyaWQtcm93OiAyIC8gMztcXHJcXG59XFxyXFxuXFxyXFxuLmZlY2hhLXRhcmVhcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNTBweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDU1cHg7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcmlkYWQtdGFyZWFzIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcclxcbiAgICBncmlkLXJvdzogMSAvIDM7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9ycmFyLXRhcmVhLFxcclxcbi5lZGl0YXItdGFyZWEge1xcclxcbiAgICBncmlkLXJvdzogMSAvIDM7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxNSU7XFxyXFxufVxcclxcblxcclxcbi5ib3JyYXItdGFyZWEge1xcclxcbiAgICBncmlkLWNvbHVtbjogNSAvIDY7XFxyXFxuICAgIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbi5lZGl0YXItdGFyZWEge1xcclxcbiAgICBncmlkLWNvbHVtbjogNCAvIDU7XFxyXFxuICAgIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbi5ib3JyYXItdGFyZWE6aG92ZXIsXFxyXFxuLmVkaXRhci10YXJlYTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NGEzYjg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvcnJhci10YXJlYTphY3RpdmUsXFxyXFxuLmVkaXRhci10YXJlYTphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRhM2I4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWHDsWFkaXItdGFyZWEge1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWHDsWFkaXItdGFyZWEsXFxyXFxuLmZvcm0tZWRpdGFyLXRhcmVhIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQsIGxhYmVsLFxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBoZWlnaHQ6IDkwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLFxcclxcbi5tYWluLWNvbnRlbnQsXFxyXFxuLmNvbnRlbmVkb3ItdGFyZWFzIHtcXHJcXG4gICAgcGFkZGluZzogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxubGk6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsNENBQXFDO0FBQ3pDOztBQUVBOztJQUVJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHlDQUF5QztJQUN6QywyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksZUFBZTtJQUNmLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdEQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnREFBbUM7QUFDdkM7O0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTs7O0lBR0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBKb3NlZmluIFNhbnM7XFxyXFxuICAgIHNyYzogdXJsKCcuL0pvc2VmaW5TYW5zLVJlZ3VsYXIudHRmJyk7XFxyXFxufVxcclxcblxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRhM2I4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgICBoZWlnaHQ6IDE1dmg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW5pZG8ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XFxyXFxuICAgIGhlaWdodDogODF2aDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgaGVpZ2h0OiA0dmg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyLCBmb290ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyOTNiO1xcclxcbiAgICBjb2xvcjogI2Y4ZmFmYztcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmOGZhZmM7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IDVweCAwIDVweCAtNXB4ICMzMzM7XFxyXFxufVxcclxcblxcclxcbi50b3RhbC10YXJlYXMge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvdGFsLXRhcmVhczpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuLnByb3llY3Rvc190aXR1bG8sXFxyXFxuLnRvdGFsLXRhcmVhcyB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxudWwgbGkge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDE0cHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxudWwgbGk6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRhM2I4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG51bCBsaTphY3RpdmUge1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTI5M2I7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4xcztcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjphY3RpdmUge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMWUyOTNiO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250ZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDVlMTtcXHJcXG4gICAgZm9udC1zaXplOiAwLjZyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250ZW5lZG9yLXRhcmVhcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi50YXJlYXMge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMSUgMTUlIDU1JSAxNSUgMTQlO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwJSA1MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFyZWFzOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUyNWY3MDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi50YXJlYXM6YWN0aXZlIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi50aXR1bG8tdGFyZWFzIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWxsZXMtdGFyZWFzIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcclxcbiAgICBncmlkLXJvdzogMiAvIDM7XFxyXFxufVxcclxcblxcclxcbi5mZWNoYS10YXJlYXMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMjUwcHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA1NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpZGFkLXRhcmVhcyB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXHJcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvcnJhci10YXJlYSxcXHJcXG4uZWRpdGFyLXRhcmVhIHtcXHJcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB3aWR0aDogMTUlO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9ycmFyLXRhcmVhIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDUgLyA2O1xcclxcbiAgICBjb250ZW50OiB1cmwoJy4vZGVsZXRlLnBuZycpO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdGFyLXRhcmVhIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDQgLyA1O1xcclxcbiAgICBjb250ZW50OiB1cmwoJy4vdGV4dC1ib3gtZWRpdC5wbmcnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvcnJhci10YXJlYTpob3ZlcixcXHJcXG4uZWRpdGFyLXRhcmVhOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk0YTNiODtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9ycmFyLXRhcmVhOmFjdGl2ZSxcXHJcXG4uZWRpdGFyLXRhcmVhOmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NGEzYjg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5idG4tYcOxYWRpci10YXJlYSB7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tYcOxYWRpci10YXJlYSxcXHJcXG4uZm9ybS1lZGl0YXItdGFyZWEge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCwgbGFiZWwsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIGhlaWdodDogOTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIsXFxyXFxuLm1haW4tY29udGVudCxcXHJcXG4uY29udGVuZWRvci10YXJlYXMge1xcclxcbiAgICBwYWRkaW5nOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5saTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBmdW5jdGlvbiBhw7FhZGlyUHJveWVjdG8oKSB7XHJcblxyXG4gICAgbGV0IHByb3llY3RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb3llY3RvcycpKTtcclxuICAgIGlmKHByb3llY3RvcyA9PSBudWxsKSBwcm95ZWN0b3MgPSBbXTtcclxuICAgIFxyXG4gICAgY29uc3QgZm9ybV9wcm95ZWN0byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXByb3llY3RvJyk7XHJcbiAgICBsZXQgdWx0aW1vRWxlbSA9IHByb3llY3Rvcy5sZW5ndGggLSAxO1xyXG4gICAgY29uc3QgcHJveWVjdG9zVWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpO1xyXG5cclxuICAgIGlmIChmb3JtX3Byb3llY3RvLmVsZW1lbnRzWzBdLnZhbHVlICE9PSAnJykge1xyXG5cclxuICAgICAgICBjb25zdCBwcm95ZWN0byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcblxyXG4gICAgICAgIHByb3llY3RvLmRhdGFzZXQuaWQgPSBgJHt1bHRpbW9FbGVtICsgMX1gO1xyXG4gICAgICAgIHByb3llY3RvLmNsYXNzTmFtZSA9ICdwcm95ZWN0byc7XHJcblxyXG4gICAgICAgIHByb3llY3RvLnRleHRDb250ZW50ID0gZm9ybV9wcm95ZWN0by5lbGVtZW50c1swXS52YWx1ZTtcclxuICAgICAgICBwcm95ZWN0b3MucHVzaChwcm95ZWN0by50ZXh0Q29udGVudCk7XHJcblxyXG4gICAgICAgIHByb3llY3Rvc1VsLmFwcGVuZENoaWxkKHByb3llY3RvKTtcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb3llY3RvcycsIEpTT04uc3RyaW5naWZ5KHByb3llY3RvcykpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGFsZXJ0KCdIYXkgY2FtcG9zIHZhY2lvcycpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYcOxYWRpclByb3llY3RvRW50b3JubyhldmVudG8pIHtcclxuXHJcbiAgICBjb25zdCBlbGVtZW50byA9IGV2ZW50by50YXJnZXRcclxuICAgIGlmIChlbGVtZW50by5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb3llY3RvJykgfHwgZWxlbWVudG8uY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tYWNlcHRhcicpIHx8IGVsZW1lbnRvLmNsYXNzTGlzdC5jb250YWlucygnYm9ycmFyLXRhcmVhJykgfHwgZWxlbWVudG8uY2xhc3NMaXN0LmNvbnRhaW5zKCd0b3RhbC10YXJlYXMnKSB8fCBlbGVtZW50by5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi1hY2VwdGFyLWVkaXRhcicpICkge1xyXG5cclxuICAgICAgICBjb25zdCBjb250ZW5lZG9yX2FudGVyaW9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbmVkb3ItdGFyZWFzJyk7XHJcbiAgICAgICAgY29uc3QgbWFpbl9jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbmlkbycpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbmVkb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAgICAgaWYgKGVsZW1lbnRvLmNsYXNzTGlzdC5jb250YWlucygnYnRuLWFjZXB0YXInKSB8fCBlbGVtZW50by5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi1hY2VwdGFyLWVkaXRhcicpKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBub21fcHJveWVjdG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMicpO1xyXG4gICAgICAgICAgICBjb250ZW5lZG9yLmFwcGVuZENoaWxkKG5vbV9wcm95ZWN0byk7XHJcblxyXG4gICAgICAgIH0gaWYgKGVsZW1lbnRvLmNsYXNzTGlzdC5jb250YWlucygnYm9ycmFyLXRhcmVhJykpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5vbV9wcm95ZWN0byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gyJyk7XHJcbiAgICAgICAgICAgIGNvbnRlbmVkb3IuYXBwZW5kQ2hpbGQobm9tX3Byb3llY3RvKTtcclxuXHJcbiAgICAgICAgfSAgaWYgKGVsZW1lbnRvLmNsYXNzTGlzdC5jb250YWlucygncHJveWVjdG8nKSkge1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgbm9tX3Byb3llY3RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICAgICAgbm9tX3Byb3llY3RvLmlubmVySFRNTCA9IGVsZW1lbnRvLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICBjb250ZW5lZG9yLmFwcGVuZENoaWxkKG5vbV9wcm95ZWN0byk7XHJcblxyXG4gICAgICAgIH0gaWYgKGVsZW1lbnRvLmNsYXNzTGlzdC5jb250YWlucygndG90YWwtdGFyZWFzJykpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5vbV9wcm95ZWN0byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgICAgIG5vbV9wcm95ZWN0by5pbm5lckhUTUwgPSAnVGFyZWFzJztcclxuICAgICAgICAgICAgY29udGVuZWRvci5hcHBlbmRDaGlsZChub21fcHJveWVjdG8pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJ0bl9hw7FhZGlyX3RhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgaWQgPSBlbGVtZW50by5kYXRhc2V0LmlkO1xyXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAgICAgY29uc3QgbGFiZWxfdGl0dWxvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBjb25zdCBsYWJlbF9kZXRhbGxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgY29uc3QgbGFiZWxfZmVjaGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0X3RpdHVsbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY29uc3QgaW5wdXRfZGV0YWxsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgICAgIGNvbnN0IGZlY2hhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjb25zdCBidG5fYWNlcHRhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IGJ0bl9jYW5jZWxhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IGJvdG9uZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBwcmlvcmlkYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuXHJcbiAgICAgICAgY3JlYXJQcmlvcmlkYWRlcyhwcmlvcmlkYWQpO1xyXG4gICAgICAgIGNvbnRlbmVkb3JfYW50ZXJpb3IucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgIGJ0bl9hw7FhZGlyX3RhcmVhLmlubmVySFRNTCA9ICcrIEHDsWFkaXIgVGFyZWEnO1xyXG4gICAgICAgIGxhYmVsX3RpdHVsby50ZXh0Q29udGVudCA9ICdUaXR1bG86JztcclxuICAgICAgICBsYWJlbF9kZXRhbGxlcy50ZXh0Q29udGVudCA9ICdEZXRhbGxlczonO1xyXG4gICAgICAgIGxhYmVsX2ZlY2hhLnRleHRDb250ZW50ID0gJ0ZlY2hhOic7XHJcbiAgICAgICAgYnRuX2FjZXB0YXIudGV4dENvbnRlbnQgPSAnQWNlcHRhcic7XHJcbiAgICAgICAgYnRuX2NhbmNlbGFyLnRleHRDb250ZW50ID0gJ0NhbmNlbGFyJztcclxuXHJcbiAgICAgICAgbWFpbl9jb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbmVkb3IpO1xyXG4gICAgICAgIGNvbnRlbmVkb3IuYXBwZW5kQ2hpbGQoYnRuX2HDsWFkaXJfdGFyZWEpO1xyXG4gICAgICAgIGNvbnRlbmVkb3IuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbF90aXR1bG8pO1xyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRfdGl0dWxvKTtcclxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsX2RldGFsbGVzKTtcclxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0X2RldGFsbGVzKTtcclxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsX2ZlY2hhKTtcclxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGZlY2hhKTtcclxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaWRhZCk7XHJcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChib3RvbmVzKTtcclxuICAgICAgICBib3RvbmVzLmFwcGVuZENoaWxkKGJ0bl9hY2VwdGFyKTtcclxuICAgICAgICBib3RvbmVzLmFwcGVuZENoaWxkKGJ0bl9jYW5jZWxhcik7XHJcblxyXG4gICAgICAgIGNvbnRlbmVkb3IuY2xhc3NOYW1lID0gJ2NvbnRlbmVkb3ItdGFyZWFzJztcclxuICAgICAgICBidG5fYcOxYWRpcl90YXJlYS5jbGFzc05hbWUgPSAnYnRuLWHDsWFkaXItdGFyZWEnO1xyXG4gICAgICAgIGZvcm0uY2xhc3NOYW1lID0gJ2Zvcm0tYcOxYWRpci10YXJlYSc7XHJcbiAgICAgICAgaW5wdXRfdGl0dWxvLmlkID0gJ3RpdHVsby10YXJlYSc7XHJcbiAgICAgICAgbGFiZWxfdGl0dWxvLmh0bWxGb3IgPSBpbnB1dF90aXR1bG8uaWQ7XHJcbiAgICAgICAgYnRuX2FjZXB0YXIuY2xhc3NOYW1lID0gJ2J0bi1hY2VwdGFyJztcclxuICAgICAgICBidG5fY2FuY2VsYXIuY2xhc3NOYW1lID0gJ2J0bi1jYW5jZWxhcic7XHJcblxyXG4gICAgICAgIGlucHV0X3RpdHVsby5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGNvbnRlbmVkb3JfbnVldm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVuZWRvci10YXJlYXMnKVxyXG4gICAgICAgIGNvbnRlbmVkb3JfbnVldm8uZGF0YXNldC5pZCA9IGlkO1xyXG4gICAgICAgIG5vbV9wcm95ZWN0by5kYXRhc2V0LmlkID0gaWQ7XHJcbiAgICAgICAgYnRuX2HDsWFkaXJfdGFyZWEuZGF0YXNldC5pZCA9IGlkO1xyXG4gICAgICAgIGJ0bl9hY2VwdGFyLmRhdGFzZXQuaWQgPSBpZDtcclxuICAgICAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgZm9ybS5hY3Rpb24gPSAncG9zdCdcclxuICAgICAgICBpbnB1dF90aXR1bG8ubmFtZSA9ICd0aXR1bG8tdGFyZWEnO1xyXG4gICAgICAgIGlucHV0X3RpdHVsby50eXBlID0gJ3RleHQnO1xyXG4gICAgICAgIGZlY2hhLnR5cGUgPSAnZGF0ZSc7XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50by5jbGFzc0xpc3QuY29udGFpbnMoJ3RvdGFsLXRhcmVhcycpKSB7XHJcblxyXG4gICAgICAgICAgICBidG5fYcOxYWRpcl90YXJlYS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgY29udGVuZWRvcl9udWV2by5kYXRhc2V0LmlkID0gJ3RhcmVhcydcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZWxlbWVudG8uY2xhc3NMaXN0LmNvbnRhaW5zKCdib3JyYXItdGFyZWEnKSAmJiBjb250ZW5lZG9yX251ZXZvLmRhdGFzZXQuaWQgPT09ICd0YXJlYXMnKSB7XHJcblxyXG4gICAgICAgICAgICBidG5fYcOxYWRpcl90YXJlYS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgY29udGVuZWRvcl9udWV2by5kYXRhc2V0LmlkID0gJ3RhcmVhcydcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZWxlbWVudG8uZGF0YXNldC5pZCA9PT0gJ3RhcmVhcycpIHtcclxuXHJcbiAgICAgICAgICAgIGJ0bl9hw7FhZGlyX3RhcmVhLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2JsYXJVbCgpIHtcclxuXHJcbiAgICBsZXQgcHJveWVjdG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJveWVjdG9zJykpO1xyXG4gICAgaWYocHJveWVjdG9zID09IG51bGwpIHByb3llY3RvcyA9IFtdO1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwnKVxyXG5cclxuICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICBwcm95ZWN0b3MuZm9yRWFjaChwcm95ZWN0byA9PiB7XHJcblxyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgICAgIGxpLnRleHRDb250ZW50ID0gcHJveWVjdG87XHJcbiAgICAgICAgbGkuZGF0YXNldC5pZCA9IGluZGV4O1xyXG4gICAgICAgIGxpLmNsYXNzTmFtZSA9ICdwcm95ZWN0byc7XHJcbiAgICAgICAgaW5kZXgrK1xyXG5cclxuICAgIH0pO1xyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhclByaW9yaWRhZGVzKGRhdGFsaXN0KSB7XHJcblxyXG4gICAgY29uc3QgcHJpb3JpZGFkZXMgPSBbJ0JhamEnLCAnTWVkaWEnLCAnQWx0YSddO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJpb3JpZGFkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBvcGNpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBvcGNpb24udmFsdWUgPSBwcmlvcmlkYWRlc1tpXTtcclxuICAgICAgICBvcGNpb24udGV4dCA9IHByaW9yaWRhZGVzW2ldO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRhdGFsaXN0LmFwcGVuZENoaWxkKG9wY2lvbik7XHJcbiAgICB9XHJcbiAgICBcclxufSIsImltcG9ydCB7IGNyZWFyUHJpb3JpZGFkZXMgfSBmcm9tIFwiLi9hw7FhZGlyX3Byb3llY3RvLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXJlYXtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0aXR1bG8sIGRldGFsbGVzLCBmaW5GZWNoYSwgcHJpb3JpZGFkLCBpZCwgcG9zaWNpb24pe1xyXG5cclxuICAgICAgICB0aGlzLnRpdHVsbyA9IHRpdHVsbztcclxuICAgICAgICB0aGlzLmRldGFsbGVzID0gZGV0YWxsZXM7XHJcbiAgICAgICAgdGhpcy5maW5GZWNoYSA9IGZpbkZlY2hhO1xyXG4gICAgICAgIHRoaXMucHJpb3JpZGFkID0gcHJpb3JpZGFkO1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLnBvc2ljaW9uID0gcG9zaWNpb247XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGHDsWFkaXJUYXJlYShldmVudG8pIHtcclxuXHJcbiAgICBjb25zdCBlbGVtZW50byA9IGV2ZW50by50YXJnZXRcclxuXHJcbiAgICBpZiAoZWxlbWVudG8uY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tYWNlcHRhcicpKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1hw7FhZGlyLXRhcmVhJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGlucHV0X3RpdHVsbyA9IGZvcm0uZWxlbWVudHNbMF0udmFsdWU7XHJcbiAgICAgICAgbGV0IGRldGFsbGVzID0gZm9ybS5lbGVtZW50c1sxXS52YWx1ZTtcclxuICAgICAgICBsZXQgZmluRmVjaGEgPSBmb3JtLmVsZW1lbnRzWzJdLnZhbHVlO1xyXG4gICAgICAgIGxldCBwcmlvcmlkYWQgPSBmb3JtLmVsZW1lbnRzWzNdLnZhbHVlO1xyXG5cclxuICAgICAgICBpZiAoaW5wdXRfdGl0dWxvICE9PSAnJyAmJiBkZXRhbGxlcyAhPT0gJycgJiYgZmluRmVjaGEgIT09ICcnICYmIHByaW9yaWRhZCAhPT0gJycpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCB0YXJlYSA9IG5ldyBUYXJlYShpbnB1dF90aXR1bG8sIGRldGFsbGVzLCBmaW5GZWNoYSwgcHJpb3JpZGFkLCBlbGVtZW50by5kYXRhc2V0LmlkKVxyXG4gICAgICAgICAgICBsZXQgdGFyZWFzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFyZWFzJykpO1xyXG4gICAgICAgICAgICBpZih0YXJlYXMgPT0gbnVsbCkgdGFyZWFzID0gW107XHJcbiAgICAgICAgICAgIHRhcmVhcy5wdXNoKHRhcmVhKTtcclxuICAgICAgICAgICAgbGV0IHVsdGltb0VsZW0gPSB0YXJlYXMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgdGFyZWEucG9zaWNpb24gPSB1bHRpbW9FbGVtO1xyXG5cclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RhcmVhcycsIEpTT04uc3RyaW5naWZ5KHRhcmVhcykpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgYWxlcnQoJ0hheSBjYW1wb3MgdmFjaW9zJyk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlzdGFyVGFyZWFzKGV2ZW50bykge1xyXG4gICAgXHJcbiAgICBjb25zdCBlbGVtZW50byA9IGV2ZW50by50YXJnZXQ7XHJcbiAgICBsZXQgdGFyZWFzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFyZWFzJykpO1xyXG4gICAgaWYodGFyZWFzID09IG51bGwpIHRhcmVhcyA9IFtdO1xyXG4gICAgbGV0IGNvbnRlbmlkbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW5lZG9yLXRhcmVhcycpO1xyXG5cclxuICAgIGlmIChlbGVtZW50by5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb3llY3RvJykgfHxcclxuICAgICBlbGVtZW50by5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi1hY2VwdGFyJykgfHxcclxuICAgICAgZWxlbWVudG8uY2xhc3NMaXN0LmNvbnRhaW5zKCdib3JyYXItdGFyZWEnKSB8fFxyXG4gICAgICAgZWxlbWVudG8uY2xhc3NMaXN0LmNvbnRhaW5zKCd0b3RhbC10YXJlYXMnKSB8fFxyXG4gICAgICAgIGVsZW1lbnRvLmNsYXNzTGlzdC5jb250YWlucygnYnRuLWFjZXB0YXItZWRpdGFyJykpIHtcclxuXHJcbiAgICAgICAgdGFyZWFzLmZvckVhY2godGFyZWEgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHRhcmVhLmlkID09PSBjb250ZW5pZG8uZGF0YXNldC5pZCB8fFxyXG4gICAgICAgICAgICAgICAgIGVsZW1lbnRvLmNsYXNzTGlzdC5jb250YWlucygndG90YWwtdGFyZWFzJykgfHxcclxuICAgICAgICAgICAgICAgICAgZWxlbWVudG8uZGF0YXNldC5pZCA9PT0gJ3RhcmVhcycpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZWEgIT09ICcnKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXZfdGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYm9ycmFyX3RhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVkaXRhcl90YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0aXR1bG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGV0YWxsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmVjaGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJpb3JpZGFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRpdHVsby5jbGFzc05hbWUgPSAndGl0dWxvLXRhcmVhcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgZGV0YWxsZXMuY2xhc3NOYW1lID0gJ2RldGFsbGVzLXRhcmVhcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgZmVjaGEuY2xhc3NOYW1lID0gJ2ZlY2hhLXRhcmVhcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2X3RhcmVhLmNsYXNzTmFtZSA9ICd0YXJlYXMnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcnJhcl90YXJlYS5jbGFzc05hbWUgPSAnYm9ycmFyLXRhcmVhJztcclxuICAgICAgICAgICAgICAgICAgICBlZGl0YXJfdGFyZWEuY2xhc3NOYW1lID0gJ2VkaXRhci10YXJlYSc7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpZGFkLmNsYXNzTmFtZSA9ICdwcmlvcmlkYWQtdGFyZWFzJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmVhLnByaW9yaWRhZCA9PT0gJ0JhamEnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaWRhZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzE2YTM0YSdcclxuICAgICAgICAgICAgICAgICAgICB9IGlmICh0YXJlYS5wcmlvcmlkYWQgPT09ICdNZWRpYScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpZGFkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmNkMzRkJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0gaWYgKHRhcmVhLnByaW9yaWRhZCA9PT0gJ0FsdGEnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaWRhZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2I5MWMxYydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRpdHVsby50ZXh0Q29udGVudCA9IHRhcmVhLnRpdHVsbztcclxuICAgICAgICAgICAgICAgICAgICBkZXRhbGxlcy50ZXh0Q29udGVudCA9IHRhcmVhLmRldGFsbGVzO1xyXG4gICAgICAgICAgICAgICAgICAgIGZlY2hhLnRleHRDb250ZW50ID0gdGFyZWEuZmluRmVjaGE7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2X3RhcmVhLmRhdGFzZXQucG9zaWNpb24gPSB0YXJlYS5wb3NpY2lvbjtcclxuICAgICAgICAgICAgICAgICAgICBib3JyYXJfdGFyZWEuZGF0YXNldC5wb3NpY2lvbiA9IHRhcmVhLnBvc2ljaW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRhcl90YXJlYS5kYXRhc2V0LnBvc2ljaW9uID0gdGFyZWEucG9zaWNpb247XHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdGFyX3RhcmVhLmRhdGFzZXQuaWQgPSB0YXJlYS5pZDtcclxuICAgICAgICAgICAgICAgICAgICB0aXR1bG8uZGF0YXNldC5wb3NpY2lvbiA9IHRhcmVhLnBvc2ljaW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIGRldGFsbGVzLmRhdGFzZXQucG9zaWNpb24gPSB0YXJlYS5wb3NpY2lvbjtcclxuICAgICAgICAgICAgICAgICAgICBmZWNoYS5kYXRhc2V0LnBvc2ljaW9uID0gdGFyZWEucG9zaWNpb247XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpZGFkLmRhdGFzZXQucG9zaWNpb24gPSB0YXJlYS5wb3NpY2lvbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRvLmNsYXNzTGlzdC5jb250YWlucygndG90YWwtdGFyZWFzJykgfHwgZWxlbWVudG8uZGF0YXNldC5pZCA9PT0gJ3RhcmVhcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9ycmFyX3RhcmVhLmRhdGFzZXQuaWQgPSAndGFyZWFzJztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JyYXJfdGFyZWEuZGF0YXNldC5pZCA9IHRhcmVhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGl2X3RhcmVhLmFwcGVuZENoaWxkKHRpdHVsbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2X3RhcmVhLmFwcGVuZENoaWxkKGRldGFsbGVzKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXZfdGFyZWEuYXBwZW5kQ2hpbGQoZmVjaGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdl90YXJlYS5hcHBlbmRDaGlsZChwcmlvcmlkYWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdl90YXJlYS5hcHBlbmRDaGlsZChib3JyYXJfdGFyZWEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdl90YXJlYS5hcHBlbmRDaGlsZChlZGl0YXJfdGFyZWEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbmlkby5hcHBlbmRDaGlsZChkaXZfdGFyZWEpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYm9ycmFyVGFyZWEoZXZlbnRvKSB7XHJcblxyXG4gICAgbGV0IGVsZW1lbnRvID0gZXZlbnRvLnRhcmdldFxyXG4gICAgXHJcbiAgICBpZiAoZWxlbWVudG8uY2xhc3NMaXN0LmNvbnRhaW5zKCdib3JyYXItdGFyZWEnKSkge1xyXG5cclxuICAgICAgICBsZXQgdGFyZWFzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFyZWFzJykpO1xyXG4gICAgICAgIGlmKHRhcmVhcyA9PSBudWxsKSB0YXJlYXMgPSBbXTtcclxuICAgICAgICBsZXQgcG9zaWNpb24gPSBlbGVtZW50by5kYXRhc2V0LnBvc2ljaW9uO1xyXG4gICAgICAgIHRhcmVhc1twb3NpY2lvbl0gPSAnJztcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RhcmVhcycsIEpTT04uc3RyaW5naWZ5KHRhcmVhcykpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlZGl0YXJUYXJlYShldmVudG8pIHtcclxuXHJcbiAgICBsZXQgZWxlbWVudG8gPSBldmVudG8udGFyZ2V0O1xyXG4gICAgbGV0IHBvc2ljaW9uID0gZWxlbWVudG8uZGF0YXNldC5wb3NpY2lvbjtcclxuXHJcbiAgICBpZiAoZWxlbWVudG8uY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0YXItdGFyZWEnKSkge1xyXG5cclxuICAgICAgICBsZXQgdGFyZWFzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFyZWFzJykpO1xyXG4gICAgICAgIGlmKHRhcmVhcyA9PSBudWxsKSB0YXJlYXMgPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IHBvc2ljaW9uMSA9IHBvc2ljaW9uO1xyXG4gICAgICAgIGxldCB0aXR1bG8gPSB0YXJlYXNbcG9zaWNpb25dLnRpdHVsbztcclxuICAgICAgICBsZXQgZGV0YWxsZXMgPSB0YXJlYXNbcG9zaWNpb25dLmRldGFsbGVzO1xyXG4gICAgICAgIGxldCBmaW5fZmVjaGEgPSB0YXJlYXNbcG9zaWNpb25dLmZpbkZlY2hhO1xyXG4gICAgICAgIGxldCBwcmlvcmlkYWQxID0gdGFyZWFzW3Bvc2ljaW9uXS5wcmlvcmlkYWQ7XHJcbiAgICAgICAgbGV0IGlkID0gdGFyZWFzW3Bvc2ljaW9uXS5pZDtcclxuXHJcbiAgICAgICAgZ2VuZXJhckZvcm1FZGl0YXIocG9zaWNpb24xLCBpZCwgdGl0dWxvLCBkZXRhbGxlcywgZmluX2ZlY2hhLCBwcmlvcmlkYWQxKTtcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RhcmVhcycsIEpTT04uc3RyaW5naWZ5KHRhcmVhcykpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYW1iaWFyVGFyZWFBcnJheShldmVudG8pIHtcclxuICAgIFxyXG4gICAgbGV0IGVsZW1lbnRvID0gZXZlbnRvLnRhcmdldFxyXG5cclxuICAgIGlmIChlbGVtZW50by5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi1hY2VwdGFyLWVkaXRhcicpKSB7XHJcblxyXG4gICAgICAgIGxldCB0YXJlYXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXJlYXMnKSk7XHJcbiAgICAgICAgaWYodGFyZWFzID09IG51bGwpIHRhcmVhcyA9IFtdO1xyXG4gICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tZWRpdGFyLXRhcmVhJyk7XHJcbiAgICAgICAgbGV0IHBvc2ljaW9uID0gZWxlbWVudG8uZGF0YXNldC5wb3NpY2lvbjtcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGlmIChmb3JtLmVsZW1lbnRzWzBdLnZhbHVlICE9PSAnJyAmJiBmb3JtLmVsZW1lbnRzWzFdLnZhbHVlICE9PSAnJyAmJiBmb3JtLmVsZW1lbnRzWzJdLnZhbHVlICE9PSAnJyAmJiBmb3JtLmVsZW1lbnRzWzNdLnZhbHVlICE9PSAnJykge1xyXG5cclxuICAgICAgICAgICAgdGFyZWFzW3Bvc2ljaW9uXS50aXR1bG8gPSBmb3JtLmVsZW1lbnRzWzBdLnZhbHVlO1xyXG4gICAgICAgICAgICB0YXJlYXNbcG9zaWNpb25dLmRldGFsbGVzID0gZm9ybS5lbGVtZW50c1sxXS52YWx1ZTtcclxuICAgICAgICAgICAgdGFyZWFzW3Bvc2ljaW9uXS5maW5GZWNoYSA9IGZvcm0uZWxlbWVudHNbMl0udmFsdWU7XHJcbiAgICAgICAgICAgIHRhcmVhc1twb3NpY2lvbl0ucHJpb3JpZGFkID0gZm9ybS5lbGVtZW50c1szXS52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXJlYXMnLCBKU09OLnN0cmluZ2lmeSh0YXJlYXMpKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGFsZXJ0KCdIYXkgY2FtcG9zIHZhY2lvcycpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhckZvcm1FZGl0YXIocG9zaWNpb24sIGlkLCB0aXR1bG8sIGRldGFsbGVzLCBmaW5fZmVjaGEsIHByaW9yaWRhZDEpIHtcclxuXHJcbiAgICBsZXQgY29udGVuZWRvcl90YXJlYXNfdG90YWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltkYXRhLWlkPSd0YXJlYXMnXWApO1xyXG4gICAgY29uc3QgdGFyZWFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgZGl2W2RhdGEtcG9zaWNpb249JyR7cG9zaWNpb259J2ApO1xyXG4gICAgY29uc3QgZGl2X2NvbnRlbmVkb3IgPSB0YXJlYXNbMF1cclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBjb25zdCBsYWJlbF90aXR1bG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgY29uc3QgbGFiZWxfZGV0YWxsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgY29uc3QgbGFiZWxfZmVjaGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgY29uc3QgaW5wdXRfdGl0dWxvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGNvbnN0IGlucHV0X2RldGFsbGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgIGNvbnN0IGZlY2hhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGNvbnN0IGJ0bl9hY2VwdGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb25zdCBidG5fY2FuY2VsYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbnN0IGJvdG9uZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHByaW9yaWRhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG5cclxuICAgIGNyZWFyUHJpb3JpZGFkZXMocHJpb3JpZGFkKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRhcmVhcy5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICB0YXJlYXNbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGxhYmVsX3RpdHVsby50ZXh0Q29udGVudCA9ICdUaXR1bG86JztcclxuICAgIGxhYmVsX2RldGFsbGVzLnRleHRDb250ZW50ID0gJ0RldGFsbGVzOic7XHJcbiAgICBsYWJlbF9mZWNoYS50ZXh0Q29udGVudCA9ICdGZWNoYTonO1xyXG4gICAgYnRuX2FjZXB0YXIudGV4dENvbnRlbnQgPSAnQWNlcHRhcic7XHJcbiAgICBidG5fY2FuY2VsYXIudGV4dENvbnRlbnQgPSAnQ2FuY2VsYXInO1xyXG5cclxuICAgIGlucHV0X3RpdHVsby52YWx1ZSA9IHRpdHVsbztcclxuICAgIGlucHV0X2RldGFsbGVzLnZhbHVlID0gZGV0YWxsZXM7XHJcbiAgICBmZWNoYS52YWx1ZSA9IGZpbl9mZWNoYTtcclxuICAgIHByaW9yaWRhZC52YWx1ZSA9IHByaW9yaWRhZDE7XHJcblxyXG4gICAgZGl2X2NvbnRlbmVkb3IuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsX3RpdHVsbyk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0X3RpdHVsbyk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsX2RldGFsbGVzKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRfZGV0YWxsZXMpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbF9mZWNoYSk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZlY2hhKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpZGFkKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYm90b25lcyk7XHJcbiAgICBib3RvbmVzLmFwcGVuZENoaWxkKGJ0bl9hY2VwdGFyKTtcclxuICAgIGJvdG9uZXMuYXBwZW5kQ2hpbGQoYnRuX2NhbmNlbGFyKTtcclxuXHJcbiAgICBmb3JtLmNsYXNzTmFtZSA9ICdmb3JtLWVkaXRhci10YXJlYSc7XHJcbiAgICBidG5fYWNlcHRhci5jbGFzc05hbWUgPSAnYnRuLWFjZXB0YXItZWRpdGFyJztcclxuICAgIGJ0bl9jYW5jZWxhci5jbGFzc05hbWUgPSAnYnRuLWNhbmNlbGFyLWVkaXRhcic7XHJcbiAgICBidG5fYWNlcHRhci5kYXRhc2V0LnBvc2ljaW9uID0gcG9zaWNpb247XHJcblxyXG4gICAgZm9ybS5kYXRhc2V0LnBvc2ljaW9uID0gcG9zaWNpb247XHJcbiAgICBmb3JtLmRhdGFzZXQuaWQgPSBpZDtcclxuICAgIFxyXG4gICAgaWYgKGNvbnRlbmVkb3JfdGFyZWFzX3RvdGFsZXMpIHtcclxuICAgICAgICBidG5fYWNlcHRhci5kYXRhc2V0LmlkID0gJ3RhcmVhcyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJ0bl9hY2VwdGFyLmRhdGFzZXQuaWQgPSBpZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW5wdXRfdGl0dWxvLmlkID0gJ3RpdHVsby10YXJlYSc7XHJcbiAgICBidG5fY2FuY2VsYXIuZGF0YXNldC5wb3NpY2lvbiA9IHBvc2ljaW9uO1xyXG4gICAgbGFiZWxfdGl0dWxvLmh0bWxGb3IgPSBpbnB1dF90aXR1bG8uaWQ7XHJcbiAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBmb3JtLmFjdGlvbiA9ICdwb3N0J1xyXG4gICAgaW5wdXRfdGl0dWxvLm5hbWUgPSAndGl0dWxvLXRhcmVhJztcclxuICAgIGlucHV0X3RpdHVsby50eXBlID0gJ3RleHQnO1xyXG4gICAgZmVjaGEudHlwZSA9ICdkYXRlJztcclxuXHJcbiAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgZGl2X2NvbnRlbmVkb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBkaXZfY29udGVuZWRvci5zdHlsZS5oZWlnaHQgPSAnZml0LWNvbnRlbnQnO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vc3RyYXJGb3JtVGFyZWFzKGV2ZW50bykge1xyXG4gICAgXHJcbiAgICBldmVudG8ucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBlbGVtZW50byA9IGV2ZW50by50YXJnZXRcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1hw7FhZGlyLXRhcmVhJyk7XHJcblxyXG4gICAgaWYgKGVsZW1lbnRvLmNsYXNzTGlzdC5jb250YWlucygnYnRuLWHDsWFkaXItdGFyZWEnKSkge1xyXG4gICAgICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb2N1bHRhckZvcm1UYXJlYXMoZXZlbnRvKSB7XHJcbiAgICBcclxuICAgIGV2ZW50by5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGVsZW1lbnRvID0gZXZlbnRvLnRhcmdldFxyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWHDsWFkaXItdGFyZWEnKTtcclxuICAgIFxyXG4gICAgaWYgKGVsZW1lbnRvLmNsYXNzTGlzdC5jb250YWlucygnYnRuLWNhbmNlbGFyJykpIHtcclxuICAgICAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb2N1bHRhckZvcm1FZGl0YXJUYXJlYXMoZXZlbnRvKSB7XHJcblxyXG4gICAgZXZlbnRvLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgZWxlbWVudG8gPSBldmVudG8udGFyZ2V0XHJcbiAgICBsZXQgcG9zaWNpb24gPSBlbGVtZW50by5kYXRhc2V0LnBvc2ljaW9uO1xyXG5cclxuICAgIGlmIChlbGVtZW50by5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb3llY3RvJykpIHtcclxuXHJcbiAgICAgICAgbGV0IGFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJyYXknKSk7XHJcbiAgICAgICAgaWYoYXJyYXkgPT0gbnVsbCkgYXJyYXkgPSBbXTsgICAgICAgIFxyXG5cclxuICAgICAgICBhcnJheSA9IFtdO1xyXG5cclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FycmF5JywgSlNPTi5zdHJpbmdpZnkoYXJyYXkpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZWxlbWVudG8uY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tY2FuY2VsYXItZWRpdGFyJykpIHtcclxuXHJcbiAgICAgICAgY29uc3QgdGFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBkaXZbZGF0YS1wb3NpY2lvbj0nJHtwb3NpY2lvbn0nXWApO1xyXG4gICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZm9ybVtkYXRhLXBvc2ljaW9uPScke3Bvc2ljaW9ufSddYCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGFyZWEuZm9yRWFjaChkaXYgPT4ge1xyXG4gICAgICAgICAgICBkaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGl2LmNsYXNzTGlzdC5jb250YWlucygnZmVjaGEtdGFyZWFzJykpIHtcclxuICAgICAgICAgICAgICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGFyZWFbMF0uc3R5bGUuZGlzcGxheSA9ICdncmlkJztcclxuICAgICAgICBmb3JtLnJlbW92ZSgpO1xyXG5cclxuICAgIH0gaWYgKGVsZW1lbnRvLmNsYXNzTGlzdC5jb250YWlucygnZWRpdGFyLXRhcmVhJykpIHtcclxuXHJcbiAgICAgICAgbGV0IGFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJyYXknKSk7XHJcbiAgICAgICAgaWYoYXJyYXkgPT0gbnVsbCkgYXJyYXkgPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBmb3JtW2RhdGEtcG9zaWNpb249JyR7cG9zaWNpb259J11gKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGFycmF5LnB1c2goZm9ybS5kYXRhc2V0LnBvc2ljaW9uKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChhcnJheVswXSA9PT0gYXJyYXlbMV0pIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZm9ybVtkYXRhLXBvc2ljaW9uPScke2FycmF5WzBdfSddYClcclxuICAgICAgICAgICAgaWYgKGZvcm0pIHtcclxuICAgICAgICAgICAgICAgIGZvcm0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBkaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgZGl2W2RhdGEtcG9zaWNpb249JyR7YXJyYXlbMF19J11gKVxyXG4gICAgICAgICAgICBkaXZzLmZvckVhY2goZWxlbWVudG8gPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50by5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50by5jbGFzc0xpc3QuY29udGFpbnMoJ2ZlY2hhLXRhcmVhcycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudG8uc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGRpdnNbMF0uc3R5bGUuZGlzcGxheSA9ICdncmlkJztcclxuICAgICAgICAgICAgYXJyYXkgPSBbXVxyXG5cclxuICAgICAgICB9IGlmIChhcnJheS5sZW5ndGggPiAxKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGZvcm1bZGF0YS1wb3NpY2lvbj0nJHthcnJheVswXX0nXWApXHJcbiAgICAgICAgICAgIGlmIChmb3JtKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBkaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgZGl2W2RhdGEtcG9zaWNpb249JyR7YXJyYXlbMF19J11gKVxyXG5cclxuICAgICAgICAgICAgYXJyYXkuc3BsaWNlKDAsIDEpO1xyXG5cclxuICAgICAgICAgICAgZGl2cy5mb3JFYWNoKGVsZW1lbnRvID0+IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudG8uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudG8uY2xhc3NMaXN0LmNvbnRhaW5zKCdmZWNoYS10YXJlYXMnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRvLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZGl2c1swXS5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcnJheScsIEpTT04uc3RyaW5naWZ5KGFycmF5KSk7XHJcblxyXG4gICAgfSBcclxuXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7YcOxYWRpclByb3llY3RvLCBhw7FhZGlyUHJveWVjdG9FbnRvcm5vLCBwb2JsYXJVbH0gZnJvbSAnLi9hw7FhZGlyX3Byb3llY3RvLmpzJztcclxuaW1wb3J0IHsgYcOxYWRpclRhcmVhLCBsaXN0YXJUYXJlYXMsIG1vc3RyYXJGb3JtVGFyZWFzLCBvY3VsdGFyRm9ybVRhcmVhcywgYm9ycmFyVGFyZWEsIGVkaXRhclRhcmVhLCBjYW1iaWFyVGFyZWFBcnJheSwgb2N1bHRhckZvcm1FZGl0YXJUYXJlYXMgfSBmcm9tICcuL3RhcmVhcyc7XHJcblxyXG5wb2JsYXJVbCgpO1xyXG5cclxuY29uc3QgYnRuX2HDsWFkaXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWHDsWFkaXJQJyk7XHJcbmNvbnN0IGJ0bl9hY2VwdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1hY2VwdGFyMScpO1xyXG5jb25zdCBidG5fY2FuY2VsYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWNhbmNlbGFyMScpO1xyXG5jb25zdCBmb3JtX3Byb3llY3RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcHJveWVjdG8nKTtcclxuXHJcbmJ0bl9hw7FhZGlyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBmb3JtX3Byb3llY3RvLmhpZGRlbiA9IGZhbHNlOyAgYnRuX2HDsWFkaXIuaGlkZGVuID0gdHJ1ZTsgfSk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGHDsWFkaXJUYXJlYSk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJvcnJhclRhcmVhKTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdGFyVGFyZWEpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYW1iaWFyVGFyZWFBcnJheSk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGHDsWFkaXJQcm95ZWN0b0VudG9ybm8pO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0YXJUYXJlYXMpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtb3N0cmFyRm9ybVRhcmVhcyk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9jdWx0YXJGb3JtVGFyZWFzKTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb2N1bHRhckZvcm1FZGl0YXJUYXJlYXMpO1xyXG5cclxuYnRuX2NhbmNlbGFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkgeyBcclxuICAgIGUucHJldmVudERlZmF1bHQoKTsgXHJcbiAgICBmb3JtX3Byb3llY3RvLmhpZGRlbiA9IHRydWU7XHJcbiAgICBidG5fYcOxYWRpci5oaWRkZW4gPSBmYWxzZTtcclxuICAgIGZvcm1fcHJveWVjdG8uZWxlbWVudHNbMF0udmFsdWUgPSAnJztcclxufSk7XHJcblxyXG5idG5fYWNlcHRhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHsgXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IFxyXG4gICAgYcOxYWRpclByb3llY3RvKCk7XHJcbiAgICBmb3JtX3Byb3llY3RvLmhpZGRlbiA9IHRydWU7XHJcbiAgICBidG5fYcOxYWRpci5oaWRkZW4gPSBmYWxzZTtcclxuICAgIGZvcm1fcHJveWVjdG8uZWxlbWVudHNbMF0udmFsdWUgPSAnJztcclxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9