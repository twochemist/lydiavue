exports.ids = [3];
exports.modules = {

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("74ebe264", content, true, context)
};

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/contact.fce59e8.jpg";

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_f5064d86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_f5064d86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_f5064d86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_f5064d86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_f5064d86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_f5064d86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container[data-v-f5064d86]{margin-top:120px}form[data-v-f5064d86]{margin-top:40px;text-align:left}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Contact.vue?vue&type=template&id=f5064d86&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-container',{staticClass:"page animate__animated animate__fadeIn"},[_c('b-row',[_c('b-col',{attrs:{"md":"3"}}),_vm._v(" "),_c('b-col',[_c('h2',[_vm._v("KOMMENTAR ABSENDEN 💌")]),_vm._v(" "),_c('p',{staticClass:"text-left"},[_vm._v("Deine E-Mail-Adresse wird nicht veröffentlicht.")]),_vm._v(" "),_c('b-form',{on:{"submit":_vm.onSubmit}},[(_vm.showAlert)?_c('b-alert',{attrs:{"show":"","variant":"success"}},[_c('strong',[_vm._v("All done 🎉")]),_c('br'),_vm._v("\n          Danke schön! "+_vm._s(this.form.name)+", Ich melde mich bald.\n        ")]):_vm._e(),_vm._v(" "),_c('b-form-group',{attrs:{"id":"input-group-1","label":"Name:","label-for":"name"}},[_c('b-form-input',{attrs:{"id":"name","required":"","placeholder":"Dein Name"},model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}})],1),_vm._v(" "),_c('b-form-group',{attrs:{"id":"input-group-2","label":"E-mail:","label-for":"email"}},[_c('b-form-input',{attrs:{"id":"email","type":"email","required":"","placeholder":"example@gmail.com"},model:{value:(_vm.form.email),callback:function ($$v) {_vm.$set(_vm.form, "email", $$v)},expression:"form.email"}})],1),_vm._v(" "),_c('b-form-group',{attrs:{"id":"input-group-3","label":"Kommentar","label-for":"message"}},[_c('b-form-textarea',{attrs:{"id":"message","no-resize":"","rows":"3","required":"","placeholder":"Hallo Lydia! Ich möchte mit dir mitteilen.."},model:{value:(_vm.form.message),callback:function ($$v) {_vm.$set(_vm.form, "message", $$v)},expression:"form.message"}})],1),_vm._v(" "),_c('b-button',{attrs:{"type":"submit","variant":"primary"}},[_vm._v("Senden")]),_vm._v(" "),_c('br'),_c('br')],1)],1),_vm._v(" "),_c('b-col',{attrs:{"md":"3"}})],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Contact.vue?vue&type=template&id=f5064d86&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Contact.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Contactvue_type_script_lang_js_ = ({
  data() {
    return {
      showAlert: false,
      form: {
        name: "",
        email: "",
        message: ""
      }
    };
  },

  methods: {
    onSubmit: function (e) {
      e.preventDefault();
      var name = this.form.name;
      var email = this.form.email;
      var message = this.form.message;
      fetch(`formspree/url/send?name=${name}&email=${email}&message=${message}`).then(res => res.json()).then(() => {
        this.showAlert = true;
      }).catch(() => {
        alert("Sending message failed, please try again");
      });
    }
  },
  head: {
    title: "Kontakt 📧 - Lydia Rodriguez",
    meta: [{
      hid: "description",
      name: "description",
      content: "Do you have any enquires? Send a message now to Lydia Rodriguez"
    }, {
      hid: "og:title",
      name: "og:title",
      content: "Kontakt 📧 - Lydia Rodriguez"
    }, {
      property: "og:description",
      content: "Do you have any enquires? Send a message now to Lydia Rodriguez"
    }, {
      hid: "og:image",
      name: "og:image",
      content: __webpack_require__(52)
    }]
  }
});
// CONCATENATED MODULE: ./pages/Contact.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Contactvue_type_script_lang_js_ = (Contactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/Contact.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(53)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Contactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f5064d86",
  "7718c0c4"
  
)

/* harmony default export */ var Contact = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=Contact.js.map