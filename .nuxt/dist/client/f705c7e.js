(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{531:function(t,e,n){var content=n(567);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("54ab4ea0",content,!0,{sourceMap:!1})},532:function(t,e,n){var content=n(571);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("7f0a4418",content,!0,{sourceMap:!1})},566:function(t,e,n){"use strict";n(531)},567:function(t,e,n){var o=n(9)(!1);o.push([t.i,"p[data-v-3e520e0b]{padding:5px;margin-bottom:0!important}.main[data-v-3e520e0b]{position:relative;text-align:center;border:1px solid red;margin:15px 0}.box[data-v-3e520e0b]{width:80%;display:flex;justify-content:space-around}.clear[data-v-3e520e0b]{position:absolute;right:0}",""]),t.exports=o},570:function(t,e,n){"use strict";n(532)},571:function(t,e,n){var o=n(9)(!1);o.push([t.i,".main[data-v-d28f8dee]{display:flex;align-items:center;justify-content:center}.inner[data-v-d28f8dee]{padding:100px;width:80%;height:100%}",""]),t.exports=o},645:function(t,e,n){"use strict";n.r(e);var o=n(463),r=n(6),l=(n(45),n(30),n(189)),d=(n(17),{props:{idx:{type:Number},text:{type:String},addText:{type:String},plus:{default:!1}},data:function(){return{}},methods:{addComponent:function(){this.$nuxt.$emit("addComponent")},removeComponent:function(){this.$nuxt.$emit("removeComponent",this.idx)}}}),c=(n(566),n(18)),h=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[t.plus?n("div",[n(o.a,{attrs:{icon:""},on:{click:t.addComponent}},[n(l.a,[t._v("\n                mdi-plus\n            ")])],1)],1):n("div",{staticClass:"box"},[n("div",[n("p",[t._v("\n                "+t._s(t.idx)+"\n            ")])]),t._v(" "),n("div",[n("p",[t._v("\n                "+t._s(t.text)+"\n            ")])]),t._v(" "),n("div",[n("p",[t._v("\n                "+t._s(t.addText)+"\n            ")])]),t._v(" "),n(o.a,{staticClass:"clear",attrs:{icon:""},on:{click:t.removeComponent}},[n(l.a,[t._v("\n                mdi-close\n            ")])],1)],1)])}),[],!1,null,"3e520e0b",null).exports,f=n(568),m=n.n(f),v=n(118),x=n.n(v),y={layout:"TestLayout",components:{TestComponent:h,draggable:m.a},created:function(){var t=this;this.$nuxt.$on("addComponent",(function(){t.list.push({text:"추가하는 컴포넌트",trans:""})})),this.$nuxt.$on("removeComponent",(function(e){t.list.splice(e,1)}))},data:function(){return{list:[{text:"yet still going strong",trans:""},{text:"and if i remember these furry folks are taken advantage of a good weather to make sure there are state of the art security system is ready",trans:""},{text:"what are they all looking at a now i see",trans:""},{text:"looks like a new families moved in down the block and they're kind of a little well different",trans:""},{text:"which is an a bad thing of course but the citizens of dog towns still seemed to be feeling a little doubtful about their new neighbours",trans:""},{text:"these are burrowing ells and this is what burrowing ells do they move into burrows other animals have abandoned",trans:""},{text:"and since the average prary dog ways nearly eight times what one of those little oll guys does the owls don't pose any danger",trans:""},{text:"but badgers yeah definitely danger",trans:""},{text:"prery dog is one of a badger's favorite snacks and even though they'll defend their town to the death",trans:""},{text:"prery dogs are no match for him",trans:""},{text:"but way what's this let in that a little ou go give it you",trans:""},{text:"well seems like the little alls of really earned their place and dog town how many towns do you know with their own all air force",trans:""},{text:"it's definitely time to crank the party up a note",trans:""}],translist:[]}},methods:{addTT:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,i,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],i=0;case 2:if(!(i<t.list.length)){e.next=11;break}return o=t.list[i].text,e.next=6,x()({method:"post",url:"https://dmtcloud.kr/translate-text",data:{from:"en",to:"zh-CN",text:o}});case 6:200===(r=e.sent).status&&n.push(r.data[0].translations);case 8:i++,e.next=2;break;case 11:t.translist=n.slice();case 12:case"end":return e.stop()}}),e)})))()},addTrans:function(){for(var t=["번역된 결과","번역된 결과","번역된 결과","번역된 결과","번역된 결과","번역된 결과","번역된 결과","번역된 결과","번역된 결과","번역된 결과","번역된 결과","번역된 결과","번역된 결과"],i=0;i<this.list.length;i++)this.list[i].trans=t[i]}}},w=(n(570),Object(c.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inner"},[n("div",[n(o.a,{on:{click:t.addTrans}},[t._v("\n            객체 배열의 속성값 변경\n        ")])],1),t._v(" "),n("draggable",{model:{value:t.list,callback:function(e){t.list=e},expression:"list"}},t._l(t.list,(function(t,e){return n("div",{key:e},[n("test-component",{attrs:{idx:e,text:t.text,addText:t.trans}})],1)})),0),t._v(" "),n("test-component",{attrs:{plus:!0}})],1)}),[],!1,null,"d28f8dee",null));e.default=w.exports}}]);