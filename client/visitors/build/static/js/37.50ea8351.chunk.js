(this["webpackJsonpwendyf-ecommerce-front-end"]=this["webpackJsonpwendyf-ecommerce-front-end"]||[]).push([[37],{529:function(e,t,a){"use strict";a.r(t);var n=a(700),c=a.n(n),r=a(701),l=a(154),m=a(37),u=a.n(m),o=a(0),i=a.n(o),s=a(2),d=a(114),p=a(544),y=a.n(p),E=a(70),b=a(155),v=a(537),f=a(540),g=a(539),_=a(548),h=a(43),N=a(69),O=a(702),j=a.n(O),x=a(71),I=(a(156),a(613));t.default=Object(E.connect)((function(e){return{user:e.authentication,cartItems:e.cartData,currency:e.currencyData}}),(function(e){return{deleteAllFromCart:function(t){e(Object(x.h)(t))}}}))(Object(N.multilanguage)((function(e){var t=e.location,a=e.cartItems,n=e.currency,m=e.user,p=e.strings,E=e.deleteAllFromCart,N=I.b.error,O=t.pathname,x=0,S=Object(s.f)(),w=Object(o.useState)(""!==m.username?m.username:""),B=Object(l.a)(w,2),k=B[0],C=B[1],F=Object(o.useState)(""),q=Object(l.a)(F,2),D=q[0],A=q[1],J=Object(o.useState)(""),P=Object(l.a)(J,2),R=P[0],T=P[1],X=Object(o.useState)({}),L=Object(l.a)(X,2),W=L[0],z=(L[1],Object(o.useState)(!1)),G=Object(l.a)(z,2),H=G[0],K=G[1],M=Object(o.useState)({}),Q=Object(l.a)(M,2),U=Q[0],V=Q[1],Y=Object(o.useState)(!1),Z=Object(l.a)(Y,2),$=Z[0],ee=(Z[1],window.CinetPay),te=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!H){e.next=2;break}return e.abrupt("return");case 2:if(!U._id){e.next=6;break}return ee.setSignatureData({amount:parseInt(document.getElementById("amount").value),trans_id:document.getElementById("trans_id").value,currency:document.getElementById("currency").value,designation:document.getElementById("designation").value,custom:document.getElementById("cpm_custom").value,cpm_phone_prefixe:"237"}),ee.getSignature(),e.abrupt("return");case 6:return K(!0),e.next=9,u.a.post("".concat(h.a.server,"/order/"),{name:k,country:D,city:R,paymentDetails:W,productOrders:a,id:m.userid,currency:n.currencySymbol,amount:x.toFixed(2)}).then((function(e){V(e.data),ee.setSignatureData({amount:parseInt(document.getElementById("amount").value),trans_id:document.getElementById("trans_id").value,currency:document.getElementById("currency").value,designation:document.getElementById("designation").value,custom:document.getElementById("cpm_custom").value,cpm_phone_prefixe:"237"}),ee.getSignature()})).catch((function(e){K(!1),E(!1),S.push("/my-account"),N(p.subs_connection_error)})).finally((function(e){}));case 9:e.sent;case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){ee.setConfig({apikey:"8936433616017f33cc7a2b9.78720038",site_id:302789,notify_url:h.a.notify_url_cinetpay}),ee.on("error",(function(e){K(!1),E(!1),S.push("/my-account"),N(p.subs_connection_error+e.code+","+e.message)})),ee.on("paymentPending",(function(e){})),ee.on("signatureCreated",(function(){})),ee.on("paymentSuccessfull",(function(e){"undefined"!=typeof e.lastTime&&("00"==e.cpm_result?(I.b.success(p.payment_completed),E(!1),S.push("/my-account")):(E(!1),S.push("/my-account"),N(p.subs_connection_error+e.cpm_error_message)))}))})),i.a.createElement(o.Fragment,null,i.a.createElement(I.a,null),i.a.createElement(y.a,null,i.a.createElement("title",null,"Wendy Fy | Checkout"),i.a.createElement("meta",{name:"description",content:"Checkout page of flone react minimalist eCommerce template."})),i.a.createElement(b.BreadcrumbsItem,{to:"/"},p.home),i.a.createElement(b.BreadcrumbsItem,{to:""+O},p.payment),i.a.createElement(f.a,{headerTop:"visible"},i.a.createElement(g.a,null),i.a.createElement("div",{className:"checkout-area pt-95 pb-100"},i.a.createElement("div",{className:"container"},a&&a.length>=1?i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-7"},i.a.createElement("div",{className:"billing-info-wrap"},i.a.createElement("h3",null,p.payment_details),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-12 col-md-12"},i.a.createElement("div",{className:"billing-info mb-20"},i.a.createElement("label",null,p.name_and_surname),i.a.createElement("input",{type:"text",value:k,onChange:function(e){return C(e.target.value)}}))),i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"billing-select mb-20"},i.a.createElement("label",null,p.country),i.a.createElement("select",{onChange:function(e){return A(e.target.value)},name:"pays"},i.a.createElement("option",null,p.choose_a_country),_.map((function(e){return i.a.createElement("option",{key:e.country,value:e.country},e.country)}))))),i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"billing-info mb-20"},i.a.createElement("label",null,p.town_and_quarter),i.a.createElement("input",{type:"text",onChange:function(e){return T(e.target.value)},value:R})))))),i.a.createElement("div",{className:"col-lg-5"},i.a.createElement("div",{className:"your-order-area"},i.a.createElement("h3",null,p.your_buys),i.a.createElement("div",{className:"your-order-wrap gray-bg-4"},i.a.createElement("div",{className:"your-order-product-info"},i.a.createElement("div",{className:"your-order-top"},i.a.createElement("ul",null,i.a.createElement("li",null,p.product),i.a.createElement("li",null,p.total))),i.a.createElement("div",{className:"your-order-middle"},i.a.createElement("ul",null,a.map((function(e,t){var a=Object(v.a)(e.price,e.discount),c=(e.price*n.currencyRate).toFixed(2),r=(a*n.currencyRate).toFixed(2);return x+=null!=a?r*e.quantity:c*e.quantity,i.a.createElement("li",{key:t},i.a.createElement("span",{className:"order-middle-left"},e.name," X ",e.quantity)," ",i.a.createElement("span",{className:"order-price"},null!==a?n.currencySymbol+(r*e.quantity).toFixed(2):n.currencySymbol+(c*e.quantity).toFixed(2)))})))),i.a.createElement("div",{className:"your-order-total"},i.a.createElement("ul",null,i.a.createElement("li",{className:"order-total"},p.total),i.a.createElement("li",null,n.currencySymbol+x.toFixed(2))))),i.a.createElement("div",{className:"payment-method"})),$&&i.a.createElement("center",null,i.a.createElement("p",{style:{color:"red"}},$)),i.a.createElement("div",{className:"place-order mt-25"},i.a.createElement(j.a,{active:H,spinner:!0,text:"Loading your content..."}),i.a.createElement("button",{onClick:te,disabled:H,className:"btn-hover"},p.effectuate_payment))))):i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"item-empty-area text-center"},i.a.createElement("div",{className:"item-empty-area__icon mb-30"},i.a.createElement("i",{className:"pe-7s-cash"})),i.a.createElement("div",{className:"item-empty-area__text"},p.no_items_found_to_cart," ",i.a.createElement("br",null)," ",i.a.createElement(d.b,{to:"/shop-grid-standard"},p.shop_now)))))))),U._id&&i.a.createElement("div",{id:"info_paiement"},i.a.createElement("input",{type:"hidden",id:"amount",value:x.toFixed(2)}),i.a.createElement("input",{type:"hidden",id:"currency",value:"XAF"}),i.a.createElement("input",{type:"hidden",id:"trans_id",value:U._id}),i.a.createElement("input",{type:"hidden",id:"cpm_custom",value:""}),i.a.createElement("input",{type:"hidden",id:"designation",value:p.payment_for_order+" - #"+U._id})))})))},539:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(114),l=a(155);t.a=function(){return c.a.createElement("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"breadcrumb-content text-center"},c.a.createElement(l.Breadcrumbs,{separator:c.a.createElement("span",null,"/"),item:r.c,finalItem:"span"}))))}}}]);
//# sourceMappingURL=37.50ea8351.chunk.js.map