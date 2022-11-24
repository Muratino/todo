(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{87:function(t,e,a){},89:function(t,e,a){"use strict";a.r(e);var s=a(0),o=a.n(s),r=a(59),c=a.n(r),n=a(41),i=a(11),d=a(2),l=Object(n.b)({name:"todo",initialState:{todos:[],filterTodos:[],isFiltering:!0,isLoading:!1,isError:!1,createTask:{id:null,date:"",status:"",task:"",assign:"",links:"",result:""},complatedTasks:[]},reducers:{setTodo:function(t,e){t.todos=Object(d.a)(e.payload)},setCompletedTodo:function(t,e){t.complatedTasks=Object(d.a)(e.payload)},setDeleteTask:function(t,e){var a=t.todos.filter((function(t){return Number(t.id)!==Number(e.payload)}));t.todos=a,localStorage.setItem("todos",JSON.stringify(a))},setChangeTaskStatus:function(t,e){var a=t.todos.find((function(t){return Number(t.id)===Number(e.payload.id)})),s=t.todos.filter((function(t){return"Critical"===String(t.status)&&Number(t.id)!==Number(e.payload.id)})),o=t.todos.filter((function(t){return"Major"===String(t.status)&&Number(t.id)!==Number(e.payload.id)})),r=t.todos.filter((function(t){return"Minor"===String(t.status)&&Number(t.id)!==Number(e.payload.id)}));switch(a.status=e.payload.status,a.status){case"Critical":t.todos=[a].concat(Object(d.a)(s),Object(d.a)(o),Object(d.a)(r)),localStorage.setItem("todos",JSON.stringify(t.todos));break;case"Major":t.todos=[].concat(Object(d.a)(s),[a],Object(d.a)(o),Object(d.a)(r)),localStorage.setItem("todos",JSON.stringify(t.todos));break;case"Minor":t.todos=[].concat(Object(d.a)(s),Object(d.a)(o),[a],Object(d.a)(r)),localStorage.setItem("todos",JSON.stringify(t.todos));break;default:console.log("Error with switchCase")}},setChangeTaskDate:function(t,e){var a=t.todos.find((function(t){return Number(t.id)===Number(e.payload.id)})),s=t.todos.filter((function(t){return"Critical"===String(t.status)&&Number(t.id)!==Number(e.payload.id)})),o=t.todos.filter((function(t){return"Major"===String(t.status)&&Number(t.id)!==Number(e.payload.id)})),r=t.todos.filter((function(t){return"Minor"===String(t.status)&&Number(t.id)!==Number(e.payload.id)}));switch(a.date=e.payload.date,a.status){case"Critical":t.todos=[a].concat(Object(d.a)(s),Object(d.a)(o),Object(d.a)(r));break;case"Major":t.todos=[].concat(Object(d.a)(s),[a],Object(d.a)(o),Object(d.a)(r));break;case"Minor":t.todos=[].concat(Object(d.a)(s),Object(d.a)(o),[a],Object(d.a)(r))}localStorage.setItem("todos",JSON.stringify(t.todos))},setChangeTaskAssign:function(t,e){var a=t.todos.find((function(t){return Number(t.id)===Number(e.payload.id)})),s=t.todos.filter((function(t){return"Critical"===String(t.status)&&Number(t.id)!==Number(e.payload.id)})),o=t.todos.filter((function(t){return"Major"===String(t.status)&&Number(t.id)!==Number(e.payload.id)})),r=t.todos.filter((function(t){return"Minor"===String(t.status)&&Number(t.id)!==Number(e.payload.id)}));switch(a.assign=e.payload.assign,a.status){case"Critical":t.todos=[a].concat(Object(d.a)(s),Object(d.a)(o),Object(d.a)(r));break;case"Major":t.todos=[].concat(Object(d.a)(s),[a],Object(d.a)(o),Object(d.a)(r));break;case"Minor":t.todos=[].concat(Object(d.a)(s),Object(d.a)(o),[a],Object(d.a)(r))}localStorage.setItem("todos",JSON.stringify(t.todos))},setChangeTaskLinks:function(t,e){var a=t.todos.find((function(t){return Number(t.id)===Number(e.payload.id)})),s=t.todos.filter((function(t){return"Critical"===String(t.status)&&Number(t.id)!==Number(e.payload.id)})),o=t.todos.filter((function(t){return"Major"===String(t.status)&&Number(t.id)!==Number(e.payload.id)})),r=t.todos.filter((function(t){return"Minor"===String(t.status)&&Number(t.id)!==Number(e.payload.id)}));switch(a.links=e.payload.links,a.status){case"Critical":t.todos=[a].concat(Object(d.a)(s),Object(d.a)(o),Object(d.a)(r));break;case"Major":t.todos=[].concat(Object(d.a)(s),[a],Object(d.a)(o),Object(d.a)(r));break;case"Minor":t.todos=[].concat(Object(d.a)(s),Object(d.a)(o),[a],Object(d.a)(r))}localStorage.setItem("todos",JSON.stringify(t.todos))},setChangeTaskName:function(t,e){var a=t.todos.find((function(t){return Number(t.id)===Number(e.payload.id)})),s=t.todos.filter((function(t){return"Critical"===String(t.status)&&Number(t.id)!==Number(e.payload.id)})),o=t.todos.filter((function(t){return"Major"===String(t.status)&&Number(t.id)!==Number(e.payload.id)})),r=t.todos.filter((function(t){return"Minor"===String(t.status)&&Number(t.id)!==Number(e.payload.id)}));switch(a.task=e.payload.task,a.status){case"Critical":t.todos=[a].concat(Object(d.a)(s),Object(d.a)(o),Object(d.a)(r));break;case"Major":t.todos=[].concat(Object(d.a)(s),[a],Object(d.a)(o),Object(d.a)(r));break;case"Minor":t.todos=[].concat(Object(d.a)(s),Object(d.a)(o),[a],Object(d.a)(r))}localStorage.setItem("todos",JSON.stringify(t.todos))},setDeleteCompletedTask:function(t,e){var a=t.complatedTasks=t.complatedTasks.filter((function(t){return Number(t.id)!==Number(e.payload)}));t.complatedTasks=a,localStorage.setItem("completed",JSON.stringify(a))},setTodoLoading:function(t){t.isLoading=!0},setTodoError:function(t,e){t.isError=e.payload},setComplatedTask:function(t,e){var a=t.todos.filter((function(t){return Number(t.id)===Number(e.payload)})),s=t.todos.filter((function(t){return Number(t.id)!==Number(e.payload)})),o=t.complatedTasks.filter((function(t){return"Critical"===String(t.status)&&Number(t.id)!==Number(e.payload)})),r=t.complatedTasks.filter((function(t){return"Major"===String(t.status)&&Number(t.id)!==Number(e.payload)})),c=t.complatedTasks.filter((function(t){return"Minor"===String(t.status)&&Number(t.id)!==Number(e.payload)}));switch(a[0].status){case"Critical":t.complatedTasks=[].concat(Object(d.a)(a),Object(d.a)(o),Object(d.a)(r),Object(d.a)(c));break;case"Major":t.complatedTasks=[].concat(Object(d.a)(o),Object(d.a)(a),Object(d.a)(r),Object(d.a)(c));break;case"Minor":t.complatedTasks=[].concat(Object(d.a)(o),Object(d.a)(r),Object(d.a)(a),Object(d.a)(c))}t.todos=s,localStorage.setItem("todos",JSON.stringify(s)),localStorage.setItem("completed",JSON.stringify(t.complatedTasks))},setReturnTask:function(t,e){var a=t.complatedTasks.filter((function(t){return Number(t.id)===Number(e.payload)})),s=t.complatedTasks=t.complatedTasks.filter((function(t){return Number(t.id)!==Number(e.payload)})),o=t.todos.filter((function(t){return"Critical"===String(t.status)&&Number(t.id)!==Number(e.payload)})),r=t.todos.filter((function(t){return"Major"===String(t.status)&&Number(t.id)!==Number(e.payload)})),c=t.todos.filter((function(t){return"Minor"===String(t.status)&&Number(t.id)!==Number(e.payload)}));switch(a[0].status){case"Critical":t.todos=[].concat(Object(d.a)(a),Object(d.a)(o),Object(d.a)(r),Object(d.a)(c));break;case"Major":t.todos=[].concat(Object(d.a)(o),Object(d.a)(a),Object(d.a)(r),Object(d.a)(c));break;case"Minor":t.todos=[].concat(Object(d.a)(o),Object(d.a)(r),Object(d.a)(a),Object(d.a)(c))}t.complatedTasks=s,localStorage.setItem("completed",JSON.stringify(s)),localStorage.setItem("todos",JSON.stringify(t.todos))},setCreateDate:function(t,e){t.createTask=Object(i.a)(Object(i.a)({},t.createTask),{},{date:e.payload})},setCreateAssing:function(t,e){t.createTask=Object(i.a)(Object(i.a)({},t.createTask),{},{assign:e.payload})},setCreateStatus:function(t,e){t.createTask=Object(i.a)(Object(i.a)({},t.createTask),{},{status:e.payload})},setCreateNewTask:function(t,e){var a=t.todos.filter((function(t){return"Critical"===String(t.status)&&Number(t.id)!==Number(e.payload.id)})),s=t.todos.filter((function(t){return"Major"===String(t.status)&&Number(t.id)!==Number(e.payload.id)})),o=t.todos.filter((function(t){return"Minor"===String(t.status)&&Number(t.id)!==Number(e.payload.id)}));switch(e.payload.status){case"Critical":t.todos=[e.payload].concat(Object(d.a)(a),Object(d.a)(s),Object(d.a)(o)),t.filterTodos=[e.payload].concat(Object(d.a)(a)),localStorage.setItem("todos",JSON.stringify(t.todos));break;case"Major":t.todos=[].concat(Object(d.a)(a),[e.payload],Object(d.a)(s),Object(d.a)(o)),t.filterTodos=[e.payload].concat(Object(d.a)(s)),localStorage.setItem("todos",JSON.stringify(t.todos));break;case"Minor":t.todos=[].concat(Object(d.a)(a),Object(d.a)(s),[e.payload],Object(d.a)(o)),t.filterTodos=[e.payload].concat(Object(d.a)(o)),localStorage.setItem("todos",JSON.stringify(t.todos))}},setCreateLinks:function(t,e){t.createTask=Object(i.a)(Object(i.a)({},t.createTask),{},{links:e.payload})},setCreateResult:function(t,e){t.createTask=Object(i.a)(Object(i.a)({},t.createTask),{},{result:e.payload})},setCreateTaskName:function(t,e){t.createTask=Object(i.a)(Object(i.a)({},t.createTask),{},{task:e.payload})},setFileter:function(t,e){if(!e.payload.value)return t.isFiltering=!1,void(t.filterTodos=[]);switch(t.isFiltering=!0,e.payload.type){case"date":t.filterTodos=Object(d.a)(t.todos);var a=t.filterTodos.filter((function(t){return t.date==e.payload.value}));t.filterTodos=Object(d.a)(a);break;case"status":t.filterTodos=Object(d.a)(t.todos);var s=t.filterTodos.filter((function(t){return t.status==e.payload.value}));t.filterTodos=Object(d.a)(s);break;case"assign":t.filterTodos=Object(d.a)(t.todos);var o=t.filterTodos.filter((function(t){return t.assign==e.payload.value}));t.filterTodos=Object(d.a)(o)}},deletFilters:function(t){for(var e in t.isFiltering=!1,t.filterTodos=[],t.createTask)t.createTask[e]="id"==e?null:""}}}),u=l.actions,b=u.setChangeTaskStatus,j=u.setChangeTaskName,O=u.deletFilters,f=u.setFileter,m=u.setChangeTaskLinks,p=u.setChangeTaskDate,g=u.setChangeTaskAssign,k=u.setTodo,N=u.setCompletedTodo,h=u.setDeleteCompletedTask,x=u.setDeleteTask,y=(u.setTodoError,u.setTodoLoading,u.setCreateDate),v=u.setCreateAssing,T=u.setCreateStatus,S=u.setCreateNewTask,C=u.setCreateTaskName,_=(u.setCreateResult,u.setCreateLinks,u.setReturnTask),M=u.setComplatedTask,I=l.reducer,J=Object(n.a)({reducer:{todo:I}}),w=a(20),F=a(116),D=a(120),L=a(118),A=a(67),E=a(119),R=a(7),z=a(122),B=a(115),W=a(44),P=a.n(W),q=function(t,e){return e?t.split(".").reverse().join("-"):t.split("-").reverse().join(".")},G=function(t){return"Minor"===t?{background:"#b7db95"}:"Major"===t?{background:"rgb(255 249 73 / 95%)"}:{background:"#F73F3F",color:"#fff"}},H=a(1),K=function(t){var e=t.id,a=t.date,s=t.task,r=t.status,c=t.links,n=t.result,i=t.assign,d=Object(w.b)(),l=o.a.useState(!1),u=Object(R.a)(l,2),O=u[0],f=u[1],k=o.a.useState(!1),N=Object(R.a)(k,2),h=N[0],y=N[1],v=o.a.useState(a),T=Object(R.a)(v,2),S=T[0],C=T[1],_=o.a.useState(i),I=Object(R.a)(_,2),J=I[0],F=I[1],D=o.a.useState(c),L=Object(R.a)(D,2),A=L[0],E=L[1],z=o.a.useState(s),W=Object(R.a)(z,2),K=W[0],Q=W[1],U=G(r);return Object(H.jsxs)("div",{className:"task",children:[Object(H.jsxs)("div",{className:"task__input d-flex bordered",children:[Object(H.jsx)("input",{type:"checkbox",id:e,checked:O,onChange:function(){f((function(t){return!t})),d(M(e))}}),Object(H.jsx)("input",{type:"date",name:"date".concat(e),value:q(S,!0),onChange:function(t){var a=t.target.value;C(a),d(p({id:e,date:q(a)}))}})]}),Object(H.jsx)("div",{className:"task__status d-flex bordered",children:Object(H.jsx)("div",{style:U,className:"task__status-oval bordered",children:Object(H.jsxs)("select",{style:U,name:"status".concat(e),id:"status".concat(e),value:h,onChange:function(t){var a=t.target.value;y(a),d(b({id:e,status:a}))},children:[Object(H.jsx)("option",{value:"",children:r}),Y.map((function(t,e){return t===r?null:Object(H.jsx)("option",{value:t,children:t},e)}))]})})}),Object(H.jsx)("div",{style:{padding:"8px",boxSizing:"border-box"},className:"task__name bordered",children:Object(H.jsx)("input",{type:"text",name:"task".concat(e),value:K,onChange:function(t){var a=t.target.value;Q(a),setTimeout((function(){d(j({id:e,task:a}))}),400)}})}),Object(H.jsxs)("div",{className:"task__name d-flex bordered",children:[Object(H.jsx)("span",{children:"Assign:"}),Object(H.jsxs)("select",{name:"assign".concat(e),id:"assign".concat(e),value:J,onChange:function(t){var a=t.target.value;F(a),d(g({id:e,assign:a}))},children:[Object(H.jsx)("option",{value:"",children:i}),Z.map((function(t,e){return t===i?null:Object(H.jsx)("option",{value:t,children:t},e)}))]})]}),Object(H.jsx)("div",{className:"task__name d-flex bordered",children:Object(H.jsx)("input",{type:"text",name:"links".concat(e),value:A,onChange:function(t){var a=t.target.value;E(a),setTimeout((function(){d(m({id:e,links:a}))}),400)}})}),Object(H.jsx)("div",{className:"task__name d-flex bordered",children:Object(H.jsx)("span",{children:n})}),Object(H.jsx)("div",{className:"task__name d-flex bordered",children:Object(H.jsx)(B.a,{onClick:function(){d(x(e))},color:"error","aria-label":"delete",size:"large",sx:{padding:0},children:Object(H.jsx)(P.a,{})})})]})},Q=a(121),U=function(t){var e=t.field,a=t.headerName,s=t.editable,r=t.value,c=t.isInput,n=Object(w.b)(),i=o.a.useState(""),d=Object(R.a)(i,2),l=d[0],u=d[1],b=o.a.useState(""),j=Object(R.a)(b,2),O=j[0],m=j[1];return s?Object(H.jsxs)("select",{name:e,id:e,value:l,onChange:function(t){var a=t.target.value;u(a),n("status"===e?T(a):v(a)),n(f({type:"status"===e?"status":"assign",value:a}))},style:"status"===e?{fontWeight:"400"}:{},children:["status"===e?Object(H.jsx)("option",{value:"",children:"Priority"}):Object(H.jsx)("option",{value:"",children:"Assigns"}),r.map((function(t,e){return Object(H.jsx)("option",{value:t,children:t},e)}))]}):c&&"date"===e?Object(H.jsx)("input",{value:O,onChange:function(t){var e=t.target.value,a=q(e);m(e),n(y(a)),n(f({type:"date",value:a}))},type:"date",name:"date"}):Object(H.jsx)(H.Fragment,{children:Object(H.jsx)(Q.a,{children:a})})},V=function(t){var e=t.id,a=t.date,s=t.task,r=t.status,c=t.links,n=t.result,i=t.assign,d=Object(w.b)(),l=o.a.useState(!0),u=Object(R.a)(l,2),b=u[0],j=u[1],O=G(r);return Object(H.jsxs)("div",{className:"task",children:[Object(H.jsxs)("div",{className:"task__input d-flex bordered",children:[Object(H.jsx)("input",{type:"checkbox",id:e,checked:b,onChange:function(t){j(t.target.checked),d(_(e))}}),Object(H.jsx)("label",{htmlFor:e,children:a})]}),Object(H.jsx)("div",{className:"task__status d-flex bordered",children:Object(H.jsx)("div",{style:O,className:"task__status-oval",children:Object(H.jsx)("span",{children:r})})}),Object(H.jsx)("div",{className:"task__name bordered",style:{padding:"8px",boxSizing:"border-box"},children:Object(H.jsx)("span",{children:s})}),Object(H.jsx)("div",{className:"task__name d-flex bordered",children:Object(H.jsxs)("span",{children:["Assign: ",i]})}),Object(H.jsx)("div",{className:"task__name d-flex bordered",style:{border:"1px solid rgb(209, 209, 209)"},children:Object(H.jsx)("span",{children:c})}),Object(H.jsx)("div",{className:"task__name d-flex bordered ",children:Object(H.jsx)("span",{children:n})}),Object(H.jsx)("div",{className:"task__name d-flex bordered",children:Object(H.jsx)(B.a,{onClick:function(){d(h(e))},color:"error","aria-label":"delete",size:"large",sx:{padding:0},children:Object(H.jsx)(P.a,{})})})]})},X=function(t){var e=t.columns,a=Object(w.b)(),r=Object(w.c)((function(t){return t.todo})),c=r.createTask,n=r.todos,d=r.complatedTasks,l=r.isFiltering,u=r.filterTodos,b=o.a.useState(""),j=Object(R.a)(b,2),f=j[0],m=j[1];return Object(s.useEffect)((function(){a(O())}),[]),Object(H.jsx)(z.a,{children:Object(H.jsxs)("div",{className:"parent",children:[Object(H.jsx)("div",{className:"parent__header",children:e.map((function(t){return Object(H.jsx)(U,Object(i.a)({},t),t.field)}))}),Object(H.jsxs)("div",{className:"parent__body",children:[Object(H.jsxs)("div",{className:"parent__body-task",children:[Object(H.jsx)("input",{type:"text",name:"createTask",placeholder:"type to create a task",value:f,onChange:function(t){var e=t.target.value;m(e),setTimeout((function(){a(C(e))}),400)}}),Object(H.jsx)("button",{className:"parent__body-button",onClick:function(){var t={id:c.id?c.id:Math.floor(990*Math.random())+10,date:c.date?c.date:(new Date).toLocaleDateString(),status:c.status?c.status:"Minor",task:c.task?c.task:"New Task ...",assign:c.assign?c.assign:"Me",links:c.links?c.links:"",result:c.result?c.result:"In work",cheked:!1};a(S(t))},children:"Create"})]}),Object(H.jsx)("div",{className:"body__task",children:l?u.map((function(t){return Object(H.jsx)(K,Object(i.a)({},t),t.id)})):n.map((function(t){return Object(H.jsx)(K,Object(i.a)({},t),t.id)}))}),Object(H.jsx)("div",{className:"completed__tasks completed",children:d.map((function(t){return Object(H.jsx)(V,Object(i.a)({},t),t.id)}))})]})]})})},Y=["Critical","Major","Minor"],Z=["Some","Bro","Me"],$=[{field:"date",headerName:"Date",isInput:!0},{field:"status",headerName:"Status",editable:!0,value:Y},{field:"task",headerName:"Task",isInput:!0},{field:"assign",headerName:"Assign",editable:!0,value:Z},{field:"links",headerName:"Links",isInput:!0},{field:"result",isInput:!0,headerName:"Result"}],tt=function(){var t=Object(w.b)();Object(s.useEffect)((function(){var e=localStorage.getItem("todos");e&&t(k(JSON.parse(e)));var a=localStorage.getItem("completed");a&&t(N(JSON.parse(a)))}),[t]);var e=Object(A.a)();return Object(H.jsx)(E.a,{theme:e,children:Object(H.jsx)(L.a,{component:"main",maxWidth:"xl",children:Object(H.jsx)(D.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:Object(H.jsx)(F.a,{sx:{width:"100%"},children:Object(H.jsx)(X,{error:!1,columns:$})})})})})},et=function(){return Object(H.jsx)(H.Fragment,{children:Object(H.jsx)(tt,{})})};a(87);c.a.createRoot(document.getElementById("root")).render(Object(H.jsx)(w.a,{store:J,children:Object(H.jsx)(et,{})}))}},[[89,1,2]]]);
//# sourceMappingURL=main.b60fa3e7.chunk.js.map