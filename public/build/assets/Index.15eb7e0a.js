import{L as x,r as o,o as s,c as l,w as c,a as e,b as _,t as h,d as a,F as f,e as u,g as i,f as g}from"./app.5c2f73c4.js";import{L as v}from"./Shared.6e1d5182.js";import{S as b}from"./SharedPageItem.659412e5.js";import{_ as y}from"./_plugin-vue_export-helper.cdc0426e.js";/* empty css            */import"./Toast.b710fee4.js";const w={components:{Link:x,Layout:v,SharedPageItem:b},props:{project:Object,pages:Object,uuid:String}},k={class:"sticky top-0 z-40 bg-white rounded border-b border-gray-300 py-5 px-4 md:px-10 md:flex md:items-center md:justify-between mb-[30px]"},j={class:"text-xl md:text-2xl font-bold flex items-center space-x-[10px]"},L={class:"truncate"},N=g("Projects"),S=e("li",{class:"text-black"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-right"},[e("polyline",{points:"9 18 15 12 9 6"})])],-1),B={class:"truncate text-gray-600"},C=e("div",{class:"mt-4 md:mt-0 md:ml-16 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-3"},[e("div",{class:"h-[42px]"})],-1),O={class:"max-w-5xl mx-auto px-4 relative pt-[50px] pb-[112px]"},P={class:"max-w-4xl mx-auto space-y-[30px]"},V={key:0,class:"bg-white rounded border border-gray-300"},F=e("div",{class:"sm:flex sm:items-center p-5 border-b border-gray-300"},[e("div",{class:"sm:flex-auto"},[e("h1",{class:"text-xl font-bold"},"Pages")])],-1),I={class:"p-5 flex flex-col"},z={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},D={class:"inline-block min-w-full align-middle md:px-6 lg:px-8"},E={class:"min-w-full divide-y divide-gray-300"},T=e("div",null,[e("div",{class:"flex items-center justify-between"},[e("div",{class:"py-3.5 pl-4 pr-3 text-left font-semibold sm:pl-6 md:pl-0 w-1/2"},"Name"),e("div",{class:"py-3.5 pl-4 pr-3 text-left font-semibold sm:pl-6 md:pl-0 w-1/4"},"Status"),e("div",{class:"py-3.5 px-3 text-left font-semibold text-right w-1/4"},"Last updated")])],-1),q={class:"divide-y divide-gray-200"},A={key:1,class:"flex flex-col justify-center items-center text-center pt-[100px]"},G=e("div",{class:"mb-[30px]"},[e("h3",{class:"text-xl font-bold mb-[15px]"},"Nothing to see yet!"),e("p",{class:"text-black"},"No pages have been added yet, please check back later.")],-1),H=[G];function J(d,K,t,M,Q,R){const n=o("Link"),r=o("shared-page-item"),m=o("Layout");return s(),l(m,null,{default:c(()=>[e("div",k,[e("ul",j,[e("li",L,[_(n,{href:d.route("viewSharedProject",[t.project.id,t.uuid]),class:"text-black hover:text-indigo-500 transition-all"},{default:c(()=>[N]),_:1},8,["href"])]),S,e("li",B,h(t.project.name),1)]),C]),e("div",O,[e("div",P,[Object.keys(t.pages).length?(s(),a("div",V,[e("div",null,[F,e("div",I,[e("div",z,[e("div",D,[e("div",E,[T,e("ul",q,[(s(!0),a(f,null,u(t.pages,p=>(s(),l(r,{project:t.project,node:p,pages:t.pages},null,8,["project","node","pages"]))),256))])])])])])])])):i("",!0),Object.keys(t.pages).length?i("",!0):(s(),a("div",A,H))])])]),_:1})}const ee=y(w,[["render",J]]);export{ee as default};
