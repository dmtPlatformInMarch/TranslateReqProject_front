(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{483:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(11),r(12),r(81);var n=r(2);function o(t){return n.a.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,r){var n=r.props,data=r.data,o=r.children;data.staticClass="".concat(t," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),e(n.tag,data,o)}})}},487:function(t,e,r){"use strict";r(11),r(12),r(81),r(279),r(484);var n=r(483),o=r(82);e.a=Object(n.a)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,c=e.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(o.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),c)}})},515:function(t,e,r){var n=r(21);n(n.S,"Math",{sign:r(284)})},541:function(t,e,r){var content=r(577);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("7b08f9cc",content,!0,{sourceMap:!1})},572:function(t,e,r){var content=r(573);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("3c0eddd7",content,!0,{sourceMap:!1})},573:function(t,e,r){var n=r(9)(!1);n.push([t.i,".v-chip-group .v-chip{margin:4px 8px 4px 0}.v-chip-group .v-chip--active{color:inherit}.v-chip-group .v-chip--active.v-chip--no-color:after{opacity:.22}.v-chip-group .v-chip--active.v-chip--no-color:focus:after{opacity:.32}.v-chip-group .v-slide-group__content{padding:4px 0}.v-chip-group--column .v-slide-group__content{white-space:normal;flex-wrap:wrap;max-width:100%}",""]),t.exports=n},574:function(t,e,r){var content=r(575);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("8f7a87bc",content,!0,{sourceMap:!1})},575:function(t,e,r){var n=r(9)(!1);n.push([t.i,".v-slide-group{display:flex}.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__next,.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__prev{display:none}.v-slide-group.v-item-group>.v-slide-group__next,.v-slide-group.v-item-group>.v-slide-group__prev{cursor:pointer}.v-slide-item{display:inline-flex;flex:0 1 auto}.v-slide-group__next,.v-slide-group__prev{align-items:center;display:flex;flex:0 1 52px;justify-content:center;min-width:52px}.v-slide-group__content{display:flex;flex:1 0 auto;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-slide-group__wrapper{contain:content;display:flex;flex:1 1 auto;overflow:hidden}.v-slide-group__next--disabled,.v-slide-group__prev--disabled{pointer-events:none}",""]),t.exports=n},576:function(t,e,r){"use strict";r(541)},577:function(t,e,r){var n=r(9)(!1);n.push([t.i,".bottom[data-v-fd7e872a]{position:absolute;width:100%;bottom:0}.search_input[data-v-fd7e872a]{width:20vw}",""]),t.exports=n},655:function(t,e,r){"use strict";r.r(e);var n=r(466),o=r(192),c=r(68),l=r(514),f=(r(12),r(8),r(11),r(13),r(14),r(1)),d=(r(572),r(22),r(23),r(39),r(38),r(32),r(515),r(28),r(30),r(574),r(57)),h=r(106),v=r(128),_=r(180),m=r(99),w=r(203),y=r(5),x=r(0);function O(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return k(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return k(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function $(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function S(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?$(Object(source),!0).forEach((function(e){Object(f.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):$(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function C(t){var e=Math.abs(t);return Math.sign(t)*(e/((1/.501-2)*(1-e)+1))}function j(t,e,r,n){var o=t.clientWidth,c=r?e.content-t.offsetLeft-o:t.offsetLeft;r&&(n=-n);var l=e.wrapper+n,f=o+c,d=.4*o;return c<=n?n=Math.max(c-d,0):l<=f&&(n=Math.min(n-(l-f-d),e.content-e.wrapper)),r?-n:n}var P=Object(y.a)(v.a,_.a).extend({name:"base-slide-group",directives:{Resize:m.a,Touch:w.a},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:function(t){return"boolean"==typeof t||["always","desktop","mobile"].includes(t)}}},data:function(){return{isOverflowing:!1,resizeTimeout:0,startX:0,isSwipingHorizontal:!1,isSwiping:!1,scrollOffset:0,widths:{content:0,wrapper:0}}},computed:{canTouch:function(){return"undefined"!=typeof window},__cachedNext:function(){return this.genTransition("next")},__cachedPrev:function(){return this.genTransition("prev")},classes:function(){return S(S({},v.a.options.computed.classes.call(this)),{},{"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing})},hasAffixes:function(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing||Math.abs(this.scrollOffset)>0;case"mobile":return this.isMobile||this.isOverflowing||Math.abs(this.scrollOffset)>0;default:return!this.isMobile&&(this.isOverflowing||Math.abs(this.scrollOffset)>0)}},hasNext:function(){if(!this.hasAffixes)return!1;var t=this.widths,content=t.content,e=t.wrapper;return content>Math.abs(this.scrollOffset)+e},hasPrev:function(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset:function(t){this.$vuetify.rtl&&(t=-t);var e=t<=0?C(-t):t>this.widths.content-this.widths.wrapper?-(this.widths.content-this.widths.wrapper)+C(this.widths.content-this.widths.wrapper-t):-t;this.$vuetify.rtl&&(e=-e),this.$refs.content.style.transform="translateX(".concat(e,"px)")}},mounted:function(){var t=this;if("undefined"!=typeof ResizeObserver){var e=new ResizeObserver((function(){t.onResize()}));e.observe(this.$el),e.observe(this.$refs.content),this.$on("hook:destroyed",(function(){e.disconnect()}))}else{var r=0;this.$on("hook:beforeUpdate",(function(){var e;r=((null==(e=t.$refs.content)?void 0:e.children)||[]).length})),this.$on("hook:updated",(function(){var e;r!==((null==(e=t.$refs.content)?void 0:e.children)||[]).length&&t.setWidths()}))}},methods:{onScroll:function(){this.$refs.wrapper.scrollLeft=0},onFocusin:function(t){if(this.isOverflowing){var e,r=O(Object(x.f)(t));try{for(r.s();!(e=r.n()).done;){var n,o=e.value,c=O(this.items);try{for(c.s();!(n=c.n()).done;){var l=n.value;if(l.$el===o)return void(this.scrollOffset=j(l.$el,this.widths,this.$vuetify.rtl,this.scrollOffset))}}catch(t){c.e(t)}finally{c.f()}}}catch(t){r.e(t)}finally{r.f()}}},genNext:function(){var t=this,slot=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:function(){return t.onAffixClick("next")}},key:"next"},[slot])},genContent:function(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content",on:{focusin:this.onFocusin}},this.$slots.default)},genData:function(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon:function(t){var e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");var r="".concat(t[0].toUpperCase()).concat(t.slice(1)),n=this["has".concat(r)];return this.showArrows||n?this.$createElement(d.a,{props:{disabled:!n}},this["".concat(e,"Icon")]):null},genPrev:function(){var t=this,slot=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:function(){return t.onAffixClick("prev")}},key:"prev"},[slot])},genTransition:function(t){return this.$createElement(h.c,[this.genIcon(t)])},genWrapper:function(){var t=this;return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:function(e){return t.overflowCheck(e,t.onTouchStart)},move:function(e){return t.overflowCheck(e,t.onTouchMove)},end:function(e){return t.overflowCheck(e,t.onTouchEnd)}}}],ref:"wrapper",on:{scroll:this.onScroll}},[this.genContent()])},calculateNewOffset:function(t,e,r,n){var o=r?-1:1,c=o*n+("prev"===t?-1:1)*e.wrapper;return o*Math.max(Math.min(c,e.content-e.wrapper),0)},onAffixClick:function(t){this.$emit("click:".concat(t)),this.scrollTo(t)},onResize:function(){this._isDestroyed||this.setWidths()},onTouchStart:function(t){var content=this.$refs.content;this.startX=this.scrollOffset+t.touchstartX,content.style.setProperty("transition","none"),content.style.setProperty("willChange","transform")},onTouchMove:function(t){if(this.canTouch){if(!this.isSwiping){var e=t.touchmoveX-t.touchstartX,r=t.touchmoveY-t.touchstartY;this.isSwipingHorizontal=Math.abs(e)>Math.abs(r),this.isSwiping=!0}this.isSwipingHorizontal&&(this.scrollOffset=this.startX-t.touchmoveX,document.documentElement.style.overflowY="hidden")}},onTouchEnd:function(){if(this.canTouch){var t=this.$refs,content=t.content,e=t.wrapper,r=content.clientWidth-e.clientWidth;content.style.setProperty("transition",null),content.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-r&&(this.scrollOffset=-r):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=r&&(this.scrollOffset=r),this.isSwiping=!1,document.documentElement.style.removeProperty("overflow-y")}},overflowCheck:function(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView:function(){if(!this.selectedItem&&this.items.length){var t=this.items[this.items.length-1].$el.getBoundingClientRect(),e=this.$refs.wrapper.getBoundingClientRect();(this.$vuetify.rtl&&e.right<t.right||!this.$vuetify.rtl&&e.left>t.left)&&this.scrollTo("prev")}this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=function(t,e,r){var n=t.offsetLeft,o=t.clientWidth;if(r){var c=e.content-n-o/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,c))}var l=n+o/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,l))}(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=j(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},scrollTo:function(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths:function(){var t=this;window.requestAnimationFrame((function(){if(!t._isDestroyed){var e=t.$refs,content=e.content,r=e.wrapper;t.widths={content:content?content.clientWidth:0,wrapper:r?r.clientWidth:0},t.isOverflowing=t.widths.wrapper+1<t.widths.content,t.scrollIntoView()}}))}},render:function(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}}),M=(P.extend({name:"v-slide-group",provide:function(){return{slideGroup:this}}}),r(19));function R(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function I(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?R(Object(source),!0).forEach((function(e){Object(f.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):R(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var A=Object(y.a)(P,M.a).extend({name:"v-chip-group",provide:function(){return{chipGroup:this}},props:{column:Boolean},computed:{classes:function(){return I(I({},P.options.computed.classes.call(this)),{},{"v-chip-group":!0,"v-chip-group--column":this.column})}},watch:{column:function(t){t&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData:function(){return this.setTextColor(this.color,I({},P.options.methods.genData.call(this)))}}}),E=r(648),T=r(487),D=r(479),F=r(467),W=r(189),N=r(647),z=r(671),X=r(475),B=r(463),L=r(49),U=r(58),H=r(6),V=(r(44),r(50),r(209),r(84),r(90)),Y=r.n(V),G={layout:"AdminLayout",components:{SnackBar:r(36).a},data:function(){return{dialog:0,file_id:0,isDev:"production".includes("dev"),show:!1,inquery:"",searchName:"",searchField:"",list:[],stateSelect:""}},fetch:function(t){return t.store.dispatch("admin/loadReq")},mounted:function(){this.list=this.$store.state.admin.allRequest},computed:{ko_field:function(){return this.$FIELDS_KO}},watch:{searchName:Y.a.debounce((function(t){t?this.searchField?this.list=Y.a.filter(this.list,(function(e){return new RegExp(t,"i").test(e.name)})):this.list=Y.a.filter(this.$store.state.admin.allRequest,(function(e){return new RegExp(t,"i").test(e.name)})):this.searchField?this.list=Y.a.filter(this.$store.state.admin.allRequest,(function(t){return t.Files.some((function(t){return t.field===field}))})):this.list=this.$store.state.admin.allRequest}),500),searchField:Y.a.debounce((function(t){var e=this;t?this.searchName?this.list=Y.a.filter(this.list,(function(e){return e.Files.some((function(e){return e.field===t}))})):this.list=Y.a.filter(this.$store.state.admin.allRequest,(function(e){return e.Files.some((function(e){return e.field===t}))})):this.searchName?this.list=Y.a.filter(this.$store.state.admin.allRequest,(function(t){return new RegExp(e.searchName,"i").test(t.name)})):this.list=this.$store.state.admin.allRequest}),500)},methods:{reload:function(){this.$store.dispatch("admin/reloadReq")},cancelRequest:function(t){this.$store.dispatch("admin/deleteRequest",t),this.dialog=!1},setinq:function(t){this.show=!0,this.inquery=t},setState:function(t){var e=this;return Object(H.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$store.dispatch("admin/setState",{request:e.inquery,state:t});case 3:e.list=e.$store.state.admin.allRequest,e.inquery=e.list.find((function(t){return t.id===e.inquery.id})),e.$manage.showMessage({message:"번역 상태 [ ".concat(t," ]로 변경"),color:"success"}),r.next=10;break;case 8:r.prev=8,r.t0=r.catch(0);case 10:case"end":return r.stop()}}),r,null,[[0,8]])})))()},stateIcon:function(t){return"번역 준비중"===t?"mdi-briefcase-clock":"번역 시작"===t?"mdi-briefcase-edit":"번역 검수중"===t?"mdi-briefcase-search":"번역 완료"===t?"mdi-briefcase-check":"mdi-briefcase-off"},stateColor:function(t){return"번역 준비중"===t?"orange":"번역 시작"===t?"primary":"번역 검수중"===t?"indigo":"번역 완료"===t?"success":"grey"}}},J=(r(576),r(16)),component=Object(J.a)(G,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r(T.a,{staticStyle:{dispaly:"flex","flex-direction":"column",margin:"auto"}},[r(T.a,{staticStyle:{width:"80vw",height:"100vh"},attrs:{fluid:""}},[r(L.a,{attrs:{elevation:"0"}},[r(U.b,{staticClass:"text-center"},[t._v("filter")]),t._v(" "),r(X.a),t._v(" "),r(U.a,[r(T.a,[r(N.a,[r(E.a,{attrs:{cols:"12",sm:"6"}},[r(B.a,{staticClass:"search_input",attrs:{dense:"","full-width":"",label:"유저(User)"},model:{value:t.searchName,callback:function(e){t.searchName=e},expression:"searchName"}})],1),t._v(" "),r(E.a,{attrs:{cols:"12",sm:"6"}},[r(z.a,{staticClass:"search_input",attrs:{items:t.ko_field,dense:"","full-width":"",clearable:"",label:"분야(Field)"},model:{value:t.searchField,callback:function(e){t.searchField=e},expression:"searchField"}})],1)],1)],1)],1),t._v(" "),r(X.a),t._v(" "),r(n.a,{attrs:{rounded:"",depressed:"",color:"success"},on:{click:t.reload}},[t._v("Reload")])],1),t._v(" "),0===t.list.length?r(o.a,{staticClass:"d-flex align-center",staticStyle:{height:"90%"}},[r(c.c,{staticClass:"text-center"},[t._v("\n        의뢰 목록이 비어있습니다.\n      ")])],1):r(N.a,{attrs:{dense:""}},t._l(t.list,(function(e){return r(E.a,{key:e.id,attrs:{cols:3}},[r(o.a,{staticStyle:{height:"55vh"},attrs:{elevation:"10"}},[r(c.d,{staticStyle:{background:"#1a237e",color:"white"}},[t._v("\n            의뢰 "+t._s(e.id)+"\n            "),r(X.a),t._v(" "),r(n.a,{attrs:{icon:"",dark:""},on:{click:function(){t.dialog=!0,t.file_id=e.id}}},[r(W.a,[t._v("mdi-close")])],1)],1),t._v(" "),r(T.a,[r(o.a,{attrs:{flat:""}},[r(c.b,[t._v(" 의뢰분야 ")]),t._v(" "),r(A,{attrs:{column:""}},t._l(e.Files,(function(i){return r("div",{key:i.id},[""!=i.field?r(l.a,[t._v(t._s(i.field))]):t._e()],1)})),0)],1)],1),t._v(" "),r(F.a),t._v(" "),r(T.a,[r(o.a,{attrs:{flat:""}},[r(c.b,[t._v("의뢰언어")]),t._v(" "),t._l(e.Files,(function(i){return r("div",{key:i.id,staticStyle:{display:"flex"}},[""!=i.req_lang||""!=i.grant_lang?[r(l.a,[t._v(t._s(i.req_lang))]),t._v(" "),r(W.a,[t._v("mdi-arrow-right-bold")]),t._v(" "),r(l.a,[t._v(t._s(i.grant_lang))]),t._v(" "),r(X.a),t._v(" "),r(n.a,{attrs:{icon:"",href:(t.isDev?"http://localhost:3085":"https://api.dmtlabs.kr")+"/admin/file/download/"+i.src.substring(i.src.lastIndexOf("/")+1),download:""}},[r(W.a,[t._v("mdi-file-download")])],1)]:t._e()],2)}))],2)],1),t._v(" "),r(L.a,{staticClass:"bottom",attrs:{color:"grey lighten-1",flat:""}},[r(U.b,{domProps:{textContent:t._s(e.name)}}),t._v(" "),r(X.a),t._v(" "),r(n.a,{attrs:{rounded:"",color:"blue-grey lighten-4"},on:{click:function(r){return t.setinq(e)}}},[t._v(" 조회 ")])],1)],1)],1)})),1),t._v(" "),r(D.a,{attrs:{width:"30vw"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r(o.a,[r(c.d,[t._v("의뢰 취소")]),t._v(" "),r(c.c,[t._v("[의뢰"+t._s(t.file_id)+"] 을(를) 취소하시겠습니까?")]),t._v(" "),r(c.a,[r(X.a),t._v(" "),r(n.a,{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v("취소")]),t._v(" "),r(n.a,{attrs:{color:"success",text:""},on:{click:function(e){return t.cancelRequest(t.file_id)}}},[t._v("확인")])],1)],1)],1),t._v(" "),r(D.a,{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[r(o.a,[r(L.a,{attrs:{dark:"",color:"#013183"}},[r(n.a,{attrs:{icon:"",dark:""},on:{click:function(e){t.show=!1}}},[r(W.a,[t._v("mdi-close")])],1),t._v(" "),r(U.b,[t._v("\n            "+t._s(t.inquery.name)+" 님의 의뢰\n          ")])],1),t._v(" "),r("div",{staticClass:"overflow-y-auto"},t._l(t.inquery.Files,(function(e){return r(o.a,{key:e.id},[r(c.d,[t._v("\n              "+t._s(e.src.substring(e.src.lastIndexOf("/")+1))+"\n              "),r(X.a),t._v(" "),r(n.a,{attrs:{icon:"",href:(t.isDev?"http://localhost:3085":"https://api.dmtlabs.kr")+"/admin/file/download/"+e.src.substring(e.src.lastIndexOf("/")+1),download:""}},[r(W.a,[t._v("mdi-file-download")])],1)],1),t._v(" "),r(N.a,{staticClass:"text-center align-center",attrs:{"no-gutters":""}},[r(E.a,{attrs:{cols:"12",md:"4"}},[r("div",{staticStyle:{border:"1px solid black"}},[r("h3",[t._v("분류")]),t._v(" "),r(F.a),t._v(" "),r(T.a,[t._v("\n                    "+t._s(e.field)+"\n                  ")])],1)]),t._v(" "),r(E.a,{attrs:{cols:"12",md:"4"}},[r("div",{staticStyle:{border:"1px solid black"}},[r("h3",[t._v("요청 언어")]),t._v(" "),r(F.a),t._v(" "),r(T.a,[t._v("\n                    "+t._s(e.req_lang)+"\n                  ")])],1)]),t._v(" "),r(E.a,{attrs:{cols:"12",md:"4"}},[r("div",{staticStyle:{border:"1px solid black"}},[r("h3",[t._v("번역 언어")]),t._v(" "),r(F.a),t._v(" "),r(T.a,[t._v("\n                    "+t._s(e.grant_lang)+"\n                  ")])],1)])],1)],1)})),1),t._v(" "),r(N.a,{staticClass:"text-center align-center bottom",attrs:{"no-gutters":""}},[r(E.a,{attrs:{cols:"12",md:"12"}},[r("div",{staticStyle:{border:"1px solid black"}},[r("h3",[t._v("현재 상태")]),t._v(" "),r(F.a),t._v(" "),r(T.a,[r(n.a,{attrs:{color:t.stateColor(t.inquery.trans_state),dark:"",rounded:"",readonly:"",depressed:""}},[t._v("\n                  "+t._s(t.inquery.trans_state)+"\n                  "),r(W.a,{attrs:{right:""}},[t._v(t._s(t.stateIcon(t.inquery.trans_state)))])],1)],1)],1)]),t._v(" "),r(E.a,{attrs:{cols:"12",md:"3"}},[r(T.a,[r(n.a,{attrs:{color:t.stateColor("번역 준비중"),disabled:"번역 준비중"===t.inquery.trans_state,dark:"번역 준비중"!=t.inquery.trans_state,rounded:"",block:""},on:{click:function(e){return t.setState("번역 준비중")}}},[t._v("\n                번역 준비중\n                "),r(W.a,{attrs:{right:""}},[t._v(t._s(t.stateIcon("번역 준비중")))])],1)],1)],1),t._v(" "),r(E.a,{attrs:{cols:"12",md:"3"}},[r(T.a,[r(n.a,{attrs:{color:t.stateColor("번역 시작"),disabled:"번역 시작"===t.inquery.trans_state,dark:"번역 시작"!=t.inquery.trans_state,rounded:"",block:""},on:{click:function(e){return t.setState("번역 시작")}}},[t._v("\n                번역 시작\n                "),r(W.a,{attrs:{right:""}},[t._v(t._s(t.stateIcon("번역 시작")))])],1)],1)],1),t._v(" "),r(E.a,{attrs:{cols:"12",md:"3"}},[r(T.a,[r(n.a,{attrs:{color:t.stateColor("번역 검수중"),disabled:"번역 검수중"===t.inquery.trans_state,dark:"번역 검수중"!=t.inquery.trans_state,rounded:"",block:""},on:{click:function(e){return t.setState("번역 검수중")}}},[t._v("\n                번역 검수중\n                "),r(W.a,{attrs:{right:""}},[t._v(t._s(t.stateIcon("번역 검수중")))])],1)],1)],1),t._v(" "),r(E.a,{attrs:{cols:"12",md:"3"}},[r(T.a,[r(n.a,{attrs:{color:t.stateColor("번역 완료"),disabled:"번역 완료"===t.inquery.trans_state,dark:"번역 완료"!=t.inquery.trans_state,rounded:"",block:""},on:{click:function(e){return t.setState("번역 완료")}}},[t._v("\n                번역 완료\n                "),r(W.a,{attrs:{right:""}},[t._v(t._s(t.stateIcon("번역 완료")))])],1)],1)],1)],1)],1)],1)],1),t._v(" "),r("snack-bar")],1)}),[],!1,null,"fd7e872a",null);e.default=component.exports}}]);