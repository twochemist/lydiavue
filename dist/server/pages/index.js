exports.ids = [5];
exports.modules = {

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(63);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("2a84100f", content, true, context)
};

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-ionicons/dist/logo-github.vue?vue&type=template&id=c10cd226&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"logo-github-icon"}},[_vm._ssrNode("<svg viewBox=\"0 0 512 512\""+(_vm._ssrAttr("width",_vm.w))+(_vm._ssrAttr("height",_vm.h))+" class=\"ion__svg\"><path d=\"M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z\"></path></svg>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-ionicons/dist/logo-github.vue?vue&type=template&id=c10cd226&

// EXTERNAL MODULE: ./node_modules/vue-ionicons/dist/ionicons-mixin.js
var ionicons_mixin = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-ionicons/dist/logo-github.vue?vue&type=script&lang=js&
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

/* harmony default export */ var logo_githubvue_type_script_lang_js_ = ({
  name: "logo-github-icon",
  mixins: [ionicons_mixin["a" /* default */]],

  data() {
    let iconTitle = this.title ? this.title : "Logo Github Icon";
    return {
      iconTitle: iconTitle
    };
  }

});
// CONCATENATED MODULE: ./node_modules/vue-ionicons/dist/logo-github.vue?vue&type=script&lang=js&
 /* harmony default export */ var dist_logo_githubvue_type_script_lang_js_ = (logo_githubvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vue-ionicons/dist/logo-github.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dist_logo_githubvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6f4e338c"
  
)

/* harmony default export */ var logo_github = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar-1.45917fd.webp";

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar-2.21046f0.webp";

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/coding.755f654.png";

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7e725bd2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7e725bd2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7e725bd2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7e725bd2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7e725bd2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7e725bd2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".row[data-v-7e725bd2]{margin-top:170px}.action-btn[data-v-7e725bd2]{display:inline-table;margin:7px}.info[data-v-7e725bd2]{margin-top:10px;text-align:left;line-height:2em;font-size:18px;font-weight:400;margin-left:7px}img[data-v-7e725bd2]{background-color:#2e2a2a;border-radius:100%;width:200px;height:200px;cursor:pointer}.social-icons[data-v-7e725bd2]{margin-top:25px}.social-icons a[data-v-7e725bd2]{font-size:25px;margin:15px;color:rgba(0,0,0,.712)}.social-icons a[data-v-7e725bd2]:hover{color:#000}.intro[data-v-7e725bd2]{font-size:45px;font-weight:bolder;text-align:left;margin-left:20px;margin-top:20px}@media screen and (max-width:420px){.row[data-v-7e725bd2]{margin-top:0}img[data-v-7e725bd2]{width:150px;height:150px}.intro[data-v-7e725bd2]{font-size:30px;font-weight:700}}.btn-primary[data-v-7e725bd2]{background-color:red;border-color:red}.btn-primary[data-v-7e725bd2]:hover{background-color:#f00000;border-color:#f00000}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=7e725bd2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-row',{staticStyle:{"margin-left":"0","margin-right":"0"}},[_c('b-col',{attrs:{"md":"4"}},[_c('b-img',{attrs:{"src":_vm.avatar,"id":"avatar-img","alt":"Lydia Rodriguez Memoji"},on:{"mouseenter":_vm.changeAvatar,"mouseleave":_vm.changeAvatar}})],1),_vm._v(" "),_c('b-col',{attrs:{"md":"8"}},[_c('h2',{staticClass:"intro animate__animated animate__fadeInUp animate__fast"},[_vm._v("\n      Hi 👋,\n      "),_c('br'),_vm._v("Ich bin "),_c('span',[_vm._v("Lydia Rodriguez")]),_vm._v(" 💃.\n    ")]),_vm._v(" "),_c('div',{staticClass:"col-md-10 info"},[_vm._v("\n      Dein "),_c('b',[_vm._v("Zumba® Instructor")]),_vm._v(" und "),_c('b',[_vm._v("Personal Trainer")]),_vm._v(" für Anfänger\n      bis Fortgeschrittene. "),_c('br'),_vm._v("Ich bin ZIN Mitglied und ich liebe es, Zumba\n      Kurse zu geben. "),_c('br'),_vm._v("\n      Probier es aus, komm vorbei oder schreib mir eine Nachricht."),_c('br'),_vm._v("\n      Es geht darum, sich besser zu bewegen und besser zu leben.\n      "),_c('br'),_vm._v(" "),_c('b-button',{staticClass:"action-btn animate__animated animate__wobble animate__delay-4s animate__fast",attrs:{"to":"/projects"}},[_vm._v("Link Zumba Class >")]),_vm._v(" "),_c('b-button',{staticClass:"action-btn",attrs:{"to":"/contact","variant":"primary"}},[_vm._v("Buy me a coffee")]),_vm._v(" "),_c('div',{staticClass:"social-icons animate__animated animate__fadeInUp animate__delay-1s"},[_c('a',{attrs:{"href":"https://www.zumba.com/de-DE/profile/Lydia_Rodriguez/1739458","target":"_blank","rel":"noopener"}},[_c('GithubIcon')],1),_vm._v(" "),_c('a',{attrs:{"href":"https://www.instagram.com/lydia_rodriguez_corcoba/?igshid=1t8tw9acoabou","target":"_blank","rel":"noopener"}},[_c('TwitterIcon')],1),_vm._v(" "),_c('a',{attrs:{"href":"https://www.facebook.com/ZINLydiaRodriguez/","target":"_blank","rel":"noopener"}},[_c('FacebookIcon')],1),_vm._v(" "),_c('a',{attrs:{"href":"mailto:lydiacorcoba@gmail.com","target":"_blank","rel":"noopener"}},[_c('MailIcon')],1)])],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=7e725bd2&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-ionicons/dist/logo-github.vue + 4 modules
var logo_github = __webpack_require__(44);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-ionicons/dist/logo-linkedin.vue?vue&type=template&id=4c64f30f&
var logo_linkedinvue_type_template_id_4c64f30f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"logo-linkedin-icon"}},[_vm._ssrNode("<svg viewBox=\"0 0 512 512\""+(_vm._ssrAttr("width",_vm.w))+(_vm._ssrAttr("height",_vm.h))+" class=\"ion__svg\"><path d=\"M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z\"></path></svg>")])}
var logo_linkedinvue_type_template_id_4c64f30f_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-ionicons/dist/logo-linkedin.vue?vue&type=template&id=4c64f30f&

