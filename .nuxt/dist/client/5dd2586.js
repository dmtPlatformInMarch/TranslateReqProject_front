(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{529:function(e,t,n){var content=n(530);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("5e1554dc",content,!0,{sourceMap:!1})},530:function(e,t,n){var r=n(9)(!1);r.push([e.i,".v-virtual-scroll{display:block;flex:1 1 auto;height:100%;max-width:100%;overflow:auto;position:relative}.v-virtual-scroll__container{display:block}.v-virtual-scroll__item{left:0;position:absolute;right:0}",""]),e.exports=r},554:function(e,t,n){var content=n(646);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("2cadbe68",content,!0,{sourceMap:!1})},638:function(e,t,n){"use strict";n(17),n(44),n(31),n(529);var r=n(98),o=n(214),c=n(0);t.a=r.a.extend({name:"v-virtual-scroll",directives:{Scroll:o.b},props:{bench:{type:[Number,String],default:0},itemHeight:{type:[Number,String],required:!0},items:{type:Array,default:function(){return[]}}},data:function(){return{first:0,last:0,scrollTop:0}},computed:{__bench:function(){return parseInt(this.bench,10)},__itemHeight:function(){return parseInt(this.itemHeight,10)},firstToRender:function(){return Math.max(0,this.first-this.__bench)},lastToRender:function(){return Math.min(this.items.length,this.last+this.__bench)}},watch:{height:"onScroll",itemHeight:"onScroll"},mounted:function(){this.last=this.getLast(0)},methods:{getChildren:function(){return this.items.slice(this.firstToRender,this.lastToRender).map(this.genChild)},genChild:function(e,t){t+=this.firstToRender;var n=Object(c.h)(t*this.__itemHeight);return this.$createElement("div",{staticClass:"v-virtual-scroll__item",style:{top:n},key:t},Object(c.s)(this,"default",{index:t,item:e}))},getFirst:function(){return Math.floor(this.scrollTop/this.__itemHeight)},getLast:function(e){var t=parseInt(this.height||0,10)||this.$el.clientHeight;return e+Math.ceil(t/this.__itemHeight)},onScroll:function(){this.scrollTop=this.$el.scrollTop,this.first=this.getFirst(),this.last=this.getLast(this.first)}},render:function(e){var content=e("div",{staticClass:"v-virtual-scroll__container",style:{height:Object(c.h)(this.items.length*this.__itemHeight)}},this.getChildren());return e("div",{staticClass:"v-virtual-scroll",style:this.measurableStyles,directives:[{name:"scroll",modifiers:{self:!0},value:this.onScroll}],on:this.$listeners},[content])}})},645:function(e,t,n){"use strict";n(554)},646:function(e,t,n){var r=n(9)(!1);r.push([e.i,'.wrapper[data-v-74ee9ec6]{width:100%;height:100%}.video__box[data-v-74ee9ec6]{position:absolute;background:#000;width:50%;height:100%}.video__wrapper[data-v-74ee9ec6]{display:flex;align-items:center;justify-content:center;width:100%;height:100%;border-top:50px dashed grey;border-bottom:50px dashed grey}.video__player[data-v-74ee9ec6]{width:100%;max-height:100%}.setting__box[data-v-74ee9ec6]{position:absolute;background:#8c867a;left:50%;width:50%;height:100%}.track__box[data-v-74ee9ec6]{overflow-y:auto;position:absolute;background:#fff;border-radius:25px;margin:15px;padding:25px;width:calc(100% - 30px);height:calc(75% - 30px);font-family:"MinSans-Medium",sans-serif!important;white-space:pre-wrap}.track__box[data-v-74ee9ec6]::-webkit-scrollbar{display:block;width:10px;height:8px}.track__box[data-v-74ee9ec6]::-webkit-scrollbar-thumb{border-radius:5px;background:#2172ff}.track__box[data-v-74ee9ec6]::-webkit-scrollbar-track{background-color:transparent;margin:15px 0}.setting__box__bottom[data-v-74ee9ec6]{position:absolute;top:75%;width:100%;height:25%}.control__box[data-v-74ee9ec6]{position:absolute;display:flex;flex-direction:column;justify-content:space-between;background:#fff;border-radius:15px;margin:0 0 15px 15px;padding:25px;width:calc(30% - 30px);height:calc(100% - 15px)}.control__btn[data-v-74ee9ec6]{flex:unset!important}.filelist__box[data-v-74ee9ec6]{display:flex;align-items:center;justify-content:flex-start;position:absolute;background:#fff;border-radius:15px;margin:0 15px 15px 0;padding:25px;width:calc(70% - 15px);height:calc(100% - 15px);left:30%}.dialog__box[data-v-74ee9ec6]{flex-direction:column;text-align:center;height:50vh;padding:25px}.dialog__box[data-v-74ee9ec6],.dialog__box__setting[data-v-74ee9ec6]{display:flex;align-items:center;justify-content:center;width:100%}.dialog__box__setting[data-v-74ee9ec6]{height:90%}.setting__select__box[data-v-74ee9ec6]{flex-direction:column;align-items:center;width:50%;height:100%}.select__box[data-v-74ee9ec6],.setting__select__box[data-v-74ee9ec6]{display:flex;justify-content:space-around}.select__box[data-v-74ee9ec6]{width:100%;height:90%;padding:25px}.img[data-v-74ee9ec6]{flex:0 0 auto}.dialog__box__process[data-v-74ee9ec6]{flex-direction:column;width:50%;height:100%}.dialog__box__loading[data-v-74ee9ec6],.dialog__box__process[data-v-74ee9ec6]{display:flex;align-items:center;justify-content:center}.dialog__box__loading[data-v-74ee9ec6]{width:100%;height:10%}.header__class[data-v-74ee9ec6]{border-bottom:3px solid green}.list__wrapper[data-v-74ee9ec6]{width:100%;height:80%}.list__select[data-v-74ee9ec6]{border:solid #013183!important;color:#013183!important}.action__box[data-v-74ee9ec6]{justify-content:space-around;height:10%;padding:25px}.action__box[data-v-74ee9ec6],.process__stepper[data-v-74ee9ec6]{display:flex;align-items:center;width:100%}.process__stepper[data-v-74ee9ec6]{flex-direction:column;justify-content:center;height:100%}.stepper[data-v-74ee9ec6]{width:50%;padding:5%}.stepper__btn[data-v-74ee9ec6]{border:3px solid #013183}.arrow__wrapper[data-v-74ee9ec6]{display:flex;width:100%;height:100%;flex-direction:column;align-items:center;justify-content:center}.arrow[data-v-74ee9ec6]{color:#2172ff;-webkit-animation:arrowAnimation-data-v-74ee9ec6 1.5s ease infinite;animation:arrowAnimation-data-v-74ee9ec6 1.5s ease infinite;-webkit-animation-fill-mode:both;animation-fill-mode:both}.arrow[data-v-74ee9ec6]:first-child{-webkit-animation-delay:.75s;animation-delay:.75s}.arrow[data-v-74ee9ec6]:nth-child(2){-webkit-animation-delay:1s;animation-delay:1s}.arrow[data-v-74ee9ec6]:nth-child(3){-webkit-animation-delay:1.25s;animation-delay:1.25s}.hr-sect[data-v-74ee9ec6]{display:flex;align-items:center;color:rgba(0,0,0,.35);font-size:12px;width:100%;height:5%}.hr-sect[data-v-74ee9ec6]:after,.hr-sect[data-v-74ee9ec6]:before{content:"";flex-grow:1;background:rgba(0,0,0,.35);height:1px;font-size:0;line-height:0;margin:0 16px}@-webkit-keyframes arrowAnimation-data-v-74ee9ec6{0%{color:#fff}to{color:#2172ff}}@keyframes arrowAnimation-data-v-74ee9ec6{0%{color:#fff}to{color:#2172ff}}.download__card[data-v-74ee9ec6]{flex-direction:column;height:50vh}.download__card[data-v-74ee9ec6],.download__card__title[data-v-74ee9ec6]{display:flex;align-items:center;justify-content:center}.download__card__title[data-v-74ee9ec6]{width:100%;background:#013183;color:#fff}.download__card__content[data-v-74ee9ec6]{display:flex;flex-direction:column;align-items:center;justify-content:space-between;width:100%;height:90%;padding:25px}.card__content__btngroup[data-v-74ee9ec6]{display:flex;align-items:center;justify-content:space-around;width:100%;height:60%}.card__content__btn[data-v-74ee9ec6]{display:flex;flex-direction:column;align-items:center;justify-content:center;border:3px dashed grey;border-radius:10%;width:45%;height:100%;opacity:.6;transition:.3s}.card__content__btn[data-v-74ee9ec6]:hover{border:15px solid #2172ff!important;background-color:#2172ff!important;opacity:1!important;cursor:pointer}.card__content__text[data-v-74ee9ec6]{display:flex;align-items:center;justify-content:space-around;width:100%;height:45%}.card__action[data-v-74ee9ec6]{justify-content:center;width:100%;height:10%}.content__list__title[data-v-74ee9ec6]{display:flex;align-items:center;justify-content:flex-start}.card__title__center[data-v-74ee9ec6]{display:flex;align-items:center;justify-content:center;background:#013183;color:#fff;text-align:center;padding:16px}.content__list__btn[data-v-74ee9ec6]{flex:1 1 0;justify-content:flex-start!important}.content__list__btn[data-v-74ee9ec6] span{width:100%}.list__btn__label[data-v-74ee9ec6]{max-width:80%;overflow:hidden;text-overflow:ellipsis}',""]),e.exports=r},702:function(e,t,n){"use strict";n.r(t);var r=n(475),o=n(195),c=n(67),l=n(488),d=n(189),_=n(159),h=n(188),v=n(119),f=n(192),m=n(4),x=n(196),k=n(484),w=n(49),y=n(54),T=n(638),C=(n(12),n(8),n(11),n(13),n(14),n(6)),F=n(1),$=(n(45),n(50),n(28),n(58),n(59),n(23),n(122)),O=n.n($);function S(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function D(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(t){Object(F.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var R={layout:"ServiceLayout",data:function(){return{virtualHeight:0,dialog:!1,newVideoDialog:!1,downloadDialog:!1,deleteFileDialog:!1,changeDialog:!1,fileTab:0,textTab:0,readToVideo:!1,readyToTrack:!1,loading:0,preSignedUrlResponse:!1,uploadResponse:!1,trackCompleteResponse:!1,step:1,selectVideo:!1,beforeSelect:!0,isDev:"production".includes("dev"),video:{},selectFilename:"",file:{},deleteItem:"",fullTrack:[],timeLine:[],originalTrack:[],transTrack:[],cueTrack:[],transCueTrack:[],track:"",trans:"",req:0,grant:2,showTrack:""}},created:function(){var e=this;"undefined"!=typeof window&&window.addEventListener("resize",(function(){e.virtualHeight=e.$refs.fileListBox.offsetHeight-50}))},mounted:function(){this.virtualHeight=this.$refs.fileListBox.offsetHeight-50,this.$store.dispatch("videoes/getFiles")},computed:{language:function(){return this.$store.state.manager.language},languages:function(){return this.$LANGUAGES_KO},videoList:function(){return this.$store.state.videoes.files},videoURL:function(){return this.$store.state.videoes.fileURL},req_lang:function(){return this.languages[this.req]},grant_lang:function(){return this.languages[this.grant]},req_code:function(){return this.$LANG_CODE[this.req]},grant_code:function(){return this.$LANG_CODE[this.grant]},trackMode:function(){switch(this.fileTab){case 1:return"srt";case 2:return"vtt";default:return"NotFoundMode"}}},watch:{fileTab:function(e){1===e?(this.$refs.tab_1.style.border="0",this.$refs.tab_1.style.backgroundColor="#2172FF",this.$refs.tab_1.style.opacity="1",this.$refs.tab_2.style.border="3px dashed grey",this.$refs.tab_2.style.backgroundColor="#FFFFFF",this.$refs.tab_2.style.opacity="0.6"):2===e?(this.$refs.tab_1.style.border="3px dashed grey",this.$refs.tab_1.style.backgroundColor="#FFFFFF",this.$refs.tab_1.style.opacity="0.6",this.$refs.tab_2.style.border="0",this.$refs.tab_2.style.backgroundColor="#2172FF",this.$refs.tab_2.style.opacity="1"):(this.$refs.tab_1.style.border="3px dashed grey",this.$refs.tab_1.style.backgroundColor="#FFFFFF",this.$refs.tab_1.style.opacity="0.6",this.$refs.tab_2.style.border="3px dashed grey",this.$refs.tab_2.style.backgroundColor="#FFFFFF",this.$refs.tab_2.style.opacity="0.6")},textTab:function(e){1===e?(this.$refs.textTab_1.style.border="0",this.$refs.textTab_1.style.backgroundColor="#2172FF",this.$refs.textTab_1.style.opacity="1",this.$refs.textTab_2.style.border="3px dashed grey",this.$refs.textTab_2.style.backgroundColor="#FFFFFF",this.$refs.textTab_2.style.opacity="0.6"):2===e?(this.$refs.textTab_1.style.border="3px dashed grey",this.$refs.textTab_1.style.backgroundColor="#FFFFFF",this.$refs.textTab_1.style.opacity="0.6",this.$refs.textTab_2.style.border="0",this.$refs.textTab_2.style.backgroundColor="#2172FF",this.$refs.textTab_2.style.opacity="1"):(this.$refs.textTab_1.style.border="3px dashed grey",this.$refs.textTab_1.style.backgroundColor="#FFFFFF",this.$refs.textTab_1.style.opacity="0.6",this.$refs.textTab_2.style.border="3px dashed grey",this.$refs.textTab_2.style.backgroundColor="#FFFFFF",this.$refs.textTab_2.style.opacity="0.6")}},methods:{loadingLogic:function(e){var t=this;switch(e){case 1:var n=setInterval((function(){t.preSignedUrlResponse?(t.loading<16&&(t.loading=16),clearInterval(n)):t.loading<15&&t.loading++}),1500);break;case 2:var r=setInterval((function(){t.uploadResponse?(t.loading<33&&(t.loading=33),t.step=2,clearInterval(r)):t.loading<32&&t.loading++}),1500);break;case 3:var o=setInterval((function(){t.trackCompleteResponse?(t.loading<66&&(t.loading=66),t.step=3,clearInterval(o)):t.loading<65&&t.loading++}),2500);break;case 4:var c=setInterval((function(){0===t.transTrack.length?t.loading<99&&t.loading++:(t.loading<100&&(t.loading=100),t.dialog=!1,clearInterval(c),t.loading=0)}),2e3);break;default:console.log("step 종료")}},sliceName:function(e,t){return""==e.substring(e.lastIndexOf(t)+1)?e:e.substring(e.lastIndexOf(t)+1)},sliceFrontName:function(e,t){return""==e.substring(0,e.lastIndexOf(t))?e:e.substring(0,e.lastIndexOf(t))},firstTap:function(){this.fileTab=1},secondTap:function(){this.fileTab=2},firstTextTap:function(){this.textTab=1},secondTextTap:function(){this.textTab=2},timeToSec:function(time){var e=0;if(/(((\d\d:\d\d)|(\d\d)):\d\d.\d\d\d)/gm.test(time)){var t=time.split(":").reverse();return 3===t.length?(e+=parseFloat(parseFloat(t[0]).toFixed(2)),e+=60*parseInt(t[1]),e+=3600*parseInt(t[2])):2===t.length&&(e+=parseFloat(parseFloat(t[0]).toFixed(2)),e+=60*parseInt(t[1])),e}return"time 형식 부정확"},extToContentType:function(e){switch(e){case"mp4":return"video/mp4";case"webm":return"video/webm";case"ogg":case"ogv":case"ogm":return"video/ogg";default:return"application/oct-stream"}},trackMerge:function(){for(var e=[],i=0;i<Math.max(this.timeLine.length,this.originalTrack.length);i++)e[i]=D(D({},this.timeLine[i]),{text:this.originalTrack[i]});this.fullTrack=e},trackFormating:function(e,track){if("srt"===e){for(var t="",i=0;i<Math.min(this.timeLine.length,track.length);i++)t+="".concat(i+1,"\n").concat(this.timeLine[i].start.replace(".",",")," --\x3e ").concat(this.timeLine[i].end.replace(".",","),"\n").concat(track[i],"\n\n");return t}for(var n="WEBVTT\n\n",r=0;r<Math.min(this.timeLine.length,track.length);r++)n+="".concat(this.timeLine[r].start," --\x3e ").concat(this.timeLine[r].end,"\n").concat(track[r],"\n\n");return n},trackOn:function(e){var t=this;return Object(C.a)(regeneratorRuntime.mark((function e(){var i,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:for(t.video=t.$refs.videoplayer,t.cueTrack=t.video.addTextTrack("subtitles",t.req_lang,t.req_code),t.transCueTrack=t.video.addTextTrack("subtitles",t.grant_lang,t.grant_code),t.cueTrack.mode="showing",i=0;i<t.fullTrack.length;i++)t.cueTrack.addCue(new VTTCue(t.timeToSec(t.timeLine[i].start),t.timeToSec(t.timeLine[i].end),t.originalTrack[i]));for(n=0;n<t.fullTrack.length;n++)t.transCueTrack.addCue(new VTTCue(t.timeToSec(t.timeLine[n].start),t.timeToSec(t.timeLine[n].end),t.transTrack[n]));case 8:case"end":return e.stop()}}),e)})))()},onSelectFile:function(e){var t=this;return Object(C.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.selectVideo=!0,t.selectFilename=e,t.readToVideo){n.next=14;break}return n.next=5,t.$store.commit("videoes/setFileName",e.substring(0,e.lastIndexOf(".")));case 5:return r=e.substring(e.lastIndexOf(".")+1),n.next=8,t.$store.commit("videoes/setFileExt",r);case 8:return n.next=10,t.$store.commit("videoes/setFileURL","https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/videoes/".concat(encodeURI(e)));case 10:t.step=2,t.dialog=!0,n.next=15;break;case 14:t.newVideoDialog=!0;case 15:case"end":return n.stop()}}),n)})))()},onChange:function(e){var t=this;return Object(C.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{null!=e&&0!=e.target.files.length?(t.newVideo(),t.file=e.target.files[0],t.dialog=!0):console.log("e is null")}catch(e){console.log(e)}case 1:case"end":return n.stop()}}),n)})))()},uploadVideo:function(){if(this.selectVideo){this.newVideo();var e=this.selectFilename;this.$store.commit("videoes/setFileName",e.substring(0,e.lastIndexOf(".")));var t=e.substring(e.lastIndexOf(".")+1);this.$store.commit("videoes/setFileExt",t),this.$store.commit("videoes/setFileURL","https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/videoes/".concat(encodeURI(e))),this.step=2,this.newVideoDialog=!1,this.dialog=!0}else this.newVideoDialog=!1,this.$refs.upload.click()},onTaskStart:function(){var e=this;return Object(C.a)(regeneratorRuntime.mark((function t(){var n,r,o,c,l,d,_;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.beforeSelect=!1,0!==e.fullTrack.length||e.selectVideo){t.next=57;break}return e.originalTrack=[],e.transTrack=[],n=e.file.name,r=new FormData,o=n.substring(0,n.lastIndexOf(".")),c=n.substring(n.lastIndexOf(".")+1),e.$store.commit("videoes/setFileName",o),e.$store.commit("videoes/setFileExt",c),r.append("fileKey",e.file),t.prev=11,e.loadingLogic(1),t.next=15,e.$store.dispatch("videoes/signedURL",r);case 15:return l=t.sent,e.preSignedUrlResponse=!0,e.loadingLogic(2),t.next=20,O.a.put(l,e.file,{headers:{"Content-Type":e.extToContentType(c)}});case 20:if(200!==t.sent.status){t.next=49;break}return e.loadingLogic(3),e.uploadResponse=!0,t.next=26,e.$store.commit("videoes/setFile",void 0);case 26:return t.next=28,e.$store.dispatch("videoes/setURL");case 28:return t.next=30,e.$store.dispatch("videoes/postVideo",{req_code:e.req_code,mode:"vtt"});case 30:return d=t.sent,e.trackCompleteResponse=!0,e.track=d.track,e.originalTrack=d.segment,e.timeLine=d.timeline,e.trackMerge(),e.$store.dispatch("videoes/getFiles"),e.loadingLogic(4),t.next=40,e.$store.dispatch("videoes/transTrack",{from:e.req_code,to:e.grant_code,track:e.fullTrack});case 40:e.transTrack=t.sent,e.trans=e.trackFormating("vtt",e.transTrack),e.readToVideo=!0,e.readyToTrack=!0,e.trackOn(e.req_lang),e.selectFilename=e.$store.state.videoes.fileName,e.dialog=!1,t.next=50;break;case 49:e.$menage.showMessage({message:"영상 업로드에 실패했습니다.\n관리자에게 문의하세요.",color:"error"});case 50:t.next=55;break;case 52:t.prev=52,t.t0=t.catch(11),console.log(t.t0);case 55:t.next=105;break;case 57:if(!e.selectVideo){t.next=90;break}return e.originalTrack=[],e.transTrack=[],t.prev=60,e.loading=33,e.loadingLogic(3),e.uploadResponse=!0,t.next=66,e.$store.dispatch("videoes/setURL");case 66:return t.next=68,e.$store.dispatch("videoes/postVideo",{req_code:e.req_code,mode:"vtt"});case 68:return _=t.sent,e.trackCompleteResponse=!0,e.track=_.track,e.originalTrack=_.segment,e.timeLine=_.timeline,e.trackMerge(),e.loadingLogic(4),t.next=77,e.$store.dispatch("videoes/transTrack",{from:e.req_code,to:e.grant_code,track:e.fullTrack});case 77:e.transTrack=t.sent,e.readToVideo=!0,e.readyToTrack=!0,e.trackOn(e.req_lang),e.dialog=!1,e.selectVideo=!1,t.next=88;break;case 85:t.prev=85,t.t1=t.catch(60),console.log(t.t1);case 88:t.next=105;break;case 90:return t.prev=90,e.transTrack=[],e.loading=66,e.loadingLogic(4),t.next=96,e.$store.dispatch("videoes/transTrack",{from:e.req_code,to:e.grant_code,track:e.fullTrack});case 96:e.transTrack=t.sent,e.trackOn(e.req_lang),e.readToVideo=!0,e.dialog=!1,t.next=105;break;case 102:t.prev=102,t.t2=t.catch(90),console.log(t.t2);case 105:return t.next=107,e.$store.dispatch("videoes/realTrackMerge",{time:e.timeLine,track:e.originalTrack,trans:e.transTrack});case 107:e.showTrack=t.sent;case 108:case"end":return t.stop()}}),t,null,[[11,52],[60,85],[90,102]])})))()},newVideo:function(){this.newVideoDialog=!1,this.readToVideo=!1,this.readyToTrack=!1,this.showTrack="",this.video={},this.file={},this.fullTrack=[],this.timeLine=[],this.originalTrack=[],this.transTrack=[],this.track="",this.trans="",this.cueTrack={},this.transCueTrack={},this.loading=0,this.dialog=!1,this.beforeSelect=!0,this.step=1,this.preSignedUrlResponse=!1,this.uploadResponse=!1,this.trackCompleteResponse=!1},showTrackSwitching:function(){"showing"===this.transCueTrack.mode?(this.transCueTrack.mode="hidden",this.cueTrack.mode="showing"):(this.cueTrack.mode="hidden",this.transCueTrack.mode="showing")},downloadDialogOpen:function(){this.fileTab=0,this.textTab=0,this.downloadDialog=!this.downloadDialog},downloadFile:function(){var e=this;return Object(C.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.trackFormating(e.trackMode,1===e.textTab?e.originalTrack:e.transTrack);case 2:return n=t.sent,t.next=5,e.$store.dispatch("videoes/textToTrack",{track:n,ext:e.trackMode});case 5:e.$refs.download.$el.click(),e.downloadDialogOpen();case 7:case"end":return t.stop()}}),t)})))()},changeDialogOpen:function(){this.changeDialog=!this.changeDialog},changeRecognition:function(){var e=this;return Object(C.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.changeDialog=!1,e.beforeSelect=!0,e.readToVideo=!1,e.preSignedUrlResponse=!1,e.uploadResponse=!1,e.trackCompleteResponse=!1,e.step=3,e.loading=0,e.dialog=!0;case 9:case"end":return t.stop()}}),t)})))()},deleteFile:function(e){var t=this.sliceName(e.Key,"/");this.$store.commit("videoes/setFileName",t.substring(0,t.lastIndexOf("."))),this.$store.commit("videoes/setFileExt",t.substring(t.lastIndexOf(".")+1)),this.deleteFileDialog=!0},deleteFileOK:function(){var e=this;return Object(C.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.$nuxt.$loading.start(),t.next=4,e.$store.dispatch("videoes/deleteFile");case 4:e.$nuxt.$loading.finish(),e.$store.commit("videoes/setFileName",""),e.$store.commit("videoes/setFileExt",""),e.deleteFileDialog=!1,t.next=15;break;case 10:t.prev=10,t.t0=t.catch(0),e.$nuxt.$loading.finish(),e.deleteFileDialog=!1,console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,10]])})))()},deleteFileNO:function(){this.$store.commit("videoes/setFileName",""),this.$store.commit("videoes/setFileExt",""),this.deleteFileDialog=!1}}},L=(n(645),n(18)),component=Object(L.a)(R,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"video__box"},[n("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"upload",attrs:{type:"file",accept:".mp4"},on:{change:e.onChange}}),e._v(" "),!0===e.readToVideo?n("div",{staticClass:"video__wrapper"},[n("video",{ref:"videoplayer",staticClass:"video__player",attrs:{src:e.videoURL,controls:"",preload:"auto",crossorigin:"anonymous"}})]):n("div",{staticClass:"video__wrapper"},[n(r.a,{attrs:{rounded:""},on:{click:e.uploadVideo}},[n(d.a,[e._v("\n                    mdi-plus\n                ")]),e._v("\n                새로 만들기\n            ")],1)],1)]),e._v(" "),n("div",{staticClass:"setting__box"},[n("div",{ref:"trackscroll",staticClass:"track__box",domProps:{innerHTML:e._s(e.showTrack)}}),e._v(" "),n("div",{staticClass:"setting__box__bottom"},[n("div",{staticClass:"control__box"},[n(r.a,{staticClass:"control__btn",attrs:{block:"",rounded:"",color:"#013183",dark:e.readToVideo,disabled:!e.readToVideo},on:{click:function(t){t.stopPropagation(),e.newVideoDialog=!e.newVideoDialog}}},[n(d.a,[e._v("\n                        mdi-plus\n                    ")]),e._v("\n                    새 영상\n                ")],1),e._v(" "),n(r.a,{staticClass:"control__btn",attrs:{block:"",rounded:"",color:"#013183",dark:e.readToVideo,disabled:!e.readToVideo},on:{click:function(t){return t.stopPropagation(),e.showTrackSwitching.apply(null,arguments)}}},[n(d.a,[e._v("\n                        mdi-swap-horizontal-bold\n                    ")]),e._v("\n                    자막 전환\n                ")],1),e._v(" "),n(r.a,{staticClass:"control__btn",attrs:{block:"",rounded:"",color:"#013183",dark:e.readToVideo,disabled:!e.readToVideo},on:{click:function(t){return t.stopPropagation(),e.downloadDialogOpen.apply(null,arguments)}}},[n(d.a,[e._v("\n                        mdi-download\n                    ")]),e._v("\n                    자막 다운로드\n                ")],1),e._v(" "),n(r.a,{staticClass:"control__btn",attrs:{block:"",rounded:"",color:"#013183",dark:e.readToVideo,disabled:!e.readToVideo},on:{click:function(t){return t.stopPropagation(),e.changeDialogOpen.apply(null,arguments)}}},[n(d.a,[e._v("\n                        mdi-translate-variant\n                    ")]),e._v("\n                    다른 언어로 번역하기\n                ")],1)],1),e._v(" "),n("div",{ref:"fileListBox",staticClass:"filelist__box"},[n(T.a,{attrs:{bench:"5",items:e.videoList,height:e.virtualHeight,"item-height":"64"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.item;return[n(v.a,[n(m.c,{staticClass:"content__list__title"},[n(r.a,{staticClass:"content__list__btn",attrs:{rounded:"","x-large":"",depressed:"",dark:"",color:"#013183"},on:{click:function(t){t.stopPropagation(),e.onSelectFile(e.sliceName(o.Key,"/"))}}},[n(d.a,[e._v("\n                                        mdi-file-video\n                                    ")]),e._v(" "),n("div",{staticClass:"list__btn__label"},[e._v("\n                                        "+e._s(e.sliceName(o.Key,"/"))+"\n                                    ")]),e._v(" "),n(k.a),e._v(" "),n(r.a,{attrs:{icon:"",right:""},on:{click:function(t){return t.stopPropagation(),e.deleteFile(o)}}},[n(d.a,[e._v("\n                                            mdi-close\n                                        ")])],1)],1)],1)],1)]}}])})],1)])]),e._v(" "),n(l.a,{attrs:{width:"60vw",persistent:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n(o.a,[n("div",{staticClass:"dialog__box"},[n("div",{staticClass:"dialog__box__setting"},[n("div",{staticClass:"setting__select__box",on:{click:function(t){e.dialog=!e.dialog}}},[n(_.a,{staticClass:"img",attrs:{src:"https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/logo.png"}})],1),e._v(" "),e.beforeSelect?n("div",{staticClass:"setting__select__box"},[n("div",{staticClass:"select__box"},[n("div",[n(w.a,{staticClass:"header__class",attrs:{elevation:"0"}},[n(y.b,{staticClass:"font-weight-bold"},[e._v("\n                                        영상의 원본 언어\n                                    ")])],1),e._v(" "),n("div",{staticClass:"overflow-y-auto list__wrapper"},[n(h.a,[n(f.a,{attrs:{mandatory:""},model:{value:e.req,callback:function(t){e.req=t},expression:"req"}},e._l(e.languages,(function(t,r){return n(v.a,{key:r,attrs:{"active-class":"list__select"}},[n(m.c,[e._v("\n                                                    "+e._s(t)+"\n                                                ")])],1)})),1)],1)],1)],1),e._v(" "),n(d.a,[e._v("\n                                mdi-arrow-right\n                            ")]),e._v(" "),n("div",[n(w.a,{staticClass:"header__class",attrs:{elevation:"0"}},[n(y.b,{staticClass:"font-weight-bold"},[e._v("\n                                        번역하고 싶은 언어\n                                    ")])],1),e._v(" "),n("div",{staticClass:"overflow-y-auto list__wrapper"},[n(h.a,[n(f.a,{attrs:{mandatory:""},model:{value:e.grant,callback:function(t){e.grant=t},expression:"grant"}},e._l(e.languages,(function(t,r){return n(v.a,{key:r,attrs:{"active-class":"list__select"}},[n(m.c,[e._v("\n                                                    "+e._s(t)+"\n                                                ")])],1)})),1)],1)],1)],1)],1),e._v(" "),n("div",{staticClass:"action__box"},[n(r.a,{attrs:{block:"",rounded:"",color:"#013183",dark:""},on:{click:e.onTaskStart}},[e._v("\n                                번역하기\n                            ")])],1)]):n("div",{staticClass:"dialog__box__process"},[n("div",{staticClass:"process__stepper"},[n("div",{staticClass:"stepper"},[n(r.a,{staticClass:"stepper__btn",attrs:{block:"",rounded:"",color:"primary",disabled:1!=e.step}},[e._v("\n                                    영상 업로드\n                                ")])],1),e._v(" "),1===e.step?n("transition",[n("div",{staticClass:"arrow__wrapper"},[n("div",{staticClass:"arrow"},[e._v("▼")]),e._v(" "),n("div",{staticClass:"arrow"},[e._v("▼")]),e._v(" "),n("div",{staticClass:"arrow"},[e._v("▼")])])]):n("div",{staticClass:"arrow__wrapper"},[n("div",[e._v("▼")]),e._v(" "),n("div",[e._v("▼")]),e._v(" "),n("div",[e._v("▼")])]),e._v(" "),n("div",{staticClass:"stepper",attrs:{div:""}},[n(r.a,{staticClass:"stepper__btn",attrs:{block:"",rounded:"",color:"warning",disabled:2!=e.step}},[e._v("\n                                    영상 인식\n                                ")])],1),e._v(" "),2===e.step?n("transition",[n("div",{staticClass:"arrow__wrapper"},[n("div",{staticClass:"arrow"},[e._v("▼")]),e._v(" "),n("div",{staticClass:"arrow"},[e._v("▼")]),e._v(" "),n("div",{staticClass:"arrow"},[e._v("▼")])])]):n("div",{staticClass:"arrow__wrapper"},[n("div",[e._v("▼")]),e._v(" "),n("div",[e._v("▼")]),e._v(" "),n("div",[e._v("▼")])]),e._v(" "),n("div",{staticClass:"stepper",attrs:{div:""}},[n(r.a,{staticClass:"stepper__btn",attrs:{block:"",rounded:"",color:"success",disabled:3!=e.step}},[e._v("\n                                    자막 번역\n                                ")])],1)],1)])]),e._v(" "),n("div",{staticClass:"dialog__box__loading"},[n(x.a,{attrs:{color:"#013183",height:"25px"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.value;return[n("strong",{staticStyle:{color:"white"}},[e._v(e._s(Math.ceil(r))+"%")])]}}]),model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}})],1)])])],1),e._v(" "),n(l.a,{attrs:{width:"600",persistent:""},model:{value:e.downloadDialog,callback:function(t){e.downloadDialog=t},expression:"downloadDialog"}},[n(o.a,{staticClass:"download__card"},[n(c.d,{staticClass:"download__card__title",attrs:{tag:"div"}},[e._v("\n                다운로드 양식 선택\n            ")]),e._v(" "),n("div",{staticClass:"download__card__content"},[n("div",{staticClass:"hr-sect"},[e._v("텍스트 정보")]),e._v(" "),n("div",{staticClass:"card__content__text pa-2"},[n("div",{ref:"textTab_1",staticClass:"card__content__btn pa-4",on:{click:e.firstTextTap}},[n("div",{staticClass:"d-flex align-center justify-center",staticStyle:{width:"100%",height:"50%"}},[n(d.a,{staticClass:"text-h4",attrs:{dark:1===e.textTab}},[e._v("\n                                mdi-format-text-variant-outline\n                            ")])],1),e._v("\n                        원문\n                    ")]),e._v(" "),n("div",{ref:"textTab_2",staticClass:"card__content__btn pa-4",on:{click:e.secondTextTap}},[n("div",{staticClass:"d-flex align-center justify-center",staticStyle:{width:"100%",height:"50%"}},[n(d.a,{staticClass:"text-h4",attrs:{dark:2===e.textTab}},[e._v("\n                                mdi-translate-variant\n                            ")])],1),e._v("\n                        번역\n                    ")])]),e._v(" "),n("div",{staticClass:"hr-sect"},[e._v("파일 포맷")]),e._v(" "),n("div",{staticClass:"card__content__btngroup"},[n("div",{ref:"tab_1",staticClass:"card__content__btn pa-4",on:{click:e.firstTap}},[n("div",{staticClass:"d-flex align-center justify-center",staticStyle:{width:"100%",height:"80%"}},[n(d.a,{staticClass:"text-h1",attrs:{dark:1===e.fileTab}},[e._v("\n                                mdi-file\n                            ")])],1),e._v(" "),n(r.a,{staticClass:"non-flex readonly__btn font-weight-bold",staticStyle:{width:"100%",height:"20%","font-size":"18px"},attrs:{ripple:!1,depressed:"",rounded:"",block:""}},[e._v("\n                            .srt\n                        ")])],1),e._v(" "),n("div",{ref:"tab_2",staticClass:"card__content__btn pa-4",on:{click:e.secondTap}},[n("div",{staticClass:"d-flex align-center justify-center",staticStyle:{width:"100%",height:"80%"}},[n(d.a,{staticClass:"text-h1",attrs:{dark:2===e.fileTab}},[e._v("\n                                mdi-file\n                            ")])],1),e._v(" "),n(r.a,{staticClass:"non-flex readonly__btn font-weight-bold",staticStyle:{width:"100%",height:"20%","font-size":"18px"},attrs:{ripple:!1,depressed:"",rounded:"",block:""}},[e._v("\n                            .vtt\n                        ")])],1)])]),e._v(" "),n(c.a,{staticClass:"card__action"},[n(r.a,{staticClass:"auto-flex",attrs:{depressed:"",color:"success",disabled:0===e.fileTab||0===e.textTab},on:{click:function(t){return t.stopPropagation(),e.downloadFile.apply(null,arguments)}}},[n(d.a,[e._v("\n                        mdi-download\n                    ")]),e._v("\n                    다운로드\n                ")],1),e._v(" "),n(r.a,{staticClass:"auto-flex",attrs:{depressed:"",color:"error"},on:{click:function(t){t.stopPropagation(),e.downloadDialog=!e.downloadDialog}}},[n(d.a,[e._v("\n                        mdi-close\n                    ")]),e._v("\n                    닫기\n                ")],1)],1)],1)],1),e._v(" "),n(l.a,{attrs:{width:"250"},model:{value:e.newVideoDialog,callback:function(t){e.newVideoDialog=t},expression:"newVideoDialog"}},[n(o.a,[n(c.d,[n("h5",[e._v("정말 가져오시겠습니까?")])]),e._v(" "),n(c.c,[n("span",{staticStyle:{"font-weight":"bold"}},[e._v("수정하는 중")]),e._v("에 가져오는 경우, "),n("br"),e._v("\n                수정한 내용이 "),n("span",{staticStyle:{color:"red"}},[e._v("모두 사라집니다.")])]),e._v(" "),n(c.a,[n(k.a),e._v(" "),n(r.a,{attrs:{text:""},on:{click:e.uploadVideo}},[e._v("예")]),e._v(" "),n(r.a,{attrs:{text:""},on:{click:function(t){e.newVideoDialog=!1}}},[e._v("아니오")])],1)],1)],1),e._v(" "),n(l.a,{attrs:{width:"250"},model:{value:e.changeDialog,callback:function(t){e.changeDialog=t},expression:"changeDialog"}},[n(o.a,[n(c.d,[n("h5",[e._v("정말 다시 번역하시겠습니까?")])]),e._v(" "),n(c.c,[n("span",{staticStyle:{"font-weight":"bold"}},[e._v("재번역")]),e._v(" 시 기존에 번역된 내용에, "),n("br"),e._v(" "),n("span",{staticStyle:{color:"red"}},[e._v("덮어 씌워")]),e._v("집니다.\n            ")]),e._v(" "),n(c.a,[n(k.a),e._v(" "),n(r.a,{attrs:{text:""},on:{click:e.changeRecognition}},[e._v("예")]),e._v(" "),n(r.a,{attrs:{text:""},on:{click:function(t){e.changeDialog=!1}}},[e._v("아니오")])],1)],1)],1),e._v(" "),n(l.a,{attrs:{width:"250"},model:{value:e.deleteFileDialog,callback:function(t){e.deleteFileDialog=t},expression:"deleteFileDialog"}},[n(o.a,[n(c.d,[n("h5",[e._v("정말 "),n("span",{staticStyle:{"font-weight":"bold",color:"red"}},[e._v("삭제")]),e._v("하시겠습니까?")])]),e._v(" "),n(c.c,[e._v("\n                파일을 "),n("span",{staticStyle:{"font-weight":"bold"}},[e._v("삭제")]),e._v("하는 경우, "),n("br"),e._v("\n                삭제한 파일을 복구할 수 "),n("span",{staticStyle:{color:"red"}},[e._v("없습니다.")])]),e._v(" "),n(c.a,[n(k.a),e._v(" "),n(r.a,{attrs:{text:""},on:{click:e.deleteFileOK}},[e._v("예")]),e._v(" "),n(r.a,{attrs:{text:""},on:{click:e.deleteFileNO}},[e._v("아니오")])],1)],1)],1),e._v(" "),n(r.a,{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"download",attrs:{href:(e.isDev?"http://localhost:3085":"https://api.dmtlabs.kr")+"/video/download/"+e.sliceFrontName(e.selectFilename,".")+"."+e.trackMode}})],1)}),[],!1,null,"74ee9ec6",null);t.default=component.exports}}]);