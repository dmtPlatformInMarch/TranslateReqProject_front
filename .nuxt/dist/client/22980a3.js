(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{456:function(e,t,n){"use strict";var r=n(457);t.a=r.a},486:function(e,t,n){var content=n(487);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("83ff91dc",content,!0,{sourceMap:!1})},487:function(e,t,n){var r=n(9)(!1);r.push([e.i,".theme--light.v-file-input .v-file-input__text{color:rgba(0,0,0,.87)}.theme--light.v-file-input .v-file-input__text--placeholder{color:rgba(0,0,0,.6)}.theme--light.v-file-input.v-input--is-disabled .v-file-input__text,.theme--light.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-file-input .v-file-input__text{color:#fff}.theme--dark.v-file-input .v-file-input__text--placeholder{color:hsla(0,0%,100%,.7)}.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text,.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:hsla(0,0%,100%,.5)}.v-file-input input[type=file]{left:0;opacity:0;pointer-events:none;position:absolute;max-width:0;width:0}.v-file-input .v-file-input__text{align-items:center;align-self:stretch;display:flex;flex-wrap:wrap;width:100%}.v-file-input .v-file-input__text.v-file-input__text--chips{flex-wrap:wrap}.v-file-input .v-file-input__text .v-chip{margin:4px}.v-file-input .v-text-field__slot{min-height:32px}.v-file-input.v-input--dense .v-text-field__slot{min-height:26px}.v-file-input.v-text-field--filled:not(.v-text-field--single-line) .v-file-input__text{padding-top:22px}.v-file-input.v-text-field--outlined .v-text-field__slot{padding:6px 0}.v-file-input.v-text-field--outlined.v-input--dense .v-text-field__slot{padding:3px 0}",""]),e.exports=r},488:function(e,t,n){"use strict";var r=n(1),o=(n(49),n(28),n(12),n(59),n(478),n(37),n(22),n(32),n(8),n(11),n(13),n(14),n(277),n(2)),l=n(62),c=n(0);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=["sm","md","lg","xl"],h=["start","end","center"];function m(e,t){return v.reduce((function(n,r){return n[e+Object(c.A)(r)]=t(),n}),{})}var _=function(e){return[].concat(h,["baseline","stretch"]).includes(e)},y=m("align",(function(){return{type:String,default:null,validator:_}})),x=function(e){return[].concat(h,["space-between","space-around"]).includes(e)},w=m("justify",(function(){return{type:String,default:null,validator:x}})),O=function(e){return[].concat(h,["space-between","space-around","stretch"]).includes(e)},j=m("alignContent",(function(){return{type:String,default:null,validator:O}})),k={align:Object.keys(y),justify:Object.keys(w),alignContent:Object.keys(j)},$={align:"align",justify:"justify",alignContent:"align-content"};function S(e,t,n){var r=$[e];if(null!=n){if(t){var o=t.replace(e,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var C=new Map;t.a=o.a.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:_}},y),{},{justify:{type:String,default:null,validator:x}},w),{},{alignContent:{type:String,default:null,validator:O}},j),render:function(e,t){var n=t.props,data=t.data,o=t.children,c="";for(var d in n)c+=String(n[d]);var f=C.get(c);return f||function(){var e,t;for(t in f=[],k)k[t].forEach((function(e){var r=n[e],o=S(t,e,r);o&&f.push(o)}));f.push((e={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(e,"align-".concat(n.align),n.align),Object(r.a)(e,"justify-".concat(n.justify),n.justify),Object(r.a)(e,"align-content-".concat(n.alignContent),n.alignContent),e)),C.set(c,f)}(),e(n.tag,Object(l.a)(data,{staticClass:"row",class:f}),o)}})},489:function(e,t,n){"use strict";n(8),n(11),n(13),n(14);var r=n(1),o=(n(17),n(12),n(59),n(478),n(37),n(22),n(32),n(28),n(63),n(277),n(2)),l=n(62),c=n(0);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=["sm","md","lg","xl"],h=v.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),m=v.reduce((function(e,t){return e["offset"+Object(c.A)(t)]={type:[String,Number],default:null},e}),{}),_=v.reduce((function(e,t){return e["order"+Object(c.A)(t)]={type:[String,Number],default:null},e}),{}),y={col:Object.keys(h),offset:Object.keys(m),order:Object.keys(_)};function x(e,t,n){var r=e;if(null!=n&&!1!==n){if(t){var o=t.replace(e,"");r+="-".concat(o)}return"col"!==e||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var w=new Map;t.a=o.a.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},_),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var n=t.props,data=t.data,o=t.children,c=(t.parent,"");for(var d in n)c+=String(n[d]);var f=w.get(c);return f||function(){var e,t;for(t in f=[],y)y[t].forEach((function(e){var r=n[e],o=x(t,e,r);o&&f.push(o)}));var o=f.some((function(e){return e.startsWith("col-")}));f.push((e={col:!o||!n.cols},Object(r.a)(e,"col-".concat(n.cols),n.cols),Object(r.a)(e,"offset-".concat(n.offset),n.offset),Object(r.a)(e,"order-".concat(n.order),n.order),Object(r.a)(e,"align-self-".concat(n.alignSelf),n.alignSelf),e)),w.set(c,f)}(),e(n.tag,Object(l.a)(data,{class:f}),o)}})},497:function(e,t,n){var content=n(506);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("f81bac7a",content,!0,{sourceMap:!1})},502:function(e,t,n){"use strict";n(12),n(8),n(11),n(13),n(14);var r=n(46),o=n(1),l=n(16),c=(n(17),n(28),n(50),n(23),n(30),n(486),n(456)),d=n(491),f=n(0),v=n(7),h=n(62);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function _(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=c.a.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(e){return"boolean"==typeof e||[1e3,1024].includes(e)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(e){return Object(f.B)(e).every((function(e){return null!=e&&"object"===Object(l.a)(e)}))}}},computed:{classes:function(){return _(_({},c.a.options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var e=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,e);var t=this.internalArrayValue.reduce((function(e,t){var n=t.size;return e+(void 0===n?0:n)}),0);return this.$vuetify.lang.t(this.counterSizeString,e,Object(f.s)(t,1024===this.base))},internalArrayValue:function(){return Object(f.B)(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(e){this.lazyValue=e,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},text:function(){var e=this;return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(t){var n=t.name,r=void 0===n?"":n,o=t.size,l=void 0===o?0:o,c=e.truncateText(r);return e.showSize?"".concat(c," (").concat(Object(f.s)(l,1024===e.base),")"):c})):[this.placeholder]},base:function(){return"boolean"!=typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(e){!0===e&&Object(v.b)("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(e){var t=this.multiple?e:e?[e]:[];Object(f.j)(t,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips:function(){var e=this;return this.isDirty?this.text.map((function(text,t){return e.$createElement(d.a,{props:{small:e.smallChips},on:{"click:close":function(){var n=e.internalValue;n.splice(t,1),e.internalValue=n}}},[text])})):[]},genControl:function(){var e=c.a.options.methods.genControl.call(this);return this.hideInput&&(e.data.style=Object(h.c)(e.data.style,{display:"none"})),e},genInput:function(){var input=c.a.options.methods.genInput.call(this);return input.data.attrs.multiple=this.multiple,delete input.data.domProps.value,delete input.data.on.input,input.data.on.change=this.onInput,[this.genSelections(),input]},genPrependSlot:function(){var e=this;if(!this.prependIcon)return null;var t=this.genIcon("prepend",(function(){e.$refs.input.click()}));return this.genSlot("prepend","outer",[t])},genSelectionText:function(){var e=this.text.length;return e<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,e)]},genSelections:function(){var e=this,t=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(n,r){e.$scopedSlots.selection&&t.push(e.$scopedSlots.selection({text:e.text[r],file:n,index:r}))})):t.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},t)},genTextFieldSlot:function(){var e=this,t=c.a.options.methods.genTextFieldSlot.call(this);return t.data.on=_(_({},t.data.on||{}),{},{click:function(){return e.$refs.input.click()}}),t},onInput:function(e){var t=Object(r.a)(e.target.files||[]);this.internalValue=this.multiple?t:t[0],this.initialValue=this.internalValue},onKeyDown:function(e){this.$emit("keydown",e)},truncateText:function(e){if(e.length<Number(this.truncateLength))return e;var t=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(e.slice(0,t),"…").concat(e.slice(e.length-t))}}})},505:function(e,t,n){"use strict";n(497)},506:function(e,t,n){var r=n(9)(!1);r.push([e.i,".video__box[data-v-1d8c3e2e]{max-width:920px}.video__player[data-v-1d8c3e2e]{width:100%}",""]),e.exports=r},508:function(e,t,n){"use strict";var r=n(6),o=(n(44),{props:{url:{type:String,default:""}},data:function(){return{video:"",tracks:[],videoTrack:"",reload:!1}},created:function(){var e=this;this.videoTrack="https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/tracks/".concat(encodeURI(this.$store.state.videoes.fileName),".vtt"),this.$nuxt.$on("newTracks",Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.videoTrack="/",setTimeout((function(){e.videoTrack="https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/tracks/".concat(encodeURI(e.$store.state.videoes.fileName),".vtt")}),500);case 2:case"end":return t.stop()}}),t)}))))},mounted:function(){this.video=document.querySelector("video"),this.tracks=this.video.textTracks},methods:{}}),l=(n(505),n(18)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"video__box"},[n("video",{staticClass:"video__player",attrs:{controls:"",preload:"auto",src:e.url,crossorigin:"use-credentials"}},[n("track",{attrs:{kind:"subtitles",src:e.videoTrack,srclang:"en",label:"자막"}})])])}),[],!1,null,"1d8c3e2e",null);t.a=component.exports},526:function(e,t,n){var content=n(596);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("f47b2f9a",content,!0,{sourceMap:!1})},595:function(e,t,n){"use strict";n(526)},596:function(e,t,n){var r=n(9)(!1);r.push([e.i,".video__box[data-v-11c8bb0b]{overflow:scroll;height:calc(100% - 12px)}.video__box[data-v-11c8bb0b]::-webkit-scrollbar{display:block;width:10px;height:8px}.video__box[data-v-11c8bb0b]::-webkit-scrollbar-track{background-color:transparent}.video__box[data-v-11c8bb0b]::-webkit-scrollbar-thumb{border-radius:5px;background:#2172ff}.video__player[data-v-11c8bb0b]{width:auto;height:50%;min-height:500px;border:1px solid red}.video__player__grid[data-v-11c8bb0b]{height:100%;min-height:500px}.video__player__box[data-v-11c8bb0b],.video__player__meta[data-v-11c8bb0b]{display:flex;align-items:center;justify-content:center;margin:25px 15px}.video__player__meta[data-v-11c8bb0b],.video__translator[data-v-11c8bb0b]{flex-direction:column}.video__translator[data-v-11c8bb0b]{display:flex;min-height:calc(50% - 128px);border:1px solid red}.video__translator__title[data-v-11c8bb0b]{display:flex;align-items:center;margin:15px;padding:0 15px}.video__translator__content[data-v-11c8bb0b]{min-height:30vh;display:flex;flex-direction:column;margin:0 15px 15px;border:1px solid red;white-space:pre-wrap}.video__uploadFile[data-v-11c8bb0b]{width:100%;padding:0 50px}.video[data-v-11c8bb0b]{padding:25px}",""]),e.exports=r},626:function(e,t,n){"use strict";n.r(t);var r=n(460),o=n(489),l=n(502),c=n(189),d=n(488),f=n(629),v=n(469),h=n(6),m=(n(44),n(49),n(28),n(23),n(508)),_=n(52),y={layout:"RTtrackLayout",components:{VideoComponent:m.a,SnackBar:_.a},data:function(){return{isDev:"production".includes("dev"),modes:["vtt","srt"],mode:"vtt",readToVideo:!1,track:""}},created:function(){var e=this;this.$nuxt.$on("onTrackVideoEvent",function(){var t=Object(h.a)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$store.commit("videoes/setFileURL","https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/videoes/".concat(encodeURI(n))),e.$nuxt.$loading.start(),t.next=4,e.$store.dispatch("videoes/postVideo",e.mode);case 4:e.track=t.sent,e.$nuxt.$loading.finish(),e.readToVideo=!0;case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),this.$nuxt.$on("onScrollTop",(function(){e.$refs.rtvideobox.scrollBy({top:-e.$refs.rtvideobox.scrollTop,behavior:"smooth"})}))},computed:{language:function(){return this.$store.state.manager.language},fileURL:function(){return this.$store.state.videoes.fileURL},fileName:function(){return this.$store.state.videoes.fileName}},methods:{extToContentType:function(e){switch(e){case"mp4":return"video/mp4";case"webm":return"video/webm";case"ogg":case"ogv":case"ogm":return"video/ogg";default:return"application/oct-stream"}},onChange:function(e){var t=this;return Object(h.a)(regeneratorRuntime.mark((function n(){var r,o,l,c,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=new FormData,null==e){n.next=34;break}return n.prev=2,o=e.name.substring(e.name.lastIndexOf(".")+1),l=e.name.substring(0,e.name.lastIndexOf(".")),t.$store.commit("videoes/setFileName",l),t.$store.commit("videoes/setFileExt",o),r.append("fileKey",e),t.$nuxt.$loading.start(),n.next=11,t.$store.dispatch("videoes/signedURL",r);case 11:return c=n.sent,t.$nuxt.$loading.finish(),t.$nuxt.$loading.start(),n.next=16,fetch(new Request(c,{method:"PUT",headers:{"Content-Type":t.extToContentType(o)},body:e}));case 16:if(d=n.sent,t.$nuxt.$loading.finish(),200!==d.status){n.next=23;break}t.$store.dispatch("videoes/setURL").then(Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$nuxt.$loading.start(),e.next=3,t.$store.dispatch("videoes/postVideo",t.mode);case 3:t.track=e.sent,t.$nuxt.$loading.finish(),t.readToVideo=!0,t.$store.dispatch("videoes/getFiles");case 7:case"end":return e.stop()}}),e)})))),console.log("Upload Success"),n.next=26;break;case 23:return t.$menage.showMessage,console.log("Upload Error"),n.abrupt("return");case 26:n.next=32;break;case 28:n.prev=28,n.t0=n.catch(2),t.$nuxt.$loading.finish(),console.log(n.t0);case 32:n.next=35;break;case 34:console.log("e is null");case 35:case"end":return n.stop()}}),n,null,[[2,28]])})))()},downloadSRT:function(){var e=this;return Object(h.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("videoes/textToTrack",{track:e.track,ext:e.mode});case 3:e.$refs.download.$el.click(),t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))()},onEmptyFile:function(){this.readToVideo=!this.readToVideo,this.track=""},onClearFile:function(){this.$store.dispatch("videoes/deleteFile"),this.$store.commit("videoes/setFileURL",""),this.readToVideo=!1,this.track=""}}},x=y,w=(n(595),n(18)),component=Object(w.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"rtvideobox",staticClass:"video__box"},[n("div",[n(l.a,{ref:"fileupload",attrs:{label:"업로드 영상"},on:{change:function(t){return e.onChange(t)}}})],1),e._v(" "),n("div",{staticClass:"video__player"},[n(d.a,{staticClass:"video__player__grid",attrs:{"no-gutters":""}},[n(o.a,{staticClass:"video__player__box",attrs:{cols:"8"}},[0!=this.readToVideo?n("div",{staticClass:"video"},[n("video-component",{attrs:{url:this.fileURL}})],1):n("div",[e._v("\n                    비어있음\n                ")])]),e._v(" "),n(o.a,{staticClass:"video__player__meta"},[n(r.a,{attrs:{color:"warning",elevation:"0",block:"",disabled:!this.readToVideo},on:{click:e.onEmptyFile}},[n(c.a,[e._v("\n                        mdi-trash-can\n                    ")]),e._v("\n                    영상 비우기\n                ")],1),e._v(" "),n(r.a,{attrs:{color:"error",elevation:"0",block:"",disabled:!this.readToVideo},on:{click:e.onClearFile}},[n(c.a,[e._v("\n                        mdi-close\n                    ")]),e._v("\n                    영상 삭제\n                ")],1)],1)],1)],1),e._v(" "),n("div",{staticClass:"video__translator"},[n("div",{staticClass:"video__translator__title"},[n("h1",[e._v("자막")]),e._v(" "),n(v.a),e._v(" "),n(f.a,{attrs:{items:e.modes,filled:"",dense:"","hide-details":"","hide-spin-buttons":"",disabled:e.readToVideo},model:{value:e.mode,callback:function(t){e.mode=t},expression:"mode"}}),e._v(" "),n(v.a),e._v(" "),n(r.a,{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"download",attrs:{href:(e.isDev?"http://localhost:3085":"https://api.dmtlabs.kr")+"/video/download/"+this.fileName+".srt"}}),e._v(" "),n(r.a,{attrs:{color:"#013183",depressed:"",tile:"",dark:""},on:{click:e.downloadSRT}},[e._v("다운로드")])],1),e._v(" "),n("div",{staticClass:"video__translator__content",domProps:{innerHTML:e._s(this.track)}})]),e._v(" "),n("snack-bar")],1)}),[],!1,null,"11c8bb0b",null);t.default=component.exports}}]);