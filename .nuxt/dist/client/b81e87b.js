(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{459:function(e,t,n){"use strict";var r=n(460);t.a=r.a},487:function(e,t,n){var content=n(488);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("83ff91dc",content,!0,{sourceMap:!1})},488:function(e,t,n){var r=n(9)(!1);r.push([e.i,".theme--light.v-file-input .v-file-input__text{color:rgba(0,0,0,.87)}.theme--light.v-file-input .v-file-input__text--placeholder{color:rgba(0,0,0,.6)}.theme--light.v-file-input.v-input--is-disabled .v-file-input__text,.theme--light.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-file-input .v-file-input__text{color:#fff}.theme--dark.v-file-input .v-file-input__text--placeholder{color:hsla(0,0%,100%,.7)}.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text,.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:hsla(0,0%,100%,.5)}.v-file-input input[type=file]{left:0;opacity:0;pointer-events:none;position:absolute;max-width:0;width:0}.v-file-input .v-file-input__text{align-items:center;align-self:stretch;display:flex;flex-wrap:wrap;width:100%}.v-file-input .v-file-input__text.v-file-input__text--chips{flex-wrap:wrap}.v-file-input .v-file-input__text .v-chip{margin:4px}.v-file-input .v-text-field__slot{min-height:32px}.v-file-input.v-input--dense .v-text-field__slot{min-height:26px}.v-file-input.v-text-field--filled:not(.v-text-field--single-line) .v-file-input__text{padding-top:22px}.v-file-input.v-text-field--outlined .v-text-field__slot{padding:6px 0}.v-file-input.v-text-field--outlined.v-input--dense .v-text-field__slot{padding:3px 0}",""]),e.exports=r},497:function(e,t,n){"use strict";var r=n(1),o=(n(50),n(28),n(12),n(59),n(481),n(37),n(22),n(32),n(8),n(11),n(13),n(14),n(280),n(2)),l=n(62),c=n(0);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=["sm","md","lg","xl"],h=["start","end","center"];function m(e,t){return v.reduce((function(n,r){return n[e+Object(c.A)(r)]=t(),n}),{})}var _=function(e){return[].concat(h,["baseline","stretch"]).includes(e)},y=m("align",(function(){return{type:String,default:null,validator:_}})),x=function(e){return[].concat(h,["space-between","space-around"]).includes(e)},k=m("justify",(function(){return{type:String,default:null,validator:x}})),w=function(e){return[].concat(h,["space-between","space-around","stretch"]).includes(e)},O=m("alignContent",(function(){return{type:String,default:null,validator:w}})),$={align:Object.keys(y),justify:Object.keys(k),alignContent:Object.keys(O)},j={align:"align",justify:"justify",alignContent:"align-content"};function T(e,t,n){var r=j[e];if(null!=n){if(t){var o=t.replace(e,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var S=new Map;t.a=o.a.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:_}},y),{},{justify:{type:String,default:null,validator:x}},k),{},{alignContent:{type:String,default:null,validator:w}},O),render:function(e,t){var n=t.props,data=t.data,o=t.children,c="";for(var d in n)c+=String(n[d]);var f=S.get(c);return f||function(){var e,t;for(t in f=[],$)$[t].forEach((function(e){var r=n[e],o=T(t,e,r);o&&f.push(o)}));f.push((e={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(e,"align-".concat(n.align),n.align),Object(r.a)(e,"justify-".concat(n.justify),n.justify),Object(r.a)(e,"align-content-".concat(n.alignContent),n.alignContent),e)),S.set(c,f)}(),e(n.tag,Object(l.a)(data,{staticClass:"row",class:f}),o)}})},498:function(e,t,n){"use strict";n(8),n(11),n(13),n(14);var r=n(1),o=(n(17),n(12),n(59),n(481),n(37),n(22),n(32),n(28),n(63),n(280),n(2)),l=n(62),c=n(0);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=["sm","md","lg","xl"],h=v.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),m=v.reduce((function(e,t){return e["offset"+Object(c.A)(t)]={type:[String,Number],default:null},e}),{}),_=v.reduce((function(e,t){return e["order"+Object(c.A)(t)]={type:[String,Number],default:null},e}),{}),y={col:Object.keys(h),offset:Object.keys(m),order:Object.keys(_)};function x(e,t,n){var r=e;if(null!=n&&!1!==n){if(t){var o=t.replace(e,"");r+="-".concat(o)}return"col"!==e||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var k=new Map;t.a=o.a.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},_),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var n=t.props,data=t.data,o=t.children,c=(t.parent,"");for(var d in n)c+=String(n[d]);var f=k.get(c);return f||function(){var e,t;for(t in f=[],y)y[t].forEach((function(e){var r=n[e],o=x(t,e,r);o&&f.push(o)}));var o=f.some((function(e){return e.startsWith("col-")}));f.push((e={col:!o||!n.cols},Object(r.a)(e,"col-".concat(n.cols),n.cols),Object(r.a)(e,"offset-".concat(n.offset),n.offset),Object(r.a)(e,"order-".concat(n.order),n.order),Object(r.a)(e,"align-self-".concat(n.alignSelf),n.alignSelf),e)),k.set(c,f)}(),e(n.tag,Object(l.a)(data,{class:f}),o)}})},507:function(e,t,n){var content=n(519);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("df652c76",content,!0,{sourceMap:!1})},508:function(e,t,n){var content=n(521);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("8b63a4be",content,!0,{sourceMap:!1})},515:function(e,t,n){"use strict";n(12),n(8),n(11),n(13),n(14);var r=n(47),o=n(1),l=n(16),c=(n(17),n(28),n(44),n(23),n(30),n(487),n(459)),d=n(511),f=n(0),v=n(7),h=n(62);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function _(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=c.a.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(e){return"boolean"==typeof e||[1e3,1024].includes(e)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(e){return Object(f.B)(e).every((function(e){return null!=e&&"object"===Object(l.a)(e)}))}}},computed:{classes:function(){return _(_({},c.a.options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var e=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,e);var t=this.internalArrayValue.reduce((function(e,t){var n=t.size;return e+(void 0===n?0:n)}),0);return this.$vuetify.lang.t(this.counterSizeString,e,Object(f.s)(t,1024===this.base))},internalArrayValue:function(){return Object(f.B)(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(e){this.lazyValue=e,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},text:function(){var e=this;return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(t){var n=t.name,r=void 0===n?"":n,o=t.size,l=void 0===o?0:o,c=e.truncateText(r);return e.showSize?"".concat(c," (").concat(Object(f.s)(l,1024===e.base),")"):c})):[this.placeholder]},base:function(){return"boolean"!=typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(e){!0===e&&Object(v.b)("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(e){var t=this.multiple?e:e?[e]:[];Object(f.j)(t,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips:function(){var e=this;return this.isDirty?this.text.map((function(text,t){return e.$createElement(d.a,{props:{small:e.smallChips},on:{"click:close":function(){var n=e.internalValue;n.splice(t,1),e.internalValue=n}}},[text])})):[]},genControl:function(){var e=c.a.options.methods.genControl.call(this);return this.hideInput&&(e.data.style=Object(h.c)(e.data.style,{display:"none"})),e},genInput:function(){var input=c.a.options.methods.genInput.call(this);return input.data.attrs.multiple=this.multiple,delete input.data.domProps.value,delete input.data.on.input,input.data.on.change=this.onInput,[this.genSelections(),input]},genPrependSlot:function(){var e=this;if(!this.prependIcon)return null;var t=this.genIcon("prepend",(function(){e.$refs.input.click()}));return this.genSlot("prepend","outer",[t])},genSelectionText:function(){var e=this.text.length;return e<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,e)]},genSelections:function(){var e=this,t=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(n,r){e.$scopedSlots.selection&&t.push(e.$scopedSlots.selection({text:e.text[r],file:n,index:r}))})):t.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},t)},genTextFieldSlot:function(){var e=this,t=c.a.options.methods.genTextFieldSlot.call(this);return t.data.on=_(_({},t.data.on||{}),{},{click:function(){return e.$refs.input.click()}}),t},onInput:function(e){var t=Object(r.a)(e.target.files||[]);this.internalValue=this.multiple?t:t[0],this.initialValue=this.internalValue},onKeyDown:function(e){this.$emit("keydown",e)},truncateText:function(e){if(e.length<Number(this.truncateLength))return e;var t=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(e.slice(0,t),"…").concat(e.slice(e.length-t))}}})},518:function(e,t,n){"use strict";n(507)},519:function(e,t,n){var r=n(9)(!1);r.push([e.i,".video__box[data-v-554fe6bd]{max-width:920px}.video__player[data-v-554fe6bd]{width:100%}",""]),e.exports=r},520:function(e,t,n){"use strict";n(508)},521:function(e,t,n){var r=n(9)(!1);r.push([e.i,"[data-v-399d6fd4] .v-overlay__content{width:100%!important}.progress__box[data-v-399d6fd4]{width:100%}",""]),e.exports=r},523:function(e,t,n){"use strict";var r={props:{url:{type:String,default:""}},data:function(){return{video:"",tracks:[],videoTrack:"",reload:!1}},created:function(){var e=this;this.videoTrack="https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/tracks/".concat(encodeURI(this.$store.state.videoes.fileName),".vtt"),this.$nuxt.$on("newTracks",(function(t){var n="ko";if("영어"===t?n="ko":"중국어(간체)"===t?n="zh":"일본어"===t&&(n="ja"),0===e.video.textTracks.length){e.videoTrack="https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/tracks/".concat(encodeURI(e.$store.state.videoes.fileName),".vtt");var track=document.createElement("track");track.kind="subtitles",track.srclang=n,track.label=t,track.src=e.videoTrack,e.video.appendChild(track),e.video.load()}else{var r=document.querySelector("track");r.parentNode.removeChild(r),e.videoTrack="https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/tracks/".concat(encodeURI(e.$store.state.videoes.fileName),".vtt");var o=document.createElement("track");o.kind="subtitles",o.srclang=n,o.label=t,o.src=e.videoTrack,e.video.appendChild(o),e.video.load()}})),this.$nuxt.$on("transTracks",(function(t){var n="ko";if("영어"===t?n="ko":"중국어(간체)"===t?n="zh":"일본어"===t&&(n="ja"),0===e.video.textTracks.length){e.videoTrack="https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/tracks/".concat(encodeURI(e.$store.state.videoes.fileName),".vtt");var track=document.createElement("track");track.kind="subtitles",track.srclang=n,track.label=t,track.src=e.videoTrack,e.video.appendChild(track),e.video.load()}else{var r=document.querySelector("track");r.parentNode.removeChild(r),e.videoTrack="https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/tracks/".concat(encodeURI(e.$store.state.videoes.fileName),".vtt");var o=document.createElement("track");o.kind="subtitles",o.srclang=n,o.label=t,o.src=e.videoTrack,e.video.appendChild(o),e.video.load()}}))},mounted:function(){this.video=document.querySelector("video"),this.tracks=this.video.textTracks},methods:{}},o=(n(518),n(18)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"video__box"},[n("video",{ref:"player",staticClass:"video__player",attrs:{id:"myVideo",controls:"",preload:"auto",src:e.url,crossorigin:"use-credentials"}})])}),[],!1,null,"554fe6bd",null);t.a=component.exports},524:function(e,t,n){"use strict";var r=n(185),o=n(194),l={data:function(){return{loading:!1}},computed:{percentage:function(){return this.$store.state.manager.loading>=100&&(this.loading=!1,this.$store.commit("manager/setUploadLoading",0)),this.$store.state.manager.loading}},created:function(){var e=this;this.$store.subscribe((function(t,n){"manager/startLoading"===t.type&&(e.loading=!0),"manager/endLoading"===t.type&&(e.loading=!1)}))},methods:{start:function(){},finish:function(){}}},c=(n(520),n(18)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(r.a,{attrs:{value:e.loading,"z-index":"10000"}},[n("div",{staticClass:"progress__box"},[n(o.a,{attrs:{color:"cyan",height:"25"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.value;return[n("strong",[e._v(e._s(Math.ceil(r))+" %")])]}}]),model:{value:e.percentage,callback:function(t){e.percentage=t},expression:"percentage"}})],1)])}),[],!1,null,"399d6fd4",null);t.a=component.exports},545:function(e,t,n){var content=n(625);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("170e7f11",content,!0,{sourceMap:!1})},624:function(e,t,n){"use strict";n(545)},625:function(e,t,n){var r=n(9)(!1);r.push([e.i,".video__box[data-v-511aec50]{overflow:scroll;height:calc(100% - 12px)}.video__box[data-v-511aec50]::-webkit-scrollbar{display:block;width:10px;height:8px}.video__box[data-v-511aec50]::-webkit-scrollbar-track{background-color:transparent}.video__box[data-v-511aec50]::-webkit-scrollbar-thumb{border-radius:5px;background:#2172ff}.video__player[data-v-511aec50]{width:auto;height:50%;min-height:625px;border:1px solid red}.video__player__grid[data-v-511aec50]{height:100%;min-height:625}.video__player__box[data-v-511aec50],.video__player__meta[data-v-511aec50]{display:flex;align-items:center;justify-content:center;margin:25px 15px}.video__player__meta[data-v-511aec50],.video__translator[data-v-511aec50]{flex-direction:column}.video__translator[data-v-511aec50]{display:flex;min-height:calc(50% - 128px);border:1px solid red}.video__translator__title[data-v-511aec50]{display:flex;align-items:center;margin:15px;padding:0 15px}.video__translator__wrapper[data-v-511aec50]{display:flex;justify-content:space-around}.video__translator__content[data-v-511aec50]{min-height:30vh;width:35vw;display:flex;flex-direction:column;margin:0 15px 15px;padding:15px;border:1px solid red;white-space:pre-wrap}.video__translator__btngroup[data-v-511aec50]{display:flex}.video__translator__btn[data-v-511aec50]{margin:5px}.video__uploadFile[data-v-511aec50]{width:100%;padding:0 50px}.video[data-v-511aec50]{padding:25px}.lang__select[data-v-511aec50]{width:50px}",""]),e.exports=r},659:function(e,t,n){"use strict";n.r(t);var r=n(463),o=n(498),l=n(515),c=n(189),d=n(497),f=n(662),v=n(472),h=n(6),m=(n(45),n(50),n(28),n(23),n(523)),_=n(52),y=n(524),x=n(118),k=n.n(x),w={layout:"RTtrackLayout",components:{VideoComponent:m.a,SnackBar:_.a,LoadingLinear:y.a},data:function(){return{isDev:"production".includes("dev"),modes:["vtt","srt"],mode:"vtt",readToVideo:!1,readyToTrack:!1,track:"",transTrack:"",trackArray:[],timeLine:[],req_lang:"한국어",grant_lang:"중국어(간체)",req_code:"ko",grant_code:"zh-CN"}},created:function(){var e=this;this.$nuxt.$on("onTrackVideoEvent",function(){var t=Object(h.a)(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$store.commit("videoes/setFileURL","https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/videoes/".concat(encodeURI(n))),console.time("Recognition Time"),e.$nuxt.$loading.start(),t.next=5,e.$store.dispatch("videoes/postVideo",e.mode);case 5:r=t.sent,e.$nuxt.$loading.finish(),console.timeEnd("Recognition Time"),e.track=r.track,e.trackArray=r.segment,e.timeLine=r.timeline,e.readToVideo=!0,e.readyToTrack=!0;case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),this.$nuxt.$on("onScrollTop",(function(){e.$refs.rtvideobox.scrollBy({top:-e.$refs.rtvideobox.scrollTop,behavior:"smooth"})}))},computed:{language:function(){return this.$store.state.manager.language},languages:function(){return this.$LANGUAGES_KO},fileURL:function(){return this.$store.state.videoes.fileURL},fileName:function(){return this.$store.state.videoes.fileName}},watch:{req_lang:function(e){this.req_code="한국어"===this.language?this.$LANG_CODE[this.$LANGUAGES_KO.indexOf(e)]:this.$LANG_CODE[this.$LANGUAGES_EN.indexOf(e)]},grant_lang:function(e){this.grant_code="한국어"===this.language?this.$LANG_CODE[this.$LANGUAGES_KO.indexOf(e)]:this.$LANG_CODE[this.$LANGUAGES_EN.indexOf(e)]}},methods:{extToContentType:function(e){switch(e){case"mp4":return"video/mp4";case"webm":return"video/webm";case"ogg":case"ogv":case"ogm":return"video/ogg";default:return"application/oct-stream"}},onChange:function(e){var t=this;return Object(h.a)(regeneratorRuntime.mark((function n(){var r,o,l,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.transTrack="",r=new FormData,null==e){n.next=32;break}return n.prev=3,o=e.name.substring(e.name.lastIndexOf(".")+1),l=e.name.substring(0,e.name.lastIndexOf(".")),t.$store.commit("videoes/setFileName",l),t.$store.commit("videoes/setFileExt",o),r.append("fileKey",e),t.$nuxt.$loading.start(),n.next=12,t.$store.dispatch("videoes/signedURL",r);case 12:return c=n.sent,t.$nuxt.$loading.finish(),n.next=16,k()({method:"put",url:c,data:e,headers:{"Content-Type":t.extToContentType(o)},onUploadProgress:function(e){var n=100*e.loaded/e.total,r=Math.round(n);t.$manage.startLoading(),t.$store.commit("manager/setUploadLoading",r)}});case 16:if(200!==n.sent.status){n.next=21;break}t.$store.dispatch("videoes/setURL").then(Object(h.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.time("Recognition Time"),t.$nuxt.$loading.start(),e.next=4,t.$store.dispatch("videoes/postVideo",t.mode);case 4:n=e.sent,t.$nuxt.$loading.finish(),console.timeEnd("Recognition Time"),t.track=n.track,t.trackArray=n.segment,t.timeLine=n.timeline,t.readToVideo=!0,t.readyToTrack=!0,t.$store.dispatch("videoes/getFiles");case 13:case"end":return e.stop()}}),e)})))),n.next=24;break;case 21:return t.$menage.showMessage,console.log("Upload Error"),n.abrupt("return");case 24:n.next=30;break;case 26:n.prev=26,n.t0=n.catch(3),t.$nuxt.$loading.finish(),console.log(n.t0);case 30:n.next=33;break;case 32:console.log("e is null");case 33:case"end":return n.stop()}}),n,null,[[3,26]])})))()},downloadSRT:function(){var e=this;return Object(h.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("videoes/textToTrack",{track:e.track,ext:e.mode});case 3:e.$refs.download.$el.click(),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},translation:function(){var e=this;return Object(h.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.$nuxt.$loading.start(),t.next=4,e.$store.dispatch("videoes/textToTrans",{from:e.req_code,to:e.grant_code,track:e.trackArray,timeline:e.timeLine,mode:e.mode});case 4:n=t.sent,e.$nuxt.$loading.finish(),e.transTrack=n,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},onEmptyFile:function(){this.readToVideo=!1,this.readyToTrack=!1,this.track="",this.transTrack="",this.trackArray=[],this.timeLine=[]},onClearFile:function(){var e=this;return Object(h.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("videoes/deleteFile");case 2:"삭제 성공"===t.sent?e.$manage.showMessage({message:"삭제 성공",color:"success"}):e.$manage.showMessage({message:"삭제 실패",color:"error"}),e.$store.commit("videoes/setFileURL",""),e.readToVideo=!1,e.readyToTrack=!1,e.track="",e.transTrack="",e.trackArray=[],e.timeLine=[];case 11:case"end":return t.stop()}}),t)})))()}}},O=w,$=(n(624),n(18)),component=Object($.a)(O,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"rtvideobox",staticClass:"video__box"},[n("div",[n(l.a,{ref:"fileupload",attrs:{label:"업로드 영상"},on:{change:function(t){return e.onChange(t)}}})],1),e._v(" "),n("div",{staticClass:"video__player"},[n(d.a,{staticClass:"video__player__grid",attrs:{"no-gutters":""}},[n(o.a,{staticClass:"video__player__box",attrs:{cols:"8"}},[0!=this.readToVideo?n("div",{staticClass:"video"},[n("video-component",{attrs:{url:this.fileURL}})],1):n("div",[e._v("\n                    비어있음\n                ")])]),e._v(" "),n(o.a,{staticClass:"video__player__meta"},[n(r.a,{attrs:{color:"warning",elevation:"0",block:"",disabled:!this.readToVideo},on:{click:e.onEmptyFile}},[n(c.a,[e._v("\n                        mdi-trash-can\n                    ")]),e._v("\n                    영상 비우기\n                ")],1),e._v(" "),n(r.a,{attrs:{color:"error",elevation:"0",block:"",disabled:!this.readToVideo},on:{click:e.onClearFile}},[n(c.a,[e._v("\n                        mdi-close\n                    ")]),e._v("\n                    영상 삭제\n                ")],1)],1)],1)],1),e._v(" "),n("div",{staticClass:"video__translator"},[n("div",{staticClass:"video__translator__title"},[n("h1",[e._v("자막")]),e._v(" "),n(v.a),e._v(" "),n(f.a,{attrs:{items:e.modes,filled:"",dense:"","hide-details":"","hide-spin-buttons":"",disabled:e.readToVideo},model:{value:e.mode,callback:function(t){e.mode=t},expression:"mode"}}),e._v(" "),n(v.a),e._v(" "),n("client-only",[n(f.a,{staticClass:"lang__select",attrs:{items:e.languages,disabled:!this.readyToTrack},model:{value:e.req_lang,callback:function(t){e.req_lang=t},expression:"req_lang"}}),e._v(" "),n(f.a,{staticClass:"lang__select",attrs:{items:e.languages,disabled:!this.readyToTrack},model:{value:e.grant_lang,callback:function(t){e.grant_lang=t},expression:"grant_lang"}})],1),e._v(" "),n(v.a),e._v(" "),n("div",{staticClass:"video__translator__btngroup"},[n(r.a,{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"download",attrs:{href:(e.isDev?"http://localhost:3085":"https://api.dmtlabs.kr")+"/video/download/"+this.fileName+"."+this.mode}}),e._v(" "),n(r.a,{staticClass:"video__translator__btn",attrs:{color:"#013183",depressed:"",tile:"",dark:"",disabled:!this.readToVideo},on:{click:e.downloadSRT}},[e._v("다운로드")]),e._v(" "),n(r.a,{staticClass:"video__translator__btn",attrs:{color:"#013183",depressed:"",tile:"",dark:"",disabled:!this.readToVideo},on:{click:e.translation}},[e._v("번역하기")])],1)],1),e._v(" "),n("div",{staticClass:"video__translator__wrapper"},[n("div",{staticClass:"video__translator__content",domProps:{innerHTML:e._s(this.track)}}),e._v(" "),n("div",{staticClass:"video__translator__content",domProps:{innerHTML:e._s(this.transTrack)}})])]),e._v(" "),n("snack-bar"),e._v(" "),n("loading-linear")],1)}),[],!1,null,"511aec50",null);t.default=component.exports}}]);