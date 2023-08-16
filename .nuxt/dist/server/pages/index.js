exports.ids = [24,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
exports.modules = Array(24).concat([
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("12f12efc", content, true, context)
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("9e37d68a", content, true, context)
};

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/typetag/index.vue?vue&type=template&id=16792320&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "marketing"
  }, [_c('NuxtLink', {
    staticClass: "nuxt-link",
    attrs: {
      "to": "#"
    }
  }, [_c('div', {
    staticClass: "poster"
  }, [_c('img', {
    attrs: {
      "src": _vm.image,
      "alt": "image"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_c('span', {
    staticClass: "title"
  }, [_vm._v("\n                " + _vm._s(_vm.title) + "\n            ")])])])]), _vm._ssrNode(" <ul class=\"title-post\" data-v-16792320><li data-v-16792320><h2 data-v-16792320><a href=\"#\" target=\"_self\" data-v-16792320>SEO Copywriting: How to Write Content For People and Optimize For Google</a></h2></li> <li data-v-16792320><h2 data-v-16792320><a href target=\"_self\" data-v-16792320>9 Ways to Engage Your Customers With Instagram Highlights</a></h2></li> <li data-v-16792320><h2 data-v-16792320><a href target=\"_self\" data-v-16792320>A Starter Guide to Google Ads Manager Accounts</a></h2></li> <li data-v-16792320><h2 data-v-16792320><a href target=\"_self\" data-v-16792320>25 Marketing Books You Should Be Reading</a></h2></li></ul>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/typetag/index.vue?vue&type=template&id=16792320&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/typetag/index.vue?vue&type=script&lang=js&
/* harmony default export */ var typetagvue_type_script_lang_js_ = ({
  props: {
    image: {
      type: String,
      default: "/fashion1.jpg"
    },
    title: {
      type: String,
      default: "The best smart glasses to buy now, according to experts asdasdasda"
    }
  }
});
// CONCATENATED MODULE: ./components/typetag/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_typetagvue_type_script_lang_js_ = (typetagvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/typetag/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(33)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_typetagvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "16792320",
  "8062aad0"
  
)

/* harmony default export */ var typetag = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/typepost/index.vue?vue&type=template&id=7badf403&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "post"
  }, [_vm._ssrNode("<img" + _vm._ssrAttr("src", _vm.image) + " alt=\"Post Image\" data-v-7badf403> <div class=\"info\" data-v-7badf403><div class=\"post-category\" data-v-7badf403><p data-v-7badf403>" + _vm._ssrEscape(_vm._s(_vm.category)) + "</p></div> <h2 class=\"post-title\" data-v-7badf403>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h2></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/typepost/index.vue?vue&type=template&id=7badf403&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/typepost/index.vue?vue&type=script&lang=js&
/* harmony default export */ var typepostvue_type_script_lang_js_ = ({
  props: {
    image: {
      type: String,
      default: "/fashion1.jpg"
    },
    category: {
      type: String,
      default: "TRAVEL"
    },
    title: {
      type: String,
      default: "The best smart glasses to buy now, according to experts asdasdasda"
    }
  }
});
// CONCATENATED MODULE: ./components/typepost/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_typepostvue_type_script_lang_js_ = (typepostvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/typepost/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(35)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_typepostvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7badf403",
  "7fd8fe3e"
  
)

/* harmony default export */ var typepost = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("57b357d7", content, true, context)
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("379f582f", content, true, context)
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("78197d1e", content, true, context)
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("91aade0c", content, true, context)
};

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/post/PostCatagory.vue?vue&type=template&id=25b317a1&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('NuxtLink', {
    staticClass: "nuxt-link",
    attrs: {
      "to": "#"
    }
  }, [_c('div', {
    staticClass: "poster"
  }, [_c('img', {
    attrs: {
      "src": _vm.image,
      "alt": "image"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_c('p', {
    staticClass: "category"
  }, [_vm._v("\n                " + _vm._s(_vm.category) + "\n            ")]), _vm._v(" "), _c('span', {
    staticClass: "title"
  }, [_vm._v("\n                " + _vm._s(_vm.title) + "\n            ")])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/post/PostCatagory.vue?vue&type=template&id=25b317a1&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/post/PostCatagory.vue?vue&type=script&lang=js&
/* harmony default export */ var PostCatagoryvue_type_script_lang_js_ = ({
  props: {
    image: {
      type: String,
      default: "/fashion1.jpg"
    },
    category: {
      type: String,
      default: "Fashion"
    },
    title: {
      type: String,
      default: "The best smart glasses to buy now, according to experts asdasdasda"
    }
  }
});
// CONCATENATED MODULE: ./components/post/PostCatagory.vue?vue&type=script&lang=js&
 /* harmony default export */ var post_PostCatagoryvue_type_script_lang_js_ = (PostCatagoryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/post/PostCatagory.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(48)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  post_PostCatagoryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "25b317a1",
  "ac13c1d0"
  
)

/* harmony default export */ var PostCatagory = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_16792320_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_16792320_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_16792320_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_16792320_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_16792320_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media (max-width:760px){.poster>img[data-v-16792320]{height:261px;margin-bottom:10px}.title[data-v-16792320]{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;font-size:1em;font-weight:700;margin:0;overflow:hidden;text-overflow:ellipsis}.title-post[data-v-16792320]{color:#000;list-style:none;margin-top:20px;padding-left:0;-webkit-text-decoration:none;text-decoration:none}.title-post>li>h2[data-v-16792320]{margin-bottom:10px;margin-top:10px}.title-post>li>h2>a[data-v-16792320]{color:#000;font-size:medium;font-style:normal;-webkit-text-decoration:none;text-decoration:none}.title-post>li>h2>a[data-v-16792320]:hover{color:#5691cd}.title-post>li>h2[data-v-16792320]{font-weight:medium}.title-post>li[data-v-16792320]{border:none;border-top:1px solid #efecec}.post>img[data-v-16792320]{height:195.788px;width:293.125px}.post-category p[data-v-16792320]{align-self:flex-start;color:#cdc6c6;font-size:.8em;margin-bottom:5px;margin-top:10px;text-transform:uppercase}.post-title[data-v-16792320]{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;font-size:1em;font-weight:700;overflow:hidden;text-overflow:ellipsis}.container[data-v-16792320]{margin:0}}@media (min-width:1200px){.nuxt-link[data-v-16792320]{color:#000;-webkit-text-decoration:none;text-decoration:none}.poster[data-v-16792320]{background-color:#fff;margin-bottom:20px}.poster>img[data-v-16792320]{height:261.33px;margin-bottom:10px;width:392px}.info[data-v-16792320]{display:flex;flex-direction:column;flex-grow:1;margin-left:5px}.title[data-v-16792320]{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;font-size:1em;font-weight:700;margin:0;overflow:hidden;text-overflow:ellipsis}.title-post[data-v-16792320]{color:#000;list-style:none;margin-top:20px;padding-left:0;-webkit-text-decoration:none;text-decoration:none}.title-post>li>h2[data-v-16792320]{margin-bottom:10px;margin-top:10px}.title-post>li>h2>a[data-v-16792320]{color:#000;font-size:medium;font-style:normal;-webkit-text-decoration:none;text-decoration:none}.title-post>li>h2>a[data-v-16792320]:hover{color:#5691cd}.title-post>li>h2[data-v-16792320]{font-weight:medium}.title-post>li[data-v-16792320]{border:none;border-top:1px solid #efecec}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7badf403_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7badf403_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7badf403_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7badf403_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7badf403_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media (max-width:760px){.post>img[data-v-7badf403]{height:190px;width:100%}.post-category p[data-v-7badf403]{align-self:flex-start;color:#cdc6c6;font-size:.8em;margin:10px 20px 5px;text-transform:uppercase}.post-title[data-v-7badf403]{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;font-size:18px;font-weight:700;margin:10px 20px;overflow:hidden;padding-right:10px;text-overflow:ellipsis}}@media (min-width:1200px){.post[data-v-7badf403]{background-color:#abd0e4;height:328.19px;margin-bottom:20px;margin-top:25px}.post>img[data-v-7badf403]{height:190px;width:293px}.post-category p[data-v-7badf403]{align-self:flex-start;color:#cdc6c6;font-size:.8em;margin:10px 20px 5px;text-transform:uppercase}.post-title[data-v-7badf403]{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;font-size:18px;font-weight:700;margin:10px 20px;overflow:hidden;padding-right:10px;text-overflow:ellipsis}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maincontent_vue_vue_type_style_index_0_id_346c91c0_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maincontent_vue_vue_type_style_index_0_id_346c91c0_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maincontent_vue_vue_type_style_index_0_id_346c91c0_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maincontent_vue_vue_type_style_index_0_id_346c91c0_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maincontent_vue_vue_type_style_index_0_id_346c91c0_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media (min-width:1200px){.mainimage{height:300px;width:500px}.main-title{color:#000;font-size:22.48px;font-weight:700}}@media (max-width:760px){.main-content{margin-bottom:40px}.main-title{color:#000;font-size:18px;font-weight:700;margin-top:15px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LastContent_vue_vue_type_style_index_0_id_6d9a506e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LastContent_vue_vue_type_style_index_0_id_6d9a506e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LastContent_vue_vue_type_style_index_0_id_6d9a506e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LastContent_vue_vue_type_style_index_0_id_6d9a506e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LastContent_vue_vue_type_style_index_0_id_6d9a506e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media (min-width:1200px){.post[data-v-6d9a506e]{background-color:#fff;margin-bottom:20px;margin-top:25px}.custom-col[data-v-6d9a506e]{padding-left:0;padding-right:10px}.post img[data-v-6d9a506e]{height:140px;max-width:210px}.post-category p[data-v-6d9a506e]{align-self:flex-start;color:#cdc6c6;font-size:.8em;margin:0 0 5px;text-transform:uppercase}.post-title[data-v-6d9a506e]{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;font-size:1em;font-weight:700;overflow:hidden;padding-right:10px;text-overflow:ellipsis}}@media (max-width:760px){.post[data-v-6d9a506e]{background-color:#fff;margin-bottom:20px;margin-top:25px}.custom-col[data-v-6d9a506e]{padding:0}.post-category p[data-v-6d9a506e]{align-self:flex-start;color:#cdc6c6;font-size:.8em;margin:5px 0;text-transform:uppercase}.post-title[data-v-6d9a506e]{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;font-size:1em;font-weight:700;overflow:hidden;padding-right:10px;text-overflow:ellipsis}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("59c841d4", content, true, context)
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(63);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("323a1c55", content, true, context)
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(65);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("368b4d6f", content, true, context)
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("32a049d8", content, true, context)
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(69);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("b1ca7846", content, true, context)
};

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maincontent_vue_vue_type_style_index_0_id_10a7ef32_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maincontent_vue_vue_type_style_index_0_id_10a7ef32_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maincontent_vue_vue_type_style_index_0_id_10a7ef32_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maincontent_vue_vue_type_style_index_0_id_10a7ef32_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maincontent_vue_vue_type_style_index_0_id_10a7ef32_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".mainimage{height:300px;width:500px}.main-title{color:#000;font-size:24px;font-weight:700}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCatagory_vue_vue_type_style_index_0_id_25b317a1_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCatagory_vue_vue_type_style_index_0_id_25b317a1_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCatagory_vue_vue_type_style_index_0_id_25b317a1_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCatagory_vue_vue_type_style_index_0_id_25b317a1_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCatagory_vue_vue_type_style_index_0_id_25b317a1_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-link[data-v-25b317a1]{color:#000;-webkit-text-decoration:none;text-decoration:none}.poster[data-v-25b317a1]{border-left:none;border-right:none;border-top:1px solid #efecec;display:flex;flex-direction:row;height:127px;padding:10px 0;width:345px}.poster>img[data-v-25b317a1]{align-self:flex-start;height:100px;max-width:150px}.info[data-v-25b317a1]{display:flex;flex-direction:column;flex-grow:1;margin-left:5px}.category[data-v-25b317a1]{align-self:flex-start;color:#cdc6c6;font-size:.8em;margin:0 0 5px;text-transform:uppercase}.title[data-v-25b317a1]{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;font-size:1em;font-weight:700;margin:0;overflow:hidden;text-overflow:ellipsis}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(71);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("11d67db8", content, true, context)
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(73);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("37a557c4", content, true, context)
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(75);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6c80a8c2", content, true, context)
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(77);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1eff872c", content, true, context)
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(79);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("76e4bcea", content, true, context)
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(81);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("793d3929", content, true, context)
};

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/content/Maincontent.vue?vue&type=template&id=346c91c0&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "main-content"
  }, [_vm._ssrNode("<img" + _vm._ssrAttr("src", _vm.post.image) + " alt=\"image content\" class=\"mainimage\"> <h2 class=\"main-title\">" + _vm._ssrEscape(_vm._s(_vm.post.title)) + "</h2>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/content/Maincontent.vue?vue&type=template&id=346c91c0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/content/Maincontent.vue?vue&type=script&lang=js&
/* harmony default export */ var Maincontentvue_type_script_lang_js_ = ({
  data() {
    return {
      post: {
        title: 'TikTok’s latest trending beauty filter returns users to their younger selves',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/girl-768x512.jpg'
      }
    };
  }
});
// CONCATENATED MODULE: ./components/content/Maincontent.vue?vue&type=script&lang=js&
 /* harmony default export */ var content_Maincontentvue_type_script_lang_js_ = (Maincontentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/content/Maincontent.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(37)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  content_Maincontentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "16770dc2"
  
)

/* harmony default export */ var Maincontent = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/content/LastContent.vue?vue&type=template&id=6d9a506e&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container"
  }, [_vm._ssrNode("<div class=\"row\" data-v-6d9a506e>" + _vm._ssrList(_vm.posts, function (post) {
    return "<div class=\"col-md-3 custom-col\" data-v-6d9a506e><div class=\"post\" data-v-6d9a506e><img" + _vm._ssrAttr("src", post.image) + " alt=\"Post Image\" data-v-6d9a506e> <div class=\"info\" data-v-6d9a506e><div class=\"post-category\" data-v-6d9a506e><p data-v-6d9a506e>" + _vm._ssrEscape(_vm._s(post.category)) + "</p></div> <h2 class=\"post-title\" data-v-6d9a506e>" + _vm._ssrEscape(_vm._s(post.title)) + "</h2></div></div></div>";
  }) + "</div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/content/LastContent.vue?vue&type=template&id=6d9a506e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/content/LastContent.vue?vue&type=script&lang=js&
/* harmony default export */ var LastContentvue_type_script_lang_js_ = ({
  data() {
    return {
      posts: [{
        id: 1,
        title: 'The 23 best men’s shorts for the summer, according to style experts',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/man-768x512.jpg',
        category: 'FASHION'
      }, {
        id: 2,
        title: 'Reddit communities go private to protest pricing plan for apps',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/social.jpg',
        category: 'ADVERTISING'
      }, {
        id: 3,
        title: 'Adidas vs. Hoka: We put these favorite running shoes to the test',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/adidas.jpg',
        category: 'FASHION'
      }, {
        id: 4,
        title: 'Georgia man sues Facebook over losing account access and wins',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/facebook.jpg',
        category: 'SOCIAL MEDIA'
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/content/LastContent.vue?vue&type=script&lang=js&
 /* harmony default export */ var content_LastContentvue_type_script_lang_js_ = (LastContentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/content/LastContent.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(39)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  content_LastContentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6d9a506e",
  "7d9ad802"
  
)

/* harmony default export */ var LastContent = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/follow/Follow.vue?vue&type=template&id=3cb756f6&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "follow"
    }
  }, [_vm._ssrNode("<div class=\"follow-us\" data-v-3cb756f6><div class=\"follow\" data-v-3cb756f6><strong data-v-3cb756f6>FOLLOW US</strong></div> <div class=\"contact-channel\" data-v-3cb756f6><div class=\"icon-column col-left\" data-v-3cb756f6><ul class=\"icon\" data-v-3cb756f6><li class=\"item-icon\" style=\"color: #58a8e6; font-size: 20px;\" data-v-3cb756f6><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"25\" fill=\"currentColor\" viewBox=\"0 0 16 16\" class=\"bi bi-twitter\" data-v-3cb756f6><path d=\"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z\" data-v-3cb756f6></path></svg>\n                        Twitter\n                    </li> <li class=\"item-icon\" style=\"color: #135485; font-size: 20px;\" data-v-3cb756f6><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"25\" fill=\"currentColor\" viewBox=\"0 0 16 16\" class=\"bi bi-facebook\" data-v-3cb756f6><path d=\"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z\" data-v-3cb756f6></path></svg>\n                        Facebook\n                    </li> <li class=\"item-icon\" style=\"color: #b70d0d; font-size: 20px;\" data-v-3cb756f6><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"25\" fill=\"currentColor\" viewBox=\"0 0 16 16\" class=\"bi bi-youtube\" data-v-3cb756f6><path d=\"M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z\" data-v-3cb756f6></path></svg>\n                        Youtube\n                    </li></ul></div> <div class=\"icon-column col-right\" data-v-3cb756f6><ul class=\"icon\" data-v-3cb756f6><li class=\"item-icon\" style=\"color: #2e5d93; font-size: 15.6px;\" data-v-3cb756f6><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"25\" fill=\"currentColor\" viewBox=\"0 0 16 16\" class=\"bi bi-linkedin\" data-v-3cb756f6><path d=\"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z\" data-v-3cb756f6></path></svg>\n                        Linkedin\n                    </li> <li class=\"item-icon\" style=\"color: #f587ee; font-size: 15.6px;\" data-v-3cb756f6><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"25\" fill=\"currentColor\" viewBox=\"0 0 16 16\" class=\"bi bi-dribbble\" data-v-3cb756f6><path fill-rule=\"evenodd\" d=\"M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8zm5.284 3.688a6.802 6.802 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A6.95 6.95 0 0 1 8 1.18zm-2.907.642A43.123 43.123 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.865 6.865 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.817 6.817 0 0 1-1.752-4.564zM8 14.837a6.785 6.785 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.246 28.246 0 0 1 1.457 5.18A6.722 6.722 0 0 1 8 14.837zm3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.774 6.774 0 0 1-2.924 4.573z\" data-v-3cb756f6></path></svg>\n                        Dribbble\n                    </li> <li class=\"item-icon\" style=\"color: #ea7efd; font-size: 15.6px;\" data-v-3cb756f6><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"25\" fill=\"currentColor\" viewBox=\"0 0 16 16\" class=\"bi bi-instagram\" data-v-3cb756f6><path d=\"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z\" data-v-3cb756f6></path></svg>\n                        Instagram\n                    </li></ul></div></div></div> "), _vm._ssrNode("<div class=\"bloggin\" data-v-3cb756f6>", "</div>", [_vm._ssrNode("<div class=\"follow\" style=\"margin-top: 10px;\" data-v-3cb756f6><strong data-v-3cb756f6>BLOGGING</strong></div> "), _vm._ssrNode("<div data-v-3cb756f6>", "</div>", [_vm._ssrNode("<div class=\"postcart\" data-v-3cb756f6>", "</div>", [_c('Typetag', {
    attrs: {
      "image": "https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/solar-panels_EFYB8VJXNT.jpg",
      "title": "Why Apple Vision Pro’s $3,499 Price Makes More Sense Than You Think"
    }
  })], 1)])], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/follow/Follow.vue?vue&type=template&id=3cb756f6&scoped=true&

// EXTERNAL MODULE: ./components/typetag/index.vue + 4 modules
var typetag = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/follow/Follow.vue?vue&type=script&lang=js&

/* harmony default export */ var Followvue_type_script_lang_js_ = ({
  components: {
    Typetag: typetag["default"]
  }
});
// CONCATENATED MODULE: ./components/follow/Follow.vue?vue&type=script&lang=js&
 /* harmony default export */ var follow_Followvue_type_script_lang_js_ = (Followvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/follow/Follow.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(62)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  follow_Followvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3cb756f6",
  "4b12ddde"
  
)

/* harmony default export */ var Follow = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Typetag: __webpack_require__(26).default})


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/technology/Maincontent.vue?vue&type=template&id=10a7ef32&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "main content"
  }, [_vm._ssrNode("<img" + _vm._ssrAttr("src", _vm.post.image) + " alt=\"image content\" class=\"mainimage\"> <h2 class=\"main-title\">" + _vm._ssrEscape(_vm._s(_vm.post.title)) + "</h2>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/technology/Maincontent.vue?vue&type=template&id=10a7ef32&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/technology/Maincontent.vue?vue&type=script&lang=js&
/* harmony default export */ var Maincontentvue_type_script_lang_js_ = ({
  data() {
    return {
      post: {
        title: 'Toyota claims its future EVs will have a range over 600 miles',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/motivation-hustle_FKT0RM1QHW-600x400.jpg'
      }
    };
  }
});
// CONCATENATED MODULE: ./components/technology/Maincontent.vue?vue&type=script&lang=js&
 /* harmony default export */ var technology_Maincontentvue_type_script_lang_js_ = (Maincontentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/technology/Maincontent.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(46)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  technology_Maincontentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6a6d8c9e"
  
)

/* harmony default export */ var Maincontent = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_id_92c04610_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_id_92c04610_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_id_92c04610_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_id_92c04610_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_id_92c04610_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media (max-width:760px){.post[data-v-92c04610]{border:none;border-bottom:1px solid #efecec;display:flex;flex-direction:row;height:127px;padding:10px 0;width:345px}.post img[data-v-92c04610]{align-self:flex-start;height:100px;max-width:150px}.info[data-v-92c04610]{display:flex;flex-direction:column;flex-grow:1;margin-left:5px}.post-category p[data-v-92c04610]{align-self:flex-start;color:#cdc6c6;font-size:.8em;margin:0 0 5px;text-transform:uppercase}.post-title[data-v-92c04610]{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;font-size:1em;font-weight:700;margin:0;overflow:hidden;text-overflow:ellipsis}}@media (min-width:1200px){.top-post[data-v-92c04610]{align-items:flex-start;display:flex}.main-post[data-v-92c04610]{margin-left:4%;margin-right:4%;margin-top:25px}.list-post[data-v-92c04610]{align-items:flex-start;display:flex;flex:1;gap:20px;height:380px;justify-content:flex-start;margin-top:20px;width:345px}.post-tag[data-v-92c04610]{list-style:none;margin:0;padding:0}.post[data-v-92c04610]{border:none;border-bottom:1px solid #efecec;display:flex;flex-direction:row;height:127px;padding:10px 0;width:345px}.post img[data-v-92c04610]{align-self:flex-start;height:100px;max-width:150px}.info[data-v-92c04610]{display:flex;flex-direction:column;flex-grow:1;margin-left:5px}.post-category p[data-v-92c04610]{align-self:flex-start;color:#cdc6c6;font-size:.8em;margin:0 0 5px;text-transform:uppercase}.post-title[data-v-92c04610]{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;font-size:1em;font-weight:700;margin:0;overflow:hidden;text-overflow:ellipsis}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Follow_vue_vue_type_style_index_0_id_3cb756f6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Follow_vue_vue_type_style_index_0_id_3cb756f6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Follow_vue_vue_type_style_index_0_id_3cb756f6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Follow_vue_vue_type_style_index_0_id_3cb756f6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Follow_vue_vue_type_style_index_0_id_3cb756f6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media (max-width:760px){.follow-us[data-v-3cb756f6]{margin-top:20px}.bloggin[data-v-3cb756f6]{margin-top:40px}.item-icon[data-v-3cb756f6]{align-items:center;display:flex;margin-right:20px}.item-icon svg[data-v-3cb756f6]{margin-right:5px}.follow[data-v-3cb756f6]{border-bottom:2px solid #e7eaec;font-size:14px;margin-bottom:10px;padding-bottom:5px;position:relative;-webkit-text-decoration:none;text-decoration:none}.follow>strong[data-v-3cb756f6]:before{background-color:#3780f5;bottom:-2px;content:\"\";height:4px;left:0;position:absolute;width:25px}}@media (min-width:1200px){#follow[data-v-3cb756f6]{max-width:302px}.item-icon[data-v-3cb756f6]{align-items:center;display:flex}.item-icon svg[data-v-3cb756f6]{margin-right:5px}.follow-us[data-v-3cb756f6]{margin-top:20px}.follow[data-v-3cb756f6]{border-bottom:2px solid #e7eaec;font-size:14px;margin-bottom:10px;padding-bottom:5px;position:relative;-webkit-text-decoration:none;text-decoration:none}.follow>strong[data-v-3cb756f6]:before{background-color:#3780f5;bottom:-2px;content:\"\";height:4px;left:0;position:absolute;width:25px}.contact-channel[data-v-3cb756f6]{justify-content:space-between}.contact-channel[data-v-3cb756f6],.icon-column[data-v-3cb756f6]{align-items:center;display:flex}.icon-column[data-v-3cb756f6]{flex-direction:column}.col-left[data-v-3cb756f6]{float:left}.col-right[data-v-3cb756f6]{float:right}.bloggin[data-v-3cb756f6]{margin-top:40px}.icon[data-v-3cb756f6]{align-items:left;display:flex;flex-direction:column;list-style:none}.icon>li[data-v-3cb756f6]{margin-bottom:10px}.title-post[data-v-3cb756f6]{color:#000;list-style:none;margin-top:20px;padding-left:0;-webkit-text-decoration:none;text-decoration:none}.title-post>li>span[data-v-3cb756f6]{font-size:16px;margin-bottom:10px;margin-top:10px}.title-post>li>span>a[data-v-3cb756f6]{color:#000;font-size:medium;font-style:normal;-webkit-text-decoration:none;text-decoration:none}.title-post>li>span>a[data-v-3cb756f6]:hover{color:#5691cd}.title-post>li>span[data-v-3cb756f6]{font-weight:medium}.title-post>li[data-v-3cb756f6]{margin-bottom:20px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Advertisting_vue_vue_type_style_index_0_id_3e842bf8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Advertisting_vue_vue_type_style_index_0_id_3e842bf8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Advertisting_vue_vue_type_style_index_0_id_3e842bf8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Advertisting_vue_vue_type_style_index_0_id_3e842bf8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Advertisting_vue_vue_type_style_index_0_id_3e842bf8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media (max-width:760px){.advertisting[data-v-3e842bf8]{margin-top:40px}.container[data-v-3e842bf8]{padding:0}.adver>strong[data-v-3e842bf8]{font-size:14px;font-weight:bolder}.adver[data-v-3e842bf8]{border-bottom:2px solid #e7eaec;font-size:14px;padding-bottom:5px;position:relative;-webkit-text-decoration:none;text-decoration:none}.adver>strong[data-v-3e842bf8]:before{background-color:#3780f5;bottom:-2px;content:\"\";height:4px;left:0;position:absolute;width:25px}.post[data-v-3e842bf8]{background-color:#fff;border:none;border-top:1px solid #efecec;margin-bottom:20px;padding:10px 0}.post-image[data-v-3e842bf8]{height:109px;margin-bottom:10px;width:100%}.post-title[data-v-3e842bf8]{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;font-size:1em;font-weight:700;overflow:hidden;padding-right:10px;text-overflow:ellipsis}}@media (min-width:1200px){.advertisting[data-v-3e842bf8]{margin-top:40px;max-width:305px;padding-left:0}.adver>strong[data-v-3e842bf8]{font-size:14px;font-weight:bolder}.adver[data-v-3e842bf8]{border-bottom:2px solid #e7eaec;font-size:14px;padding-bottom:5px;position:relative;-webkit-text-decoration:none;text-decoration:none}.adver>strong[data-v-3e842bf8]:before{background-color:#3780f5;bottom:-2px;content:\"\";height:4px;left:0;position:absolute;width:25px}.list-post[data-v-3e842bf8]{padding:0}.post[data-v-3e842bf8]{background-color:#fff;border:none;border-top:1px solid #efecec;margin-bottom:20px;padding:10px 0}.post-image[data-v-3e842bf8]{height:109px;margin-bottom:10px;width:300px}.post-title[data-v-3e842bf8]{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;font-size:1em;font-weight:700;overflow:hidden;padding-right:10px;text-overflow:ellipsis}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fashion_vue_vue_type_style_index_0_id_3539b0a0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fashion_vue_vue_type_style_index_0_id_3539b0a0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fashion_vue_vue_type_style_index_0_id_3539b0a0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fashion_vue_vue_type_style_index_0_id_3539b0a0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fashion_vue_vue_type_style_index_0_id_3539b0a0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media (max-width:760px){.post-tag[data-v-3539b0a0]{list-style:none;margin:0;padding:0}.post[data-v-3539b0a0]{border:none;border-bottom:1px solid #efecec;display:flex;flex-direction:row;height:127px;padding:10px 0;width:345px}.post img[data-v-3539b0a0]{align-self:flex-start;height:100px;max-width:150px}.info[data-v-3539b0a0]{display:flex;flex-direction:column;flex-grow:1;margin-left:5px}.post-category p[data-v-3539b0a0]{align-self:flex-start;color:#cdc6c6;font-size:.8em;margin:0 0 5px;text-transform:uppercase}.post-title[data-v-3539b0a0]{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;font-size:1em;font-weight:400;margin:0;overflow:hidden;text-overflow:ellipsis}}@media (min-width:1200px){.fashion-tag[data-v-3539b0a0]{max-width:305px;padding-left:0}.fashion>strong[data-v-3539b0a0]{font-size:14px;font-weight:bolder}.fashion[data-v-3539b0a0]{border-bottom:2px solid #e7eaec;font-size:14px;padding-bottom:5px;position:relative;-webkit-text-decoration:none;text-decoration:none}.fashion>strong[data-v-3539b0a0]:before{background-color:#3780f5;bottom:-2px;content:\"\";height:4px;left:0;position:absolute;width:25px}.list-post[data-v-3539b0a0]{align-items:flex-start;display:flex;flex:1;gap:20px;height:380px;justify-content:flex-start;width:345px}.post-tag[data-v-3539b0a0]{list-style:none;margin:0;padding:0}.post[data-v-3539b0a0]{border-left:none;border-right:none;border-top:1px solid #efecec;display:flex;flex-direction:row;height:127px;padding:10px 0;width:302px}.post img[data-v-3539b0a0]{align-self:flex-start;height:90px;max-width:90px}.info[data-v-3539b0a0]{display:flex;flex-direction:column;flex-grow:1;margin-left:5px}.post-category p[data-v-3539b0a0]{align-self:flex-start;color:#cdc6c6;font-size:.8em;margin:0 0 5px;text-transform:uppercase}.post-title[data-v-3539b0a0]{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;font-size:1em;font-weight:400;margin:0;overflow:hidden;text-overflow:ellipsis}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0a33be6e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0a33be6e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0a33be6e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0a33be6e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0a33be6e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media (max-width:760px){.custom-col[data-v-0a33be6e]{padding:0}.head[data-v-0a33be6e]{border-bottom:1px solid #efeaea;margin-right:40px}.tab-business[data-v-0a33be6e]{border-bottom:2px solid #fff;font-size:14px;height:41px;padding-bottom:5px;position:relative;-webkit-text-decoration:none;text-decoration:none;width:440px}.tab-business[data-v-0a33be6e]:before{background-color:#3780f5;bottom:-2px;content:\"\";height:4px;left:0;position:absolute;width:25px}.tab-business>.col[data-v-0a33be6e]{padding:0}.bus[data-v-0a33be6e]{color:#000;font-size:16px;font-weight:700;margin-right:10px}.sub-bus[data-v-0a33be6e]{display:none}.post[data-v-0a33be6e]{background-color:#fff;margin-bottom:20px;margin-top:25px}.post-category p[data-v-0a33be6e]{align-self:flex-start;color:#cdc6c6;font-size:.8em;margin-bottom:5px;margin-top:10px;text-transform:uppercase}.post-title[data-v-0a33be6e]{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;font-size:1em;font-weight:700;overflow:hidden;padding-right:10px;text-overflow:ellipsis}}@media (min-width:1200px){.head[data-v-0a33be6e]{border-bottom:1px solid #efeaea;margin-right:40px}.tab-business[data-v-0a33be6e]{border-bottom:2px solid #fff;font-size:14px;height:41px;padding-bottom:5px;position:relative;-webkit-text-decoration:none;text-decoration:none;width:440px}.tab-business[data-v-0a33be6e]:before{background-color:#3780f5;bottom:-2px;content:\"\";height:4px;left:0;position:absolute;width:25px}.tab-business>.col[data-v-0a33be6e]{padding:0}.bus[data-v-0a33be6e]{color:#000;font-size:16px;margin-right:10px}.bus[data-v-0a33be6e],.sub-bus[data-v-0a33be6e]{font-weight:700}.sub-bus[data-v-0a33be6e]{color:#b6b1b1;font-size:13px}.link[data-v-0a33be6e] :hover{color:#000;-webkit-text-decoration:none;text-decoration:none}.post[data-v-0a33be6e]{background-color:#fff;margin-bottom:20px;margin-top:25px}.custom-col[data-v-0a33be6e]{padding-left:0;padding-right:10px}.post>img[data-v-0a33be6e]{height:190px;width:287px}.post-category p[data-v-0a33be6e]{align-self:flex-start;color:#cdc6c6;font-size:.8em;margin-bottom:5px;margin-top:10px;text-transform:uppercase}.post-title[data-v-0a33be6e]{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;font-size:1em;font-weight:700;overflow:hidden;padding-right:10px;text-overflow:ellipsis}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_36c3d6c2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_36c3d6c2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_36c3d6c2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_36c3d6c2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_36c3d6c2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media (max-width:760px){.main-content[data-v-36c3d6c2]{margin-top:20px}.head[data-v-36c3d6c2]{border-bottom:1px solid #efeaea;margin-right:40px}.tab-business[data-v-36c3d6c2]{border-bottom:2px solid #fff;font-size:14px;height:41px;padding-bottom:5px;position:relative;-webkit-text-decoration:none;text-decoration:none;width:440px}.tab-business[data-v-36c3d6c2]:before{background-color:#3780f5;bottom:-2px;content:\"\";height:4px;left:0;position:absolute;width:25px}.tab-business>.col[data-v-36c3d6c2]{padding:0}.bus[data-v-36c3d6c2]{color:#000;font-size:16px;font-weight:700;margin-right:10px}.sub-bus[data-v-36c3d6c2]{display:none}.list-post[data-v-36c3d6c2]{margin-top:30px}}@media (min-width:1200px){.head[data-v-36c3d6c2]{border-bottom:1px solid #efeaea;margin-right:40px}.tab-business[data-v-36c3d6c2]{border-bottom:2px solid #fff;font-size:14px;height:41px;padding-bottom:5px;position:relative;-webkit-text-decoration:none;text-decoration:none;width:440px}.tab-business[data-v-36c3d6c2]:before{background-color:#3780f5;bottom:-2px;content:\"\";height:4px;left:0;position:absolute;width:25px}.tab-business>.col[data-v-36c3d6c2]{padding:0}.bus[data-v-36c3d6c2]{color:#000;font-size:16px;margin-right:10px}.bus[data-v-36c3d6c2],.sub-bus[data-v-36c3d6c2]{font-weight:700}.sub-bus[data-v-36c3d6c2]{color:#b6b1b1;font-size:13px}.link[data-v-36c3d6c2] :hover{color:#000;-webkit-text-decoration:none;text-decoration:none}.main-content[data-v-36c3d6c2]{display:flex;margin-right:4%;margin-top:25px}.list-post[data-v-36c3d6c2]{align-items:flex-start;display:flex;flex:1;gap:20px;height:380px;justify-content:flex-start;width:345px}.post-tag[data-v-36c3d6c2]{list-style:none;margin:0;padding:0}.post[data-v-36c3d6c2]{display:flex;flex-direction:row;height:127px;width:345px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_010ffebe_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_010ffebe_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_010ffebe_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_010ffebe_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_010ffebe_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media (max-width:760px){.container[data-v-010ffebe]{margin:0;padding:0}.head[data-v-010ffebe]{border-bottom:1px solid #efeaea;margin-right:40px}.tab-business[data-v-010ffebe]{border-bottom:2px solid #fff;font-size:14px;height:41px;margin:0;padding-bottom:5px;position:relative;-webkit-text-decoration:none;text-decoration:none;width:440px}.tab-business[data-v-010ffebe]:before{background-color:#3780f5;bottom:-2px;content:\"\";height:4px;left:0;position:absolute;width:25px}.tab-business>.col[data-v-010ffebe]{padding:0}.post[data-v-010ffebe]{background-color:#fff;margin-bottom:20px;margin-top:25px}.bus[data-v-010ffebe]{color:#000;font-size:16px;font-weight:700;margin:0 10px 0 0}.sub-bus[data-v-010ffebe]{display:none}.post-category p[data-v-010ffebe]{align-self:flex-start;color:#cdc6c6;font-size:.8em;margin-bottom:5px;margin-top:10px;text-transform:uppercase}.post-title[data-v-010ffebe]{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;font-size:1em;font-weight:700;overflow:hidden;padding-right:10px;text-overflow:ellipsis}}@media (min-width:1200px){.head[data-v-010ffebe]{border-bottom:1px solid #efeaea;margin-right:40px}.tab-business[data-v-010ffebe]{border-bottom:2px solid #fff;font-size:14px;height:41px;padding-bottom:5px;position:relative;-webkit-text-decoration:none;text-decoration:none;width:440px}.tab-business[data-v-010ffebe]:before{background-color:#3780f5;bottom:-2px;content:\"\";height:4px;left:0;position:absolute;width:25px}.tab-business>.col[data-v-010ffebe]{padding:0}.bus[data-v-010ffebe]{color:#000;font-size:16px;margin-right:10px}.bus[data-v-010ffebe],.sub-bus[data-v-010ffebe]{font-weight:700}.sub-bus[data-v-010ffebe]{color:#b6b1b1;font-size:13px}.link[data-v-010ffebe] :hover{color:#000;-webkit-text-decoration:none;text-decoration:none}.post[data-v-010ffebe]{background-color:#fff;margin-bottom:20px;margin-top:25px}.custom-col[data-v-010ffebe]{padding-left:0;padding-right:10px}.post>img[data-v-010ffebe]{height:190px;width:287px}.post-category p[data-v-010ffebe]{align-self:flex-start;color:#cdc6c6;font-size:.8em;margin-bottom:5px;margin-top:10px;text-transform:uppercase}.post-title[data-v-010ffebe]{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;font-size:1em;font-weight:700;overflow:hidden;padding-right:10px;text-overflow:ellipsis}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_693d5af8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_693d5af8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_693d5af8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_693d5af8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_693d5af8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media (max-width:760px){.container[data-v-693d5af8]{padding:0}.head[data-v-693d5af8]{border-bottom:1px solid #efeaea;margin-right:35px}.tab-business[data-v-693d5af8]{border-bottom:2px solid #fff;font-size:14px;height:41px;margin:0;padding-bottom:5px;position:relative;-webkit-text-decoration:none;text-decoration:none;width:500px}.tab-business[data-v-693d5af8]:before{background-color:#3780f5;bottom:-2px;content:\"\";height:4px;left:0;position:absolute;width:25px}.tab-business>.col[data-v-693d5af8]{padding:0}.post[data-v-693d5af8]{background-color:#fff;margin-bottom:20px;margin-top:25px}.bus[data-v-693d5af8]{color:#000;font-size:16px;font-weight:700;margin-right:10px;width:120px}.sub-bus[data-v-693d5af8]{display:none}.post-category p[data-v-693d5af8]{align-self:flex-start;color:#cdc6c6;font-size:.8em;margin-bottom:5px;margin-top:10px;text-transform:uppercase}.post-title[data-v-693d5af8]{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;font-size:1em;font-weight:700;overflow:hidden;padding-right:10px;text-overflow:ellipsis}}@media (min-width:1200px){.head[data-v-693d5af8]{border-bottom:1px solid #efeaea;margin-right:35px}.tab-business[data-v-693d5af8]{border-bottom:2px solid #fff;font-size:14px;height:41px;padding-bottom:5px;position:relative;-webkit-text-decoration:none;text-decoration:none;width:500px}.tab-business[data-v-693d5af8]:before{background-color:#3780f5;bottom:-2px;content:\"\";height:4px;left:0;position:absolute;width:25px}.tab-business>.col[data-v-693d5af8]{padding:0}.bus[data-v-693d5af8]{color:#000;font-size:16px;margin-right:10px;width:120px}.bus[data-v-693d5af8],.sub-bus[data-v-693d5af8]{font-weight:700}.sub-bus[data-v-693d5af8]{color:#b6b1b1;font-size:13px}.link[data-v-693d5af8] :hover{color:#000;-webkit-text-decoration:none;text-decoration:none}.post[data-v-693d5af8]{background-color:#fff;margin-bottom:20px;margin-top:25px}.custom-col[data-v-693d5af8]{padding-left:0;padding-right:10px}.post>img[data-v-693d5af8]{height:190px;width:287px}.post-category p[data-v-693d5af8]{align-self:flex-start;color:#cdc6c6;font-size:.8em;margin-bottom:5px;margin-top:10px;text-transform:uppercase}.post-title[data-v-693d5af8]{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;font-size:1em;font-weight:700;overflow:hidden;padding-right:10px;text-overflow:ellipsis}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ac4ce234_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ac4ce234_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ac4ce234_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ac4ce234_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ac4ce234_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media (max-width:760px){.service[data-v-ac4ce234]{flex-direction:column;gap:40px}.tab[data-v-ac4ce234]{margin-top:30px;padding:0}.tab>h6[data-v-ac4ce234]{border-bottom:2px solid #eaeff3;font-size:14px;margin-left:0;padding:0 0 5px;position:relative;-webkit-text-decoration:none;text-decoration:none}.tab>h6[data-v-ac4ce234]:before{background-color:#3780f5;bottom:-2px;content:\"\";height:4px;left:0;position:absolute;width:25px}.title[data-v-ac4ce234]{font-weight:bolder;margin-bottom:20px;width:392px}}@media (min-width:1200px){.container[data-v-ac4ce234]{margin:40px 139.6px 0;max-width:1240px;padding:0}.service[data-v-ac4ce234]{flex-direction:row;gap:40px}.tab>h6[data-v-ac4ce234]{border-bottom:2px solid #eaeff3;font-size:14px;margin-left:0;padding:0 0 5px;position:relative;-webkit-text-decoration:none;text-decoration:none}.tab>h6[data-v-ac4ce234]:before{background-color:#3780f5;bottom:-2px;content:\"\";height:4px;left:0;position:absolute;width:25px}.postcart[data-v-ac4ce234],.title[data-v-ac4ce234]{width:392px}.title[data-v-ac4ce234]{font-weight:bolder;margin-bottom:20px}.col.tab[data-v-ac4ce234]{box-sizing:border-box;flex:1;max-width:392px;padding:0 10px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_637531a8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_637531a8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_637531a8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_637531a8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_637531a8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media (max-width:760px){.head[data-v-637531a8]{border-bottom:1px solid #efeaea}.type-post[data-v-637531a8]{background-color:#a6cde8;margin-bottom:0}.tab-business[data-v-637531a8]{border-bottom:2px solid #fff;font-size:14px;height:41px;padding-bottom:5px;position:relative;-webkit-text-decoration:none;text-decoration:none;width:440px}.tab-business[data-v-637531a8]:before{background-color:#3780f5;bottom:-2px;content:\"\";height:4px;left:0;position:absolute;width:25px}.tab-business>.col[data-v-637531a8]{padding:0}.bus[data-v-637531a8]{color:#000;font-size:16px;font-weight:700;margin-right:10px}.sub-bus[data-v-637531a8]{display:none}.post[data-v-637531a8]{background-color:#fff;margin-bottom:20px;margin-top:25px}}@media(min-width:1200px){.type-post[data-v-637531a8]{background-color:#eef4f8;margin-bottom:0;max-width:293.125px}.head[data-v-637531a8]{border-bottom:1px solid #efeaea;margin:0 139.6px}.tab-business[data-v-637531a8]{border-bottom:2px solid #fff;font-size:14px;height:41px;padding-bottom:5px;position:relative;-webkit-text-decoration:none;text-decoration:none;width:440px}.tab-business[data-v-637531a8]:before{background-color:#3780f5;bottom:-2px;content:\"\";height:4px;left:0;position:absolute;width:25px}.tab-business>.col[data-v-637531a8]{padding:0}.bus[data-v-637531a8]{color:#000;font-size:16px;margin-right:10px}.bus[data-v-637531a8],.sub-bus[data-v-637531a8]{font-weight:700}.sub-bus[data-v-637531a8]{color:#b6b1b1;font-size:13px}.link[data-v-637531a8] :hover{color:#000;-webkit-text-decoration:none;text-decoration:none}.custom-col[data-v-637531a8]{padding-right:0;width:392.125px}.post>img[data-v-637531a8]{height:195.788px;width:293.125px}.post-category p[data-v-637531a8]{align-self:flex-start;color:#cdc6c6;font-size:.8em;margin-bottom:5px;margin-top:10px;text-transform:uppercase}.post-title[data-v-637531a8]{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;font-size:1em;font-weight:700;overflow:hidden;text-overflow:ellipsis}.container[data-v-637531a8]{margin:0 139.6px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5ad539b8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5ad539b8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5ad539b8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5ad539b8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5ad539b8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media (max-width:760px){.head[data-v-5ad539b8]{border-bottom:1px solid #efeaea;margin:0}.tab-business[data-v-5ad539b8]{border-bottom:2px solid #fff;font-size:14px;height:41px;padding-bottom:5px;position:relative;-webkit-text-decoration:none;text-decoration:none;width:440px}.tab-business[data-v-5ad539b8]:before{background-color:#3780f5;bottom:-2px;content:\"\";height:4px;left:0;position:absolute;width:25px}.tab-business>.col[data-v-5ad539b8]{padding:0}.bus[data-v-5ad539b8]{color:#000;font-size:14px;font-weight:700;margin-right:10px}.sub-bus[data-v-5ad539b8]{display:none}.type-post[data-v-5ad539b8]{background-color:#eef4f8;margin-bottom:0}.post-category p[data-v-5ad539b8]{align-self:flex-start;color:#cdc6c6;font-size:.8em;margin-bottom:5px;margin-top:10px;text-transform:uppercase}.post-title[data-v-5ad539b8]{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;font-size:1em;font-weight:700;overflow:hidden;text-overflow:ellipsis}.container[data-v-5ad539b8]{margin:0}.custom-col[data-v-5ad539b8]{padding-right:0;width:100%}}@media (min-width:1200px){.food-drink[data-v-5ad539b8]{margin-top:30px}.type-post[data-v-5ad539b8]{background-color:#eef4f8;margin-bottom:0;max-width:293.125px}.head[data-v-5ad539b8]{border-bottom:1px solid #efeaea;margin:0 139.6px}.tab-business[data-v-5ad539b8]{border-bottom:2px solid #fff;font-size:14px;height:41px;padding-bottom:5px;position:relative;-webkit-text-decoration:none;text-decoration:none;width:440px}.tab-business[data-v-5ad539b8]:before{background-color:#3780f5;bottom:-2px;content:\"\";height:4px;left:0;position:absolute;width:25px}.tab-business>.col[data-v-5ad539b8]{padding:0}.bus[data-v-5ad539b8]{color:#000;font-size:14px;margin-right:10px}.bus[data-v-5ad539b8],.sub-bus[data-v-5ad539b8]{font-weight:700}.sub-bus[data-v-5ad539b8]{color:#b6b1b1;font-size:13px}.link[data-v-5ad539b8] :hover{color:#000;-webkit-text-decoration:none;text-decoration:none}.custom-col[data-v-5ad539b8]{padding-right:0;width:392.125px}.post>img[data-v-5ad539b8]{height:195.788px;width:293.125px}.post-category p[data-v-5ad539b8]{align-self:flex-start;color:#cdc6c6;font-size:.8em;margin-bottom:5px;margin-top:10px;text-transform:uppercase}.post-title[data-v-5ad539b8]{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;font-size:1em;font-weight:700;overflow:hidden;text-overflow:ellipsis}.container[data-v-5ad539b8]{margin:0 139.6px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/svgs/DribbbleIcon.vue?vue&type=template&id=0e2d484b&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": _setup.sizeComputed,
      "height": _setup.sizeComputed,
      "viewBox": "0 0 24 24"
    }
  }, [_vm._ssrNode("<path" + _vm._ssrAttr("fill", _setup.fillColor) + " d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2Zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271c-.065-.141-.12-.293-.184-.445a25.276 25.276 0 0 0-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362ZM12 3.475c2.17 0 4.154.814 5.662 2.148c-.152.216-1.443 1.941-4.48 3.08c-1.399-2.57-2.95-4.675-3.189-5A8.686 8.686 0 0 1 12 3.475Zm-3.633.803a53.9 53.9 0 0 1 3.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 0 1 4.729-5.975ZM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215c.25.477.477.965.694 1.453c-.109.033-.228.065-.336.098c-4.404 1.42-6.747 5.303-6.942 5.629a8.521 8.521 0 0 1-2.19-5.705ZM12 20.547a8.482 8.482 0 0 1-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337c.022-.01.033-.01.054-.022a35.316 35.316 0 0 1 1.823 6.475a8.4 8.4 0 0 1-3.341.684Zm4.761-1.465c-.086-.52-.542-3.015-1.66-6.084c2.68-.423 5.023.271 5.315.369a8.468 8.468 0 0 1-3.655 5.715Z\"></path>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/svgs/DribbbleIcon.vue?vue&type=template&id=0e2d484b&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/svgs/DribbbleIcon.vue?vue&type=script&setup=true&lang=js&

/* harmony default export */ var DribbbleIconvue_type_script_setup_true_lang_js_ = ({
  __name: 'DribbbleIcon',
  props: {
    colorprops: {
      type: String,
      default: "white"
    },
    size: {
      type: String,
      default: "1em"
    }
  },
  setup(__props) {
    const props = __props;
    const fillColor = Object(external_vue_["computed"])(() => props.colorprops === "color" ? "#f00075" : "white");
    const sizeComputed = Object(external_vue_["computed"])(() => props.size === "25px" ? "25px" : "1em");
    return {
      __sfc: true,
      props,
      fillColor,
      sizeComputed
    };
  }
});
// CONCATENATED MODULE: ./components/svgs/DribbbleIcon.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var svgs_DribbbleIconvue_type_script_setup_true_lang_js_ = (DribbbleIconvue_type_script_setup_true_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/svgs/DribbbleIcon.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  svgs_DribbbleIconvue_type_script_setup_true_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "24c13ec8"
  
)

/* harmony default export */ var DribbbleIcon = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/svgs/FacebookIcon.vue?vue&type=template&id=0d6ec7ec&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": _setup.sizeComputed,
      "height": _setup.sizeComputed,
      "viewBox": "0 0 24 24"
    }
  }, [_vm._ssrNode("<path" + _vm._ssrAttr("fill", _setup.fillColor) + " d=\"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z\"></path>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/svgs/FacebookIcon.vue?vue&type=template&id=0d6ec7ec&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/svgs/FacebookIcon.vue?vue&type=script&setup=true&lang=js&

/* harmony default export */ var FacebookIconvue_type_script_setup_true_lang_js_ = ({
  __name: 'FacebookIcon',
  props: {
    colorprops: {
      type: String,
      default: "white"
    },
    size: {
      type: String,
      default: "1em"
    }
  },
  setup(__props) {
    const props = __props;
    const fillColor = Object(external_vue_["computed"])(() => props.colorprops === "color" ? "#1778f2" : "white");
    const sizeComputed = Object(external_vue_["computed"])(() => props.size === "25px" ? "25px" : "1em");
    return {
      __sfc: true,
      props,
      fillColor,
      sizeComputed
    };
  }
});
// CONCATENATED MODULE: ./components/svgs/FacebookIcon.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var svgs_FacebookIconvue_type_script_setup_true_lang_js_ = (FacebookIconvue_type_script_setup_true_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/svgs/FacebookIcon.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  svgs_FacebookIconvue_type_script_setup_true_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "56bd472e"
  
)

/* harmony default export */ var FacebookIcon = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/svgs/InstagramIcon.vue?vue&type=template&id=9f5d31f8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": _setup.sizeComputed,
      "height": _setup.sizeComputed,
      "viewBox": "0 0 24 24"
    }
  }, [_vm._ssrNode("<path" + _vm._ssrAttr("fill", _setup.fillColor) + " d=\"M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6Zm0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0ZM12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.886 2.886 0 0 0-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.91 2.91 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.912 2.912 0 0 0-.703-1.08a2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4Zm0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122c0 2.717-.01 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.884 4.884 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06c-2.717 0-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.89 4.89 0 0 1-1.772-1.153a4.905 4.905 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428c-.048-1.066-.06-1.405-.06-4.122c0-2.717.01-3.056.06-4.122c.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772a4.897 4.897 0 0 1 1.772-1.153c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2Z\"></path>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/svgs/InstagramIcon.vue?vue&type=template&id=9f5d31f8&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/svgs/InstagramIcon.vue?vue&type=script&setup=true&lang=js&

/* harmony default export */ var InstagramIconvue_type_script_setup_true_lang_js_ = ({
  __name: 'InstagramIcon',
  props: {
    colorprops: {
      type: String,
      default: "white"
    },
    size: {
      type: String,
      default: "1em"
    }
  },
  setup(__props) {
    const props = __props;
    const fillColor = Object(external_vue_["computed"])(() => props.colorprops === "color" ? "#f00075 " : "white");
    const sizeComputed = Object(external_vue_["computed"])(() => props.size === "25px" ? "25px" : "1em");
    return {
      __sfc: true,
      props,
      fillColor,
      sizeComputed
    };
  }
});
// CONCATENATED MODULE: ./components/svgs/InstagramIcon.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var svgs_InstagramIconvue_type_script_setup_true_lang_js_ = (InstagramIconvue_type_script_setup_true_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/svgs/InstagramIcon.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  svgs_InstagramIconvue_type_script_setup_true_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c05290e8"
  
)

/* harmony default export */ var InstagramIcon = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/svgs/LinkedinIcon.vue?vue&type=template&id=52977b5a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": _setup.sizeComputed,
      "height": _setup.sizeComputed,
      "viewBox": "0 0 512 512"
    }
  }, [_vm._ssrNode("<path" + _vm._ssrAttr("fill", _setup.fillColor) + " d=\"M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32Zm-273.3 373.43h-64.18V205.88h64.18ZM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43c0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43Zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44c-17.74 0-28.24 12-32.91 23.69c-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44c42.13 0 74 27.77 74 87.64Z\"></path>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/svgs/LinkedinIcon.vue?vue&type=template&id=52977b5a&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/svgs/LinkedinIcon.vue?vue&type=script&setup=true&lang=js&

/* harmony default export */ var LinkedinIconvue_type_script_setup_true_lang_js_ = ({
  __name: 'LinkedinIcon',
  props: {
    colorprops: {
      type: String,
      default: "white"
    },
    size: {
      type: String,
      default: "1em"
    }
  },
  setup(__props) {
    const props = __props;
    const fillColor = Object(external_vue_["computed"])(() => props.colorprops === "color" ? "#0d66c2 " : "white");
    const sizeComputed = Object(external_vue_["computed"])(() => props.size === "25px" ? "25px" : "1em");
    return {
      __sfc: true,
      props,
      fillColor,
      sizeComputed
    };
  }
});
// CONCATENATED MODULE: ./components/svgs/LinkedinIcon.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var svgs_LinkedinIconvue_type_script_setup_true_lang_js_ = (LinkedinIconvue_type_script_setup_true_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/svgs/LinkedinIcon.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  svgs_LinkedinIconvue_type_script_setup_true_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6ef38566"
  
)

/* harmony default export */ var LinkedinIcon = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/svgs/TwitterIcon.vue?vue&type=template&id=04c1cb61&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": _setup.sizeComputed,
      "height": _setup.sizeComputed,
      "viewBox": "0 0 24 24"
    }
  }, [_vm._ssrNode("<path" + _vm._ssrAttr("fill", _setup.fillColor) + " d=\"M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z\"></path>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/svgs/TwitterIcon.vue?vue&type=template&id=04c1cb61&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/svgs/TwitterIcon.vue?vue&type=script&setup=true&lang=js&

/* harmony default export */ var TwitterIconvue_type_script_setup_true_lang_js_ = ({
  __name: 'TwitterIcon',
  props: {
    colorprops: {
      type: String,
      default: "white"
    },
    size: {
      type: String,
      default: "1em"
    }
  },
  setup(__props) {
    const props = __props;
    const fillColor = Object(external_vue_["computed"])(() => props.colorprops === "color" ? "#1da1f2" : "white");
    const sizeComputed = Object(external_vue_["computed"])(() => props.size === "25px" ? "25px" : "1em");
    return {
      __sfc: true,
      props,
      fillColor,
      sizeComputed
    };
  }
});
// CONCATENATED MODULE: ./components/svgs/TwitterIcon.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var svgs_TwitterIconvue_type_script_setup_true_lang_js_ = (TwitterIconvue_type_script_setup_true_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/svgs/TwitterIcon.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  svgs_TwitterIconvue_type_script_setup_true_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ac3c80e6"
  
)

/* harmony default export */ var TwitterIcon = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/svgs/YoutubeIcon.vue?vue&type=template&id=05652f6d&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": _setup.sizeComputed,
      "height": _setup.sizeComputed,
      "viewBox": "0 0 32 32"
    }
  }, [_vm._ssrNode("<path" + _vm._ssrAttr("fill", _setup.fillColor) + " d=\"M29.41 9.26a3.5 3.5 0 0 0-2.47-2.47C24.76 6.2 16 6.2 16 6.2s-8.76 0-10.94.59a3.5 3.5 0 0 0-2.47 2.47A36.13 36.13 0 0 0 2 16a36.13 36.13 0 0 0 .59 6.74a3.5 3.5 0 0 0 2.47 2.47c2.18.59 10.94.59 10.94.59s8.76 0 10.94-.59a3.5 3.5 0 0 0 2.47-2.47A36.13 36.13 0 0 0 30 16a36.13 36.13 0 0 0-.59-6.74ZM13.2 20.2v-8.4l7.27 4.2Z\"></path>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/svgs/YoutubeIcon.vue?vue&type=template&id=05652f6d&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/svgs/YoutubeIcon.vue?vue&type=script&setup=true&lang=js&

/* harmony default export */ var YoutubeIconvue_type_script_setup_true_lang_js_ = ({
  __name: 'YoutubeIcon',
  props: {
    colorprops: {
      type: String,
      default: "white"
    },
    size: {
      type: String,
      default: "1em"
    }
  },
  setup(__props) {
    const props = __props;
    const fillColor = Object(external_vue_["computed"])(() => props.colorprops === "color" ? "#ff0000" : "white");
    const sizeComputed = Object(external_vue_["computed"])(() => props.size === "25px" ? "25px" : "1em");
    return {
      __sfc: true,
      props,
      fillColor,
      sizeComputed
    };
  }
});
// CONCATENATED MODULE: ./components/svgs/YoutubeIcon.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var svgs_YoutubeIconvue_type_script_setup_true_lang_js_ = (YoutubeIconvue_type_script_setup_true_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/svgs/YoutubeIcon.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  svgs_YoutubeIconvue_type_script_setup_true_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8a20df86"
  
)

/* harmony default export */ var YoutubeIcon = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/content/Content.vue?vue&type=template&id=92c04610&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "main-content"
  }, [_vm._ssrNode("<div class=\"top-post\" data-v-92c04610>", "</div>", [_vm._ssrNode("<div class=\"list-post\" data-v-92c04610><ul class=\"post-tag\" data-v-92c04610>" + _vm._ssrList(_vm.posts, function (post) {
    return "<li class=\"post\" data-v-92c04610><img" + _vm._ssrAttr("src", post.image) + " alt=\"Post Image\" data-v-92c04610> <div class=\"info\" data-v-92c04610><div class=\"post-category\" data-v-92c04610><p data-v-92c04610>" + _vm._ssrEscape(_vm._s(post.category)) + "</p></div> <h2 class=\"post-title\" data-v-92c04610>" + _vm._ssrEscape(_vm._s(post.title)) + "</h2></div></li>";
  }) + "</ul></div> "), _vm._ssrNode("<div class=\"main-post\" data-v-92c04610>", "</div>", [_c('Maincontent')], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"last-post\" data-v-92c04610>", "</div>", [_c('Lastcontent')], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/content/Content.vue?vue&type=template&id=92c04610&scoped=true&

// EXTERNAL MODULE: ./components/content/Maincontent.vue + 4 modules
var Maincontent = __webpack_require__(56);

// EXTERNAL MODULE: ./components/content/LastContent.vue + 4 modules
var LastContent = __webpack_require__(57);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/content/Content.vue?vue&type=script&lang=js&


/* harmony default export */ var Contentvue_type_script_lang_js_ = ({
  data() {
    return {
      posts: [{
        id: 1,
        title: 'The best smart glasses to buy now, according to experts',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/glashes.jpg',
        category: 'FASHION'
      }, {
        id: 2,
        title: 'The best wrinkle-free travel clothes to pack for your summer',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/shirt.jpg',
        category: 'FASHION'
      }, {
        id: 3,
        title: 'World’s Best 25 Airlines for 2023 Revealed by Airline',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/airplane-travel_J5AQI42431.jpg',
        category: 'TRAVEL'
      }]
    };
  },
  components: {
    Maincontent: Maincontent["default"],
    Lastcontent: LastContent["default"]
  }
});
// CONCATENATED MODULE: ./components/content/Content.vue?vue&type=script&lang=js&
 /* harmony default export */ var content_Contentvue_type_script_lang_js_ = (Contentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/content/Content.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(60)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  content_Contentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "92c04610",
  "59a9b010"
  
)

/* harmony default export */ var Content = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/business/index.vue?vue&type=template&id=0a33be6e&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "business"
  }, [_vm._ssrNode("<div class=\"head\" data-v-0a33be6e>", "</div>", [_vm._ssrNode("<div class=\"container\" data-v-0a33be6e>", "</div>", [_vm._ssrNode("<div class=\"row tab-business align-items-center\" data-v-0a33be6e>", "</div>", [_vm._ssrNode("<div class=\"col\" data-v-0a33be6e>", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "#"
    }
  }, [_c('h2', {
    staticClass: "bus link"
  }, [_vm._v("BUSINESS")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col\" data-v-0a33be6e>", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "#"
    }
  }, [_c('h2', {
    staticClass: "sub-bus link"
  }, [_vm._v("SUB CAT 1")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col\" data-v-0a33be6e>", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "#"
    }
  }, [_c('h2', {
    staticClass: "sub-bus link"
  }, [_vm._v("SUB CAT 2")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col\" data-v-0a33be6e>", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "#"
    }
  }, [_c('h2', {
    staticClass: "sub-bus link"
  }, [_vm._v("SUB CAT 3")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col\" data-v-0a33be6e>", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "#"
    }
  }, [_c('h2', {
    staticClass: "sub-bus link"
  }, [_vm._v("SUB CAT 4")])])], 1)], 2)])]), _vm._ssrNode(" <div class=\"posts\" data-v-0a33be6e><div class=\"container\" data-v-0a33be6e><div class=\"row\" data-v-0a33be6e>" + _vm._ssrList(_vm.posts, function (post) {
    return "<div class=\"col-md-4 custom-col\" data-v-0a33be6e><div class=\"post\" data-v-0a33be6e><img" + _vm._ssrAttr("src", post.image) + " alt=\"Post Image\" data-v-0a33be6e> <div class=\"info\" data-v-0a33be6e><div class=\"post-category\" data-v-0a33be6e><p data-v-0a33be6e>" + _vm._ssrEscape(_vm._s(post.category)) + "</p></div> <h2 class=\"post-title\" data-v-0a33be6e>" + _vm._ssrEscape(_vm._s(post.title)) + "</h2></div></div></div>";
  }) + "</div></div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/business/index.vue?vue&type=template&id=0a33be6e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/business/index.vue?vue&type=script&lang=js&
/* harmony default export */ var businessvue_type_script_lang_js_ = ({
  data() {
    return {
      posts: [{
        id: 1,
        title: 'The job market enters a new phase as the Great Resignation ends',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/saulo-mohana-768x511.jpg',
        category: 'BUSINESS'
      }, {
        id: 2,
        title: 'Musk is no longer the CEO of Twitter. Linda Yaccarino officially starts in role',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/adem-ay-Tk9m_HP4rgQ-768x512.jpg',
        category: 'BUSINESS'
      }, {
        id: 3,
        title: 'Deciding what to do when your employer changes the rules on remote work',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/jason-goodman-768x512.jpg',
        category: 'BUSINESS'
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/business/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_businessvue_type_script_lang_js_ = (businessvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/business/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(68)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_businessvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0a33be6e",
  "655748b8"
  
)

/* harmony default export */ var business = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/technology/index.vue?vue&type=template&id=36c3d6c2&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "technology"
  }, [_vm._ssrNode("<div class=\"head\" data-v-36c3d6c2>", "</div>", [_vm._ssrNode("<div class=\"container\" data-v-36c3d6c2>", "</div>", [_vm._ssrNode("<div class=\"row tab-business align-items-center\" data-v-36c3d6c2>", "</div>", [_vm._ssrNode("<div class=\"col\" data-v-36c3d6c2>", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "#"
    }
  }, [_c('h2', {
    staticClass: "bus link"
  }, [_vm._v("TECHNOLOGY")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col\" data-v-36c3d6c2>", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "#"
    }
  }, [_c('h2', {
    staticClass: "sub-bus link"
  }, [_vm._v("SUB CAT 1")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col\" data-v-36c3d6c2>", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "#"
    }
  }, [_c('h2', {
    staticClass: "sub-bus link"
  }, [_vm._v("SUB CAT 2")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col\" data-v-36c3d6c2>", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "#"
    }
  }, [_c('h2', {
    staticClass: "sub-bus link"
  }, [_vm._v("SUB CAT 3")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col\" data-v-36c3d6c2>", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "#"
    }
  }, [_c('h2', {
    staticClass: "sub-bus link"
  }, [_vm._v("SUB CAT 4")])])], 1)], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"main-content\" data-v-36c3d6c2>", "</div>", [_c('Maincontent'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"list-post\" data-v-36c3d6c2>", "</div>", [_vm._ssrNode("<ul class=\"post-tag\" data-v-36c3d6c2>", "</ul>", _vm._l(_vm.posts, function (post) {
    return _vm._ssrNode("<li class=\"post\" data-v-36c3d6c2>", "</li>", [_c('PostCatagory', {
      attrs: {
        "image": post.image,
        "category": post.category,
        "title": post.title
      }
    })], 1);
  }), 0)])], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/technology/index.vue?vue&type=template&id=36c3d6c2&scoped=true&

// EXTERNAL MODULE: ./components/technology/Maincontent.vue + 4 modules
var Maincontent = __webpack_require__(59);

// EXTERNAL MODULE: ./components/post/PostCatagory.vue + 4 modules
var PostCatagory = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/technology/index.vue?vue&type=script&lang=js&


/* harmony default export */ var technologyvue_type_script_lang_js_ = ({
  data() {
    return {
      posts: [{
        id: 1,
        title: 'Your iPhone and Other Apple Products Are About to Get Easier to Use',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/iphone-blue_7RJZFHBGPT-768x512.jpg',
        category: 'TECHNOLOGY'
      }, {
        id: 2,
        title: 'iPhone 15: All the Major Rumors on Apple’s Next iPhone',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/browsing-smartphone_48PPXWVY5M-768x512.jpg',
        category: 'TECHNOLOGY'
      }, {
        id: 3,
        title: 'Apple MacBook Air 15-Inch Review: The Best Portable Big Display Choice',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/mac-laptop_QUQXLZK1WL-768x512.jpg',
        category: 'TECHNOLOGY'
      }]
    };
  },
  components: {
    Maincontent: Maincontent["default"],
    PostCatagory: PostCatagory["default"]
  }
});
// CONCATENATED MODULE: ./components/technology/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_technologyvue_type_script_lang_js_ = (technologyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/technology/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(70)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_technologyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "36c3d6c2",
  "77f2b470"
  
)

/* harmony default export */ var technology = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {PostCatagory: __webpack_require__(32).default})


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/lifestyle/index.vue?vue&type=template&id=010ffebe&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "business"
  }, [_vm._ssrNode("<div class=\"head\" data-v-010ffebe>", "</div>", [_vm._ssrNode("<div class=\"container\" data-v-010ffebe>", "</div>", [_vm._ssrNode("<div class=\"row tab-business align-items-center\" data-v-010ffebe>", "</div>", [_vm._ssrNode("<div class=\"col\" data-v-010ffebe>", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "#"
    }
  }, [_c('h2', {
    staticClass: "bus link"
  }, [_vm._v("LIFESTYLE")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col\" data-v-010ffebe>", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "#"
    }
  }, [_c('h2', {
    staticClass: "sub-bus link"
  }, [_vm._v("SUB CAT 1")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col\" data-v-010ffebe>", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "#"
    }
  }, [_c('h2', {
    staticClass: "sub-bus link"
  }, [_vm._v("SUB CAT 2")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col\" data-v-010ffebe>", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "#"
    }
  }, [_c('h2', {
    staticClass: "sub-bus link"
  }, [_vm._v("SUB CAT 3")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col\" data-v-010ffebe>", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "#"
    }
  }, [_c('h2', {
    staticClass: "sub-bus link"
  }, [_vm._v("SUB CAT 4")])])], 1)], 2)])]), _vm._ssrNode(" <div class=\"posts\" data-v-010ffebe><div class=\"container\" data-v-010ffebe><div class=\"row\" data-v-010ffebe>" + _vm._ssrList(_vm.posts, function (post) {
    return "<div class=\"col-md-4 custom-col\" data-v-010ffebe><div class=\"post\" data-v-010ffebe><img" + _vm._ssrAttr("src", post.image) + " alt=\"Post Image\" data-v-010ffebe> <div class=\"info\" data-v-010ffebe><div class=\"post-category\" data-v-010ffebe><p data-v-010ffebe>" + _vm._ssrEscape(_vm._s(post.category)) + "</p></div> <h2 class=\"post-title\" data-v-010ffebe>" + _vm._ssrEscape(_vm._s(post.title)) + "</h2></div></div></div>";
  }) + "</div></div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/lifestyle/index.vue?vue&type=template&id=010ffebe&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/lifestyle/index.vue?vue&type=script&lang=js&
/* harmony default export */ var lifestylevue_type_script_lang_js_ = ({
  data() {
    return {
      posts: [{
        id: 1,
        title: 'TikTok’s latest trending beauty filter returns users to their younger selves',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/girl-768x512.jpg',
        category: 'LIFESTYLE'
      }, {
        id: 2,
        title: 'Gucci Visions: An exhibit that takes you on a futuristic journey into the past',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/gucci-768x512.jpg',
        category: 'LIFESTYLE'
      }, {
        id: 3,
        title: 'Omega says ex-employees responsible for $3 million fake Speedmaster watch',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/omega-768x512.jpg',
        category: 'LIFESTYLE'
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/lifestyle/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_lifestylevue_type_script_lang_js_ = (lifestylevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/lifestyle/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(72)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_lifestylevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "010ffebe",
  "1b03ffed"
  
)

/* harmony default export */ var lifestyle = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/socialmedia/index.vue?vue&type=template&id=693d5af8&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "business"
  }, [_vm._ssrNode("<div class=\"head\" data-v-693d5af8>", "</div>", [_vm._ssrNode("<div class=\"container\" data-v-693d5af8>", "</div>", [_vm._ssrNode("<div class=\"row tab-business align-items-center\" data-v-693d5af8>", "</div>", [_vm._ssrNode("<div class=\"col\" data-v-693d5af8>", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "#"
    }
  }, [_c('h2', {
    staticClass: "bus link"
  }, [_vm._v("SOCIAL MEDIA")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col\" data-v-693d5af8>", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "#"
    }
  }, [_c('h2', {
    staticClass: "sub-bus link"
  }, [_vm._v("SUB CAT 1")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col\" data-v-693d5af8>", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "#"
    }
  }, [_c('h2', {
    staticClass: "sub-bus link"
  }, [_vm._v("SUB CAT 2")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col\" data-v-693d5af8>", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "#"
    }
  }, [_c('h2', {
    staticClass: "sub-bus link"
  }, [_vm._v("SUB CAT 3")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col\" data-v-693d5af8>", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "#"
    }
  }, [_c('h2', {
    staticClass: "sub-bus link"
  }, [_vm._v("SUB CAT 4")])])], 1)], 2)])]), _vm._ssrNode(" <div class=\"posts\" data-v-693d5af8><div class=\"container\" data-v-693d5af8><div class=\"row\" data-v-693d5af8>" + _vm._ssrList(_vm.posts, function (post) {
    return "<div class=\"col-md-4 custom-col\" data-v-693d5af8><div class=\"post\" data-v-693d5af8><img" + _vm._ssrAttr("src", post.image) + " alt=\"Post Image\" data-v-693d5af8> <div class=\"info\" data-v-693d5af8><div class=\"post-category\" data-v-693d5af8><p data-v-693d5af8>" + _vm._ssrEscape(_vm._s(post.category)) + "</p></div> <h2 class=\"post-title\" data-v-693d5af8>" + _vm._ssrEscape(_vm._s(post.title)) + "</h2></div></div></div>";
  }) + "</div></div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/socialmedia/index.vue?vue&type=template&id=693d5af8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/socialmedia/index.vue?vue&type=script&lang=js&
/* harmony default export */ var socialmediavue_type_script_lang_js_ = ({
  data() {
    return {
      posts: [{
        id: 1,
        title: 'Georgia man sues Facebook over losing account access and wins',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/facebook-600x400.jpg',
        category: 'SOCIAL MEDIA'
      }, {
        id: 2,
        title: 'YouTube will stop removing false claims about 2020 election fraud',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/youtube-app-768x512.jpg',
        category: 'SOCIAL MEDIA'
      }, {
        id: 3,
        title: 'Some Twitter users say they’ve been locked out of their accounts',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/twitter-768x513.jpeg',
        category: 'SOCIAL MEDIA'
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/socialmedia/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_socialmediavue_type_script_lang_js_ = (socialmediavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/socialmedia/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(74)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_socialmediavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "693d5af8",
  "26b9834f"
  
)

/* harmony default export */ var socialmedia = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/service/index.vue?vue&type=template&id=ac4ce234&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container"
  }, [_vm._ssrNode("<div class=\"service row head-tab g-3\" data-v-ac4ce234>", "</div>", [_vm._ssrNode("<div class=\"col tab\" data-v-ac4ce234>", "</div>", [_vm._ssrNode("<h6 class=\"title\" data-v-ac4ce234> MARKETING</h6> "), _vm._ssrNode("<div class=\"postcart\" data-v-ac4ce234>", "</div>", [_c('Typetag', {
    attrs: {
      "image": "https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/apple-768x513.jpg",
      "title": "The 6 biggest iOS 17 features that Apple stole from Android Digital Trends"
    }
  })], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col tab\" data-v-ac4ce234>", "</div>", [_vm._ssrNode("<h6 class=\"title\" data-v-ac4ce234>WEB DESIGN</h6> "), _vm._ssrNode("<div class=\"postcart\" data-v-ac4ce234>", "</div>", [_c('Typetag', {
    attrs: {
      "image": "https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/laptop-work_8Q2MXCDVMY-768x512.jpg",
      "title": "I’ve Been Using Google’s New AI Search. Here’s What I’ve Learned"
    }
  })], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col tab\" data-v-ac4ce234>", "</div>", [_vm._ssrNode("<h6 class=\"title\" data-v-ac4ce234>SEO</h6> "), _vm._ssrNode("<div class=\"postcart\" data-v-ac4ce234>", "</div>", [_c('Typetag', {
    attrs: {
      "image": "https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/girl-768x512.jpg",
      "title": "TikTok’s latest trending beauty filter returns users to their younger selves"
    }
  })], 1)], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/service/index.vue?vue&type=template&id=ac4ce234&scoped=true&

// EXTERNAL MODULE: ./components/typetag/index.vue + 4 modules
var typetag = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/service/index.vue?vue&type=script&lang=js&

/* harmony default export */ var servicevue_type_script_lang_js_ = ({
  components: {
    Typetag: typetag["default"]
  }
});
// CONCATENATED MODULE: ./components/service/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_servicevue_type_script_lang_js_ = (servicevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/service/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(76)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_servicevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ac4ce234",
  "29294ced"
  
)

/* harmony default export */ var service = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Typetag: __webpack_require__(26).default})


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/travel/index.vue?vue&type=template&id=637531a8&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "business"
  }, [_vm._ssrNode("<div class=\"head\" data-v-637531a8>", "</div>", [_vm._ssrNode("<div class=\"container\" style=\"margin: 0px;margin-top: 50px\" data-v-637531a8>", "</div>", [_vm._ssrNode("<div class=\"row tab-business align-items-center\" data-v-637531a8>", "</div>", [_vm._ssrNode("<div class=\"col\" data-v-637531a8>", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "#"
    }
  }, [_c('h2', {
    staticClass: "bus link"
  }, [_vm._v("TRAVEL")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col\" data-v-637531a8>", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "#"
    }
  }, [_c('h2', {
    staticClass: "sub-bus link"
  }, [_vm._v("SUB CAT 1")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col\" data-v-637531a8>", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "#"
    }
  }, [_c('h2', {
    staticClass: "sub-bus link"
  }, [_vm._v("SUB CAT 2")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col\" data-v-637531a8>", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "#"
    }
  }, [_c('h2', {
    staticClass: "sub-bus link"
  }, [_vm._v("SUB CAT 3")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col\" data-v-637531a8>", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "#"
    }
  }, [_c('h2', {
    staticClass: "sub-bus link"
  }, [_vm._v("SUB CAT 4")])])], 1)], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"posts\" data-v-637531a8>", "</div>", [_vm._ssrNode("<div class=\"container\" style=\"padding: 0px; max-width: 1240px;\" data-v-637531a8>", "</div>", [_vm._ssrNode("<div class=\"row\" style=\"gap:0px\" data-v-637531a8>", "</div>", _vm._l(_vm.posts, function (post) {
    return _vm._ssrNode("<div class=\"col-md-3 custom-col\" data-v-637531a8>", "</div>", [_c('Typepost', {
      staticClass: "type-post",
      attrs: {
        "image": post.image,
        "category": post.category,
        "title": post.title
      }
    })], 1);
  }), 0)])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/travel/index.vue?vue&type=template&id=637531a8&scoped=true&

// EXTERNAL MODULE: ./components/typepost/index.vue + 4 modules
var typepost = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/travel/index.vue?vue&type=script&lang=js&

/* harmony default export */ var travelvue_type_script_lang_js_ = ({
  data() {
    return {
      posts: [{
        id: 1,
        title: 'World’s Best 25 Airlines for 2023 Revealed by Airline Ratings',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/airplane-travel_J5AQI42431-768x513.jpg',
        category: 'TRAVEL'
      }, {
        id: 2,
        title: 'The Italian beaches putting a daily cap on visitors this summer',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/beautiful-ocean_XLSPFYQGAK-768x512.jpg',
        category: 'TRAVEL'
      }, {
        id: 3,
        title: 'Venice authorities discover why canal turned fluorescent green',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/water-canal_HZ0FDEESSC-600x400.jpg',
        category: 'TRAVEL'
      }, {
        id: 4,
        title: 'Manhattanhenge: Where to see New York City’s special sunset show',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/sunrise-sunset_XSTO5645BM-768x512.jpg',
        category: 'TRAVEL'
      }]
    };
  },
  components: {
    Typepost: typepost["default"]
  }
});
// CONCATENATED MODULE: ./components/travel/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_travelvue_type_script_lang_js_ = (travelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/travel/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(78)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_travelvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "637531a8",
  "06e2cffe"
  
)

/* harmony default export */ var travel = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Typepost: __webpack_require__(27).default})


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/fooddrink/index.vue?vue&type=template&id=5ad539b8&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "food-drink"
  }, [_vm._ssrNode("<div class=\"head\" data-v-5ad539b8>", "</div>", [_vm._ssrNode("<div class=\"container\" style=\"margin: 0px\" data-v-5ad539b8>", "</div>", [_vm._ssrNode("<div class=\"row tab-business align-items-center\" data-v-5ad539b8>", "</div>", [_vm._ssrNode("<div class=\"col\" data-v-5ad539b8>", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "#"
    }
  }, [_c('h2', {
    staticClass: "bus link",
    staticStyle: {
      "width": "108.53px"
    }
  }, [_vm._v("FOOD & DRINK")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col\" data-v-5ad539b8>", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "#"
    }
  }, [_c('h2', {
    staticClass: "sub-bus link"
  }, [_vm._v("SUB CAT 1")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col\" data-v-5ad539b8>", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "#"
    }
  }, [_c('h2', {
    staticClass: "sub-bus link"
  }, [_vm._v("SUB CAT 2")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col\" data-v-5ad539b8>", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "#"
    }
  }, [_c('h2', {
    staticClass: "sub-bus link"
  }, [_vm._v("SUB CAT 3")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col\" data-v-5ad539b8>", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "#"
    }
  }, [_c('h2', {
    staticClass: "sub-bus link"
  }, [_vm._v("SUB CAT 4")])])], 1)], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"posts\" data-v-5ad539b8>", "</div>", [_vm._ssrNode("<div class=\"container\" style=\"padding: 0px; max-width: 1240px;\" data-v-5ad539b8>", "</div>", [_vm._ssrNode("<div class=\"row\" style=\"gap:0px\" data-v-5ad539b8>", "</div>", _vm._l(_vm.posts, function (post) {
    return _vm._ssrNode("<div class=\"col-md-3 custom-col\" data-v-5ad539b8>", "</div>", [_c('Typepost', {
      staticClass: "type-post",
      attrs: {
        "image": post.image,
        "category": post.category,
        "title": post.title
      }
    })], 1);
  }), 0)])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/fooddrink/index.vue?vue&type=template&id=5ad539b8&scoped=true&

// EXTERNAL MODULE: ./components/typepost/index.vue + 4 modules
var typepost = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/fooddrink/index.vue?vue&type=script&lang=js&

/* harmony default export */ var fooddrinkvue_type_script_lang_js_ = ({
  data() {
    return {
      posts: [{
        id: 1,
        title: 'The German couple who moved to Italy and opened a pizza restaurant',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/pizza-slice_OM0PRGTSEV-768x512.jpg',
        category: 'FOOD'
      }, {
        id: 2,
        title: 'Tokyo ramen shop bans customers from using their phones while eating',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/noodles-cooking_30DIV2QY3M-600x400.jpg',
        category: 'FOOD'
      }, {
        id: 3,
        title: 'Best rice dishes: 20 delicious specialties from around the world',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/paella-rice_T3JTA2VN26-768x512.jpg',
        category: 'FOOD'
      }, {
        id: 4,
        title: 'This savory Mexican dish made with vanilla is a first for Eva Longoria',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/couple-food_20HXQ0Y5YI-768x512.jpg',
        category: 'FOOD'
      }]
    };
  },
  components: {
    Typepost: typepost["default"]
  }
});
// CONCATENATED MODULE: ./components/fooddrink/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_fooddrinkvue_type_script_lang_js_ = (fooddrinkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/fooddrink/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(80)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_fooddrinkvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5ad539b8",
  "75d03872"
  
)

/* harmony default export */ var fooddrink = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Typepost: __webpack_require__(27).default})


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(107);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7fe99cbc", content, true, context)
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(109);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("44941c24", content, true, context)
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(111);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("12b1e3d8", content, true, context)
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(113);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("b878fd50", content, true, context)
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(115);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("0d995808", content, true, context)
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(117);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1e4d6ca2", content, true, context)
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(119);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("5e3c549e", content, true, context)
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(121);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6e02170d", content, true, context)
};

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/follow/Advertisting.vue?vue&type=template&id=3e842bf8&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "advertisting"
  }, [_vm._ssrNode("<div class=\"adver\" style=\"margin-top: 10px;\" data-v-3e842bf8><strong data-v-3e842bf8>ADVERTISTING</strong></div> <div class=\"container\" data-v-3e842bf8><div class=\"row\" data-v-3e842bf8><div class=\"col-md-12 list-post\" data-v-3e842bf8>" + _vm._ssrList(_vm.posts, function (post) {
    return "<div class=\"post\" data-v-3e842bf8><img" + _vm._ssrAttr("src", post.image) + " alt=\"Post Image\" class=\"post-image\" data-v-3e842bf8> <h2 class=\"post-title\" data-v-3e842bf8>" + _vm._ssrEscape(_vm._s(post.title)) + "</h2></div>";
  }) + "</div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/follow/Advertisting.vue?vue&type=template&id=3e842bf8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/follow/Advertisting.vue?vue&type=script&lang=js&
/* harmony default export */ var Advertistingvue_type_script_lang_js_ = ({
  data() {
    return {
      posts: [{
        id: 1,
        title: 'Reddit communities go private to protest pricing plan for apps',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/social.jpg'
      }, {
        id: 2,
        title: '9 Ways to Engage Your Customers With Instagram Highlights',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/ins.jpg'
      }, {
        id: 3,
        title: 'The 10-Step Guide to Creating a Profitable AdWords Campaign',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/google.jpg'
      }, {
        id: 4,
        title: '',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/themes/visualnews-pro/assets/images/300x250.png'
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/follow/Advertisting.vue?vue&type=script&lang=js&
 /* harmony default export */ var follow_Advertistingvue_type_script_lang_js_ = (Advertistingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/follow/Advertisting.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(64)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  follow_Advertistingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3e842bf8",
  "1638364e"
  
)

/* harmony default export */ var Advertisting = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/follow/Fashion.vue?vue&type=template&id=3539b0a0&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "fashion-tag"
  }, [_vm._ssrNode("<div class=\"fashion\" style=\"margin-top: 10px;\" data-v-3539b0a0><strong data-v-3539b0a0>FASHION</strong></div> <div class=\"list-post\" data-v-3539b0a0><ul class=\"post-tag\" data-v-3539b0a0>" + _vm._ssrList(_vm.posts, function (post) {
    return "<li class=\"post\" data-v-3539b0a0><img" + _vm._ssrAttr("src", post.image) + " alt=\"Post Image\" data-v-3539b0a0> <div class=\"info\" data-v-3539b0a0><div class=\"post-category\" data-v-3539b0a0><p data-v-3539b0a0>" + _vm._ssrEscape(_vm._s(post.category)) + "</p></div> <h2 class=\"post-title\" data-v-3539b0a0>" + _vm._ssrEscape(_vm._s(post.title)) + "</h2></div></li>";
  }) + "</ul></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/follow/Fashion.vue?vue&type=template&id=3539b0a0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/follow/Fashion.vue?vue&type=script&lang=js&
/* harmony default export */ var Fashionvue_type_script_lang_js_ = ({
  data() {
    return {
      posts: [{
        id: 1,
        title: 'The best smart glasses to buy now, according to experts',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/glashes.jpg',
        category: 'FASHION'
      }, {
        id: 2,
        title: 'The best wrinkle-free travel clothes to pack for your summer',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/shirt.jpg',
        category: 'FASHION'
      }, {
        id: 3,
        title: 'The 23 best men’s shorts for the summer, according to style experts',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/man-768x512.jpg',
        category: 'FASHION'
      }, {
        id: 4,
        title: 'Adidas vs. Hoka: We put these favorite running shoes to the test',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/adidas-768x512.jpg',
        category: 'FASHION'
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/follow/Fashion.vue?vue&type=script&lang=js&
 /* harmony default export */ var follow_Fashionvue_type_script_lang_js_ = (Fashionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/follow/Fashion.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(66)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  follow_Fashionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3539b0a0",
  "3c0ff24a"
  
)

/* harmony default export */ var Fashion = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_id_e675030c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_id_e675030c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_id_e675030c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_id_e675030c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_id_e675030c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media (min-width:1200px){.left-nav[data-v-e675030c]{display:flex}.menu-icon[data-v-e675030c]{display:none}.top-bar[data-v-e675030c]{background:linear-gradient(90deg,#0797ea,#0797ea,#a252cd 90%);height:36.8px;transition:background-color .5s}.navbar[data-v-e675030c]{align-items:center;display:flex;justify-content:space-between;margin:0 139.6px}.container-fluid[data-v-e675030c],.navbar[data-v-e675030c]{padding:0}.nav-item[data-v-e675030c]{color:#f9f9f9;font-size:small;margin-right:20px}.nav-item[data-v-e675030c]:hover{color:#909;-webkit-text-decoration:none;text-decoration:none}.dropdown-brand[data-v-e675030c]{background-color:#f9f9f9;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);display:none;font-size:15px;list-style:none;min-width:200px;position:absolute}.nav-menu:hover .dropdown-brand[data-v-e675030c]{display:block;z-index:1}.dropdown-brand>li>a[data-v-e675030c]:hover{color:#909;-webkit-text-decoration:none;text-decoration:none}.icon[data-v-e675030c]{padding:8px 0}}@media (max-width:760px){.top-bar[data-v-e675030c]{background:linear-gradient(90deg,#256fc9,#7464a2 30%);height:36.8px;transition:background-color .5s;width:100%}.left-nav[data-v-e675030c]{display:none}.left-nav-p[data-v-e675030c]{background-color:#fff;display:flex;flex-direction:column;height:300px;position:relative;width:50%;z-index:1000}.navbar[data-v-e675030c]{margin:0;z-index:1}.container-fluid[data-v-e675030c]{padding:0}.nav-item[data-v-e675030c]{background-color:none;font-size:small;margin-right:20px}.dropdown-brand[data-v-e675030c]{background-color:#f9f9f9;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);display:none;font-size:15px;list-style:none;min-width:200px;position:absolute}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sitestart_vue_vue_type_style_index_0_id_32fa99c0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sitestart_vue_vue_type_style_index_0_id_32fa99c0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sitestart_vue_vue_type_style_index_0_id_32fa99c0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sitestart_vue_vue_type_style_index_0_id_32fa99c0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sitestart_vue_vue_type_style_index_0_id_32fa99c0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media (max-width:760px){.au-center[data-v-32fa99c0]{margin-top:10px}.au-left[data-v-32fa99c0],.au-right[data-v-32fa99c0],.wp[data-v-32fa99c0]{display:none}.site-start[data-v-32fa99c0]{border-bottom:2px solid #fbfbfb;height:40px;margin-top:0}.row[data-v-32fa99c0]{align-items:center;margin-bottom:15px}}@media (min-width:1200px){.container[data-v-32fa99c0]{margin:0 139.6px;padding:0}.row[data-v-32fa99c0]{margin-left:30px}.site-start[data-v-32fa99c0]{padding-top:30px}.au-center[data-v-32fa99c0]{margin-left:90px}.vis-pro[data-v-32fa99c0]{font-size:25px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Primarynav_vue_vue_type_style_index_0_id_711be898_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Primarynav_vue_vue_type_style_index_0_id_711be898_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Primarynav_vue_vue_type_style_index_0_id_711be898_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Primarynav_vue_vue_type_style_index_0_id_711be898_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Primarynav_vue_vue_type_style_index_0_id_711be898_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media (max-width:760px){.menu[data-v-711be898]{display:block}.primary-menu[data-v-711be898]{align-items:center}.tab-main[data-v-711be898]{display:none}.tab-main-p[data-v-711be898]{background-color:#fff;display:flex;flex-direction:column;height:500px;position:relative;width:700px;z-index:100000}.navbar[data-v-711be898]{margin-right:5px;margin-top:5px;padding:0}.search[data-v-711be898]{position:relative}.search-form[data-v-711be898]{background-color:#fff;border:1px solid #ccc;box-shadow:0 2px 4px rgba(0,0,0,.1);display:none;height:70px;margin-top:12px;padding:10px;position:absolute;right:0;top:100%;width:305px}}@media (min-width:1200px){.primary-menu[data-v-711be898]{margin-bottom:15px}.menu[data-v-711be898],.menu-icon[data-v-711be898]{display:none}.search[data-v-711be898]{position:relative}.search-form[data-v-711be898]{background-color:#fff;border:1px solid #ccc;box-shadow:0 2px 4px rgba(0,0,0,.1);display:none;height:70px;margin-top:12px;padding:10px;position:absolute;right:0;top:100%;width:305px}.navbar[data-v-711be898]{margin:0 139.6px;padding:0}.tab-main[data-v-711be898]{align-items:center;display:flex;justify-content:space-between}.left-nav[data-v-711be898]{padding:10px}.nav-item[data-v-711be898]{color:#f9f9f9;font-weight:bolder;height:20.8px;margin-right:20px}.nav-item[data-v-711be898]:hover{color:#909;-webkit-text-decoration:none;text-decoration:none}.dropdown-brand[data-v-711be898]{background-color:#f9f9f9;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);display:none;font-size:14px;list-style:none;min-width:200px;position:absolute}.nav-menu:hover .dropdown-brand[data-v-711be898]{display:block}.dropdown-brand>li>a[data-v-711be898]:hover{color:#909;-webkit-text-decoration:none;text-decoration:none}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_169a2ad4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_169a2ad4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_169a2ad4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_169a2ad4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_169a2ad4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media (max-width:760px){.site-start{flex:1}.header-last{align-items:center;display:flex;flex-direction:row;justify-content:space-between}.icon{display:flex;list-style:none;margin:0;padding:0}.icon li{color:#f9f9f9;margin-left:10px}.site-start{margin-top:10px}}@media (min-width:1200px){.header,.header-last{display:contents}.sticky-nav{background-color:#fff;box-shadow:0 5px 10px -5px rgba(62,60,60,.2);height:50.8px;padding-top:15px;position:sticky;top:0;z-index:100}.header{border-bottom:2px solid #fbfbfb;box-shadow:0 0 5px hsla(0,3%,70%,.5);margin-bottom:5px}.navbar{justify-content:space-between}.navbar,.right-nav{align-items:center;display:flex}.right-nav{margin-left:auto}.icon{display:flex;list-style:none;margin:0;padding:0}.icon li{color:#f9f9f9;margin-left:10px}.site-start{margin-top:10px}.au-left .author-image{float:right;margin-left:20px}.au-left .author-image,.au-right .author-image{border-radius:50%;height:80px;overflow:hidden;width:80px}.au-right .author-image{float:left;margin-right:20px}.author-image{border-radius:50%;float:right;height:80px;margin-left:20px;width:80px}.author-content,.author-image{overflow:hidden}.primary-nav .primary-menu .navbar{background:none}.primary-nav .primary-menu .nav-item{color:#170808;font-size:13px;font-weight:bolder}.nav-item:hover{color:#2c182c;-webkit-text-decoration:none;text-decoration:none}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_categorynamefirst_vue_vue_type_style_index_0_id_8b37f3b0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_categorynamefirst_vue_vue_type_style_index_0_id_8b37f3b0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_categorynamefirst_vue_vue_type_style_index_0_id_8b37f3b0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_categorynamefirst_vue_vue_type_style_index_0_id_8b37f3b0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_categorynamefirst_vue_vue_type_style_index_0_id_8b37f3b0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".main-content[data-v-8b37f3b0]{display:flex;margin-right:4%;margin-top:25px}.list-post[data-v-8b37f3b0]{align-items:flex-start;display:flex;flex:1;gap:20px;justify-content:flex-start;width:345px}.post-tag[data-v-8b37f3b0]{list-style:none;margin:0;padding:0}.post[data-v-8b37f3b0]{display:flex;flex-direction:row;width:286px}.postcategory[data-v-8b37f3b0]{color:#fff}.nuxt-link[data-v-8b37f3b0]{color:#000;-webkit-text-decoration:none;text-decoration:none}.poster[data-v-8b37f3b0]{color:#fff;display:flex;flex-direction:row;margin-bottom:20px;width:345px}.poster>img[data-v-8b37f3b0]{align-self:flex-start;height:60px;max-width:90px}.info[data-v-8b37f3b0]{display:flex;flex-direction:column;flex-grow:1;margin-left:5px}.category[data-v-8b37f3b0]{align-self:flex-start;color:#cdc6c6;font-size:.8em;margin:0 10px 5px 0;text-transform:uppercase}.title[data-v-8b37f3b0]{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;font-size:13px;font-weight:700;margin:0;overflow:hidden;text-overflow:ellipsis;width:186px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_categorynamesecond_vue_vue_type_style_index_0_id_d6cd7728_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(101);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_categorynamesecond_vue_vue_type_style_index_0_id_d6cd7728_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_categorynamesecond_vue_vue_type_style_index_0_id_d6cd7728_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_categorynamesecond_vue_vue_type_style_index_0_id_d6cd7728_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_categorynamesecond_vue_vue_type_style_index_0_id_d6cd7728_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".main-content[data-v-d6cd7728]{display:flex;margin-right:4%;margin-top:25px}.list-post[data-v-d6cd7728]{align-items:flex-start;display:flex;flex:1;gap:20px;justify-content:flex-start;width:345px}.post-tag[data-v-d6cd7728]{list-style:none;margin:0;padding:0}.post[data-v-d6cd7728]{display:flex;flex-direction:row;width:286px}.postcategory[data-v-d6cd7728]{color:#fff}.nuxt-link[data-v-d6cd7728]{color:#000;-webkit-text-decoration:none;text-decoration:none}.poster[data-v-d6cd7728]{color:#fff;display:flex;flex-direction:row;margin-bottom:20px;width:345px}.poster>img[data-v-d6cd7728]{align-self:flex-start;height:60px;max-width:90px}.info[data-v-d6cd7728]{display:flex;flex-direction:column;flex-grow:1;margin-left:5px}.category[data-v-d6cd7728]{align-self:flex-start;color:#cdc6c6;font-size:.8em;margin:0 0 5px;text-transform:uppercase}.title[data-v-d6cd7728]{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;font-size:13px;font-weight:700;margin:0;overflow:hidden;text-overflow:ellipsis;width:186px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_dae2ab6a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(102);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_dae2ab6a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_dae2ab6a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_dae2ab6a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_dae2ab6a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media (min-width:1200px){.ab[data-v-dae2ab6a]{font-weight:bolder}.row[data-v-dae2ab6a]{width:1240px}.col[data-v-dae2ab6a]{margin-right:25px;width:286px}.footer[data-v-dae2ab6a]{background-color:#000;color:#fff;padding-bottom:25px}.list-path[data-v-dae2ab6a]{list-style:none;padding-left:0}.path[data-v-dae2ab6a]{color:#fff}.path[data-v-dae2ab6a]:hover{-webkit-text-decoration:none;text-decoration:none}.about[data-v-dae2ab6a]{color:#fff}.icon[data-v-dae2ab6a]{margin-top:30px}.top-footer[data-v-dae2ab6a]{margin-bottom:45px;padding-top:50px}}@media (max-width:760px){.icon[data-v-dae2ab6a]{margin:30px 0}.footer[data-v-dae2ab6a]{background-color:#000;color:#fff;margin-top:20px;padding-bottom:25px}.list-path[data-v-dae2ab6a]{list-style:none;padding-left:0}.path[data-v-dae2ab6a]{color:#fff}.path[data-v-dae2ab6a]:hover{-webkit-text-decoration:none;text-decoration:none}.about[data-v-dae2ab6a]{color:#fff}.icon[data-v-dae2ab6a]{margin-top:30px}.top-footer[data-v-dae2ab6a]{margin-bottom:45px;padding-top:50px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6560955c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6560955c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6560955c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6560955c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6560955c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media (min-width:1200px){.primary-content[data-v-6560955c]{display:flex}.left-page[data-v-6560955c]{flex:1}.content-wrapper[data-v-6560955c]{display:flex;margin:0 139.6px}.content[data-v-6560955c]{flex:7.5}.follow[data-v-6560955c]{flex:2.5}.service[data-v-6560955c]{flex-direction:column}}@media (max-width:760px){.layout[data-v-6560955c]{flex-direction:column;width:100%}.primary-content[data-v-6560955c],.service[data-v-6560955c]{margin:0 5px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=6560955c&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "layout"
  }, [_c('Header'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"primary-content\" data-v-6560955c>", "</div>", [_vm._ssrNode("<div class=\"content-wrapper\" data-v-6560955c>", "</div>", [_vm._ssrNode("<div class=\"content\" data-v-6560955c>", "</div>", [_c('Content'), _vm._ssrNode(" "), _c('Business'), _vm._ssrNode(" "), _c('Technology'), _vm._ssrNode(" "), _c('Lifestyle'), _vm._ssrNode(" "), _c('Socialmedia')], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"follow\" data-v-6560955c>", "</div>", [_c('Follow')], 1)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"service\" data-v-6560955c>", "</div>", [_c('Service'), _vm._ssrNode(" "), _c('Travel'), _vm._ssrNode(" "), _c('Fooddrink')], 2), _vm._ssrNode(" "), _c('Footer', {
    staticStyle: {
      "margin-top": "50px"
    }
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=6560955c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layout/Header/index.vue?vue&type=template&id=169a2ad4&
var Headervue_type_template_id_169a2ad4_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "content head",
    staticStyle: {
      "display": "contents"
    }
  }, [_vm._ssrNode("<div class=\"header\" style=\"display: contents;\">", "</div>", [_c(_setup.Topbar), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"header-last\">", "</div>", [_c(_setup.Sitestart, {
    staticClass: "site-start"
  }), _vm._ssrNode(" "), _c(_setup.Primarynav, {
    staticClass: "sticky-nav"
  })], 2)], 2)]);
};
var Headervue_type_template_id_169a2ad4_staticRenderFns = [];

// CONCATENATED MODULE: ./layout/Header/index.vue?vue&type=template&id=169a2ad4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layout/Header/Topbar.vue?vue&type=template&id=e675030c&scoped=true&
var Topbarvue_type_template_id_e675030c_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', [_vm._ssrNode("<div class=\"top-bar\" data-v-e675030c>", "</div>", [_vm._ssrNode("<nav" + _vm._ssrClass(null, {
    'navbar': _vm.showleftnav,
    'navbar': !_vm.showleftnav
  }) + " data-v-e675030c>", "</nav>", [_vm._ssrNode("<div class=\"container-fluid\" data-v-e675030c>", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass(null, {
    'left-nav-p': _vm.showleftnav,
    'left-nav': !_vm.showleftnav
  }) + " data-v-e675030c><div class=\"x\"" + _vm._ssrStyle({
    "margin-bottom": "10px"
  }, {
    display: _vm.showleftnav ? 'block' : 'none'
  }, null) + " data-v-e675030c><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" viewBox=\"0 0 16 16\" class=\"bi bi-x\" data-v-e675030c><path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\" data-v-e675030c></path></svg></div> <a href=\"/\" class=\"nav-item\" data-v-e675030c>About</a> <a href=\"/\" class=\"nav-item\" data-v-e675030c>Contact</a> <div class=\"nav-item nav-menu\" data-v-e675030c><a href=\"/\" class=\"nav-item menu-item\" data-v-e675030c>Full width Page</a> <ul class=\"dropdown-brand\" data-v-e675030c><li data-v-e675030c><a href=\"#\" class=\"dropdown-item\" data-v-e675030c>Sub Menu 1</a></li> <li data-v-e675030c><a href=\"#\" class=\"dropdown-item\" data-v-e675030c>Sub menu 2</a></li> <li data-v-e675030c><a href=\"#\" class=\"dropdown-item\" data-v-e675030c>Sub Menu 3</a></li></ul></div> <a href=\"/\" class=\"nav-item menu-item\" data-v-e675030c>Submit Article</a> <a href=\"/\" class=\"nav-item menu-item\" data-v-e675030c>Buy Theme</a></div> <div class=\"nav-item menu-icon\" data-v-e675030c><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" viewBox=\"0 0 16 16\" class=\"bi bi-list\" data-v-e675030c><path fill-rule=\"evenodd\" d=\"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z\" data-v-e675030c></path></svg></div> "), _vm._ssrNode("<div class=\"right-nav d-flex logged\" data-v-e675030c>", "</div>", [_vm._ssrNode("<ul class=\"icon\" data-v-e675030c>", "</ul>", [_vm._ssrNode("<li data-v-e675030c>", "</li>", [_c('TwitterIcon')], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-e675030c>", "</li>", [_c('FacebookIcon')], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-e675030c>", "</li>", [_c('YoutubeIcon')], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-e675030c>", "</li>", [_c('LinkedinIcon')], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-e675030c>", "</li>", [_c('DribbbleIcon')], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-e675030c>", "</li>", [_c('InstagramIcon')], 1)], 2)])], 2)])])]);
};
var Topbarvue_type_template_id_e675030c_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./layout/Header/Topbar.vue?vue&type=template&id=e675030c&scoped=true&

// EXTERNAL MODULE: ./components/svgs/DribbbleIcon.vue + 4 modules
var DribbbleIcon = __webpack_require__(82);

// EXTERNAL MODULE: ./components/svgs/FacebookIcon.vue + 4 modules
var FacebookIcon = __webpack_require__(83);

// EXTERNAL MODULE: ./components/svgs/InstagramIcon.vue + 4 modules
var InstagramIcon = __webpack_require__(84);

// EXTERNAL MODULE: ./components/svgs/LinkedinIcon.vue + 4 modules
var LinkedinIcon = __webpack_require__(85);

// EXTERNAL MODULE: ./components/svgs/TwitterIcon.vue + 4 modules
var TwitterIcon = __webpack_require__(86);

// EXTERNAL MODULE: ./components/svgs/YoutubeIcon.vue + 4 modules
var YoutubeIcon = __webpack_require__(87);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layout/Header/Topbar.vue?vue&type=script&lang=js&






/* harmony default export */ var Topbarvue_type_script_lang_js_ = ({
  data() {
    return {
      showleftnav: false
    };
  },
  methods: {
    show() {
      this.showleftnav = true;
    },
    close() {
      this.showleftnav = false;
    }
  },
  components: {
    DribbbleIcon: DribbbleIcon["default"],
    FacebookIcon: FacebookIcon["default"],
    InstagramIcon: InstagramIcon["default"],
    LinkedinIcon: LinkedinIcon["default"],
    TwitterIcon: TwitterIcon["default"],
    YoutubeIcon: YoutubeIcon["default"]
  }
});
// CONCATENATED MODULE: ./layout/Header/Topbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var Header_Topbarvue_type_script_lang_js_ = (Topbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./layout/Header/Topbar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(106)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Header_Topbarvue_type_script_lang_js_,
  Topbarvue_type_template_id_e675030c_scoped_true_render,
  Topbarvue_type_template_id_e675030c_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "e675030c",
  "b846663a"
  
)

/* harmony default export */ var Topbar = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layout/Header/Sitestart.vue?vue&type=template&id=32fa99c0&scoped=true&
var Sitestartvue_type_template_id_32fa99c0_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "site-start"
  }, [_vm._ssrNode("<div class=\"container\" data-v-32fa99c0><div class=\"row\" data-v-32fa99c0><div class=\"col autho au-left\" style=\"float: left; margin-right: 50px;\" data-v-32fa99c0><div style=\"flex-basis: 30%;\" data-v-32fa99c0><div data-v-32fa99c0><div data-v-32fa99c0><figure class=\"author-image\" data-v-32fa99c0><img src=\"https://demo.wpenjoy.com/visualnews-pro/wp-content/themes/visualnews-pro/assets/images/avatar-1.png\" alt width=\"80\" height=\"80\" data-v-32fa99c0></figure> <div class=\"author-content\" data-v-32fa99c0><h2 style=\"font-style:normal;font-weight:600\" data-v-32fa99c0>John Doe</h2> <p style=\"font-size:12px\" data-v-32fa99c0>If you want to make your dreams come true, the first\n                                    thing you have to do is wake up.</p></div></div></div></div></div> <div class=\"col autho au-center\" data-v-32fa99c0><div data-v-32fa99c0><div data-v-32fa99c0><h2 class=\"vis-pro\" style=\"text-decoration: none;font-style:normal;font-weight:bold;text-transform:uppercase;\" data-v-32fa99c0><a href=\"#\" rel=\"home\" style=\"color:#0d0606 ;\" data-v-32fa99c0>VisualNews Pro</a></h2></div> <p class=\"wp\" style=\"color:#c91a1a ;font-size: 19px;margin-top:10px;margin-right:0px;margin-bottom:0px;margin-left:5px;text-transform:uppercase\" data-v-32fa99c0>\n                        WP Newspaper Theme</p></div></div> <div class=\"col autho au-right\" style=\"float: right;margin-left: 50px;\" data-v-32fa99c0><div data-v-32fa99c0><div data-v-32fa99c0><div data-v-32fa99c0><figure class=\"author-image\" data-v-32fa99c0><img decoding=\"async\" src=\"https://demo.wpenjoy.com/visualnews-pro/wp-content/themes/visualnews-pro/assets/images/avatar-2.png\" alt width=\"80\" height=\"80\" data-v-32fa99c0></figure> <div class=\"author-content\" data-v-32fa99c0><h2 style=\"font-style:normal;font-weight:600\" data-v-32fa99c0>Mary Taylor</h2> <p style=\"font-size:12px\" data-v-32fa99c0>You can have anything you want if you are willing to\n                                    give up everything you have.</p></div></div></div></div></div></div></div>")]);
};
var Sitestartvue_type_template_id_32fa99c0_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./layout/Header/Sitestart.vue?vue&type=template&id=32fa99c0&scoped=true&

// CONCATENATED MODULE: ./layout/Header/Sitestart.vue

var script = {}
function Sitestart_injectStyles (context) {
  
  var style0 = __webpack_require__(108)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Sitestart_component = Object(componentNormalizer["a" /* default */])(
  script,
  Sitestartvue_type_template_id_32fa99c0_scoped_true_render,
  Sitestartvue_type_template_id_32fa99c0_scoped_true_staticRenderFns,
  false,
  Sitestart_injectStyles,
  "32fa99c0",
  "a1ff3e74"
  
)

/* harmony default export */ var Sitestart = (Sitestart_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layout/Header/Primarynav.vue?vue&type=template&id=711be898&scoped=true&
var Primarynavvue_type_template_id_711be898_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "primary-nav"
  }, [_vm._ssrNode("<div class=\"primary-menu\" data-v-711be898><nav class=\"navbar\" data-v-711be898><div" + _vm._ssrClass(null, {
    ' tab-main-p': _vm.showPrimarynav,
    'tab-main': !_vm.showPrimarynav
  }) + " data-v-711be898><div class=\"x\"" + _vm._ssrStyle({
    "margin-bottom": "10px"
  }, {
    display: _vm.showPrimarynav ? 'block' : 'none'
  }, null) + " data-v-711be898><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" viewBox=\"0 0 16 16\" class=\"bi bi-x\" data-v-711be898><path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\" data-v-711be898></path></svg></div> <a href=\"/\" class=\"nav-item\" data-v-711be898>HOME</a> <a href=\"/\" class=\"nav-item\" data-v-711be898>ADVERTISING</a> <div class=\"nav-menu\" data-v-711be898><a href=\"/\" class=\"nav-item menu-item\" data-v-711be898>BLOGGING</a> <ul class=\"dropdown-brand\" data-v-711be898><li data-v-711be898><a href=\"#\" class=\"dropdown-item\" data-v-711be898>SUB MENU 1</a></li> <li data-v-711be898><a href=\"#\" class=\"dropdown-item\" data-v-711be898>SUB MENU 2</a></li> <li data-v-711be898><a href=\"#\" class=\"dropdown-item\" data-v-711be898>SUB MENU 3</a></li></ul></div> <a href=\"/\" class=\"nav-item menu-item\" data-v-711be898>BUSSINESS</a> <a href=\"/\" class=\"nav-item menu-item\" data-v-711be898>FASHION</a> <a href=\"/\" class=\"nav-item menu-item\" data-v-711be898>FOOD</a> <a href=\"/\" class=\"nav-item menu-item\" data-v-711be898>LIFESTYLE</a> <a href=\"/\" class=\"nav-item menu-item\" data-v-711be898>MARKETING</a> <a href=\"/\" class=\"nav-item menu-item\" data-v-711be898>SEO</a> <a href=\"/\" class=\"nav-item menu-item\" data-v-711be898>SOCIAL MEDIA</a> <a href=\"/\" class=\"nav-item menu-item\" data-v-711be898>TECH</a> <a href=\"/\" class=\"nav-item menu-item\" data-v-711be898>TRAVEL</a> <a href=\"/\" class=\"nav-item menu-item\" data-v-711be898>WEB DESIGN</a></div> <div class=\"menu\" data-v-711be898><div class=\"menu-icon\"" + _vm._ssrStyle(null, {
    display: !_vm.showPrimarynav ? 'block' : 'none'
  }, null) + " data-v-711be898><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" viewBox=\"0 0 16 16\" class=\"bi bi-list\" data-v-711be898><path fill-rule=\"evenodd\" d=\"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z\" data-v-711be898></path></svg></div></div> <div id=\"search-icon\" class=\"search\"" + _vm._ssrStyle({
    "margin-left": "30px"
  }, {
    display: _vm.showSearchicon & !_vm.showPrimarynav ? 'block' : 'none'
  }, null) + " data-v-711be898><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" viewBox=\"0 0 16 16\" class=\"bi bi-search\" data-v-711be898><path d=\"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z\" data-v-711be898></path></svg></div> <div id=\"search-icon\" class=\"search\"" + _vm._ssrStyle({
    "margin-left": "30px",
    "font-weight": "bold"
  }, {
    display: _vm.closeSearchicon ? 'block' : 'none'
  }, null) + " data-v-711be898><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" viewBox=\"0 0 16 16\" class=\"bi bi-x\" data-v-711be898><path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\" data-v-711be898></path></svg></div> <div id=\"search-form\" class=\"search-form\"" + _vm._ssrStyle(null, {
    display: _vm.showSearchForm ? 'block' : 'none'
  }, null) + " data-v-711be898><form action method data-v-711be898><input type=\"text\" name=\"query\" placeholder=\"Search for\" style=\"background-color:#f1f1f1;width: 188px;height: 36px;\" data-v-711be898> <button type=\"submit\" style=\"background-color: rgb(16, 164, 218); width: 82px;height:  36px;\" data-v-711be898>Search</button></form></div></nav></div>")]);
};
var Primarynavvue_type_template_id_711be898_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./layout/Header/Primarynav.vue?vue&type=template&id=711be898&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layout/Header/Primarynav.vue?vue&type=script&lang=js&
/* harmony default export */ var Primarynavvue_type_script_lang_js_ = ({
  data() {
    return {
      showSearchicon: true,
      closeSearchicon: false,
      showSearchForm: false,
      showPrimarynav: false
    };
  },
  methods: {
    showprimarynav() {
      this.showPrimarynav = true;
    },
    Search() {
      this.showSearchForm = true;
      this.closeSearchicon = true;
      this.showSearchicon = false;
    },
    closeSearch() {
      this.showSearchForm = false;
      this.closeSearchicon = false;
      this.showSearchicon = true;
    },
    close() {
      this.showPrimarynav = false;
    }
  }
});
// CONCATENATED MODULE: ./layout/Header/Primarynav.vue?vue&type=script&lang=js&
 /* harmony default export */ var Header_Primarynavvue_type_script_lang_js_ = (Primarynavvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layout/Header/Primarynav.vue



function Primarynav_injectStyles (context) {
  
  var style0 = __webpack_require__(110)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Primarynav_component = Object(componentNormalizer["a" /* default */])(
  Header_Primarynavvue_type_script_lang_js_,
  Primarynavvue_type_template_id_711be898_scoped_true_render,
  Primarynavvue_type_template_id_711be898_scoped_true_staticRenderFns,
  false,
  Primarynav_injectStyles,
  "711be898",
  "90694bb4"
  
)

/* harmony default export */ var Primarynav = (Primarynav_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layout/Header/index.vue?vue&type=script&setup=true&lang=js&



/* harmony default export */ var Headervue_type_script_setup_true_lang_js_ = ({
  __name: 'index',
  setup(__props) {
    return {
      __sfc: true,
      Topbar: Topbar,
      Sitestart: Sitestart,
      Primarynav: Primarynav
    };
  }
});
// CONCATENATED MODULE: ./layout/Header/index.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var layout_Headervue_type_script_setup_true_lang_js_ = (Headervue_type_script_setup_true_lang_js_); 
// CONCATENATED MODULE: ./layout/Header/index.vue



function Header_injectStyles (context) {
  
  var style0 = __webpack_require__(112)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Header_component = Object(componentNormalizer["a" /* default */])(
  layout_Headervue_type_script_setup_true_lang_js_,
  Headervue_type_template_id_169a2ad4_render,
  Headervue_type_template_id_169a2ad4_staticRenderFns,
  false,
  Header_injectStyles,
  null,
  "106e9e3d"
  
)

/* harmony default export */ var Header = (Header_component.exports);
// EXTERNAL MODULE: ./components/content/Content.vue + 4 modules
var Content = __webpack_require__(88);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/follow/index.vue?vue&type=template&id=ade97be0&
var followvue_type_template_id_ade97be0_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "follow-right-page"
  }, [_c('Follow'), _vm._ssrNode(" "), _c('Advertisting'), _vm._ssrNode(" "), _c('Fashion')], 2);
};
var followvue_type_template_id_ade97be0_staticRenderFns = [];

// CONCATENATED MODULE: ./components/follow/index.vue?vue&type=template&id=ade97be0&

// EXTERNAL MODULE: ./components/follow/Follow.vue + 4 modules
var Follow = __webpack_require__(58);

// EXTERNAL MODULE: ./components/follow/Advertisting.vue + 4 modules
var Advertisting = __webpack_require__(104);

// EXTERNAL MODULE: ./components/follow/Fashion.vue + 4 modules
var Fashion = __webpack_require__(105);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/follow/index.vue?vue&type=script&lang=js&



/* harmony default export */ var followvue_type_script_lang_js_ = ({
  components: {
    Follow: Follow["default"],
    Advertisting: Advertisting["default"],
    Fashion: Fashion["default"]
  }
});
// CONCATENATED MODULE: ./components/follow/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_followvue_type_script_lang_js_ = (followvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/follow/index.vue



function follow_injectStyles (context) {
  
  
}

/* normalize component */

var follow_component = Object(componentNormalizer["a" /* default */])(
  components_followvue_type_script_lang_js_,
  followvue_type_template_id_ade97be0_render,
  followvue_type_template_id_ade97be0_staticRenderFns,
  false,
  follow_injectStyles,
  null,
  "8cf80856"
  
)

/* harmony default export */ var follow = (follow_component.exports);

/* nuxt-component-imports */
installComponents(follow_component, {Follow: __webpack_require__(58).default})

// EXTERNAL MODULE: ./components/business/index.vue + 4 modules
var business = __webpack_require__(89);

// EXTERNAL MODULE: ./components/technology/index.vue + 4 modules
var technology = __webpack_require__(90);

// EXTERNAL MODULE: ./components/lifestyle/index.vue + 4 modules
var lifestyle = __webpack_require__(91);

// EXTERNAL MODULE: ./components/socialmedia/index.vue + 4 modules
var socialmedia = __webpack_require__(92);

// EXTERNAL MODULE: ./components/service/index.vue + 4 modules
var service = __webpack_require__(93);

// EXTERNAL MODULE: ./components/travel/index.vue + 4 modules
var travel = __webpack_require__(94);

// EXTERNAL MODULE: ./components/fooddrink/index.vue + 4 modules
var fooddrink = __webpack_require__(95);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layout/Footer/index.vue?vue&type=template&id=dae2ab6a&scoped=true&
var Footervue_type_template_id_dae2ab6a_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "footer"
  }, [_vm._ssrNode("<div class=\"top-footer\" data-v-dae2ab6a>", "</div>", [_vm._ssrNode("<div class=\"container\" data-v-dae2ab6a>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-dae2ab6a>", "</div>", [_vm._ssrNode("<div class=\"col\" data-v-dae2ab6a>", "</div>", [_vm._ssrNode("<h6 class=\"ab\" data-v-dae2ab6a>ABOUT US</h6> <div data-v-dae2ab6a><p style=\"margin-top: 20px; font-size: 13px;\" data-v-dae2ab6a>\n                            A block theme is a WordPress theme with templates entirely composed of blocks. Therefore, in\n                            addition to the content of different post types (pages, posts, etc.), the block editor can\n                            also\n                            be used to edit all areas of the website.\n                        </p></div> "), _vm._ssrNode("<ul class=\"icon\" data-v-dae2ab6a>", "</ul>", [_vm._ssrNode("<li data-v-dae2ab6a>", "</li>", [_c('TwitterIcon')], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-dae2ab6a>", "</li>", [_c('FacebookIcon')], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-dae2ab6a>", "</li>", [_c('YoutubeIcon')], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-dae2ab6a>", "</li>", [_c('LinkedinIcon')], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-dae2ab6a>", "</li>", [_c('DribbbleIcon')], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-dae2ab6a>", "</li>", [_c('InstagramIcon')], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col\" data-v-dae2ab6a>", "</div>", [_vm._ssrNode("<h6 class=\"ab\" data-v-dae2ab6a>CATEGORY NAME</h6> "), _c('categorynamefirst')], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col\" data-v-dae2ab6a>", "</div>", [_vm._ssrNode("<h6 class=\"ab\" data-v-dae2ab6a>CATEGORY NAME</h6> "), _c('categorynamesecond')], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col\" data-v-dae2ab6a>", "</div>", [_vm._ssrNode("<h6 class=\"ab\" data-v-dae2ab6a>SUPPORT</h6> "), _vm._ssrNode("<div data-v-dae2ab6a>", "</div>", [_vm._ssrNode("<ul class=\"list-path\" style=\"margin-top: 20px;\" data-v-dae2ab6a>", "</ul>", [_vm._ssrNode("<li style=\" margin-bottom: 15px;\" data-v-dae2ab6a>", "</li>", [_c('NuxtLink', {
    staticClass: "path",
    attrs: {
      "to": "#"
    }
  }, [_c('h6', [_vm._v("Corporate Membership")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li style=\" margin-bottom: 15px;\" data-v-dae2ab6a>", "</li>", [_c('NuxtLink', {
    staticClass: "path",
    attrs: {
      "to": "#"
    }
  }, [_c('h6', [_vm._v("Publish Your Book")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li style=\" margin-bottom: 15px;\" data-v-dae2ab6a>", "</li>", [_c('NuxtLink', {
    staticClass: "path",
    attrs: {
      "to": "#"
    }
  }, [_c('h6', [_vm._v("Submit An Article")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li style=\" margin-bottom: 15px;\" data-v-dae2ab6a>", "</li>", [_c('NuxtLink', {
    staticClass: "path",
    attrs: {
      "to": "#"
    }
  }, [_c('h6', [_vm._v("Advertise")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li style=\" margin-bottom: 15px;\" data-v-dae2ab6a>", "</li>", [_c('NuxtLink', {
    staticClass: "path",
    attrs: {
      "to": "#"
    }
  }, [_c('h6', [_vm._v("Community Forum")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-dae2ab6a>", "</li>", [_c('NuxtLink', {
    staticClass: "path",
    attrs: {
      "to": "#"
    }
  }, [_c('h6', [_vm._v("Privacy Policy")])])], 1)], 2)])], 2)], 2)])]), _vm._ssrNode(" <div class=\"about\" data-v-dae2ab6a><div data-v-dae2ab6a><div data-v-dae2ab6a><ul style=\"list-style: none;display: flex;justify-content: center; \" data-v-dae2ab6a><li style=\"margin-right: 20px; font-size: 11px;\" data-v-dae2ab6a>ABOUT</li> <li style=\"margin-right: 20px; font-size: 11px;\" data-v-dae2ab6a>CONTACT</li> <li style=\"margin-right: 20px; font-size: 11px;\" data-v-dae2ab6a>FULL WIDTH PAGE</li> <li style=\"margin-right: 20px; font-size: 11px;\" data-v-dae2ab6a>SUBMIT ARTICLE</li> <li style=\"margin-right: 20px; font-size: 11px;\" data-v-dae2ab6a>BUY THEME</li></ul></div></div> <div data-v-dae2ab6a><ul style=\"list-style: none;display: flex;justify-content: center; margin-top: 20px;\" data-v-dae2ab6a><li style=\"font-size: 11px;\" data-v-dae2ab6a>WORDPRESS THEME BY WPENJOY</li></ul></div></div>")], 2);
};
var Footervue_type_template_id_dae2ab6a_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./layout/Footer/index.vue?vue&type=template&id=dae2ab6a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layout/Footer/categorynamefirst.vue?vue&type=template&id=8b37f3b0&scoped=true&
var categorynamefirstvue_type_template_id_8b37f3b0_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "main-content"
  }, [_vm._ssrNode("<div class=\"list-post\" data-v-8b37f3b0>", "</div>", [_vm._ssrNode("<ul class=\"post-tag\" data-v-8b37f3b0>", "</ul>", _vm._l(_vm.posts, function (post) {
    return _vm._ssrNode("<li class=\"post\" data-v-8b37f3b0>", "</li>", [_c('NuxtLink', {
      staticClass: "nuxt-link",
      attrs: {
        "to": "#"
      }
    }, [_c('div', {
      staticClass: "poster"
    }, [_c('img', {
      attrs: {
        "src": post.image,
        "alt": "image"
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "info"
    }, [_c('p', {
      staticClass: "category"
    }, [_vm._v("\n                                " + _vm._s(post.category) + "\n                            ")]), _vm._v(" "), _c('span', {
      staticClass: "title"
    }, [_vm._v("\n                                " + _vm._s(post.title) + "\n                            ")])])])])], 1);
  }), 0)])]);
};
var categorynamefirstvue_type_template_id_8b37f3b0_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./layout/Footer/categorynamefirst.vue?vue&type=template&id=8b37f3b0&scoped=true&

// EXTERNAL MODULE: ./components/post/PostCatagory.vue + 4 modules
var PostCatagory = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layout/Footer/categorynamefirst.vue?vue&type=script&lang=js&

/* harmony default export */ var categorynamefirstvue_type_script_lang_js_ = ({
  data() {
    return {
      posts: [{
        id: 1,
        title: 'TikTok’s latest trending beauty filter returns users to their younger selves',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/girl-768x512.jpg',
        category: ''
      }, {
        id: 2,
        title: 'The best smart glasses to buy now, according to experts',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/glashes-768x512.jpg',
        category: ''
      }, {
        id: 3,
        title: 'The best wrinkle-free travel clothes to pack for your summer vacation',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/shirt-768x512.jpg',
        category: ''
      }]
    };
  },
  components: {
    PostCategory: PostCatagory["default"]
  }
});
// CONCATENATED MODULE: ./layout/Footer/categorynamefirst.vue?vue&type=script&lang=js&
 /* harmony default export */ var Footer_categorynamefirstvue_type_script_lang_js_ = (categorynamefirstvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layout/Footer/categorynamefirst.vue



function categorynamefirst_injectStyles (context) {
  
  var style0 = __webpack_require__(114)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var categorynamefirst_component = Object(componentNormalizer["a" /* default */])(
  Footer_categorynamefirstvue_type_script_lang_js_,
  categorynamefirstvue_type_template_id_8b37f3b0_scoped_true_render,
  categorynamefirstvue_type_template_id_8b37f3b0_scoped_true_staticRenderFns,
  false,
  categorynamefirst_injectStyles,
  "8b37f3b0",
  "38defac0"
  
)

/* harmony default export */ var categorynamefirst = (categorynamefirst_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layout/Footer/categorynamesecond.vue?vue&type=template&id=d6cd7728&scoped=true&
var categorynamesecondvue_type_template_id_d6cd7728_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "main-content"
  }, [_c('Maincontent'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"list-post\" data-v-d6cd7728>", "</div>", [_vm._ssrNode("<ul class=\"post-tag\" data-v-d6cd7728>", "</ul>", _vm._l(_vm.posts, function (post) {
    return _vm._ssrNode("<li class=\"post\" data-v-d6cd7728>", "</li>", [_c('NuxtLink', {
      staticClass: "nuxt-link",
      attrs: {
        "to": "#"
      }
    }, [_c('div', {
      staticClass: "poster"
    }, [_c('img', {
      attrs: {
        "src": post.image,
        "alt": "image"
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "info"
    }, [_c('p', {
      staticClass: "category"
    }, [_vm._v("\n                                " + _vm._s(post.category) + "\n                            ")]), _vm._v(" "), _c('span', {
      staticClass: "title"
    }, [_vm._v("\n                                " + _vm._s(post.title) + "\n                            ")])])])])], 1);
  }), 0)])], 2);
};
var categorynamesecondvue_type_template_id_d6cd7728_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./layout/Footer/categorynamesecond.vue?vue&type=template&id=d6cd7728&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layout/Footer/categorynamesecond.vue?vue&type=script&lang=js&

/* harmony default export */ var categorynamesecondvue_type_script_lang_js_ = ({
  data() {
    return {
      posts: [{
        id: 1,
        title: 'Why Apple Vision Pro’s $3,499 Price Makes More Sense Than You Think',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/solar-panels_EFYB8VJXNT-768x512.jpg',
        category: ''
      }, {
        id: 2,
        title: 'The 6 biggest iOS 17 features that Apple stole from Android Digital Trends',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/apple-768x513.jpg',
        category: ''
      }, {
        id: 3,
        title: '9 Ways to Engage Your Customers With Instagram Highlights',
        image: 'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/ins-768x512.jpg',
        category: ''
      }]
    };
  },
  components: {
    PostCategory: PostCatagory["default"]
  }
});
// CONCATENATED MODULE: ./layout/Footer/categorynamesecond.vue?vue&type=script&lang=js&
 /* harmony default export */ var Footer_categorynamesecondvue_type_script_lang_js_ = (categorynamesecondvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layout/Footer/categorynamesecond.vue



function categorynamesecond_injectStyles (context) {
  
  var style0 = __webpack_require__(116)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var categorynamesecond_component = Object(componentNormalizer["a" /* default */])(
  Footer_categorynamesecondvue_type_script_lang_js_,
  categorynamesecondvue_type_template_id_d6cd7728_scoped_true_render,
  categorynamesecondvue_type_template_id_d6cd7728_scoped_true_staticRenderFns,
  false,
  categorynamesecond_injectStyles,
  "d6cd7728",
  "0879fe94"
  
)

/* harmony default export */ var categorynamesecond = (categorynamesecond_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layout/Footer/index.vue?vue&type=script&lang=js&








/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  components: {
    categorynamefirst: categorynamefirst,
    categorynamesecond: categorynamesecond,
    DribbbleIcon: DribbbleIcon["default"],
    FacebookIcon: FacebookIcon["default"],
    InstagramIcon: InstagramIcon["default"],
    LinkedinIcon: LinkedinIcon["default"],
    TwitterIcon: TwitterIcon["default"],
    YoutubeIcon: YoutubeIcon["default"]
  }
});
// CONCATENATED MODULE: ./layout/Footer/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var layout_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layout/Footer/index.vue



function Footer_injectStyles (context) {
  
  var style0 = __webpack_require__(118)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Footer_component = Object(componentNormalizer["a" /* default */])(
  layout_Footervue_type_script_lang_js_,
  Footervue_type_template_id_dae2ab6a_scoped_true_render,
  Footervue_type_template_id_dae2ab6a_scoped_true_staticRenderFns,
  false,
  Footer_injectStyles,
  "dae2ab6a",
  "122e77cb"
  
)

/* harmony default export */ var Footer = (Footer_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&











/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    Header: Header,
    Content: Content["default"],
    Follow: follow,
    Business: business["default"],
    Technology: technology["default"],
    Lifestyle: lifestyle["default"],
    Socialmedia: socialmedia["default"],
    Service: service["default"],
    Travel: travel["default"],
    Fooddrink: fooddrink["default"],
    Footer: Footer
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/index.vue



function pages_injectStyles (context) {
  
  var style0 = __webpack_require__(120)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  pages_injectStyles,
  "6560955c",
  "37871822"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/* nuxt-component-imports */
installComponents(pages_component, {Content: __webpack_require__(88).default,Business: __webpack_require__(89).default,Technology: __webpack_require__(90).default,Lifestyle: __webpack_require__(91).default,Socialmedia: __webpack_require__(92).default,Follow: __webpack_require__(58).default,Service: __webpack_require__(93).default,Travel: __webpack_require__(94).default,Fooddrink: __webpack_require__(95).default})


/***/ })
]);;
//# sourceMappingURL=index.js.map