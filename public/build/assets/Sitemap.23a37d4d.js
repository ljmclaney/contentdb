import{L as b,r as c,o as i,b as a,a as e,t as y,F as f,d as v,g as r,c as m,w as d,f as p,G as _,Q as x,R as B,e as g}from"./app.f8c7a51d.js";import{L as V}from"./App.ca34ac8c.js";import{S as k}from"./SlideOver.943e9bc7.js";import{M as j}from"./Modal.5b1f4fcc.js";import{a as P,P as I}from"./PageItem.37543da4.js";import{_ as S}from"./_plugin-vue_export-helper.cdc0426e.js";/* empty css            */import"./Toast.f379d477.js";import"./transition.567dae33.js";const O={name:"node",components:{Link:b,SlideOver:k,Modal:j,PageOption:P},props:{node:Object,project:Object,pages:Object},data(){return{displayEdit:!1,editPage:!1,showDeleteModal:!1}},methods:{updatePage(){this.$inertia.post("/projects/"+this.project.id+"/pages/"+this.node.id,{name:this.node.name,parent_id:this.node.parent_id},{preserveScroll:!0}),this.editPage=!1},deletePage(){this.$inertia.delete("/projects/"+this.project.id+"/pages/"+this.node.id),this.showDeleteModal=!1}}},D={class:"space-y-5 ml-5"},N=["href"],H={key:0,class:"flex flex-col space-y-5"};function E(l,t,s,C,o,u){const h=c("node");return i(),a("li",D,[e("a",{href:l.route("viewPage",[s.project.id,s.node.id]),class:"flex whitespace-nowrap justify-center bg-white hover:bg-gray-300 border border-gray-300 px-5 py-3 rounded"},y(s.node.name),9,N),s.node.children&&s.node.children.length?(i(),a("ul",H,[(i(!0),a(f,null,v(s.node.children,w=>(i(),m(h,{project:s.project,node:w,pages:s.pages},null,8,["project","node","pages"]))),256))])):r("",!0)])}const T=S(O,[["render",E]]),U={components:{Link:b,Layout:V,SlideOver:k,Modal:j,PageItem:I,PageOption:P,SitemapItem:T},props:{project:Object,pages:Object},data(){return{createPage:!1,newPage:null,parentPageId:null,showShare:!1,copiedLink:!1,copiedPassword:null,newPageLoading:!1,sharePassword:null,savingShareSettings:!1,showCollaborators:!1}},methods:{savePage(){this.newPageLoading=!0,this.$inertia.post("/projects/"+this.project.id+"/pages/create",{projectID:this.project.id,name:this.newPage,parentPageId:this.parentPageId},{preserveScroll:!0,onSuccess:()=>{this.newPage=null,this.parentPageId=null,this.createPage=!1,this.newPageLoading=!1},onError:()=>{this.newPageLoading=!1}})},copyLink(l){navigator.clipboard.writeText(l),this.copiedLink=!0},copyPassword(l){navigator.clipboard.writeText(l),this.copiedPassword=!0},savePassword(){this.savingShareSettings=!0,this.$inertia.post(route("saveProjectPassword",this.project.id),{password:this.project.password},{preserveScroll:!0,onSuccess:()=>{this.savingShareSettings=!1}})}}},F={class:"sticky top-0 z-40 bg-white rounded border-b border-gray-300 py-5 px-4 md:px-10 md:flex md:items-center md:justify-between mb-[30px]"},G={class:"text-xl md:text-2xl font-bold flex items-center space-x-[10px]"},Q={class:"truncate"},R=g("Projects"),q=e("li",{class:"text-black"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-right"},[e("polyline",{points:"9 18 15 12 9 6"})])],-1),J={class:"truncate text-gray-600"},K={class:"mt-4 md:mt-0 md:ml-16 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-3"},W=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"w-5 h-5",viewBox:"0 0 16 16"},[e("path",{d:"M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"}),e("path",{d:"M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"})],-1),X=g("Archive"),Y=g("Edit all content"),Z={class:"py-10 px-4 md:px-10"},$={key:0,class:"flex justify-center"},ee={class:"flex h-screen overflow-x-auto"},te={class:"sitemap flex justify-start"},se={key:1,class:"flex flex-col justify-center items-center text-center pt-[100px]"},oe=e("div",{class:"mb-[30px]"},[e("h3",{class:"text-xl font-bold mb-[15px]"},"Let the fun begin!"),e("p",{class:"text-black"},"Add your content here. Start by creating your first page.")],-1),ne={class:"space-y-[15px]"},ie=e("label",{for:"page",class:"block text-sm font-medium text-gray-700"},"Page name",-1),ae={class:"mt-1"},le=e("label",{for:"parent_page",class:"block text-sm font-medium text-gray-700"},"Parent page (optional)",-1),re={class:"mt-1"},de=e("option",{value:"",selected:""},"No parent page",-1),ce=["disabled"],he={key:0},pe={key:1,class:"flex items-center"},ue=e("svg",{class:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),ge=g(" Saving "),me=[ue,ge],we={class:"mb-5"},_e=e("label",{for:"link",class:"block font-medium mb-4 text-lg font-bold"},"Share a public link",-1),fe={class:"mt-1 flex rounded-md shadow-sm"},ve={class:"relative flex items-stretch flex-grow focus-within:z-10"},xe=e("div",{class:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"h-5 w-5 text-gray-400",viewBox:"0 0 16 16"},[e("path",{d:"M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"}),e("path",{d:"M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"})])],-1),be=["value"],ye={key:0,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"w-4 h-4"},ke=e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},null,-1),je=e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},null,-1),Pe=[ke,je],Se={key:1},Ce=e("label",{for:"email",class:"block font-medium"},"Password (optional)",-1),Le={class:"mt-1 flex rounded-md shadow-sm"},ze={class:"relative flex items-stretch flex-grow focus-within:z-10"},Me=e("div",{class:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"h-5 w-5 text-gray-400",viewBox:"0 0 16 16"},[e("path",{d:"M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"}),e("path",{d:"M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z"})])],-1),Ae={key:0,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"w-4 h-4"},Be=e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},null,-1),Ve=e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},null,-1),Ie=[Be,Ve],Oe={key:1},De={class:"flex justify-end items-center mt-10 space-x-3"},Ne=["disabled"],He={key:0},Ee={key:1,class:"flex items-center"},Te=e("svg",{class:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),Ue=g(" Applying "),Fe=[Te,Ue];function Ge(l,t,s,C,o,u){const h=c("Link"),w=c("sitemap-item"),L=c("page-option"),z=c("slide-over"),M=c("modal"),A=c("Layout");return i(),m(A,null,{default:d(()=>[e("div",F,[e("ul",G,[e("li",Q,[p(h,{href:"/projects",class:"text-black hover:text-indigo-500 transition-all"},{default:d(()=>[R]),_:1})]),q,e("li",J,y(s.project.name),1)]),e("div",K,[e("div",null,[p(h,{href:l.route("viewProject",s.project.id),class:"btn-outline"},{default:d(()=>[W]),_:1},8,["href"])]),e("div",null,[p(h,{href:l.route("archiveProject",s.project.id),class:"btn-outline"},{default:d(()=>[X]),_:1},8,["href"])]),e("div",null,[p(h,{href:l.route("viewAllContent",s.project.id),class:"btn-outline"},{default:d(()=>[Y]),_:1},8,["href"])]),e("div",null,[e("button",{onClick:t[0]||(t[0]=n=>o.showShare=!o.showShare),class:"btn-outline"},"Share")]),e("div",null,[e("button",{onClick:t[1]||(t[1]=n=>o.createPage=!0),class:"btn-primary"},"Create a page")])])]),e("div",Z,[Object.keys(s.pages).length?(i(),a("div",$,[e("nav",ee,[e("ul",te,[(i(!0),a(f,null,v(s.pages,n=>(i(),m(w,{project:s.project,node:n,pages:s.pages},null,8,["project","node","pages"]))),256))])])])):r("",!0),Object.keys(s.pages).length?r("",!0):(i(),a("div",se,[oe,e("button",{onClick:t[2]||(t[2]=n=>o.createPage=!0),type:"button",class:"btn-primary"},"Create a page")]))]),p(z,{open:o.createPage,onCloseSlider:t[6]||(t[6]=n=>o.createPage=!1),title:"Create a page"},{default:d(()=>[e("div",ne,[e("div",null,[ie,e("div",ae,[_(e("input",{type:"text",name:"page",id:"page","onUpdate:modelValue":t[3]||(t[3]=n=>o.newPage=n),class:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md",placeholder:"e.g. Home, About page, December Newsletter"},null,512),[[x,o.newPage]])])]),e("div",null,[le,e("div",re,[_(e("select",{name:"parent_page",id:"parent_page","onUpdate:modelValue":t[4]||(t[4]=n=>o.parentPageId=n),class:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"},[de,(i(!0),a(f,null,v(s.pages,n=>(i(),m(L,{node:n},null,8,["node"]))),256))],512),[[B,o.parentPageId]])])]),e("button",{onClick:t[5]||(t[5]=n=>u.savePage()),class:"btn-primary",disabled:o.newPageLoading},[o.newPageLoading?r("",!0):(i(),a("span",he,"Save")),o.newPageLoading?(i(),a("span",pe,me)):r("",!0)],8,ce)])]),_:1},8,["open"]),p(M,{open:o.showShare,onCloseModal:t[12]||(t[12]=n=>o.showShare=!1)},{default:d(()=>[e("div",we,[_e,e("div",fe,[e("div",ve,[xe,e("input",{type:"text",name:"link",id:"link",value:l.route("viewSharedProject",[s.project.id,s.project.uuid]),class:"focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300",readonly:""},null,8,be)]),e("button",{onClick:t[7]||(t[7]=n=>u.copyLink(l.route("viewSharedProject",[s.project.id,s.project.uuid]))),type:"button",class:"-ml-px relative inline-flex items-center space-x-2 px-4 py-2 bg-black text-sm font-medium rounded-r-md text-white hover:bg-indigo-700"},[o.copiedLink?r("",!0):(i(),a("svg",ye,Pe)),o.copiedLink?(i(),a("span",Se,"Copied!")):r("",!0)])])]),e("div",null,[Ce,e("div",Le,[e("div",ze,[Me,_(e("input",{type:"text",name:"share_password","onUpdate:modelValue":t[8]||(t[8]=n=>s.project.password=n),class:"focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"},null,512),[[x,s.project.password]])]),e("button",{onClick:t[9]||(t[9]=n=>u.copyPassword(s.project.password)),type:"button",class:"-ml-px relative inline-flex items-center space-x-2 px-4 py-2 bg-black text-sm font-medium rounded-r-md text-white hover:bg-indigo-700"},[o.copiedPassword?r("",!0):(i(),a("svg",Ae,Ie)),o.copiedPassword?(i(),a("span",Oe,"Copied!")):r("",!0)])])]),e("div",De,[e("button",{onClick:t[10]||(t[10]=n=>o.showShare=!1),class:"btn-outline"},"Cancel"),e("button",{onClick:t[11]||(t[11]=n=>u.savePassword()),type:"button",class:"btn-primary",disabled:o.savingShareSettings},[o.savingShareSettings?r("",!0):(i(),a("span",He,"Apply")),o.savingShareSettings?(i(),a("span",Ee,Fe)):r("",!0)],8,Ne)])]),_:1},8,["open"])]),_:1})}const $e=S(U,[["render",Ge]]);export{$e as default};