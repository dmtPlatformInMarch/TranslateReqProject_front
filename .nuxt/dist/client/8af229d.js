(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{426:function(t,e,n){var content=n(427);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("0cd63bd9",content,!0,{sourceMap:!1})},427:function(t,e,n){var l=n(14)(!1);l.push([t.i,".v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;transform:translate(-50%);will-change:transform;transition:opacity .3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:flex;flex-direction:column;justify-content:center;padding:0 1rem}",""]),t.exports=l},444:function(t,e,n){"use strict";n(17),n(426);var l=n(2).a.extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}}),r=n(4),o=Object(r.a)(l);e.a=o.extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, ".concat(this.parallax,"px)")}}},mounted:function(){this.init()},methods:{init:function(){var t=this,img=this.$refs.img;img&&(img.complete?(this.translate(),this.listeners()):img.addEventListener("load",(function(){t.translate(),t.listeners()}),!1),this.isBooted=!0)},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e=t("div",{staticClass:"v-parallax__image-container"},[t("img",{staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"})]),content=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:"".concat(this.height,"px")},on:this.$listeners},[e,content])}})},551:function(t,e,n){"use strict";n.r(e);var l={layout:"Default",data:function(){return{mainimg:"https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/mainImg1.jpg",textimg:"https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/text.jpg",videoimg:"https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/video.jpg",voiceimg:"https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/voice.jpg"}},computed:{language:function(){return this.$store.state.manager.language}}},r=n(22),o=n(32),c=n.n(o),d=n(182),v=n(189),h=n(88),f=n(527),m=n(428),x=n(156),_=n(444),w=n(528),C=n(416),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("v-parallax",{attrs:{src:t.mainimg}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("h1",{staticClass:"text-h1 font-weight-thin mb-4"},[t._v("DMTLABS")]),t._v(" "),"한국어"===t.language?n("h4",{staticClass:"subheading"},[t._v("\n            DMTLABS는 다국적 번역 서비스를 제공합니다.\n          ")]):"영어"===t.language?n("h4",{staticClass:"subheading"},[t._v("\n            DMTLABS provides multinational translation services.\n          ")]):t._e()])],1)],1)],1),t._v(" "),n("v-container",{staticClass:"text-center"},[n("v-container",["한국어"===t.language?n("div",{staticClass:"text-h2 font-weight-bold"},[t._v("\n        서비스\n      ")]):"영어"===t.language?n("div",{staticClass:"text-h2 font-weight-bold"},[t._v("\n        Service\n      ")]):t._e()]),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"2"}}),t._v(" "),n("v-col",{attrs:{cols:"6"}},[n("v-card",{attrs:{color:"blue-grey lighten-4"}},[n("div",{staticClass:"d-flex flex-no-wrap align-center"},[n("v-avatar",{staticClass:"ma-3",attrs:{size:"250",tile:""}},[n("v-img",{attrs:{src:t.textimg}})],1),t._v(" "),"한국어"===t.language?n("div",{staticClass:"d-flex flex-column text-left"},[n("v-card-title",{staticClass:"text-h4 font-weight-bold"},[t._v("\n                텍스트 번역\n              ")]),t._v(" "),n("v-card-text",[t._v("\n                DMTLABS에서 제공하는 텍스트 파일 다국어 번역 서비스를\n                경험해보세요.\n              ")])],1):"영어"===t.language?n("div",{staticClass:"d-flex flex-column text-left"},[n("v-card-title",{staticClass:"text-h4 font-weight-bold"},[t._v("\n                Text Translation\n              ")]),t._v(" "),n("v-card-text",[t._v("\n                Experience the text file multilingual translation service\n                provided by DMTLABS.\n              ")])],1):t._e()],1)])],1),t._v(" "),n("v-col",{attrs:{cols:"4"}}),t._v(" "),n("v-col",{attrs:{cols:"4"}}),t._v(" "),n("v-col",{attrs:{cols:"6"}},[n("v-card",{attrs:{color:"blue-grey lighten-4"}},[n("div",{staticClass:"d-flex flex-no-wrap align-center justify-end"},["한국어"===t.language?n("div",{staticClass:"d-flex flex-column text-right"},[n("v-card-title",{staticClass:"text-h4 font-weight-bold"},[n("v-spacer"),t._v("영상 번역\n              ")],1),t._v(" "),n("v-card-text",[t._v("\n                DMTLABS에서 제공하는 영상 자막 다국어 번역 서비스를\n                경험해보세요.\n              ")])],1):"영어"===t.language?n("div",{staticClass:"d-flex flex-column text-right"},[n("v-card-title",{staticClass:"text-h4 font-weight-bold"},[n("v-spacer"),t._v("Video Translation\n              ")],1),t._v(" "),n("v-card-text",[t._v("\n                Experience the video caption multilingual translation service\n                provided by DMTLABS.\n              ")])],1):t._e(),t._v(" "),n("v-avatar",{staticClass:"ma-3",attrs:{size:"250",tile:""}},[n("v-img",{attrs:{src:t.videoimg}})],1)],1)])],1),t._v(" "),n("v-col",{attrs:{cols:"2"}}),t._v(" "),n("v-col",{attrs:{cols:"2"}}),t._v(" "),n("v-col",{attrs:{cols:"6"}},[n("v-card",{attrs:{color:"blue-grey lighten-4"}},[n("div",{staticClass:"d-flex flex-no-wrap align-center justify-start"},[n("v-avatar",{staticClass:"ma-3",attrs:{size:"250",tile:""}},[n("v-img",{attrs:{src:t.voiceimg}})],1),t._v(" "),"한국어"===t.language?n("div",{staticClass:"d-flex flex-column text-left"},[n("v-card-title",{staticClass:"text-h4 font-weight-bold"},[t._v("\n                음성 번역\n              ")]),t._v(" "),n("v-card-text",[t._v("\n                DMTLABS에서 제공하는 다국적 음성 더빙 서비스를 경험해보세요.\n              ")])],1):"영어"===t.language?n("div",{staticClass:"d-flex flex-column text-left"},[n("v-card-title",{staticClass:"text-h4 font-weight-bold"},[t._v("\n                Speech Translation\n              ")]),t._v(" "),n("v-card-text",[t._v("\n                Experience the multinational voice dubbing service provided by\n                DMTLABS.\n              ")])],1):t._e()],1)])],1),t._v(" "),n("v-col",{attrs:{cols:"4"}})],1)],1)],1)}),[],!1,null,"0bdc29fa",null);e.default=component.exports;c()(component,{VAvatar:d.a,VCard:v.a,VCardText:h.c,VCardTitle:h.d,VCol:f.a,VContainer:m.a,VImg:x.a,VParallax:_.a,VRow:w.a,VSpacer:C.a})}}]);