(window.webpackJsonpwithyt=window.webpackJsonpwithyt||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.8b016e0a.svg"},function(e,t,n){e.exports=n.p+"static/media/youngmu.9a325d3a.png"},function(e,t,n){e.exports=n.p+"static/media/unknown.1f1b2c8b.png"},,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),i=(n(19),n(8)),l=n.n(i),u=(n(20),n(4)),m=n(3),s=n(5),d=n(1),b=n(2),p=n(9),f=n.n(p),h=n(10),v=n.n(h),E={Youngmu:f.a,Unknown:v.a},O=function(){function e(){Object(d.a)(this,e)}return Object(b.a)(e,null,[{key:"getOnlyGivenName",value:function(e){for(var t=e.length,n=0;n<t;n++)if(" "===e.charAt(n))return e.substring(n+1);return"Unknown"}}]),e}(),g=function(e){function t(){return Object(d.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.birthdeath,a=e.isAdmin,o="User-mode";void 0!==a&&a&&(o="Admin-mode");var c=O.getOnlyGivenName(t),i=E[c];return void 0===i&&(i=E.Unknown),r.a.createElement("div",{className:"Profile-box"},r.a.createElement("h2",null,"Profile"),r.a.createElement("div",{className:"Img-box"},r.a.createElement("img",{src:i,width:"200px",alt:"mooPicture"})),r.a.createElement("div",null,r.a.createElement("b",null,"Name:  "),t),r.a.createElement("div",null,r.a.createElement("b",null,"birth-death:  "),n),r.a.createElement("div",null,r.a.createElement("b",null,"mode:  "),o))}}]),t}(r.a.Component),j=n(13),y=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={counter:0},n.onIncrement=function(){n.setState((function(e){return{counter:e.counter+1}}))},n.onDecrement=function(){n.setState((function(e){return{counter:e.counter-1}}))},n}return Object(s.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.onIncrement,t=this.onDecrement;return r.a.createElement("div",{className:"Counter"},r.a.createElement("h1",null,"Counter"),r.a.createElement("h3",null,this.state.counter),r.a.createElement("button",{type:"button",onClick:e},"+"),r.a.createElement("button",{type:"button",onClick:t},"-"))}}]),t}(r.a.Component);function w(){var e=Object(a.useState)(0),t=Object(j.a)(e,2),n=t[0],o=t[1];return r.a.createElement("div",{className:"Counter"},r.a.createElement("h1",null,"Counter2"),r.a.createElement("p",null,"You clicked ",n," times!"),r.a.createElement("button",{onClick:function(){return o(n+1)}},"Click me"))}var k=function(e){function t(){return Object(d.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props.name;return r.a.createElement("li",null,r.a.createElement("span",null,e))}}]),t}(r.a.Component),C=function(e){function t(){return Object(d.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Animal-list-box"},r.a.createElement("h3",null,"Animal List!"),r.a.createElement("ol",null,["dog","cat","spider","snake"].map((function(e,t){return r.a.createElement(k,{key:t,name:e})}))))}}]),t}(r.a.Component),x=n(11),I=n(12),S=function(e){var t=e.text,n=e.done,a=e.onToggle,o=e.onRemove;return r.a.createElement("li",null,r.a.createElement("b",{onClick:a,style:{textDecoration:n?"line-through":"none"}},t),r.a.createElement("span",{style:{marginLeft:"0.5rem"},onClick:o},"[\uc9c0\uc6b0\uae30]"))};function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var N=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).id=0,n.state={todoItems:[],input:""},n.onToggle=function(e){var t=n.state.todoItems,a=t.findIndex((function(t){return t.id===e})),r=t[a],o=Object(I.a)(t),c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(n,!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},r,{done:!r.done});o[a]=c,n.setState({todoItems:o})},n.onRemove=function(e){n.setState((function(t){return{todoItems:t.todoItems.filter((function(t){return t.id!==e}))}}))},n.onChange=function(e){var t=e.currentTarget.value;n.setState({input:t})},n.onSubmit=function(e){e.preventDefault(),n.setState((function(e){var t=e.todoItems,a=e.input;return{input:"",todoItems:t.concat({id:n.id++,text:a,done:!1})}}))},n}return Object(s.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.onSubmit,t=this.onChange,n=this.onToggle,a=this.onRemove,o=this.state,c=o.input,i=o.todoItems.map((function(e){return r.a.createElement(S,{key:e.id,done:e.done,onToggle:function(){return n(e.id)},onRemove:function(){return a(e.id)},text:e.text})}));return r.a.createElement("div",null,r.a.createElement("h1",null,"Today's Tasks"),r.a.createElement("form",{onSubmit:e},r.a.createElement("input",{onChange:t,value:c}),r.a.createElement("button",{type:"submit"},"Submit!")),r.a.createElement("ul",null,i))}}]),t}(r.a.Component),P=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:l.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",null,"Welcome, YT!"),r.a.createElement(g,{name:"Yang Youngmu",birthdeath:"1999-06-01 ~ ",isAdmin:!0}),r.a.createElement(g,{name:"Yang Yoontae",birthdeath:"1999-04-07 ~ "}),r.a.createElement(y,null),r.a.createElement(w,null),r.a.createElement(C,null),r.a.createElement(N,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[14,1,2]]]);
//# sourceMappingURL=main.b11f4661.chunk.js.map