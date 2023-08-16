exports.ids = [19,10,20];
exports.modules = {

/***/ 30:
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

/***/ 31:
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

/***/ 32:
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

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maincontent_vue_vue_type_style_index_0_id_10a7ef32_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maincontent_vue_vue_type_style_index_0_id_10a7ef32_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maincontent_vue_vue_type_style_index_0_id_10a7ef32_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maincontent_vue_vue_type_style_index_0_id_10a7ef32_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maincontent_vue_vue_type_style_index_0_id_10a7ef32_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 47:
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

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCatagory_vue_vue_type_style_index_0_id_25b317a1_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCatagory_vue_vue_type_style_index_0_id_25b317a1_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCatagory_vue_vue_type_style_index_0_id_25b317a1_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCatagory_vue_vue_type_style_index_0_id_25b317a1_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCatagory_vue_vue_type_style_index_0_id_25b317a1_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 49:
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

/***/ 50:
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

/***/ 59:
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

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_36c3d6c2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_36c3d6c2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_36c3d6c2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_36c3d6c2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_36c3d6c2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 71:
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

/***/ 90:
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


/***/ })

};;
//# sourceMappingURL=technology.js.map