// EXTERNAL MODULE: ./node_modules/vue-ionicons/dist/ionicons-mixin.js
var ionicons_mixin = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-ionicons/dist/logo-linkedin.vue?vue&type=script&lang=js&
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

/* harmony default export */ var logo_linkedinvue_type_script_lang_js_ = ({
  name: "logo-linkedin-icon",
  mixins: [ionicons_mixin["a" /* default */]],

  data() {
    let iconTitle = this.title ? this.title : "Logo Linkedin Icon";
    return {
      iconTitle: iconTitle
    };
  }

});
// CONCATENATED MODULE: ./node_modules/vue-ionicons/dist/logo-linkedin.vue?vue&type=script&lang=js&
 /* harmony default export */ var dist_logo_linkedinvue_type_script_lang_js_ = (logo_linkedinvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vue-ionicons/dist/logo-linkedin.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dist_logo_linkedinvue_type_script_lang_js_,
  logo_linkedinvue_type_template_id_4c64f30f_render,
  logo_linkedinvue_type_template_id_4c64f30f_staticRenderFns,
  false,
  null,
  null,
  "e1c7fbd6"
  
)

/* harmony default export */ var logo_linkedin = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-ionicons/dist/logo-instagram.vue?vue&type=template&id=49c6b638&
var logo_instagramvue_type_template_id_49c6b638_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"logo-instagram-icon"}},[_vm._ssrNode("<svg"+(_vm._ssrAttr("width",_vm.w))+(_vm._ssrAttr("height",_vm.h))+" viewBox=\"0 0 512 512\" class=\"ion__svg\"><path d=\"M336 96c21.2 0 41.3 8.4 56.5 23.5S416 154.8 416 176v160c0 21.2-8.4 41.3-23.5 56.5S357.2 416 336 416H176c-21.2 0-41.3-8.4-56.5-23.5S96 357.2 96 336V176c0-21.2 8.4-41.3 23.5-56.5S154.8 96 176 96h160m0-32H176c-61.6 0-112 50.4-112 112v160c0 61.6 50.4 112 112 112h160c61.6 0 112-50.4 112-112V176c0-61.6-50.4-112-112-112z\"></path><path d=\"M360 176c-13.3 0-24-10.7-24-24s10.7-24 24-24c13.2 0 24 10.7 24 24s-10.8 24-24 24zM256 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64m0-32c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96z\"></path></svg>")])}
var logo_instagramvue_type_template_id_49c6b638_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-ionicons/dist/logo-instagram.vue?vue&type=template&id=49c6b638&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-ionicons/dist/logo-instagram.vue?vue&type=script&lang=js&
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

/* harmony default export */ var logo_instagramvue_type_script_lang_js_ = ({
  name: "logo-instagram-icon",
  mixins: [ionicons_mixin["a" /* default */]],

  data() {
    let iconTitle = this.title ? this.title : "Logo Instagram Icon";
    return {
      iconTitle: iconTitle
    };
  }

});
// CONCATENATED MODULE: ./node_modules/vue-ionicons/dist/logo-instagram.vue?vue&type=script&lang=js&
 /* harmony default export */ var dist_logo_instagramvue_type_script_lang_js_ = (logo_instagramvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-ionicons/dist/logo-instagram.vue





/* normalize component */

var logo_instagram_component = Object(componentNormalizer["a" /* default */])(
  dist_logo_instagramvue_type_script_lang_js_,
  logo_instagramvue_type_template_id_49c6b638_render,
  logo_instagramvue_type_template_id_49c6b638_staticRenderFns,
  false,
  null,
  null,
  "439c58aa"
  
)

/* harmony default export */ var logo_instagram = (logo_instagram_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-ionicons/dist/logo-facebook.vue?vue&type=template&id=44d7c18e&
var logo_facebookvue_type_template_id_44d7c18e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"logo-facebook-icon"}},[_vm._ssrNode("<svg"+(_vm._ssrAttr("width",_vm.w))+(_vm._ssrAttr("height",_vm.h))+" viewBox=\"0 0 512 512\" class=\"ion__svg\"><path d=\"M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z\"></path></svg>")])}
var logo_facebookvue_type_template_id_44d7c18e_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-ionicons/dist/logo-facebook.vue?vue&type=template&id=44d7c18e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-ionicons/dist/logo-facebook.vue?vue&type=script&lang=js&
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

