(this["webpackJsonpwendyf-ecommerce-front-end"]=this["webpackJsonpwendyf-ecommerce-front-end"]||[]).push([[30],{557:function(e,t,a){"use strict";a.r(t);var c=a(44),n=a(0),r=a.n(n),l=a(593),i=a.n(l),o=a(609),s=a(176),m=a(77),d=a(586),u=a(589),p=a(590),E=a(654),v=a(598);t.default=Object(m.connect)((function(e){return{products:e.productData.products}}))((function(e){var t=e.location,a=e.products,l=Object(n.useState)("grid three-column"),m=Object(c.a)(l,2),f=m[0],b=m[1],g=Object(n.useState)(""),N=Object(c.a)(g,2),h=N[0],w=N[1],k=Object(n.useState)(""),y=Object(c.a)(k,2),O=y[0],j=y[1],C=Object(n.useState)(""),S=Object(c.a)(C,2),_=S[0],x=S[1],P=Object(n.useState)(""),T=Object(c.a)(P,2),F=T[0],z=T[1],A=Object(n.useState)(0),B=Object(c.a)(A,2),I=B[0],L=B[1],q=Object(n.useState)(1),D=Object(c.a)(q,2),H=D[0],V=D[1],R=Object(n.useState)([]),W=Object(c.a)(R,2),J=W[0],M=W[1],Q=Object(n.useState)([]),G=Object(c.a)(Q,2),K=G[0],U=G[1],X=t.pathname;return Object(n.useEffect)((function(){var e=Object(d.h)(a,h,O),t=Object(d.h)(e,_,F);U(e=t),M(e.slice(I,I+15))}),[I,a,h,O,_,F]),r.a.createElement(n.Fragment,null,r.a.createElement(i.a,null,r.a.createElement("title",null,"Flone | Shop Page"),r.a.createElement("meta",{name:"description",content:"Shop page of flone react minimalist eCommerce template."})),r.a.createElement(s.BreadcrumbsItem,{to:"/"},"Home"),r.a.createElement(s.BreadcrumbsItem,{to:""+X},"Shop"),r.a.createElement(u.a,{headerTop:"visible"},r.a.createElement(p.a,null),r.a.createElement("div",{className:"shop-area pt-95 pb-100"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement(E.a,{getLayout:function(e){b(e)},getFilterSortParams:function(e,t){x(e),z(t)},productCount:a.length,sortedProductCount:J.length,products:a,getSortParams:function(e,t){w(e),j(t)}}),r.a.createElement(v.a,{layout:f,products:J}),r.a.createElement("div",{className:"pro-pagination-style text-center mt-30"},r.a.createElement(o.a,{totalRecords:K.length,pageLimit:15,pageNeighbours:2,setOffset:L,currentPage:H,setCurrentPage:V,pageContainerClass:"mb-0 mt-0",pagePrevText:"\xab",pageNextText:"\xbb"}))))))))}))},588:function(e,t,a){"use strict";var c=a(0),n=a.n(c);t.a=function(e){for(var t=e.ratingValue,a=[],r=0;r<5;r++)a.push(n.a.createElement("i",{className:"fa fa-star-o",key:r}));if(t&&t>0)for(var l=0;l<=t-1;l++)a[l]=n.a.createElement("i",{className:"fa fa-star-o yellow",key:l});return n.a.createElement(c.Fragment,null,a)}},592:function(e,t,a){"use strict";var c=a(44),n=a(0),r=a.n(n),l=a(591),i=a.n(l),o=a(586),s=a(841),m=a(588),d=a(77),u=a(76);t.a=Object(d.connect)((function(e){return{cartitems:e.cartData}}))(Object(u.multilanguage)((function(e){var t=e.product,a=e.currency,l=e.discountedprice,d=e.finalproductprice,u=e.finaldiscountedprice,p=e.strings,E=Object(n.useState)(null),v=Object(c.a)(E,2),f=v[0],b=v[1],g=Object(n.useState)(null),N=Object(c.a)(g,2),h=N[0],w=N[1],k=Object(n.useState)(t.variation&&t.variation.length>0?t.variation[0].color:""),y=Object(c.a)(k,2),O=y[0],j=y[1],C=Object(n.useState)(t.variation&&t.variation.length>0?t.variation[0].size[0].name:""),S=Object(c.a)(C,2),_=S[0],x=S[1],P=Object(n.useState)(t.variation&&t.variation.length>0?t.variation[0].size[0].stock:t.stock),T=Object(c.a)(P,2),F=T[0],z=T[1],A=Object(n.useState)(1),B=Object(c.a)(A,2),I=B[0],L=B[1],q=e.wishlistitem,D=e.compareitem,H=e.addtocart,V=e.addtowishlist,R=e.addtocompare,W=e.addtoast,J=e.cartitems,M=Object(o.e)(J,t,O,_);Object(n.useEffect)((function(){null!==f&&f.controller&&null!==h&&h.controller&&(f.controller.control=h,h.controller.control=f)}),[f,h]);var Q={getSwiper:b,spaceBetween:10,loopedSlides:4,loop:!0},G={getSwiper:w,spaceBetween:10,slidesPerView:4,loopedSlides:4,touchRatio:.2,freeMode:!0,loop:!0,slideToClickedSlide:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},renderPrevButton:function(){return r.a.createElement("button",{className:"swiper-button-prev ht-swiper-button-nav"},r.a.createElement("i",{className:"pe-7s-angle-left"}))},renderNextButton:function(){return r.a.createElement("button",{className:"swiper-button-next ht-swiper-button-nav"},r.a.createElement("i",{className:"pe-7s-angle-right"}))}};return r.a.createElement(n.Fragment,null,r.a.createElement(s.a,{show:e.show,onHide:e.onHide,className:"product-quickview-modal-wrapper"},r.a.createElement(s.a.Header,{closeButton:!0}),r.a.createElement("div",{className:"modal-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-5 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"product-large-image-wrapper"},r.a.createElement(i.a,Q,t.image&&t.image.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("div",{className:"single-image"},r.a.createElement("img",{src:e,className:"img-fluid",alt:""})))})))),r.a.createElement("div",{className:"product-small-image-wrapper mt-15"},r.a.createElement(i.a,G,t.image&&t.image.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("div",{className:"single-image"},r.a.createElement("img",{src:e,className:"img-fluid",alt:""})))}))))),r.a.createElement("div",{className:"col-md-7 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"product-details-content quickview-content"},r.a.createElement("h2",null,t.name),r.a.createElement("div",{className:"product-details-price"},null!==l?r.a.createElement(n.Fragment,null,r.a.createElement("span",null,a.currencySymbol+u)," ",r.a.createElement("span",{className:"old"},a.currencySymbol+d)):r.a.createElement("span",null,a.currencySymbol+d," ")),t.rating&&t.rating>0?r.a.createElement("div",{className:"pro-details-rating-wrap"},r.a.createElement("div",{className:"pro-details-rating"},r.a.createElement(m.a,{ratingValue:t.rating}))):"",r.a.createElement("div",{className:"pro-details-list"},r.a.createElement("p",null,t.shortDescription)),t.variation&&t.variation.length>0?r.a.createElement("div",{className:"pro-details-size-color"},r.a.createElement("div",{className:"pro-details-color-wrap"},r.a.createElement("span",null,p.color),r.a.createElement("div",{className:"pro-details-color-content"},t.variation.map((function(e,t){return r.a.createElement("label",{className:"pro-details-color-content--single ".concat(e.color),key:t},r.a.createElement("input",{type:"radio",value:e.color,name:"product-color",checked:e.color===O?"checked":"",onChange:function(){j(e.color),x(e.size[0].name),z(e.size[0].stock),L(1)}}),r.a.createElement("span",{className:"checkmark"}))})))),r.a.createElement("div",{className:"pro-details-size"},r.a.createElement("span",null,p.size),r.a.createElement("div",{className:"pro-details-size-content"},t.variation&&t.variation.map((function(e){return e.color===O?e.size.map((function(e,t){return r.a.createElement("label",{className:"pro-details-size-content--single",key:t},r.a.createElement("input",{type:"radio",value:e.name,checked:e.name===_?"checked":"",onChange:function(){x(e.name),z(e.stock),L(1)}}),r.a.createElement("span",{className:"size-name"},e.name))})):""}))))):"",t.affiliateLink?r.a.createElement("div",{className:"pro-details-quality"},r.a.createElement("div",{className:"pro-details-cart btn-hover"},r.a.createElement("a",{href:t.affiliateLink,rel:"noopener noreferrer",target:"_blank"},"Buy Now"))):r.a.createElement("div",{className:"pro-details-quality"},r.a.createElement("div",{className:"cart-plus-minus"},r.a.createElement("button",{onClick:function(){return L(I>1?I-1:1)},className:"dec qtybutton"},"-"),r.a.createElement("input",{className:"cart-plus-minus-box",type:"text",value:I,readOnly:!0}),r.a.createElement("button",{onClick:function(){return L(I<F-M?I+1:I)},className:"inc qtybutton"},"+")),r.a.createElement("div",{className:"pro-details-cart btn-hover"},F&&F>0?r.a.createElement("button",{onClick:function(){return H(t,W,I,O,_)},disabled:M>=F}," ",p.add_to_cart," "):r.a.createElement("button",{disabled:!0},p.out_of_stock)),r.a.createElement("div",{className:"pro-details-wishlist"},r.a.createElement("button",{className:void 0!==q?"active":"",disabled:void 0!==q,title:void 0!==q?p.added_to_wishlist:p.add_to_wishlist,onClick:function(){return V(t,W)}},r.a.createElement("i",{className:"pe-7s-like"}))),r.a.createElement("div",{className:"pro-details-compare"},r.a.createElement("button",{className:void 0!==D?"active":"",disabled:void 0!==D,title:void 0!==D?p.added_to_compare:p.add_to_compare,onClick:function(){return R(t,W)}},r.a.createElement("i",{className:"pe-7s-shuffle"}))))))))))})))},598:function(e,t,a){"use strict";var c=a(0),n=a.n(c),r=a(77),l=a(78),i=a(101),o=a(128),s=a(44),m=a(127),d=a(175),u=a(586),p=a(588),E=a(592),v=function(e){var t=e.product,a=e.currency,r=e.addToCart,l=e.addToWishlist,i=e.addToCompare,o=e.cartItem,v=e.wishlistItem,f=e.compareItem,b=e.sliderClassName,g=e.spaceBottomClass,N=Object(c.useState)(!1),h=Object(s.a)(N,2),w=h[0],k=h[1],y=Object(d.useToasts)().addToast,O=Object(u.a)(t.price,t.discount),j=+(t.price*a.currencyRate).toFixed(2),C=+(O*a.currencyRate).toFixed(2);return n.a.createElement(c.Fragment,null,n.a.createElement("div",{className:"col-xl-2 col-sm-3 ".concat(b||"")},n.a.createElement("div",{className:"product-wrap ".concat(g||"")},n.a.createElement("div",{className:"product-img"},n.a.createElement(m.b,{to:"/product/"+t._id},n.a.createElement("img",{className:"default-img",src:t.image[0],alt:""}),t.image.length>1?n.a.createElement("img",{className:"hover-img",src:t.image[1],alt:""}):""),t.discount||t.new?n.a.createElement("div",{className:"product-img-badges"},t.discount?n.a.createElement("span",{className:"pink"},"-",t.discount,"%"):"",t.new?n.a.createElement("span",{className:"purple"},"New"):""):"",n.a.createElement("div",{className:"product-action"},n.a.createElement("div",{className:"pro-same-action pro-wishlist"},n.a.createElement("button",{className:void 0!==v?"active":"",disabled:void 0!==v,title:void 0!==v?"Added to wishlist":"Add to wishlist",onClick:function(){return l(t,y)}},n.a.createElement("i",{className:"pe-7s-like"}))),n.a.createElement("div",{className:"pro-same-action pro-cart"},t.affiliateLink?n.a.createElement("a",{href:t.affiliateLink,rel:"noopener noreferrer",target:"_blank"}," ","Buy now"," "):t.variation&&t.variation.length>=1?n.a.createElement(m.b,{to:"".concat("","/product/").concat(t._id)},"Voir Plus"):t.stock&&t.stock>0?n.a.createElement("button",{onClick:function(){return r(t,y)},className:void 0!==o&&o.quantity>0?"active":"",disabled:void 0!==o&&o.quantity>0,title:void 0!==o?"Added to cart":"Add to cart"}," ",n.a.createElement("i",{className:"pe-7s-cart"})," ",void 0!==o&&o.quantity>0?"Added":"Add to cart"):n.a.createElement("button",{disabled:!0,className:"active"},"Out of Stock")),n.a.createElement("div",{className:"pro-same-action pro-quickview"},n.a.createElement("button",{onClick:function(){return k(!0)},title:"Quick View"},n.a.createElement("i",{className:"pe-7s-look"}))))),n.a.createElement("div",{className:"product-content text-center"},n.a.createElement("h3",null,n.a.createElement(m.b,{to:"/product/"+t.id},t.name)),t.rating&&t.rating>0?n.a.createElement("div",{className:"product-rating"},n.a.createElement(p.a,{ratingValue:t.rating})):"",n.a.createElement("div",{className:"product-price"},null!==O?n.a.createElement(c.Fragment,null,n.a.createElement("span",null,a.currencySymbol+C)," ",n.a.createElement("span",{className:"old"},a.currencySymbol+j)):n.a.createElement("span",null,a.currencySymbol+j," ")))),n.a.createElement("div",{className:"shop-list-wrap mb-30"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xl-4 col-md-5 col-sm-6"},n.a.createElement("div",{className:"product-list-image-wrap"},n.a.createElement("div",{className:"product-img"},n.a.createElement(m.b,{to:"/product/"+t._id},n.a.createElement("img",{className:"default-img img-fluid",src:t.image[0],alt:""}),t.image.length>1?n.a.createElement("img",{className:"hover-img img-fluid",src:t.image[1],alt:""}):""),t.discount||t.new?n.a.createElement("div",{className:"product-img-badges"},t.discount?n.a.createElement("span",{className:"pink"},"-",t.discount,"%"):"",t.new?n.a.createElement("span",{className:"purple"},"New"):""):""))),n.a.createElement("div",{className:"col-xl-8 col-md-7 col-sm-6"},n.a.createElement("div",{className:"shop-list-content"},n.a.createElement("h3",null,n.a.createElement(m.b,{to:"/product/"+t._id},t.name)),n.a.createElement("div",{className:"product-list-price"},null!==O?n.a.createElement(c.Fragment,null,n.a.createElement("span",null,a.currencySymbol+C)," ",n.a.createElement("span",{className:"old"},a.currencySymbol+j)):n.a.createElement("span",null,a.currencySymbol+j," ")),t.rating&&t.rating>0?n.a.createElement("div",{className:"rating-review"},n.a.createElement("div",{className:"product-list-rating"},n.a.createElement(p.a,{ratingValue:t.rating}))):"",t.shortDescription?n.a.createElement("p",null,t.shortDescription):"",n.a.createElement("div",{className:"shop-list-actions d-flex align-items-center"},n.a.createElement("div",{className:"shop-list-btn btn-hover"},t.affiliateLink?n.a.createElement("a",{href:t.affiliateLink,rel:"noopener noreferrer",target:"_blank"}," ","Buy now"," "):t.variation&&t.variation.length>=1?n.a.createElement(m.b,{to:"".concat("","/product/").concat(t._id)},"Select Option"):t.stock&&t.stock>0?n.a.createElement("button",{onClick:function(){return r(t,y)},className:void 0!==o&&o.quantity>0?"active":"",disabled:void 0!==o&&o.quantity>0,title:void 0!==o?"Added to cart":"Add to cart"}," ",n.a.createElement("i",{className:"pe-7s-cart"})," ",void 0!==o&&o.quantity>0?"Added":"Add to cart"):n.a.createElement("button",{disabled:!0,className:"active"},"Out of Stock")),n.a.createElement("div",{className:"shop-list-wishlist ml-10"},n.a.createElement("button",{className:void 0!==v?"active":"",disabled:void 0!==v,title:void 0!==v?"Added to wishlist":"Add to wishlist",onClick:function(){return l(t,y)}},n.a.createElement("i",{className:"pe-7s-like"}))),n.a.createElement("div",{className:"shop-list-compare ml-10"},n.a.createElement("button",{className:void 0!==f?"active":"",disabled:void 0!==f,title:void 0!==f?"Added to compare":"Add to compare",onClick:function(){return i(t,y)}},n.a.createElement("i",{className:"pe-7s-shuffle"}))))))))),n.a.createElement(E.a,{show:w,onHide:function(){return k(!1)},product:t,currency:a,discountedprice:O,finalproductprice:j,finaldiscountedprice:C,cartitem:o,wishlistitem:v,compareitem:f,addtocart:r,addtowishlist:l,addtocompare:i,addtoast:y}))},f=Object(r.connect)((function(e){return{currency:e.currencyData,cartItems:e.cartData,wishlistItems:e.wishlistData,compareItems:e.compareData}}),(function(e){return{addToCart:function(t,a,c,n,r){e(Object(l.e)(t,a,c,n,r))},addToWishlist:function(t,a){e(Object(i.d)(t,a))},addToCompare:function(t,a){e(Object(o.c)(t,a))}}}))((function(e){var t=e.products,a=e.currency,r=e.addToCart,l=e.addToWishlist,i=e.addToCompare,o=e.cartItems,s=e.wishlistItems,m=e.compareItems,d=e.sliderClassName,u=e.spaceBottomClass;return n.a.createElement(c.Fragment,null,t.map((function(e){return n.a.createElement(v,{sliderClassName:d,spaceBottomClass:u,product:e,currency:a,addToCart:r,addToWishlist:l,addToCompare:i,cartItem:o.filter((function(t){return t.id===e._id}))[0],wishlistItem:s.filter((function(t){return t.id===e._id}))[0],compareItem:m.filter((function(t){return t.id===e._id}))[0],key:e._id})})))}));t.a=function(e){var t=e.products,a=e.layout;return n.a.createElement("div",{className:"shop-bottom-area mt-35"},n.a.createElement("div",{className:"row ".concat(a||"")},n.a.createElement(f,{products:t,spaceBottomClass:"mb-25"})))}},654:function(e,t,a){"use strict";var c=a(0),n=a.n(c),r=a(586),l=function(e){var t=e.products,a=e.getSortParams,c=Object(r.b)(t),l=Object(r.c)(t),i=Object(r.g)(t),o=Object(r.d)(t);return n.a.createElement("div",{className:"product-filter-wrapper",id:"product-filter-wrapper"},n.a.createElement("div",{className:"product-filter-wrapper__inner"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-3 col-sm-6 col-xs-12 mb-30"},n.a.createElement("div",{className:"product-filter"},n.a.createElement("h5",null,"Categories"),c?n.a.createElement("ul",null,c.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("button",{onClick:function(t){a("category",e),Object(r.j)(t)}},e))}))):"No categories found")),n.a.createElement("div",{className:"col-md-3 col-sm-6 col-xs-12 mb-30"},n.a.createElement("div",{className:"product-filter"},n.a.createElement("h5",null,"Color"),l?n.a.createElement("ul",null,l.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("button",{onClick:function(t){a("color",e),Object(r.j)(t)}},e))}))):"No colors found")),n.a.createElement("div",{className:"col-md-3 col-sm-6 col-xs-12 mb-30"},n.a.createElement("div",{className:"product-filter"},n.a.createElement("h5",null,"Size"),i?n.a.createElement("ul",null,i.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("button",{className:"text-uppercase",onClick:function(t){a("size",e),Object(r.j)(t)}},e))}))):"No sizes found")),n.a.createElement("div",{className:"col-md-3 col-sm-6 col-xs-12 mb-30"},n.a.createElement("div",{className:"product-filter product-filter--tag"},n.a.createElement("h5",null,"Tag"),o?n.a.createElement("ul",null,o.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("button",{onClick:function(t){a("tag",e),Object(r.j)(t)}},e))}))):"No tags found")))))},i=function(e){var t=e.getFilterSortParams,a=e.productCount,i=e.sortedProductCount,o=e.products,s=e.getSortParams;return n.a.createElement(c.Fragment,null,n.a.createElement("div",{className:"shop-top-bar mb-35"},n.a.createElement("div",{className:"select-shoing-wrap"},n.a.createElement("div",{className:"shop-select"},n.a.createElement("select",{onChange:function(e){return t("filterSort",e.target.value)}},n.a.createElement("option",{value:"default"},"Default"),n.a.createElement("option",{value:"priceHighToLow"},"Price - High to Low"),n.a.createElement("option",{value:"priceLowToHigh"},"Price - Low to High"))),n.a.createElement("p",null,"Showing ",i," of ",a," result")),n.a.createElement("div",{className:"filter-active"},n.a.createElement("button",{onClick:function(e){return Object(r.k)(e)}},n.a.createElement("i",{className:"fa fa-plus"})," filter"))),n.a.createElement(l,{products:o,getSortParams:s}))};t.a=function(e){var t=e.getLayout,a=e.getFilterSortParams,r=e.productCount,l=e.sortedProductCount,o=e.products,s=e.getSortParams;return n.a.createElement(c.Fragment,null,n.a.createElement(i,{getLayout:t,getFilterSortParams:a,productCount:r,sortedProductCount:l,products:o,getSortParams:s}))}}}]);