(this["webpackJsonpace-bbox"]=this["webpackJsonpace-bbox"]||[]).push([[0],{64:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(8),r=n.n(i),s=(n(64),n(17)),o=n(127),l=(n(65),n.p+"static/media/test_image.1815956c.jpg"),d=n(124),u=n(130),b=n(129),j=n(52),x=n.n(j),f=n(6),p=Object(d.a)((function(e){return{app:{height:"100vh",display:"flex",flexDirection:"row"},imageViewer:{flex:1,display:"flex",flexDirection:"column"},imageBar:{display:"flex",flexDirection:"row",padding:e.spacing(.5),alignItems:"center","& *":{margin:e.spacing(.2)}},editor:{borderLeft:"1px solid #ccc",display:"flex",flexDirection:"column",justifyContent:"center",width:250,padding:e.spacing(.5),"& *":{margin:e.spacing(.2)}},pad:{height:50},coords:{display:"flex",flexDirection:"row",margin:0,paddingLeft:e.spacing(5),backgroundColor:"#eee",paddingTop:e.spacing(10),paddingBottom:e.spacing(10)},labels:{display:"flex",flexDirection:"column",justifyContent:"flexEnd",textAlign:"right",fontWeight:700},values:{display:"flex",flexDirection:"column"},root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}})),v=function(e){return!isNaN(e)&&null!==e&&void 0!==e},h=function(e){return"".concat(e).padEnd(16,"0").substr(0,16)},g={id:"overlay",x:.4,y:.57,width:.25,height:.25,movable:!0,resizable:!0,selectable:!0,type:"name"},O=function(){var e=p(),t=Object(a.useState)({x1:g.x,y1:g.y,x2:g.x+g.width,y2:g.y+g.height}),n=Object(s.a)(t,2),c=n[0],i=n[1],r=Object(a.useState)(!0),d=Object(s.a)(r,2),j=d[0],O=d[1],m=Object(a.useState)(!0),y=Object(s.a)(m,2),w=y[0],C=y[1],S=Object(a.useState)(),R=Object(s.a)(S,2),k=R[0],I=R[1],N=Object(a.useState)(),D=Object(s.a)(N,2),E=D[0],L=D[1],F=Object(a.useRef)(),B=Object(a.useRef)(),P=Object(a.useRef)(),T=Object(a.useRef)(),A=Object(a.useRef)(),_=Object(a.useRef)(),z=Object(a.useRef)(),G=function(e){if(e.detail.overlays[g.id]){var t=e.detail.overlays[g.id],n=t.x,a=t.y,c=t.width,r=t.height;Object.assign(g,e.detail.overlays[g.id]),i({x1:n,y1:a,x2:n+c,y2:a+r})}};Object(a.useEffect)((function(){document.title="Ace-Bbox";var e=null;F.current&&(e=F.current,F.current.overlays.addAndSelect(g),e.addEventListener("fs-single-image-viewer:overlay-change",G));var t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());n.source&&(I(n.source),P.current&&(P.current.value=n.source));var a=window.sessionStorage.getItem("session");return a&&(L(a),B.current&&(B.current.value=a)),function(){e.removeEventListener("fs-single-image-viewer:overlay-change",G)}}),[]);var J=function(){if(P.current&&B.current){var e=P.current.value;I(e);var t=B.current.value;t&&t!==E&&(L(t),window.sessionStorage.setItem("session",t));var n=new URLSearchParams(window.location.search);n.set("source",e);var a="".concat(window.location.protocol,"//").concat(window.location.host).concat(window.location.pathname,"?").concat(n.toString());window.history.pushState({path:a},"",a)}},K=function(){if(T.current&&T.current.value){var e=T.current.value.split(",").map(parseFloat),t=Object(s.a)(e,4),n=t[0],a=t[1],c=t[2],r=t[3];v(n)&&v(a)&&v(c)&&v(r)&&c>n&&r>a&&(Object.assign(g,{x:n,y:a,width:c-n,height:r-a}),F.current.overlays.update(g),i({x1:n,y1:a,x2:c,y2:r}),T.current.value=null,O(!0),T.current.blur())}},U=k?"https://www.familysearch.org/dz/v1/dgs:".concat(k,"/image.xml?ctx=&session=").concat(E):l;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(o.a,{}),Object(f.jsxs)("div",{className:e.app,children:[Object(f.jsxs)("div",{className:e.imageViewer,children:[Object(f.jsxs)("div",{className:e.imageBar,children:[Object(f.jsx)(b.a,{id:"sessionField",label:"Session ID",variant:"outlined",style:{width:385},inputRef:B}),Object(f.jsx)(u.a,{variant:"contained",color:"primary",onClick:function(){window.open("https://www.familysearch.org/platform/","_blank","noopener,noreferrer")},children:"Get Session Id"}),Object(f.jsx)(b.a,{id:"outlined-basic",label:"Image Number",variant:"outlined",onKeyPress:function(e){"Enter"===e.key&&(J(),P.current.blur())},onChange:function(e){var t=!0;if(P.current&&P.current.value){var n=P.current.value.split("_"),a=Object(s.a)(n,2),c=a[0],i=a[1];v(c)&&v(i)&&(t=!1)}t!==w&&C(t)},inputRef:P}),Object(f.jsx)(u.a,{variant:"contained",color:"primary",onClick:J,ref:_,disabled:w,children:"Load Image"})]}),Object(f.jsx)("fs-single-image-viewer",{ref:F,src:U})]}),Object(f.jsxs)("div",{className:e.editor,children:[Object(f.jsx)(b.a,{id:"outlined-basic",label:"x1, y1, x2, y2",variant:"outlined",multiline:!0,rows:4,onChange:function(e){var t=!0;if(T.current&&T.current.value){var n=T.current.value.split(",").map(parseFloat),a=Object(s.a)(n,4),c=a[0],i=a[1],r=a[2],o=a[3];v(c)&&v(i)&&v(r)&&v(o)&&r>c&&o>i&&(t=!1)}t!==j&&O(t)},onKeyPress:function(e){"Enter"===e.key&&K()},inputRef:T}),Object(f.jsx)(u.a,{variant:"contained",color:"primary",onClick:K,disabled:j,ref:A,children:"Set Box"}),Object(f.jsx)(u.a,{variant:"contained",color:"primary",onClick:function(){T.current.value=null},disabled:j,ref:z,children:"Clear Coordinates"}),Object(f.jsxs)("div",{className:e.coords,children:[Object(f.jsxs)("div",{className:e.labels,children:[Object(f.jsx)("label",{children:"x1:"}),Object(f.jsx)("label",{children:"y1:"}),Object(f.jsx)("label",{children:"x2:"}),Object(f.jsx)("label",{children:"y2:"})]}),Object(f.jsxs)("div",{className:e.values,children:[Object(f.jsx)("span",{children:h(c.x1)}),Object(f.jsx)("span",{children:h(c.y1)}),Object(f.jsx)("span",{children:h(c.x2)}),Object(f.jsx)("span",{children:h(c.y2)})]})]}),Object(f.jsx)(u.a,{startIcon:Object(f.jsx)(x.a,{}),variant:"outlined",color:"primary",onClick:function(){if(c){var e=c.x1,t=c.y1,n=c.x2,a=c.y2;navigator.clipboard.writeText("".concat(h(e),", ").concat(h(t),", ").concat(h(n),", ").concat(h(a)))}},children:"Copy To Clipboard"})]})]})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,132)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))},y=n(53),w=n(54),C={persons:{},facts:{}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C;return e},R=Object(w.a)(S);r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(y.a,{store:R,children:Object(f.jsx)(O,{})})}),document.getElementById("root")),m()}},[[91,1,2]]]);
//# sourceMappingURL=main.a65eb1c8.chunk.js.map