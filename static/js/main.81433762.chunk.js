(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{66:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),i=n.n(c),o=(n(66),n(102)),l=n(76),s=n(103),u=n(95),j=n(106),b=n(96),d=n(12),m=n(17),f=n(10),O=n(98),h=n(94),x=n(100),g=n(93),p=n(97),v=n(99),w=n(92),S=n(2),y=function(e){var t=e.onClose,n=e.onSubmit,r=Object(a.useState)({name:""}),c=Object(f.a)(r,2),i=c[0],o=c[1];return Object(S.jsx)(x.a,{position:"right",full:"vertical",modal:!0,onClickOutside:t,onEsc:t,children:Object(S.jsxs)(l.a,{fill:"vertical",overflow:"auto",width:"medium",pad:"medium",children:[Object(S.jsxs)(l.a,{flex:!1,direction:"row",justify:"between",children:[Object(S.jsx)(s.a,{level:2,margin:"none",children:"Add List"}),Object(S.jsx)(O.a,{icon:Object(S.jsx)(w.a,{}),onClick:t})]}),Object(S.jsx)(l.a,{flex:"grow",overflow:"auto",pad:{vertical:"medium"},children:Object(S.jsxs)(g.a,{value:i,onChange:function(e){return o(e)},onSubmit:function(e){var t=e.value;return n(t)},children:[Object(S.jsx)(p.a,{label:"Name",name:"name",htmlFor:"name",required:!0,children:Object(S.jsx)(v.a,{name:"name",type:"name"})}),Object(S.jsxs)(l.a,{direction:"row",justify:"between",margin:{top:"medium"},children:[Object(S.jsx)(O.a,{type:"reset",label:"Reset",onClick:function(){return o({})}}),Object(S.jsx)(O.a,{type:"submit",label:"Add",primary:!0})]})]})})]})})};y.defaultProps={onClose:function(){return console.log("hii")}};var C=y,k=n(105),D=function(e){var t=e.onClose,n=e.onSubmit,r=Object(a.useState)({name:""}),c=Object(f.a)(r,2),i=c[0],o=c[1];return Object(S.jsx)(x.a,{position:"right",full:"vertical",modal:!0,onClickOutside:t,onEsc:t,children:Object(S.jsxs)(l.a,{fill:"vertical",overflow:"auto",width:"medium",pad:"medium",children:[Object(S.jsxs)(l.a,{flex:!1,direction:"row",justify:"between",children:[Object(S.jsx)(s.a,{level:2,margin:"none",children:"Add Card"}),Object(S.jsx)(O.a,{icon:Object(S.jsx)(w.a,{}),onClick:t})]}),Object(S.jsx)(l.a,{flex:"grow",overflow:"auto",pad:{vertical:"medium"},children:Object(S.jsxs)(g.a,{value:i,onChange:function(e){return o(e)},onSubmit:function(e){var t=e.value;return n(t)},children:[Object(S.jsx)(p.a,{label:"Name",name:"name",htmlFor:"name",required:!0,children:Object(S.jsx)(v.a,{name:"name",type:"name"})}),Object(S.jsx)(p.a,{label:"Description",name:"desc",htmlFor:"desc",required:!0,children:Object(S.jsx)(k.a,{name:"desc",type:"desc"})}),Object(S.jsxs)(l.a,{direction:"row",justify:"between",margin:{top:"medium"},children:[Object(S.jsx)(O.a,{type:"reset",label:"Reset",onClick:function(){return o({})}}),Object(S.jsx)(O.a,{type:"submit",label:"Add",primary:!0})]})]})})]})})};D.defaultProps={onClose:function(){return console.log("hii")}};var N=D,A=n(104),J=function(e){var t=e.item,n=e.onDelete,a=e.setAllowDroping;return Object(S.jsxs)(l.a,{margin:"xsmall",pad:"xsmall",background:"white",elevation:"small",draggable:"true",onDragStart:function(e){e.dataTransfer.setData("text",t.toString()),a(!1)},onDragEnd:function(e){if("move"!==e.dataTransfer.dropEffect)return a(!0),1;n(t.name),a(!0)},children:[Object(S.jsxs)(l.a,{direction:"row",justify:"between",border:{color:"brand",side:"bottom"},children:[Object(S.jsx)(s.a,{level:2,margin:"none",children:t.name}),Object(S.jsx)(O.a,{icon:Object(S.jsx)(w.a,{}),onClick:function(){return n(t.name)}})]}),Object(S.jsx)(l.a,{pad:"small",children:Object(S.jsx)(A.a,{children:t.desc})})]})};function E(e,t){localStorage.setItem(e,t)}function F(e){return localStorage.getItem(e)}var I=function(e){this.name=e.name,this.toString=function(){return JSON.stringify(this)},this.toJSON=function(){return{name:this.name}}};var L=function(e){this.name=e.name,this.desc=e.desc,this.toString=function(){return JSON.stringify(this)},this.toJSON=function(){return{name:this.name,desc:this.desc}}};function T(e){return new L(e)}function z(e){return new L(e)}var P=function(e){var t=e.name,n=e.onDelete,r=Object(a.useState)([]),c=Object(f.a)(r,2),i=c[0],o=c[1],u=Object(a.useState)(!0),j=Object(f.a)(u,2),b=j[0],x=j[1],g=Object(a.useState)(!1),p=Object(f.a)(g,2),v=p[0],y=p[1],C=Object(a.useCallback)((function(e){if(i.find((function(t){return t.name===e.name})))return alert("Duplicate Card Name !!"),!1;o((function(t){return[].concat(Object(m.a)(t),[T(Object(d.a)(Object(d.a)({},e),{},{seq:t.length+1}))])})),y(!1)}),[i]),k=Object(a.useCallback)((function(e){o((function(t){return t.filter((function(t){return t.name!==e}))}))}),[]);return Object(a.useEffect)((function(){var e=function(e){var t=F("card_".concat(e));return t?JSON.parse(t).map((function(e){return new L(e)})):[]}(t);o(e)}),[t]),Object(a.useEffect)((function(){!function(e,t){E("card_".concat(e),JSON.stringify(t))}(t,i)}),[t,i]),Object(S.jsxs)(l.a,{width:"medium",height:{min:"70vh"},margin:"small",pad:"xsmall",round:"small",border:{color:"brand"},background:"light-2",onDragOver:function(e){return b&&e.preventDefault()},onDrop:function(e){e.preventDefault();var t=JSON.parse(e.dataTransfer.getData("text"));i.find((function(e){return e.name===t.name}))?o((function(e){return[T(Object(d.a)(Object(d.a)({},t),{},{name:"".concat(t.name," (new)")}))].concat(Object(m.a)(e))})):o((function(e){return[T(Object(d.a)({},t))].concat(Object(m.a)(e))}))},children:[Object(S.jsxs)(l.a,{flex:!1,direction:"row",justify:"between",border:{color:"brand",side:"bottom"},children:[Object(S.jsx)(s.a,{level:2,margin:"none",children:t}),Object(S.jsx)(O.a,{icon:Object(S.jsx)(w.a,{}),onClick:function(){return n(t)}})]}),Object(S.jsx)(l.a,{flex:!0,pad:"xsmall",children:i.map((function(e){return Object(S.jsx)(J,{item:e,onDelete:k,setAllowDroping:x},e.name)}))}),Object(S.jsx)(l.a,{fill:"horizontal",align:"center",children:Object(S.jsx)(O.a,{tip:"Add Card",primary:!0,icon:Object(S.jsx)(h.a,{}),onClick:function(){return y(!0)}})}),v&&Object(S.jsx)(N,{onClose:function(){return y(!1)},onSubmit:C})]})},q=Object(a.memo)(P),_=function(){var e=Object(a.useState)(!1),t=Object(f.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(function(){var e=F("list");return e?JSON.parse(e).map((function(e){return new I(e)})):[]}()),i=Object(f.a)(c,2),o=i[0],s=i[1],u=Object(a.useCallback)((function(e){var t;s((function(t){return t.filter((function(t){return t.name!==e}))})),t="card_".concat(e),localStorage.removeItem(t)}),[]);return Object(a.useEffect)((function(){var e;e=o,E("list",JSON.stringify(e))}),[o]),Object(S.jsxs)(l.a,{children:[Object(S.jsx)(l.a,{fill:"horizontal",align:"end",width:"small",children:Object(S.jsx)(O.a,{primary:!0,label:"Add List",icon:Object(S.jsx)(h.a,{}),onClick:function(){return r(!0)}})}),Object(S.jsx)(l.a,{fill:!0,direction:"row",children:o.map((function(e){return Object(S.jsx)(q,{name:e.name,onDelete:u},e.name)}))}),n&&Object(S.jsx)(C,{onClose:function(){return r(!1)},onSubmit:function(e){if(o.find((function(t){return t.name===e.name})))return alert("Duplicate List Name !!"),!1;s((function(t){return[].concat(Object(m.a)(t),[z(Object(d.a)({},e))])})),r(!1)}})]})},B=function(){return Object(S.jsx)(l.a,{pad:"small",height:{min:"80vh"},children:Object(S.jsx)(_,{})})},R={global:{font:{family:"Roboto",size:"18px",height:"20px"}}};var M=function(){return Object(S.jsxs)(o.a,{theme:R,children:[Object(S.jsx)(l.a,{tag:"header",direction:"row",align:"center",alignContent:"center",justify:"between",background:"brand",pad:{left:"medium",right:"small",vertical:"xsmall"},elevation:"medium",children:Object(S.jsx)(l.a,{children:Object(S.jsx)(s.a,{size:"small",children:"Demo of HTML5 Drag & Drop API"})})}),Object(S.jsx)(B,{}),Object(S.jsx)(u.a,{background:"light-4",justify:"end",pad:"small",children:Object(S.jsx)(j.a,{href:"https://www.linkedin.com/in/aditya-kumar-singh-a8b584106/",target:"_blank",textAlign:"center",size:"small",label:"Designed By Aditya",icon:Object(S.jsx)(b.a,{color:"blue"}),reverse:!0})})]})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,107)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(M,{})}),document.getElementById("root")),H()}},[[75,1,2]]]);
//# sourceMappingURL=main.81433762.chunk.js.map