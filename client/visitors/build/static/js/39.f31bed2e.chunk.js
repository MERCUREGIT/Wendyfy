(this["webpackJsonpwendyf-ecommerce-front-end"]=this["webpackJsonpwendyf-ecommerce-front-end"]||[]).push([[39],{583:function(e,a,t){"use strict";t.r(a);var c=t(44),n=t(0),l=t.n(n),o=t(593),m=t.n(o),r=t(176),s=t(589),i=t(590),u=t(713),E=Object(u.GoogleApiWrapper)({apiKey:"AIzaSyB2D8wrWMY3XZnuHO6C31uq90JiuaFzGws"})((function(e){return l.a.createElement(u.Map,{google:e.google,zoom:16,style:{width:"100%",height:"100%"},initialCenter:{lat:e.latitude,lng:e.longitude}},l.a.createElement(u.Marker,{position:{lat:e.latitude,lng:e.longitude},icon:{url:"".concat("/assets/img/icon-img/2.png")},animation:e.google.maps.Animation.BOUNCE}))})),d=t(48),f=t(42),g=t.n(f),p=t(661),b=t.n(p),v=t(76);a.default=Object(v.multilanguage)((function(e){var a=e.location,t=e.strings,o=a.pathname,u=Object(n.useState)(""),f=Object(c.a)(u,2),p=f[0],v=f[1],h=Object(n.useState)(""),N=Object(c.a)(h,2),y=N[0],w=N[1],j=Object(n.useState)(""),O=Object(c.a)(j,2),_=O[0],S=O[1],C=Object(n.useState)(""),k=Object(c.a)(C,2),B=k[0],x=k[1],A=Object(n.useState)(!1),z=Object(c.a)(A,2),I=z[0],J=z[1],M=Object(n.useState)(""),W=Object(c.a)(M,2),D=W[0],F=W[1],G=Object(n.useState)(""),T=Object(c.a)(G,2),Y=T[0],q=T[1];return l.a.createElement(n.Fragment,null,l.a.createElement(m.a,null,l.a.createElement("title",null,"Wendyfy | Contact"),l.a.createElement("meta",{name:"description",content:"Contact of flone react minimalist eCommerce template."})),l.a.createElement(r.BreadcrumbsItem,{to:"/"},t.home),l.a.createElement(r.BreadcrumbsItem,{to:""+o},t.contact),l.a.createElement(s.a,{headerTop:"visible"},l.a.createElement(i.a,null),l.a.createElement("div",{className:"contact-area pt-100 pb-100"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"contact-map mb-10"},l.a.createElement(E,{latitude:"3.8399833",longitude:"11.4798095"})),l.a.createElement("div",{className:"custom-row-2"},l.a.createElement("div",{className:"col-lg-4 col-md-5"},l.a.createElement("div",{className:"contact-info-wrap"},l.a.createElement("div",{className:"single-contact-info"},l.a.createElement("div",{className:"contact-icon"},l.a.createElement("i",{className:"fa fa-phone"})),l.a.createElement("div",{className:"contact-info-dec"},l.a.createElement("p",null,"+237 679 591 937"),l.a.createElement("p",null,"+237 242 016 011"))),l.a.createElement("div",{className:"single-contact-info"},l.a.createElement("div",{className:"contact-icon"},l.a.createElement("i",{className:"fa fa-globe"})),l.a.createElement("div",{className:"contact-info-dec"},l.a.createElement("p",null,l.a.createElement("a",{href:"mailto:contact@wendyfy.com"},"contact@wendyfy.com")),l.a.createElement("p",null,l.a.createElement("a",{href:"/"},"wendyfy.com")))),l.a.createElement("div",{className:"single-contact-info"},l.a.createElement("div",{className:"contact-icon"},l.a.createElement("i",{className:"fa fa-map-marker"})),l.a.createElement("div",{className:"contact-info-dec"},l.a.createElement("p",null,"Yaounde Acassia"),l.a.createElement("p",null,"descente Biyemassi Lac"))),l.a.createElement("div",{className:"contact-social text-center"},l.a.createElement("h3",null,t.contactSection.follow_us),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/wendybyfy",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-facebook"}))),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",href:"https://www.instagram.com/wendyfy_237/",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-instagram"}))))))),l.a.createElement("div",{className:"col-lg-8 col-md-7"},l.a.createElement("div",{className:"contact-form"},l.a.createElement("div",{className:"contact-title mb-30"},l.a.createElement("h2",null,t.contactSection.get_in_touch)),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),y&&_&&B&&p?(J(!0),g.a.post("".concat(d.a.server,"/contact"),{name:p,email:y,subject:_,message:B}).then((function(e){v(""),w(""),S(""),x(""),console.log(e),q(t.contactSection.got_your_feedback),setTimeout((function(){q("")}),1500)})).catch((function(e){console.log(e),F(t.subs_connection_error)})).finally((function(){J(!1)}))):F(t.lr_all_fields_obligatory)},className:"contact-form-style"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("input",{name:"name",placeholder:"".concat(t.contactSection.name_e,"*"),value:p||"",onChange:function(e){return v(e.target.value)},type:"text"})),l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("input",{name:"email",placeholder:"".concat(t.contactSection.email_e,"*"),value:y||"",onChange:function(e){return w(e.target.value)},type:"email"})),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("input",{name:"subject",placeholder:"".concat(t.contactSection.subject,"*"),value:_,onChange:function(e){return S(e.target.value)},type:"text"})),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("textarea",{name:"message",placeholder:"".concat(t.contactSection.your_message,"*"),value:B,onChange:function(e){return x(e.target.value)}}),D&&l.a.createElement("p",{style:{color:"red"}},D),Y&&l.a.createElement("p",{style:{color:"green"}},Y),l.a.createElement("button",{className:"submit",type:"submit",disabled:I},I?l.a.createElement(b.a,{type:"Oval",color:"white",height:20,width:20}):l.a.createElement("span",null,t.lr_send))))),l.a.createElement("p",{className:"form-messege"}))))))))}))}}]);