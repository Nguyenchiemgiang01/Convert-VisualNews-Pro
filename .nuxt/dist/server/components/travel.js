exports.ids = [21,22];
exports.modules = {

/***/ 25:
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

/***/ 27:
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

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7badf403_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7badf403_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7badf403_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7badf403_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7badf403_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 36:
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

/***/ 54:
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

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_637531a8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_637531a8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_637531a8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_637531a8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_637531a8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 79:
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

/***/ 94:
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


/***/ })

};;
//# sourceMappingURL=travel.js.map