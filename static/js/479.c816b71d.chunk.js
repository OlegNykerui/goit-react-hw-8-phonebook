"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[479],{5479:function(n,e,t){t.r(e),t.d(e,{default:function(){return R}});t(2791);var r,i,o,a,c,s,u,l,d=t(5705),x=t(7103),m=t(5218),p=t(9434),f=t(3634),h=function(n){return n.contacts.loading},g=function(n){return n.contacts.filter},b=function(n){return n.contacts.items},j=t(168),v=t(82),Z=(0,v.ZP)(d.l0)(r||(r=(0,j.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  gap: 25px;\n"]))),y=(0,v.ZP)(d.gN)(i||(i=(0,j.Z)(["\n  height: 20px;\n  width: 200px;\n  border: 2px solid orange;\n  border-radius: 10px;\n  margin-left: 145px;\n"]))),w=(0,v.ZP)(d.Bc)(o||(o=(0,j.Z)(["\n  text-align: center;\n  color: red;\n"]))),k=v.ZP.button(a||(a=(0,j.Z)(["\n  width: 100px;\n  height: 30px;\n  margin-left: 200px;\n  background-color: #f8be5338;\n  border: 1px solid orange;\n  border-radius: 5px;\n  margin-bottom: 30px;\n"]))),C=v.ZP.ul(c||(c=(0,j.Z)(["\n  margin: 30px 0 0 0;\n  list-style: none;\n  padding: 0;\n  text-align: center;\n"]))),P=v.ZP.li(s||(s=(0,j.Z)(["\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: space-evenly;\n  font-weight: 500;\n  font-style: italic;\n"]))),_=v.ZP.button(u||(u=(0,j.Z)(["\n  width: 80px;\n  height: 20px;\n  background-color: #f8be5338;\n  border: 1px solid orange;\n  border-radius: 5px;\n"]))),L=t(184),A=function(){var n=(0,p.I0)(),e=(0,p.v9)(b),t=(0,p.v9)(h),r=x.Ry({name:x.Z_().required(),number:x.Z_().required()});return(0,L.jsx)(d.J9,{initialValues:{name:"",number:""},onSubmit:function(t,r){var i=r.resetForm,o=t.name,a=t.number;e.find((function(n){return n.name.toLowerCase()===t.name.toLowerCase()}))?m.ZP.error(" ".concat(t.name," is already in contacts")):n((0,f.el)({name:o,number:a})),i()},validationSchema:r,children:(0,L.jsxs)(Z,{children:[(0,L.jsx)(y,{type:"text",name:"name"}),(0,L.jsx)(w,{name:"name",component:"span"}),(0,L.jsx)(y,{type:"tel",name:"number"}),(0,L.jsx)(w,{name:"number",component:"span"}),(0,L.jsx)(k,{type:"submit",children:t?"Add....":"Add contacts"}),(0,L.jsx)(m.x7,{position:"top-right",reverseOrder:!1})]})})},F=t(1538),I=v.ZP.input(l||(l=(0,j.Z)(["\n  height: 20px;\n  width: 200px;\n  border: 2px solid orange;\n  border-radius: 10px;\n  margin-left: 145px;\n"]))),S=function(){var n=(0,p.I0)(),e=(0,p.v9)((function(n){return n.filter}));return(0,L.jsx)("div",{children:(0,L.jsx)(I,{onChange:function(e){return n((0,F.a)(e.target.value))},type:"text",value:e,name:"filter",id:"filter"})})},q=function(n){var e=n.id,t=n.name,r=n.number,i=(0,p.v9)((function(n){return n.contacts})).error,o=(0,p.I0)();return(0,L.jsxs)(L.Fragment,{children:[i&&(0,L.jsx)("h2",{children:"Can't delete task. Server error."}),(0,L.jsxs)(P,{children:["".concat(t," : tel - ").concat(r),(0,L.jsx)(_,{onClick:function(){return o((0,f._f)(e))},type:"button",children:" \u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"})]})]})},B=function(){var n=(0,p.v9)(g),e=(0,p.v9)(b),t=n.toLowerCase(),r=e.filter((function(n){return n.name.toLowerCase().includes(t)}));return(0,L.jsx)(L.Fragment,{children:(0,L.jsx)(C,{children:r.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,L.jsx)(q,{id:e,name:t,number:r},e)}))})})},R=function(){return(0,L.jsxs)("div",{style:{width:"500px",marginLeft:"auto",marginRight:"auto",marginTop:"50px",border:"1px dashed orange",backgroundColor:"#fffcf9"},children:[(0,L.jsx)("h1",{style:{textAlign:"center"},children:"PhoneBook"}),(0,L.jsx)(A,{}),(0,L.jsx)("h2",{style:{textAlign:"center"},children:"Contacts"}),(0,L.jsx)(S,{}),(0,L.jsx)(B,{})]})}}}]);
//# sourceMappingURL=479.c816b71d.chunk.js.map