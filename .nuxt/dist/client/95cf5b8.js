(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{515:function(t,e,n){var content=n(516);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("6366c25c",content,!0,{sourceMap:!1})},516:function(t,e,n){var r=n(8)((function(i){return i[1]}));r.push([t.i,".v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;transform:translate(-50%);will-change:transform;transition:opacity .3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:flex;flex-direction:column;justify-content:center;padding:0 1rem}",""]),r.locals={},t.exports=r},553:function(t,e,n){var content=n(616);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("4373c267",content,!0,{sourceMap:!1})},574:function(t,e,n){"use strict";n(18),n(515);var r=n(2).a.extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}}),o=n(5),l=Object(o.a)(r);e.a=l.extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, ".concat(this.parallax,"px)")}}},mounted:function(){this.init()},methods:{init:function(){var t=this,img=this.$refs.img;img&&(img.complete?(this.translate(),this.listeners()):img.addEventListener("load",(function(){t.translate(),t.listeners()}),!1),this.isBooted=!0)},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e=t("div",{staticClass:"v-parallax__image-container"},[t("img",{staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"})]),content=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:"".concat(this.height,"px")},on:this.$listeners},[e,content])}})},615:function(t,e,n){"use strict";n(553)},616:function(t,e,n){var r=n(8)((function(i){return i[1]}));r.push([t.i,'.full-height[data-v-411e82b0]{height:100%}.body[data-v-411e82b0]{font-family:"MinSans-Medium",sans-serif!important}@media screen and (max-width:500px){.main__title[data-v-411e82b0]{font-size:3.5rem!important}}',""]),r.locals={},t.exports=r},712:function(t,e,n){"use strict";n.r(e);var r=n(70),o=n(693),l=n(502),c=n(484),h=n(574),d=n(692),f={layout:"TextLayout",data:function(){return{mainimg:"https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/text.jpg"}},computed:{language:function(){return this.$store.state.manager.language}}},v=(n(615),n(17)),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e(l.a,{staticClass:"full-height"},[e("div",[e(h.a,{attrs:{src:t.mainimg,height:"300"}},[e(d.a,{attrs:{align:"center",justify:"center"}},[e(o.a,{staticClass:"text-center",attrs:{cols:"12"}},[e("h1",{staticClass:"main__title text-h1 font-weight-thin mb-4"},[t._v(" DMTLABS ")]),t._v(" "),"한국어"===t.language?e("h4",{staticClass:"subheading"},[t._v("\n            DMTLABS의 텍스트 번역 시스템\n          ")]):"영어"===t.language?e("h4",{staticClass:"subheading"},[t._v("\n            DMTLABS Text Translation System\n          ")]):t._e()])],1)],1)],1),t._v(" "),"한국어"===t.language?e(l.a,{staticClass:"body"},[e(r.d,{staticClass:"font-weight-bold"},[t._v(" 디엠티랩스의 텍스트 번역 시스템 ")]),t._v(" "),e(r.c,[t._v("\n      DMTLABS에서는 언어와 데이터를 수집하여 구축한 다국어 번역 시스템을 통해 "),e("br"),t._v("\n      문서에 대한 번역 및 번역 의뢰 서비스를 운영하고 있습니다. "),e("br"),e("br"),t._v("\n\n      특히 한중 번역에 대해서는 전문분야 DB 구축을 기반으로 한 번역시스템으로"),e("br"),t._v("\n      높은 정확도의 번역을 기대할 수 있겠습니다."),e("br"),e("br")]),t._v(" "),e(c.a),t._v(" "),e(r.d,{staticClass:"font-weight-bold"},[t._v(" 디엠티랩스의 의뢰 플랫폼 ")]),t._v(" "),e(r.c,[t._v("\n      현재, DMTTRAN 플랫폼을 통해 타 플랫폼과 다른 저렴하고 정확한 번역 의뢰를"),e("br"),t._v("\n      서비스하려고 노력하고 있으며, 차별점으로 저렴한 가격과 AI 번역 시스템을 내세우고 있습니다."),e("br"),e("br"),t._v("\n\n      해당 플랫폼을 통해 보다 대중적으로 번역에 대한 서비스를 제공하는 할 것이며,"),e("br"),t._v("\n      특히 번역 서비스를 누리지 못한 젊은층의 대중들에게 서비스를 제공할 수 있도록 할 예정입니다."),e("br"),e("br"),t._v("\n\n      또한, 텍스트 번역에만 그치지 않고 이미지 속 텍스트를 번역하는 단계까지 개발 중에 있습니다."),e("br")])],1):"영어"===t.language?e(l.a,{staticClass:"body"},[e(r.d,{staticClass:"font-weight-bold"},[t._v(" DMTLABS's Text Translation System ")]),t._v(" "),e(r.c,[t._v("\n      DMTLABS operates a translation and translation request service for documents "),e("br"),t._v("\n      through a multilingual translation system built by collecting language and data. "),e("br"),e("br"),t._v("\n\n      Especially for Korean-Chinese translation, we can expect high-accuracy translation"),e("br"),t._v("\n      with a translation system based on DB construction in specialized fields."),e("br"),e("br")]),t._v(" "),e(c.a),t._v(" "),e(r.d,{staticClass:"font-weight-bold"},[t._v(" DMTLABS's Request Platform ")]),t._v(" "),e(r.c,[t._v("\n      Currently, we are trying to provide inexpensive and accurate translation requests that are different from other platforms through the DMTTRAN platform,"),e("br"),t._v("\n      and we are offering a low price and AI translation system as a difference."),e("br"),e("br"),t._v("\n\n      We will provide more public translation services through the platform, "),e("br"),t._v("\n      especially for young people who do not enjoy translation services."),e("br"),e("br"),t._v("\n\n      In addition, we are developing not only the text translation"),e("br"),t._v("\n      but also the process of translating text in image."),e("br"),e("br")])],1):t._e()],1)}),[],!1,null,"411e82b0",null);e.default=component.exports}}]);