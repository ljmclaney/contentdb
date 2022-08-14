import{C as u,o as p,c as f,w as i,f as t,A as a,H as _,a as s,n as w,L as h,D as v,e as c}from"./app.b56447b4.js";import{_ as g,a as x}from"./Guest.7e5d6bec.js";import{_ as b,a as r,b as d}from"./ValidationErrors.3c8e7037.js";/* empty css            */const C=["onSubmit"],V={class:"mb-5"},y=["href"],F=s("svg",{class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"48px",height:"48px"},[s("path",{fill:"#FFC107",d:"M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"}),s("path",{fill:"#FF3D00",d:"M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"}),s("path",{fill:"#4CAF50",d:"M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"}),s("path",{fill:"#1976D2",d:"M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"})],-1),k=s("span",{class:"ml-2"},"Sign up with Google",-1),H=[F,k],z=s("div",{class:"relative"},[s("div",{class:"absolute inset-0 flex items-center","aria-hidden":"true"},[s("div",{class:"w-full border-t border-gray-300"})]),s("div",{class:"relative flex justify-center"},[s("span",{class:"px-2 bg-white text-sm text-gray-500"}," OR ")])],-1),M={class:"mt-4"},$={class:"mt-4"},B={class:"mt-4"},S={class:"flex items-center justify-end mt-4"},j=c(" Register "),q={class:"text-center mt-6"},A=c(" Already registered? "),P={__name:"Register",setup(D){const e=u({name:"",email:"",password:"",password_confirmation:"",terms:!1}),m=()=>{e.post(route("register"),{onFinish:()=>e.reset("password","password_confirmation")})};return(n,o)=>(p(),f(g,null,{default:i(()=>[t(a(_),{title:"Sign up"}),t(b,{class:"mb-4"}),s("form",{onSubmit:v(m,["prevent"])},[s("div",V,[s("a",{href:n.route("auth.google"),class:"btn-outline items-center w-full inline-flex"},H,8,y)]),z,s("div",M,[t(r,{for:"email",value:"Email"}),t(d,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:a(e).email,"onUpdate:modelValue":o[0]||(o[0]=l=>a(e).email=l),required:"",autocomplete:"username"},null,8,["modelValue"])]),s("div",$,[t(r,{for:"password",value:"Password"}),t(d,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:a(e).password,"onUpdate:modelValue":o[1]||(o[1]=l=>a(e).password=l),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),s("div",B,[t(r,{for:"password_confirmation",value:"Confirm Password"}),t(d,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:a(e).password_confirmation,"onUpdate:modelValue":o[2]||(o[2]=l=>a(e).password_confirmation=l),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),s("div",S,[t(x,{class:w(["flex w-full justify-center py-3",{"opacity-25":a(e).processing}]),disabled:a(e).processing},{default:i(()=>[j]),_:1},8,["class","disabled"])]),s("div",q,[t(a(h),{href:n.route("login"),class:"underline text-gray-600 hover:text-gray-900"},{default:i(()=>[A]),_:1},8,["href"])])],40,C)]),_:1}))}};export{P as default};
