(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{505:function(t,e,n){var content=n(537);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("7bae2f64",content,!0,{sourceMap:!1})},536:function(t,e,n){"use strict";n(505)},537:function(t,e,n){var r=n(10)(!1);r.push([t.i,".main__template[data-v-80e46b5e],.test__box[data-v-80e46b5e]{width:100%;height:100%}.test__box[data-v-80e46b5e]{display:flex;flex-direction:column}.test__up[data-v-80e46b5e]{margin:0 50px}.test__down[data-v-80e46b5e]{margin:15px 50px}.output[data-v-80e46b5e],.test__down[data-v-80e46b5e]{display:flex;align-items:center;justify-content:center}.output[data-v-80e46b5e]{border:1px solid #000;margin:0 50px;padding:25px}",""]),t.exports=r},607:function(t,e,n){"use strict";n.r(e);var r=n(455),o=n(504),c=n(188),l=n(535),d=(n(23),n(7)),h=(n(43),{layout:"TestLayout",data:function(){return{readToExtract:!1}},computed:{watchFileText:function(){return this.$store.state.test.fileText}},watch:{readToExtract:function(t){var e=this;return Object(d.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!t){n.next=5;break}return n.next=4,e.$store.dispatch("test/extract");case 4:e.readToExtract=!1;case 5:n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()}},methods:{onChange:function(t){var e=this;return Object(d.a)(regeneratorRuntime.mark((function n(){var r,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=new FormData,null==t){n.next=26;break}return n.prev=2,r.append("fileKey",t),n.next=6,e.$store.dispatch("test/signedURL",r);case 6:return o=n.sent,e.$nuxt.$loading.start(),n.next=10,fetch(new Request(o,{method:"PUT",headers:{"Content-Type":"application/octest-stream","Content-Disposition":"attachment; filename=".concat(encodeURI(t.name))},body:t}));case 10:if(c=n.sent,e.$nuxt.$loading.finish(),200!==c.status){n.next=16;break}e.readToExtract=!0,n.next=19;break;case 16:return console.log("Upload Error"),e.readToExtract=!1,n.abrupt("return");case 19:n.next=24;break;case 21:n.prev=21,n.t0=n.catch(2),console.log(n.t0);case 24:n.next=27;break;case 26:console.log("e is null");case 27:case"end":return n.stop()}}),n,null,[[2,21]])})))()},onClearFile:function(){this.$store.dispatch("test/deleteFile"),this.readToExtract=!1}}}),f=(n(536),n(22)),component=Object(f.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"test__box"},[e("h1",[t._v("이곳은 테크니컬 테스트 페이지입니다.")]),t._v(" "),e("div",{staticClass:"test__up"},[e(o.a,{attrs:{label:"파일 업로드 테스트"},on:{change:function(e){return t.onChange(e)},"click:clear":t.onClearFile}})],1),t._v(" "),e("div",{staticClass:"test__down"},[e(r.a,{attrs:{block:"",href:null!=this.$store.state.test.file?"http://localhost:3085/test/file/download/".concat(this.$store.state.test.file.name):"",disabled:null==this.$store.state.test.file}},[t._v("\n      다운로드\n      "),e(c.a,{attrs:{right:""}},[t._v("mdi-file")])],1)],1),t._v(" "),e("div",{staticClass:"output"},[e(l.a,{attrs:{"background-color":"grey lighten-2",color:"black",rows:"25","row-height":"25",outlined:"","hide-details":"",readonly:""},model:{value:t.watchFileText,callback:function(e){t.watchFileText=e},expression:"watchFileText"}})],1)])}),[],!1,null,"80e46b5e",null);e.default=component.exports}}]);