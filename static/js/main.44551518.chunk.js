(window.webpackJsonpwithyt=window.webpackJsonpwithyt||[]).push([[0],[,,,,,function(e,n,t){e.exports=t.p+"static/media/logo.8b016e0a.svg"},,function(e,n,t){e.exports=t.p+"static/media/youngmu.9a325d3a.png"},function(e,n,t){e.exports=t.p+"static/media/unknown.1f1b2c8b.png"},,,function(e,n,t){e.exports=t(18)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(4),i=t.n(o),l=(t(16),t(5)),c=t.n(l),m=(t(17),t(9)),u=t(6),s=t(10),d=t(1),h=t(2),p=t(7),b=t.n(p),f=t(8),g=t.n(f),v={Youngmu:b.a,Unknown:g.a},E=function(){function e(){Object(d.a)(this,e)}return Object(h.a)(e,null,[{key:"getOnlyGivenName",value:function(e){for(var n=e.length,t=0;t<n;t++)if(" "===e.charAt(t))return e.substring(t+1);return"Unknown"}}]),e}(),w=function(e){function n(){return Object(d.a)(this,n),Object(m.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(h.a)(n,[{key:"render",value:function(){var e=this.props,n=e.name,t=e.birthdeath,a=e.isAdmin,o="User-mode";void 0!==a&&a&&(o="Admin-mode");var i=E.getOnlyGivenName(n),l=v[i];return void 0===l&&(l=v.Unknown),r.a.createElement("div",{className:"Profile-box"},r.a.createElement("br",null),r.a.createElement("img",{src:l,width:"400",alt:"mooPicture"}),r.a.createElement("h2",null,"Profile"),r.a.createElement("div",null,r.a.createElement("b",null,"Name:  "),n),r.a.createElement("div",null,r.a.createElement("b",null,"birth-death:  "),t),r.a.createElement("div",null,r.a.createElement("b",null,"mode:  "),o))}}]),n}(r.a.Component),y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:c.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",null,"Welcome, YT!"),r.a.createElement(w,{name:"Yang Youngmu",birthdeath:"1999-06-01 ~ ",isAdmin:!0}),r.a.createElement(w,{name:"Yang Yoontae",birthdeath:"1999-04-07 ~ "})),r.a.createElement("div",{className:"YT-pre-entry-page"},r.a.createElement("a",{href:"/myfirsthtml/entry.html",className:"App-link"},"\uc724\ud0dc \ud398\uc774\uc9c0")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.44551518.chunk.js.map