(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{494:function(e,t,n){var content=n(504);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("076de722",content,!0,{sourceMap:!1})},503:function(e,t,n){"use strict";n(494)},504:function(e,t,n){var r=n(9)(!1);r.push([e.i,".panel__header__date[data-v-fa0a16ec],.panel__header__id[data-v-fa0a16ec]{display:flex;align-items:center}.chipStyle[data-v-fa0a16ec]{justify-content:center;min-width:75px}.textStyle[data-v-fa0a16ec]{display:flex;width:30vw}.iconStyle[data-v-fa0a16ec]{margin:8px 0!important}@media screen and (max-width:700px){[data-v-fa0a16ec] .v-expansion-panel-content__wrap{padding:0!important}.panel__header[data-v-fa0a16ec]{padding:8px!important}.panel__header__date[data-v-fa0a16ec],.panel__header__id[data-v-fa0a16ec],.pannel__header__state[data-v-fa0a16ec]  .v-chip__content{font-size:10px}.panel__header__date[data-v-fa0a16ec]  .v-icon,.pannel__header__state[data-v-fa0a16ec]  .v-icon{font-size:14px}.textStyle[data-v-fa0a16ec]{display:none}}",""]),e.exports=r},507:function(e,t,n){"use strict";var r=n(460),c=n(193),l=n(69),o=n(491),_=n(474),d=n(461),v=n(607),f=n(609),h=n(608),m=n(189),y=n(188),x=n(118),w=n(103),S=n(469),k=n(6),C=(n(44),n(8),n(38),n(37),n(22),n(32),n(11),n(162),{props:{p:{type:Object,required:!0}},data:function(){return{FileSet:this.p.Files,dialog:!1}},computed:{sortingFile:function(){return Array.from(this.FileSet).sort((function(a,b){return a.chainNumber-b.chainNumber}))},mfFile:function(){var e=this;return Array.from(this.FileSet).filter((function(t,i){return Array.from(e.FileSet).findIndex((function(e,n){return t.chainNumber===e.chainNumber}))===i}))},countingFile:function(){var e=[];return Array.from(this.FileSet).forEach((function(t){e[t.chainNumber]=(e[t.chainNumber]||0)+1})),e.reverse()},language:function(){return this.$store.state.manager.language}},methods:{cancelRequest:function(){var e=this;return Object(k.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("requests/cancelRequest",{id:e.p.id});case 3:return"삭제"===t.sent.data?"한국어"===e.language?e.$manage.showMessage({message:"의뢰를 성공적으로 취소했습니다.",color:"success"}):"영어"===e.language&&e.$manage.showMessage({message:"Successfully canceled the quest.",color:"success"}):"한국어"===e.language?e.$manage.showMessage({message:"의뢰를 취소하는데 문제가 발생했습니다.",color:"error"}):"영어"===e.language&&e.$manage.showMessage({message:"Oops..Problem during cancel the quest.",color:"error"}),t.next=7,e.$store.dispatch("requests/loadRequests");case 7:e.dialog=!1,t.next=12;break;case 10:t.prev=10,t.t0=t.catch(0);case 12:case"end":return t.stop()}}),t,null,[[0,10]])})))()},stateIcon:function(e){return"번역 준비중"===e?"mdi-briefcase-clock":"번역 시작"===e?"mdi-briefcase-edit":"번역 검수중"===e?"mdi-briefcase-search":"번역 완료"===e?"mdi-briefcase-check":"mdi-briefcase-off"},stateColor:function(e){return"번역 준비중"===e?"orange":"번역 시작"===e?"primary":"번역 검수중"===e?"indigo":"번역 완료"===e?"success":"grey"}}}),F=(n(503),n(18)),component=Object(F.a)(C,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return"한국어"===e.language?n(v.a,[n(h.a,{staticClass:"panel__header",attrs:{"disable-icon-rotate":""}},[n("div",{staticClass:"panel__header__id"},[n(r.a,{attrs:{depressed:"",icon:""},on:{click:function(t){e.dialog=!0}}},[n(m.a,[e._v("mdi-close")])],1),e._v(" "),n(_.a,{attrs:{width:"30vw"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n(c.a,[n(l.d,[e._v("의뢰 취소")]),e._v(" "),n(l.c,[e._v("해당 의뢰를 취소하시겠습니까?")]),e._v(" "),n(l.a,[n(S.a),e._v(" "),n(r.a,{attrs:{text:""},on:{click:function(t){e.dialog=!1}}},[e._v("취소")]),e._v(" "),n(r.a,{attrs:{color:"success",text:""},on:{click:e.cancelRequest}},[e._v("확인")])],1)],1)],1),e._v("\n      의뢰ID : "+e._s(e.p.id)+"\n    ")],1),e._v(" "),n(S.a),e._v(" "),n("div",{staticClass:"panel__header__date"},[n(m.a,[e._v("mdi-calendar-clock")]),e._v("\n      "+e._s(e.p.date)+"\n    ")],1),e._v(" "),n(S.a),e._v(" "),n("div",{staticClass:"pannel__header__state"},[n(o.a,{attrs:{color:e.stateColor(e.p.trans_state),dark:""}},[e._v("\n        "+e._s(e.p.trans_state)+"\n        "),n(m.a,{attrs:{right:"",color:"white"}},[e._v(" "+e._s(e.stateIcon(e.p.trans_state))+" ")])],1)],1)],1),e._v(" "),n(f.a,e._l(e.mfFile,(function(t,i){return n(y.a,{key:t.id},[n(x.a,{staticClass:"itemStyle",attrs:{dense:""}},[n(o.a,{staticClass:"chipStyle",attrs:{label:""}},[e._v("\n          "+e._s(t.field)+"\n        ")]),e._v(" "),n(S.a),e._v(" "),n("div",{staticStyle:{display:"flex"}},[n(S.a),e._v(" "),n(o.a,{staticClass:"chipStyle"},[e._v("\n            "+e._s(t.req_lang)+"\n          ")]),e._v(" "),n(S.a),e._v(" "),n(m.a,[e._v("mdi-arrow-right-bold")]),e._v(" "),n(S.a),e._v(" "),n(o.a,{staticClass:"chipStyle"},[e._v("\n            "+e._s(t.grant_lang)+"\n          ")])],1),e._v(" "),n(S.a),e._v(" "),n("div",{staticClass:"textStyle"},[n(m.a,{attrs:{left:""}},[e._v(" mdi-file-document-multiple ")]),e._v("\n          "+e._s(t.src.substring(t.src.lastIndexOf("/")+1))+"\n          "),e.countingFile[i]-1!=0?n("span",[e._v("외 "+e._s(e.countingFile[i]-1)+"개의 파일")]):e._e()],1),e._v(" "),n(S.a),e._v(" "),n(w.a,{staticClass:"iconStyle"},[n(m.a,{attrs:{color:"success"}},[e._v(" mdi-check-circle ")])],1)],1)],1)})),1)],1):"영어"===e.language?n(v.a,[n(h.a,{staticClass:"panel__header",attrs:{"disable-icon-rotate":""}},[n("div",{staticClass:"panel__header__id"},[n(r.a,{attrs:{depressed:"",icon:""},on:{click:function(t){e.dialog=!0}}},[n(m.a,[e._v("mdi-close")])],1),e._v(" "),n(_.a,{attrs:{width:"30vw"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n(c.a,[n(l.d,[e._v("Request Cancel")]),e._v(" "),n(l.c,[e._v("Are you sure you want to cancel the quest?")]),e._v(" "),n(l.a,[n(S.a),e._v(" "),n(r.a,{attrs:{text:""},on:{click:function(t){e.dialog=!1}}},[e._v("No")]),e._v(" "),n(r.a,{attrs:{color:"success",text:""},on:{click:e.cancelRequest}},[e._v("Yes")])],1)],1)],1),e._v("\n        의뢰ID : "+e._s(e.p.id)+"\n    ")],1),e._v(" "),n(S.a),e._v(" "),n("div",{staticClass:"panel__header__date"},[n(m.a,[e._v("mdi-calendar-clock")]),e._v("\n      "+e._s(e.p.date)+"\n    ")],1),e._v(" "),n(S.a),e._v(" "),n("div",{staticClass:"pannel__header__state"},[n(o.a,{attrs:{color:e.stateColor(e.p.trans_state),dark:""}},[e._v("\n        "+e._s(e.p.trans_state)+"\n        "),n(m.a,{attrs:{right:"",color:"white"}},[e._v(" "+e._s(e.stateIcon(e.p.trans_state))+" ")])],1)],1)],1),e._v(" "),n(f.a,[n(d.a),e._v(" "),e._l(e.mfFile,(function(t,i){return n(y.a,{key:t.id},[n(x.a,{attrs:{dense:""}},[n(o.a,{staticClass:"chipStyle",staticStyle:{"min-width":"10vw"},attrs:{label:""}},[e._v("\n          "+e._s(t.field)+"\n        ")]),e._v(" "),n(S.a),e._v(" "),n("div",{staticStyle:{display:"flex",width:"10vw"}},[n(S.a),e._v(" "),n(o.a,{staticClass:"chipStyle"},[e._v("\n            "+e._s(t.req_lang)+"\n          ")]),e._v(" "),n(S.a),e._v(" "),n(m.a,[e._v("mdi-arrow-right-bold")]),e._v(" "),n(S.a),e._v(" "),n(o.a,{staticClass:"chipStyle"},[e._v("\n            "+e._s(t.grant_lang)+"\n          ")])],1),e._v(" "),n(S.a),e._v(" "),n("div",{staticClass:"textStyle"},[n(m.a,{attrs:{left:""}},[e._v(" mdi-file-document-multiple ")]),e._v("\n          "+e._s(t.src.substring(t.src.lastIndexOf("/")+1))+"\n          "),e.countingFile[i]-1!=0?n("span",[e._v("other "+e._s(e.countingFile[i]-1)+" files")]):e._e()],1),e._v(" "),n(S.a),e._v(" "),n(w.a,[n(m.a,{attrs:{color:"success"}},[e._v(" mdi-check-circle ")])],1)],1)],1)}))],2)],1):n(v.a,[n("div",{staticClass:"text-h1"},[e._v("페이지 로드 에러")])])}),[],!1,null,"fa0a16ec",null);t.a=component.exports},515:function(e,t,n){var content=n(550);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("a58d75be",content,!0,{sourceMap:!1})},549:function(e,t,n){"use strict";n(515)},550:function(e,t,n){var r=n(9)(!1);r.push([e.i,".titleStyle[data-v-3e69f442]{color:#f0f8ff;background:#013183;border-radius:30px 30px 0 0}",""]),e.exports=r},621:function(e,t,n){"use strict";n.r(t);var r=n(460),c=n(193),l=n(69),o=n(472),_=n(606),d=n(469),v=n(48),f=n(40),h={layout:"AdminLayout",components:{transDashBoard:n(507).a},data:function(){return{}},fetch:function(e){return e.store.dispatch("admin/loadReq")},asyncData:function(){return{}},computed:{allRequest:function(){return this.$store.state.admin.allRequest}},methods:{update:function(){this.$store.dispatch("admin/loadReq")}}},m=(n(549),n(18)),component=Object(m.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(o.a,[n(v.a,{attrs:{elevation:"0"}},[n(f.b,[n("h1",[e._v("의뢰 목록 관리")])]),e._v(" "),n(d.a),e._v(" "),n(r.a,{attrs:{rounded:"",color:"success"},on:{click:e.update}},[e._v("조회하기")])],1),e._v(" "),n(c.a,[n(o.a,[n(l.d,{staticClass:"titleStyle"},[e._v(" 번역 현황 ")]),e._v(" "),n(c.a,{staticClass:"overflow-y-auto",staticStyle:{height:"90vh"},attrs:{elevation:"10"}},[n(_.a,{attrs:{flat:"",accordion:"",focusable:""}},e._l(e.allRequest,(function(e){return n("trans-dash-board",{key:e.id,attrs:{id:e.id,p:e}})})),1)],1)],1)],1)],1)}),[],!1,null,"3e69f442",null);t.default=component.exports}}]);