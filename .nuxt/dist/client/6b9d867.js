(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{479:function(t,e,n){"use strict";var strong=n(481),r=n(480),o="Map";t.exports=n(482)(o,(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=strong.getEntry(r(this,o),t);return e&&e.v},set:function(t,e){return strong.def(r(this,o),0===t?0:t,e)}},strong,!0)},480:function(t,e,n){var r=n(39);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},481:function(t,e,n){"use strict";var r=n(51).f,o=n(127),l=n(281),c=n(83),f=n(279),d=n(280),h=n(203),v=n(282),y=n(204),_=n(41),m=n(200).fastKey,w=n(480),O=_?"_s":"size",j=function(t,e){var n,r=m(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,h){var v=t((function(t,r){f(t,v,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[O]=0,null!=r&&d(r,n,t[h],t)}));return l(v.prototype,{clear:function(){for(var t=w(this,e),data=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete data[n.i];t._f=t._l=void 0,t[O]=0},delete:function(t){var n=w(this,e),r=j(n,t);if(r){var o=r.n,l=r.p;delete n._i[r.i],r.r=!0,l&&(l.n=o),o&&(o.p=l),n._f==r&&(n._f=o),n._l==r&&(n._l=l),n[O]--}return!!r},forEach:function(t){w(this,e);for(var n,r=c(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!j(w(this,e),t)}}),_&&r(v.prototype,"size",{get:function(){return w(this,e)[O]}}),v},def:function(t,e,n){var r,o,l=j(t,e);return l?l.v=n:(t._l=l={i:o=m(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=l),r&&(r.n=l),t[O]++,"F"!==o&&(t._i[o]=l)),t},getEntry:j,setStrong:function(t,e,n){h(t,e,(function(t,n){this._t=w(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this,e=t._k,n=t._l;n&&n.r;)n=n.p;return t._t&&(t._l=n=n?n.n:t._t._f)?v(0,"keys"==e?n.k:"values"==e?n.v:[n.k,n.v]):(t._t=void 0,v(1))}),n?"entries":"values",!n,!0),y(e)}}},482:function(t,e,n){"use strict";var r=n(29),o=n(21),l=n(56),c=n(281),meta=n(200),f=n(280),d=n(279),h=n(39),v=n(33),y=n(202),_=n(126),m=n(205);t.exports=function(t,e,n,w,O,j){var x=r[t],S=x,C=O?"set":"add",D=S&&S.prototype,T={},E=function(t){var e=D[t];l(D,t,"delete"==t||"has"==t?function(a){return!(j&&!h(a))&&e.call(this,0===a?0:a)}:"get"==t?function(a){return j&&!h(a)?void 0:e.call(this,0===a?0:a)}:"add"==t?function(a){return e.call(this,0===a?0:a),this}:function(a,b){return e.call(this,0===a?0:a,b),this})};if("function"==typeof S&&(j||D.forEach&&!v((function(){(new S).entries().next()})))){var B=new S,k=B[C](j?{}:-0,1)!=B,M=v((function(){B.has(1)})),P=y((function(t){new S(t)})),L=!j&&v((function(){for(var t=new S,e=5;e--;)t[C](e,e);return!t.has(-0)}));P||((S=e((function(e,n){d(e,S,t);var r=m(new x,e,S);return null!=n&&f(n,O,r[C],r),r}))).prototype=D,D.constructor=S),(M||L)&&(E("delete"),E("has"),O&&E("get")),(L||k)&&E(C),j&&D.clear&&delete D.clear}else S=w.getConstructor(e,t,O,C),c(S.prototype,n),meta.NEED=!0;return _(S,t),T[t]=S,o(o.G+o.W+o.F*(S!=x),T),j||w.setStrong(S,t,O),S}},497:function(t,e,n){"use strict";var r=n(1),o=(n(49),n(28),n(12),n(59),n(479),n(37),n(22),n(32),n(8),n(11),n(13),n(14),n(278),n(2)),l=n(62),c=n(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],v=["start","end","center"];function y(t,e){return h.reduce((function(n,r){return n[t+Object(c.A)(r)]=e(),n}),{})}var _=function(t){return[].concat(v,["baseline","stretch"]).includes(t)},m=y("align",(function(){return{type:String,default:null,validator:_}})),w=function(t){return[].concat(v,["space-between","space-around"]).includes(t)},O=y("justify",(function(){return{type:String,default:null,validator:w}})),j=function(t){return[].concat(v,["space-between","space-around","stretch"]).includes(t)},x=y("alignContent",(function(){return{type:String,default:null,validator:j}})),S={align:Object.keys(m),justify:Object.keys(O),alignContent:Object.keys(x)},C={align:"align",justify:"justify",alignContent:"align-content"};function D(t,e,n){var r=C[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var T=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:_}},m),{},{justify:{type:String,default:null,validator:w}},O),{},{alignContent:{type:String,default:null,validator:j}},x),render:function(t,e){var n=e.props,data=e.data,o=e.children,c="";for(var f in n)c+=String(n[f]);var d=T.get(c);return d||function(){var t,e;for(e in d=[],S)S[e].forEach((function(t){var r=n[t],o=D(e,t,r);o&&d.push(o)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),T.set(c,d)}(),t(n.tag,Object(l.a)(data,{staticClass:"row",class:d}),o)}})},498:function(t,e,n){"use strict";n(8),n(11),n(13),n(14);var r=n(1),o=(n(17),n(12),n(59),n(479),n(37),n(22),n(32),n(28),n(63),n(278),n(2)),l=n(62),c=n(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],v=h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=h.reduce((function(t,e){return t["offset"+Object(c.A)(e)]={type:[String,Number],default:null},t}),{}),_=h.reduce((function(t,e){return t["order"+Object(c.A)(e)]={type:[String,Number],default:null},t}),{}),m={col:Object.keys(v),offset:Object.keys(y),order:Object.keys(_)};function w(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var O=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},_),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,c=(e.parent,"");for(var f in n)c+=String(n[f]);var d=O.get(c);return d||function(){var t,e;for(e in d=[],m)m[e].forEach((function(t){var r=n[t],o=w(e,t,r);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),O.set(c,d)}(),t(n.tag,Object(l.a)(data,{class:d}),o)}})},504:function(t,e,n){var content=n(505);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("0cd63bd9",content,!0,{sourceMap:!1})},505:function(t,e,n){var r=n(9)(!1);r.push([t.i,".v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;transform:translate(-50%);will-change:transform;transition:opacity .3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:flex;flex-direction:column;justify-content:center;padding:0 1rem}",""]),t.exports=r},533:function(t,e,n){var content=n(575);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("7252155a",content,!0,{sourceMap:!1})},546:function(t,e,n){"use strict";n(17),n(504);var r=n(2).a.extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}}),o=n(5),l=Object(o.a)(r);e.a=l.extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, ".concat(this.parallax,"px)")}}},mounted:function(){this.init()},methods:{init:function(){var t=this,img=this.$refs.img;img&&(img.complete?(this.translate(),this.listeners()):img.addEventListener("load",(function(){t.translate(),t.listeners()}),!1),this.isBooted=!0)},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e=t("div",{staticClass:"v-parallax__image-container"},[t("img",{staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"})]),content=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:"".concat(this.height,"px")},on:this.$listeners},[e,content])}})},574:function(t,e,n){"use strict";n(533)},575:function(t,e,n){var r=n(9)(!1);r.push([t.i,'.full-height[data-v-411e82b0]{height:100%}.body[data-v-411e82b0]{font-family:"MinSans-Medium",sans-serif!important}@media screen and (max-width:500px){.main__title[data-v-411e82b0]{font-size:3.5rem!important}}',""]),t.exports=r},648:function(t,e,n){"use strict";n.r(e);var r=n(69),o=n(498),l=n(473),c=n(462),f=n(546),d=n(497),h={layout:"TextLayout",data:function(){return{mainimg:"https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/text.jpg"}},computed:{language:function(){return this.$store.state.manager.language}}},v=(n(574),n(18)),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(l.a,{staticClass:"full-height"},[n("div",[n(f.a,{attrs:{src:t.mainimg,height:"300"}},[n(d.a,{attrs:{align:"center",justify:"center"}},[n(o.a,{staticClass:"text-center",attrs:{cols:"12"}},[n("h1",{staticClass:"main__title text-h1 font-weight-thin mb-4"},[t._v(" DMTLABS ")]),t._v(" "),"한국어"===t.language?n("h4",{staticClass:"subheading"},[t._v("\n            DMTLABS의 텍스트 번역 시스템\n          ")]):"영어"===t.language?n("h4",{staticClass:"subheading"},[t._v("\n            DMTLABS Text Translation System\n          ")]):t._e()])],1)],1)],1),t._v(" "),"한국어"===t.language?n(l.a,{staticClass:"body"},[n(r.d,{staticClass:"font-weight-bold"},[t._v(" 디엠티랩스의 텍스트 번역 시스템 ")]),t._v(" "),n(r.c,[t._v("\n      DMTLABS에서는 언어와 데이터를 수집하여 구축한 다국어 번역 시스템을 통해 "),n("br"),t._v("\n      문서에 대한 번역 및 번역 의뢰 서비스를 운영하고 있습니다. "),n("br"),n("br"),t._v("\n\n      특히 한중 번역에 대해서는 전문분야 DB 구축을 기반으로 한 번역시스템으로"),n("br"),t._v("\n      높은 정확도의 번역을 기대할 수 있겠습니다."),n("br"),n("br")]),t._v(" "),n(c.a),t._v(" "),n(r.d,{staticClass:"font-weight-bold"},[t._v(" 디엠티랩스의 의뢰 플랫폼 ")]),t._v(" "),n(r.c,[t._v("\n      현재, DMTTRAN 플랫폼을 통해 타 플랫폼과 다른 저렴하고 정확한 번역 의뢰를"),n("br"),t._v("\n      서비스하려고 노력하고 있으며, 차별점으로 저렴한 가격과 AI 번역 시스템을 내세우고 있습니다."),n("br"),n("br"),t._v("\n\n      해당 플랫폼을 통해 보다 대중적으로 번역에 대한 서비스를 제공하는 할 것이며,"),n("br"),t._v("\n      특히 번역 서비스를 누리지 못한 젊은층의 대중들에게 서비스를 제공할 수 있도록 할 예정입니다."),n("br"),n("br"),t._v("\n\n      또한, 텍스트 번역에만 그치지 않고 이미지 속 텍스트를 번역하는 단계까지 개발 중에 있습니다."),n("br")])],1):"영어"===t.language?n(l.a,{staticClass:"body"},[n(r.d,{staticClass:"font-weight-bold"},[t._v(" DMTLABS's Text Translation System ")]),t._v(" "),n(r.c,[t._v("\n      DMTLABS operates a translation and translation request service for documents "),n("br"),t._v("\n      through a multilingual translation system built by collecting language and data. "),n("br"),n("br"),t._v("\n\n      Especially for Korean-Chinese translation, we can expect high-accuracy translation"),n("br"),t._v("\n      with a translation system based on DB construction in specialized fields."),n("br"),n("br")]),t._v(" "),n(c.a),t._v(" "),n(r.d,{staticClass:"font-weight-bold"},[t._v(" DMTLABS's Request Platform ")]),t._v(" "),n(r.c,[t._v("\n      Currently, we are trying to provide inexpensive and accurate translation requests that are different from other platforms through the DMTTRAN platform,"),n("br"),t._v("\n      and we are offering a low price and AI translation system as a difference."),n("br"),n("br"),t._v("\n\n      We will provide more public translation services through the platform, "),n("br"),t._v("\n      especially for young people who do not enjoy translation services."),n("br"),n("br"),t._v("\n\n      In addition, we are developing not only the text translation"),n("br"),t._v("\n      but also the process of translating text in image."),n("br"),n("br")])],1):t._e()],1)}),[],!1,null,"411e82b0",null);e.default=component.exports}}]);