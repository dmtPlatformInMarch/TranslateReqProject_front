(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{544:function(t,e,n){var content=n(581);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("343cdd2e",content,!0,{sourceMap:!1})},580:function(t,e,n){"use strict";n(544)},581:function(t,e,n){var o=n(9)(!1);o.push([t.i,".main[data-v-1a702c85]{display:flex}.img[data-v-1a702c85]{flex:0 0 auto}.wrapper[data-v-1a702c85]{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center}.dialog__card[data-v-1a702c85]{width:75vw}.dialog__box[data-v-1a702c85]{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;width:100%;height:50vh;padding:25px}.dialog__box__setting[data-v-1a702c85]{display:flex;width:100%;height:90%}.setting__select__box[data-v-1a702c85]{justify-content:space-around}.dialog__box__process[data-v-1a702c85],.setting__select__box[data-v-1a702c85]{display:flex;flex-direction:column;align-items:center;width:50%;height:100%}.dialog__box__process[data-v-1a702c85]{justify-content:center}.dialog__box__loading[data-v-1a702c85]{display:flex;align-items:center;justify-content:center;width:100%;height:10%}.action__box[data-v-1a702c85],.select__box[data-v-1a702c85]{display:flex;justify-content:space-around;width:100%;height:100%;padding:25px}.action__box[data-v-1a702c85]{align-items:center}.header__class[data-v-1a702c85]{border-bottom:3px solid green}.list__select[data-v-1a702c85]{border:solid #013183!important;color:#013183!important}.process__stepper[data-v-1a702c85]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%}.stepper[data-v-1a702c85]{width:50%;padding:5%}.arrow__wrapper[data-v-1a702c85]{display:flex;flex-direction:column;align-items:center;justify-content:center}.arrow[data-v-1a702c85]:first-child{color:red}.arrow[data-v-1a702c85]:nth-child(2){color:#00f}.arrow[data-v-1a702c85]:nth-child(3){color:green}",""]),t.exports=o},657:function(t,e,n){"use strict";n.r(e);var o=n(466),l=n(192),c=n(479),r=n(189),d=n(158),_=n(188),v=n(119),f=n(191),h=n(3),x=n(193),w=n(49),m=n(58),y={layout:"TestLayout",components:{},data:function(){return{loading:0,dialog:!1,templist:["한국어","중국어","영어","일본어","베트남어"],beforeTranslate:!1,req:0,grant:1,step:1}},computed:{req_lang:function(){return this.templist[this.req]},grant_lang:function(){return this.templist[this.grant]}},watch:{loading:function(t){t>=100&&(this.beforeTranslate=!0)}},methods:{timerOn:function(){var t=this,e=setInterval((function(){t.loading<100&&!0===t.dialog?t.loading+=5:(clearInterval(e),t.dialog=!1,t.loading=0)}),500);this.beforeTranslate=!1},close:function(){this.dialog=!1,this.loading=0}}},C=(n(580),n(16)),component=Object(C.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n(c.a,{attrs:{width:"60vw"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,c=e.attrs;return[n(o.a,t._g(t._b({on:{click:function(e){t.dialog=!0}}},"v-btn",c,!1),l),[t._v("\n                다이어로그 시작\n            ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n(l.a,[n("div",{staticClass:"dialog__box"},[n("div",{staticClass:"dialog__box__setting"},[n("div",{staticClass:"setting__select__box"},[n(d.a,{staticClass:"img",attrs:{src:"https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/logo.png"}})],1),t._v(" "),t.beforeTranslate?n("div",{staticClass:"setting__select__box"},[n("div",{staticClass:"select__box"},[n("div",[n(w.a,{staticClass:"header__class",attrs:{elevation:"0"}},[n(m.b,{staticClass:"font-weight-bold"},[t._v("\n                                        영상의 원본 언어\n                                    ")])],1),t._v(" "),n(_.a,{staticClass:"overflow-y-auto"},[n(f.a,{attrs:{mandatory:""},model:{value:t.req,callback:function(e){t.req=e},expression:"req"}},t._l(t.templist,(function(e,o){return n(v.a,{key:o,attrs:{"active-class":"list__select"}},[n(h.c,[t._v("\n                                                "+t._s(e)+"\n                                            ")])],1)})),1)],1)],1),t._v(" "),n(r.a,[t._v("\n                                mdi-arrow-right\n                            ")]),t._v(" "),n("div",[n(w.a,{staticClass:"header__class",attrs:{elevation:"0"}},[n(m.b,{staticClass:"font-weight-bold"},[t._v("\n                                        번역하고 싶은 언어\n                                    ")])],1),t._v(" "),n(_.a,{staticClass:"overflow-y-auto"},[n(f.a,{attrs:{mandatory:""},model:{value:t.grant,callback:function(e){t.grant=e},expression:"grant"}},t._l(t.templist,(function(e,o){return n(v.a,{key:o,attrs:{"active-class":"list__select"}},[n(h.c,[t._v("\n                                                "+t._s(e)+"\n                                            ")])],1)})),1)],1)],1)],1),t._v(" "),n("div",{staticClass:"action__box"},[n(o.a,{attrs:{block:""},on:{click:t.timerOn}},[t._v("\n                                번역하기\n                            ")])],1)]):n("div",{staticClass:"dialog__box__process"},[n("div",{staticClass:"process__stepper"},[n("div",{staticClass:"stepper"},[n(o.a,{attrs:{block:"",rounded:""}},[t._v("\n                                    파일 전송\n                                ")])],1),t._v(" "),n("div",{staticClass:"arrow__wrapper"},[n("div",{staticClass:"arrow"},[t._v("▼")]),t._v(" "),n("div",{staticClass:"arrow"},[t._v("▼")]),t._v(" "),n("div",{staticClass:"arrow"},[t._v("▼")])]),t._v(" "),n("div",{staticClass:"stepper",attrs:{div:""}},[n(o.a,{attrs:{block:"",rounded:""}},[t._v("\n                                    영상 인식\n                                ")])],1),t._v(" "),n("div",{staticClass:"arrow"},[n("div",{staticClass:"arrow"},[t._v("▼")]),t._v(" "),n("div",{staticClass:"arrow"},[t._v("▼")]),t._v(" "),n("div",{staticClass:"arrow"},[t._v("▼")])]),t._v(" "),n("div",{staticClass:"stepper",attrs:{div:""}},[n(o.a,{attrs:{block:"",rounded:""}},[t._v("\n                                    자막 번역\n                                ")])],1)])])]),t._v(" "),n("div",{staticClass:"dialog__box__loading"},[n(x.a,{attrs:{color:"#013183",height:"25px"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.value;return[n("strong",[t._v(t._s(Math.ceil(o))+"%")])]}}]),model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}})],1)])])],1)],1)}),[],!1,null,"1a702c85",null);e.default=component.exports}}]);