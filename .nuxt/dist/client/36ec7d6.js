(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{469:function(e,t,n){var content=n(507);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(14).default)("04121b31",content,!0,{sourceMap:!1})},506:function(e,t,n){"use strict";n(469)},507:function(e,t,n){var l=n(13)(!1);l.push([e.i,".file_selector[data-v-1f4a9596],.selector[data-v-1f4a9596]{min-width:200px;max-width:200px}.toolbar_class[data-v-1f4a9596]{border-bottom:3px solid green}.list_select[data-v-1f4a9596]{border:solid #013183!important;color:#013183!important}.toggle_group[data-v-1f4a9596]{border:1px solid #013183!important}",""]),e.exports=l},567:function(e,t,n){"use strict";n.r(t);n(9),n(6),n(8),n(10),n(11);var l=n(7),o=n(1),r=(n(53),n(23),n(58),n(21),n(67),n(68),n(118)),c=n(504),d=n.n(c),v=n(505),f=n.n(v);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}d.a.vfs=f.a.pdfMake.vfs;var h={layout:"TextLayout",data:function(){return{hideDetails:!0,valid:!1,menu:!1,name:"",phone:"",email:"",company:"",second_phone:"",date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),req_field:["","","","",""],req_lang:["","","","",""],grant_lang:["","","","",""],price:[0,0,0,0,0],unit_price:[0,0,0,0,0],file:[],options:"",dialog:!1,sels:0,selectLanguage1:0,selectLanguage2:0,selectField:0,e_selectLanguage1:0,e_selectLanguage2:0,e_selectField:0,dollar:!1,wordCount:"",acceptFiles:".txt,.pdf,.docx"}},asyncData:function(e){e.store.commit("requests/setExcost",0)},computed:m(m({},Object(r.b)("requests",["imagePaths"])),{},{loginState:function(){return this.$store.state.users.loginState},language:function(){return this.$store.state.manager.language},languages:function(){return this.$LANGUAGES_KO},e_languages:function(){return this.$LANGUAGES_EN},field:function(){return this.$FIELDS_KO},e_field:function(){return this.$FIELDS_EN},totalPrice:function(){return this.$store.state.requests.ex_cost},exRate:function(){return this.$DOLLAR}}),watch:{selectLanguage1:function(){this.calcCost()},selectLanguage2:function(){this.calcCost()},selectField:function(){this.calcCost()},req_lang:{handler:function(){for(var i=0;i<this.req_lang.length;i++)""!==this.req_lang[i]&&""!==this.grant_lang[i]&&""!==this.req_field[i]&&(this.unit_price[i]=this.requestCost(this.req_lang[i],this.grant_lang[i],this.req_field[i]))},deep:!0},grant_lang:{handler:function(){for(var i=0;i<this.req_lang.length;i++)""!==this.req_lang[i]&&""!==this.grant_lang[i]&&""!==this.req_field[i]&&(this.unit_price[i]=this.requestCost(this.req_lang[i],this.grant_lang[i],this.req_field[i]))},deep:!0},req_field:{handler:function(){for(var i=0;i<this.req_lang.length;i++)""!==this.req_lang[i]&&""!==this.grant_lang[i]&&""!==this.req_field[i]&&(this.unit_price[i]=this.requestCost(this.req_lang[i],this.grant_lang[i],this.req_field[i]))},deep:!0}},methods:{pdfTest:function(){var e={watermark:{text:"DMTLABS",color:"blue",opacity:.2,bold:!0,fontSize:40,angle:30},content:[{text:"\nDMTLABS Translation Request Estimate\n\n",style:"style_header"},{style:"style_table",table:{widths:["auto",100,"*","*"],body:[[{text:"Provider",rowSpan:4,fillColor:"#bdcce3"},{text:"Representative"},{text:"KIM-UN",colSpan:2},""],["",{text:"Trade"},{text:"DMTLABS",colSpan:2},""],["",{text:"Address"},{text:"(04386) Room 404, Hangang-daero 40-gil 18, Yongsan-gu, Seoul, Republic of Korea (144-2 Dai Building, Hangang-ro 2-ga)",colSpan:2},""],["",{text:"Contact"},{text:"02-794-5333",colSpan:2},""]]}},{style:"style_table",table:{widths:["auto",100,"*","*"],body:[[{text:"Consumer",rowSpan:4,fillColor:"#bdcce3"},{text:"Client"},{text:"".concat(this.name),colSpan:2},""],["",{text:"Requester"},{text:"".concat(this.company),colSpan:2},""],["",{text:"Contact"},{text:"".concat(this.phone.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3")),colSpan:2},""],["",{text:"Requested Date"},{text:"".concat(this.date),colSpan:2},""]]}},{style:"style_table",table:{heights:20,widths:["auto","*","*","*","auto"],headerRows:2,body:[[{text:"Total",colSpan:2,fillColor:"#f49d80"},"",{text:this.price[0]+this.price[1]+this.price[2]+this.price[3]+this.price[4]+" Won",colSpan:3,fillColor:"#f49d80"},"",""],[{text:"Translation Info",colSpan:2,fillColor:"#dedede"},"",{text:"Price",colSpan:2,fillColor:"#dedede"},"",{text:"etc",fillColor:"#dedede"}],[{text:"".concat(this.e_languages[this.languages.indexOf(this.req_lang[0])]," -> ").concat(this.e_languages[this.languages.indexOf(this.grant_lang[0])]),colSpan:2},"",{text:"".concat(this.price[0]," Won"),colSpan:2},"",""],[{text:"".concat(this.e_languages[this.languages.indexOf(this.req_lang[1])]," -> ").concat(this.e_languages[this.languages.indexOf(this.grant_lang[1])]),colSpan:2},"",{text:"".concat(this.price[1]," Won"),colSpan:2},"",""],[{text:"".concat(this.e_languages[this.languages.indexOf(this.req_lang[2])]," -> ").concat(this.e_languages[this.languages.indexOf(this.grant_lang[2])]),colSpan:2},"",{text:"".concat(this.price[2]," Won"),colSpan:2},"",""],[{text:"".concat(this.e_languages[this.languages.indexOf(this.req_lang[3])]," -> ").concat(this.e_languages[this.languages.indexOf(this.grant_lang[3])]),colSpan:2},"",{text:"".concat(this.price[3]," Won"),colSpan:2},"",""],[{text:"".concat(this.e_languages[this.languages.indexOf(this.req_lang[4])]," -> ").concat(this.e_languages[this.languages.indexOf(this.grant_lang[4])]),colSpan:2},"",{text:"".concat(this.price[4]," Won"),colSpan:2},"",""]]}}],footer:function(e,t){return{margin:10,columns:[{fontSize:9,text:{text:""+e.toString()}}],alignment:"center"}},styles:{style_header:{fontSize:24,bold:!0,margin:[0,0,0,0],alignment:"center"},style_test:{fontSize:18,bold:!0,margin:[0,0,0,0],alignment:"center"},style_table:{margin:[0,5,0,15],alignment:"center",fontSize:12}},pageSize:"A4",pageOrientation:"portrait"};d.a.createPdf(e).download("번역 의뢰 견적서.pdf")},onSubmitForm:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e.$refs.form.validate()){t.next=7;break}return t.next=4,e.$store.dispatch("requests/onRequest",{name:e.name,phone:e.phone,email:e.email,company:e.company,second_phone:e.second_phone,date:e.date,field:e.req_field,req_lang:e.req_lang,grant_lang:e.grant_lang,options:e.options,trans_state:"번역 준비중",fileInfo:e.$store.state.requests.fileInfo});case 4:"OK"===(n=t.sent).statusText?(e.$manage.showMessage({message:"의뢰 성공",color:"green lighten-2"}),console.log("의뢰"),e.$router.push({path:"/text/textmain"})):(e.$manage.showMessage({message:"의뢰 실패",color:"indigo lighten-2"}),e.$store.dispatch("requests/cancelRequest",n.data.id),console.log("의뢰 실패")),e.dialog=!1;case 7:t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),e.$manage.showMessage({message:"의뢰 실패",color:"red lighten-2"}),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))()},onChangeTextarea:function(){this.hideDetails=!0},onChangeFile:function(e,t){var n=this;return Object(l.a)(regeneratorRuntime.mark((function l(){var o,r;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:if(o=new FormData,null==t){l.next=19;break}return[].forEach.call(t,(function(l){"application/pdf"===l.type||"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"===l.type||"text/plain"===l.type||"application/haansofthwp"===l.type||"pptx"===l.name.substring(l.name.lastIndexOf(".")+1)?o.append("fileKey",l):(n.$manage.showMessage({message:"지원하지 않는 형식의 파일이 존재합니다. 해당 파일 형식 : [.".concat(""===l.type?l.name.substring(l.name.lastIndexOf(".")+1):l.type,"]"),color:"orange darken-1"}),n.file[e]=null,console.log(n.$refs.file0),n.$refs.file0.hasInput=!1,n.$refs.file0.initialValue=null,n.$refs.file0.lazyValue=null,t=null)})),l.prev=3,n.$nuxt.$loading.start(),l.next=7,n.$store.dispatch("requests/uploadFile",{index:e,file:o});case 7:return l.next=9,n.$store.dispatch("requests/extracting",{lang:n.req_lang[e],file:o,unitcost:n.unit_price[e]});case 9:null!=(r=l.sent)&&(n.$store.dispatch("requests/setFileInfo",{index:e,info:r}),n.price[e]=n.$store.state.requests.fileInfo[e].cost),n.$nuxt.$loading.finish(),l.next=17;break;case 14:l.prev=14,l.t0=l.catch(3),console.log(l.t0);case 17:l.next=20;break;case 19:console.log("e is null!!!");case 20:case"end":return l.stop()}}),l,null,[[3,14]])})))()},onClearFile:function(e){this.$store.dispatch("requests/removeFile",e)},commas:function(e){return"number"==typeof e?e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):e},loginCheck:function(){this.loginState||(this.$refs.toggle._data.internalLazyValue=0,this.sels=0,this.$manage.showMessage({message:"로그인이 필요한 작업입니다.",color:"red"}))},calcCost:function(){"한국어"===this.language?this.$CALC_COST(this.languages[this.selectLanguage1],this.languages[this.selectLanguage2],this.field[this.selectField]):this.$CALC_COST(this.e_languages[this.selectLanguage1],this.e_languages[this.selectLanguage2],this.e_field[this.selectField])},requestCost:function(e,t,n){return this.$CALC_COST(e,t,n),this.$store.state.requests.ex_cost}}},x=(n(506),n(22)),y=n(31),k=n.n(y),C=n(554),w=n(421),S=n(555),$=n(191),F=n(89),O=n(548),L=n(444),T=n(559),V=n(434),j=n(422),D=n(556),R=n(435),P=n(186),K=n(187),I=n(117),A=n(189),E=n(15),M=n(423),N=n(549),z=n(573),W=n(430),B=n(463),U=n(419),G=n(557),Y=n(47),J=n(48),component=Object(x.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-col",[n("v-btn-toggle",{ref:"toggle",staticClass:"toggle_group",staticStyle:{width:"100%"},attrs:{mandatory:"",color:"primary"},on:{change:e.loginCheck},model:{value:e.sels,callback:function(t){e.sels=t},expression:"sels"}},[n("v-btn",{staticStyle:{margin:"0",padding:"0"},attrs:{width:"50%"}},[e._v("\n        "+e._s("한국어"===e.language?"견적":"Estimate")+"\n      ")]),e._v(" "),n("v-btn",{staticStyle:{margin:"0",padding:"0"},attrs:{width:"50%"}},[e._v("\n        "+e._s("한국어"===e.language?"의뢰":"Request")+"\n      ")])],1)],1),e._v(" "),0===e.sels?n("v-card",{attrs:{outlined:"",elevation:"10"}},["한국어"===e.language?n("v-container",[n("v-row",[n("v-col",[n("v-toolbar",{staticClass:"toolbar_class",attrs:{elevation:"0"}},[n("v-toolbar-title",{staticClass:"font-weight-bold"},[e._v(" 원본 언어 ")])],1),e._v(" "),n("v-list",{staticClass:"overflow-y-auto",attrs:{height:"300"}},[n("v-list-item-group",{attrs:{mandatory:""},model:{value:e.selectLanguage1,callback:function(t){e.selectLanguage1=t},expression:"selectLanguage1"}},e._l(e.languages,(function(t,i){return n("v-list-item",{key:i,attrs:{"active-class":"list_select"}},[n("v-list-item-title",[e._v(e._s(t))])],1)})),1)],1)],1),e._v(" "),n("div",{staticClass:"d-flex align-center justify-center"},[n("v-icon",[e._v("mdi-arrow-right-bold")])],1),e._v(" "),n("v-col",[n("v-toolbar",{staticClass:"toolbar_class",attrs:{elevation:"0"}},[n("v-toolbar-title",{staticClass:"font-weight-bold"},[e._v(" 번역 언어 ")])],1),e._v(" "),n("v-list",{staticClass:"overflow-y-auto",attrs:{height:"300"}},[n("v-list-item-group",{attrs:{mandatory:""},model:{value:e.selectLanguage2,callback:function(t){e.selectLanguage2=t},expression:"selectLanguage2"}},e._l(0==e.selectLanguage1?e.languages:["한국어"],(function(t,i){return n("v-list-item",{key:i,attrs:{"active-class":"list_select"}},[n("v-list-item-title",[e._v(e._s(t))])],1)})),1)],1)],1),e._v(" "),n("v-col",[n("v-toolbar",{staticClass:"toolbar_class",attrs:{elevation:"0"}},[n("v-toolbar-title",{staticClass:"font-weight-bold"},[e._v(" 요청 분야 ")])],1),e._v(" "),n("v-list",{staticClass:"overflow-y-auto",attrs:{height:"300"}},[n("v-list-item-group",{attrs:{mandatory:""},model:{value:e.selectField,callback:function(t){e.selectField=t},expression:"selectField"}},e._l(e.field,(function(t,i){return n("v-list-item",{key:i,attrs:{"active-class":"list_select"}},[n("v-list-item-title",[e._v(e._s(t))])],1)})),1)],1)],1)],1)],1):"영어"===e.language?n("v-container",[n("v-row",[n("v-col",[n("v-toolbar",{attrs:{color:"primary"}},[n("v-toolbar-title",[e._v("Original Language")])],1),e._v(" "),n("v-list",{staticClass:"overflow-y-auto",attrs:{height:"300"}},[n("v-list-item-group",{attrs:{mandatory:""},model:{value:e.selectLanguage1,callback:function(t){e.selectLanguage1=t},expression:"selectLanguage1"}},e._l(e.e_languages,(function(t,i){return n("v-list-item",{key:i,attrs:{"active-class":"list_select"}},[n("v-list-item-title",[e._v(e._s(t))])],1)})),1)],1)],1),e._v(" "),n("div",{staticClass:"d-flex align-center justify-center"},[n("v-icon",[e._v("mdi-arrow-right-bold")])],1),e._v(" "),n("v-col",[n("v-toolbar",{attrs:{color:"primary"}},[n("v-toolbar-title",[e._v("Translate Language")])],1),e._v(" "),n("v-list",{staticClass:"overflow-y-auto",attrs:{height:"300"}},[n("v-list-item-group",{attrs:{mandatory:""},model:{value:e.selectLanguage2,callback:function(t){e.selectLanguage2=t},expression:"selectLanguage2"}},e._l(0==e.selectLanguage1?e.e_languages:["Korean"],(function(t,i){return n("v-list-item",{key:i,attrs:{"active-class":"list_select"}},[n("v-list-item-title",[e._v(e._s(t))])],1)})),1)],1)],1),e._v(" "),n("v-col",[n("v-toolbar",{attrs:{color:"primary"}},[n("v-toolbar-title",[e._v("Request Field")])],1),e._v(" "),n("v-list",{staticClass:"overflow-y-auto",attrs:{height:"300"}},[n("v-list-item-group",{attrs:{mandatory:""},model:{value:e.selectField,callback:function(t){e.selectField=t},expression:"selectField"}},e._l(e.e_field,(function(t,i){return n("v-list-item",{key:i,attrs:{"active-class":"list_select"}},[n("v-list-item-title",[e._v(e._s(t))])],1)})),1)],1)],1)],1)],1):e._e(),e._v(" "),n("v-divider"),e._v(" "),"한국어"===e.language?n("v-card",[n("v-card-title",{staticClass:"text-h4"},[e._v("\n        글자수\n        "),n("v-spacer"),e._v(" "),n("v-text-field",{attrs:{type:"number","hide-spin-buttons":"",prefix:"글자",reverse:"",dense:""},model:{value:e.wordCount,callback:function(t){e.wordCount=t},expression:"wordCount"}})],1),e._v(" "),n("v-card-subtitle",{staticClass:"text-caption"},[e._v("\n        중국어/일본어 = 1글자 당 "),n("br"),e._v("\n        그 외 = 1단어 당\n      ")]),e._v(" "),n("v-spacer")],1):"영어"===e.language?n("v-card",[n("v-card-title",{staticClass:"text-h4"},[e._v("\n        Words(Characters)\n        "),n("v-spacer"),e._v(" "),n("v-text-field",{attrs:{type:"number","hide-spin-buttons":"",prefix:"words",reverse:"",dense:""},model:{value:e.wordCount,callback:function(t){e.wordCount=t},expression:"wordCount"}})],1),e._v(" "),n("v-card-subtitle",{staticClass:"text-caption"},[e._v("\n        Chinese/Japanese = per letter "),n("br"),e._v("\n        Other = per word\n      ")]),e._v(" "),n("v-spacer")],1):e._e(),e._v(" "),n("v-divider"),e._v(" "),n("v-card",[n("v-card-title",{staticClass:"text-h4"},[n("v-btn",{attrs:{icon:""},on:{click:function(t){e.dollar=!e.dollar}},model:{value:e.dollar,callback:function(t){e.dollar=t},expression:"dollar"}},[e.dollar?n("v-icon",[e._v("mdi-currency-usd")]):n("v-icon",[e._v("mdi-currency-krw")])],1),e._v(" "),n("v-spacer"),e._v("\n        "+e._s(e.commas(e.dollar?e.totalPrice:(e.totalPrice/e.exRate).toFixed(3))*e.wordCount)+"\n        "+e._s(e.dollar?"원":"$")+"\n      ")],1),e._v(" "),n("v-card-title",{staticClass:"text-caption"},[n("div",[e._v("\n          단위 가격(Unit Cost) * 글자 수(Words) "),n("br"),e._v("\n          단위 가격(Unit Cost) = 언어 종류(Language type) * 분야(Field)\n        ")]),e._v(" "),n("v-spacer"),e._v("\n        단위 가격(Unit Cost) :\n        "+e._s(e.commas(e.dollar?e.totalPrice:(e.totalPrice/e.exRate).toFixed(3)))+"\n        "+e._s(e.dollar?"원":"$")+"\n      ")],1),e._v(" "),n("v-divider")],1),e._v(" "),"한국어"===e.language?n("v-card-title",[n("v-spacer"),e._v(" "),n("v-subheader",{domProps:{textContent:e._s("※본 견적은 정확하지 않을 수 있으며, 파일 내의 이미지 유무와 관련하여 추가 요금이 부과될 수 있습니다.")}})],1):"영어"===e.language?n("v-card-title",[n("v-spacer"),e._v(" "),n("v-subheader",{domProps:{textContent:e._s("※This estimate may not be accurate and there may be an additional charge for the presence or absence of images in the file.")}})],1):e._e()],1):1===e.sels?n("v-card",{attrs:{outlined:"",elevation:"10"}},["한국어"===e.language?n("v-container",[n("v-form",{ref:"form",on:{submit:function(e){e.preventDefault()}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{type:"text",label:"*성명","prepend-inner-icon":"mdi-account",rules:[function(e){return!!e||"이름을 입력하셔야 합니다."}]},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),n("v-text-field",{attrs:{type:"tel",label:"*휴대전화","prepend-inner-icon":"mdi-cellphone",rules:[function(e){return!!e||"전화번호를 입력하셔야 합니다."}]},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),e._v(" "),n("v-text-field",{attrs:{type:"email",label:"*이메일","prepend-inner-icon":"mdi-email",rules:[function(e){return!!e||"이메일을 입력하셔야 합니다."}]},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),n("v-text-field",{attrs:{type:"text",label:"*회사명","prepend-inner-icon":"mdi-office-building",rules:[function(e){return!!e||"회사이름이나 소속명을 입력해주세요."}]},model:{value:e.company,callback:function(t){e.company=t},expression:"company"}}),e._v(" "),n("v-text-field",{attrs:{type:"tel",label:"전화","prepend-inner-icon":"mdi-deskphone"},model:{value:e.second_phone,callback:function(t){e.second_phone=t},expression:"second_phone"}}),e._v(" "),n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":e.date,"offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var l=t.on,o=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{"prepend-inner-icon":"mdi-calendar",readonly:"",label:"*희망 납품일",rules:[function(e){return!!e||"희망 납품일을 입력해주세요."}]},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},"v-text-field",o,!1),l))]}}],null,!1,2340921018),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),n("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(t){e.menu=!1}}},[e._v("Cancel")]),e._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(t){return e.$refs.menu.save(e.date)}}},[e._v("OK")])],1)],1),e._v(" "),n("v-banner",{attrs:{shaped:""}},[e._v("의뢰할 내용")]),e._v(" "),n("div",[n("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[n("div",[n("v-select",{staticClass:"selector",attrs:{items:e.languages,label:"번역이 필요한 언어","prepend-icon":"mdi-book-sync",outlined:"",dense:"",rules:[function(e){return!!e||"번역될 언어를 선택하세요."}]},model:{value:e.req_lang[0],callback:function(t){e.$set(e.req_lang,0,t)},expression:"req_lang[0]"}})],1),e._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("v-icon",[e._v("mdi-arrow-right-bold")])],1),e._v(" "),n("div",[n("v-select",{staticClass:"selector",attrs:{items:"한국어"===e.req_lang[0]?e.languages:["한국어"],label:"번역할 언어","prepend-icon":"mdi-book-check",outlined:"",dense:"",rules:[function(e){return!!e||"번역할 언어를 선택하세요."}]},model:{value:e.grant_lang[0],callback:function(t){e.$set(e.grant_lang,0,t)},expression:"grant_lang[0]"}})],1),e._v(" "),n("div",[n("v-select",{staticClass:"selector",attrs:{items:e.field,label:"요청분야","prepend-icon":"mdi-shape",outlined:"",dense:""},model:{value:e.req_field[0],callback:function(t){e.$set(e.req_field,0,t)},expression:"req_field[0]"}})],1),e._v(" "),n("div",[n("v-file-input",{ref:"file0",staticClass:"file_selector",attrs:{"prepend-icon":"mdi-content-save",label:"파일 첨부","small-chips":"",multiple:"",dense:"",rules:[function(e){return!!e||"번역 파일을 첨부해주세요."}],accept:e.acceptFiles,disabled:""===e.req_lang[0]},on:{change:function(t){return e.onChangeFile(0,t)},"click:clear":function(t){return e.onClearFile(0)}},model:{value:e.file[0],callback:function(t){e.$set(e.file,0,t)},expression:"file[0]"}})],1)]),e._v(" "),n("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[n("div",[n("v-select",{staticClass:"selector",attrs:{items:e.languages,label:"번역이 필요한 언어","prepend-icon":"mdi-book-sync",outlined:"",dense:""},model:{value:e.req_lang[1],callback:function(t){e.$set(e.req_lang,1,t)},expression:"req_lang[1]"}})],1),e._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("v-icon",[e._v("mdi-arrow-right-bold")])],1),e._v(" "),n("div",[n("v-select",{staticClass:"selector",attrs:{items:"한국어"===e.req_lang[1]?e.languages:["한국어"],label:"번역할 언어","prepend-icon":"mdi-book-check",outlined:"",dense:""},model:{value:e.grant_lang[1],callback:function(t){e.$set(e.grant_lang,1,t)},expression:"grant_lang[1]"}})],1),e._v(" "),n("div",[n("v-select",{staticClass:"selector",attrs:{items:e.field,label:"요청분야","prepend-icon":"mdi-shape",outlined:"",dense:""},model:{value:e.req_field[1],callback:function(t){e.$set(e.req_field,1,t)},expression:"req_field[1]"}})],1),e._v(" "),n("div",[n("v-file-input",{ref:"file1",staticClass:"file_selector",attrs:{"prepend-icon":"mdi-content-save",label:"파일 첨부","small-chips":"",multiple:"",dense:"",accept:e.acceptFiles,disabled:""===e.req_lang[1]},on:{change:function(t){return e.onChangeFile(1,t)},"click:clear":function(t){return e.onClearFile(1)}},model:{value:e.file[1],callback:function(t){e.$set(e.file,1,t)},expression:"file[1]"}})],1)]),e._v(" "),n("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[n("div",[n("v-select",{staticClass:"selector",attrs:{items:e.languages,label:"번역이 필요한 언어","prepend-icon":"mdi-book-sync",outlined:"",dense:""},model:{value:e.req_lang[2],callback:function(t){e.$set(e.req_lang,2,t)},expression:"req_lang[2]"}})],1),e._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("v-icon",[e._v("mdi-arrow-right-bold")])],1),e._v(" "),n("div",[n("v-select",{staticClass:"selector",attrs:{items:"한국어"===e.req_lang[2]?e.languages:["한국어"],label:"번역할 언어","prepend-icon":"mdi-book-check",outlined:"",dense:""},model:{value:e.grant_lang[2],callback:function(t){e.$set(e.grant_lang,2,t)},expression:"grant_lang[2]"}})],1),e._v(" "),n("div",[n("v-select",{staticClass:"selector",attrs:{items:e.field,label:"요청분야","prepend-icon":"mdi-shape",outlined:"",dense:""},model:{value:e.req_field[2],callback:function(t){e.$set(e.req_field,2,t)},expression:"req_field[2]"}})],1),e._v(" "),n("div",[n("v-file-input",{ref:"file2",staticClass:"file_selector",attrs:{"prepend-icon":"mdi-content-save",label:"파일 첨부","small-chips":"",multiple:"",dense:"",accept:e.acceptFiles,disabled:""===e.req_lang[2]},on:{change:function(t){return e.onChangeFile(2,t)},"click:clear":function(t){return e.onClearFile(2)}},model:{value:e.file[2],callback:function(t){e.$set(e.file,2,t)},expression:"file[2]"}})],1)]),e._v(" "),n("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[n("div",[n("v-select",{staticClass:"selector",attrs:{items:e.languages,label:"번역이 필요한 언어","prepend-icon":"mdi-book-sync",outlined:"",dense:""},model:{value:e.req_lang[3],callback:function(t){e.$set(e.req_lang,3,t)},expression:"req_lang[3]"}})],1),e._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("v-icon",[e._v("mdi-arrow-right-bold")])],1),e._v(" "),n("div",[n("v-select",{staticClass:"selector",attrs:{items:"한국어"===e.req_lang[3]?e.languages:["한국어"],label:"번역할 언어","prepend-icon":"mdi-book-check",outlined:"",dense:""},model:{value:e.grant_lang[3],callback:function(t){e.$set(e.grant_lang,3,t)},expression:"grant_lang[3]"}})],1),e._v(" "),n("div",[n("v-select",{staticClass:"selector",attrs:{items:e.field,label:"요청분야","prepend-icon":"mdi-shape",outlined:"",dense:""},model:{value:e.req_field[3],callback:function(t){e.$set(e.req_field,3,t)},expression:"req_field[3]"}})],1),e._v(" "),n("div",[n("v-file-input",{ref:"file3",staticClass:"file_selector",attrs:{"prepend-icon":"mdi-content-save",label:"파일 첨부","small-chips":"",multiple:"",dense:"",accept:e.acceptFiles,disabled:""===e.req_lang[3]},on:{change:function(t){return e.onChangeFile(3,t)},"click:clear":function(t){return e.onClearFile(3)}},model:{value:e.file[3],callback:function(t){e.$set(e.file,3,t)},expression:"file[3]"}})],1)]),e._v(" "),n("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[n("div",[n("v-select",{staticClass:"selector",attrs:{items:e.languages,label:"번역이 필요한 언어","prepend-icon":"mdi-book-sync",outlined:"",dense:""},model:{value:e.req_lang[4],callback:function(t){e.$set(e.req_lang,4,t)},expression:"req_lang[4]"}})],1),e._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("v-icon",[e._v("mdi-arrow-right-bold")])],1),e._v(" "),n("div",[n("v-select",{staticClass:"selector",attrs:{items:"한국어"===e.req_lang[4]?e.languages:["한국어"],label:"번역할 언어","prepend-icon":"mdi-book-check",outlined:"",dense:""},model:{value:e.grant_lang[4],callback:function(t){e.$set(e.grant_lang,4,t)},expression:"grant_lang[4]"}})],1),e._v(" "),n("div",[n("v-select",{staticClass:"selector",attrs:{items:e.field,label:"요청분야","prepend-icon":"mdi-shape",outlined:"",dense:""},model:{value:e.req_field[4],callback:function(t){e.$set(e.req_field,4,t)},expression:"req_field[4]"}})],1),e._v(" "),n("div",[n("v-file-input",{ref:"file4",staticClass:"file_selector",attrs:{"prepend-icon":"mdi-content-save",label:"파일 첨부","small-chips":"",multiple:"",dense:"",accept:e.acceptFiles,disabled:""===e.req_lang[4]},on:{change:function(t){return e.onChangeFile(4,t)},"click:clear":function(t){return e.onClearFile(4)}},model:{value:e.file[4],callback:function(t){e.$set(e.file,4,t)},expression:"file[4]"}})],1)])]),e._v(" "),n("v-textarea",{attrs:{outlined:"","auto-grow":"",clearable:"",label:"특이사항","prepend-inner-icon":"mdi-star-cog","hide-details":e.hideDetails},on:{input:e.onChangeTextarea},model:{value:e.options,callback:function(t){e.options=t},expression:"options"}}),e._v(" "),n("div",{staticStyle:{display:"flex","align-content":"center","justify-content":"flex-start",margin:"auto",padding:"10px 0"}},[n("v-spacer"),e._v(" "),n("v-btn",{staticStyle:{margin:"10px"},attrs:{depressed:"",color:"#0d6efd",dark:"",large:""},on:{click:e.pdfTest}},[e._v("\n            견적서 발급\n            "),n("v-icon",{attrs:{right:""}},[e._v("mdi-file-download")])],1),e._v(" "),n("v-btn",{staticStyle:{margin:"10px"},attrs:{depressed:"",color:"success",disabled:!e.loginState,dark:"",large:""},on:{click:function(t){e.dialog=!0}}},[e._v("\n            번역 의뢰\n            "),n("v-icon",{attrs:{right:""}},[e._v("mdi-file-edit")])],1),e._v(" "),n("v-dialog",{attrs:{persistent:"","max-width":"300"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[e._v("의뢰 내용 확인")]),e._v(" "),n("v-card-text",[e._v("해당 의뢰 내용으로 제출하시겠습니까?")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(t){e.dialog=!1}}},[e._v("취소")]),e._v(" "),n("v-btn",{attrs:{color:"success",text:"",type:"submit"},on:{click:e.onSubmitForm}},[e._v("확인")])],1)],1)],1)],1)],1)],1):"영어"===e.language?n("v-container",[n("v-form",{ref:"form",on:{submit:function(e){e.preventDefault()}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{type:"text",label:"*Name","prepend-inner-icon":"mdi-account",rules:[function(e){return!!e||"You have to enter your name."}]},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),n("v-text-field",{attrs:{type:"tel",label:"*Phone Number","prepend-inner-icon":"mdi-cellphone",rules:[function(e){return!!e||"You have to enter your phone number."}]},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),e._v(" "),n("v-text-field",{attrs:{type:"email",label:"*Email","prepend-inner-icon":"mdi-email",rules:[function(e){return!!e||"You have to enter an email."}]},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),n("v-text-field",{attrs:{type:"text",label:"*Company","prepend-inner-icon":"mdi-office-building",rules:[function(e){return!!e||"Please enter name of your company."}]},model:{value:e.company,callback:function(t){e.company=t},expression:"company"}}),e._v(" "),n("v-text-field",{attrs:{type:"tel",label:"Tel","prepend-inner-icon":"mdi-deskphone"},model:{value:e.second_phone,callback:function(t){e.second_phone=t},expression:"second_phone"}}),e._v(" "),n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":e.date,"offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var l=t.on,o=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{"prepend-inner-icon":"mdi-calendar",readonly:"",label:"*Desired date",rules:[function(e){return!!e||"Please enter the desired date."}]},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},"v-text-field",o,!1),l))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),n("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(t){e.menu=!1}}},[e._v("Cancel")]),e._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(t){return e.$refs.menu.save(e.date)}}},[e._v("OK")])],1)],1),e._v(" "),n("v-banner",{attrs:{shaped:""}},[e._v("The Request")]),e._v(" "),n("div",[n("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[n("div",[n("v-select",{staticClass:"selector",attrs:{items:e.e_languages,label:"Need translation","prepend-icon":"mdi-book-sync",outlined:"",dense:"",rules:[function(e){return!!e||"Choose the language to be translated."}]},model:{value:e.req_lang[0],callback:function(t){e.$set(e.req_lang,0,t)},expression:"req_lang[0]"}})],1),e._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("v-icon",[e._v("mdi-arrow-right-bold")])],1),e._v(" "),n("div",[n("v-select",{staticClass:"selector",attrs:{items:"Korean"===e.req_lang[0]?e.e_languages:["Korean"],label:"To translate","prepend-icon":"mdi-book-check",outlined:"",dense:"",rules:[function(e){return!!e||"Choose a language to translate."}]},model:{value:e.grant_lang[0],callback:function(t){e.$set(e.grant_lang,0,t)},expression:"grant_lang[0]"}})],1),e._v(" "),n("div",[n("v-select",{staticClass:"selector",attrs:{items:e.e_field,label:"Request field","prepend-icon":"mdi-shape",outlined:"",dense:""},model:{value:e.req_field[0],callback:function(t){e.$set(e.req_field,0,t)},expression:"req_field[0]"}})],1),e._v(" "),n("div",[n("v-file-input",{staticClass:"file_selector",attrs:{"prepend-icon":"mdi-content-save",label:"File","small-chips":"",dense:"",rules:[function(e){return!!e||"Please attach the File."}]},on:{change:function(t){return e.onChangeFile(0,t)},"click:clear":function(t){return e.onClearFile(0)}},model:{value:e.file[0],callback:function(t){e.$set(e.file,0,t)},expression:"file[0]"}})],1)]),e._v(" "),n("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[n("div",[n("v-select",{staticClass:"selector",attrs:{items:e.e_languages,label:"Need translation","prepend-icon":"mdi-book-sync",outlined:"",dense:""},model:{value:e.req_lang[1],callback:function(t){e.$set(e.req_lang,1,t)},expression:"req_lang[1]"}})],1),e._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("v-icon",[e._v("mdi-arrow-right-bold")])],1),e._v(" "),n("div",[n("v-select",{staticClass:"selector",attrs:{items:"Korean"===e.req_lang[1]?e.e_languages:["Korean"],label:"To translate","prepend-icon":"mdi-book-check",outlined:"",dense:""},model:{value:e.grant_lang[1],callback:function(t){e.$set(e.grant_lang,1,t)},expression:"grant_lang[1]"}})],1),e._v(" "),n("div",[n("v-select",{staticClass:"selector",attrs:{items:e.e_field,label:"Request field","prepend-icon":"mdi-shape",outlined:"",dense:""},model:{value:e.req_field[1],callback:function(t){e.$set(e.req_field,1,t)},expression:"req_field[1]"}})],1),e._v(" "),n("div",[n("v-file-input",{staticClass:"file_selector",attrs:{"prepend-icon":"mdi-content-save",label:"File","small-chips":"",dense:""},on:{change:function(t){return e.onChangeFile(1,t)},"click:clear":function(t){return e.onClearFile(1)}},model:{value:e.file[1],callback:function(t){e.$set(e.file,1,t)},expression:"file[1]"}})],1)]),e._v(" "),n("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[n("div",[n("v-select",{staticClass:"selector",attrs:{items:e.e_languages,label:"Need translation","prepend-icon":"mdi-book-sync",outlined:"",dense:""},model:{value:e.req_lang[2],callback:function(t){e.$set(e.req_lang,2,t)},expression:"req_lang[2]"}})],1),e._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("v-icon",[e._v("mdi-arrow-right-bold")])],1),e._v(" "),n("div",[n("v-select",{staticClass:"selector",attrs:{items:"Korean"===e.req_lang[2]?e.e_languages:["Korean"],label:"To translate","prepend-icon":"mdi-book-check",outlined:"",dense:""},model:{value:e.grant_lang[2],callback:function(t){e.$set(e.grant_lang,2,t)},expression:"grant_lang[2]"}})],1),e._v(" "),n("div",[n("v-select",{staticClass:"selector",attrs:{items:e.e_field,label:"Request field","prepend-icon":"mdi-shape",outlined:"",dense:""},model:{value:e.req_field[2],callback:function(t){e.$set(e.req_field,2,t)},expression:"req_field[2]"}})],1),e._v(" "),n("div",[n("v-file-input",{staticClass:"file_selector",attrs:{"prepend-icon":"mdi-content-save",label:"File","small-chips":"",dense:""},on:{change:function(t){return e.onChangeFile(2,t)},"click:clear":function(t){return e.onClearFile(2)}},model:{value:e.file[2],callback:function(t){e.$set(e.file,2,t)},expression:"file[2]"}})],1)]),e._v(" "),n("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[n("div",[n("v-select",{staticClass:"selector",attrs:{items:e.e_languages,label:"Need translation","prepend-icon":"mdi-book-sync",outlined:"",dense:""},model:{value:e.req_lang[3],callback:function(t){e.$set(e.req_lang,3,t)},expression:"req_lang[3]"}})],1),e._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("v-icon",[e._v("mdi-arrow-right-bold")])],1),e._v(" "),n("div",[n("v-select",{staticClass:"selector",attrs:{items:"Korean"===e.req_lang[3]?e.e_languages:["Korean"],label:"To translate","prepend-icon":"mdi-book-check",outlined:"",dense:""},model:{value:e.grant_lang[3],callback:function(t){e.$set(e.grant_lang,3,t)},expression:"grant_lang[3]"}})],1),e._v(" "),n("div",[n("v-select",{staticClass:"selector",attrs:{items:e.e_field,label:"Request field","prepend-icon":"mdi-shape",outlined:"",dense:""},model:{value:e.req_field[3],callback:function(t){e.$set(e.req_field,3,t)},expression:"req_field[3]"}})],1),e._v(" "),n("div",[n("v-file-input",{staticClass:"file_selector",attrs:{"prepend-icon":"mdi-content-save",label:"File","small-chips":"",dense:""},on:{change:function(t){return e.onChangeFile(3,t)},"click:clear":function(t){return e.onClearFile(3)}},model:{value:e.file[3],callback:function(t){e.$set(e.file,3,t)},expression:"file[3]"}})],1)]),e._v(" "),n("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[n("div",[n("v-select",{staticClass:"selector",attrs:{items:e.e_languages,label:"Need translation","prepend-icon":"mdi-book-sync",outlined:"",dense:""},model:{value:e.req_lang[4],callback:function(t){e.$set(e.req_lang,4,t)},expression:"req_lang[4]"}})],1),e._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("v-icon",[e._v("mdi-arrow-right-bold")])],1),e._v(" "),n("div",[n("v-select",{staticClass:"selector",attrs:{items:"Korean"===e.req_lang[4]?e.e_languages:["Korean"],label:"To translate","prepend-icon":"mdi-book-check",outlined:"",dense:""},model:{value:e.grant_lang[4],callback:function(t){e.$set(e.grant_lang,4,t)},expression:"grant_lang[4]"}})],1),e._v(" "),n("div",[n("v-select",{staticClass:"selector",attrs:{items:e.e_field,label:"Request field","prepend-icon":"mdi-shape",outlined:"",dense:""},model:{value:e.req_field[4],callback:function(t){e.$set(e.req_field,4,t)},expression:"req_field[4]"}})],1),e._v(" "),n("div",[n("v-file-input",{staticClass:"file_selector",attrs:{"prepend-icon":"mdi-content-save",label:"File","small-chips":"",dense:""},on:{change:function(t){return e.onChangeFile(4,t)},"click:clear":function(t){return e.onClearFile(4)}},model:{value:e.file[4],callback:function(t){e.$set(e.file,4,t)},expression:"file[4]"}})],1)])]),e._v(" "),n("v-textarea",{attrs:{outlined:"","auto-grow":"",clearable:"",label:"Special Order","prepend-inner-icon":"mdi-star-cog","hide-details":e.hideDetails},on:{input:e.onChangeTextarea},model:{value:e.options,callback:function(t){e.options=t},expression:"options"}}),e._v(" "),n("div",{staticStyle:{display:"flex","align-content":"center","justify-content":"flex-start",margin:"auto",padding:"10px 0"}},[n("v-spacer"),e._v(" "),n("v-btn",{staticStyle:{margin:"10px"},attrs:{depressed:"",color:"#0d6efd",dark:"",large:""},on:{click:e.pdfTest}},[e._v("\n            Issuing Quotation\n            "),n("v-icon",{attrs:{right:""}},[e._v("mdi-file-download")])],1),e._v(" "),n("v-btn",{staticStyle:{margin:"10px"},attrs:{depressed:"",color:"success",disabled:!e.loginState,dark:"",large:""},on:{click:function(t){e.dialog=!0}}},[e._v("\n            Translation request\n            "),n("v-icon",{attrs:{right:""}},[e._v("mdi-file-edit")])],1),e._v(" "),n("v-dialog",{attrs:{persistent:"","max-width":"300"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[e._v("Check the request")]),e._v(" "),n("v-card-text",[e._v("Would you like to submit the request?")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(t){e.dialog=!1}}},[e._v("Cancel")]),e._v(" "),n("v-btn",{attrs:{color:"success",text:"",type:"submit"},on:{click:e.onSubmitForm}},[e._v("OK")])],1)],1)],1)],1)],1)],1):e._e()],1):e._e()],1)}),[],!1,null,"1f4a9596",null);t.default=component.exports;k()(component,{VBanner:C.a,VBtn:w.a,VBtnToggle:S.a,VCard:$.a,VCardActions:F.a,VCardSubtitle:F.b,VCardText:F.c,VCardTitle:F.d,VCol:O.a,VContainer:L.a,VDatePicker:T.a,VDialog:V.a,VDivider:j.a,VFileInput:D.a,VForm:R.a,VIcon:P.a,VList:K.a,VListItem:I.a,VListItemGroup:A.a,VListItemTitle:E.c,VMenu:M.a,VRow:N.a,VSelect:z.a,VSpacer:W.a,VSubheader:B.a,VTextField:U.a,VTextarea:G.a,VToolbar:Y.a,VToolbarTitle:J.b})}}]);