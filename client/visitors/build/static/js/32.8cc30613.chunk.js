(this["webpackJsonpwendyf-ecommerce-front-end"]=this["webpackJsonpwendyf-ecommerce-front-end"]||[]).push([[32],{537:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(550),l=t.n(r),i=t(546),s=t(547),o=t.n(s),m=t(114),d=t(70),u=Object(d.connect)((function(e){return{slider:e.slider}}))((function(e){var a=e.data,t=e.sliderClassName;return c.a.createElement("div",{className:"single-slider slider-height-1 bg-purple ".concat(t||"")},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6"},c.a.createElement("div",{style:{padding:"50px",marginBottom:"10px",marginLeft:"20px"},className:"slider-content slider-animated-1"},c.a.createElement("h3",{className:"animated"},a.title),c.a.createElement("h1",{className:"animated"},a.subtitle),c.a.createElement("div",{className:"slider-btn btn-hover"},c.a.createElement(m.b,{className:"animated",to:""+a.url},"SHOP NOW")))),c.a.createElement("div",{className:"col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6"},c.a.createElement("div",{className:"slider-single-img slider-animated-1"},c.a.createElement("img",{className:"animated img-fluid",src:a.image,alt:""}))))))})),p=Object(d.connect)((function(e){return{slider:e.slider}}))((function(e){var a=e.slider,t={effect:"fade",loop:!0,speed:1e3,autoplay:{delay:5e3,disableOnInteraction:!1},watchSlidesVisibility:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},renderPrevButton:function(){return c.a.createElement("button",{className:"swiper-button-prev ht-swiper-button-nav"},c.a.createElement("i",{className:"pe-7s-angle-left"}))},renderNextButton:function(){return c.a.createElement("button",{className:"swiper-button-next ht-swiper-button-nav"},c.a.createElement("i",{className:"pe-7s-angle-right"}))}};return c.a.createElement("div",{className:"slider-area"},c.a.createElement("div",{className:"slider-active nav-style-1"},c.a.createElement(o.a,t,a&&a.map((function(e,a){return c.a.createElement(u,{sliderClassName:"swiper-slide",data:e,key:a})})))))})),E=function(e){var a=e.singleFeature;return c.a.createElement("div",{className:"col-lg-3 col-sm-6"},c.a.createElement("div",{className:"support-wrap mb-30"},c.a.createElement("div",{className:"support-icon"},c.a.createElement("img",{className:"animated",src:a.image,alt:""})),c.a.createElement("div",{className:"support-content"},c.a.createElement("h5",null,a.title),c.a.createElement("p",null,a.subtitle))))},v=t(69),N=Object(v.multilanguage)((function(e){var a=e.strings,t=e.spaceTopClass,n=e.spaceBottomClass;return c.a.createElement("div",{className:"support-area ".concat(t||""," ").concat(n||"")},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},a.fun_fact.map((function(e){return c.a.createElement(E,{singleFeature:e,key:e.id})})))))})),f=t(570),b=t(568),g=t(559),y=Object(v.multilanguage)((function(e){var a=e.strings,t=e.spaceTopClass,n=e.spaceBottomClass,r=e.bgColorClass,l=e.category;return c.a.createElement("div",{className:"product-area ".concat(t||""," ").concat(n||""," ").concat(r||"")},c.a.createElement("div",{className:"container"},c.a.createElement(f.a.Container,{defaultActiveKey:"anyItems"},c.a.createElement(b.a,{variant:"pills",className:"product-tab-list pt-30 pb-55 text-center"},c.a.createElement(b.a.Item,null,c.a.createElement(b.a.Link,{eventKey:"anyItems"},c.a.createElement("h4",null," ",a.available_stock)))),c.a.createElement(f.a.Content,null,c.a.createElement(f.a.Pane,{eventKey:"newArrival"},c.a.createElement("div",{className:"row"},c.a.createElement(g.a,{category:l,type:"new",limit:8,spaceBottomClass:"mb-25"}))),c.a.createElement(f.a.Pane,{eventKey:"anyItems"},c.a.createElement("div",{className:"row"},c.a.createElement(g.a,{category:l,type:"anyItems",limit:8,spaceBottomClass:"mb-25"})))))))}));a.default=function(){return c.a.createElement(n.Fragment,null,c.a.createElement(l.a,null,c.a.createElement("title",null,"Wendy Fy Home "),c.a.createElement("meta",{name:"description",content:"Fashion home of Wend Fy react minimalist eCommerce template."})),c.a.createElement(i.a,{headerContainerClass:"container-fluid",headerPaddingClass:"header-padding-1",headerTop:"visible"},c.a.createElement(p,null),c.a.createElement(N,{spaceTopClass:"pt-100",spaceBottomClass:"pb-60"}),c.a.createElement(y,{spaceBottomClass:"pb-60",category:"fashion"})))}},544:function(e,a,t){"use strict";var n=t(0),c=t.n(n);a.a=function(e){for(var a=e.ratingValue,t=[],r=0;r<5;r++)t.push(c.a.createElement("i",{className:"fa fa-star-o",key:r}));if(a&&a>0)for(var l=0;l<=a-1;l++)t[l]=c.a.createElement("i",{className:"fa fa-star-o yellow",key:l});return c.a.createElement(n.Fragment,null,t)}},548:function(e,a,t){"use strict";var n=t(154),c=t(0),r=t.n(c),l=t(547),i=t.n(l),s=t(543),o=t(718),m=t(544),d=t(70),u=t(69);a.a=Object(d.connect)((function(e){return{cartitems:e.cartData}}))(Object(u.multilanguage)((function(e){var a=e.product,t=e.currency,l=e.discountedprice,d=e.finalproductprice,u=e.finaldiscountedprice,p=e.strings,E=Object(c.useState)(null),v=Object(n.a)(E,2),N=v[0],f=v[1],b=Object(c.useState)(null),g=Object(n.a)(b,2),y=g[0],h=g[1],w=Object(c.useState)(a.variation&&a.variation.length>0?a.variation[0].color:""),k=Object(n.a)(w,2),C=k[0],O=k[1],j=Object(c.useState)(a.variation&&a.variation.length>0?a.variation[0].size[0].name:""),_=Object(n.a)(j,2),x=_[0],S=_[1],B=Object(c.useState)(a.variation&&a.variation.length>0?a.variation[0].size[0].stock:a.stock),T=Object(n.a)(B,2),I=T[0],F=T[1],z=Object(c.useState)(1),q=Object(n.a)(z,2),A=q[0],D=q[1],P=e.wishlistitem,W=e.compareitem,H=e.addtocart,L=e.addtowishlist,V=e.addtocompare,K=e.addtoast,R=e.cartitems,J=Object(s.e)(R,a,C,x);Object(c.useEffect)((function(){null!==N&&N.controller&&null!==y&&y.controller&&(N.controller.control=y,y.controller.control=N)}),[N,y]);var M={getSwiper:f,spaceBetween:10,loopedSlides:4,loop:!0},Q={getSwiper:h,spaceBetween:10,slidesPerView:4,loopedSlides:4,touchRatio:.2,freeMode:!0,loop:!0,slideToClickedSlide:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},renderPrevButton:function(){return r.a.createElement("button",{className:"swiper-button-prev ht-swiper-button-nav"},r.a.createElement("i",{className:"pe-7s-angle-left"}))},renderNextButton:function(){return r.a.createElement("button",{className:"swiper-button-next ht-swiper-button-nav"},r.a.createElement("i",{className:"pe-7s-angle-right"}))}};return r.a.createElement(c.Fragment,null,r.a.createElement(o.a,{show:e.show,onHide:e.onHide,className:"product-quickview-modal-wrapper"},r.a.createElement(o.a.Header,{closeButton:!0}),r.a.createElement("div",{className:"modal-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-5 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"product-large-image-wrapper"},r.a.createElement(i.a,M,a.image&&a.image.map((function(e,a){return r.a.createElement("div",{key:a},r.a.createElement("div",{className:"single-image"},r.a.createElement("img",{src:e,className:"img-fluid",alt:""})))})))),r.a.createElement("div",{className:"product-small-image-wrapper mt-15"},r.a.createElement(i.a,Q,a.image&&a.image.map((function(e,a){return r.a.createElement("div",{key:a},r.a.createElement("div",{className:"single-image"},r.a.createElement("img",{src:e,className:"img-fluid",alt:""})))}))))),r.a.createElement("div",{className:"col-md-7 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"product-details-content quickview-content"},r.a.createElement("h2",null,a.name),r.a.createElement("div",{className:"product-details-price"},null!==l?r.a.createElement(c.Fragment,null,r.a.createElement("span",null,t.currencySymbol+u)," ",r.a.createElement("span",{className:"old"},t.currencySymbol+d)):r.a.createElement("span",null,t.currencySymbol+d," ")),a.rating&&a.rating>0?r.a.createElement("div",{className:"pro-details-rating-wrap"},r.a.createElement("div",{className:"pro-details-rating"},r.a.createElement(m.a,{ratingValue:a.rating}))):"",r.a.createElement("div",{className:"pro-details-list"},r.a.createElement("p",null,a.shortDescription)),a.variation&&a.variation.length>0?r.a.createElement("div",{className:"pro-details-size-color"},r.a.createElement("div",{className:"pro-details-color-wrap"},r.a.createElement("span",null,p.color),r.a.createElement("div",{className:"pro-details-color-content"},a.variation.map((function(e,a){return r.a.createElement("label",{className:"pro-details-color-content--single ".concat(e.color),key:a},r.a.createElement("input",{type:"radio",value:e.color,name:"product-color",checked:e.color===C?"checked":"",onChange:function(){O(e.color),S(e.size[0].name),F(e.size[0].stock),D(1)}}),r.a.createElement("span",{className:"checkmark"}))})))),r.a.createElement("div",{className:"pro-details-size"},r.a.createElement("span",null,p.size),r.a.createElement("div",{className:"pro-details-size-content"},a.variation&&a.variation.map((function(e){return e.color===C?e.size.map((function(e,a){return r.a.createElement("label",{className:"pro-details-size-content--single",key:a},r.a.createElement("input",{type:"radio",value:e.name,checked:e.name===x?"checked":"",onChange:function(){S(e.name),F(e.stock),D(1)}}),r.a.createElement("span",{className:"size-name"},e.name))})):""}))))):"",a.affiliateLink?r.a.createElement("div",{className:"pro-details-quality"},r.a.createElement("div",{className:"pro-details-cart btn-hover"},r.a.createElement("a",{href:a.affiliateLink,rel:"noopener noreferrer",target:"_blank"},"Buy Now"))):r.a.createElement("div",{className:"pro-details-quality"},r.a.createElement("div",{className:"cart-plus-minus"},r.a.createElement("button",{onClick:function(){return D(A>1?A-1:1)},className:"dec qtybutton"},"-"),r.a.createElement("input",{className:"cart-plus-minus-box",type:"text",value:A,readOnly:!0}),r.a.createElement("button",{onClick:function(){return D(A<I-J?A+1:A)},className:"inc qtybutton"},"+")),r.a.createElement("div",{className:"pro-details-cart btn-hover"},I&&I>0?r.a.createElement("button",{onClick:function(){return H(a,K,A,C,x)},disabled:J>=I}," ",p.add_to_cart," "):r.a.createElement("button",{disabled:!0},p.out_of_stock)),r.a.createElement("div",{className:"pro-details-wishlist"},r.a.createElement("button",{className:void 0!==P?"active":"",disabled:void 0!==P,title:void 0!==P?p.added_to_wishlist:p.add_to_wishlist,onClick:function(){return L(a,K)}},r.a.createElement("i",{className:"pe-7s-like"}))),r.a.createElement("div",{className:"pro-details-compare"},r.a.createElement("button",{className:void 0!==W?"active":"",disabled:void 0!==W,title:void 0!==W?p.added_to_compare:p.add_to_compare,onClick:function(){return V(a,K)}},r.a.createElement("i",{className:"pe-7s-shuffle"}))))))))))})))},559:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=t(70),l=t(543),i=t(154),s=t(114),o=t(156),m=t(544),d=t(548),u=function(e){var a=e.product,t=e.currency,r=e.addToCart,u=e.addToWishlist,p=e.addToCompare,E=e.cartItem,v=e.wishlistItem,N=e.compareItem,f=e.sliderClassName,b=e.spaceBottomClass,g=Object(n.useState)(!1),y=Object(i.a)(g,2),h=y[0],w=y[1],k=Object(o.useToasts)().addToast,C=Object(l.a)(a.price,a.discount),O=+(a.price*t.currencyRate).toFixed(2),j=+(C*t.currencyRate).toFixed(2);return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6 ".concat(f||"")},c.a.createElement("div",{className:"product-wrap ".concat(b||"")},c.a.createElement("div",{className:"product-img"},c.a.createElement(s.b,{to:"/product/"+a._id},c.a.createElement("img",{className:"default-img",src:a.image[0],alt:""}),a.image.length>1?c.a.createElement("img",{className:"hover-img",src:a.image[1],alt:""}):""),a.discount||a.new?c.a.createElement("div",{className:"product-img-badges"},a.discount?c.a.createElement("span",{className:"pink"},"-",a.discount,"%"):"",a.new?c.a.createElement("span",{className:"purple"},"New"):""):"",c.a.createElement("div",{className:"product-action"},c.a.createElement("div",{className:"pro-same-action pro-wishlist"},c.a.createElement("button",{className:void 0!==v?"active":"",disabled:void 0!==v,title:void 0!==v?"Added to wishlist":"Add to wishlist",onClick:function(){return u(a,k)}},c.a.createElement("i",{className:"pe-7s-like"}))),c.a.createElement("div",{className:"pro-same-action pro-cart"},a.affiliateLink?c.a.createElement("a",{href:a.affiliateLink,rel:"noopener noreferrer",target:"_blank"}," ","Buy now"," "):a.variation&&a.variation.length>=1?c.a.createElement(s.b,{to:"".concat("","/product/").concat(a._id)},"Select Option"):a.stock&&a.stock>0?c.a.createElement("button",{onClick:function(){return r(a,k)},className:void 0!==E&&E.quantity>0?"active":"",disabled:void 0!==E&&E.quantity>0,title:void 0!==E?"Added to cart":"Add to cart"}," ",c.a.createElement("i",{className:"pe-7s-cart"})," ",void 0!==E&&E.quantity>0?"Added":"Add to cart"):c.a.createElement("button",{disabled:!0,className:"active"},"Out of Stock")),c.a.createElement("div",{className:"pro-same-action pro-quickview"},c.a.createElement("button",{onClick:function(){return w(!0)},title:"Quick View"},c.a.createElement("i",{className:"pe-7s-look"}))))),c.a.createElement("div",{className:"product-content text-center"},c.a.createElement("h3",null,c.a.createElement(s.b,{to:"/product/"+a._id},a.name)),a.rating&&a.rating>0?c.a.createElement("div",{className:"product-rating"},c.a.createElement(m.a,{ratingValue:a.rating})):"",c.a.createElement("div",{className:"product-price"},null!==C?c.a.createElement(n.Fragment,null,c.a.createElement("span",null,t.currencySymbol+j)," ",c.a.createElement("span",{className:"old"},t.currencySymbol+O)):c.a.createElement("span",null,t.currencySymbol+O," "))))),c.a.createElement(d.a,{show:h,onHide:function(){return w(!1)},product:a,currency:t,discountedprice:C,finalproductprice:O,finaldiscountedprice:j,cartitem:E,wishlistitem:v,compareitem:N,addtocart:r,addtowishlist:u,addtocompare:p,addtoast:k}))},p=t(71),E=t(91),v=t(115);a.a=Object(r.connect)((function(e,a){return{products:Object(l.f)(e.productData.products,a.category,a.type,a.limit),currency:e.currencyData,cartItems:e.cartData,wishlistItems:e.wishlistData,compareItems:e.compareData}}),(function(e){return{addToCart:function(a,t,n,c,r){e(Object(p.e)(a,t,n,c,r))},addToWishlist:function(a,t){e(Object(E.d)(a,t))},addToCompare:function(a,t){e(Object(v.c)(a,t))}}}))((function(e){var a=e.products,t=e.currency,r=e.addToCart,l=e.addToWishlist,i=e.addToCompare,s=e.cartItems,o=e.wishlistItems,m=e.compareItems,d=e.sliderClassName,p=e.spaceBottomClass;return c.a.createElement(n.Fragment,null,a.map((function(e){return c.a.createElement(u,{sliderClassName:d,spaceBottomClass:p,product:e,currency:t,addToCart:r,addToWishlist:l,addToCompare:i,cartItem:s.filter((function(a){return a._id===e._id}))[0],wishlistItem:o.filter((function(a){return a._id===e._id}))[0],compareItem:m.filter((function(a){return a._id===e._id}))[0],key:e._id})})))}))}}]);
//# sourceMappingURL=32.8cc30613.chunk.js.map