import{C as u,o as p,c as f,w as l,f as e,A as o,H as _,a as t,n as w,L as V,D as b,e as n}from"./app.b9674f2a.js";import{_ as g,a as v}from"./Guest.2414bbc4.js";import{_ as y,a as i,b as d}from"./ValidationErrors.082baa64.js";/* empty css            */const h=["onSubmit"],x={class:"mt-4"},k={class:"mt-4"},$={class:"mt-4"},C={class:"flex items-center justify-end mt-4"},q=n(" Register "),B={class:"text-center mt-6"},N=n(" Already registered? "),H={__name:"Register",setup(R){const s=u({name:"",email:"",password:"",password_confirmation:"",terms:!1}),m=()=>{s.post(route("register"),{onFinish:()=>s.reset("password","password_confirmation")})};return(c,a)=>(p(),f(g,null,{default:l(()=>[e(o(_),{title:"Register"}),e(y,{class:"mb-4"}),t("form",{onSubmit:b(m,["prevent"])},[t("div",x,[e(i,{for:"email",value:"Email"}),e(d,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:o(s).email,"onUpdate:modelValue":a[0]||(a[0]=r=>o(s).email=r),required:"",autocomplete:"username"},null,8,["modelValue"])]),t("div",k,[e(i,{for:"password",value:"Password"}),e(d,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o(s).password,"onUpdate:modelValue":a[1]||(a[1]=r=>o(s).password=r),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),t("div",$,[e(i,{for:"password_confirmation",value:"Confirm Password"}),e(d,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:o(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=r=>o(s).password_confirmation=r),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),t("div",C,[e(v,{class:w(["flex w-full justify-center py-3",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:l(()=>[q]),_:1},8,["class","disabled"])]),t("div",B,[e(o(V),{href:c.route("login"),class:"underline text-gray-600 hover:text-gray-900"},{default:l(()=>[N]),_:1},8,["href"])])],40,h)]),_:1}))}};export{H as default};