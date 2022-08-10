import{C as w,o as r,c as d,w as n,f as a,A as s,H as g,b,t as x,g as m,a as e,L as f,n as v,D as y,e as u}from"./app.3f41b8e6.js";import{_ as C,a as k}from"./Guest.bc17261f.js";import{_ as V}from"./Checkbox.be3a41b5.js";import{_ as F,a as _,b as h}from"./ValidationErrors.4c774ea6.js";/* empty css            */const B={key:0,class:"mb-4 font-medium text-sm text-green-600"},H=["onSubmit"],S={class:"mb-5"},$=["href"],z=e("svg",{class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"48px",height:"48px"},[e("path",{fill:"#FFC107",d:"M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"}),e("path",{fill:"#FF3D00",d:"M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"}),e("path",{fill:"#4CAF50",d:"M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"}),e("path",{fill:"#1976D2",d:"M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"})],-1),D=e("span",{class:"ml-2"},"Sign up with Google",-1),L=[z,D],M=e("div",{class:"relative mb-4"},[e("div",{class:"absolute inset-0 flex items-center","aria-hidden":"true"},[e("div",{class:"w-full border-t border-gray-300"})]),e("div",{class:"relative flex justify-center"},[e("span",{class:"px-2 bg-white text-sm text-gray-500"}," OR ")])],-1),R={class:"mt-4"},N=u(" Forgot your password? "),P={class:"block mt-4"},q={class:"flex items-center"},U=e("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),j={class:"mt-4"},A=u(" Log in "),E={class:"text-center mt-6"},G=e("span",{class:"underline"},"Don't have an account?",-1),O=u(),T=e("span",{class:"text-indigo-600 ml-2"},"Sign up",-1),X={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(i){const t=w({email:"",password:"",remember:!1}),p=()=>{t.post(route("login"),{onFinish:()=>t.reset("password")})};return(c,o)=>(r(),d(C,null,{default:n(()=>[a(s(g),{title:"Log in"}),a(F,{class:"mb-4"}),i.status?(r(),b("div",B,x(i.status),1)):m("",!0),e("form",{onSubmit:y(p,["prevent"])},[e("div",S,[e("a",{href:c.route("auth.google"),class:"btn-outline items-center w-full inline-flex"},L,8,$)]),M,e("div",null,[a(_,{for:"email",value:"Email"}),a(h,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(t).email,"onUpdate:modelValue":o[0]||(o[0]=l=>s(t).email=l),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"])]),e("div",R,[a(_,{for:"password",value:"Password"}),a(h,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(t).password,"onUpdate:modelValue":o[1]||(o[1]=l=>s(t).password=l),required:"",autocomplete:"current-password"},null,8,["modelValue"]),i.canResetPassword?(r(),d(s(f),{key:0,href:c.route("password.request"),class:"mt-2 inline-flex text-sm text-gray-600 hover:text-gray-900"},{default:n(()=>[N]),_:1},8,["href"])):m("",!0)]),e("div",P,[e("label",q,[a(V,{name:"remember",checked:s(t).remember,"onUpdate:checked":o[2]||(o[2]=l=>s(t).remember=l)},null,8,["checked"]),U])]),e("div",j,[a(k,{class:v(["btn-primary w-full justify-center py-3",{"opacity-25":s(t).processing}]),disabled:s(t).processing},{default:n(()=>[A]),_:1},8,["class","disabled"])]),e("div",E,[i.canResetPassword?(r(),d(s(f),{key:0,href:c.route("register"),class:"inline-flex font-medium text-gray-600 hover:text-gray-900"},{default:n(()=>[G,O,T]),_:1},8,["href"])):m("",!0)])],40,H)]),_:1}))}};export{X as default};