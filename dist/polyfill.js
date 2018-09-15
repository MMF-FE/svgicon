(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueSvgIconPolyfill"] = factory();
	else
		root["VueSvgIconPolyfill"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./polyfill/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./polyfill/index.js":
/*!***************************!*\
  !*** ./polyfill/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * svg element InnerHTML polyfill\n * @author Allenice\n * @since 2017-07-15 04:37:27\n */\nvar polyfill = __webpack_require__(/*! ./innersvg-polyfill */ \"./polyfill/innersvg-polyfill.js\"); // check browser is suport SvgElement.innerHTML\n\n\nif (typeof window.document.createElementNS('http://www.w3.org/2000/svg', 'svg').innerHTML !== 'string') {\n  polyfill();\n}\n\n//# sourceURL=webpack://VueSvgIconPolyfill/./polyfill/index.js?");

/***/ }),

/***/ "./polyfill/innersvg-polyfill.js":
/*!***************************************!*\
  !*** ./polyfill/innersvg-polyfill.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * innerHTML property for SVGElement\n * Copyright(c) 2010, Jeff Schiller\n *\n * Licensed under the Apache License, Version 2\n *\n * Works in a SVG document in Chrome 6+, Safari 5+, Firefox 4+ and IE9+.\n * Works in a HTML5 document in Chrome 7+, Firefox 4+ and IE9+.\n * Does not work in Opera since it doesn't support the SVGElement interface yet.\n *\n * I haven't decided on the best name for this property - thus the duplication.\n */\nmodule.exports = function () {\n  var serializeXML = function serializeXML(node, output) {\n    var nodeType = node.nodeType;\n\n    if (nodeType == 3) {\n      // TEXT nodes.\n      // Replace special XML characters with their entities.\n      output.push(node.textContent.replace(/&/, '&amp;').replace(/</, '&lt;').replace('>', '&gt;'));\n    } else if (nodeType == 1) {\n      // ELEMENT nodes.\n      // Serialize Element nodes.\n      output.push('<', node.tagName);\n\n      if (node.hasAttributes()) {\n        var attrMap = node.attributes;\n\n        for (var i = 0, len = attrMap.length; i < len; ++i) {\n          var attrNode = attrMap.item(i);\n          output.push(' ', attrNode.name, \"='\", attrNode.value, \"'\");\n        }\n      }\n\n      if (node.hasChildNodes()) {\n        output.push('>');\n        var childNodes = node.childNodes;\n\n        for (var i = 0, len = childNodes.length; i < len; ++i) {\n          serializeXML(childNodes.item(i), output);\n        }\n\n        output.push('</', node.tagName, '>');\n      } else {\n        output.push('/>');\n      }\n    } else if (nodeType == 8) {\n      // TODO(codedread): Replace special characters with XML entities?\n      output.push('<!--', node.nodeValue, '-->');\n    } else {\n      // TODO: Handle CDATA nodes.\n      // TODO: Handle ENTITY nodes.\n      // TODO: Handle DOCUMENT nodes.\n      throw 'Error serializing XML. Unhandled node of type: ' + nodeType;\n    }\n  }; // The innerHTML DOM property for SVGElement.\n\n\n  Object.defineProperty(SVGElement.prototype, 'innerHTML', {\n    get: function get() {\n      var output = [];\n      var childNode = this.firstChild;\n\n      while (childNode) {\n        serializeXML(childNode, output);\n        childNode = childNode.nextSibling;\n      }\n\n      return output.join('');\n    },\n    set: function set(markupText) {\n      // Wipe out the current contents of the element.\n      while (this.firstChild) {\n        this.removeChild(this.firstChild);\n      }\n\n      try {\n        // Parse the markup into valid nodes.\n        var dXML = new DOMParser();\n        dXML.async = false; // Wrap the markup into a SVG node to ensure parsing works.\n\n        var sXML = \"<svg xmlns='http://www.w3.org/2000/svg'>\" + markupText + '</svg>';\n        var svgDocElement = dXML.parseFromString(sXML, 'text/xml').documentElement; // Now take each node, import it and append to this element.\n\n        var childNode = svgDocElement.firstChild;\n\n        while (childNode) {\n          this.appendChild(this.ownerDocument.importNode(childNode, true));\n          childNode = childNode.nextSibling;\n        }\n      } catch (e) {\n        console.error(e);\n        throw new Error('Error parsing XML string');\n      }\n    }\n  }); // The innerSVG DOM property for SVGElement.\n\n  Object.defineProperty(SVGElement.prototype, 'innerSVG', {\n    get: function get() {\n      return this.innerHTML;\n    },\n    set: function set(markupText) {\n      this.innerHTML = markupText;\n    }\n  });\n};\n\n//# sourceURL=webpack://VueSvgIconPolyfill/./polyfill/innersvg-polyfill.js?");

/***/ })

/******/ });
});