exports.ids = [11];
exports.modules = {

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(319);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("110a9531", content, true, context)
};

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_uitest_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(291);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_uitest_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_uitest_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_uitest_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_uitest_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(320);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(321);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "div{box-sizing:border-box}p{font-size:large}.main-background{height:40%;background:linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:cover;background-repeat:no-repeat;background-position:50%}.main-title{font-size:4rem;padding-top:3rem}.main-content,.main-title{text-align:center;color:#fff}.main-content{font-size:2rem;padding:3 rem 4rem}.container{display:flex;width:45%;margin-top:2%;flex-direction:column;flex-grow:1}.item1{border-bottom:10px solid #23bbb1}.item1,.item2{margin-top:2rem}.item2{border-bottom:10px solid #512fdb}.item3{border-bottom:10px solid #013183}.item3,.item4{margin-top:2rem}.item4{border-bottom:10px solid #2172ff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/back_img.2881aad.jpg";

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/uitest.vue?vue&type=template&id=48ddda50&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"main-background\"><h4 class=\"main-title\">DMT LABS TEST PAGE</h4> <p class=\"main-content\"> DMT Labs is new-type IT-based language service supplier as well as a language translation service provider located in Seoul, South Korea.\n            </p></div> <div class=\"container\"><div class=\"item1\"><h1>Technology</h1> <br> <p>???????????? ????????? ????????? ??? ????????? ???????????? ????????????. <br>????????? ????????? ?????? 2??? ?????? ???????????? ?????? ???, ????????? ?????????, ?????? ??? ?????? ????????? ???????????? ????????????.</p></div> <div class=\"item2\"><h1>Direction</h1> <br> <p>????????? ????????? OTT??? ??????????????? ?????? ?????? ????????? ?????? ????????? ???????????? ?????? ???????????? ???????????? ????????????.<br>????????? ?????? ,OTT??? ?????? ?????? ??? ????????? ????????? ?????? ????????? ???????????????.</p> <div class=\"line2\"></div></div> <div class=\"item3\"><h1>Performance</h1> <br> <p>????????? ????????? ?????? ?????? ????????? ????????? ?????????, ????????? ????????? ????????? ?????? ??????????????? ??????,<br>?????? ????????? ????????? ?????? ???????????? ?????? ????????? ???????????? ????????????.</p> <div class=\"line3\"></div></div> <div class=\"item4\"><h1>Service</h1> <br> <p>??????, OTT ??? ????????? ??? ?????? ????????? ???????????? ?????? ????????? ??? ??????????????????.<br>?????? ????????? ????????? ?????? ?????? ????????? ?????? ??????????????? ?????????.<br>??? ?????? ????????? ??????, ?????? ?????? ?????? ????????? ?????? ???????????? ???????????????.</p> <div class=\"line4\"></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/uitest.vue?vue&type=template&id=48ddda50&

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/uitest.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var uitestvue_type_script_lang_js_ = ({
  layout: 'TestLayout',

  data() {
    return {};
  },

  methods: {},
  components: {}
});
// CONCATENATED MODULE: ./pages/uitest.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_uitestvue_type_script_lang_js_ = (uitestvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/uitest.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(318)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_uitestvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5bbd6f00"
  
)

/* harmony default export */ var uitest = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=uitest.js.map