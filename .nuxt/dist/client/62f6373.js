(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{620:function(t,e,n){"use strict";n.r(e);var l=n(193),o=n(69),r=n(472),d=n(475),c=n(457),v=n(48),_=n(40),h={layout:"TextLayout",components:{SnackBar:n(52).a},data:function(){return{}},computed:{language:function(){return this.$store.state.manager.language},loginState:function(){return this.$store.state.users.loginState}}},f=n(18),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(r.a,["한국어"===t.language?n(r.a,[n(v.a,{attrs:{elevation:"0"}},[n(_.b,{staticClass:"text-h4 font-weight-bold"},[t._v(" 유저 정보 ")])],1),t._v(" "),t.loginState?n(l.a,[n(r.a,[n(d.a,[n(c.a,{attrs:{rounded:"",readonly:"",outlined:"",label:"이름",value:t.loginState.nickname}}),t._v(" "),n(c.a,{attrs:{rounded:"",readonly:"",outlined:"",label:"E-mail",value:t.loginState.email}}),t._v(" "),n(c.a,{attrs:{rounded:"",readonly:"",outlined:"",label:"소속",value:"소속 없음"}})],1)],1)],1):n(l.a,[n(o.c,[t._v("로그인이 필요합니다.")])],1)],1):"영어"===t.language?n(r.a,[n(v.a,{attrs:{elevation:"0"}},[n(_.b,{staticClass:"text-h4 font-weight-bold"},[t._v(" User Info ")])],1)],1):n(r.a,[n(v.a,{attrs:{elevation:"0"}},["한국어"===t.language?n(_.b,{staticClass:"text-h4 font-weight-bold"},[t._v(" 언어 설정 오류 ")]):"영어"===t.language?n(_.b,{staticClass:"text-h4 font-weight-bold"},[t._v(" Language setting error ")]):t._e()],1),t._v(" "),n(l.a,["한국어"===t.language?n(o.d,[t._v("\n        The page could not be loaded because an error occurred during the language setting process!\n      ")]):"영어"===t.language?n(o.d):t._e()],1)],1),t._v(" "),n("snack-bar")],1)}),[],!1,null,"7929260a",null);e.default=component.exports}}]);