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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/imgs/logo.png":
/*!**********************************!*\
  !*** ./src/assets/imgs/logo.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"imgs/logo.png\";\n\n//# sourceURL=webpack:///./src/assets/imgs/logo.png?");

/***/ }),

/***/ "./src/assets/index.js":
/*!*****************************!*\
  !*** ./src/assets/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_navegacao_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/navegacao.js */ \"./src/assets/js/navegacao.js\");\n/* harmony import */ var _js_navegacao_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_navegacao_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sass/index.scss */ \"./src/assets/sass/index.scss\");\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack:///./src/assets/index.js?");

/***/ }),

/***/ "./src/assets/js/navegacao.js":
/*!************************************!*\
  !*** ./src/assets/js/navegacao.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n  function marcarLinkComoSelecionado(hash) {\n    var links = document.querySelectorAll(\"[wm-link]\");\n    links.forEach(function (link) {\n      return link.classList.remove('selecionado');\n    });\n    var link = document.querySelector(\"[wm-link='\".concat(hash, \"']\"));\n    link.classList.add('selecionado');\n  }\n\n  function navegarViaAjax(hash) {\n    if (!hash) return;\n    var link = document.querySelector(\"[wm-link='\".concat(hash, \"']\"));\n    var destino = document.querySelector('[wm-link-destino]');\n    var url = hash.substring(1);\n    console.log('url(1)', url);\n    fetch(url).then(function (resp) {\n      return resp.text();\n    }).then(function (html) {\n      destino.innerHTML = html;\n      marcarLinkComoSelecionado(hash);\n    });\n  }\n\n  function configurarLinks() {\n    document.querySelectorAll('[wm-link]').forEach(function (link) {\n      link.href = link.attributes['wm-link'].value;\n    });\n  }\n\n  function navegacaoInicial() {\n    console.log('hash', location.hash);\n\n    if (location.hash) {\n      console.log('tem hash');\n      navegarViaAjax(location.hash);\n    } else {\n      console.log('n tem hash');\n      var primeiroLink = document.querySelector('[wm-link]');\n      navegarViaAjax(primeiroLink.hash);\n    }\n  }\n\n  window.onhashchange = function (e) {\n    navegarViaAjax(location.hash);\n    console.log('hash mudou');\n  };\n\n  configurarLinks();\n  navegacaoInicial();\n})();\n\n//# sourceURL=webpack:///./src/assets/js/navegacao.js?");

/***/ }),

/***/ "./src/assets/sass/index.scss":
/*!************************************!*\
  !*** ./src/assets/sass/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/sass/index.scss?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<!DOCTYPE html>\\r\\n<html>\\r\\n\\r\\n<head>\\r\\n    <meta charset=\\\"UTF-8\\\">\\r\\n    <title>Ajax</title>\\r\\n    <link href=\\\"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700\\\" rel=\\\"stylesheet\\\">\\r\\n    <!-- <link rel=\\\"stylesheet\\\" href=\\\"../node_modules/font-awesome/css/font-awesome.min.css\\\"> -->\\r\\n    <!-- <link rel=\\\"stylesheet\\\" href=\\\"./style.css\\\"> -->\\r\\n</head>\\r\\n\\r\\n<body>\\r\\n    <aside class=\\\"logo\\\">\\r\\n        <a href=\\\"#/paginas/inicio.html\\\" class=\\\"logo\\\">\\r\\n            <img src=\\\"/imgs/logo.png\\\" alt=\\\"logo\\\">\\r\\n        </a>\\r\\n    </aside>\\r\\n    <header class=\\\"cabecalho\\\">\\r\\n        <input type=\\\"text\\\" placeholder=\\\"Pesquisar...\\\">\\r\\n        <button class=\\\"btn bg-blue white\\\">Entrar</button>\\r\\n        <button class=\\\"btn bg-red white\\\">REGISTRAR</button>\\r\\n    </header>\\r\\n    <aside class=\\\"menu-area\\\">\\r\\n        <nav class=\\\"menu\\\">\\r\\n            <a wm-link=\\\"#/paginas/inicio.html\\\">\\r\\n                <i class=\\\"fa fa-home\\\"></i> Início\\r\\n            </a>\\r\\n            <a wm-link=\\\"#/paginas/cursos.html\\\">\\r\\n                <i class=\\\"fa fa-bars\\\"></i> Cursos\\r\\n            </a>\\r\\n            <a wm-link=\\\"#/paginas/suporte.html\\\">\\r\\n                <i class=\\\"fa fa-life-ring\\\"></i> Suporte\\r\\n            </a>\\r\\n            <a wm-link=\\\"#/paginas/sobre.html\\\">\\r\\n                <i class=\\\"fa fa-info-circle\\\"></i> Sobre\\r\\n            </a>\\r\\n        </nav>\\r\\n    </aside>\\r\\n    <main class=\\\"conteudo\\\" wm-link-destino></main>\\r\\n    <footer class=\\\"rodape\\\">\\r\\n        <span>\\r\\n            Desenvolvido com\\r\\n            <i class=\\\"fa fa-heart red\\\"></i>\\r\\n            por\\r\\n            <strong>Cod<span class=\\\"red\\\">3</span>r</strong>\\r\\n        </span>\\r\\n    </footer>\\r\\n    <!-- <script src=\\\"assets/js/navegacao.js\\\"></script> -->\\r\\n</body>\\r\\n\\r\\n</html>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./src/index.html?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets */ \"./src/assets/index.js\");\n/* harmony import */ var _paginas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paginas */ \"./src/paginas/index.js\");\n/* harmony import */ var _assets_imgs_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/imgs/logo.png */ \"./src/assets/imgs/logo.png\");\n/* harmony import */ var _assets_imgs_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_logo_png__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n // import '../node_modules/font-awesome/css/font-awesome.min.css';\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/paginas/cursos.html":
