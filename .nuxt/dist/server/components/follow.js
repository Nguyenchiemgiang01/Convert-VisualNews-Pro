exports.ids = [5,23];
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

/***/ 42:
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

/***/ 58:
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

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Follow_vue_vue_type_style_index_0_id_3cb756f6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Follow_vue_vue_type_style_index_0_id_3cb756f6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Follow_vue_vue_type_style_index_0_id_3cb756f6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Follow_vue_vue_type_style_index_0_id_3cb756f6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Follow_vue_vue_type_style_index_0_id_3cb756f6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media (max-width:760px){.follow-us[data-v-3cb756f6]{margin-top:20px}.bloggin[data-v-3cb756f6]{margin-top:40px}.item-icon[data-v-3cb756f6]{align-items:center;display:flex;margin-right:20px}.item-icon svg[data-v-3cb756f6]{margin-right:5px}.follow[data-v-3cb756f6]{border-bottom:2px solid #e7eaec;font-size:14px;margin-bottom:10px;padding-bottom:5px;position:relative;-webkit-text-decoration:none;text-decoration:none}.follow>strong[data-v-3cb756f6]:before{background-color:#3780f5;bottom:-2px;content:\"\";height:4px;left:0;position:absolute;width:25px}}@media (min-width:1200px){#follow[data-v-3cb756f6]{max-width:302px}.item-icon[data-v-3cb756f6]{align-items:center;display:flex}.item-icon svg[data-v-3cb756f6]{margin-right:5px}.follow-us[data-v-3cb756f6]{margin-top:20px}.follow[data-v-3cb756f6]{border-bottom:2px solid #e7eaec;font-size:14px;margin-bottom:10px;padding-bottom:5px;position:relative;-webkit-text-decoration:none;text-decoration:none}.follow>strong[data-v-3cb756f6]:before{background-color:#3780f5;bottom:-2px;content:\"\";height:4px;left:0;position:absolute;width:25px}.contact-channel[data-v-3cb756f6]{justify-content:space-between}.contact-channel[data-v-3cb756f6],.icon-column[data-v-3cb756f6]{align-items:center;display:flex}.icon-column[data-v-3cb756f6]{flex-direction:column}.col-left[data-v-3cb756f6]{float:left}.col-right[data-v-3cb756f6]{float:right}.bloggin[data-v-3cb756f6]{margin-top:40px}.icon[data-v-3cb756f6]{align-items:left;display:flex;flex-direction:column;list-style:none}.icon>li[data-v-3cb756f6]{margin-bottom:10px}.title-post[data-v-3cb756f6]{color:#000;list-style:none;margin-top:20px;padding-left:0;-webkit-text-decoration:none;text-decoration:none}.title-post>li>span[data-v-3cb756f6]{font-size:16px;margin-bottom:10px;margin-top:10px}.title-post>li>span>a[data-v-3cb756f6]{color:#000;font-size:medium;font-style:normal;-webkit-text-decoration:none;text-decoration:none}.title-post>li>span>a[data-v-3cb756f6]:hover{color:#5691cd}.title-post>li>span[data-v-3cb756f6]{font-weight:medium}.title-post>li[data-v-3cb756f6]{margin-bottom:20px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=follow.js.map