exports.ids = [10];
exports.modules = {

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


/***/ })

};;
//# sourceMappingURL=post-catagory.js.map