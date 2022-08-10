import{m as b,G as v,I as x,A as t,o as n,b as g,J as y,C as k,c as m,w as c,f as l,H as C,t as V,g as u,a as e,L as h,n as F,D as B,e as f}from"./app.57f9e3ba.js";import{_ as S,a as $}from"./Guest.f639de15.js";import{_ as D,a as p,b as _}from"./ValidationErrors.0ed8ca67.js";/* empty css            */const H=["value"],M={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{default:null}},emits:["update:checked"],setup(i,{emit:s}){const d=i,r=b({get(){return d.checked},set(a){s("update:checked",a)}});return(a,o)=>v((n(),g("input",{type:"checkbox",value:i.value,"onUpdate:modelValue":o[0]||(o[0]=w=>y(r)?r.value=w:null),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"},null,8,H)),[[x,t(r)]])}},R={key:0,class:"mb-4 font-medium text-sm text-green-600"},z=["onSubmit"],L={class:"mb-5"},N=["href"],P=e("svg",{class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"48px",height:"48px"},[e("path",{fill:"#FFC107",d:"M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"}),e("path",{fill:"#FF3D00",d:"M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"}),e("path",{fill:"#4CAF50",d:"M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"}),e("path",{fill:"#1976D2",d:"M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"})],-1),U=e("span",{class:"ml-2"},"Sign in with Google",-1),q=[P,U],A=e("div",{class:"relative mb-4"},[e("div",{class:"absolute inset-0 flex items-center","aria-hidden":"true"},[e("div",{class:"w-full border-t border-gray-300"})]),e("div",{class:"relative flex justify-center"},[e("span",{class:"px-2 bg-white text-sm text-gray-500"}," OR ")])],-1),j={class:"mt-4"},E=f(" Forgot your password? "),G={class:"block mt-4"},I={class:"flex items-center"},J=e("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),O={class:"mt-4"},T=f(" Log in "),K={class:"text-center mt-6"},Q=e("span",{class:"underline"},"Don't have an account?",-1),W=f(),X=e("span",{class:"text-indigo-600 ml-2"},"Sign up",-1),te={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(i){const s=k({email:"",password:"",remember:!1}),d=()=>{s.post(route("login"),{onFinish:()=>s.reset("password")})};return(r,a)=>(n(),m(S,null,{default:c(()=>[l(t(C),{title:"Sign in"}),l(D,{class:"mb-4"}),i.status?(n(),g("div",R,V(i.status),1)):u("",!0),e("form",{onSubmit:B(d,["prevent"])},[e("div",L,[e("a",{href:r.route("auth.google"),class:"btn-outline items-center w-full inline-flex"},q,8,N)]),A,e("div",null,[l(p,{for:"email",value:"Email"}),l(_,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:t(s).email,"onUpdate:modelValue":a[0]||(a[0]=o=>t(s).email=o),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"])]),e("div",j,[l(p,{for:"password",value:"Password"}),l(_,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:t(s).password,"onUpdate:modelValue":a[1]||(a[1]=o=>t(s).password=o),required:"",autocomplete:"current-password"},null,8,["modelValue"]),i.canResetPassword?(n(),m(t(h),{key:0,href:r.route("password.request"),class:"mt-2 inline-flex text-sm text-gray-600 hover:text-gray-900"},{default:c(()=>[E]),_:1},8,["href"])):u("",!0)]),e("div",G,[e("label",I,[l(M,{name:"remember",checked:t(s).remember,"onUpdate:checked":a[2]||(a[2]=o=>t(s).remember=o)},null,8,["checked"]),J])]),e("div",O,[l($,{class:F(["btn-primary w-full justify-center py-3",{"opacity-25":t(s).processing}]),disabled:t(s).processing},{default:c(()=>[T]),_:1},8,["class","disabled"])]),e("div",K,[i.canResetPassword?(n(),m(t(h),{key:0,href:r.route("register"),class:"inline-flex font-medium text-gray-600 hover:text-gray-900"},{default:c(()=>[Q,W,X]),_:1},8,["href"])):u("",!0)])],40,z)]),_:1}))}};export{te as default};
