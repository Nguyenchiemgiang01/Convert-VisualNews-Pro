exports.ids = [14];
exports.modules = {

/***/ 83:
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

/***/ })

};;
//# sourceMappingURL=svgs-facebook-icon.js.map