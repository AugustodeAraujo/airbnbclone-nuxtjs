exports.ids = [3];
exports.modules = {

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/_id.vue?vue&type=template&id=58d8d386&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div style=\"display: flex\">"+(_vm._ssrList((_vm.home.images),function(image){return ("<img"+(_vm._ssrAttr("src",image))+" width=\"200\" height=\"200\">")}))+"</div>"+_vm._ssrEscape("\n  "+_vm._s(_vm.home.title)+" ")+"<br>"+_vm._ssrEscape("\n  $"+_vm._s(_vm.home.pricePerNight)+" / night ")+"<br> <img src=\"/images/marker.svg\" width=\"20\" height=\"20\">"+_vm._ssrEscape("\n  "+_vm._s(_vm.home.location.address)+" "+_vm._s(_vm.home.location.city)+"\n  "+_vm._s(_vm.home.location.country))+"<br> <img src=\"/images/star.svg\" width=\"20\" height=\"20\">"+_vm._ssrEscape(" "+_vm._s(_vm.home.reviewValue))+"<br>"+_vm._ssrEscape("\n  "+_vm._s(_vm.home.guests)+" guests, "+_vm._s(_vm.home.bedrooms)+" rooms, "+_vm._s(_vm.home.beds)+" beds,\n  "+_vm._s(_vm.home.bathrooms)+" bath, ")+"<br>"+_vm._ssrEscape("\n  "+_vm._s(_vm.home.description)+"\n  ")+"<div style=\"height:800px; width:800px\"></div> "+(_vm._ssrList((_vm.reviews),function(review){return ("<div><img"+(_vm._ssrAttr("src",review.reviewer.image))+"><br>"+_vm._ssrEscape("\n    "+_vm._s(review.reviewer.name))+"<br>"+_vm._ssrEscape("\n    "+_vm._s(review.comment))+"<br></div>")}))+" <img"+(_vm._ssrAttr("src",_vm.user.image))+" alt>"+_vm._ssrEscape("\n  "+_vm._s(_vm.user.name)+" ")+"<br>"+_vm._ssrEscape("\n  "+_vm._s(_vm.user.reviewCount)+" ")+"<br>"+_vm._ssrEscape("\n  "+_vm._s(_vm.user.description)+" ")+"<br>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/_id.vue?vue&type=template&id=58d8d386&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/_id.vue?vue&type=script&lang=js&
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
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  head() {
    return {
      title: this.home.title
    };
  },

  methods: {},

  mounted() {
    this.$maps.showMap(this.$refs.map, this.home._geoloc.lat, this.home._geoloc.lng);
  },

  async asyncData({
    params,
    $dataApi,
    error
  }) {
    const responses = await Promise.all([$dataApi.getHome(params.id), $dataApi.getReviewsByHomeId(params.id), $dataApi.getUserByHomeId(params.id)]);
    const badResponse = responses.find(responses => !responses.ok);
    if (badResponse) return error({
      statusCode: badResponse.status,
      message: badResponse.statusText
    });
    return {
      home: responses[0].json,
      reviews: responses[1].json.hits,
      user: responses[2].json.hits[0]
    };
  }

});
// CONCATENATED MODULE: ./pages/home/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/home/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "224e7072"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map