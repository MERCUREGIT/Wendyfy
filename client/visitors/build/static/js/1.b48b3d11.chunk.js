(this["webpackJsonpwendyf-ecommerce-front-end"]=this["webpackJsonpwendyf-ecommerce-front-end"]||[]).push([[1],{586:function(e,t,a){"use strict";a.d(t,"f",(function(){return l})),a.d(t,"a",(function(){return c})),a.d(t,"e",(function(){return r})),a.d(t,"h",(function(){return o})),a.d(t,"b",(function(){return i})),a.d(t,"d",(function(){return u})),a.d(t,"c",(function(){return m})),a.d(t,"g",(function(){return d})),a.d(t,"j",(function(){return g})),a.d(t,"i",(function(){return f})),a.d(t,"k",(function(){return E}));var n=a(26),l=function(e,t,a,l){console.log("Fetched products",e);var c=e?e.filter((function(e){return e.category.filter((function(e){return e===t}))[0]})):e;if(a&&"new"===a){var r=e.filter((function(e){return(new Date-new Date(e.date).getTime())/864e5<7}));return r.slice(0,l||r.length)}if(a&&"bestSeller"===a)return e.sort((function(e,t){return t.saleCount-e.saleCount})).slice(0,l||e.length);if(a&&"topRated"===a){var o=Object(n.a)(e);return o.sort((function(e,t){return e.rating-t.rating})),o.slice(0,l||e.length)}if(a&&"saleItems"===a){var s=c.filter((function(e){return e.discount&&e.discount>0}));return s.slice(0,l||s.length)}return e.slice(0,l||8)},c=function(e,t){return t&&t>0?e-e*(t/100):null},r=function(e,t,a,n){var l=e.filter((function(e){return e.id===t.id&&(!e.selectedProductColor||e.selectedProductColor===a)&&(!e.selectedProductSize||e.selectedProductSize===n)}))[0];return e.length>=1&&l?t.variation?e.filter((function(e){return e.id===t.id&&e.selectedProductColor===a&&e.selectedProductSize===n}))[0].quantity:e.filter((function(e){return t.id===e.id}))[0].quantity:0},o=function(e,t,a){if(e&&t&&a){if("category"===t)return e.filter((function(e){return e.category.filter((function(e){return e===a}))[0]}));if("tag"===t)return e.filter((function(e){return e.tag.filter((function(e){return e===a}))[0]}));if("color"===t)return e.filter((function(e){return e.variation&&e.variation.filter((function(e){return e.color===a}))[0]}));if("size"===t)return e.filter((function(e){return e.variation&&e.variation.filter((function(e){return e.size.filter((function(e){return e.name===a}))[0]}))[0]}));if("filterSort"===t){var l=Object(n.a)(e);if("default"===a)return l;if("priceHighToLow"===a)return l.sort((function(e,t){return t.price-e.price}));if("priceLowToHigh"===a)return l.sort((function(e,t){return e.price-t.price}))}}return e},s=function(e){return e.filter((function(e,t,a){return t===a.indexOf(e)}))},i=function(e){var t=[];return e&&e.map((function(e){return e.category&&e.category.map((function(e){return t.push(e)}))})),s(t)},u=function(e){var t=[];return e&&e.map((function(e){return e.tag&&e.tag.map((function(e){return t.push(e)}))})),s(t)},m=function(e){var t=[];return e&&e.map((function(e){return e.variation&&e.variation.map((function(e){return t.push(e.color)}))})),s(t)},d=function(e){var t=[];return e&&e.map((function(e){return e.variation&&e.variation.map((function(e){return e.size.map((function(e){return t.push(e.name)}))}))})),s(t)},g=function(e){document.querySelectorAll(".sidebar-widget-list-left button, .sidebar-widget-tag button, .product-filter button").forEach((function(e){e.classList.remove("active")})),e.currentTarget.classList.add("active")},f=function(e){document.querySelectorAll(".shop-tab button").forEach((function(e){e.classList.remove("active")})),e.currentTarget.classList.add("active")},E=function(e){var t=document.querySelector("#product-filter-wrapper");t.classList.toggle("active"),t.style.height?t.style.height=null:t.style.height=t.scrollHeight+"px",e.currentTarget.classList.toggle("active")}},589:function(e,t,a){"use strict";var n=a(0),l=a.n(n),c=a(44),r=a(127),o=function(e){var t=e.imageUrl,a=e.logoClass;return l.a.createElement("div",{className:"".concat(a||"")},l.a.createElement(r.b,{to:"/"},l.a.createElement("img",{alt:"logo",style:{width:"100px"},src:""+t})))},s=a(595),i=a(77),u=a(175),m=a(586),d=a(76),g=Object(d.multilanguage)((function(e){var t=e.cartData,a=e.currency,c=e.deleteFromCart,o=e.strings,s=0,i=Object(u.useToasts)().addToast;return l.a.createElement("div",{className:"shopping-cart-content"},t&&t.length>0?l.a.createElement(n.Fragment,null,l.a.createElement("ul",null,t.map((function(e,t){var n=Object(m.a)(e.price,e.discount),o=(e.price*a.currencyRate).toFixed(2),u=(n*a.currencyRate).toFixed(2);return s+=null!=n?u*e.quantity:o*e.quantity,l.a.createElement("li",{className:"single-shopping-cart",key:t},l.a.createElement("div",{className:"shopping-cart-img"},l.a.createElement(r.b,{to:"/product/"+e.id},l.a.createElement("img",{alt:"",src:e.image[0],className:"img-fluid"}))),l.a.createElement("div",{className:"shopping-cart-title"},l.a.createElement("h4",null,l.a.createElement(r.b,{to:"/product/"+e.id}," ",e.name," ")),l.a.createElement("h6",null,"Qty: ",e.quantity),l.a.createElement("span",null,null!==n?a.currencySymbol+u:a.currencySymbol+o),e.selectedProductColor&&e.selectedProductSize?l.a.createElement("div",{className:"cart-item-variation"},l.a.createElement("span",null,"Color: ",e.selectedProductColor),l.a.createElement("span",null,"Size: ",e.selectedProductSize)):""),l.a.createElement("div",{className:"shopping-cart-delete"},l.a.createElement("button",{onClick:function(){return c(e,i)}},l.a.createElement("i",{className:"fa fa-times-circle"}))))}))),l.a.createElement("div",{className:"shopping-cart-total"},l.a.createElement("h4",null,o.total," :"," ",l.a.createElement("span",{className:"shop-total"},a.currencySymbol+s.toFixed(2)))),l.a.createElement("div",{className:"shopping-cart-btn btn-hover text-center"},l.a.createElement(r.b,{className:"default-btn",to:"/cart"},o.view_cart),l.a.createElement(r.b,{className:"default-btn",to:"/checkout"},o.checkout))):l.a.createElement("p",{className:"text-center"},o.no_items_added_to_cart))})),f=a(78),E=a(69),p=a(100),b=a.n(p),v=Object(i.connect)((function(e){return{products:e.productData.products,currency:e.currencyData,cartData:e.cartData,wishlistData:e.wishlistData,compareData:e.compareData,authentication:e.authentication}}),(function(e){return{deleteFromCart:function(t,a){e(Object(f.i)(t,a))},logout:function(){return e(Object(E.g)())}}}))(Object(d.multilanguage)((function(e){e.handleFilterList;var t=e.products,a=e.currency,o=e.cartData,s=e.wishlistData,i=e.compareData,u=e.deleteFromCart,m=e.iconWhiteClass,d=e.authentication,f=e.logout,E=e.strings,p=Object(n.useState)(),v=Object(c.a)(p,2),h=v[0],y=v[1],N=function(e){e.currentTarget.nextSibling.classList.toggle("active")};return l.a.createElement("div",{className:"header-right-wrap ".concat(m||"")},""!==d.username&&d.login?l.a.createElement("div",{style:{textAlign:"center"}}," ",l.a.createElement("h6",{style:{fontWeight:"bold",marginTop:5,textAlign:"center"}}," ",d.username.split(" ")[0].substring(0,10),"..")):"",l.a.createElement("div",{className:"same-style account-setting d-none d-lg-block"},l.a.createElement("button",{title:E.my_account,className:"account-setting-active",onClick:function(e){return N(e)}},l.a.createElement("i",{className:"pe-7s-user-female"})),l.a.createElement("div",{className:"account-dropdown"},l.a.createElement("ul",null,l.a.createElement("li",null,d.login?l.a.createElement(r.b,{to:"/",onClick:function(){f()}},E.log_out):l.a.createElement(r.b,{to:"/login-register"},E.Log_in)),d.login?l.a.createElement("li",null,l.a.createElement(r.b,{to:"/my-account"},E.my_account)):l.a.createElement("li",null,l.a.createElement(r.b,{to:"/login-register"},E.login_register),l.a.createElement(r.b,{to:"/login-register"},"login"))))),l.a.createElement("div",{className:"same-style header-search d-none d-lg-block"},l.a.createElement("button",{className:"search-active",onClick:function(e){return N(e)},title:E.search},l.a.createElement("i",{className:"pe-7s-search"})),l.a.createElement("div",{className:"search-content"},l.a.createElement("form",{action:"#"},l.a.createElement("input",{type:"text",onChange:function(e){return function(e){var a=t.filter((function(t){return t.name.split(" ").includes(e)||t.shortDescription.split(" ").includes(e)||t.fullDescription.split(" ").includes(e)}));y(a)}(e.target.value)},placeholder:E.search}),l.a.createElement("button",{className:"button-search"},l.a.createElement("i",{className:"pe-7s-search"}))),l.a.createElement("div",null,h?h.map((function(e,t){return l.a.createElement(r.b,{to:"/product/"+e._id}," ",l.a.createElement("div",{className:"bg-purple row g-0 p-2 my-3",key:b()()},l.a.createElement("div",{className:"col-2"},l.a.createElement("span",null,t+1)),l.a.createElement("div",{className:"col-4"},e.discount||e.new?l.a.createElement("div",{className:"product-img-badges"},e.discount?l.a.createElement("span",{className:"pink"},"-",e.discount,"% off"):"",e.new?l.a.createElement("span",{className:"purple"},"New"):""):""),l.a.createElement("div",{className:"col-6"},l.a.createElement("img",{style:{width:"70%"},className:"default-img",src:e.image[0],alt:""}),l.a.createElement("strong",{className:"pt-3 pl-3"},e.name))))})):" "))),l.a.createElement("div",{className:"same-style header-compare",title:E.compare},l.a.createElement(r.b,{to:"/compare"},l.a.createElement("i",{className:"pe-7s-shuffle"}),l.a.createElement("span",{className:"count-style"},i&&i.length?i.length:0))),l.a.createElement("div",{className:"same-style header-wishlist",title:E.wishlist},l.a.createElement(r.b,{to:"/wishlist"},l.a.createElement("i",{className:"pe-7s-like"}),l.a.createElement("span",{className:"count-style"},s&&s.length?s.length:0))),l.a.createElement("div",{className:"same-style cart-wrap d-none d-lg-block",title:E.cart},l.a.createElement("button",{className:"icon-cart",onClick:function(e){return N(e)}},l.a.createElement("i",{className:"pe-7s-shopbag"}),l.a.createElement("span",{className:"count-style"},o&&o.length?o.length:0)),l.a.createElement(g,{cartData:o,currency:a,deleteFromCart:u})),l.a.createElement("div",{className:"same-style cart-wrap d-block d-lg-none"},l.a.createElement(r.b,{className:"icon-cart",to:"/cart"},l.a.createElement("i",{className:"pe-7s-shopbag"}),l.a.createElement("span",{className:"count-style"},o&&o.length?o.length:0))),l.a.createElement("div",{className:"same-style mobile-off-canvas d-block d-xl-none"},l.a.createElement("button",{className:"mobile-aside-button",onClick:function(){document.querySelector("#offcanvas-mobile-menu").classList.add("active")}},l.a.createElement("i",{className:"pe-7s-menu"}))))}))),h=a(48),y=Object(i.connect)((function(e){return{products:e.productData.products}}))((function(e){var t=e.products,a=Object(n.useState)(),o=Object(c.a)(a,2),s=o[0],i=o[1];return l.a.createElement("div",{className:"offcanvas-mobile-search-area"},l.a.createElement("form",{action:"#"},l.a.createElement("input",{type:"search",onChange:function(e){return function(e){var a=t.filter((function(t){return t.name.split(" ").includes(e)||t.shortDescription.split(" ").includes(e)||t.fullDescription.split(" ").includes(e)}));i(a)}(e.target.value)},placeholder:"Search ..."}),l.a.createElement("button",{type:"submit"},l.a.createElement("i",{className:"fa fa-search"}))),s?s.map((function(e,t){return l.a.createElement(r.b,{to:"/product/"+e._id}," ",l.a.createElement("div",{className:"bg-purple row g-0 p-2 my-3",key:b()()},l.a.createElement("div",{className:"col-2"},l.a.createElement("span",null,t+1)),l.a.createElement("div",{className:"col-4"},e.discount||e.new?l.a.createElement("div",{className:"product-img-badges"},e.discount?l.a.createElement("span",{className:"pink"},"-",e.discount,"% off"):"",e.new?l.a.createElement("span",{className:"purple"},"New"):""):""),l.a.createElement("div",{className:"col-6"},l.a.createElement("img",{style:{width:"70%"},className:"default-img",src:h.a.server+"/"+e.image[0],alt:""}),l.a.createElement("strong",{className:"pt-3 pl-3"},e.name))))})):" ")})),N=Object(d.multilanguage)((function(e){var t=e.strings;return l.a.createElement("nav",{className:"offcanvas-navigation",id:"offcanvas-navigation"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(r.b,{to:"/"},t.home)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/shop-grid-standard"},t.shop)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/blog-standard"},t.blog)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/contact"},t.contact_us))))})),C=a(177),w=Object(i.connect)((function(e){return{currency:e.currencyData}}),(function(e){return{setCurrency:function(t){e(Object(C.b)(t))}}}))(Object(d.multilanguage)((function(e){var t=e.currency,a=e.setCurrency,n=e.currentLanguageCode,c=e.dispatch,r=function(){document.querySelector("#offcanvas-mobile-menu").classList.remove("active")};return l.a.createElement("div",{className:"mobile-menu-middle"},l.a.createElement("div",{className:"lang-curr-style"},l.a.createElement("span",{className:"title mb-2"},"Choose Language "),l.a.createElement("select",{value:n,onChange:function(e){!function(e){var t=e.target.value;c(Object(d.changeLanguage)(t))}(e),r()}},l.a.createElement("option",{value:"en"},"English"),l.a.createElement("option",{value:"fr"},"French"),l.a.createElement("option",{value:"de"},"Germany"),l.a.createElement("option",{value:"ru"},"Russe"))),l.a.createElement("div",{className:"lang-curr-style"},l.a.createElement("span",{className:"title mb-2"},"Choose Currency"),l.a.createElement("select",{value:t.currencyName,onChange:function(e){!function(e){var t=e.target.value;a(t)}(e),r()}},l.a.createElement("option",{value:"USD"},"USD"),l.a.createElement("option",{value:"EUR"},"EUR"),l.a.createElement("option",{value:"GBP"},"GBP"),l.a.createElement("option",{value:"FCFA"},"FCFA"))))}))),_=function(){return l.a.createElement("div",{className:"offcanvas-widget-area"},l.a.createElement("div",{className:"off-canvas-contact-widget"},l.a.createElement("div",{className:"header-contact-info"},l.a.createElement("ul",{className:"header-contact-info__list"},l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-phone"})," ",l.a.createElement("a",{href:"tel://12452456012"},"(+237) 679 591 937 ")),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-envelope"})," ",l.a.createElement("a",{href:"mailto:info@yourdomain.com"},"contact@wendyfy.com"))))),l.a.createElement("div",{className:"off-canvas-widget-social"},l.a.createElement("a",{href:"https://www.instagram.com/wendyfy_237/",title:"Instagram"},l.a.createElement("i",{className:"fa fa-instagram"})),l.a.createElement("a",{href:"https://www.facebook.com/wendybyfy",title:"Facebook"},l.a.createElement("i",{className:"fa fa-facebook"}))))},j=function(){Object(n.useEffect)((function(){for(var a=document.querySelector("#offcanvas-navigation"),n=a.querySelectorAll(".sub-menu"),l=a.querySelectorAll("a"),c=0;c<n.length;c++)n[c].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var r=a.querySelectorAll(".menu-expand"),o=r.length,s=0;s<o;s++)r[s].addEventListener("click",(function(t){e(t)}));for(var i=0;i<l.length;i++)l[i].addEventListener("click",(function(){t()}))}));var e=function(e){e.currentTarget.parentElement.classList.toggle("active")},t=function(){document.querySelector("#offcanvas-mobile-menu").classList.remove("active")};return l.a.createElement("div",{className:"offcanvas-mobile-menu",id:"offcanvas-mobile-menu"},l.a.createElement("button",{className:"offcanvas-menu-close",id:"mobile-menu-close-trigger",onClick:function(){return t()}},l.a.createElement("i",{className:"pe-7s-close"})),l.a.createElement("div",{className:"offcanvas-wrapper"},l.a.createElement("div",{className:"offcanvas-inner-content"},l.a.createElement(y,null),l.a.createElement(N,null),l.a.createElement(w,null),l.a.createElement(_,null))))},k=Object(d.multilanguage)((function(e){var t=e.currency,a=e.setCurrency,n=e.currentLanguageCode,c=e.dispatch,r=e.strings,o=function(e){var t=e.target.value;c(Object(d.changeLanguage)(t))};return l.a.createElement("div",{className:"language-currency-wrap"},l.a.createElement("div",{className:"same-language-currency language-style"},l.a.createElement("span",null,"fr"===n?"French":"en"===n?"English":"de"===n?"Germany":"ru"===n?"Russe":""," ",l.a.createElement("i",{className:"fa fa-angle-down"})),l.a.createElement("div",{className:"lang-car-dropdown"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("button",{value:"en",onClick:function(e){return o(e)}},"English")),l.a.createElement("li",null,l.a.createElement("button",{value:"fr",onClick:function(e){return o(e)}},"French")),l.a.createElement("li",null,l.a.createElement("button",{value:"de",onClick:function(e){return o(e)}},"Germany")),l.a.createElement("li",null,l.a.createElement("button",{value:"ru",onClick:function(e){return o(e)}},"Russe"))))),l.a.createElement("div",{className:"same-language-currency use-style"},l.a.createElement("span",null,t.currencyName," ",l.a.createElement("i",{className:"fa fa-angle-down"})),l.a.createElement("div",{className:"lang-car-dropdown"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("button",{value:"FCFA",onClick:function(e){a("FCFA")}},"FCFA"))))),l.a.createElement("div",{className:"same-language-currency"},l.a.createElement("p",null," ",r.call_us," +(237) 679 591 937")))})),O=Object(i.connect)((function(e){return{currency:e.currencyData}}),(function(e){return{setCurrency:function(t){e(Object(C.b)(t))}}}))(Object(d.multilanguage)((function(e){var t=e.currency,a=e.setCurrency,n=e.currentLanguageCode,c=e.dispatch,r=e.borderStyle,o=e.strings;return l.a.createElement("div",{className:"header-top-wap ".concat("fluid-border"===r?"border-bottom":"")},l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("span",{style:{margin:"5px"}},l.a.createElement("a",{href:"https://www.facebook.com/wendybyfy"},l.a.createElement("i",{className:"fa fa-facebook"}))),l.a.createElement("span",{style:{margin:"5px"}},l.a.createElement("a",{href:"https://www.instagram.com/wendyfy_237/"},l.a.createElement("i",{className:"fa fa-instagram"}))))),l.a.createElement(k,{currency:t,setCurrency:a,currentLanguageCode:n,dispatch:c}),l.a.createElement("div",{className:"header-offer"},l.a.createElement("p",null,o.free_delivery_on_order_over," "," ",l.a.createElement("span",null,t.currencySymbol+2e5.toFixed(2)))))}))),S=function(e){var t=e.handleFilterList,a=e.layout,r=e.top,i=e.borderStyle,u=e.headerPaddingClass,m=e.headerPositionClass,d=e.headerBgClass,g=Object(n.useState)(0),f=Object(c.a)(g,2),E=f[0],p=f[1],b=Object(n.useState)(0),h=Object(c.a)(b,2),y=h[0],N=h[1];Object(n.useEffect)((function(){var e=document.querySelector(".sticky-bar");return N(e.offsetTop),window.addEventListener("scroll",C),function(){window.removeEventListener("scroll",C)}}),[]);var C=function(){p(window.scrollY)};return l.a.createElement("header",{className:"header-area clearfix ".concat(d||""," ").concat(m||"")},l.a.createElement("div",{className:"".concat(u||""," ").concat("visible"===r?"d-none d-lg-block":"d-none"," header-top-area ").concat("fluid-border"===i?"border-none":"")},l.a.createElement("div",{className:"container-fluid"===a?a:"container"},l.a.createElement(O,{borderStyle:i}))),l.a.createElement("div",{className:" ".concat(u||""," sticky-bar header-res-padding clearfix ").concat(E>y?"stick":"")},l.a.createElement("div",{className:"container-fluid"===a?a:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4"},l.a.createElement(o,{imageUrl:"/assets/img/logo/logo.jpeg",logoClass:"logo"})),l.a.createElement("div",{className:"col-xl-7 col-lg-7 d-none d-xl-block"},l.a.createElement(s.a,null)),l.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-7 col-9"},l.a.createElement(v,{handleFilterList:t})))),l.a.createElement(j,null)))},L=a(607),x=Object(i.connect)()(Object(d.multilanguage)((function(e){var t=e.strings,a=e.footerLogo,n=e.spaceBottomClass,c=e.colorClass;return l.a.createElement("div",{style:{marginTop:"-50"},className:"copyright ".concat(n||""," ").concat(c||"")},t.powered_by," ",l.a.createElement("strong",null," Mercury-Tech"),l.a.createElement("div",{className:"footer-logo"},l.a.createElement(r.b,{to:"/"},l.a.createElement("img",{style:{width:"100px"},alt:"",src:""+a}))),l.a.createElement("p",null,"\xa9 2020"," ",l.a.createElement("a",{href:"/mercury-cm.com",rel:"noopener noreferrer",target:"_blank"},"Wendy Fy"),".",l.a.createElement("br",null)," ",t.copy_rights))}))),F=a(608),D=a(42),I=a.n(D);var T=function(e){var t=e.strings,a=Object(n.useState)(""),r=Object(c.a)(a,2),o=r[0],s=r[1],i=Object(n.useState)(""),u=Object(c.a)(i,2),m=u[0],d=u[1],g=Object(n.useState)(""),f=Object(c.a)(g,2),E=f[0],p=f[1];return l.a.createElement("div",{className:"subscribe-form"},l.a.createElement("div",{className:"mc-form"},l.a.createElement("div",null,l.a.createElement("input",{id:"mc-form-email",className:"email",type:"email",placeholder:t.subs_enter_your_email,onChange:function(e){p(e.target.value)},value:E})),l.a.createElement("div",{className:"clear"},"sending"!==o&&l.a.createElement("button",{className:"button",onClick:function(){if("sending"!==o){if(!E)return s("error"),void d(t.subs_email);if(!function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(E))return s("error"),void d(t.subs_invalid_email);s("sending"),I.a.post("".concat(h.a.server,"/news-letter"),{email:E}).then((function(e){e.data.message?(s("error"),d(e.data.message)):(s("success"),d(t.subs_email_added_to_nw),setTimeout((function(){s(""),d("")}),1500)),p("")})).catch((function(){s("error"),d(t.subs_connection_error)})),document.getElementById("mc-form-email").value=""}}},t.sub_subscribe))),"sending"===o&&l.a.createElement("div",{style:{color:"#3498db",fontSize:"12px"}},t.subs_sending),"error"===o&&l.a.createElement("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:m}}),"success"===o&&l.a.createElement("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:m}}))},P=Object(d.multilanguage)((function(e){var t=e.mailchimpUrl,a=e.strings;return l.a.createElement("div",null,l.a.createElement(F.a,{url:t,render:function(e){e.subscribe;var t=e.status,n=e.message;return l.a.createElement(T,{strings:a,status:t,message:n,onValidated:function(e){return I.a.post("http://localhost:5000/news-letter",{email:e.EMAIL})}})}}))})),M=Object(d.multilanguage)((function(e){var t=e.strings,a=e.spaceBottomClass,n=e.spaceLeftClass,c=e.sideMenu,r=e.colorClass,o=e.widgetColorClass;return l.a.createElement("div",{className:"footer-widget  ".concat(a||""," ").concat(c?"ml-ntv5":n||""," ").concat(o||"")},l.a.createElement("div",{className:"footer-title"},l.a.createElement("h3",null,t.subscribe)),l.a.createElement("div",{className:"subscribe-style ".concat(r||"")},l.a.createElement("p",null,t.subscribe_text),l.a.createElement(P,{mailchimpUrl:""})))})),q=Object(d.multilanguage)((function(e){var t=e.strings,a=e.backgroundColorClass,r=e.spaceTopClass,o=e.spaceBottomClass,s=e.spaceLeftClass,i=e.spaceRightClass,u=e.containerClass,m=e.extraFooterClass,d=e.sideMenu,g=Object(n.useState)(0),f=Object(c.a)(g,2),E=f[0],p=f[1],b=Object(n.useState)(0),v=Object(c.a)(b,2),h=v[0],y=v[1];Object(n.useEffect)((function(){return y(100),window.addEventListener("scroll",N),function(){window.removeEventListener("scroll",N)}}),[]);var N=function(){p(window.scrollY)};return l.a.createElement("footer",{className:"footer-area ".concat(a||""," ").concat(r||""," ").concat(o||""," ").concat(m||""," ").concat(s||""," ").concat(i||"")},l.a.createElement("div",{className:"".concat(u||"container")},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"".concat(d?"col-xl-4 col-sm-6":"col-lg-4 col-sm-6")},l.a.createElement(x,{footerLogo:"/assets/img/logo/logo.jpeg",spaceBottomClass:"mb-30"})),l.a.createElement("div",{className:"".concat(d?"col-xl-4 col-sm-6":"col-lg-4 col-sm-6")},l.a.createElement("div",{className:"".concat(d?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75")},l.a.createElement("div",{className:"footer-title"},l.a.createElement("h3",null,t.follow_us)),l.a.createElement("div",{className:"footer-list"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.facebook.com/wendybyfy",target:"_blank",rel:"noopener noreferrer"},"Facebook")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.instagram.com/wendyfy_237/",target:"_blank",rel:"noopener noreferrer"},"Instagram")))))),l.a.createElement("div",{className:"".concat(d?"col-xl-4 col-sm-6":"col-lg-4 col-sm-6 col-12")},l.a.createElement(M,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:d})))),l.a.createElement("button",{className:"scroll-top ".concat(E>h?"show":""),onClick:function(){L.animateScroll.scrollToTop()}},l.a.createElement("i",{className:"fa fa-angle-double-up"})))}));t.a=function(e){var t=e.children,a=e.headerContainerClass,c=e.headerTop,r=e.headerPaddingClass,o=e.headerPositionClass;return l.a.createElement(n.Fragment,null,l.a.createElement(S,{layout:a,top:c,headerPaddingClass:r,headerPositionClass:o}),t,l.a.createElement(q,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}))}},590:function(e,t,a){"use strict";var n=a(0),l=a.n(n),c=a(127),r=a(176);t.a=function(){return l.a.createElement("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"breadcrumb-content text-center"},l.a.createElement(r.Breadcrumbs,{separator:l.a.createElement("span",null,"/"),item:c.c,finalItem:"span"}))))}},594:function(e){e.exports=JSON.parse('[{"country":"Cameroon"},{"country":"The Democratic Republic of Congo"},{"country":"Senegal"}]')},595:function(e,t,a){"use strict";(function(e){var n=a(0),l=a.n(n),c=a(127),r=a(76),o=a(596);t.a=Object(r.multilanguage)((function(t){var a=t.strings,n=t.menuWhiteClass,r=t.sidebarMenu;return l.a.createElement("div",{className:" ".concat(r?"sidebar-menu":"main-menu ".concat(n||"")," ")},l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(c.b,{to:"/"},a.home)),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/shop-grid-standard"},a.shop)),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/blog-standard"},a.blog)),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/contact"},a.contact_us)),l.a.createElement("li",null,l.a.createElement(c.b,{to:"#!",onClick:function(t){e.setModalContent(l.a.createElement(o.a,null))}},a.take_measures)))))}))}).call(this,a(79))},596:function(e,t,a){"use strict";(function(e){var n=a(2),l=a(80),c=a(178),r=a(179),o=a(180),s=a(181),i=a(0),u=a.n(i),m=a(42),d=a.n(m),g=a(594),f=a(597),E=a(48),p=a(76),b=a(585),v=a(77),h=function(t){Object(o.a)(i,t);var a=Object(s.a)(i);function i(){var e;Object(c.a)(this,i);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={name:"",country:"",city:"",telephone:"",gender:"",email:"",hauteur:0,largeur:0,epaule:0,poitrine:0,taille:0,bassin:0,tourDeManche:0,longueurManche:0,longueurHaut:0,hanche:0,cuisse:0,fond:0,mollet:0,pied:0,longeurPantalonRobe:0},e.handleInputChange=function(t){var a=t.target,n=a.name,c=a.value;e.setState(Object(l.a)({},n,c)),console.log(e.state)},e.handleSubmit=function(t){t.preventDefault(),e.state.loading||(e.setState({loading:!0,error:!1}),d.a.post("".concat(E.a.server,"/special-order"),Object(n.a)({},e.state)).then((function(t){for(var a in console.log(t),e.state)typeof e.state[a]===Number?e.setState(Object(l.a)({},a,0)):e.setState(Object(l.a)({},a,""));e.setState({loading:!1,done:!0})})).catch((function(t){console.log(t),e.setState({loading:!1,error:!0})})))},e}return Object(r.a)(i,[{key:"componentDidMount",value:function(){var e=this.props.user;this.setState((function(t){return Object(n.a)(Object(n.a)({},t),{},{name:e.username,user:e.userid,email:e.useremail})}))}},{key:"render",value:function(){var t=this,a=this.props.strings;return this.state.done?u.a.createElement("div",null,u.a.createElement("h2",null," ",a.process_completed),u.a.createElement("p",null,a.your_measures_taken),u.a.createElement("div",{className:"row align-center slider-btn btn-hover"},u.a.createElement("input",{style:{backgroundColor:" #FFC700",width:"300px",marginRight:"auto",marginLeft:"auto"},className:" animated",disabled:this.state.loading,onClick:function(t){e.setModalContent(null)},type:"submit",value:a.close}))):u.a.createElement("form",{onSubmit:this.handleSubmit},u.a.createElement("div",{className:"row justify-content-md-center"},u.a.createElement("div",{className:"col-12 col-md-5"},u.a.createElement("h1",null," ",a.personal_information),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-12 col-md-12"},u.a.createElement("div",{className:"billing-info mb-20"},u.a.createElement("label",null,a.name_and_surname),u.a.createElement("input",{onChange:function(e){return t.handleInputChange(e)},value:this.state.name,name:"name",type:"text"}))),u.a.createElement("div",{className:"col-lg-12"},u.a.createElement("div",{className:"billing-select mb-20"},u.a.createElement("label",null,"Pays"),u.a.createElement("select",{onChange:function(e){return t.handleInputChange(e)},value:this.state.country,name:"country"},u.a.createElement("option",null,a.choose_a_country),g.map((function(e){return u.a.createElement("option",{key:e.country,value:e.country},e.country)}))))),u.a.createElement("div",{className:"col-lg-12"},u.a.createElement("div",{className:"billing-select mb-20"},u.a.createElement("label",null,a.gender),u.a.createElement("select",{onChange:function(e){return t.handleInputChange(e)},value:this.state.gender,name:"gender"},u.a.createElement("option",null,a.your_gender),f.map((function(e){return u.a.createElement("option",{key:e.gender,value:e.gender},e.gender)}))))),u.a.createElement("div",{className:"col-lg-12"},u.a.createElement("div",{className:"billing-info mb-20"},u.a.createElement("label",null,a.town_and_quarter),u.a.createElement("input",{onChange:function(e){return t.handleInputChange(e)},value:this.state.city,name:"city",type:"text"}))),u.a.createElement("div",{className:"col-lg-6"},u.a.createElement("div",{className:"billing-info mb-20"},u.a.createElement("label",null,a.telephone),u.a.createElement("input",{onChange:function(e){return t.handleInputChange(e)},value:this.state.telephone,name:"telephone",type:"tel"}))),u.a.createElement("div",{className:"col-lg-6"},u.a.createElement("div",{className:"billing-info mb-20"},u.a.createElement("label",null,a.email),u.a.createElement("input",{onChange:function(e){return t.handleInputChange(e)},value:this.state.email,name:"email",type:"email"}))))),u.a.createElement("div",{className:"col-12  col-md-7"},u.a.createElement("h1",null,a.your_measures," (cm)"),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-3 col-md-6"},u.a.createElement("div",{className:"billing-info mb-20"},u.a.createElement("label",null,a.shoulder),u.a.createElement("input",{onChange:function(e){return t.handleInputChange(e)},value:this.state.epaule,name:"epaule",type:"number"}))),u.a.createElement("div",{className:"col-lg-3 col-md-6"},u.a.createElement("div",{className:"billing-info mb-20"},u.a.createElement("label",null,a.chest),u.a.createElement("input",{onChange:function(e){return t.handleInputChange(e)},value:this.state.poitrine,name:"poitrine",type:"number"}))),u.a.createElement("div",{className:"col-lg-3 col-md-6"},u.a.createElement("div",{className:"billing-info mb-20"},u.a.createElement("label",null,a.waist),u.a.createElement("input",{onChange:function(e){return t.handleInputChange(e)},value:this.state.taille,name:"taille",type:"number"}))),u.a.createElement("div",{className:"col-lg-3 col-md-6"},u.a.createElement("div",{className:"billing-info mb-20"},u.a.createElement("label",null,a.pelvis),u.a.createElement("input",{onChange:function(e){return t.handleInputChange(e)},value:this.state.bassin,name:"bassin",type:"number"}))),u.a.createElement("div",{className:"col-lg-3 col-md-6"},u.a.createElement("div",{className:"billing-info mb-20"},u.a.createElement("label",null,a.sleeve_turn),u.a.createElement("input",{onChange:function(e){return t.handleInputChange(e)},value:this.state.tourDeManche,name:"tourDeManche",type:"number"}))),u.a.createElement("div",{className:"col-lg-3 col-md-6"},u.a.createElement("div",{className:"billing-info mb-20"},u.a.createElement("label",null,a.sleeve_length),u.a.createElement("input",{onChange:function(e){return t.handleInputChange(e)},value:this.state.longueurManche,name:"longueurManche",type:"number"}))),u.a.createElement("div",{className:"col-lg-3 col-md-6"},u.a.createElement("div",{className:"billing-info mb-20"},u.a.createElement("label",null,a.top_length),u.a.createElement("input",{onChange:function(e){return t.handleInputChange(e)},value:this.state.longueurHaut,name:"longueurHaut",type:"number"}))),u.a.createElement("div",{className:"col-lg-3 col-md-6"},u.a.createElement("div",{className:"billing-info mb-20"},u.a.createElement("label",null,a.hip),u.a.createElement("input",{onChange:function(e){return t.handleInputChange(e)},value:this.state.hanche,name:"hanche",type:"number"}))),u.a.createElement("div",{className:"col-lg-3 col-md-6"},u.a.createElement("div",{className:"billing-info mb-20"},u.a.createElement("label",null,a.thigh),u.a.createElement("input",{onChange:function(e){return t.handleInputChange(e)},value:this.state.cuisse,name:"cuisse",type:"number"}))),u.a.createElement("div",{className:"col-lg-3 col-md-6"},u.a.createElement("div",{className:"billing-info mb-20"},u.a.createElement("label",null,a.bottom),u.a.createElement("input",{onChange:function(e){return t.handleInputChange(e)},value:this.state.fond,name:"fond",type:"number"}))),u.a.createElement("div",{className:"col-lg-3 col-md-6"},u.a.createElement("div",{className:"billing-info mb-20"},u.a.createElement("label",null,a.mollet),u.a.createElement("input",{onChange:function(e){return t.handleInputChange(e)},value:this.state.mollet,name:"mollet",type:"number"}))),u.a.createElement("div",{className:"col-lg-3 col-md-6"},u.a.createElement("div",{className:"billing-info mb-20"},u.a.createElement("label",null,a.foot),u.a.createElement("input",{onChange:function(e){return t.handleInputChange(e)},value:this.state.pied,name:"pied",type:"number"}))),u.a.createElement("div",{className:"col-lg-3 col-md-6"},u.a.createElement("div",{className:"billing-info mb-20"},u.a.createElement("label",null,a.trouser_length),u.a.createElement("input",{onChange:function(e){return t.handleInputChange(e)},value:this.state.longeurPantalonRobe,name:"longeurPantalonRobe",type:"number"})))))),this.state.error&&u.a.createElement("center",null,u.a.createElement("p",{style:{color:"red"}},a.subs_connection_error)),u.a.createElement("div",{className:"row align-center slider-btn btn-hover"},u.a.createElement("input",{style:{backgroundColor:" #FFC700",width:"300px",marginRight:"auto",marginLeft:"auto"},className:" animated",disabled:this.state.loading,type:"submit",value:this.state.loading?a.subs_sending:a.submit})),u.a.createElement("center",null,u.a.createElement(b.a,{type:"button",className:"btn",color:"error",onClick:function(t){e.setModalContent(null)},style:{marginTop:10,backgroundColor:"black",borderRadius:0,border:"none"}},a.cancel_and_close)))}}]),i}(i.Component);t.a=Object(v.connect)((function(e){return{user:e.authentication}}))(Object(p.multilanguage)(h))}).call(this,a(79))},597:function(e){e.exports=JSON.parse('[{"gender":"Female"},{"gender":"Male"},{"gender":"Prefere not to say"}]')}}]);