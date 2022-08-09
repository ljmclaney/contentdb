import{m as w,G as x,I as y,A as s,o as i,b as g,J as k,C as v,c as m,w as d,f as r,H as V,t as C,g as u,a as t,L as p,n as $,D as B,e as f}from"./app.8709c105.js";import{_ as L,a as R}from"./Guest.80f17caa.js";import{_ as S,a as _,b as h}from"./ValidationErrors.99a5818b.js";/* empty css            */const D=["value"],N={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{default:null}},emits:["update:checked"],setup(l,{emit:e}){const c=l,n=w({get(){return c.checked},set(a){e("update:checked",a)}});return(a,o)=>x((i(),g("input",{type:"checkbox",value:l.value,"onUpdate:modelValue":o[0]||(o[0]=b=>k(n)?n.value=b:null),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"},null,8,D)),[[y,s(n)]])}},P={key:0,class:"mb-4 font-medium text-sm text-green-600"},U=["onSubmit"],q={class:"mt-4"},F=f(" Forgot your password? "),A={class:"block mt-4"},E={class:"flex items-center"},H=t("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),M={class:"mt-4"},j=f(" Log in "),z={class:"text-center mt-6"},G=t("span",{class:"underline"},"Don't have an account?",-1),I=f(),J=t("span",{class:"text-indigo-600 ml-2"},"Sign up",-1),W={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const e=v({email:"",password:"",remember:!1}),c=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(n,a)=>(i(),m(L,null,{default:d(()=>[r(s(V),{title:"Log in"}),r(S,{class:"mb-4"}),l.status?(i(),g("div",P,C(l.status),1)):u("",!0),t("form",{onSubmit:B(c,["prevent"])},[t("div",null,[r(_,{for:"email",value:"Email"}),r(h,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":a[0]||(a[0]=o=>s(e).email=o),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"])]),t("div",q,[r(_,{for:"password",value:"Password"}),r(h,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":a[1]||(a[1]=o=>s(e).password=o),required:"",autocomplete:"current-password"},null,8,["modelValue"]),l.canResetPassword?(i(),m(s(p),{key:0,href:n.route("password.request"),class:"mt-2 inline-flex text-sm text-gray-600 hover:text-gray-900"},{default:d(()=>[F]),_:1},8,["href"])):u("",!0)]),t("div",A,[t("label",E,[r(N,{name:"remember",checked:s(e).remember,"onUpdate:checked":a[2]||(a[2]=o=>s(e).remember=o)},null,8,["checked"]),H])]),t("div",M,[r(R,{class:$(["btn-primary w-full justify-center py-3",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:d(()=>[j]),_:1},8,["class","disabled"])]),t("div",z,[l.canResetPassword?(i(),m(s(p),{key:0,href:n.route("register"),class:"inline-flex font-medium text-gray-600 hover:text-gray-900"},{default:d(()=>[G,I,J]),_:1},8,["href"])):u("",!0)])],40,U)]),_:1}))}};export{W as default};
