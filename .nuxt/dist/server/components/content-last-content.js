exports.ids = [3];
exports.modules = {

/***/ 29:
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

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LastContent_vue_vue_type_style_index_0_id_6d9a506e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LastContent_vue_vue_type_style_index_0_id_6d9a506e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LastContent_vue_vue_type_style_index_0_id_6d9a506e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LastContent_vue_vue_type_style_index_0_id_6d9a506e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LastContent_vue_vue_type_style_index_0_id_6d9a506e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 40:
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

/***/ 57:
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

/***/ })

};;
//# sourceMappingURL=content-last-content.js.map