(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{518:function(e,t,n){var content=n(589);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(11).default)("0d6222e8",content,!0,{sourceMap:!1})},588:function(e,t,n){"use strict";n(518)},589:function(e,t,n){var r=n(10)(!1);r.push([e.i,".main__template[data-v-ba0333c6]{overflow:hidden;height:100%}.main__template *[data-v-ba0333c6]{touch-action:none}.scroll__box[data-v-ba0333c6]{transition:1s cubic-bezier(.5,0,.5,1)}.scroll__box[data-v-ba0333c6],.scroll__item[data-v-ba0333c6]{position:relative;overflow:hidden}.scroll__item[data-v-ba0333c6]{height:100vh;cursor:default}.scroll__item__textbox[data-v-ba0333c6]{height:100vh;display:flex;flex-direction:column;text-align:center;justify-content:center}.scroll__item__title[data-v-ba0333c6]{font-size:10rem;font-weight:lighter;color:#fff}.scroll__item__subtitle[data-v-ba0333c6]{font-size:1.5rem;color:#fff}.bg1[data-v-ba0333c6]{background:linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/mainImg1.jpg);background-size:cover}.bg2[data-v-ba0333c6]{background:linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/text.jpg);background-size:cover}.bg3[data-v-ba0333c6]{background:linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/video.jpg);background-size:cover}.bg4[data-v-ba0333c6]{background:linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/voice.jpg);background-size:cover}@media screen and (max-width:900px){.scroll__item__title[data-v-ba0333c6]{font-size:7rem;font-weight:lighter;color:#fff;padding:0 5vw}.scroll__item__subtitle[data-v-ba0333c6]{font-size:1.2rem;color:#fff;padding:0 10vw}}@media screen and (max-width:500px){.scroll__item__title[data-v-ba0333c6]{font-size:4rem;font-weight:lighter;color:#fff;padding:0 5vw}.scroll__item__subtitle[data-v-ba0333c6]{font-size:1rem;color:#fff;padding:0 10vw}}@media screen and (max-width:361px){.scroll__item__title[data-v-ba0333c6]{font-size:3rem;font-weight:lighter;color:#fff;padding:0 5vw}.scroll__item__subtitle[data-v-ba0333c6]{font-size:.8rem;color:#fff;padding:0 10vw}}",""]),e.exports=r},616:function(e,t,n){"use strict";n.r(t);var r=n(160),o=(n(56),n(590)),l={layout:"Default",data:function(){return{sections:4,scdir:"",swdir:"",hold:!1,sX:0,sY:0,stT:0,dX:0,dY:0,elT:0,alT:500,threshold:100,slack:50,lookup:0}},mounted:function(){var e=this.$refs.box;e.style.transform="translateY(0)",e.addEventListener("wheel",this.handleScroll),e.addEventListener("wheel",this.scrollY),e.addEventListener("touchstart",this.swipeStart,!1),e.addEventListener("touchend",this.swipeEnd,!1)},beforeDestroy:function(){var e=this.$refs.box;e.removeEventListener("wheel",this.scrollY),e.removeEventListener("wheel",this.handleScroll),e.removeEventListener("touchstart",this.swipeStart),e.removeEventListener("touchend",this.swipeEnd)},computed:{language:function(){return this.$store.state.manager.language}},methods:{handleScroll:function(e){e.deltaY<0&&(this.scdir="down"),e.deltaY>0&&(this.scdir="up"),e.preventDefault(),e.stopPropagation()},scrollY:function(){var e,t,n=this,r=this.$refs.box,o=window.innerHeight/100,l=Math.min(window.innerHeight,window.innerWidth)/100;t=(t=parseInt(r.offsetHeight/o))||parseInt(r.offsetHeight/l),e=parseInt(r.style.transform.replace("translateY(","")),"up"===this.scdir&&Math.abs(e)<t-t/this.sections?e-=100:"down"===this.scdir&&e<0?e+=100:"top"===this.scdir&&(e=0),!1===this.hold&&(this.hold=!0,"up"===this.scdir?this.lookup<this.sections-1&&this.lookup++:"down"===this.scdir&&this.lookup>0&&this.lookup--,r.style.transform="translateY("+e+"vh)",setTimeout((function(){n.hold=!1}),1e3))},swipeStart:function(e){var t=e.changedTouches[0];this.swdir="none",this.sX=t.pageX,this.sY=t.pageY,this.stT=(new Date).getTime()},swipeEnd:function(e){var t=this.$refs.box,n=e.changedTouches[0];this.dX=n.pageX-this.sX,this.dY=n.pageY-this.sY,this.elT=(new Date).getTime()-this.stT,this.elT<=this.alT&&(Math.abs(this.dX)>=this.threshold&&Math.abs(this.dY)<=this.slack?this.swdir=this.dX<0?"left":"right":Math.abs(this.dY)>=this.threshold&&Math.abs(this.dX)<=this.slack&&(this.swdir=this.dY<0?"up":"down"),("up"===this.swdir||"down"===this.swdir)&&(this.scdir=this.swdir,this.scrollY(t)),e.preventDefault(),e.stopPropagation())},beforeEnter:function(e){e.style.position="relative",e.style.top="30vh",e.style.opacity=0},enter:function(e,t){o.a.to(e,{duration:2,opacity:1,top:0,ease:"power2.out",stagger:.2,onComplete:t})},subEnter:function(e,t){o.a.to(e,{delay:.6,duration:1.4,opacity:1,top:0,ease:"power2.out",stagger:.2,onComplete:t})},leave:function(e,t){o.a.to(e,{duration:.7,top:"30vh",ease:"elastic.inOut(2.5, 1)"}),o.a.to(e,{duration:.2,opacity:0,onComplete:t})}}},c=(n(588),n(22)),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"main__template"},[t("div",{ref:"box",staticClass:"scroll__box"},[t("div",{staticClass:"scroll__item"},[t(r.a,{staticClass:"bg1",attrs:{height:"100vh"}},[t("transition",{on:{leave:e.leave}},[0===e.lookup?t("div",{staticClass:"scroll__item__textbox"},[t("transition",{attrs:{appear:"",name:"slide-fade",css:!1},on:{"before-enter":e.beforeEnter,enter:e.enter}},[t("div",{staticClass:"scroll__item__title"},[e._v("\n                DMTLABS\n              ")])]),e._v(" "),t("transition",{attrs:{appear:"",name:"slide-fade",css:!1},on:{"before-enter":e.beforeEnter,enter:e.subEnter}},[t("div",{staticClass:"scroll__item__subtitle"},[t("h4",{directives:[{name:"show",rawName:"v-show",value:"한국어"===e.language,expression:"language === '한국어'"}]},[e._v("\n                  DMTLABS는 다국적 번역 서비스를 제공합니다.\n                ")]),e._v(" "),t("h4",{directives:[{name:"show",rawName:"v-show",value:"영어"===e.language,expression:"language === '영어'"}]},[e._v("\n                  DMTLABS provides multinational translation services.\n                ")])])])],1):e._e()])],1)],1),e._v(" "),t("div",{staticClass:"scroll__item"},[t(r.a,{staticClass:"bg2",attrs:{height:"100vh"}},[t("transition",{on:{leave:e.leave}},[1===e.lookup?t("div",{staticClass:"scroll__item__textbox"},[t("transition",{attrs:{appear:"",name:"slide-fade",css:!1},on:{"before-enter":e.beforeEnter,enter:e.enter}},[t("div",{staticClass:"scroll__item__title"},[t("div",{directives:[{name:"show",rawName:"v-show",value:"한국어"===e.language,expression:"language === '한국어'"}]},[e._v("\n                  텍스트 번역\n                ")]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"영어"===e.language,expression:"language === '영어'"}]},[e._v("\n                  Text Translation\n                ")])])]),e._v(" "),t("transition",{attrs:{appear:"",name:"slide-fade",css:!1},on:{"before-enter":e.beforeEnter,enter:e.subEnter}},[t("div",{staticClass:"scroll__item__subtitle"},[t("h4",{directives:[{name:"show",rawName:"v-show",value:"한국어"===e.language,expression:"language === '한국어'"}]},[e._v("\n                  DMTLABS에서 제공하는 텍스트 파일 다국어 번역 서비스를\n                  경험해보세요.\n                ")]),e._v(" "),t("h4",{directives:[{name:"show",rawName:"v-show",value:"영어"===e.language,expression:"language === '영어'"}]},[e._v("\n                  Experience the text file multilingual translation service\n                  provided by DMTLABS.\n                ")])])])],1):e._e()])],1)],1),e._v(" "),t("div",{staticClass:"scroll__item"},[t(r.a,{staticClass:"bg3",attrs:{height:"100vh"}},[t("transition",{on:{leave:e.leave}},[2===e.lookup?t("div",{staticClass:"scroll__item__textbox"},[t("transition",{attrs:{appear:"",name:"slide-fade",css:!1},on:{"before-enter":e.beforeEnter,enter:e.enter}},[t("div",{staticClass:"scroll__item__title"},[t("div",{directives:[{name:"show",rawName:"v-show",value:"한국어"===e.language,expression:"language === '한국어'"}]},[e._v("\n                  영상 번역\n                ")]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"영어"===e.language,expression:"language === '영어'"}]},[e._v("\n                  Video Translation\n                ")])])]),e._v(" "),t("transition",{attrs:{appear:"",name:"slide-fade",css:!1},on:{"before-enter":e.beforeEnter,enter:e.subEnter}},[t("div",{staticClass:"scroll__item__subtitle"},[t("h4",{directives:[{name:"show",rawName:"v-show",value:"한국어"===e.language,expression:"language === '한국어'"}]},[e._v("\n                  DMTLABS에서 제공하는 영상 자막 다국어 번역 서비스를\n                    경험해보세요.\n                ")]),e._v(" "),t("h4",{directives:[{name:"show",rawName:"v-show",value:"영어"===e.language,expression:"language === '영어'"}]},[e._v("\n                  Experience the video caption multilingual translation service\n                    provided by DMTLABS.\n                ")])])])],1):e._e()])],1)],1),e._v(" "),t("div",{staticClass:"scroll__item"},[t(r.a,{staticClass:"bg4",attrs:{height:"100vh"}},[t("transition",{on:{leave:e.leave}},[3===e.lookup?t("div",{staticClass:"scroll__item__textbox"},[t("transition",{attrs:{appear:"",name:"slide-fade",css:!1},on:{"before-enter":e.beforeEnter,enter:e.enter}},[t("div",{staticClass:"scroll__item__title"},[t("div",{directives:[{name:"show",rawName:"v-show",value:"한국어"===e.language,expression:"language === '한국어'"}]},[e._v("\n                  음성 번역\n                ")]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"영어"===e.language,expression:"language === '영어'"}]},[e._v("\n                  Speech Translation\n                ")])])]),e._v(" "),t("transition",{attrs:{appear:"",name:"slide-fade",css:!1},on:{"before-enter":e.beforeEnter,enter:e.subEnter}},[t("div",{staticClass:"scroll__item__subtitle"},[t("h4",{directives:[{name:"show",rawName:"v-show",value:"한국어"===e.language,expression:"language === '한국어'"}]},[e._v("\n                  DMTLABS에서 제공하는 다국적 음성 더빙 서비스를 경험해보세요.\n                ")]),e._v(" "),t("h4",{directives:[{name:"show",rawName:"v-show",value:"영어"===e.language,expression:"language === '영어'"}]},[e._v("\n                  Experience the multinational voice dubbing service provided by\n                  DMTLABS.\n                ")])])])],1):e._e()])],1)],1)])])}),[],!1,null,"ba0333c6",null);t.default=component.exports}}]);