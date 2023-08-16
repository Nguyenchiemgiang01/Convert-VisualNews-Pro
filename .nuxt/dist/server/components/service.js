exports.ids = [11,23];
exports.modules = {

/***/ 24:
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

/***/ 26:
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

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_16792320_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_16792320_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_16792320_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_16792320_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_16792320_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 34:
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

/***/ 53:
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

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ac4ce234_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ac4ce234_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ac4ce234_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ac4ce234_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ac4ce234_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 77:
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

/***/ 93:
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


/***/ })

};;
//# sourceMappingURL=service.js.map