(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),r=a(56),n=a.n(r),d=a(39),o=a(14),i=a(12),l=Object(d.b)({name:"todo",initialState:{todos:[],isLoading:!1,isError:!1,createTask:{id:null,date:"",status:"",task:"",assign:"",links:"",result:""},complatedTasks:[]},reducers:{setTodo:function(e,t){e.todos=Object(i.a)(t.payload)},setCompletedTodo:function(e,t){e.complatedTasks=Object(i.a)(t.payload)},setTodoLoading:function(e){e.isLoading=!0},setTodoError:function(e,t){e.isError=t.payload},setComplatedTask:function(e,t){var a=e.todos.filter((function(e){return Number(e.id)===Number(t.payload)})),s=e.todos.filter((function(e){return Number(e.id)!==Number(t.payload)}));e.todos=s,e.complatedTasks=[].concat(Object(i.a)(e.complatedTasks),Object(i.a)(a)),localStorage.setItem("todos",JSON.stringify(s)),localStorage.setItem("completed",JSON.stringify(e.complatedTasks))},setReturnTask:function(e,t){var a=e.complatedTasks.filter((function(e){return Number(e.id)===Number(t.payload)})),s=e.complatedTasks=e.complatedTasks.filter((function(e){return Number(e.id)!==Number(t.payload)}));e.todos=[].concat(Object(i.a)(e.todos),Object(i.a)(a)),localStorage.setItem("completed",JSON.stringify(s)),localStorage.setItem("todos",JSON.stringify(e.todos))},setCreateDate:function(e,t){e.createTask=Object(o.a)(Object(o.a)({},e.createTask),{},{date:t.payload})},setCreateAssing:function(e,t){e.createTask=Object(o.a)(Object(o.a)({},e.createTask),{},{assign:t.payload})},setCreateStatus:function(e,t){e.createTask=Object(o.a)(Object(o.a)({},e.createTask),{},{status:t.payload})},setCreateNewTask:function(e,t){"Critical"===t.payload.status?e.todos.unshift(t.payload):e.todos.push(t.payload)},setCreateLinks:function(e,t){e.createTask=Object(o.a)(Object(o.a)({},e.createTask),{},{links:t.payload})},setCreateResult:function(e,t){e.createTask=Object(o.a)(Object(o.a)({},e.createTask),{},{result:t.payload})},setCreateTaskName:function(e,t){e.createTask=Object(o.a)(Object(o.a)({},e.createTask),{},{task:t.payload})}}}),j=l.actions,b=j.setTodo,u=j.setCompletedTodo,O=(j.setTodoError,j.setTodoLoading,j.setCreateDate),m=j.setCreateAssing,p=j.setCreateStatus,k=j.setCreateNewTask,x=j.setCreateTaskName,h=(j.setCreateResult,j.setCreateLinks,j.setReturnTask),f=j.setComplatedTask,g=l.reducer,N=Object(d.a)({reducer:{todo:g}}),v=a(20),T=a(117),y=a(111),_=a(109),S=a(62),C=a(110),I=a(11),J=a(113),F=a(107),w=a(115),L=a(116),E=a(1),A=function(e){var t=e.id,a=e.date,s=e.task,r=e.status,n=e.links,d=e.result,o=e.assign,i=Object(v.b)(),l=c.a.useState(!1),j=Object(I.a)(l,2),b=j[0],u=j[1];return Object(E.jsxs)("div",{className:"task",children:[Object(E.jsxs)("div",{className:"task__input d-flex bordered",children:[Object(E.jsx)("input",{type:"checkbox",id:t,checked:b,onChange:function(){u((function(e){return!e})),i(f(t))}}),Object(E.jsx)("label",{htmlFor:t,children:a})]}),Object(E.jsx)("div",{className:"task__status d-flex bordered",children:Object(E.jsx)("div",{style:"Normal"===r?{background:"#b7db95"}:{background:"#F73F3F",color:"#fff"},className:"task__status-oval bordered",children:Object(E.jsx)("span",{children:r})})}),Object(E.jsx)("div",{style:{padding:"8px",boxSizing:"border-box"},className:"task__name bordered",children:Object(E.jsx)("span",{children:s})}),Object(E.jsx)("div",{className:"task__name d-flex bordered",children:Object(E.jsxs)("span",{children:["Assign: ",o]})}),Object(E.jsx)("div",{className:"task__name d-flex bordered",children:Object(E.jsx)("span",{children:n})}),Object(E.jsx)("div",{className:"task__name d-flex bordered",children:Object(E.jsx)("span",{children:d})})]})},D=a(112),R=function(e){var t=e.field,a=e.headerName,s=e.editable,r=e.value,n=e.isInput,d=Object(v.b)(),o=c.a.useState(""),i=Object(I.a)(o,2),l=i[0],j=i[1],b=c.a.useState(""),u=Object(I.a)(b,2),k=u[0],x=u[1];return s?Object(E.jsxs)("select",{name:t,id:t,value:l,onChange:function(e){var a=e.target.value;j(a),d("status"===t?p(a):m(a))},style:"status"===t?{fontWeight:"400"}:{},children:["status"===t?Object(E.jsx)("option",{value:"",children:"Priority"}):Object(E.jsx)("option",{value:"",children:"Assigns"}),r.map((function(e,t){return Object(E.jsx)("option",{value:e,children:e},t)}))]}):n&&"date"===t?Object(E.jsx)("input",{value:k,onChange:function(e){var t=e.target.value,a=t.replace(/[-]/g,".");x(t),d(O(a))},type:"date",name:"date"}):Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(D.a,{children:a})})},z=function(e){var t=e.id,a=e.date,s=e.task,r=e.status,n=e.links,d=e.result,o=e.assign,i=Object(v.b)(),l=c.a.useState(!0),j=Object(I.a)(l,2),b=j[0],u=j[1];return Object(E.jsxs)("div",{className:"task",children:[Object(E.jsxs)("div",{className:"task__input d-flex bordered",children:[Object(E.jsx)("input",{type:"checkbox",id:t,checked:b,onChange:function(e){u(e.target.checked),i(h(t))}}),Object(E.jsx)("label",{htmlFor:t,children:a})]}),Object(E.jsx)("div",{className:"task__status d-flex bordered",children:Object(E.jsx)("div",{style:"Normal"===r?{background:"#b7db95"}:{background:"#F73F3F",color:"#fff"},className:"task__status-oval",children:Object(E.jsx)("span",{children:r})})}),Object(E.jsx)("div",{className:"task__name bordered",style:{padding:"8px",boxSizing:"border-box"},children:Object(E.jsx)("span",{children:s})}),Object(E.jsx)("div",{className:"task__name d-flex bordered",children:Object(E.jsxs)("span",{children:["Assign: ",o]})}),Object(E.jsx)("div",{className:"task__name d-flex bordered",style:{border:"1px solid rgb(209, 209, 209)"},children:Object(E.jsx)("span",{children:n})}),Object(E.jsx)("div",{className:"task__name d-flex bordered ",children:Object(E.jsx)("span",{children:d})})]})},B=function(e){var t=e.columns,a=Object(v.b)(),s=Object(v.c)((function(e){return e.todo})),r=s.createTask,n=s.isLoading,d=s.isError,l=s.todos,j=s.complatedTasks,b=c.a.useState(""),u=Object(I.a)(b,2),O=u[0],m=u[1];return n?Object(E.jsx)(J.a,{color:"success",determinate:!1,size:"md",value:25,variant:"plain"}):d?Object(E.jsx)(F.a,{severity:"error",children:Object(E.jsx)(w.a,{children:"Something wrong...."})}):Object(E.jsx)(L.a,{children:Object(E.jsxs)("div",{className:"parent",children:[Object(E.jsx)("div",{className:"parent__header",children:t.map((function(e){return Object(E.jsx)(R,Object(o.a)({},e),e.field)}))}),Object(E.jsxs)("div",{className:"parent__body",children:[Object(E.jsxs)("div",{className:"parent__body-task",children:[Object(E.jsx)("input",{type:"text",name:"createTask",placeholder:"type to create a task",value:O,onChange:function(e){var t=e.target.value;m(t),setTimeout((function(){a(x(t))}),400)}}),Object(E.jsx)("button",{className:"parent__body-button",onClick:function(){var e={id:r.id?r.id:Math.floor(990*Math.random())+10,date:r.date?r.date:(new Date).toLocaleDateString(),status:"Critical"===r.status?r.status:"Normal",task:r.task?r.task:"New Task",assign:r.assign?r.assign:"You",links:r.links?r.links:"",result:r.result?r.result:"In work",cheked:!1};a(k(e));var t=localStorage.getItem("todos");if(t){var s=JSON.parse(t);localStorage.setItem("todos",JSON.stringify([e].concat(Object(i.a)(s))))}else localStorage.setItem("todos",JSON.stringify([e]))},children:"Create"})]}),Object(E.jsx)("div",{className:"body__task",children:l.map((function(e){return Object(E.jsx)(A,Object(o.a)({},e),e.id)}))}),Object(E.jsx)("div",{className:"completed__tasks completed",children:j.map((function(e){return Object(E.jsx)(z,Object(o.a)({},e),e.id)}))})]})]})})},M=[{field:"date",headerName:"Date",isInput:!0},{field:"status",headerName:"Status",editable:!0,value:["Normal","Critical"]},{field:"task",headerName:"Task",isInput:!0},{field:"assign",headerName:"Assign",editable:!0,value:["NOT","Bro","You"]},{field:"links",headerName:"Links",isInput:!0},{field:"result",isInput:!0,headerName:"Result"}],W=function(){var e=Object(v.b)();Object(s.useEffect)((function(){var t=localStorage.getItem("todos");t&&e(b(JSON.parse(t)));var a=localStorage.getItem("completed");a&&e(u(JSON.parse(a)))}),[e]);var t=Object(S.a)();return Object(E.jsx)(C.a,{theme:t,children:Object(E.jsx)(_.a,{component:"main",maxWidth:"xl",children:Object(E.jsx)(y.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:Object(E.jsx)(T.a,{sx:{width:"100%"},children:Object(E.jsx)(B,{error:!1,columns:M})})})})})},Y=function(){return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(W,{})})};a(80);n.a.createRoot(document.getElementById("root")).render(Object(E.jsx)(v.a,{store:N,children:Object(E.jsx)(Y,{})}))}},[[81,1,2]]]);
//# sourceMappingURL=main.437606d6.chunk.js.map