(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/writeemail/writeemail"],{

/***/ 36:
/*!***************************************************************************************************************************************!*\
  !*** /Users/liaowenbin/iCollections/Project/baidu/1futureEmail/uniapp/futureEmail/main.js?{"page":"pages%2Fwriteemail%2Fwriteemail"} ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _writeemail = _interopRequireDefault(__webpack_require__(/*! ./pages/writeemail/writeemail.vue */ 37));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_writeemail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 37:
/*!********************************************************************************************************************!*\
  !*** /Users/liaowenbin/iCollections/Project/baidu/1futureEmail/uniapp/futureEmail/pages/writeemail/writeemail.vue ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _writeemail_vue_vue_type_template_id_67ab5b26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./writeemail.vue?vue&type=template&id=67ab5b26& */ 38);
/* harmony import */ var _writeemail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./writeemail.vue?vue&type=script&lang=js& */ 40);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _writeemail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _writeemail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _writeemail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./writeemail.vue?vue&type=style&index=0&lang=scss& */ 42);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _writeemail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _writeemail_vue_vue_type_template_id_67ab5b26___WEBPACK_IMPORTED_MODULE_0__["render"],
  _writeemail_vue_vue_type_template_id_67ab5b26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _writeemail_vue_vue_type_template_id_67ab5b26___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/writeemail/writeemail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 38:
