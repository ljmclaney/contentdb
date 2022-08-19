import{L as _,r as i,o as t,b as s,a as d,f as g,w as p,F as c,d as u,g as n,e as x,t as o,c as y}from"./app.7e0295b7.js";import{_ as f}from"./_plugin-vue_export-helper.cdc0426e.js";const w={name:"node",components:{Link:_},props:{node:Object,project:Object,pages:Object}},b={class:"relative"},v={class:"whitespace-nowrap py-4 pl-4 pr-3 font-medium sm:pl-6 md:pl-0 w-1/2 truncate"},k={key:0,class:"flex items-center mr-2"},j=d("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-dash-lg",viewBox:"0 0 16 16"},[d("path",{"fill-rule":"evenodd",d:"M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"})],-1),B=[j],L={class:"whitespace-nowrap py-4 pl-4 pr-3 font-medium sm:pl-6 md:pl-0 w-1/4 flex-shrink-0"},P={key:0,class:"rounded bg-yellow-100 px-1 py-1 text-sm text-yellow-800"},C={key:1,class:"rounded bg-blue-100 px-1 py-1 text-sm text-blue-800"},N={key:2,class:"rounded bg-orange-100 px-1 py-1 text-sm text-orange-800"},S={key:3,class:"rounded bg-purple-100 px-1 py-1 text-sm text-purple-800"},V={key:4,class:"rounded bg-green-100 px-1 py-1 text-sm text-green-800"},D={class:"whitespace-nowrap py-4 px-3 text-black text-right w-1/4 flex-shrink-0"},E={key:0,class:"border-t border-gray-200 divide-y divide-gray-200"};function M(l,a,e,O,F,I){const h=i("Link"),m=i("node");return t(),s("li",b,[d("div",{class:"flex items-center justify-between",onMouseover:a[0]||(a[0]=r=>l.displayEdit=!0),onMouseleave:a[1]||(a[1]=r=>l.displayEdit=!1)},[d("div",v,[g(h,{href:l.route("viewSharedPage",[e.project.id,e.project.uuid,e.node.id]),class:"hover:text-brand-dark-blue truncate inline-flex items-center"},{default:p(()=>[e.node.depth?(t(),s("span",k,[(t(!0),s(c,null,u(e.node.depth,r=>(t(),s("span",null,B))),256))])):n("",!0),x(" "+o(e.node.name),1)]),_:1},8,["href"])]),d("div",L,[e.node.status===null||e.node.status==="Draft"?(t(),s("span",P,"Draft")):n("",!0),e.node.status==="In Progress"?(t(),s("span",C,o(e.node.status),1)):n("",!0),e.node.status==="Under Review"?(t(),s("span",N,o(e.node.status),1)):n("",!0),e.node.status==="Ready To Publish"?(t(),s("span",S,o(e.node.status),1)):n("",!0),e.node.status==="Published"?(t(),s("span",V,o(e.node.status),1)):n("",!0)]),d("div",D,o(e.node.updated_at),1)],32),e.node.children&&e.node.children.length?(t(),s("ul",E,[(t(!0),s(c,null,u(e.node.children,r=>(t(),y(m,{project:e.project,node:r,pages:e.pages},null,8,["project","node","pages"]))),256))])):n("",!0)])}const A=f(w,[["render",M]]);export{A as S};
