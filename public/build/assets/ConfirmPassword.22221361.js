import{H as d,o as m,c as l,w as r,b as o,E as a,I as c,a as e,n as p,k as u,f}from"./app.99fc9137.js";import{B as _,_ as w}from"./Guest.c49c3ba9.js";import{_ as b,a as h,b as x}from"./ValidationErrors.beaec669.js";/* empty css            */import"./ApplicationLogo.17f664b9.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Toast.9999381b.js";const y=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),V=["onSubmit"],v={class:"flex justify-end mt-4"},B=f(" Confirm "),S={__name:"ConfirmPassword",setup(C){const s=d({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(g,t)=>(m(),l(_,null,{default:r(()=>[o(a(c),{title:"Confirm Password"}),y,o(b,{class:"mb-4"}),e("form",{onSubmit:u(i,["prevent"])},[e("div",null,[o(h,{for:"password",value:"Password"}),o(x,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:a(s).password,"onUpdate:modelValue":t[0]||(t[0]=n=>a(s).password=n),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"])]),e("div",v,[o(w,{class:p(["ml-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:r(()=>[B]),_:1},8,["class","disabled"])])],40,V)]),_:1}))}};export{S as default};