exports.ids = [2];
exports.modules = {

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HomeRow.vue?vue&type=template&id=35c23256&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"clear":"left"}},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.home.images[0]))+" style=\"width:200px;float:left;padding:10px;\"><br>"+_vm._ssrEscape("\n  "+_vm._s(_vm.home.title))+"<br>"+_vm._ssrEscape("\n  "+_vm._s(_vm.home.location.address)+" "+_vm._s(_vm.home.location.city)+" "+_vm._s(_vm.home.location.state))+"<br>"+_vm._ssrEscape("\n  "+_vm._s(_vm.pluralize(_vm.home.guests, 'guest'))+",\n  "+_vm._s(_vm.pluralize(_vm.home.bedrooms, 'room'))+", "+_vm._s(_vm.pluralize(_vm.home.beds, 'bed'))+",\n  "+_vm._s(_vm.pluralize(_vm.home.bathrooms, 'bath'))+" ")+"<br>"+_vm._ssrEscape("\n  "+_vm._s(_vm.home.pricePerNight)+" / night")+"<br> <img src=\"/images/star.svg\" width=\"20\" height=\"20\">"+_vm._ssrEscape(_vm._s(_vm.home.reviewValue)+"\n  ("+_vm._s(_vm.home.reviewCount)+")")+"<br>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HomeRow.vue?vue&type=template&id=35c23256&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HomeRow.vue?vue&type=script&lang=js&
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
/* harmony default export */ var HomeRowvue_type_script_lang_js_ = ({
  props: {
    home: {
      type: Object,
      required: true
    }
  },
  methods: {
    pluralize(number, singularWord) {
      const text = `${number} ${singularWord}`;
      if (number == 1) return text;
      return text + 's';
    }

  }
});
// CONCATENATED MODULE: ./components/HomeRow.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HomeRowvue_type_script_lang_js_ = (HomeRowvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/HomeRow.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HomeRowvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1c81ba07"
  
)

/* harmony default export */ var HomeRow = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-row.js.map