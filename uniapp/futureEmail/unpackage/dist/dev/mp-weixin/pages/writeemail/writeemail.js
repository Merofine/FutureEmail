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
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
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

    //蒙版动画实例
    var animation_bg = uni.createAnimation({
      transformOrigin: "50% 50%",
      duration: 200,
      timingFunction: "ease",
      delay: 0 });


    //输入框动画实例
    var animation_w = uni.createAnimation({
      transformOrigin: "50% 50%",
      duration: 400,
      timingFunction: "ease",
      delay: 0 });


    //完成按钮动画实例
    var animation_c = uni.createAnimation({
      transformOrigin: "50% 50%",
      duration: 100,
      timingFunction: "ease",
      delay: 0 });


    return {
      currentTargetRef: '',
      animation_bg: animation_bg, //黑色蒙版动画实例
      blackBGData: {}, //黑色蒙版动画数据
      animation_w: animation_w, //输入框动画实例
      textareaData: {}, //输入框动画数据
      INPUTFLAG: false, //输入框的软键盘
      animation_c: animation_c, //完成按钮动画实例
      confirmBData: {}, //完成按钮动画数据
      jianpanConfirm: false,
      fuck1content: '',
      textareaLS: '', //输入框临时数据
      //模块对象列表
      blockObjectList: [],

      addTextFlag: true, //防止多次添加
      addPicFlag: true,
      //空白区域数量
      whiteNumber: 4,
      addFlag: true,

      // 信息
      session: '',
      letterid: '',
      nowType: 0,

      //标题
      biaoti: "写信",

      //悬浮按钮
      sentFlag: true,
      xuanfuFlag: true,

      //块 锁
      blockclickclock: false };

  },
  methods: {
    // 将信的内容上传到服务器，即块的信息以及对应的文件
    uploadletter: function uploadletter(message, State, buttonclick) {
      var self = this;

      uni.showLoading({
        title: message });


      //先发送列表信息
      uni.request({
        url: 'https://afflatus.xyz/updateEmail',
        data: {
          session: this.session,
          letterid: this.letterid,
          letterState: State,
          blockObjectList: this.blockObjectList },

        method: 'POST',
        success: function success(res) {
          // 成功, 并跳回主页面
          console.log(res);
          if (res.data.status == 200) {
            //发送非文本数据
            // var changeFlag = false

            var sum = 0;
            var _success = 0;
            var timeid = null;
            // 统计非文本，且内容发送改变的，且不是空的 块数
            for (var item in self.blockObjectList) {
              if (self.blockObjectList[item].type != 'text' && self.blockObjectList[item].contentChange == 1 && self.blockObjectList[item].content != '') {
                sum += 1;
              }
            }

            // 保证上面计算完后，再执行这个
            setTimeout(function () {

              var p = new Promise(function (reslove, reject) {
                for (var item in self.blockObjectList) {
                  if (self.blockObjectList[item].type != 'text' && self.blockObjectList[item].contentChange == 1 && self.blockObjectList[item].content != '') {
                    uni.uploadFile({
                      url: 'https://afflatus.xyz/uploadFile',
                      filePath: self.blockObjectList[item].content,
                      name: 'file', //文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
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
                          reject('上传失败');
                        }
                      },
                      fail: function fail() {
                        console.log('hhhhhhhh');
                        reject('上传失败');
                      } });

                  }
                }

                // 上传时间的最多这样，否则报错。
                setTimeout(function () {
                  reject('上传失败');
                }, 20 * 1000);

                // 如果上传完毕，则跳出(不能一直检测，会卡死的，所以这里采用了定时器)
                timeid = setInterval(function () {
                  if (sum == _success) {
                    console.log('成功上传');
                    reslove('成功上传');
                  }
                }, 100);
              });

              p.then(function (data) {
                // console.log('跳到主页')
                clearInterval(timeid);
                uni.hideLoading();

                //若是点了发送按钮
                if (buttonclick == 'sent') {
                  uni.redirectTo({
                    url: '../index/index' });

                }

                //若是点了返回按钮
                else if (buttonclick == 'return') {
                    uni.redirectTo({
                      url: '../setemail/setemail?session=' + self.session + '&haveSave=' + 'true' + '&letterid=' + self.letterid });

                  }


              }, function (err) {
                console.log('这里啊');
                if (err) {
                  uni.hideLoading();
                  uni.showToast({
                    title: '服务器较忙',
                    mask: true,
                    icon: 'none',
                    duration: 2000 });

                  // return false
                }
              });
            }, 10);


          }
          // 失败，服务器较忙
          else {
              console.log('ffffff');
              uni.hideLoading();
              uni.showToast({
                title: '服务器较忙',
                mask: true,
                icon: 'none',
                duration: 2000 });

            }

        },
        fail: function fail() {
          console.log('kkkkkkk');
          // 失败，服务器较忙
          uni.hideLoading();
          uni.showToast({
            title: '服务器较忙',
            mask: true,
            icon: 'none',
            duration: 2000 });

        } });


    },


    // 返回封面的编辑页
    returnIndex: function returnIndex() {
      if (this.blockclickclock) {
        uni.redirectTo({
          url: '../setemail/setemail?session=' + this.session + '&haveSave=' + 'true' + '&letterid=' + this.letterid + '&nowType=' + this.nowType });

        return 0;
      }


      var self = this;
      this.uploadletter('保存中...', 0, 'return');
    },

    //点击模块触发事件
    editFunction: function editFunction(e) {
      // console.log("父： 我点击了子。")
      if (this.blockclickclock) {// 已揽件的信件
        console.log("父： 我点击了子。");
        // 若块是图片, 则打开图片预览
        if (this.$refs[e.currentTarget.dataset.ref][0].blockType == 'picture') {
          // console.log(this.$refs[e.currentTarget.dataset.ref][0].BlockContent)
          uni.previewImage({
            urls: [this.$refs[e.currentTarget.dataset.ref][0].BlockContent] });

        }

        return 0;
      }


      //获取块的ref, 获得聚焦
      var lastRef = this.currentTargetRef;
      this.currentTargetRef = e.currentTarget.dataset.ref;

      //取消上次的聚焦
      if (lastRef != '' && lastRef != this.currentTargetRef)
      this.$refs[lastRef][0].returnBack();

      //点击编辑
      if (this.$refs[this.currentTargetRef][0].model == 'edit') {
        //开始编辑
        // console.log('父：开始编辑' + this.currentTargetRef)
        if (this.$refs[this.currentTargetRef][0].blockType == 'text') {
          //赋予输入框内容
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

          //黑色蒙版弹出
          this.animation_bg.height('100%');
          this.animation_bg.width('100%');
          this.animation_bg.left('0px');
          this.animation_bg.top('0px');
          this.animation_bg.opacity(0.7);
          this.animation_bg.step();

          //输入框弹出
          this.animation_w.width('700rpx');
          this.animation_w.height('30%');
          this.animation_w.opacity(0.7);
          this.animation_w.left('9px');
          this.animation_w.top('20%');
          this.animation_w.step();
          //完成按钮弹出
          this.animation_c.opacity(0.7);
          this.animation_c.width('100rpx');
          this.animation_c.height('100rpx');
          this.animation_c.step();

          this.blackBGData = this.animation_bg.export();
          this.textareaData = this.animation_w.export();
          this.confirmBData = this.animation_c.export();

          this.INPUTFLAG = true;
        }

        // 编辑图片时
        else if (this.$refs[this.currentTargetRef][0].blockType == 'picture') {
            var self = this;
            uni.chooseImage({
              count: 1,
              success: function success(res) {
                // 判断格式是否正确(jpg,jpeg,png), 否则报错
                var fileType = res.tempFilePaths[0].split('.');
                fileType = fileType[fileType.length - 1];
                if (fileType == 'jpg' || fileType == 'png' || fileType == 'jpeg' || fileType == 'gif' ||
                fileType == 'JPG' || fileType == 'PNG' || fileType == 'JPEG' || fileType == 'GIF') {
                  // else 格式正确后, 检查文件大小, 若图片超过5M, 文件需要压缩, 直到压缩到小于5M.
                  // quality属性 = 100 - [ (原文件大小-5M)/原文件大小 ]*100 - 4
                  // 这里的10是少压缩一点.
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
                    title: '不支持的格式',
                    mask: true,
                    icon: 'none',
                    duration: 2000 });

                }
              } });

          }
      }

      //点击删除
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

              // delete this.blockObjectList[i] //删除的元素NUll了，没有改变原来数组
              this.blockObjectList.splice(i, 1); //改变数组大小
              break;
            }

            i += 1;
            if (i > this.blockObjectList.length - 1) {
              break;
            }
          }

          this.currentTargetRef = '';
        }
        //点击上移
        else if (this.$refs[this.currentTargetRef][0].model == 'shangMove') {

            var i = 0;
            while (true) {
              if (this.blockObjectList[i].ref == this.currentTargetRef) {
                if (i == 0)
                break;

                this.$refs[this.currentTargetRef][0].returnBack();
                //获取上个元素的对象
                var lastObj = this.blockObjectList[i - 1];

                this.blockObjectList[i - 1].orderChange = 1;
                this.blockObjectList[i].orderChange = 1;
                this.blockObjectList[i - 1].orderNum += 1;
                this.blockObjectList[i].orderNum -= 1;

                //取代上个元素
                this.blockObjectList.splice(i - 1, 1, this.blockObjectList[i]);

                //取代当前元素
                this.blockObjectList.splice(i, 1, lastObj);


                break;
              }

              i += 1;
              if (i > this.blockObjectList.length - 1) {
                break;
              }
            }
          }
          //点击下移
          else if (this.$refs[this.currentTargetRef][0].model == 'xiaMove') {
              var i = 0;
              while (true) {
                if (this.blockObjectList[i].ref == this.currentTargetRef) {
                  if (i == this.blockObjectList.length - 1)
                  break;

                  this.$refs[this.currentTargetRef][0].returnBack();
                  //获取下个元素的对象
                  var lastObj = this.blockObjectList[i + 1];

                  this.blockObjectList[i + 1].orderChange = 1;
                  this.blockObjectList[i].orderChange = 1;
                  this.blockObjectList[i + 1].orderNum -= 1;
                  this.blockObjectList[i].orderNum += 1;

                  //取代下个元素
                  this.blockObjectList.splice(i + 1, 1, this.blockObjectList[i]);

                  //取代当前元素
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
    // 选好图片或压缩完后的 后处理
    houchuliPic: function houchuliPic(path) {
      //更新块信息
      var self = this;
      var i = 0;
      console.log(path);
      while (true) {
        if (self.blockObjectList[i]['ref'] == self.currentTargetRef) {(function () {
            var j = i;
            console.log('hello');
            //保存到本地
            uni.saveFile({
              tempFilePath: path,
              success: function success(res) {
                // console.log(res.savedFilePath)
                // console.log(self.blockObjectList)
                console.log('已保存');
                console.log(path);
                self.blockObjectList[j]['content'] = res.savedFilePath;
                //是否更改
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

    // 文字编辑时，点击完成按钮触发事件
    confirmF: function confirmF() {
      // console.log('haha')
      this.INPUTFLAG = false;
      //黑色蒙版弹出
      this.animation_bg.height('0rpx');
      this.animation_bg.width('0rpx');
      this.animation_bg.left('375rpx');
      this.animation_bg.top('375rpx');
      this.animation_bg.opacity(0);
      this.animation_bg.step();
      //输入框弹出
      this.animation_w.width('0rpx');
      this.animation_w.height('0rpx');
      this.animation_w.opacity(0);
      this.animation_w.left('375rpx');
      this.animation_w.top('375rpx');
      this.animation_w.step();
      //完成按钮弹出
      this.animation_c.opacity(0.7);
      this.animation_c.width('0rpx');
      this.animation_c.height('0rpx');
      this.animation_c.step();

      this.blackBGData = this.animation_bg.export();
      this.textareaData = this.animation_w.export();
      this.confirmBData = this.animation_c.export();

      //编辑完成
      //更新模块内容
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

    // 点击空白区域
    whiteClick: function whiteClick() {
      if (this.blockclickclock) {
        return 0;
      }
      console.log(this.blockObjectList);

      //选中的块失去聚焦
      if (this.currentTargetRef != '') {
        this.$refs[this.currentTargetRef][0].model = '';
        this.$refs[this.currentTargetRef][0].returnBack();
      }

    },

    //添加文字
    addText: function addText() {var _this = this;

      if (this.addFlag) {
        this.addFlag = false;

        //新建唯一ID以及Ref
        var date = new Date();
        var year = date.getFullYear(); //年
        var month = date.getMonth() + 1; //月
        var day = date.getDate(); //日
        var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(); //时
        var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(); //分
        var second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds(); //秒
        month >= 1 && month <= 9 ? month = "0" + month : "";
        day >= 0 && day <= 9 ? day = "0" + day : "";
        hour >= 0 && hour <= 9 ? hour = "0" + hour : "";
        minute >= 0 && minute <= 9 ? minute = "0" + minute : "";
        second >= 0 && second <= 9 ? second = "0" + second : "";

        var id = String(year) + String(month) + String(day) + String(hour) + String(minute) + String(second);
        var ref = id;

        //push到数组
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


        // 分配orderNum
        this.blockObjectList[this.blockObjectList.length - 1].orderNum = this.blockObjectList.length;

        setTimeout(function () {
          _this.addFlag = true;
        }, 1100);

      }
    },

    // 添加图片
    addPic: function addPic() {var _this2 = this;
      if (this.addFlag) {
        this.addFlag = false;

        //新建唯一ID以及Ref
        var date = new Date();
        var year = date.getFullYear(); //年
        var month = date.getMonth() + 1; //月
        var day = date.getDate(); //日
        var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(); //时
        var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(); //分
        var second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds(); //秒
        month >= 1 && month <= 9 ? month = "0" + month : "";
        day >= 0 && day <= 9 ? day = "0" + day : "";
        hour >= 0 && hour <= 9 ? hour = "0" + hour : "";
        minute >= 0 && minute <= 9 ? minute = "0" + minute : "";
        second >= 0 && second <= 9 ? second = "0" + second : "";

        var id = String(year) + String(month) + String(day) + String(hour) + String(minute) + String(second);
        var ref = id;

        //push到数组
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


        // 分配orderNum
        this.blockObjectList[this.blockObjectList.length - 1].orderNum = this.blockObjectList.length;

        setTimeout(function () {
          _this2.addFlag = true;
        }, 1100);

      }
    },

    // 发送信息
    sentFunction: function sentFunction() {
      var self = this;

      uni.requestSubscribeMessage({
        tmplIds: ['Ue2gQHM_jKb-Z6iPwGAf69NkkURm-IqmjadGqrLgtOk'],
        success: function success(res) {
          console.log(res);

          if (JSON.stringify(res).indexOf('accept') != -1) {// 同意订阅通知
            // 是否达到发送条件(图片块的数量, 音频块的数量，文字块的数量)
            if (self.blockObjectList.length < 1) {
              // console.log('内容至少一个块')
              uni.showToast({
                title: '无内容无法发送',
                icon: 'none',
                mask: true });

            } else {
              uni.showModal({
                title: "发送邮件",
                content: "发送后将无法编辑",
                success: function success(res) {
                  if (res.confirm) {
                    self.uploadletter('发送中...', 1, 'sent');
                  }
                } });


            }
          } else {// 不同意订阅通知
            uni.showToast({
              title: '请允许邮件提醒',
              mask: true,
              icon: 'none',
              duration: 2000 });

          }
        } });


      // console.log(typeof this.blockObjectList)
    } },


  onLoad: function onLoad(data) {
    uni.showLoading({
      title: "加载中" });


    var self = this;
    //若当前页面不是新建，而是编辑草稿，需要加载信封内容（通过当前函数获取上一个页面传的参来判断）
    this.session = data.session;
    this.letterid = data.letterid;
    if (data.nowType == 2) {
      this.nowType = 2;
      this.biaoti = "信件内容";
      this.sentFlag = false;
      this.xuanfuFlag = false;
      this.blockclickclock = true;
    }

    //获取blockObjectList
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
          // 预处理，即添加其它变量在各个元素上
          var aPromise = new Promise(function (reslove, reject) {

            setTimeout(function () {// 上传时间的最多这样，否则报错。
              reject('加载失败');
            }, 20 * 1000);

            timeid = setInterval(function () {
              if (sum == _success2) {
                console.log('加载成功');
                reslove('加载成功');
              }
              console.log("sum:" + sum + " success:" + _success2);
            }, 1000); //100

            var arr = [];
            for (var n in blockObjectList_bb) {
              arr[n] = Number(n);
            }

            // 对每个元素重新给值
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

              if (blockObject['blockType'] == 0) {//文本资源直接获取
                blockObject['content'] = item.content;
                blockObject['contentLast'] = blockObject['content'];
                tmpblockObjectList[blockObject['orderNum'] - 1] = blockObject;
                _success2 += 1;
                // tmpblockObjectList.push(blockObject)
              } else {//非文本资源
                // console.log('我进来了、喔')
                blockObject['content'] = item.content;

                if (blockObject['content'] != '') {
                  //查看资源在本地是否存在
                  uni.getSavedFileInfo({
                    filePath: blockObject['content'],
                    success: function success(res) {
                      tmpblockObjectList[blockObject['orderNum'] - 1] = blockObject;
                      _success2 += 1;
                      // tmpblockObjectList.push(blockObject)
                    },
                    fail: function fail() {
                      console.log("地资源找不到，需要下载");
                      //若本地资源找不到，则需要下载
                      uni.downloadFile({
                        url: 'https://afflatus.xyz/download',
                        header: {
                          session: self.session,
                          letterid: self.letterid,
                          blockid: item.blockid,
                          blockType: String(item.blockType) },

                        success: function success(res) {
                          if (res.statusCode === 200) {
                            console.log('下载成功');
                            // blockObject['content'] = res.tempFilePath
                            // blockObject['contentLast'] = blockObject['content']
                            // success += 1
                            // tmpblockObjectList[blockObject['orderNum']-1] = blockObject
                            //将资源保存到本地
                            var mytempFilePath = res.tempFilePath;

                            console.log("res.tempFilePath = " + res.tempFilePath);

                            uni.saveFile({
                              tempFilePath: mytempFilePath,
                              success: function success(res) {
                                console.log("保存路径为: " + res.savedFilePath);
                                blockObject['content'] = res.savedFilePath;
                                blockObject['contentLast'] = blockObject['content'];
                                _success2 += 1;
                                tmpblockObjectList[blockObject['orderNum'] - 1] = blockObject;

                                //更新服务器的图片路径
                                uni.request({
                                  url: 'https://afflatus.xyz/updatePath',
                                  data: {
                                    session: self.session,
                                    letterid: self.letterid,
                                    blockid: item.blockid,
                                    changecontent: res.savedFilePath },

                                  method: 'POST',
                                  success: function success(res) {
                                    console.log('更新成功啊');
                                  },
                                  fail: function fail(e) {
                                    console.log('更新失败 :' + e);
                                  } });


                              },
                              fail: function fail(e) {
                                console.log("不能保存");
                                console.log("mytempFilePath=" + mytempFilePath);

                                console.log(e);
                              } });

                          }
                        },
                        fail: function fail(e) {
                          console.log('下载失败 ' + e);
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
              title: '服务器较忙',
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

    // 获取user session相关信息
    // url: '../writeemail/writeemail?' + 'session=' + self.session + '&letterid=' + self.letterid
    // 读lettetid里的数据

    // 用户信息过时，则跳回登录页面

    // 成功
    // 计算需要多少个空白区域
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