/*!*********************************!*\
  !*** ./src/paginas/cursos.html ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<h1 class=\\\"titulo\\\">\\r\\n    <i class=\\\"fa fa-bars\\\"></i> Cursos\\r\\n</h1>\\r\\n<div class=\\\"linha\\\">\\r\\n    <div class=\\\"xs-12 lg-4\\\">\\r\\n        <div class=\\\"painel gd-laranja white\\\">\\r\\n            <h2>Curso 1</h2>\\r\\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\\r\\n                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\\r\\n                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>\\r\\n        </div>\\r\\n    </div>\\r\\n    <div class=\\\"xs-12 lg-4\\\">\\r\\n        <div class=\\\"painel gd-verde-azul white\\\">\\r\\n            <h2>Curso 2</h2>\\r\\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\\r\\n                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\\r\\n                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>\\r\\n        </div>\\r\\n    </div>\\r\\n    <div class=\\\"xs-12 lg-4\\\">\\r\\n        <div class=\\\"painel gd-cinza white\\\">\\r\\n            <h2>Curso 3</h2>\\r\\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\\r\\n                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\\r\\n                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>\\r\\n        </div>\\r\\n    </div>\\r\\n</div>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./src/paginas/cursos.html?");

/***/ }),

/***/ "./src/paginas/index.js":
/*!******************************!*\
  !*** ./src/paginas/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cursos_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cursos.html */ \"./src/paginas/cursos.html\");\n/* harmony import */ var _cursos_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cursos_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _inicio_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio.html */ \"./src/paginas/inicio.html\");\n/* harmony import */ var _inicio_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inicio_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sobre_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sobre.html */ \"./src/paginas/sobre.html\");\n/* harmony import */ var _sobre_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sobre_html__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _suporte_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./suporte.html */ \"./src/paginas/suporte.html\");\n/* harmony import */ var _suporte_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_suporte_html__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n//# sourceURL=webpack:///./src/paginas/index.js?");

/***/ }),

/***/ "./src/paginas/inicio.html":
/*!*********************************!*\
  !*** ./src/paginas/inicio.html ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<h1 class=\\\"titulo\\\">\\r\\n    <i class=\\\"fa fa-home\\\"></i> Início\\r\\n</h1>\\r\\n<div class=\\\"linha\\\">\\r\\n    <div class=\\\"xs-12 md-6 xl-3\\\">\\r\\n        <div class=\\\"painel gd-verde-azul white\\\">\\r\\n            <h2>Informações Iniciais</h2>\\r\\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\\r\\n                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\\r\\n                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>\\r\\n        </div>\\r\\n    </div>\\r\\n    <div class=\\\"xs-12 md-6 xl-3\\\">\\r\\n        <div class=\\\"painel gd-cinza white\\\">\\r\\n            <h2>Informações Iniciais</h2>\\r\\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\\r\\n                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\\r\\n                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>\\r\\n        </div>\\r\\n    </div>\\r\\n    <div class=\\\"xs-12 md-6 xl-3\\\">\\r\\n        <div class=\\\"painel gd-laranja white\\\">\\r\\n            <h2>Informações Iniciais</h2>\\r\\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\\r\\n                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\\r\\n                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>\\r\\n        </div>\\r\\n    </div>\\r\\n    <div class=\\\"xs-12 md-6 xl-3\\\">\\r\\n        <div class=\\\"painel gd-azul white\\\">\\r\\n            <h2>Informações Iniciais</h2>\\r\\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\\r\\n                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\\r\\n                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>\\r\\n        </div>\\r\\n    </div>\\r\\n</div>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./src/paginas/inicio.html?");

/***/ }),

/***/ "./src/paginas/sobre.html":
/*!********************************!*\
  !*** ./src/paginas/sobre.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<h1 class=\\\"titulo\\\">\\r\\n    <i class=\\\"fa fa-info-circle\\\"></i> Sobre\\r\\n</h1>\\r\\n<div class=\\\"linha\\\">\\r\\n    <div class=\\\"xs-12\\\">\\r\\n        <div class=\\\"painel gd-cinza white\\\">\\r\\n            <h2>Nossa História</h2>\\r\\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\\r\\n                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\\r\\n                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>\\r\\n        </div>\\r\\n    </div>\\r\\n</div>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./src/paginas/sobre.html?");

/***/ }),

/***/ "./src/paginas/suporte.html":
/*!**********************************!*\
  !*** ./src/paginas/suporte.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<h1 class=\\\"titulo\\\">\\r\\n    <i class=\\\"fa fa-life-ring\\\"></i> Suporte\\r\\n</h1>\\r\\n<div class=\\\"linha\\\">\\r\\n    <div class=\\\"xs-12 md-6\\\">\\r\\n        <div class=\\\"painel gd-azul white\\\">\\r\\n            <h2>Precisa de Ajuda?</h2>\\r\\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\\r\\n                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\\r\\n                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>\\r\\n        </div>\\r\\n    </div>\\r\\n    <div class=\\\"xs-12 md-6\\\">\\r\\n        <div class=\\\"painel gd-laranja white\\\">\\r\\n            <h2>Temos a Resposta!</h2>\\r\\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\\r\\n                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\\r\\n                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>\\r\\n        </div>\\r\\n    </div>\\r\\n</div>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./src/paginas/suporte.html?");

/***/ })

/******/ });