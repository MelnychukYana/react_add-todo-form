(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(2),s=a(6),l=a(7),c=(a(14),a(1)),o=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],u=a(9),d=a.n(u),m=a(0),j=function(e){var t=e.userName,a=e.userEmail;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(a),children:t})},b=function(e){var t=e.todo,a=t.title,n=t.completed,i=t.user;return Object(m.jsxs)("article",{"data-id":"1",className:d()("TodoInfo",{"TodoInfo--completed":n}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:a}),i&&Object(m.jsx)(j,{userName:i.name,userEmail:i.email,user:i})]})},h=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(b,{todo:e},e.id)}))})};function O(e){return o.find((function(t){return t.id===e}))||null}var f=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(l.a)(Object(l.a)({},e),{},{user:O(e.userId)})})),p=function(){var e=Object(s.a)(o),t=Object(c.useState)(""),a=Object(r.a)(t,2),n=a[0],i=a[1],l=Object(c.useState)(null),u=Object(r.a)(l,2),d=u[0],j=u[1],b=Object(c.useState)(f),p=Object(r.a)(b,2),x=p[0],v=p[1],y=Object(c.useState)(!1),N=Object(r.a)(y,2),S=N[0],I=N[1],g=Object(c.useState)(!1),C=Object(r.a)(g,2),_=C[0],k=C[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){e.preventDefault(),""!==n&&null===d?I(!0):_||null===d||""===n.trim()?""===n||null===d?(k(!0),I(!0)):""===n.trim()&&k(!0):(!function(){var e=x.sort((function(e,t){return e.id-t.id})),t=e[e.length-1].id;d&&v((function(e){return[].concat(Object(s.a)(e),[{id:t+1,title:n,completed:!1,userId:d,user:O(d)}])}))}(),i(""),j(null))},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{htmlFor:"title",children:"Title: "}),Object(m.jsx)("input",{type:"text",id:"title","data-cy":"titleInput",placeholder:"Please enter a title",value:_?"":n,onChange:function(e){i(e.target.value),k(!1)}}),_&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{htmlFor:"select",children:"User: "}),Object(m.jsxs)("select",{"data-cy":"userSelect",id:"select",value:null!==d?d:0,onChange:function(e){j(Number(e.target.value)),I(!1)},children:[Object(m.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),e.map((function(e){var t=e.id,a=e.name;return Object(m.jsx)("option",{value:t,children:a},t)}))]}),S&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(m.jsx)(h,{todos:x})]})};i.a.render(Object(m.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.59e91fec.chunk.js.map