/*!***************************************************************************************************************************************************!*\
  !*** /Users/liaowenbin/iCollections/Project/baidu/1futureEmail/uniapp/futureEmail/pages/writeemail/writeemail.vue?vue&type=template&id=67ab5b26& ***!
  \***************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeemail_vue_vue_type_template_id_67ab5b26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./writeemail.vue?vue&type=template&id=67ab5b26& */ 39);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeemail_vue_vue_type_template_id_67ab5b26___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeemail_vue_vue_type_template_id_67ab5b26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeemail_vue_vue_type_template_id_67ab5b26___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeemail_vue_vue_type_template_id_67ab5b26___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 39:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/liaowenbin/iCollections/Project/baidu/1futureEmail/uniapp/futureEmail/pages/writeemail/writeemail.vue?vue&type=template&id=67ab5b26& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    EmailBlock: function() {
      return __webpack_require__.e(/*! import() | components/EmailBlock/EmailBlock */ "components/EmailBlock/EmailBlock").then(__webpack_require__.bind(null, /*! @/components/EmailBlock/EmailBlock.vue */ 71))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. ????????????????????????????????????")
    console.error(
      "2. ???????????????????????? easycom ??????????????????https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. ?????????????????? easycom ????????????????????????????????? components ??????????????????"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 40:
/*!*********************************************************************************************************************************************!*\
  !*** /Users/liaowenbin/iCollections/Project/baidu/1futureEmail/uniapp/futureEmail/pages/writeemail/writeemail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeemail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./writeemail.vue?vue&type=script&lang=js& */ 41);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeemail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeemail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeemail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeemail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeemail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 41:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/liaowenbin/iCollections/Project/baidu/1futureEmail/uniapp/futureEmail/pages/writeemail/writeemail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
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
var _default =
{
  data: function data() {

    //??????????????????
    var animation_bg = uni.createAnimation({
      transformOrigin: "50% 50%",
      duration: 200,
      timingFunction: "ease",
      delay: 0 });


    //?????????????????????
    var animation_w = uni.createAnimation({
      transformOrigin: "50% 50%",
      duration: 400,
      timingFunction: "ease",
      delay: 0 });


    //????????????????????????
    var animation_c = uni.createAnimation({
      transformOrigin: "50% 50%",
      duration: 100,
      timingFunction: "ease",
      delay: 0 });


    return {
      currentTargetRef: '',
      animation_bg: animation_bg, //????????????????????????
      blackBGData: {}, //????????????????????????
      animation_w: animation_w, //?????????????????????
      textareaData: {}, //?????????????????????
      INPUTFLAG: false, //?????????????????????
      animation_c: animation_c, //????????????????????????
      confirmBData: {}, //????????????????????????
      jianpanConfirm: false,
      fuck1content: '',
      textareaLS: '', //?????????????????????
      //??????????????????
      blockObjectList: [],

      addTextFlag: true, //??????????????????
      addPicFlag: true,
      //??????????????????
      whiteNumber: 4,
      addFlag: true,

      // ??????
      session: '',
      letterid: '',
      nowType: 0,

      //??????
      biaoti: "??????",

      //????????????
      sentFlag: true,
      xuanfuFlag: true,

      //??? ???
      blockclickclock: false };

  },
  methods: {
    // ????????????????????????????????????????????????????????????????????????
    uploadletter: function uploadletter(message, State, buttonclick) {
      var self = this;

      uni.showLoading({
        title: message });


      //?????????????????????
      uni.request({
        url: 'https://afflatus.xyz/updateEmail',
        data: {
          session: this.session,
          letterid: this.letterid,
          letterState: State,
          blockObjectList: this.blockObjectList },

        method: 'POST',
        success: function success(res) {
          // ??????, ??????????????????
          console.log(res);
          if (res.data.status == 200) {
            //?????????????????????
            // var changeFlag = false

            var sum = 0;
            var _success = 0;
            var timeid = null;
            // ???????????????????????????????????????????????????????????? ??????
            for (var item in self.blockObjectList) {
              if (self.blockObjectList[item].type != 'text' && self.blockObjectList[item].contentChange == 1 && self.blockObjectList[item].content != '') {
                sum += 1;
              }
            }

            // ??????????????????????????????????????????
            setTimeout(function () {

              var p = new Promise(function (reslove, reject) {
                for (var item in self.blockObjectList) {
                  if (self.blockObjectList[item].type != 'text' && self.blockObjectList[item].contentChange == 1 && self.blockObjectList[item].content != '') {
                    uni.uploadFile({
                      url: 'https://afflatus.xyz/uploadFile',
                      filePath: self.blockObjectList[item].content,
                      name: 'file', //??????????????? key , ???????????????????????????????????? key ????????????????????????????????????
                      header: {
                        session: self.session,
                        letterid: self.letterid,
                        blockid: self.blockObjectList[item].id,
                        blockType: self.blockObjectList[item].blockType },

                      success: function success(res) {
                        var newres = JSON.parse(res.data);
                        if (newres.status == 200) {
                          _success += 1;
                        } else {
                          console.log('ooooooooo');
                          reject('????????????');
                        }
                      },
                      fail: function fail() {
                        console.log('hhhhhhhh');
                        reject('????????????');
                      } });

                  }
                }

                // ?????????????????????????????????????????????
                setTimeout(function () {
                  reject('????????????');
                }, 20 * 1000);

                // ??????????????????????????????(??????????????????????????????????????????????????????????????????)
                timeid = setInterval(function () {
                  if (sum == _success) {
                    console.log('????????????');
                    reslove('????????????');
                  }
                }, 100);
              });

              p.then(function (data) {
                // console.log('????????????')
                clearInterval(timeid);
                uni.hideLoading();

                //????????????????????????
                if (buttonclick == 'sent') {
                  uni.redirectTo({
                    url: '../index/index' });

                }

                //????????????????????????
                else if (buttonclick == 'return') {
                    uni.redirectTo({
                      url: '../setemail/setemail?session=' + self.session + '&haveSave=' + 'true' + '&letterid=' + self.letterid });

                  }


              }, function (err) {
                console.log('?????????');
                if (err) {
                  uni.hideLoading();
                  uni.showToast({
                    title: '???????????????',
                    mask: true,
                    icon: 'none',
                    duration: 2000 });

                  // return false
                }
              });
            }, 10);


          }
          // ????????????????????????
          else {
              console.log('ffffff');
              uni.hideLoading();
              uni.showToast({
                title: '???????????????',
                mask: true,
                icon: 'none',
                duration: 2000 });

            }

        },
        fail: function fail() {
          console.log('kkkkkkk');
          // ????????????????????????
          uni.hideLoading();
          uni.showToast({
            title: '???????????????',
            mask: true,
            icon: 'none',
            duration: 2000 });

        } });


    },


    // ????????????????????????
    returnIndex: function returnIndex() {
      if (this.blockclickclock) {
        uni.redirectTo({
          url: '../setemail/setemail?session=' + this.session + '&haveSave=' + 'true' + '&letterid=' + this.letterid + '&nowType=' + this.nowType });

        return 0;
      }


      var self = this;
      this.uploadletter('?????????...', 0, 'return');
    },

    //????????????????????????
    editFunction: function editFunction(e) {
      // console.log("?????? ??????????????????")
      if (this.blockclickclock) {// ??????????????????
        console.log("?????? ??????????????????");
        // ???????????????, ?????????????????????
        if (this.$refs[e.currentTarget.dataset.ref][0].blockType == 'picture') {
          // console.log(this.$refs[e.currentTarget.dataset.ref][0].BlockContent)
          uni.previewImage({
            urls: [this.$refs[e.currentTarget.dataset.ref][0].BlockContent] });

        }

        return 0;
      }


      //????????????ref, ????????????
      var lastRef = this.currentTargetRef;
      this.currentTargetRef = e.currentTarget.dataset.ref;

      //?????????????????????
      if (lastRef != '' && lastRef != this.currentTargetRef)
      this.$refs[lastRef][0].returnBack();

      //????????????
      if (this.$refs[this.currentTargetRef][0].model == 'edit') {
        //????????????
        // console.log('??????????????????' + this.currentTargetRef)
        if (this.$refs[this.currentTargetRef][0].blockType == 'text') {
          //?????????????????????
          var _i = 0;
          while (true) {
            if (this.blockObjectList[_i]['ref'] == this.currentTargetRef) {
              this.textareaLS = this.blockObjectList[_i]['content'];
              break;
            }
            _i += 1;
            if (_i >= this.blockObjectList.length)
            break;
          }

          //??????????????????
          this.animation_bg.height('100%');
          this.animation_bg.width('100%');
          this.animation_bg.left('0px');
          this.animation_bg.top('0px');
          this.animation_bg.opacity(0.7);
          this.animation_bg.step();

          //???????????????
          this.animation_w.width('700rpx');
          this.animation_w.height('30%');
          this.animation_w.opacity(0.7);
          this.animation_w.left('9px');
          this.animation_w.top('20%');
          this.animation_w.step();
          //??????????????????
          this.animation_c.opacity(0.7);
          this.animation_c.width('100rpx');
          this.animation_c.height('100rpx');
          this.animation_c.step();

          this.blackBGData = this.animation_bg.export();
          this.textareaData = this.animation_w.export();
          this.confirmBData = this.animation_c.export();

          this.INPUTFLAG = true;
        }

        // ???????????????
        else if (this.$refs[this.currentTargetRef][0].blockType == 'picture') {
            var self = this;
            uni.chooseImage({
              count: 1,
              success: function success(res) {
                // ????????????????????????(jpg,jpeg,png), ????????????
                var fileType = res.tempFilePaths[0].split('.');
                fileType = fileType[fileType.length - 1];
                if (fileType == 'jpg' || fileType == 'png' || fileType == 'jpeg' || fileType == 'gif' ||
                fileType == 'JPG' || fileType == 'PNG' || fileType == 'JPEG' || fileType == 'GIF') {
                  // else ???????????????, ??????????????????, ???????????????5M, ??????????????????, ?????????????????????5M.
                  // quality?????? = 100 - [ (???????????????-5M)/??????????????? ]*100 - 4
                  // ?????????10??????????????????.
                  if (res.tempFiles[0].size > 5242880) {//5*1024*1024 B
                    var quality = 100 - (res.tempFiles[0].size - 5242880) / res.tempFiles[0].size * 100;
                    console.log("quality");
                    console.log(quality);
                    uni.compressImage({
                      src: res.tempFilePaths[0],
                      quality: quality,
                      success: function success(e) {
                        self.houchuliPic(e.tempFilePath);
                      } });

                  } else {
                    self.houchuliPic(res.tempFilePaths[0]);
                  }
                } else {
                  uni.showToast({
                    title: '??????????????????',
                    mask: true,
                    icon: 'none',
                    duration: 2000 });

                }
              } });

          }
      }

      //????????????
      else if (this.$refs[this.currentTargetRef][0].model == 'delete') {
          var i = 0;
          while (true) {
            if (this.blockObjectList[i].ref == this.currentTargetRef) {
              this.$refs[this.currentTargetRef][0].returnBack();

              var j = i + 1;
              while (true) {
                if (j > this.blockObjectList.length - 1) {
                  break;
                }
                this.blockObjectList[j].orderNum -= 1;
                this.blockObjectList[j].orderChange = 1;
                j += 1;
              }

              // delete this.blockObjectList[i] //???????????????NUll??????????????????????????????
              this.blockObjectList.splice(i, 1); //??????????????????
              break;
            }

            i += 1;
            if (i > this.blockObjectList.length - 1) {
              break;
            }
          }

          this.currentTargetRef = '';
        }
        //????????????
        else if (this.$refs[this.currentTargetRef][0].model == 'shangMove') {

            var i = 0;
            while (true) {
              if (this.blockObjectList[i].ref == this.currentTargetRef) {
                if (i == 0)
                break;

                this.$refs[this.currentTargetRef][0].returnBack();
                //???????????????????????????
                var lastObj = this.blockObjectList[i - 1];

                this.blockObjectList[i - 1].orderChange = 1;
                this.blockObjectList[i].orderChange = 1;
                this.blockObjectList[i - 1].orderNum += 1;
                this.blockObjectList[i].orderNum -= 1;

                //??????????????????
                this.blockObjectList.splice(i - 1, 1, this.blockObjectList[i]);

                //??????????????????
                this.blockObjectList.splice(i, 1, lastObj);


                break;
              }

              i += 1;
              if (i > this.blockObjectList.length - 1) {
                break;
              }
            }
          }
          //????????????
          else if (this.$refs[this.currentTargetRef][0].model == 'xiaMove') {
              var i = 0;
              while (true) {
                if (this.blockObjectList[i].ref == this.currentTargetRef) {
                  if (i == this.blockObjectList.length - 1)
                  break;

                  this.$refs[this.currentTargetRef][0].returnBack();
                  //???????????????????????????
                  var lastObj = this.blockObjectList[i + 1];

                  this.blockObjectList[i + 1].orderChange = 1;
                  this.blockObjectList[i].orderChange = 1;
                  this.blockObjectList[i + 1].orderNum -= 1;
                  this.blockObjectList[i].orderNum += 1;

                  //??????????????????
                  this.blockObjectList.splice(i + 1, 1, this.blockObjectList[i]);

                  //??????????????????
                  this.blockObjectList.splice(i, 1, lastObj);

                  break;
                }

                i += 1;
                if (i > this.blockObjectList.length - 1) {
                  break;
                }
              }
            }

    },
    // ?????????????????????????????? ?????????
    houchuliPic: function houchuliPic(path) {
      //???????????????
      var self = this;
      var i = 0;
      console.log(path);
      while (true) {
        if (self.blockObjectList[i]['ref'] == self.currentTargetRef) {(function () {
            var j = i;
            console.log('hello');
            //???????????????
            uni.saveFile({
              tempFilePath: path,
              success: function success(res) {
                // console.log(res.savedFilePath)
                // console.log(self.blockObjectList)
                console.log('?????????');
                console.log(path);
                self.blockObjectList[j]['content'] = res.savedFilePath;
                //????????????
                if (self.blockObjectList[j]['content'] != self.blockObjectList[j]['contentLast']) {
                  self.blockObjectList[j]['contentChange'] = 1;
                } else {
                  self.blockObjectList[j]['contentChange'] = 0;
                }
                i = self.blockObjectList.length;
              } });})();

        }
        i += 1;
        if (i >= self.blockObjectList.length)
        break;
      }
      self.$refs[self.currentTargetRef][0].model = '';

    },

    // ????????????????????????????????????????????????
    confirmF: function confirmF() {
      // console.log('haha')
      this.INPUTFLAG = false;
      //??????????????????
      this.animation_bg.height('0rpx');
      this.animation_bg.width('0rpx');
      this.animation_bg.left('375rpx');
      this.animation_bg.top('375rpx');
      this.animation_bg.opacity(0);
      this.animation_bg.step();
      //???????????????
      this.animation_w.width('0rpx');
      this.animation_w.height('0rpx');
      this.animation_w.opacity(0);
      this.animation_w.left('375rpx');
      this.animation_w.top('375rpx');
      this.animation_w.step();
      //??????????????????
      this.animation_c.opacity(0.7);
      this.animation_c.width('0rpx');
      this.animation_c.height('0rpx');
      this.animation_c.step();

      this.blackBGData = this.animation_bg.export();
      this.textareaData = this.animation_w.export();
      this.confirmBData = this.animation_c.export();

      //????????????
      //??????????????????
      var i = 0;
      while (true) {
        if (this.blockObjectList[i]['ref'] == this.currentTargetRef) {
          this.blockObjectList[i]['content'] = this.textareaLS;
          if (this.blockObjectList[i]['content'] != this.blockObjectList[i]['contentLast']) {
            this.blockObjectList[i]['contentChange'] = 1;
          } else {
            this.blockObjectList[i]['contentChange'] = 0;
          }
          break;
        }
        i += 1;
        if (i >= this.blockObjectList.length)
        break;
      }
      this.$refs[this.currentTargetRef][0].model = '';
    },

    // ??????????????????
    whiteClick: function whiteClick() {
      if (this.blockclickclock) {
        return 0;
      }
      console.log(this.blockObjectList);

      //????????????????????????
      if (this.currentTargetRef != '') {
        this.$refs[this.currentTargetRef][0].model = '';
        this.$refs[this.currentTargetRef][0].returnBack();
      }

    },

    //????????????
    addText: function addText() {var _this = this;

      if (this.addFlag) {
        this.addFlag = false;

        //????????????ID??????Ref
        var date = new Date();
        var year = date.getFullYear(); //???
        var month = date.getMonth() + 1; //???
        var day = date.getDate(); //???
        var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(); //???
        var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(); //???
        var second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds(); //???
        month >= 1 && month <= 9 ? month = "0" + month : "";
        day >= 0 && day <= 9 ? day = "0" + day : "";
        hour >= 0 && hour <= 9 ? hour = "0" + hour : "";
        minute >= 0 && minute <= 9 ? minute = "0" + minute : "";
        second >= 0 && second <= 9 ? second = "0" + second : "";

        var id = String(year) + String(month) + String(day) + String(hour) + String(minute) + String(second);
        var ref = id;

        //push?????????
        this.blockObjectList.push({
          id: id,
          ref: ref,
          type: 'text',
          blockType: 0,
          content: '',
          contentLast: '',
          contentChange: 1,
          orderNum: -1,
          orderChange: 1,
          newblock: true });


        // ??????orderNum
        this.blockObjectList[this.blockObjectList.length - 1].orderNum = this.blockObjectList.length;

        setTimeout(function () {
          _this.addFlag = true;
        }, 1100);

      }
    },

    // ????????????
    addPic: function addPic() {var _this2 = this;
      if (this.addFlag) {
        this.addFlag = false;

        //????????????ID??????Ref
        var date = new Date();
        var year = date.getFullYear(); //???
        var month = date.getMonth() + 1; //???
        var day = date.getDate(); //???
        var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(); //???
        var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(); //???
        var second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds(); //???
        month >= 1 && month <= 9 ? month = "0" + month : "";
        day >= 0 && day <= 9 ? day = "0" + day : "";
        hour >= 0 && hour <= 9 ? hour = "0" + hour : "";
        minute >= 0 && minute <= 9 ? minute = "0" + minute : "";
        second >= 0 && second <= 9 ? second = "0" + second : "";

        var id = String(year) + String(month) + String(day) + String(hour) + String(minute) + String(second);
        var ref = id;

        //push?????????
        this.blockObjectList.push({
          id: id,
          ref: ref,
          type: 'picture',
          blockType: 1,
          content: '',
          contentLast: '',
          contentChange: 1,
          orderNum: -1,
          orderChange: 1,
          newblock: true });


        // ??????orderNum
        this.blockObjectList[this.blockObjectList.length - 1].orderNum = this.blockObjectList.length;

        setTimeout(function () {
          _this2.addFlag = true;
        }, 1100);

      }
    },

    // ????????????
    sentFunction: function sentFunction() {
      var self = this;

      uni.requestSubscribeMessage({
        tmplIds: ['Ue2gQHM_jKb-Z6iPwGAf69NkkURm-IqmjadGqrLgtOk'],
        success: function success(res) {
          console.log(res);

          if (JSON.stringify(res).indexOf('accept') != -1) {// ??????????????????
            // ????????????????????????(??????????????????, ???????????????????????????????????????)
            if (self.blockObjectList.length < 1) {
              // console.log('?????????????????????')
              uni.showToast({
                title: '?????????????????????',
                icon: 'none',
                mask: true });

            } else {
              uni.showModal({
                title: "????????????",
                content: "????????????????????????",
                success: function success(res) {
                  if (res.confirm) {
                    self.uploadletter('?????????...', 1, 'sent');
                  }
                } });


            }
          } else {// ?????????????????????
            uni.showToast({
              title: '?????????????????????',
              mask: true,
              icon: 'none',
              duration: 2000 });

          }
        } });


      // console.log(typeof this.blockObjectList)
    } },


  onLoad: function onLoad(data) {
    uni.showLoading({
      title: "?????????" });


    var self = this;
    //??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
    this.session = data.session;
    this.letterid = data.letterid;
    if (data.nowType == 2) {
      this.nowType = 2;
      this.biaoti = "????????????";
      this.sentFlag = false;
      this.xuanfuFlag = false;
      this.blockclickclock = true;
    }

    //??????blockObjectList
    var blockObjectList_bb = [];
    uni.request({
      url: 'https://afflatus.xyz/loadLetter',
      data: {
        session: this.session,
        letterid: this.letterid },

      method: 'POST',
      success: function success(res) {
        console.log(res);
        if (res.data.status == 200) {
          blockObjectList_bb = res.data.data;
          console.log(blockObjectList_bb);

          var tmpblockObjectList = new Array(blockObjectList_bb.length);
          var timeid = null;
          var sum = blockObjectList_bb.length;
          var _success2 = 0;
          // ???????????????????????????????????????????????????
          var aPromise = new Promise(function (reslove, reject) {

            setTimeout(function () {// ?????????????????????????????????????????????
              reject('????????????');
            }, 20 * 1000);

            timeid = setInterval(function () {
              if (sum == _success2) {
                console.log('????????????');
                reslove('????????????');
              }
              console.log("sum:" + sum + " success:" + _success2);
            }, 1000); //100

            var arr = [];
            for (var n in blockObjectList_bb) {
              arr[n] = Number(n);
            }

            // ???????????????????????????
            blockObjectList_bb.forEach(function (item) {
              var blockObject = {
                id: '',
                ref: '',
                type: 'text',
                blockType: 0,
                content: '',
                contentLast: '',
                contentChange: 0,
                orderNum: -1,
                orderChange: 1,
                newblock: true };

              blockObject['id'] = item.blockid;
              blockObject['ref'] = item.blockid;
              blockObject['blockType'] = item.blockType;
              blockObject['orderNum'] = item.orderNum;
              if (item.blockType == 0) {
                blockObject['type'] = 'text';
              } else if (item.blockType == 1) {
                blockObject['type'] = 'picture';
              } else if (item.blockType == 2) {
                blockObject['type'] = 'music';
              }
              blockObject['orderChange'] = 0;
              blockObject['newblock'] = false;

              if (blockObject['blockType'] == 0) {//????????????????????????
                blockObject['content'] = item.content;
                blockObject['contentLast'] = blockObject['content'];
                tmpblockObjectList[blockObject['orderNum'] - 1] = blockObject;
                _success2 += 1;
                // tmpblockObjectList.push(blockObject)
              } else {//???????????????
                // console.log('??????????????????')
                blockObject['content'] = item.content;

                if (blockObject['content'] != '') {
                  //?????????????????????????????????
                  uni.getSavedFileInfo({
                    filePath: blockObject['content'],
                    success: function success(res) {
                      tmpblockObjectList[blockObject['orderNum'] - 1] = blockObject;
                      _success2 += 1;
                      // tmpblockObjectList.push(blockObject)
                    },
                    fail: function fail() {
                      console.log("?????????????????????????????????");
                      //??????????????????????????????????????????
                      uni.downloadFile({
                        url: 'https://afflatus.xyz/download',
                        header: {
                          session: self.session,
                          letterid: self.letterid,
                          blockid: item.blockid,
                          blockType: String(item.blockType) },

                        success: function success(res) {
                          if (res.statusCode === 200) {
                            console.log('????????????');
                            // blockObject['content'] = res.tempFilePath
                            // blockObject['contentLast'] = blockObject['content']
                            // success += 1
                            // tmpblockObjectList[blockObject['orderNum']-1] = blockObject
                            //????????????????????????
                            var mytempFilePath = res.tempFilePath;

                            console.log("res.tempFilePath = " + res.tempFilePath);

                            uni.saveFile({
                              tempFilePath: mytempFilePath,
                              success: function success(res) {
                                console.log("???????????????: " + res.savedFilePath);
                                blockObject['content'] = res.savedFilePath;
                                blockObject['contentLast'] = blockObject['content'];
                                _success2 += 1;
                                tmpblockObjectList[blockObject['orderNum'] - 1] = blockObject;

                                //??????????????????????????????
                                uni.request({
                                  url: 'https://afflatus.xyz/updatePath',
                                  data: {
                                    session: self.session,
                                    letterid: self.letterid,
                                    blockid: item.blockid,
                                    changecontent: res.savedFilePath },

                                  method: 'POST',
                                  success: function success(res) {
                                    console.log('???????????????');
                                  },
                                  fail: function fail(e) {
                                    console.log('???????????? :' + e);
                                  } });


                              },
                              fail: function fail(e) {
                                console.log("????????????");
                                console.log("mytempFilePath=" + mytempFilePath);

                                console.log(e);
                              } });

                          }
                        },
                        fail: function fail(e) {
                          console.log('???????????? ' + e);
                        } });

                    } });


                } else {
                  blockObject['contentLast'] = blockObject['content'];
                  tmpblockObjectList[blockObject['orderNum'] - 1] = blockObject;
                  _success2 += 1;
                }

              }
            });


          });

          aPromise.then(function (data) {
            clearInterval(timeid);

            self.blockObjectList = tmpblockObjectList;
            console.log(tmpblockObjectList);
            uni.hideLoading();

          }, function (err) {
            clearInterval(timeid);
            uni.hideLoading();
            uni.showToast({
              title: '???????????????',
              mask: true,
              icon: 'none',
              duration: 2000 });

          });

        }

      },
      fail: function fail() {
        uni.hideLoading();
      } });




    // this.blockObjectList.push({
    // 						id,
    // 						ref,
    // 						type: 'text',
    // 						blockType: 0,
    // 						content: '',
    // 						contentLast: '',
    // 						contentChange: 1, 
    // 						orderNum: -1,
    // 						orderChange: 1,
    // 						newblock: true, 
    // 					})			
    // this.haveSave = data.haveSave == "true"

    // ??????user session????????????
    // url: '../writeemail/writeemail?' + 'session=' + self.session + '&letterid=' + self.letterid
    // ???lettetid????????????

    // ??????????????????????????????????????????

    // ??????
    // ?????????????????????????????????
    // this.whiteNumber = 4 - this.blockObjectList.length
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 42:
/*!******************************************************************************************************************************************************!*\
  !*** /Users/liaowenbin/iCollections/Project/baidu/1futureEmail/uniapp/futureEmail/pages/writeemail/writeemail.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeemail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./writeemail.vue?vue&type=style&index=0&lang=scss& */ 43);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeemail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeemail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeemail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeemail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeemail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 43:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/liaowenbin/iCollections/Project/baidu/1futureEmail/uniapp/futureEmail/pages/writeemail/writeemail.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[36,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/writeemail/writeemail.js.map