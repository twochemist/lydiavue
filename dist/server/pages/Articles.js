exports.ids = [2];
exports.modules = {

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("1aa592c0", content, true, context)
};

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_style_index_0_id_2a426cbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_style_index_0_id_2a426cbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_style_index_0_id_2a426cbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_style_index_0_id_2a426cbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_style_index_0_id_2a426cbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_style_index_0_id_2a426cbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container[data-v-2a426cbe]{margin-top:120px}.row[data-v-2a426cbe],.spinner-border[data-v-2a426cbe]{margin-top:40px}.card[data-v-2a426cbe]{text-align:left;color:#000}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Articles.vue?vue&type=template&id=2a426cbe&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-container',{staticClass:"page animate__animated animate__fadeIn"},[_c('h2',[_vm._v("Zumbaritas")]),_vm._v(" "),_c('p',[_vm._v("\n    Made with\n    "),_c('sub',[_c('HeartIcon',{staticStyle:{"color":"red","font-size":"24px"},attrs:{"animate":"beat"}})],1),_vm._v("\n    in\n    "),_c('em',[_c('a',{attrs:{"href":"https://zumbaritaslippstadt.wordpress.com/","target":"_blank","rel":"noopener"}},[_vm._v("Lippstadt")])]),_vm._v(" "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),(_vm.showErrALert)?_c('b-alert',{staticStyle:{"display":"inline-block"},attrs:{"show":"","variant":"danger"}},[_vm._v("\n      Error loading articles, click\n      "),_c('a',{attrs:{"href":"https://zumbaritaslippstadt.wordpress.com/2020/08/07/zumba-masterclass-2020/","target":"_blank"}},[_vm._v("here")]),_vm._v("\n      to read them.\n    ")]):_vm._e(),_vm._v(" "),(_vm.showLoader)?_c('b-spinner',{attrs:{"variant":"primary"}}):_vm._e()],1),_vm._v(" "),(_vm.blogs.length > 0)?_c('b-row',{staticClass:"articles"},_vm._l((_vm.blogs),function(blog){return _c('div',{key:blog.id,staticClass:"col-md-6"},[_c('div',[_c('b-card-group',{attrs:{"deck":""}},[_c('b-card',{staticClass:"mb-2",attrs:{"img-src":blog.image,"img-alt":blog.imgAlt,"img-top":"","tag":"article"}},[_c('h4',[_vm._v(_vm._s(blog.title))]),_vm._v(" "),_vm._l((blog.tags),function(tag){return _c('b-badge',{key:tag,staticClass:"animate__animated animate__fadeInUp",staticStyle:{"margin":"2px"},attrs:{"pill":"","variant":_vm.tagVariants[Math.floor(Math.random() * _vm.tagVariants.length)]}},[_vm._v("#"+_vm._s(tag))])}),_vm._v(" "),_c('hr'),_vm._v(" "),_c('b-card-text',[_vm._v(_vm._s(blog.desc))]),_vm._v(" "),_c('b-button',{attrs:{"href":blog.url,"target":"_blank","rel":"noopener","variant":"default"}},[_vm._v("Read More..")])],2)],1)],1)])}),0):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Articles.vue?vue&type=template&id=2a426cbe&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-ionicons/dist/md-heart.vue?vue&type=template&id=4c5777e2&
var md_heartvue_type_template_id_4c5777e2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"md-heart-icon"}},[_vm._ssrNode("<svg viewBox=\"0 0 512 512\""+(_vm._ssrAttr("width",_vm.w))+(_vm._ssrAttr("height",_vm.h))+" class=\"ion__svg\"><path d=\"M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z\"></path></svg>")])}
var md_heartvue_type_template_id_4c5777e2_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-ionicons/dist/md-heart.vue?vue&type=template&id=4c5777e2&

// EXTERNAL MODULE: ./node_modules/vue-ionicons/dist/ionicons-mixin.js
var ionicons_mixin = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-ionicons/dist/md-heart.vue?vue&type=script&lang=js&
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

/* harmony default export */ var md_heartvue_type_script_lang_js_ = ({
  name: "md-heart-icon",
  mixins: [ionicons_mixin["a" /* default */]],

  data() {
    let iconTitle = this.title ? this.title : "Md Heart Icon";
    return {
      iconTitle: iconTitle
    };
  }

});
// CONCATENATED MODULE: ./node_modules/vue-ionicons/dist/md-heart.vue?vue&type=script&lang=js&
 /* harmony default export */ var dist_md_heartvue_type_script_lang_js_ = (md_heartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vue-ionicons/dist/md-heart.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dist_md_heartvue_type_script_lang_js_,
  md_heartvue_type_template_id_4c5777e2_render,
  md_heartvue_type_template_id_4c5777e2_staticRenderFns,
  false,
  null,
  null,
  "9afb7f2a"
  
)

/* harmony default export */ var md_heart = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Articles.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//

/* harmony default export */ var Articlesvue_type_script_lang_js_ = ({
  components: {
    HeartIcon: md_heart
  },

  data() {
    return {
      showLoader: true,
      showErrALert: false,
      tagVariants: ["primary", "success", "warning", "info", "dark", "danger"],
      blogs: []
    };
  },

  head: {
    title: "Blog 📚 - Lydia Rodriguez",
    meta: [{
      hid: "description",
      name: "description",
      content: "Read articles written by Zumbarita Marimar, articles include topics under Zumba and many more"
    }, {
      hid: "og:title",
      name: "og:title",
      content: "Blog 📚 - Zumbaritas"
    }, {
      property: "og:description",
      content: "Read articles written by Zumbarita Marimar, articles include topics under Zumba and many more."
    }]
  },
  methods: {
    // get articles hosted on dev.to
    getArticles(username, success, error) {
      let articleImage;
      fetch("https://zumbaritaslippstadt.wordpress.com/" + username).then(res => res.json()).then(data => {
        data.forEach(article => {
          if (/(hcti.io)/.test(article.image) == true) {
            // use random image from lorem picsum
            articleImage = "https://picsum.photos/600/400";
          } else {
            articleImage = article.social_image;
          }

          this.blogs.push({
            id: article.id,
            title: article.title,
            desc: article.description,
            image: articleImage,
            url: article.url,
            date: article.readable_publish_date,
            tags: article.tag_list,
            imgAlt: article.title + " - Lydia Rodriguez"
          });
        });
        success();
      }).catch(err => {
        error();
        console.log("Error fetching articles " + err);
      });
    }

  },

  mounted() {
    this.getArticles("lydiarodriguez", () => {
      this.showLoader = false;
    }, () => {
      this.showErrALert = true;
      this.showLoader = false;
    });
  }

});
// CONCATENATED MODULE: ./pages/Articles.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Articlesvue_type_script_lang_js_ = (Articlesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/Articles.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(50)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Articles_component = Object(componentNormalizer["a" /* default */])(
  pages_Articlesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2a426cbe",
  "6a00622f"
  
)

/* harmony default export */ var Articles = __webpack_exports__["default"] = (Articles_component.exports);

/***/ })

};;
//# sourceMappingURL=Articles.js.map