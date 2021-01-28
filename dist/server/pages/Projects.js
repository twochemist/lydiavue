exports.ids = [4];
exports.modules = {

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("712430c8", content, true, context)
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

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/speak.49473c0.jpg";

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/illustration.f91f0f7.jpg";

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/qr-1.b8689bf.png";

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/man-computer.96d94b1.png";

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_style_index_0_id_8ba1fa82_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_style_index_0_id_8ba1fa82_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_style_index_0_id_8ba1fa82_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_style_index_0_id_8ba1fa82_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_style_index_0_id_8ba1fa82_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_style_index_0_id_8ba1fa82_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".row[data-v-8ba1fa82]{margin-top:70px}.project-cover[data-v-8ba1fa82]{width:inherit;border-radius:3px}hr.dope[data-v-8ba1fa82]{border:0;width:90px;border-top:2px solid #dc3545;text-align:left;margin:initial;margin-top:7px;margin-left:5px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Projects.vue?vue&type=template&id=8ba1fa82&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"about page animate__animated animate__fadeIn"},[_vm._ssrNode("<h2 data-v-8ba1fa82>⚡ Zumba® Class ⚡</h2> "),_vm._ssrNode("<div class=\"container\" data-v-8ba1fa82>","</div>",_vm._l((_vm.projects),function(project,index){return _vm._ssrNode("<div class=\"row\" data-v-8ba1fa82>","</div>",[_vm._ssrNode("<div class=\"col-md-5\" data-v-8ba1fa82><img"+(_vm._ssrAttr("src",project.image_cover))+(_vm._ssrAttr("alt",project.title))+" class=\"project-cover\" data-v-8ba1fa82></div> "),_vm._ssrNode("<div class=\"col-md-5\" data-v-8ba1fa82>","</div>",[_vm._ssrNode("<h2 class=\"mt-3\" style=\"text-align: left\" data-v-8ba1fa82>"+_vm._ssrEscape("\n          "+_vm._s(project.title)+"\n          ")+"<hr class=\"dope\" data-v-8ba1fa82></h2> "),_c('b-card',{staticClass:"mt-3 mb-3 text-left text-dark"},[_c('p',[_vm._v(_vm._s(project.description))]),_vm._v(" "),_c('b-link',{attrs:{"href":project.link}},[_vm._v("Link Zumba Class! "),_c('LinkIcon',{staticStyle:{"color":"#000"}})],1),_vm._v(" "),_c('hr'),_vm._v(" "),_c('b-link',{attrs:{"href":project.github_url}},[_vm._v("Paypal "),_c('GithubIcon',{staticStyle:{"color":"#000"}})],1)],1)],2)],2)}),0)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Projects.vue?vue&type=template&id=8ba1fa82&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-ionicons/dist/md-link.vue?vue&type=template&id=7fbf5c57&
var md_linkvue_type_template_id_7fbf5c57_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"md-link-icon"}},[_vm._ssrNode("<svg"+(_vm._ssrAttr("width",_vm.w))+(_vm._ssrAttr("height",_vm.h))+" viewBox=\"0 0 512 512\" class=\"ion__svg\"><path d=\"M74.6 256c0-38.3 31.1-69.4 69.4-69.4h88V144h-88c-61.8 0-112 50.2-112 112s50.2 112 112 112h88v-42.6h-88c-38.3 0-69.4-31.1-69.4-69.4zm85.4 22h192v-44H160v44zm208-134h-88v42.6h88c38.3 0 69.4 31.1 69.4 69.4s-31.1 69.4-69.4 69.4h-88V368h88c61.8 0 112-50.2 112-112s-50.2-112-112-112z\"></path></svg>")])}
var md_linkvue_type_template_id_7fbf5c57_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-ionicons/dist/md-link.vue?vue&type=template&id=7fbf5c57&

// EXTERNAL MODULE: ./node_modules/vue-ionicons/dist/ionicons-mixin.js
var ionicons_mixin = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-ionicons/dist/md-link.vue?vue&type=script&lang=js&
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

