(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{112:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),l=a(9),o=a(25),i=a.n(o),u=(a(84),a(85),a(6)),s=(a(86),a(87),a(118)),m=a(117),d=a(119),h=a(120),p=a(73),f=a(121),g=a(14),E=a(15),v=a(16),b=a.n(v),C=function(){function e(){Object(g.a)(this,e),this.baseURL="".concat("https://tellmaster.herokuapp.com/api","/auth/"),this.service=b.a.create({baseURL:this.baseURL,withCredentials:!0})}return Object(E.a)(e,[{key:"login",value:function(e){var t=e.username,a=e.email,n=e.password;return this.service.post("login",{username:t,email:a,password:n}).then((function(e){return e.data})).catch((function(e){return console.log({err:e})}))}},{key:"signup",value:function(e){var t=e.username,a=e.email,n=e.password;return this.service.post("signup",{username:t,email:a,password:n}).then((function(e){return e.data})).catch((function(e){return console.log({err:e})}))}},{key:"logout",value:function(){return this.service.post("logout").then((function(e){return e.data})).catch((function(e){return console.log({err:e})}))}},{key:"loggedin",value:function(){return this.service.get("loggedin").then((function(e){return e.data})).catch((function(e){return console.log({err:e})}))}}]),e}();var j=function(e){var t=e.loggedInUser,a=e.showLogin,n=e.showSignup,l=e.logout;return!1===t?r.a.createElement(m.a,null):null===t?r.a.createElement(s.a,{fluid:!0},r.a.createElement("div",{className:"navbar"},r.a.createElement(d.a,{variant:"pills"},r.a.createElement(h.a,{className:"justify-content-between",style:{width:"100vw"}},r.a.createElement(p.a,{lg:5,style:{display:"flex"}},r.a.createElement(d.a.Item,null,r.a.createElement(d.a.Link,{as:c.c,to:"/"},r.a.createElement("i",{className:"fas fa-home"}))),r.a.createElement(d.a.Item,null,r.a.createElement(d.a.Link,{onClick:a},"Login")),r.a.createElement(d.a.Item,null,r.a.createElement(d.a.Link,{onClick:n},"Signup"))),r.a.createElement(p.a,{lg:2},r.a.createElement(f.a,{title:"Mi perfil",id:"nav-dropdown",drop:"left"},r.a.createElement(f.a.Item,{eventKey:"4.1"},"Action"),r.a.createElement(f.a.Item,{eventKey:"4.2"},"Another action"),r.a.createElement(f.a.Item,{eventKey:"4.3"},"Something else here"),r.a.createElement(f.a.Divider,null),r.a.createElement(f.a.Item,{eventKey:"4.4"},"Separated link"))))))):r.a.createElement(s.a,{fluid:!0},r.a.createElement("div",{className:"navbar"},r.a.createElement(d.a,{variant:"pills"},r.a.createElement(h.a,{className:"justify-content-between",style:{width:"100vw"}},r.a.createElement(p.a,{lg:5,style:{display:"flex"}},r.a.createElement(d.a.Item,null,r.a.createElement(d.a.Link,{as:c.c,to:"/"},r.a.createElement("i",{className:"fas fa-home"}))),r.a.createElement(d.a.Item,null,r.a.createElement(d.a.Link,{as:c.c,to:"/myGames"},"Mis Partidas")),r.a.createElement(d.a.Item,null,r.a.createElement(d.a.Link,{as:c.c,to:"/myCharacters"},"Mis personajes")),r.a.createElement(d.a.Item,null,r.a.createElement(d.a.Link,{as:c.c,to:"/newGame"},"Crear Partida"))),r.a.createElement(p.a,{lg:2},r.a.createElement(f.a,{title:"Mi perfil",id:"nav-dropdown",drop:"left"},r.a.createElement(f.a.Item,{eventKey:"4.1",onClick:l},"LogOut"),r.a.createElement(f.a.Item,{eventKey:"4.2"},"Another action"),r.a.createElement(f.a.Item,{eventKey:"4.3"},"Something else here"),r.a.createElement(f.a.Divider,null),r.a.createElement(f.a.Item,{eventKey:"4.4"},"Separated link")))))))};var O=function(e){var t=e.games,a=e.loggedInUser;return t.map((function(e,t){return r.a.createElement("div",{className:"centered",key:t},r.a.createElement("h3",null,r.a.createElement(c.b,{to:a&&a._id===e.creator?"/modify/".concat(e._id):"/read/".concat(e._id)},e.title)),r.a.createElement("em",null,"Nivel minimo: ",e.minLevel),r.a.createElement("p",null,e.description.slice(0,350)))}))};var y=function(){return r.a.createElement(s.a,null,r.a.createElement(h.a,null,r.a.createElement(p.a,{lg:6},"Imagen"),r.a.createElement(p.a,{lg:6},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique pariatur magni nesciunt soluta expedita molestiae suscipit deleniti consequuntur dolor impedit. Itaque iure libero perspiciatis, cum asperiores eveniet non error totam?")))},I=function(){function e(){Object(g.a)(this,e),this.baseURL="".concat("https://tellmaster.herokuapp.com/api","/games/"),this.service=b.a.create({baseURL:this.baseURL,withCredentials:!0})}return Object(E.a)(e,[{key:"getOneGame",value:function(e){return this.service.get("/?gameId=".concat(e)).then((function(e){return e.data})).catch((function(e){return console.log(e)}))}},{key:"getLastGames",value:function(){return this.service.get("/last?limit=5").then((function(e){return e.data.gamesFound})).catch((function(e){return console.log(e)}))}},{key:"createGame",value:function(e){var t=e.creator,a=e.title,n=e.minLevel,r=e.description;return this.service.post("",{creator:t,title:a,minLevel:n,description:r}).then((function(e){return e.data.createdGame})).catch((function(e){return console.log(e)}))}}]),e}(),w=a(123),k=a(75);var L=function(e){var t=e.setUser,a=e.onHide,c=new C,l=Object(n.useState)(""),o=Object(u.a)(l,2),i=o[0],s=o[1],m=Object(n.useState)(""),d=Object(u.a)(m,2),h=d[0],p=d[1],f=Object(n.useState)(""),g=Object(u.a)(f,2),E=g[0],v=g[1];function b(e){var t=e.currentTarget,a=t.name,n=t.value;switch(a){case"username":s(n);break;case"email":p(n);break;case"password":v(n);break;default:throw Error("no correct value")}}return r.a.createElement(w.a,{onSubmit:function(e){e.preventDefault(),c.login({username:i,email:h,password:E}).then((function(e){return t(e)})),s(""),p(""),v(""),a&&a()}},r.a.createElement(w.a.Group,{controlId:"username"},r.a.createElement(w.a.Label,null,"Username"),r.a.createElement(w.a.Control,{onChange:b,name:"username",value:i,type:"text",placeholder:"Enter username"}),r.a.createElement(w.a.Text,{className:"text-muted"},"Choose an username.")),r.a.createElement(w.a.Group,{controlId:"email",value:h},r.a.createElement(w.a.Label,null,"Email address"),r.a.createElement(w.a.Control,{onChange:b,name:"email",type:"email",placeholder:"Enter email"}),r.a.createElement(w.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),r.a.createElement(w.a.Group,{controlId:"password",value:E},r.a.createElement(w.a.Label,null,"Password"),r.a.createElement(w.a.Control,{onChange:b,name:"password",type:"password",placeholder:"Password"})),r.a.createElement(k.a,{variant:"primary",type:"submit"},"Submit"))};var S=function(e){var t=e.setUser,a=e.onHide,c=new C,l=Object(n.useState)(""),o=Object(u.a)(l,2),i=o[0],s=o[1],m=Object(n.useState)(""),d=Object(u.a)(m,2),h=d[0],p=d[1],f=Object(n.useState)(""),g=Object(u.a)(f,2),E=g[0],v=g[1];function b(e){var t=e.currentTarget,a=t.name,n=t.value;switch(a){case"username":s(n);break;case"email":p(n);break;case"password":v(n);break;default:throw Error("no correct value")}}return r.a.createElement(w.a,{onSubmit:function(e){e.preventDefault(),c.signup({username:i,email:h,password:E}).then((function(e){return t(e)})),a&&a()}},r.a.createElement(w.a.Group,{controlId:"username"},r.a.createElement(w.a.Label,null,"Username"),r.a.createElement(w.a.Control,{onChange:b,name:"username",value:i,type:"text",placeholder:"Enter username"}),r.a.createElement(w.a.Text,{className:"text-muted"},"Choose an username.")),r.a.createElement(w.a.Group,{controlId:"email",value:h},r.a.createElement(w.a.Label,null,"Email address"),r.a.createElement(w.a.Control,{onChange:b,name:"email",type:"email",placeholder:"Enter email"}),r.a.createElement(w.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),r.a.createElement(w.a.Group,{controlId:"password",value:E},r.a.createElement(w.a.Label,null,"Password"),r.a.createElement(w.a.Control,{onChange:b,name:"password",type:"password",placeholder:"Password"})),r.a.createElement(k.a,{variant:"primary",type:"submit"},"Submit"))},G=a(122);var U=function(e){var t=e.show,a=e.children,c=e.onHide,l=e.title;return r.a.createElement(G.a,{show:t,onHide:c,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,autoFocus:!0},r.a.createElement(G.a.Header,{closeButton:!0,onHide:c},r.a.createElement(G.a.Title,{id:"contained-modal-title-vcenter"},l)),r.a.createElement(G.a.Body,null,Object(n.cloneElement)(a,{show:t,onHide:c})))};var x=Object(l.f)((function(e){var t=e.loggedInUser,a=e.updateLastGames,c=(e.match,e.location,e.history),l=new I,o=Object(n.useState)(""),i=Object(u.a)(o,2),s=i[0],m=i[1],d=Object(n.useState)(1),h=Object(u.a)(d,2),p=h[0],f=h[1],g=Object(n.useState)(""),E=Object(u.a)(g,2),v=E[0],b=E[1];function C(e){var t=e.currentTarget,a=t.name,n=t.value;switch(a){case"title":m(n);break;case"description":b(n);break;case"minLevel":f(n);break;default:throw Error("Algo ha ido mal con el formulario")}}return r.a.createElement("div",null,r.a.createElement("h2",null,"Crear un nuevo juego es muy sencillo tan solo necesitas..."),r.a.createElement(w.a,{onSubmit:function(e){e.preventDefault(),l.createGame({creator:t._id,title:s,minLevel:p,description:v}).then((function(e){a(),console.log(e)})).catch((function(e){return console.log(e)})).finally((function(){return c.push("/")}))}},r.a.createElement(w.a.Group,{controlId:"title"},r.a.createElement(w.a.Label,null,"Elegir un titulo:"),r.a.createElement(w.a.Control,{name:"title",onChange:C,value:s,type:"text",placeholder:"El titulo de tu historia!"})),r.a.createElement(w.a.Group,{controlId:"minLevel"},r.a.createElement(w.a.Label,null,"Un nivel m\xednimo para comenzar la aventura:"),r.a.createElement("p",null,p),r.a.createElement(w.a.Control,{name:"minLevel",onChange:C,value:p,type:"range",min:"1",max:"20",step:"1",placeholder:"Ej: 5"}),r.a.createElement(w.a.Text,{className:"text-muted"},"Las aventuras b\xe1sicas comienzan en nivel 1, de 8 a 14 ya son todo un reto, a partir de ah\xed los heroes pueden luchar contra los mismos dioses.")),r.a.createElement(w.a.Group,{controlId:"description"},r.a.createElement(w.a.Label,null,"El resumen de tu aventura! Hazlo atractivo de forma que la gente quiera jugarla ;)"),r.a.createElement(w.a.Control,{name:"description",onChange:C,value:v,type:"text",placeholder:"El titulo de tu historia!"})),r.a.createElement(k.a,{type:"submit"},"Crear")))}));a(60),a(124);var T=function(e){var t=e.loggedInUser,a=e.updateLastGames;return r.a.createElement(x,{updateLastGames:a,loggedInUser:t})},F=a(54),_=a(26),R=a(125),N=function(){function e(){Object(g.a)(this,e),this.baseURL="".concat("https://tellmaster.herokuapp.com/api","/choices/"),this.service=b.a.create({baseURL:this.baseURL,withCredentials:!0})}return Object(E.a)(e,[{key:"getChoicesFromChapter",value:function(e){return this.service.get("/?chapterId=".concat(e)).then((function(e){return e.data.choicesFound})).catch((function(e){return console.log(e)}))}},{key:"createChoice",value:function(e){var t=e.description,a=e.trial,n=e.successTargetChapter,r=e.failureTargetChapter,c=e.pxGranted;return this.service.post("",{description:t,trial:a,successTargetChapter:n,failureTargetChapter:r,pxGranted:c}).then((function(e){return e.data})).catch((function(e){return console.log(e)}))}},{key:"updateChoice",value:function(e){return this.service.patch("/",e).then((function(e){return e.data})).catch((function(e){return console.log(e)}))}},{key:"deleteChoice",value:function(e){return this.service.delete("",{choiceId:e}).then((function(e){return e.data})).catch((function(e){return console.log(e)}))}}]),e}(),A=function(){function e(){Object(g.a)(this,e),this.baseURL="".concat("https://tellmaster.herokuapp.com/api","/chapters/"),this.service=b.a.create({baseURL:this.baseURL,withCredentials:!0})}return Object(E.a)(e,[{key:"getChapter",value:function(e){return this.service.get("/?chapterId=".concat(e)).then((function(e){return e.data})).catch((function(e){return console.log(e)}))}},{key:"getChaptersFromGame",value:function(e){return this.service.get("/fromGame/?gameId=".concat(e)).then((function(e){return e.data.chapters})).catch((function(e){return console.log(e)}))}},{key:"createChapter",value:function(e){var t=e.description,a=e.choices,n=e.gameId;return this.service.post("",{description:t,choices:a,gameId:n}).then((function(e){return e.data})).catch((function(e){return console.log(e)}))}},{key:"updateChapter",value:function(e){return this.service.patch("/",e).then((function(e){return e.data})).catch((function(e){return console.log(e)}))}}]),e}();var D=Object(l.f)((function(e){var t=e.finishChoiceForm,a=e.idx,c=e.choice,l=e.toogleCard,o=e.closeChoiceForm,i=e.match,s=new A,m=new N,d=Object(n.useState)(c?c.description:""),h=Object(u.a)(d,2),p=h[0],f=h[1],g=Object(n.useState)(c?c.trial.difficulty:10),E=Object(u.a)(g,2),v=E[0],b=E[1],C=Object(n.useState)(c?c.trial.characteristic:"str"),j=Object(u.a)(C,2),O=j[0],y=j[1],I=Object(n.useState)(c?c.pxGranted:0),L=Object(u.a)(I,2),S=L[0],G=L[1],U=Object(n.useState)(c?c.successTargetChapter:null),x=Object(u.a)(U,2),T=x[0],F=x[1],_=Object(n.useState)(c?c.failureTargetChapter:null),D=Object(u.a)(_,2),z=D[0],H=D[1],P=Object(n.useState)([]),K=Object(u.a)(P,2),M=K[0],q=K[1];function B(e){var t=e.currentTarget,a=t.name,n=t.value;switch(a){case"description":f(n);break;case"difficulty":b(n);break;case"characteristic":console.log(n),y(n);break;case"pxGranted":console.log(n),G(n);break;case"successTargetChapter":console.log(n),F(n);break;case"failuterTargetChapter":console.log(n),H(n);break;default:throw Error("Algo ha ido mal con el formulario")}}return Object(n.useEffect)((function(){s.getChaptersFromGame(i.params.gameId).then((function(e){q(e)}))}),[]),r.a.createElement(R.a,null,r.a.createElement(w.a,{onSubmit:function(e){e.preventDefault();var n={difficulty:v,characteristic:O};c?(c.trial=n,c.description=p,c.pxGranted=S,c.successTargetChapter=T,c.failureTargetChapter=z,function(e){m.updateChoice(e).then((function(e){l(a)}))}(c)):function(e){m.createChoice(e).then((function(e){t(e._id,a,e)}))}({description:p,trial:n,pxGranted:S,successTargetChapter:T,failureTargetChapter:z})},className:"choiceForm"},r.a.createElement(R.a.Header,{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement(k.a,{onClick:function(){o?o(a):l(a)},style:{width:"40px"},variant:"danger"},r.a.createElement("i",{className:"fas fa-times"})),r.a.createElement(k.a,{type:"submit",style:{width:"40px"},variant:"success"},r.a.createElement("i",{className:"fas fa-check"}))),r.a.createElement(R.a.Body,null,r.a.createElement(w.a.Group,{controlId:"choice"},r.a.createElement(w.a.Label,null,"Describe la elecci\xf3n:"),r.a.createElement(w.a.Control,{name:"description",onChange:B,value:p,placeholder:"Fuerzo la puerta"}),r.a.createElement(w.a.Label,null,"\xbfQue dificultad tiene?"),r.a.createElement(w.a.Control,{type:"number",name:"difficulty",onChange:B,value:v,placeholder:"Fuerzo la puerta"}),c?null:r.a.createElement(w.a.Text,null,"Dificultades de 10 son adecuadas para una persona media, 15 son para expertos y 20 para verdaderos prod\xedgios."),r.a.createElement(w.a.Label,null,"\xbfQu\xe9 caracteristica es necesaria para superarla?"),r.a.createElement(w.a.Control,{onChange:B,name:"characteristic",as:"select",custom:!0},r.a.createElement("option",{value:"str"},"Fuerza"),r.a.createElement("option",{value:"des"},"Destreza"),r.a.createElement("option",{value:"agi"},"Agilidad, velocidad"),r.a.createElement("option",{value:"con"},"Constituci\xf3n f\xedsica"),r.a.createElement("option",{value:"int"},"Inteligencia"),r.a.createElement("option",{value:"wis"},"Sabidur\xeda"),r.a.createElement("option",{value:"char"},"Carisma"))),r.a.createElement(w.a.Group,{controlId:"choice"},r.a.createElement(w.a.Label,null,"Cuanta experiencia da el \xe9xito:"),r.a.createElement(w.a.Control,{name:"pxGranted",onChange:B,value:S,placeholder:"100",type:"number"}))),r.a.createElement(w.a.Group,{controlId:"successTargetChapter"},r.a.createElement(w.a.Label,null,"Cap de destino con exito:"),r.a.createElement(w.a.Control,{as:"select",custom:!0,name:"successTargetChapter",onChange:B},r.a.createElement("option",{value:"null"},"Ninguno"),M.map((function(e){return e._id===T?r.a.createElement("option",{selected:!0,value:e._id},e.description):r.a.createElement("option",{value:e._id},e.description)})))),r.a.createElement(w.a.Group,{controlId:"failureTargetChapter"},r.a.createElement(w.a.Label,null,"Cap de destino con fracaso:"),r.a.createElement(w.a.Control,{as:"select",name:"failureTargetChapter",custom:!0,onChange:B},r.a.createElement("option",{value:"null"},"Ninguno"),M.map((function(e){return e._id===z?r.a.createElement("option",{selected:!0,value:e._id},e.description):r.a.createElement("option",{value:e._id},e.description)}))))))}));var z=function(e){var t=e.choice,a=e.idx,n=e.toogleCard;return r.a.createElement(R.a,null,r.a.createElement(R.a.Header,{onClick:function(){return n(a)}},"Editar"),r.a.createElement(R.a.Body,null,r.a.createElement("p",null,t.description),r.a.createElement("p",null,function(e){var t;switch(e){case"str":t="Fuerza";break;case"des":t="Destreza";break;case"agi":t="Agilidad, velocidad";break;case"con":t="Constituci\xf3n";break;case"wis":t="Sabidur\xeda";break;case"int":t="Inteligencia";break;case"char":t="Carisma";break;default:throw Error("algo fue mal con la card de la choice")}return t}(t.trial.characteristic)),r.a.createElement("p",null,t.trial.difficulty),r.a.createElement("p",null,t.pxGranted)))};var H=Object(l.f)((function(e){var t=e.updateLastGames,a=e.match,c=e.chapterId,l=new A,o=a.params.gameId,i=Object(n.useState)(""),s=Object(u.a)(i,2),m=s[0],d=s[1],f=Object(n.useState)([]),g=Object(u.a)(f,2),E=g[0],v=g[1],b=Object(n.useState)([]),C=Object(u.a)(b,2),j=C[0],O=C[1],y=Object(n.useState)([]),I=Object(u.a)(y,2),L=I[0],S=I[1];function G(e,t,a){!function(e,t){var a=Object(_.a)(E);a.push(e),v(a)}(e),function(e){var t=Object(_.a)(j);t.push(e),O(t)}(a),U(t)}function U(e){var t=Object(_.a)(L);t.splice(e,1),S(t)}function x(e){console.log(e);var t=Object(_.a)(j),a=Object(F.a)({},t[e]);a.show=!j[e].show,t.splice(e,1,a),O(t)}return Object(n.useEffect)((function(){c&&l.getChapter(c).then((function(e){d(e.description),O(e.choices),v(e.choices.filter((function(e){return e._id})))})),console.log("render")}),[]),c&&!m?"loading":r.a.createElement("div",null,r.a.createElement(w.a,{onSubmit:function(e){var a;e.preventDefault(),c?(a={_id:c,description:m,choices:E},l.updateChapter(a).then((function(e){t(),console.log(e)})).catch((function(e){return console.log(e)}))):function(e){l.createChapter(e).then((function(e){t(),console.log(e)})).catch((function(e){return console.log(e)}))}({description:m,choices:E,gameId:o})}},r.a.createElement(w.a.Group,{controlId:"description"},r.a.createElement(w.a.Label,null,"Texto"),r.a.createElement(w.a.Control,{as:"textarea",name:"description",onChange:function(e){var t=e.currentTarget,a=t.name,n=t.value;switch(a){case"description":d(n);break;default:throw Error("Algo ha ido mal con el formulario")}},value:m,placeholder:"En un lugar de la Costa de la Espada, de cuyo nombre no quiero acordarme..."})),r.a.createElement(k.a,{type:"submit"},c?"Modificar":"Crear")),r.a.createElement(k.a,{onClick:function(){var e=Object(_.a)(L);e.push(!0),S(e)}},"A\xf1adir elecci\xf3n"),r.a.createElement(h.a,null,j.map((function(e,t){return r.a.createElement(p.a,{key:t,lg:4},e.show?r.a.createElement(D,{toogleCard:x,choice:e,idx:t}):r.a.createElement(z,{toogleCard:x,choice:e,idx:t}))})),L.map((function(e,t){return r.a.createElement(p.a,{key:t,lg:4},r.a.cloneElement(r.a.createElement(D,null),{idx:t,finishChoiceForm:G,closeChoiceForm:U}))}))))})),P=a(126);var K=function(e){var t=e.loggedInUser,a=e.updateLastGames,c=e.match,l=new A,o=Object(n.useState)([]),i=Object(u.a)(o,2),s=i[0],m=i[1],d=Object(n.useState)(!1),h=Object(u.a)(d,2),p=h[0],f=h[1];function g(){l.getChaptersFromGame(c.params.gameId).then((function(e){console.log(e),m(e)}))}return Object(n.useEffect)((function(){console.log("se lanza"),g()}),[]),console.log("render"),r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,null,s.map((function(e,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a.Item,{active:e.show,onClick:function(){return function(e){var t=Object(_.a)(s),a=Object(F.a)({},t[e]);a.show=!s[e].show,t.splice(e,1,a),console.log(t),m(t)}(n)}},e.description),e.show?r.a.createElement(P.a.Item,null,r.a.createElement(H,{chapterId:e._id,getAllChapters:g,loggedInUser:t,updateLastGames:a})):null)})),r.a.createElement(P.a.Item,{onClick:function(){return f(!p)}},"O escribe un nuevo capitulo"),p?r.a.createElement(H,{getAllChapters:g,loggedInUser:t,updateLastGames:a}):null))},M=function(){function e(){Object(g.a)(this,e),this.baseURL="".concat("https://tellmaster.herokuapp.com/api","/savedGames/"),this.service=b.a.create({baseURL:this.baseURL,withCredentials:!0})}return Object(E.a)(e,[{key:"getUserSaves",value:function(e){return this.service.get("/user/?userId=".concat(e)).then((function(e){return e.data.savedGames})).catch((function(e){return console.log(e)}))}},{key:"getFullSave",value:function(e){return this.service.get("/full/?saveId=".concat(e)).then((function(e){return e.data})).catch((function(e){return console.log(e)}))}},{key:"createSavedGame",value:function(e){var t=e.gameId,a=e.currentChapter,n=e.character;return this.service.post("",{gameId:t,currentChapter:a,character:n}).then((function(e){return e.data})).catch((function(e){return console.log(e)}))}},{key:"assignSaveToUser",value:function(e,t){return this.service.post("/assign",{userId:e,saveId:t}).then((function(e){return e.data})).catch((function(e){return console.log(e)}))}},{key:"updateSavedGame",value:function(e){var t=e.savedGameId,a=e.gameId,n=e.currentChapter,r=e.character;return this.service.patch("",{savedGameId:t,gameId:a,currentChapter:n,character:r}).then((function(e){return e.data}))}},{key:"deleteSave",value:function(e){return this.service.delete("",{savedGameId:e}).then((function(e){return e.data})).catch((function(e){return console.log(e)}))}}]),e}(),q=function(){function e(){Object(g.a)(this,e),this.baseURL="".concat("https://tellmaster.herokuapp.com/api","/characters/"),this.service=b.a.create({baseURL:this.baseURL,withCredentials:!0})}return Object(E.a)(e,[{key:"getCharactersFromUser",value:function(e){return this.service.get("/?userId=".concat(e)).then((function(e){return e.data.characters})).catch((function(e){return console.log(e)}))}},{key:"createCharacter",value:function(e){return this.service.post("",{character:e}).then((function(e){return e.data})).catch((function(e){return console.log(e)}))}},{key:"assignCharacterToUser",value:function(e,t){return this.service.post("assign",{userId:e,characterId:t}).then((function(e){return e.data})).catch((function(e){return console.log(e)}))}}]),e}();var B=function(e){e.setCharacter;var t=e.hideForm,a=e.setUser,c=e.loggedInUser,l=new q;console.log(q);var o=Object(n.useState)(""),i=Object(u.a)(o,2),s=i[0],m=i[1],d=Object(n.useState)(100),h=Object(u.a)(d,2),p=h[0],f=(h[1],Object(n.useState)(10)),g=Object(u.a)(f,2),E=g[0],v=g[1],b=Object(n.useState)(10),C=Object(u.a)(b,2),j=C[0],O=C[1],y=Object(n.useState)(10),I=Object(u.a)(y,2),L=I[0],S=I[1],G=Object(n.useState)(10),U=Object(u.a)(G,2),x=U[0],T=U[1],F=Object(n.useState)(10),_=Object(u.a)(F,2),R=_[0],N=_[1],A=Object(n.useState)(10),D=Object(u.a)(A,2),z=D[0],H=D[1];function P(e){var t=e.currentTarget,a=t.name,n=t.value;switch(a){case"name":m(n);break;case"str":v(n);break;case"des":O(n);break;case"agi":S(n);break;case"int":T(n);break;case"wis":N(n);break;case"char":H(n);break;default:throw Error("Algo fue mal con el formulario")}}return r.a.createElement(w.a,{onSubmit:function(e){e.preventDefault();var n={name:s,hp:p,str:E,des:j,agi:L,int:x,wis:R,char:z};l.createCharacter(n).then((function(e){l.assignCharacterToUser(c._id,e._id).then((function(e){a(e)})),m(""),t()}))}},r.a.createElement(w.a.Group,{controlId:"name"},r.a.createElement(w.a.Label,null,"Nombre del personaje"),r.a.createElement(w.a.Control,{onChange:P,value:s,name:"name",type:"text",placeholder:"Aragor, hijo de Arathorn"})),r.a.createElement(w.a.Group,{controlId:"str"},r.a.createElement(w.a.Label,null,"Fuerza"),r.a.createElement(w.a.Control,{onChange:P,value:E,name:"str",type:"number"})),r.a.createElement(w.a.Group,{controlId:"des"},r.a.createElement(w.a.Label,null,"Destreza"),r.a.createElement(w.a.Control,{onChange:P,value:j,name:"des",type:"number"})),r.a.createElement(w.a.Group,{controlId:"agi"},r.a.createElement(w.a.Label,null,"Agilidad, velocidad"),r.a.createElement(w.a.Control,{onChange:P,value:L,name:"agi",type:"number"})),r.a.createElement(w.a.Group,{controlId:"int"},r.a.createElement(w.a.Label,null,"Inteligencia"),r.a.createElement(w.a.Control,{onChange:P,value:x,name:"int",type:"number"})),r.a.createElement(w.a.Group,{controlId:"wis"},r.a.createElement(w.a.Label,null,"Sabidur\xeda, astucia"),r.a.createElement(w.a.Control,{onChange:P,value:R,name:"wis",type:"number"})),r.a.createElement(w.a.Group,{controlId:"char"},r.a.createElement(w.a.Label,null,"Carisma"),r.a.createElement(w.a.Control,{onChange:P,value:z,name:"char",type:"number"})),r.a.createElement(k.a,{variant:"primary",type:"submit"},"Crear"))};var W=function(e){var t=e.characters,a=e.newSave;return console.log(a),r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("button",{onClick:a?function(){return a(e._id)}:null},e.name,". Nivel: ",e.level," ")),r.a.createElement("small",null,"Fue: ",e.str," Des: ",e.des," Agi: ",e.agi," Int: ",e.int," Sab: ",e.wis," Car: ",e.char))})))};var J=Object(l.f)((function(e){var t=e.loggedInUser,a=e.setUser,c=e.match,l=e.updateSavedGames,o=new A,i=new M,s=Object(n.useState)(null),m=Object(u.a)(s,2),d=(m[0],m[1]),h=Object(n.useState)(!1),p=Object(u.a)(h,2),f=p[0],g=p[1];function E(){g(!f)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Elige un personaje para jugar: "),t.characters.length>0&&r.a.createElement(W,{newSave:function(e){o.getChaptersFromGame(c.params.gameId).then((function(t){return i.createSavedGame({gameId:c.params.gameId,currentChapter:t[0]._id,character:e})})).then((function(e){return l(e),i.assignSaveToUser(t._id,e._id)})).then((function(e){a(e)}))},characters:t.characters}),r.a.createElement("button",{onClick:E},"Tambi\xe9n puedes crear un nuevo personaje"),f&&r.a.createElement(B,{hideForm:E,setUser:a,loggedInUser:t,setCharacter:d}))})),Q=r.a.createContext(!1),$=Q.Provider,V=Q,X=a(30);var Y=Object(l.f)((function(e){var t=e.game,a=e.savedGames;console.log(e);var l=Object(n.useContext)(V);return e.noUser?t?r.a.createElement("section",null,r.a.createElement("article",null,r.a.createElement("h1",null,t.title),r.a.createElement("p",null,t.description),r.a.createElement(X.a,null,r.a.createElement(X.a.Toggle,{variant:"failure",id:"dropdown-basic"},"Para jugar, registrate."),r.a.createElement(X.a.Menu,null)))):r.a.createElement("p",null,"Loading game"):t?r.a.createElement("section",null,r.a.createElement("article",null,r.a.createElement("h1",null,t.title),r.a.createElement("p",null,t.description),l?r.a.createElement(r.a.Fragment,null,r.a.createElement(X.a,null,r.a.createElement(X.a.Toggle,{variant:"success",id:"dropdown-basic"},"Continua la aventura"),r.a.createElement(X.a.Menu,null,a.map((function(e){return r.a.createElement(c.b,{to:"/chapter/".concat(e._id)},r.a.createElement(X.a.Item,{disabled:!0},e.character.name))}))))):r.a.createElement("button",{disabled:!0},"Continuar la aventura"))):r.a.createElement("p",null,"loading game")}));var Z=Object(l.f)((function(e){var t=new I,a=new M,c=e.match,l=(e.location,e.history,e.loggedInUser),o=e.setUser,i=(c.params.gameId,Object(n.useState)(null)),s=Object(u.a)(i,2),m=s[0],d=s[1],f=Object(n.useState)([]),g=Object(u.a)(f,2),E=g[0],v=g[1];return Object(n.useEffect)((function(){t.getOneGame(e.match.params.gameId).then((function(e){return d(e)})),l&&a.getUserSaves(l._id).then((function(e){return v(e)}))}),[]),e.noUser?r.a.createElement(Y,{game:m,noUser:e.noUser}):r.a.createElement(h.a,{style:{justifyContent:"space-between"}},r.a.createElement(p.a,{lg:5},r.a.createElement(J,{updateSavedGames:function(e){var t=Object(_.a)(E);t.push(e),console.log(t,"--------------COPIA------------"),v(t)},setUser:o,loggedInUser:l})),r.a.createElement(p.a,{lg:5},r.a.createElement(Y,{game:m,savedGames:E})))})),ee=function(){function e(){Object(g.a)(this,e),this.baseURL="".concat("https://tellmaster.herokuapp.com/api","/characterChoices/"),this.service=b.a.create({baseURL:this.baseURL,withCredentials:!0})}return Object(E.a)(e,[{key:"makeChoice",value:function(e,t,a){return this.service.post("/makeChoice",{saveId:e,choiceId:t,characterId:a}).then((function(e){return e.data})).catch((function(e){return console.log(e)}))}}]),e}();var te=Object(l.f)((function(e){var t=new ee,a=(Object(n.useContext)(V),e.game),c=a.currentChapter,l=a.character;function o(a){t.makeChoice(e.game._id,a.currentTarget.id,l._id).then((function(t){console.log(t),e.updateChapter()}))}return r.a.createElement("div",null,r.a.createElement("p",null,c.description),c.choices.map((function(e){return e.successTargetChapter&&e.failureTargetChapter?r.a.createElement("button",{onClick:o,id:e._id},e.description):r.a.createElement("button",{disabled:!0,onClick:o,id:e._id},e.description)})))}));var ae=Object(l.f)((function(e){var t=new M,a=e.match,c=Object(n.useState)(null),l=Object(u.a)(c,2),o=l[0],i=l[1],s=Object(n.useState)(!1),d=Object(u.a)(s,2),h=d[0],p=d[1];function f(){t.getFullSave(a.params.savedGameId).then((function(e){console.log(e,a.params.savedGameId),i(e),p(!0)}))}return Object(n.useEffect)((function(){f()}),[]),h?r.a.createElement(te,{updateChapter:f,game:o}):r.a.createElement(m.a,null)}));var ne=function(){var e=new I,t=new C,a=Object(n.useState)([]),c=Object(u.a)(a,2),o=c[0],i=c[1],m=Object(n.useState)(!1),d=Object(u.a)(m,2),h=d[0],p=d[1];function f(e){p(e)}function g(){e.getLastGames().then((function(e){Array.isArray(e)&&!e.every((function(e){return o.find((function(t){return t._id==e._id}))}))&&i(e)}))}Object(n.useEffect)((function(){return g(),function(){i([])}}),[]),Object(n.useEffect)((function(){return 0==h&&t.loggedin().then((function(e){p(e||null)})),function(){}}),[h]);var E=Object(n.useState)(!1),v=Object(u.a)(E,2),b=v[0],w=v[1],k=Object(n.useState)(!1),G=Object(u.a)(k,2),x=G[0],F=G[1];return r.a.createElement(l.c,null,r.a.createElement(r.a.Fragment,null,r.a.createElement($,{value:h},r.a.createElement(j,{logout:function(){t.logout().then((function(e){return p(null)}))},showSignup:function(){return F(!0)},showLogin:function(){return w(!0)},loggedInUser:h}),r.a.createElement(s.a,null,r.a.createElement(l.a,{exact:!0,path:"/",render:function(){return r.a.createElement(O,{loggedInUser:h,games:o})}}),h?r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{exact:!0,path:"/myGames",render:function(){return r.a.createElement(y,{loggedInUser:h})}}),r.a.createElement(l.a,{exact:!0,path:"/newGame",render:function(){return r.a.createElement(T,{updateLastGames:g,loggedInUser:h})}}),r.a.createElement(l.a,{exact:!0,path:"/myCharacters",render:function(){return r.a.createElement(W,{characters:h.characters})}}),r.a.createElement(l.a,{exact:!0,path:"/modify/:gameId",render:function(e){var t=e.match;return r.a.createElement(K,{match:t,updateLastGames:g,loggedInUser:h})}}),r.a.createElement(l.a,{exact:!0,path:"/chapter/:savedGameId",render:function(){return r.a.createElement(ae,null)}}),r.a.createElement(l.a,{exact:!0,path:"/read/:gameId",render:function(){return r.a.createElement(Z,{setUser:f,loggedInUser:h})}})):r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{exact:!0,path:"/read/:gameId",render:function(){return r.a.createElement(Z,{noUser:!0,setUser:f,loggedInUser:h})}}),r.a.createElement(l.a,{exact:!0,path:"/:algo"},r.a.createElement("h1",null,"Para ver este contenido has de estar logueado")),r.a.createElement(U,{title:"Login",show:b,onHide:function(){return w(!1)}},r.a.createElement(L,{setUser:f})),r.a.createElement(U,{title:"Signup",show:x,onHide:function(){return F(!1)}},r.a.createElement(S,{setUser:f})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,null,r.a.createElement(l.a,{path:"/",render:function(e){return r.a.createElement(ne,e)}}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e,t,a){e.exports=a(112)},85:function(e,t,a){},86:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},87:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.8cbd6df7.chunk.js.map