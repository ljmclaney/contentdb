import{r as i,o as n,b as a,a as e,F as d,d as c,g as r,e as x,t as f,c as v,L as P,f as g,w as p,G as _,Q as C,R as L}from"./app.147eb95b.js";import{S as D}from"./SlideOver.6269be21.js";import{M as A}from"./Modal.455f1718.js";import{_ as b}from"./_plugin-vue_export-helper.cdc0426e.js";const B={name:"node",props:{node:Object,project:Object,pages:Object},data(){return{displayEdit:!1,editPage:!1,showDeleteModal:!1}},methods:{updatePage(){this.$inertia.post("/projects/"+this.project.id+"/pages/"+this.node.id,{name:this.node.name,parent_id:this.node.parent_id},{preserveScroll:!0}),this.editPage=!1},deletePage(){this.$inertia.delete("/projects/"+this.project.id+"/pages/"+this.node.id),this.showDeleteModal=!1}}},H=["value"];function S(w,t,o,y,l,m){const u=i("node");return n(),a(d,null,[e("option",{value:o.node.id},[o.node.depth?(n(!0),a(d,{key:0},c(o.node.depth,h=>(n(),a("span",null,"\xA0\xA0\xA0"))),256)):r("",!0),x(" "+f(o.node.name),1)],8,H),(n(!0),a(d,null,c(o.node.children,h=>(n(),v(u,{node:h},null,8,["node"]))),256))],64)}const z=b(B,[["render",S]]),E={name:"node",components:{Link:P,SlideOver:D,Modal:A,PageOption:z},props:{node:Object,project:Object,pages:Object},data(){return{displayEdit:!1,editPage:!1,showDeleteModal:!1}},methods:{updatePage(){this.$inertia.post("/projects/"+this.project.id+"/pages/"+this.node.id,{name:this.node.name,parent_id:this.node.parent_id},{preserveScroll:!0}),this.editPage=!1},deletePage(){this.$inertia.delete("/projects/"+this.project.id+"/pages/"+this.node.id),this.showDeleteModal=!1},clonePage(){this.$inertia.post("/projects/"+this.project.id+"/pages/"+this.node.id+"/clone",{},{preserveScroll:!0})}}},O={class:"relative"},V={class:"whitespace-nowrap py-4 pl-4 pr-3 font-medium sm:pl-6 md:pl-0 w-3/4 truncate"},Z={key:0,class:"flex items-center mr-2"},N=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-dash-lg",viewBox:"0 0 16 16"},[e("path",{"fill-rule":"evenodd",d:"M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"})],-1),T=[N],F={key:0,class:"whitespace-nowrap py-4 px-3 text-black text-right flex-shrink-0"},R={key:1,class:"bg-white"},U={class:"bg-gray-100 rounded z-20 flex items-center top-1.5 right-0"},G=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"w-4 h-4",viewBox:"0 0 16 16"},[e("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),e("path",{"fill-rule":"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"})],-1),I=[G],Q=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round",class:"w-5 h-5"},[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1),q=[Q],J=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"w-4 h-4",viewBox:"0 0 16 16"},[e("path",{d:"M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"})],-1),K=[J],W={key:0,class:"border-t border-gray-200 divide-y divide-gray-200"},X={class:"space-y-[15px]"},Y=e("label",{for:"page",class:"block text-sm font-medium text-gray-700"},"Page name",-1),$={class:"mt-1"},ee=e("label",{for:"parent_page",class:"block text-sm font-medium text-gray-700"},"Parent page (optional)",-1),te={class:"mt-1"},oe=e("option",{value:"",selected:""},"No parent page",-1),se=e("div",{class:"sm:flex sm:items-start"},[e("div",{class:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"h-5 w-5 text-red-600",viewBox:"0 0 16 16"},[e("path",{d:"M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"}),e("path",{d:"M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"})])]),e("div",{class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},[e("h3",{class:"text-lg leading-6 font-medium text-gray-900"}," Delete page"),e("div",{class:"mt-2"},[e("p",{class:"text-sm text-gray-500"},"Are you sure you want to delete this page? All of your data will be permanently removed from our servers forever. This action cannot be undone.")])])],-1),ne={class:"mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"};function ae(w,t,o,y,l,m){const u=i("Link"),h=i("node"),k=i("page-option"),j=i("slide-over"),M=i("modal");return n(),a("li",O,[e("div",{class:"flex items-center justify-between",onMouseover:t[3]||(t[3]=s=>l.displayEdit=!0),onMouseleave:t[4]||(t[4]=s=>l.displayEdit=!1)},[e("div",V,[g(u,{href:w.route("viewPage",[o.project.id,o.node.id]),class:"text-black hover:text-brand-dark-blue truncate inline-flex items-center"},{default:p(()=>[o.node.depth?(n(),a("span",Z,[(n(!0),a(d,null,c(o.node.depth,s=>(n(),a("span",null,T))),256))])):r("",!0),x(" "+f(o.node.name),1)]),_:1},8,["href"])]),l.displayEdit?r("",!0):(n(),a("div",F,f(o.node.updated_at),1)),l.displayEdit?(n(),a("div",R,[e("div",U,[e("button",{class:"p-4 hover:bg-gray-200 transition-all",onClick:t[0]||(t[0]=s=>l.editPage=!0)},I),e("button",{class:"p-4 hover:bg-gray-200 transition-all",onClick:t[1]||(t[1]=s=>m.clonePage(o.node.id))},q),e("button",{class:"p-4 hover:bg-red-500 hover:text-white transition-all",onClick:t[2]||(t[2]=s=>l.showDeleteModal=!0)},K)])])):r("",!0)],32),o.node.children&&o.node.children.length?(n(),a("ul",W,[(n(!0),a(d,null,c(o.node.children,s=>(n(),v(h,{project:o.project,node:s,pages:o.pages},null,8,["project","node","pages"]))),256))])):r("",!0),g(j,{open:l.editPage,onCloseSlider:t[8]||(t[8]=s=>l.editPage=!1),title:"Edit page"},{default:p(()=>[e("div",X,[e("div",null,[Y,e("div",$,[_(e("input",{type:"text",name:"page",id:"page","onUpdate:modelValue":t[5]||(t[5]=s=>o.node.name=s),class:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md",placeholder:"e.g. Home, About page, December Newsletter"},null,512),[[C,o.node.name]])])]),e("div",null,[ee,e("div",te,[_(e("select",{name:"parent_id",id:"parent_id","onUpdate:modelValue":t[6]||(t[6]=s=>o.node.parent_id=s),class:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"},[oe,(n(!0),a(d,null,c(o.pages,s=>(n(),v(k,{node:s},null,8,["node"]))),256))],512),[[L,o.node.parent_id]])])]),e("button",{onClick:t[7]||(t[7]=s=>m.updatePage()),class:"btn-primary"},"Save")])]),_:1},8,["open"]),g(M,{open:l.showDeleteModal},{default:p(()=>[e("form",null,[se,e("div",ne,[e("button",{onClick:t[9]||(t[9]=s=>m.deletePage()),type:"button",class:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"},"Delete"),e("button",{onClick:t[10]||(t[10]=s=>l.showDeleteModal=!1),type:"button",class:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm",ref:"cancelButtonRef"},"Cancel",512)])])]),_:1},8,["open"])])}const ce=b(E,[["render",ae]]);export{ce as P,z as a};
