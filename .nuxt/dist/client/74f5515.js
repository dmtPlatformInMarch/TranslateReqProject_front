(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{483:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(11),n(12),n(81);var r=n(2);function o(t){return r.a.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,n){var r=n.props,data=n.data,o=n.children;data.staticClass="".concat(t," ").concat(data.staticClass||"").trim();var l=data.attrs;if(l){data.attrs={};var c=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));c.length&&(data.staticClass+=" ".concat(c.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),e(r.tag,data,o)}})}},487:function(t,e,n){"use strict";n(11),n(12),n(81),n(279),n(484);var r=n(483),o=n(82);e.a=Object(r.a)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,data=e.data,l=e.children,c=data.attrs;return c&&(data.attrs={},n=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(o.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),l)}})},506:function(t,e,n){var content=n(507);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("0cd63bd9",content,!0,{sourceMap:!1})},507:function(t,e,n){var r=n(9)(!1);r.push([t.i,".v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;transform:translate(-50%);will-change:transform;transition:opacity .3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:flex;flex-direction:column;justify-content:center;padding:0 1rem}",""]),t.exports=r},555:function(t,e,n){var content=n(632);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("c7395148",content,!0,{sourceMap:!1})},562:function(t,e,n){"use strict";n(18),n(506);var r=n(2).a.extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}}),o=n(5),l=Object(o.a)(r);e.a=l.extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, ".concat(this.parallax,"px)")}}},mounted:function(){this.init()},methods:{init:function(){var t=this,img=this.$refs.img;img&&(img.complete?(this.translate(),this.listeners()):img.addEventListener("load",(function(){t.translate(),t.listeners()}),!1),this.isBooted=!0)},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e=t("div",{staticClass:"v-parallax__image-container"},[t("img",{staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"})]),content=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:"".concat(this.height,"px")},on:this.$listeners},[e,content])}})},631:function(t,e,n){"use strict";n(555)},632:function(t,e,n){var r=n(9)(!1);r.push([t.i,'.full-height[data-v-d34a75d6]{height:100%}.header[data-v-d34a75d6]{font-family:"CBNUJIKJI",sans-serif!important;color:#fff;background:#013183}.body[data-v-d34a75d6]{font-family:"MinSans-Medium",sans-serif!important}',""]),t.exports=r},667:function(t,e,n){"use strict";n.r(e);var r=n(68),o=n(648),l=n(487),c=n(467),d=n(562),h=n(647),f={layout:"TextLayout",data:function(){return{mainimg:"https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/video.jpg"}},computed:{language:function(){return this.$store.state.manager.language}}},v=(n(631),n(16)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(l.a,{staticClass:"full-height"},[n("div",[n(d.a,{attrs:{src:t.mainimg,height:"300"}},[n(h.a,{attrs:{align:"center",justify:"center"}},[n(o.a,{staticClass:"text-center",attrs:{cols:"12"}},[n("h1",{staticClass:"text-h1 font-weight-thin mb-4"},[t._v(" DMTLABS ")]),t._v(" "),"한국어"===t.language?n("h4",{staticClass:"subheading"},[t._v("\n            DMTLABS의 영상 번역 시스템\n          ")]):"영어"===t.language?n("h4",{staticClass:"subheading"},[t._v("\n            DMTLABS Video Translation System\n          ")]):t._e()])],1)],1)],1),t._v(" "),"한국어"===t.language?n(l.a,{staticClass:"body"},[n(r.d,{staticClass:"font-weight-bold"},[t._v(" 디엠티랩스의 영상 번역 시스템 ")]),t._v(" "),n(r.c,[t._v("\n      현재 DMTLABS에서는 영상 번역에 대한 연구가 진행 중이며, "),n("br"),t._v("\n      그 전 단계로 음성 단계의 번역에 집중하고 있습니다."),n("br"),n("br"),t._v("\n\n      음성 단계의 번역 과정을 거쳐 최종적으로는 "),n("br"),t._v("\n      영상 자막 및 영상 내 이미지 번역까지 수행하는 시스템 구축을 목표로 하고 있습니다."),n("br"),n("br")])],1):"영어"===t.language?n(l.a,{staticClass:"body"},[n(r.d,{staticClass:"font-weight-bold"},[t._v(" DMTLABS's Video Translation System ")]),t._v(" "),n(r.c,[t._v("\n      Currently, DMTLABS is working on video translation, "),n("br"),t._v("\n      and as a preliminary step, it is focusing on translation at the voice stage. "),n("br"),n("br"),t._v("\n\n      The goal is to establish a system that performs video subtitles and image translation "),n("br"),t._v("\n      in the video after translation in the voice stage. "),n("br"),n("br")])],1):t._e(),t._v(" "),n(c.a)],1)}),[],!1,null,"d34a75d6",null);e.default=component.exports}}]);