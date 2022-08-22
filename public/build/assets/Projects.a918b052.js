import{L as v,S as g,r as u,o as r,c as b,w as l,a as e,b as i,d as a,g as d,F as w,e as j,n as k,i as P,v as C,f as n,t as f}from"./app.cf216f3d.js";import{L}from"./App.ae0021ff.js";import{S}from"./SlideOver.dc227965.js";import{M as V}from"./ModalLarge.557cea12.js";import{_ as U}from"./_plugin-vue_export-helper.cdc0426e.js";/* empty css            */import"./Toast.ed697e7c.js";import"./transition.a2ca2e02.js";const B="/build/assets/upgrade.bd55717f.svg",M={components:{Link:v,Layout:L,SlideOver:S,ModalLarge:V},props:{projects:Object,newUser:Boolean},data(){return{createProject:!1,newProject:null,newProjectLoading:!1}},methods:{saveProject(){this.newProjectLoading=!0,this.$inertia.post("/projects/create",{name:this.newProject},{preserveScroll:!0,onSuccess:()=>{this.createProject=!1,this.newProject=null,this.newProjectLoading=!1},onError:()=>{this.newProjectLoading=!1}})},closeUpgrade(){g.Inertia.visit("/projects")}}},N={class:"sticky top-0 z-40 bg-white rounded border-b border-gray-300 py-5 px-4 md:px-10 md:flex md:items-center md:justify-between mb-[30px]"},O={class:"text-xl md:text-2xl font-bold flex items-center space-x-[10px]"},z={class:"truncate"},A=n("Projects"),T={key:0,class:"mt-4 md:mt-0 md:ml-16 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-3"},E=n("View archive"),F={class:"max-w-4xl mx-auto space-y-[30px]"},D={key:0,class:"bg-white rounded border border-gray-300"},G={class:"p-5 flex flex-col"},H={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},I={class:"inline-block min-w-full align-middle md:px-6 lg:px-8"},W={class:"min-w-full divide-y divide-gray-300"},Y=e("thead",null,[e("tr",null,[e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left font-semibold text-gray-900 sm:pl-6 md:pl-0"},"Name"),e("th",{scope:"col",class:"py-3.5 px-3 text-left font-semibold text-gray-900 w-3/4 text-right"},"Last updated")])],-1),q={class:"divide-y divide-gray-200"},J={class:"whitespace-nowrap py-4 pl-4 pr-3 font-medium text-gray-900 sm:pl-6 md:pl-0"},K={class:"whitespace-nowrap py-4 px-3 text-black w-3/4 text-right"},Q={key:1,class:"flex flex-col justify-center items-center h-screen -mt-[100px] text-center"},R=e("div",{class:"mb-[30px]"},[e("h3",{class:"text-xl font-bold mb-[15px]"},"You haven't created a project yet"),e("p",{class:"text-black"},[n("Projects are spaces to manage pages, content and media assets."),e("br"),n(" To get started, create your first project.")])],-1),X={class:"flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-3"},Z=n("View archive"),$={class:"space-y-[15px]"},ee=e("label",{for:"project",class:"block text-sm font-medium text-gray-700"},"Project name",-1),te={class:"mt-1"},se={key:0},oe={key:1,class:"flex items-center"},re=e("svg",{class:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),le=n(" Saving "),ae=[re,le],ne={class:"p-5 md:py-10 md:px-20"},ce=e("h3",{class:"text-2xl md:text-4xl font-extrabold mb-8"},"Experience all of CollectContent with a 14-day trial of Pro",-1),ie=e("p",{class:"mb-5"},"We've upgraded you to a free 14-day trial of the Pro plan. Try the full range of features on CollectContent before deciding which plan is right for you.",-1),de=e("p",null,"At the end of your trial, we'll automatically move you to the Free plan unless you choose to upgrade",-1),me=e("div",{class:"flex justify-center mt-12"},[e("img",{src:B,class:"w-[200px] md:w-[300px]"})],-1),pe={class:"flex justify-center mt-12"};function ue(m,t,c,xe,o,x){const p=u("Link"),_=u("slide-over"),h=u("modal-large"),y=u("Layout");return r(),b(y,null,{default:l(()=>[e("div",N,[e("ul",O,[e("li",z,[i(p,{href:"/projects",class:"text-black hover:text-indigo-500 transition-all"},{default:l(()=>[A]),_:1})])]),m.$page.props.permissions["create-projects"]?(r(),a("div",T,[e("div",null,[i(p,{href:m.route("viewArchivedProjects"),class:"btn-outline mr-3 sm:mr-0"},{default:l(()=>[E]),_:1},8,["href"])]),e("div",null,[e("button",{onClick:t[0]||(t[0]=s=>o.createProject=!0),class:"btn-primary"},"Create a project")])])):d("",!0)]),e("div",{class:k(["max-w-5xl mx-auto px-4 relative",{"pt-[50px] pb-[112px]":Object.keys(c.projects).length}])},[e("div",F,[Object.keys(c.projects).length?(r(),a("div",D,[e("div",null,[e("div",G,[e("div",H,[e("div",I,[e("table",W,[Y,e("tbody",q,[(r(!0),a(w,null,j(c.projects,s=>(r(),a("tr",null,[e("td",J,[i(p,{href:m.route("viewProject",s.id),class:"text-black hover:text-brand-dark-blue"},{default:l(()=>[n(f(s.name),1)]),_:2},1032,["href"])]),e("td",K,f(s.updated_at),1)]))),256))])])])])])])])):d("",!0),Object.keys(c.projects).length?d("",!0):(r(),a("div",Q,[R,e("div",X,[i(p,{href:m.route("viewArchivedProjects"),class:"btn-outline mr-3 sm:mr-0"},{default:l(()=>[Z]),_:1},8,["href"]),e("button",{onClick:t[1]||(t[1]=s=>o.createProject=!0),type:"button",class:"btn-primary"},"Create a project")])]))])],2),i(_,{open:o.createProject,onCloseSlider:t[4]||(t[4]=s=>o.createProject=!1),title:"Create a project"},{default:l(()=>[e("div",$,[e("div",null,[ee,e("div",te,[P(e("input",{type:"text",name:"project",id:"project","onUpdate:modelValue":t[2]||(t[2]=s=>o.newProject=s),class:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md",placeholder:"e.g. website name, client name or company name"},null,512),[[C,o.newProject]])])]),e("button",{onClick:t[3]||(t[3]=s=>x.saveProject()),class:"btn-primary"},[o.newProjectLoading?d("",!0):(r(),a("span",se,"Save")),o.newProjectLoading?(r(),a("span",oe,ae)):d("",!0)])])]),_:1},8,["open"]),i(h,{open:c.newUser,onCloseModal:t[6]||(t[6]=s=>c.newUser=!1)},{default:l(()=>[e("div",ne,[ce,ie,de,me,e("div",pe,[e("button",{class:"btn-secondary-large",onClick:t[5]||(t[5]=(...s)=>x.closeUpgrade&&x.closeUpgrade(...s))},"Get started")])])]),_:1},8,["open"])]),_:1})}const je=U(M,[["render",ue]]);export{je as default};
