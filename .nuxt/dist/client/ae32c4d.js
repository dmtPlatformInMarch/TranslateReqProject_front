(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{446:function(t,e,n){var content=n(447);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("0cd63bd9",content,!0,{sourceMap:!1})},447:function(t,e,n){var o=n(13)(!1);o.push([t.i,".v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;transform:translate(-50%);will-change:transform;transition:opacity .3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:flex;flex-direction:column;justify-content:center;padding:0 1rem}",""]),t.exports=o},472:function(t,e,n){var content=n(540);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("a7b81434",content,!0,{sourceMap:!1})},476:function(t,e,n){"use strict";n(17),n(446);var o=n(2).a.extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}}),r=n(3),l=Object(r.a)(o);e.a=l.extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, ".concat(this.parallax,"px)")}}},mounted:function(){this.init()},methods:{init:function(){var t=this,img=this.$refs.img;img&&(img.complete?(this.translate(),this.listeners()):img.addEventListener("load",(function(){t.translate(),t.listeners()}),!1),this.isBooted=!0)},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e=t("div",{staticClass:"v-parallax__image-container"},[t("img",{staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"})]),content=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:"".concat(this.height,"px")},on:this.$listeners},[e,content])}})},539:function(t,e,n){"use strict";n(472)},540:function(t,e,n){var o=n(13)(!1);o.push([t.i,'@font-face{font-family:"CBNUJIKJI";src:url(https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202@1.0/CBNUJIKJI.woff) format("woff");font-weight:400;font-style:normal}@font-face{font-family:"MinSans-Medium";src:url(https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/MinSans-Medium.woff) format("woff");font-weight:400;font-style:normal}.full-height[data-v-99b81b72]{height:100%}.header[data-v-99b81b72]{font-family:"CBNUJIKJI",sans-serif!important;color:#fff;background:#013183}.body[data-v-99b81b72]{font-family:"MinSans-Medium",sans-serif!important}',""]),t.exports=o},571:function(t,e,n){"use strict";n.r(e);var o={layout:"TextLayout",data:function(){return{mainimg:"https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/video.jpg"}},computed:{language:function(){return this.$store.state.manager.language}}},r=(n(539),n(22)),l=n(31),c=n.n(l),h=n(89),d=n(549),f=n(444),v=n(422),m=n(476),w=n(550),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"full-height"},[n("div",[n("v-parallax",{attrs:{src:t.mainimg,height:"300"}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("h1",{staticClass:"text-h1 font-weight-thin mb-4"},[t._v(" DMTLABS ")]),t._v(" "),"한국어"===t.language?n("h4",{staticClass:"subheading"},[t._v("\n            DMTLABS의 영상 번역 시스템\n          ")]):"영어"===t.language?n("h4",{staticClass:"subheading"},[t._v("\n            DMTLABS Video Translation System\n          ")]):t._e()])],1)],1)],1),t._v(" "),"한국어"===t.language?n("v-container",{staticClass:"body"},[n("v-card-title",{staticClass:"font-weight-bold"},[t._v(" 디엠티랩스의 영상 번역 시스템 ")]),t._v(" "),n("v-card-text",[t._v("\n      현재 DMTLABS에서는 영상 번역에 대한 연구가 진행 중이며, "),n("br"),t._v("\n      그 전 단계로 음성 단계의 번역에 집중하고 있습니다."),n("br"),n("br"),t._v("\n\n      음성 단계의 번역 과정을 거쳐 최종적으로는 "),n("br"),t._v("\n      영상 자막 및 영상 내 이미지 번역까지 수행하는 시스템 구축을 목표로 하고 있습니다."),n("br"),n("br")])],1):"영어"===t.language?n("v-container",{staticClass:"body"},[n("v-card-title",{staticClass:"font-weight-bold"},[t._v(" DMTLABS's Video Translation System ")]),t._v(" "),n("v-card-text",[t._v("\n      Currently, DMTLABS is working on video translation, "),n("br"),t._v("\n      and as a preliminary step, it is focusing on translation at the voice stage. "),n("br"),n("br"),t._v("\n\n      The goal is to establish a system that performs video subtitles and image translation "),n("br"),t._v("\n      in the video after translation in the voice stage. "),n("br"),n("br")])],1):t._e(),t._v(" "),n("v-divider")],1)}),[],!1,null,"99b81b72",null);e.default=component.exports;c()(component,{VCardText:h.c,VCardTitle:h.d,VCol:d.a,VContainer:f.a,VDivider:v.a,VParallax:m.a,VRow:w.a})}}]);