(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{58:function(e,t,a){e.exports=a(70)},63:function(e,t,a){},64:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(8),r=a.n(c),l=(a(63),a(13)),i=a(52),u=a(37),d=a(105),m=(a(64),a(106)),s=a(102),f=a(108);var p=function(e){var t=e.addTodo,a=Object(o.useState)({id:"",task:"",completed:!1}),c=Object(u.a)(a,2),r=c[0],i=c[1];return n.a.createElement("form",{className:"todo-form",onSubmit:function(e){e.preventDefault(),r.task.trim()&&(t(Object(l.a)(Object(l.a)({},r),{},{id:Object(f.a)()})),i(Object(l.a)(Object(l.a)({},r),{},{task:""})))}},n.a.createElement(m.a,{label:"Task",type:"text",name:"task",value:r.task,onChange:function(e){i(Object(l.a)(Object(l.a)({},r),{},{task:e.target.value}))}}),n.a.createElement(s.a,{type:"submit"},"Submit"))},b=a(101),v=a(103),E=a(107),O=a(104),g=a(51),j=a.n(g);var k=function(e){var t=e.todo,a=e.toggleComplete,o=e.removeTodo;return n.a.createElement(v.a,{style:{display:"flex"}},n.a.createElement(E.a,{checked:t.completed,onClick:function(){a(t.id)}}),n.a.createElement(d.a,{variant:"body",style:{textDecoration:t.completed?"line-through":null}},t.task),n.a.createElement(O.a,{onClick:function(){o(t.id)}},n.a.createElement(j.a,null)))};var y=function(e){var t=e.todos,a=e.removeTodo,o=e.toggleComplete;return n.a.createElement(b.a,null,t.map((function(e){return n.a.createElement(k,{key:e.id,todo:e,removeTodo:a,toggleComplete:o})})))};var h=function(){var e=Object(o.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1];return Object(o.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-todo-list-todos"));e&&c(e)}),[]),Object(o.useEffect)((function(){localStorage.setItem("react-todo-list-todos",JSON.stringify(a))}),[a]),n.a.createElement("div",{className:"App"},n.a.createElement(d.a,{style:{padding:14},variant:"h3"},"My TodoList"),n.a.createElement(p,{addTodo:function(e){c([e].concat(Object(i.a)(a)))}}),n.a.createElement(y,{todos:a,removeTodo:function(e){c(a.filter((function(t){return t.id!==e})))},toggleComplete:function(e){c(a.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t})))}}))};r.a.render(n.a.createElement(h,null),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.26a7a138.chunk.js.map