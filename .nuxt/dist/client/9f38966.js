(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{565:function(e,t,l){var content=l(641);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(10).default)("7f50de46",content,!0,{sourceMap:!1})},640:function(e,t,l){"use strict";l(565)},641:function(e,t,l){var r=l(9)(!1);r.push([e.i,".card[data-v-00ec9f43]{width:100%;height:80vh}.card__title[data-v-00ec9f43]{background:#013183;padding:25px;font-size:1.25rem;color:#fff}.card__subtitle[data-v-00ec9f43]{padding:10px;border-top:1px solid #013183;border-bottom:1px solid #013183}.text__box[data-v-00ec9f43]{width:100%;height:100%}.text__policy[data-v-00ec9f43]{width:100%;max-height:calc(50% - 44px);padding:20px}",""]),e.exports=r},678:function(e,t,l){"use strict";l.r(t);var r=l(472),o=l(192),n=l(68),c=l(685),d=l(493),v=l(485),m=l(486),_=l(481),f=l(469),w=l(6),x=(l(44),l(269)),k=l(270),h={layout:"SignupLayout",components:{Term:x.a,Policy:k.a},head:function(){return{title:"회원가입"}},data:function(){var e=this;return{dialog:!1,policy:!1,errorMessage:!1,valid:!1,nickname:"",email:"",password:"",passwordCheck:"",terms:!1,emailRules:[function(e){return!!e||"이메일을 입력해주세요."},function(e){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)||"이메일이 유효하지 않습니다."}],nicknameRules:[function(e){return!!e||"이름을 입력해주세요."}],passwordRules:[function(e){return!!e||"비밀번호를 입력해주세요."}],passwordCheckRules:[function(e){return!!e||"비밀번호가 일치하지 않습니다."},function(t){return t===e.password||"비밀번호가 일치하지 않습니다."}],e_emailRules:[function(e){return!!e||"Please input your e-mail."},function(e){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)||"E-mail is invalid."}],e_nicknameRules:[function(e){return!!e||"Please input your name."}],e_passwordRules:[function(e){return!!e||"Please input your password."}],e_passwordCheckRules:[function(e){return!!e||"Password is not matched."},function(t){return t===e.password||"Password is not matched."}]}},computed:{language:function(){return this.$store.state.manager.language}},methods:{onSubmitForm:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){var l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e.$refs.form.validate()){t.next=6;break}return t.next=4,e.$store.dispatch("users/signUp",{email:e.email,password:e.password,nickname:e.nickname});case 4:201===(l=t.sent).status?e.$router.push({path:"/text/textmain"}):202===l.status&&(e.dialog=!0,e.errorMessage=l.data.message);case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("에러"+t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},onPolicy:function(){this.terms?this.terms=!1:this.policy=!0},agree:function(){this.terms=!0,this.policy=!1}}},y=(l(640),l(16)),component=Object(y.a)(h,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",["한국어"===e.language?l(d.a,[l(o.a,[l(d.a,[l(m.a,{ref:"form",on:{submit:function(t){return t.preventDefault(),e.onSubmitForm.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[l(f.a,{attrs:{label:"이름",type:"text",rules:e.nicknameRules},model:{value:e.nickname,callback:function(t){e.nickname=t},expression:"nickname"}}),e._v(" "),l(f.a,{attrs:{label:"이메일",type:"email",rules:e.emailRules},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),l(f.a,{attrs:{label:"사용할 비밀번호",type:"password",rules:e.passwordRules},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),l(f.a,{attrs:{label:"비밀번호 확인",type:"password",rules:e.passwordCheckRules},model:{value:e.passwordCheck,callback:function(t){e.passwordCheck=t},expression:"passwordCheck"}}),e._v(" "),l(c.a,{attrs:{required:"",readonly:"",label:"가입 약관",rules:[function(e){return!!e||"약관 동의는 필수입니다."}]},on:{click:e.onPolicy},model:{value:e.terms,callback:function(t){e.terms=t},expression:"terms"}}),e._v(" "),l(v.a,{attrs:{"max-width":"80%"},model:{value:e.policy,callback:function(t){e.policy=t},expression:"policy"}},[l(o.a,{staticClass:"card d-flex flex-column"},[l("div",{staticClass:"card__title"},[e._v("\n                가입 약관\n              ")]),e._v(" "),l("div",{staticClass:"text__box overflow-auto"},[l("div",{staticClass:"card__subtitle"},[e._v("이용약관")]),e._v(" "),l("div",{staticClass:"text__policy overflow-y-auto"},[l("Term")],1),e._v(" "),l("div",{staticClass:"card__subtitle"},[e._v("개인정보처리방침")]),e._v(" "),l("div",{staticClass:"text__policy overflow-y-auto"},[l("Policy")],1)]),e._v(" "),l(r.a,{attrs:{color:"success"},on:{click:e.agree}},[e._v("동의합니다")])],1)],1),e._v(" "),l(r.a,{attrs:{type:"submit",color:"success"}},[e._v("가입하기")]),e._v(" "),l(v.a,{attrs:{persistent:"","max-width":"300"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[l(o.a,[l(n.d,{staticClass:"text-h5"},[e._v("회원가입 오류")]),e._v(" "),l(n.c,[e._v(e._s(e.errorMessage))]),e._v(" "),l(n.a,[l(_.a),e._v(" "),l(r.a,{attrs:{text:""},on:{click:function(t){e.dialog=!1}}},[e._v("닫기")])],1)],1)],1)],1)],1)],1)],1):"영어"===e.language?l(d.a,[l(o.a,[l(d.a,[l(m.a,{ref:"form",on:{submit:function(t){return t.preventDefault(),e.onSubmitForm.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[l(f.a,{attrs:{label:"Name",type:"text",rules:e.e_nicknameRules},model:{value:e.nickname,callback:function(t){e.nickname=t},expression:"nickname"}}),e._v(" "),l(f.a,{attrs:{label:"E-mail",type:"email",rules:e.e_emailRules},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),l(f.a,{attrs:{label:"Password",type:"password",rules:e.e_passwordRules},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),l(f.a,{attrs:{label:"Password Check",type:"password",rules:e.e_passwordCheckRules},model:{value:e.passwordCheck,callback:function(t){e.passwordCheck=t},expression:"passwordCheck"}}),e._v(" "),l(c.a,{attrs:{required:"",readonly:"",label:"Signup Terms",rules:[function(e){return!!e||"It is essential to agree to the terms and conditions."}]},on:{click:e.onPolicy},model:{value:e.terms,callback:function(t){e.terms=t},expression:"terms"}}),e._v(" "),l(v.a,{attrs:{"max-width":"80%"},model:{value:e.policy,callback:function(t){e.policy=t},expression:"policy"}},[l(o.a,{staticClass:"card d-flex flex-column"},[l("div",{staticClass:"card__title"},[e._v("\n                Signup Terms\n              ")]),e._v(" "),l("div",{staticClass:"text__box overflow-auto"},[l("div",{staticClass:"card__subtitle"},[e._v("Terms")]),e._v(" "),l("div",{staticClass:"text__policy overflow-y-auto"},[l("Term")],1),e._v(" "),l("div",{staticClass:"card__subtitle"},[e._v("Privacy Policy")]),e._v(" "),l("div",{staticClass:"text__policy overflow-y-auto"},[l("Policy")],1)]),e._v(" "),l(r.a,{attrs:{color:"success"},on:{click:e.agree}},[e._v("Agree")])],1)],1),e._v(" "),l(r.a,{attrs:{type:"submit",color:"success"}},[e._v("SignUp")]),e._v(" "),l(v.a,{attrs:{persistent:"","max-width":"300"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[l(o.a,[l(n.d,{staticClass:"text-h5"},[e._v("SignUp Error")]),e._v(" "),l(n.c,[e._v(e._s(e.errorMessage))]),e._v(" "),l(n.a,[l(_.a),e._v(" "),l(r.a,{attrs:{text:""},on:{click:function(t){e.dialog=!1}}},[e._v("Close")])],1)],1)],1)],1)],1)],1)],1):e._e()],1)}),[],!1,null,"00ec9f43",null);t.default=component.exports}}]);