/* harmony default export */ var logo_facebookvue_type_script_lang_js_ = ({
  name: "logo-facebook-icon",
  mixins: [ionicons_mixin["a" /* default */]],

  data() {
    let iconTitle = this.title ? this.title : "Logo Facebook Icon";
    return {
      iconTitle: iconTitle
    };
  }

});
// CONCATENATED MODULE: ./node_modules/vue-ionicons/dist/logo-facebook.vue?vue&type=script&lang=js&
 /* harmony default export */ var dist_logo_facebookvue_type_script_lang_js_ = (logo_facebookvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-ionicons/dist/logo-facebook.vue





/* normalize component */

var logo_facebook_component = Object(componentNormalizer["a" /* default */])(
  dist_logo_facebookvue_type_script_lang_js_,
  logo_facebookvue_type_template_id_44d7c18e_render,
  logo_facebookvue_type_template_id_44d7c18e_staticRenderFns,
  false,
  null,
  null,
  "4d443046"
  
)

/* harmony default export */ var logo_facebook = (logo_facebook_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-ionicons/dist/md-mail.vue?vue&type=template&id=2b531ca4&
var md_mailvue_type_template_id_2b531ca4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"md-mail-icon"}},[_vm._ssrNode("<svg viewBox=\"0 0 512 512\""+(_vm._ssrAttr("width",_vm.w))+(_vm._ssrAttr("height",_vm.h))+" class=\"ion__svg\"><path d=\"M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z\"></path></svg>")])}
var md_mailvue_type_template_id_2b531ca4_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-ionicons/dist/md-mail.vue?vue&type=template&id=2b531ca4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-ionicons/dist/md-mail.vue?vue&type=script&lang=js&
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

/* harmony default export */ var md_mailvue_type_script_lang_js_ = ({
  name: "md-mail-icon",
  mixins: [ionicons_mixin["a" /* default */]],

  data() {
    let iconTitle = this.title ? this.title : "Md Mail Icon";
    return {
      iconTitle: iconTitle
    };
  }

});
// CONCATENATED MODULE: ./node_modules/vue-ionicons/dist/md-mail.vue?vue&type=script&lang=js&
 /* harmony default export */ var dist_md_mailvue_type_script_lang_js_ = (md_mailvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-ionicons/dist/md-mail.vue





/* normalize component */

var md_mail_component = Object(componentNormalizer["a" /* default */])(
  dist_md_mailvue_type_script_lang_js_,
  md_mailvue_type_template_id_2b531ca4_render,
  md_mailvue_type_template_id_2b531ca4_staticRenderFns,
  false,
  null,
  null,
  "ee59e2bc"
  
)

/* harmony default export */ var md_mail = (md_mail_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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
//





/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: "Home",
  components: {
    GithubIcon: logo_github["a" /* default */],
    LinkedinIcon: logo_linkedin,
    TwitterIcon: logo_instagram,
    FacebookIcon: logo_facebook,
    MailIcon: md_mail
  },

  data() {
    return {
      avatar: __webpack_require__(45)
    };
  },

  head: {
    title: "Lydia Rodriguez - Zumba Trainer",
    meta: [{
      hid: "description",
      name: "description",
      content: "Lydia Rodriguez is an awesome Zumba Instructor and Mum of four, passionate about giving zumba classes that works across multiple cultures with high respect approach. Lydia has vast knowledge in Zumba Dance with over 4+ years experience in giving Zumba Class"
    }, {
      hid: "og:title",
      name: "og:title",
      content: "Zumba ⚡- Lydia Rodriguez"
    }, {
      property: "og:description",
      content: "Lydia Rodriguez is an awesome Zumba Instructor and Mum of four, passionate about giving zumba classes that works across multiple cultures with high respect approach. Lydia has vast knowledge in Zumba Dance with over 4+ years experience in giving Zumba Class"
    }, {
      hid: "og:image",
      name: "og:image",
      content: __webpack_require__(61)
    }]
  },
  methods: {
    changeAvatar() {
      if (this.avatar == __webpack_require__(46)) {
        this.avatar = __webpack_require__(45);
      } else {
        this.avatar = __webpack_require__(46);
      }
    }

  },

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(62)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7e725bd2",
  "5b7cdcf0"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map