import{L as j,r,o,c as w,w as c,a as e,b as u,f as _,t as l,d as i,i as x,S,F as m,e as h,g as f,n as V,v as O}from"./app.5c2f73c4.js";import{L}from"./Shared.6e1d5182.js";import{E as C,a as U,S as F}from"./tiptap-starter-kit.esm.16882f8b.js";import{F as N}from"./Field.f8f1522c.js";import{_ as B}from"./_plugin-vue_export-helper.cdc0426e.js";/* empty css            */import"./Toast.b710fee4.js";import"./transition.c632c461.js";const P={components:{Link:j,Layout:L,EditorContent:C,Field:N},props:{page:Object,project:Object,sections:Object,fields:Object,selectedSection:Object,uuid:String},data(){return{editor:null,sortOrder:0,statusOptions:["Draft","In Progress","Under Review","Ready To Publish","Published"]}},mounted(){this.editor=new U({content:"<p>I\u2019m running Tiptap with Vue.js. \u{1F389}</p>",extensions:[F.configure({heading:{levels:[1,2]}})]})},beforeUnmount(){this.editor.destroy()},methods:{saveFields(){this.$inertia.post("/projects/"+this.project.id+"/pages/"+this.page.id+"/fields",{sectionID:this.selectedSection.id,fields:this.fields},{preserveScroll:!0})},changeStatus(){this.$inertia.post(route("changeStatus",[this.project.id,this.page.id]),{status:this.page.status},{preserveScroll:!0})}}},T={class:"sticky top-0 z-40 bg-white rounded border-b border-gray-300 py-5 px-4 md:px-10 md:flex md:items-center md:justify-between mb-[30px]"},D={class:"text-2xl font-bold flex items-center space-x-[10px]"},E=e("li",{class:"text-black"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-right"},[e("polyline",{points:"9 18 15 12 9 6"})])],-1),I={class:"text-gray-600"},z={key:0,class:"mt-4 md:mt-0 md:ml-16 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-3"},M={class:"max-w-4xl mx-auto px-4 relative pt-[10px] pb-[100px]"},R={class:"mb-10"},K={class:"block"},q={class:"border-b border-gray-300"},A={class:"-mb-px flex justify-between items-center","aria-label":"Tabs"},G={class:"flex space-x-8"},H={class:"space-y-[30px]",id:"fields"},J=["data-id"],Q=["onUpdate:modelValue"],W={key:1,class:"flex flex-col justify-center items-center pt-[100px] text-black text-center"},X=e("div",null,[e("h3",{class:"text-xl font-bold mb-[15px]"},"Nothing to see yet!"),e("p",{class:"text-black"},"No page fields have been added yet, please check back later.")],-1),Y=[X];function Z(p,a,t,$,v,b){const g=r("Link"),y=r("field"),k=r("Layout");return o(),w(k,{class:"bg-gray-50"},{default:c(()=>[e("div",T,[e("ul",D,[e("li",null,[u(g,{href:p.route("viewSharedProject",[t.project.id,t.uuid]),class:"text-black hover:text-indigo-500 transition-all"},{default:c(()=>[_(l(t.project.name),1)]),_:1},8,["href"])]),E,e("li",I,l(t.page.name),1)]),Object.keys(t.fields).length?(o(),i("div",z,[e("div",null,[x(e("select",{"onUpdate:modelValue":a[0]||(a[0]=s=>t.page.status=s),class:"border-gray-300 rounded",onChange:a[1]||(a[1]=s=>b.changeStatus())},[(o(!0),i(m,null,h(v.statusOptions,s=>(o(),i("option",null,l(s),1))),256))],544),[[S,t.page.status]])]),e("div",null,[e("button",{onClick:a[2]||(a[2]=s=>b.saveFields()),class:"btn-primary"},"Save")])])):f("",!0)]),e("div",M,[e("div",R,[e("div",K,[e("div",q,[e("nav",A,[e("ul",G,[(o(!0),i(m,null,h(t.sections,s=>(o(),i("li",null,[u(g,{href:p.route("viewSharedSection",[t.project.id,t.uuid,t.page.id,s.id]),class:V(["border-transparent hover:text-indigo-600 hover:border-indigo-500 whitespace-nowrap flex pt-4 pb-2 px-1 border-b-2 font-medium",{"border-indigo-500 text-indigo-600":t.selectedSection.id===s.id}])},{default:c(()=>[_(l(s.name),1)]),_:2},1032,["href","class"])]))),256))])])])])]),e("div",H,[Object.keys(t.fields).length?(o(!0),i(m,{key:0},h(t.fields,(s,d)=>(o(),i("div",{key:s.uuid,"data-id":s.uuid},[x(e("input",{type:"hidden","onUpdate:modelValue":n=>t.fields[d].sort_order=n},null,8,Q),[[O,t.fields[d].sort_order]]),u(y,{modelValue:t.fields[d],"onUpdate:modelValue":n=>t.fields[d]=n,"field-data":s,page:t.page,project:t.project},null,8,["modelValue","onUpdate:modelValue","field-data","page","project"])],8,J))),128)):f("",!0),Object.keys(t.fields).length?f("",!0):(o(),i("div",W,Y))])])]),_:1})}const ne=B(P,[["render",Z]]);export{ne as default};
