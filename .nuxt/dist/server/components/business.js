exports.ids = [1];
exports.modules = {

/***/ 45:
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

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0a33be6e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0a33be6e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0a33be6e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0a33be6e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0a33be6e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 69:
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

/***/ 89:
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

/***/ })

};;
//# sourceMappingURL=business.js.map