/* harmony default export */ var md_linkvue_type_script_lang_js_ = ({
  name: "md-link-icon",
  mixins: [ionicons_mixin["a" /* default */]],

  data() {
    let iconTitle = this.title ? this.title : "Md Link Icon";
    return {
      iconTitle: iconTitle
    };
  }

});
// CONCATENATED MODULE: ./node_modules/vue-ionicons/dist/md-link.vue?vue&type=script&lang=js&
 /* harmony default export */ var dist_md_linkvue_type_script_lang_js_ = (md_linkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vue-ionicons/dist/md-link.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dist_md_linkvue_type_script_lang_js_,
  md_linkvue_type_template_id_7fbf5c57_render,
  md_linkvue_type_template_id_7fbf5c57_staticRenderFns,
  false,
  null,
  null,
  "5ec44136"
  
)

/* harmony default export */ var md_link = (component.exports);
// EXTERNAL MODULE: ./node_modules/vue-ionicons/dist/logo-github.vue + 4 modules
var logo_github = __webpack_require__(44);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Projects.vue?vue&type=script&lang=js&
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


/* harmony default export */ var Projectsvue_type_script_lang_js_ = ({
  components: {
    GithubIcon: logo_github["a" /* default */],
    LinkIcon: md_link
  },

  data() {
    return {
      projects: [{
        title: "Zumba Online bequem von zu Hause aus. ",
        tag: "Progressive Web App",
        description: "Eine Indoor-Masterclass zu machen, so eine schöne Idee! Die Location zuhause, das Wetter toll und die Stimmung großartig. Im Corona-Zeit fand die Zumba ® Zuhause Masterclass mit den Lydia Rodriguez statt.",
        image_cover: __webpack_require__(55),
        github_url: "https://www.facebook.com/ZINLydiaRodriguez/",
        link: "https://www.facebook.com/ZINLydiaRodriguez/"
      }, {
        title: "Step into Happy",
        tag: "Chrome-Extention, Coming Soon!",
        description: "Wir sind zu dem Open Air eingeladen. Highlights und natürlich gute Zumba! Trotz Corona, Super Stimmung auf Tanz.",
        image_cover: __webpack_require__(56),
        github_url: "",
        link: ""
      }, {
        title: "Zumba Family",
        tag: "Progressive Web App",
        description: "Easily share your Zumba Dance with friends during Pandemic.",
        image_cover: __webpack_require__(57),
        github_url: "https://www.facebook.com/ZINLydiaRodriguez/",
        link: "https://www.facebook.com/ZINLydiaRodriguez/"
      }]
    };
  },

  methods: {
    isEven(n) {
      if (n % 2 == 0) {
        return true;
      } else {
        return false;
      }
    }

  },
  head: {
    title: "Projekte 💃 - Lydia Rodriguez",
    meta: [{
      hid: "description",
      name: "description",
      content: "View all the recents Zumba Projects created with ♥ by Lydia Rodriguez, open-minded means this Zumba Class is available for everyone."
    }, {
      hid: "og:title",
      name: "og:title",
      content: "Projekte 💃 - Lydia Rodriguez"
    }, {
      property: "og:description",
      content: "View all the recents Zumba Projects created with ♥ by Lydia Rodriguez, open-minded means this Zumba Class is available for everyone."
    }, {
      hid: "og:image",
      name: "og:image",
      content: __webpack_require__(58)
    }]
  }
});
// CONCATENATED MODULE: ./pages/Projects.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Projectsvue_type_script_lang_js_ = (Projectsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/Projects.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(59)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Projects_component = Object(componentNormalizer["a" /* default */])(
  pages_Projectsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8ba1fa82",
  "8cfd7c28"
  
)

/* harmony default export */ var Projects = __webpack_exports__["default"] = (Projects_component.exports);

/***/ })

};;
//# sourceMappingURL=Projects.js.map