(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"18e8":function(e,n,t){"use strict";t.r(n);var o=t("8e6b"),i=t.n(o);for(var a in o)"default"!==a&&function(e){t.d(n,e,(function(){return o[e]}))}(a);n["default"]=i.a},3825:function(e,n,t){"use strict";(function(e){t("02d9");o(t("66fd"));var n=o(t("b2af"));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},"74f2":function(e,n,t){"use strict";var o;t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return o}));var i=function(){var e=this,n=e.$createElement;e._self._c},a=[]},"8e6b":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{loginflag:!0,finishLogin:!1}},methods:{wxLogin:function(n){var t=this;this.loginflag&&(this.loginflag=!1,e.getUserProfile&&(console.log("可用"),e.getUserProfile({desc:"用于完善会员资料",success:function(n){console.log(n),e.setStorage({key:"userInfo",data:n.userInfo}),e.login({provider:"weixin",success:function(o){var i=o.code,a=n.userInfo.nickName,c=n.userInfo.gender,u={code:i,username:a,sex:c};e.showLoading({mask:!0,title:"正在登录...",complete:function(){}}),e.request({url:"https://afflatus.xyz/submitLogin",method:"POST",data:u,success:function(n){console.log(n),200==n.data.status&&0==n.data.errcode?(console.log("登录成功"),e.setStorage({key:"third_session",data:n.data.session}),t.finishLogin,e.redirectTo({url:"../index/index"}),e.hideLoading()):(t.loginflag=!0,console.log("登录失败"))},fail:function(){t.loginflag=!0}})},fail:function(){t.loginflag=!0}})},fail:function(){t.loginflag=!0},complete:function(){setTimeout((function(){t.loginflag=!0}),1e3)}}))),e.requestSubscribeMessage({tmplIds:["Ue2gQHM_jKb-Z6iPwGAf69NkkURm-IqmjadGqrLgtOk"],success:function(e){JSON.stringify(e).indexOf("accept")}})}}};n.default=t}).call(this,t("543d")["default"])},b2af:function(e,n,t){"use strict";t.r(n);var o=t("74f2"),i=t("18e8");for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);t("bd90");var c,u=t("f0c5"),s=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,"22a86011",null,!1,o["a"],c);n["default"]=s.exports},bd90:function(e,n,t){"use strict";var o=t("cc20"),i=t.n(o);i.a},cc20:function(e,n,t){}},[["3825","common/runtime","common/vendor"]]]);