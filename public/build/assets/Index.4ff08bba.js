import{r as d,o as n,b as l,a as e,F as p,d as h,g as r,e as x,t as b,c as f,L as S,f as _,w as u,G as w,Q as j,R as M}from"./app.4ef9f03a.js";import{L as D}from"./App.26e5aa56.js";import{S as A}from"./SlideOver.35ff40dc.js";import{M as z}from"./Modal.9199aafb.js";import{_ as C}from"./_plugin-vue_export-helper.cdc0426e.js";/* empty css            */import"./Toast.9b5b2f74.js";import"./transition.70c95c67.js";const V={name:"node",props:{node:Object,project:Object,pages:Object},data(){return{displayEdit:!1,editPage:!1,showDeleteModal:!1}},methods:{updatePage(){this.$inertia.post("/projects/"+this.project.id+"/pages/"+this.node.id,{name:this.node.name,parent_id:this.node.parent_id},{preserveScroll:!0}),this.editPage=!1},deletePage(){this.$inertia.delete("/projects/"+this.project.id+"/pages/"+this.node.id),this.showDeleteModal=!1}}},H=["value"];function O(c,t,s,L,o,m){const v=d("node");return n(),l(p,null,[e("option",{value:s.node.id},[s.node.depth?(n(!0),l(p,{key:0},h(s.node.depth,g=>(n(),l("span",null,"\xA0\xA0\xA0"))),256)):r("",!0),x(" "+b(s.node.name),1)],8,H),(n(!0),l(p,null,h(s.node.children,g=>(n(),f(v,{node:g},null,8,["node"]))),256))],64)}const B=C(V,[["render",O]]),I={name:"node",components:{Link:S,SlideOver:A,Modal:z,PageOption:B},props:{node:Object,project:Object,pages:Object},data(){return{displayEdit:!1,editPage:!1,showDeleteModal:!1}},methods:{updatePage(){this.$inertia.post("/projects/"+this.project.id+"/pages/"+this.node.id,{name:this.node.name,parent_id:this.node.parent_id},{preserveScroll:!0}),this.editPage=!1},deletePage(){this.$inertia.delete("/projects/"+this.project.id+"/pages/"+this.node.id),this.showDeleteModal=!1}}},N={class:"relative"},E={class:"whitespace-nowrap py-4 pl-4 pr-3 font-medium sm:pl-6 md:pl-0 w-3/4 truncate"},Z={key:0,class:"flex items-center mr-2"},T=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-dash-lg",viewBox:"0 0 16 16"},[e("path",{"fill-rule":"evenodd",d:"M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"})],-1),U=[T],F={key:0,class:"whitespace-nowrap py-4 px-3 text-black text-right flex-shrink-0"},R={key:1,class:"bg-white"},G={class:"bg-gray-100 rounded z-20 flex items-center top-1.5 right-0"},Q=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"w-4 h-4",viewBox:"0 0 16 16"},[e("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),e("path",{"fill-rule":"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"})],-1),q=[Q],J=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"w-4 h-4",viewBox:"0 0 16 16"},[e("path",{d:"M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"})],-1),K=[J],W={key:0,class:"border-t border-gray-200 divide-y divide-gray-200"},X={class:"space-y-[15px]"},Y=e("label",{for:"page",class:"block text-sm font-medium text-gray-700"},"Page name",-1),$={class:"mt-1"},ee=e("label",{for:"parent_page",class:"block text-sm font-medium text-gray-700"},"Parent page (optional)",-1),te={class:"mt-1"},se=e("option",{value:"",selected:""},"No parent page",-1),oe=e("div",{class:"sm:flex sm:items-start"},[e("div",{class:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"h-5 w-5 text-red-600",viewBox:"0 0 16 16"},[e("path",{d:"M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"}),e("path",{d:"M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"})])]),e("div",{class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},[e("h3",{class:"text-lg leading-6 font-medium text-gray-900"}," Delete page"),e("div",{class:"mt-2"},[e("p",{class:"text-sm text-gray-500"},"Are you sure you want to delete this page? All of your data will be permanently removed from our servers forever. This action cannot be undone.")])])],-1),ne={class:"mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"};function le(c,t,s,L,o,m){const v=d("Link"),g=d("node"),y=d("page-option"),k=d("slide-over"),P=d("modal");return n(),l("li",N,[e("div",{class:"flex items-center justify-between",onMouseover:t[2]||(t[2]=a=>o.displayEdit=!0),onMouseleave:t[3]||(t[3]=a=>o.displayEdit=!1)},[e("div",E,[_(v,{href:c.route("viewPage",[s.project.id,s.node.id]),class:"text-black hover:text-brand-dark-blue truncate inline-flex items-center"},{default:u(()=>[s.node.depth?(n(),l("span",Z,[(n(!0),l(p,null,h(s.node.depth,a=>(n(),l("span",null,U))),256))])):r("",!0),x(" "+b(s.node.name),1)]),_:1},8,["href"])]),o.displayEdit?r("",!0):(n(),l("div",F,b(s.node.updated_at),1)),o.displayEdit?(n(),l("div",R,[e("div",G,[e("button",{class:"p-4 hover:bg-gray-200 transition-all",onClick:t[0]||(t[0]=a=>o.editPage=!0)},q),e("button",{class:"p-4 hover:bg-red-500 hover:text-white transition-all",onClick:t[1]||(t[1]=a=>o.showDeleteModal=!0)},K)])])):r("",!0)],32),s.node.children&&s.node.children.length?(n(),l("ul",W,[(n(!0),l(p,null,h(s.node.children,a=>(n(),f(g,{project:s.project,node:a,pages:s.pages},null,8,["project","node","pages"]))),256))])):r("",!0),_(k,{open:o.editPage,onCloseSlider:t[7]||(t[7]=a=>o.editPage=!1),title:"Create a page"},{default:u(()=>[e("div",X,[e("div",null,[Y,e("div",$,[w(e("input",{type:"text",name:"page",id:"page","onUpdate:modelValue":t[4]||(t[4]=a=>s.node.name=a),class:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md",placeholder:"e.g. Home, About page, December Newsletter"},null,512),[[j,s.node.name]])])]),e("div",null,[ee,e("div",te,[w(e("select",{name:"parent_id",id:"parent_id","onUpdate:modelValue":t[5]||(t[5]=a=>s.node.parent_id=a),class:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"},[se,(n(!0),l(p,null,h(s.pages,a=>(n(),f(y,{node:a},null,8,["node"]))),256))],512),[[M,s.node.parent_id]])])]),e("button",{onClick:t[6]||(t[6]=a=>m.updatePage()),class:"btn-primary"},"Save")])]),_:1},8,["open"]),_(P,{open:o.showDeleteModal},{default:u(()=>[e("form",null,[oe,e("div",ne,[e("button",{onClick:t[8]||(t[8]=a=>m.deletePage()),type:"button",class:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"},"Delete"),e("button",{onClick:t[9]||(t[9]=a=>o.showDeleteModal=!1),type:"button",class:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm",ref:"cancelButtonRef"},"Cancel",512)])])]),_:1},8,["open"])])}const ie=C(I,[["render",le]]),ae={components:{Link:S,Layout:D,SlideOver:A,Modal:z,PageItem:ie,PageOption:B},props:{project:Object,pages:Object},data(){return{createPage:!1,newPage:null,parentPageId:null,showShare:!1,copiedLink:!1,copiedPassword:null,newPageLoading:!1,sharePassword:null,savingShareSettings:!1,showCollaborators:!1}},methods:{savePage(){this.newPageLoading=!0,this.$inertia.post("/projects/"+this.project.id+"/pages/create",{projectID:this.project.id,name:this.newPage,parentPageId:this.parentPageId},{preserveScroll:!0,onSuccess:()=>{this.newPage=null,this.parentPageId=null,this.createPage=!1,this.newPageLoading=!1},onError:()=>{this.newPageLoading=!1}})},copyLink(c){navigator.clipboard.writeText(c),this.copiedLink=!0},copyPassword(c){navigator.clipboard.writeText(c),this.copiedPassword=!0},savePassword(){this.savingShareSettings=!0,this.$inertia.post(route("saveProjectPassword",this.project.id),{password:this.project.password},{preserveScroll:!0,onSuccess:()=>{this.savingShareSettings=!1}})}}},re={class:"max-w-5xl mx-auto px-4 relative pt-[50px] pb-[112px]"},de={class:"max-w-4xl mx-auto space-y-[30px]"},ce={class:"bg-white rounded border border-gray-300 p-5 sm:flex sm:items-center sm:justify-between"},me={class:"text-2xl font-bold"},pe={class:"mt-4 sm:mt-0 sm:ml-16 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3"},ue=x("Archive"),he={key:0,class:"bg-white rounded border border-gray-300"},ge={class:"sm:flex sm:items-center p-5 border-b border-gray-300"},fe=e("div",{class:"sm:flex-auto"},[e("h1",{class:"text-xl font-bold"},"Pages")],-1),_e={class:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none"},ve={class:"p-5 flex flex-col"},we={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},xe={class:"inline-block min-w-full align-middle md:px-6 lg:px-8"},be={class:"min-w-full divide-y divide-gray-300"},ye=e("div",null,[e("div",{class:"flex items-center justify-between"},[e("div",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left font-semibold sm:pl-6 md:pl-0 w-3/4"},"Name"),e("div",{scope:"col",class:"py-3.5 px-3 text-left font-semibold text-right"},"Last updated")])],-1),ke={class:"divide-y divide-gray-200"},Pe={key:1,class:"flex flex-col justify-center items-center text-center pt-[100px]"},je=e("div",{class:"mb-[30px]"},[e("h3",{class:"text-xl font-bold mb-[15px]"},"Let the fun begin!"),e("p",{class:"text-black"},"Add your content here. Start by creating your first page.")],-1),Ce={class:"space-y-[15px]"},Le=e("label",{for:"page",class:"block text-sm font-medium text-gray-700"},"Page name",-1),Se={class:"mt-1"},Me=e("label",{for:"parent_page",class:"block text-sm font-medium text-gray-700"},"Parent page (optional)",-1),Ae={class:"mt-1"},ze=e("option",{value:"",selected:""},"No parent page",-1),Be=["disabled"],De={key:0},Ve={key:1,class:"flex items-center"},He=e("svg",{class:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),Oe=x(" Saving "),Ie=[He,Oe],Ne={class:"mb-5"},Ee=e("label",{for:"link",class:"block font-medium mb-4 text-lg font-bold"},"Share a public link",-1),Ze={class:"mt-1 flex rounded-md shadow-sm"},Te={class:"relative flex items-stretch flex-grow focus-within:z-10"},Ue=e("div",{class:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"h-5 w-5 text-gray-400",viewBox:"0 0 16 16"},[e("path",{d:"M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"}),e("path",{d:"M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"})])],-1),Fe=["value"],Re={key:0,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"w-4 h-4"},Ge=e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},null,-1),Qe=e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},null,-1),qe=[Ge,Qe],Je={key:1},Ke=e("label",{for:"email",class:"block font-medium"},"Password (optional)",-1),We={class:"mt-1 flex rounded-md shadow-sm"},Xe={class:"relative flex items-stretch flex-grow focus-within:z-10"},Ye=e("div",{class:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"h-5 w-5 text-gray-400",viewBox:"0 0 16 16"},[e("path",{d:"M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"}),e("path",{d:"M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z"})])],-1),$e={key:0,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"w-4 h-4"},et=e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},null,-1),tt=e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},null,-1),st=[et,tt],ot={key:1},nt={class:"flex justify-end items-center mt-10 space-x-3"},lt=["disabled"],it={key:0},at={key:1,class:"flex items-center"},rt=e("svg",{class:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),dt=x(" Applying "),ct=[rt,dt];function mt(c,t,s,L,o,m){const v=d("Link"),g=d("page-item"),y=d("page-option"),k=d("slide-over"),P=d("modal"),a=d("Layout");return n(),f(a,null,{default:u(()=>[e("div",re,[e("div",de,[e("div",ce,[e("h3",me,b(s.project.name),1),e("div",pe,[_(v,{href:c.route("archiveProject",s.project.id),class:"btn-outline"},{default:u(()=>[ue]),_:1},8,["href"]),e("button",{onClick:t[0]||(t[0]=i=>o.showShare=!o.showShare),class:"btn-primary"},"Share")])]),Object.keys(s.pages).length?(n(),l("div",he,[e("div",null,[e("div",ge,[fe,e("div",_e,[e("button",{onClick:t[1]||(t[1]=i=>o.createPage=!0),class:"btn-primary"},"Create a page")])]),e("div",ve,[e("div",we,[e("div",xe,[e("div",be,[ye,e("ul",ke,[(n(!0),l(p,null,h(s.pages,i=>(n(),f(g,{project:s.project,node:i,pages:s.pages},null,8,["project","node","pages"]))),256))])])])])])])])):r("",!0),Object.keys(s.pages).length?r("",!0):(n(),l("div",Pe,[je,e("button",{onClick:t[2]||(t[2]=i=>o.createPage=!0),type:"button",class:"btn-primary"},"Create a page")]))])]),_(k,{open:o.createPage,onCloseSlider:t[6]||(t[6]=i=>o.createPage=!1),title:"Create a page"},{default:u(()=>[e("div",Ce,[e("div",null,[Le,e("div",Se,[w(e("input",{type:"text",name:"page",id:"page","onUpdate:modelValue":t[3]||(t[3]=i=>o.newPage=i),class:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md",placeholder:"e.g. Home, About page, December Newsletter"},null,512),[[j,o.newPage]])])]),e("div",null,[Me,e("div",Ae,[w(e("select",{name:"parent_page",id:"parent_page","onUpdate:modelValue":t[4]||(t[4]=i=>o.parentPageId=i),class:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"},[ze,(n(!0),l(p,null,h(s.pages,i=>(n(),f(y,{node:i},null,8,["node"]))),256))],512),[[M,o.parentPageId]])])]),e("button",{onClick:t[5]||(t[5]=i=>m.savePage()),class:"btn-primary",disabled:o.newPageLoading},[o.newPageLoading?r("",!0):(n(),l("span",De,"Save")),o.newPageLoading?(n(),l("span",Ve,Ie)):r("",!0)],8,Be)])]),_:1},8,["open"]),_(P,{open:o.showShare,onCloseModal:t[12]||(t[12]=i=>o.showShare=!1)},{default:u(()=>[e("div",Ne,[Ee,e("div",Ze,[e("div",Te,[Ue,e("input",{type:"text",name:"link",id:"link",value:c.route("viewSharedProject",[s.project.id,s.project.uuid]),class:"focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300",readonly:""},null,8,Fe)]),e("button",{onClick:t[7]||(t[7]=i=>m.copyLink(c.route("viewSharedProject",[s.project.id,s.project.uuid]))),type:"button",class:"-ml-px relative inline-flex items-center space-x-2 px-4 py-2 bg-black text-sm font-medium rounded-r-md text-white hover:bg-indigo-700"},[o.copiedLink?r("",!0):(n(),l("svg",Re,qe)),o.copiedLink?(n(),l("span",Je,"Copied!")):r("",!0)])])]),e("div",null,[Ke,e("div",We,[e("div",Xe,[Ye,w(e("input",{type:"text",name:"share_password","onUpdate:modelValue":t[8]||(t[8]=i=>s.project.password=i),class:"focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"},null,512),[[j,s.project.password]])]),e("button",{onClick:t[9]||(t[9]=i=>m.copyPassword(s.project.password)),type:"button",class:"-ml-px relative inline-flex items-center space-x-2 px-4 py-2 bg-black text-sm font-medium rounded-r-md text-white hover:bg-indigo-700"},[o.copiedPassword?r("",!0):(n(),l("svg",$e,st)),o.copiedPassword?(n(),l("span",ot,"Copied!")):r("",!0)])])]),e("div",nt,[e("button",{onClick:t[10]||(t[10]=i=>o.showShare=!1),class:"btn-outline"},"Cancel"),e("button",{onClick:t[11]||(t[11]=i=>m.savePassword()),type:"button",class:"btn-primary",disabled:o.savingShareSettings},[o.savingShareSettings?r("",!0):(n(),l("span",it,"Apply")),o.savingShareSettings?(n(),l("span",at,ct)):r("",!0)],8,lt)])]),_:1},8,["open"])]),_:1})}const xt=C(ae,[["render",mt]]);export{xt as default};
