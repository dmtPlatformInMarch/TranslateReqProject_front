(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{514:function(e,t,o){var content=o(581);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(10).default)("0280c2d8",content,!0,{sourceMap:!1})},515:function(e,t,o){var content=o(583);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(10).default)("ca5cc858",content,!0,{sourceMap:!1})},580:function(e,t,o){"use strict";o(514)},581:function(e,t,o){var n=o(9)(!1);n.push([e.i,".video__box[data-v-7186ef50]{max-width:920px}.video__player[data-v-7186ef50]{width:100%}",""]),e.exports=n},582:function(e,t,o){"use strict";o(515)},583:function(e,t,o){var n=o(9)(!1);n.push([e.i,".video__box[data-v-be796ef0]{height:100%}.video__player[data-v-be796ef0]{width:auto;height:50%;border:1px solid red}.video__player__grid[data-v-be796ef0]{height:100%}.video__player__box[data-v-be796ef0],.video__player__meta[data-v-be796ef0]{display:flex;align-items:center;justify-content:center;border:1px solid red;margin:25px 15px}.video__translator[data-v-be796ef0]{display:flex;flex-direction:column;height:50%;border:1px solid red}.video__translator__title[data-v-be796ef0]{margin:15px;padding:0 15px}.video__translator__content[data-v-be796ef0]{width:auto;height:100%;margin:0 15px 15px;border:1px solid red}.video__uploadFile[data-v-be796ef0]{width:100%;padding:0 50px}.video[data-v-be796ef0]{border:1px solid #00f;padding:25px}",""]),e.exports=n},604:function(e,t,o){"use strict";o.r(t);var n=o(6),r=(o(44),o(23),{props:{url:{type:String,default:""}},data:function(){return{video:"",tracks:[]}},mounted:function(){this.video=document.querySelector("video"),console.log("비디오 : ",this.video),this.tracks=this.video.textTracks,console.log("트랙 : ",this.tracks)},methods:{}}),d=(o(580),o(22)),l={layout:"VideoLayout",components:{VideoComponent:Object(d.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"video__box"},[o("video",{staticClass:"video__player",attrs:{controls:"",preload:"auto",src:e.url}})])}),[],!1,null,"7186ef50",null).exports},data:function(){return{readToVideo:!1,viewData:""}},created:function(){var e=this;this.$nuxt.$on("onVideoEvent",(function(t){e.readToVideo=!0,e.$store.commit("videoes/setFileURL","https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/videoes/".concat(encodeURI(t)))}))},computed:{language:function(){return this.$store.state.manager.language},fileURL:function(){return this.$store.state.videoes.fileURL}},methods:{extToContentType:function(e){switch(e){case"mp4":return"video/mp4";case"webm":return"video/webm";case"ogg":case"ogv":case"ogm":return"video/ogg";default:return"application/oct-stream"}},onChange:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var n,r,d,l;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(n=new FormData,null==e){o.next=27;break}return o.prev=2,r=e.name.substring(e.name.lastIndexOf(".")+1),n.append("fileKey",e),o.next=7,t.$store.dispatch("videoes/signedURL",n);case 7:return d=o.sent,t.$nuxt.$loading.start(),o.next=11,fetch(new Request(d,{method:"PUT",headers:{"Content-Type":t.extToContentType(r)},body:e}));case 11:if(l=o.sent,t.$nuxt.$loading.finish(),200!==l.status){o.next=18;break}t.$store.dispatch("videoes/setURL").then((function(){t.readToVideo=!0,t.$store.dispatch("videoes/getFiles")})),console.log("Upload Success"),o.next=20;break;case 18:return console.log("Upload Error"),o.abrupt("return");case 20:o.next=25;break;case 22:o.prev=22,o.t0=o.catch(2),console.log(o.t0);case 25:o.next=28;break;case 27:console.log("e is null");case 28:case"end":return o.stop()}}),o,null,[[2,22]])})))()},onClearFile:function(){this.$store.dispatch("videoes/deleteFile"),this.$store.commit("videoes/setFileURL",""),this.readToVideo=!1}}},c=(o(582),o(25)),v=o.n(c),_=o(455),f=o(484),h=o(505),x=o(188),m=o(485),y=Object(d.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"video__box"},[o("div",[o("v-file-input",{attrs:{label:"업로드 영상"},on:{change:function(t){return e.onChange(t)}}})],1),e._v(" "),o("div",{staticClass:"video__player"},[o("v-row",{staticClass:"video__player__grid",attrs:{"no-gutters":""}},[o("v-col",{staticClass:"video__player__box",attrs:{cols:"8"}},[0!=this.readToVideo?o("div",{staticClass:"video"},[o("video-component",{attrs:{url:this.fileURL}})],1):o("div",[e._v("\n                    비어있음\n                ")])]),e._v(" "),o("v-col",{staticClass:"video__player__meta"},[o("v-btn",{attrs:{color:"error",elevation:"0",disabled:!this.readToVideo},on:{click:e.onClearFile}},[o("v-icon",[e._v("\n                            mdi-close\n                        ")]),e._v("\n                        영상 삭제\n                    ")],1)],1)],1)],1),e._v(" "),e._m(0)])}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"video__translator overflow-y-auto"},[o("div",{staticClass:"video__translator__title"},[o("h1",[e._v("자막")])]),e._v(" "),o("div",{staticClass:"video__translator__content"})])}],!1,null,"be796ef0",null);t.default=y.exports;v()(y,{VBtn:_.a,VCol:f.a,VFileInput:h.a,VIcon:x.a,VRow:m.a})}}]);