(this["webpackJsonpwendyf-ecommerce-front-end"]=this["webpackJsonpwendyf-ecommerce-front-end"]||[]).push([[21],{519:function(e,t,a){"use strict";a.r(t);var c=a(154),r=a(0),n=a.n(r),l=a(550),s=a.n(l),i=a(565),o=a(155),m=a(70),d=a(543),u=a(546),p=a(545),E=a(562),b=a(558),g=a(552);t.default=Object(m.connect)((function(e){return{products:e.productData.products}}))((function(e){var t=e.location,a=e.products,l=Object(r.useState)("grid three-column"),m=Object(c.a)(l,2),v=m[0],f=m[1],N=Object(r.useState)(""),h=Object(c.a)(N,2),w=h[0],k=h[1],y=Object(r.useState)(""),j=Object(c.a)(y,2),O=j[0],C=j[1],S=Object(r.useState)(""),_=Object(c.a)(S,2),P=_[0],x=_[1],T=Object(r.useState)(""),z=Object(c.a)(T,2),A=z[0],B=z[1],F=Object(r.useState)(0),I=Object(c.a)(F,2),q=I[0],L=I[1],D=Object(r.useState)(1),H=Object(c.a)(D,2),V=H[0],W=H[1],R=Object(r.useState)([]),J=Object(c.a)(R,2),M=J[0],Q=J[1],G=Object(r.useState)([]),K=Object(c.a)(G,2),U=K[0],X=K[1],Y=t.pathname;return Object(r.useEffect)((function(){var e=Object(d.h)(a,w,O),t=Object(d.h)(e,P,A);X(e=t),Q(e.slice(q,q+15))}),[q,a,w,O,P,A]),n.a.createElement(r.Fragment,null,n.a.createElement(s.a,null,n.a.createElement("title",null,"Wendyfy | Shop Page"),n.a.createElement("meta",{name:"description",content:"Shop page of flone react minimalist eCommerce template."})),n.a.createElement(o.BreadcrumbsItem,{to:"/"},"Home"),n.a.createElement(o.BreadcrumbsItem,{to:""+Y},"Shop"),n.a.createElement(u.a,{headerTop:"visible"},n.a.createElement(p.a,null),n.a.createElement("div",{className:"shop-area pt-95 pb-100"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-3 order-2 order-lg-1"},n.a.createElement(E.a,{products:a,getSortParams:function(e,t){k(e),C(t)},sideSpaceClass:"mr-30"})),n.a.createElement("div",{className:"col-lg-9 order-1 order-lg-2"},n.a.createElement(b.a,{getLayout:function(e){f(e)},getFilterSortParams:function(e,t){x(e),B(t)},productCount:a.length,sortedProductCount:M.length}),n.a.createElement(g.a,{layout:v,products:M}),n.a.createElement("div",{className:"pro-pagination-style text-center mt-30"},n.a.createElement(i.a,{totalRecords:U.length,pageLimit:15,pageNeighbours:2,setOffset:L,currentPage:V,setCurrentPage:W,pageContainerClass:"mb-0 mt-0",pagePrevText:"\xab",pageNextText:"\xbb"}))))))))}))},544:function(e,t,a){"use strict";var c=a(0),r=a.n(c);t.a=function(e){for(var t=e.ratingValue,a=[],n=0;n<5;n++)a.push(r.a.createElement("i",{className:"fa fa-star-o",key:n}));if(t&&t>0)for(var l=0;l<=t-1;l++)a[l]=r.a.createElement("i",{className:"fa fa-star-o yellow",key:l});return r.a.createElement(c.Fragment,null,a)}},545:function(e,t,a){"use strict";var c=a(0),r=a.n(c),n=a(114),l=a(155);t.a=function(){return r.a.createElement("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"breadcrumb-content text-center"},r.a.createElement(l.Breadcrumbs,{separator:r.a.createElement("span",null,"/"),item:n.c,finalItem:"span"}))))}},548:function(e,t,a){"use strict";var c=a(154),r=a(0),n=a.n(r),l=a(547),s=a.n(l),i=a(543),o=a(718),m=a(544),d=a(70),u=a(69);t.a=Object(d.connect)((function(e){return{cartitems:e.cartData}}))(Object(u.multilanguage)((function(e){var t=e.product,a=e.currency,l=e.discountedprice,d=e.finalproductprice,u=e.finaldiscountedprice,p=e.strings,E=Object(r.useState)(null),b=Object(c.a)(E,2),g=b[0],v=b[1],f=Object(r.useState)(null),N=Object(c.a)(f,2),h=N[0],w=N[1],k=Object(r.useState)(0!==t.variation.length?t.variation[0].color:""),y=Object(c.a)(k,2),j=y[0],O=y[1],C=Object(r.useState)(0!==t.variation.length?t.variation[0].size[0].name:""),S=Object(c.a)(C,2),_=S[0],P=S[1],x=Object(r.useState)(0!==t.variation.length?t.variation[0].size[0].stock:t.stock),T=Object(c.a)(x,2),z=T[0],A=T[1],B=Object(r.useState)(1),F=Object(c.a)(B,2),I=F[0],q=F[1],L=e.wishlistitem,D=e.compareitem,H=e.addtocart,V=e.addtowishlist,W=e.addtocompare,R=e.addtoast,J=e.cartitems,M=Object(i.e)(J,t,j,_);Object(r.useEffect)((function(){null!==g&&g.controller&&null!==h&&h.controller&&(g.controller.control=h,h.controller.control=g)}),[g,h]);var Q={getSwiper:v,spaceBetween:10,loopedSlides:4,loop:!0},G={getSwiper:w,spaceBetween:10,slidesPerView:4,loopedSlides:4,touchRatio:.2,freeMode:!0,loop:!0,slideToClickedSlide:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},renderPrevButton:function(){return n.a.createElement("button",{className:"swiper-button-prev ht-swiper-button-nav"},n.a.createElement("i",{className:"pe-7s-angle-left"}))},renderNextButton:function(){return n.a.createElement("button",{className:"swiper-button-next ht-swiper-button-nav"},n.a.createElement("i",{className:"pe-7s-angle-right"}))}};return n.a.createElement(r.Fragment,null,n.a.createElement(o.a,{show:e.show,onHide:e.onHide,className:"product-quickview-modal-wrapper"},n.a.createElement(o.a.Header,{closeButton:!0}),n.a.createElement("div",{className:"modal-body"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-5 col-sm-12 col-xs-12"},n.a.createElement("div",{className:"product-large-image-wrapper"},n.a.createElement(s.a,Q,t.image&&t.image.map((function(e,t){return n.a.createElement("div",{key:t},n.a.createElement("div",{className:"single-image"},n.a.createElement("img",{src:e,className:"img-fluid",alt:""})))})))),n.a.createElement("div",{className:"product-small-image-wrapper mt-15"},n.a.createElement(s.a,G,t.image&&t.image.map((function(e,t){return n.a.createElement("div",{key:t},n.a.createElement("div",{className:"single-image"},n.a.createElement("img",{src:e,className:"img-fluid",alt:""})))}))))),n.a.createElement("div",{className:"col-md-7 col-sm-12 col-xs-12"},n.a.createElement("div",{className:"product-details-content quickview-content"},n.a.createElement("h2",null,t.name),n.a.createElement("div",{className:"product-details-price"},null!==l?n.a.createElement(r.Fragment,null,n.a.createElement("span",null,a.currencySymbol+u)," ",n.a.createElement("span",{className:"old"},a.currencySymbol+d)):n.a.createElement("span",null,a.currencySymbol+d," ")),t.rating&&t.rating>0?n.a.createElement("div",{className:"pro-details-rating-wrap"},n.a.createElement("div",{className:"pro-details-rating"},n.a.createElement(m.a,{ratingValue:t.rating}))):"",n.a.createElement("div",{className:"pro-details-list"},n.a.createElement("p",null,t.shortDescription)),t.variation?n.a.createElement("div",{className:"pro-details-size-color"},n.a.createElement("div",{className:"pro-details-color-wrap"},n.a.createElement("span",null,p.color),n.a.createElement("div",{className:"pro-details-color-content"},t.variation.map((function(e,t){return n.a.createElement("label",{className:"pro-details-color-content--single ".concat(e.color),key:t},n.a.createElement("input",{type:"radio",value:e.color,name:"product-color",checked:e.color===j?"checked":"",onChange:function(){O(e.color),P(e.size[0].name),A(e.size[0].stock),q(1)}}),n.a.createElement("span",{className:"checkmark"}))})))),n.a.createElement("div",{className:"pro-details-size"},n.a.createElement("span",null,p.size),n.a.createElement("div",{className:"pro-details-size-content"},t.variation&&t.variation.map((function(e){return e.color===j?e.size.map((function(e,t){return n.a.createElement("label",{className:"pro-details-size-content--single",key:t},n.a.createElement("input",{type:"radio",value:e.name,checked:e.name===_?"checked":"",onChange:function(){P(e.name),A(e.stock),q(1)}}),n.a.createElement("span",{className:"size-name"},e.name))})):""}))))):"",t.affiliateLink?n.a.createElement("div",{className:"pro-details-quality"},n.a.createElement("div",{className:"pro-details-cart btn-hover"},n.a.createElement("a",{href:t.affiliateLink,rel:"noopener noreferrer",target:"_blank"},"Buy Now"))):n.a.createElement("div",{className:"pro-details-quality"},n.a.createElement("div",{className:"cart-plus-minus"},n.a.createElement("button",{onClick:function(){return q(I>1?I-1:1)},className:"dec qtybutton"},"-"),n.a.createElement("input",{className:"cart-plus-minus-box",type:"text",value:I,readOnly:!0}),n.a.createElement("button",{onClick:function(){return q(I<z-M?I+1:I)},className:"inc qtybutton"},"+")),n.a.createElement("div",{className:"pro-details-cart btn-hover"},z&&z>0?n.a.createElement("button",{onClick:function(){return H(t,R,I,j,_)},disabled:M>=z}," ",p.add_to_cart," "):n.a.createElement("button",{disabled:!0},p.out_of_stock)),n.a.createElement("div",{className:"pro-details-wishlist"},n.a.createElement("button",{className:void 0!==L?"active":"",disabled:void 0!==L,title:void 0!==L?p.added_to_wishlist:p.add_to_wishlist,onClick:function(){return V(t,R)}},n.a.createElement("i",{className:"pe-7s-like"}))),n.a.createElement("div",{className:"pro-details-compare"},n.a.createElement("button",{className:void 0!==D?"active":"",disabled:void 0!==D,title:void 0!==D?p.added_to_compare:p.add_to_compare,onClick:function(){return W(t,R)}},n.a.createElement("i",{className:"pe-7s-shuffle"}))))))))))})))},552:function(e,t,a){"use strict";var c=a(0),r=a.n(c),n=a(70),l=a(71),s=a(91),i=a(115),o=a(154),m=a(114),d=a(156),u=a(543),p=a(544),E=a(548),b=function(e){var t=e.product,a=e.currency,n=e.addToCart,l=e.addToWishlist,s=e.addToCompare,i=e.cartItem,b=e.wishlistItem,g=e.compareItem,v=e.sliderClassName,f=e.spaceBottomClass,N=Object(c.useState)(!1),h=Object(o.a)(N,2),w=h[0],k=h[1],y=Object(d.useToasts)().addToast,j=Object(u.a)(t.price,t.discount),O=+(t.price*a.currencyRate).toFixed(2),C=+(j*a.currencyRate).toFixed(2);return r.a.createElement(c.Fragment,null,r.a.createElement("div",{className:"col-xl-4 col-sm-6 ".concat(v||"")},r.a.createElement("div",{className:"product-wrap ".concat(f||"")},r.a.createElement("div",{className:"product-img"},r.a.createElement(m.b,{to:"/product/"+t._id},r.a.createElement("img",{className:"default-img",src:t.image[0],alt:""}),t.image.length>1?r.a.createElement("img",{className:"hover-img",src:t.image[1],alt:""}):""),t.discount||t.new?r.a.createElement("div",{className:"product-img-badges"},t.discount?r.a.createElement("span",{className:"pink"},"-",t.discount,"%"):"",t.new?r.a.createElement("span",{className:"purple"},"New"):""):"",r.a.createElement("div",{className:"product-action"},r.a.createElement("div",{className:"pro-same-action pro-wishlist"},r.a.createElement("button",{className:void 0!==b?"active":"",disabled:void 0!==b,title:void 0!==b?"Added to wishlist":"Add to wishlist",onClick:function(){return l(t,y)}},r.a.createElement("i",{className:"pe-7s-like"}))),r.a.createElement("div",{className:"pro-same-action pro-cart"},t.affiliateLink?r.a.createElement("a",{href:t.affiliateLink,rel:"noopener noreferrer",target:"_blank"}," ","Buy now"," "):t.variation&&t.variation.length>=1?r.a.createElement(m.b,{to:"".concat("","/product/").concat(t._id)},"Voir Plus"):t.stock&&t.stock>0?r.a.createElement("button",{onClick:function(){return n(t,y)},className:void 0!==i&&i.quantity>0?"active":"",disabled:void 0!==i&&i.quantity>0,title:void 0!==i?"Added to cart":"Add to cart"}," ",r.a.createElement("i",{className:"pe-7s-cart"})," ",void 0!==i&&i.quantity>0?"Added":"Add to cart"):r.a.createElement("button",{disabled:!0,className:"active"},"Out of Stock")),r.a.createElement("div",{className:"pro-same-action pro-quickview"},r.a.createElement("button",{onClick:function(){return k(!0)},title:"Quick View"},r.a.createElement("i",{className:"pe-7s-look"}))))),r.a.createElement("div",{className:"product-content text-center"},r.a.createElement("h3",null,r.a.createElement(m.b,{to:"/product/"+t.id},t.name)),t.rating&&t.rating>0?r.a.createElement("div",{className:"product-rating"},r.a.createElement(p.a,{ratingValue:t.rating})):"",r.a.createElement("div",{className:"product-price"},null!==j?r.a.createElement(c.Fragment,null,r.a.createElement("span",null,a.currencySymbol+C)," ",r.a.createElement("span",{className:"old"},a.currencySymbol+O)):r.a.createElement("span",null,a.currencySymbol+O," ")))),r.a.createElement("div",{className:"shop-list-wrap mb-30"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xl-4 col-md-5 col-sm-6"},r.a.createElement("div",{className:"product-list-image-wrap"},r.a.createElement("div",{className:"product-img"},r.a.createElement(m.b,{to:"/product/"+t._id},r.a.createElement("img",{className:"default-img img-fluid",src:t.image[0],alt:""}),t.image.length>1?r.a.createElement("img",{className:"hover-img img-fluid",src:t.image[1],alt:""}):""),t.discount||t.new?r.a.createElement("div",{className:"product-img-badges"},t.discount?r.a.createElement("span",{className:"pink"},"-",t.discount,"%"):"",t.new?r.a.createElement("span",{className:"purple"},"New"):""):""))),r.a.createElement("div",{className:"col-xl-8 col-md-7 col-sm-6"},r.a.createElement("div",{className:"shop-list-content"},r.a.createElement("h3",null,r.a.createElement(m.b,{to:"/product/"+t._id},t.name)),r.a.createElement("div",{className:"product-list-price"},null!==j?r.a.createElement(c.Fragment,null,r.a.createElement("span",null,a.currencySymbol+C)," ",r.a.createElement("span",{className:"old"},a.currencySymbol+O)):r.a.createElement("span",null,a.currencySymbol+O," ")),t.rating&&t.rating>0?r.a.createElement("div",{className:"rating-review"},r.a.createElement("div",{className:"product-list-rating"},r.a.createElement(p.a,{ratingValue:t.rating}))):"",t.shortDescription?r.a.createElement("p",null,t.shortDescription):"",r.a.createElement("div",{className:"shop-list-actions d-flex align-items-center"},r.a.createElement("div",{className:"shop-list-btn btn-hover"},t.affiliateLink?r.a.createElement("a",{href:t.affiliateLink,rel:"noopener noreferrer",target:"_blank"}," ","Buy now"," "):t.variation&&t.variation.length>=1?r.a.createElement(m.b,{to:"".concat("","/product/").concat(t._id)},"Select Option"):t.stock&&t.stock>0?r.a.createElement("button",{onClick:function(){return n(t,y)},className:void 0!==i&&i.quantity>0?"active":"",disabled:void 0!==i&&i.quantity>0,title:void 0!==i?"Added to cart":"Add to cart"}," ",r.a.createElement("i",{className:"pe-7s-cart"})," ",void 0!==i&&i.quantity>0?"Added":"Add to cart"):r.a.createElement("button",{disabled:!0,className:"active"},"Out of Stock")),r.a.createElement("div",{className:"shop-list-wishlist ml-10"},r.a.createElement("button",{className:void 0!==b?"active":"",disabled:void 0!==b,title:void 0!==b?"Added to wishlist":"Add to wishlist",onClick:function(){return l(t,y)}},r.a.createElement("i",{className:"pe-7s-like"}))),r.a.createElement("div",{className:"shop-list-compare ml-10"},r.a.createElement("button",{className:void 0!==g?"active":"",disabled:void 0!==g,title:void 0!==g?"Added to compare":"Add to compare",onClick:function(){return s(t,y)}},r.a.createElement("i",{className:"pe-7s-shuffle"}))))))))),r.a.createElement(E.a,{show:w,onHide:function(){return k(!1)},product:t,currency:a,discountedprice:j,finalproductprice:O,finaldiscountedprice:C,cartitem:i,wishlistitem:b,compareitem:g,addtocart:n,addtowishlist:l,addtocompare:s,addtoast:y}))},g=Object(n.connect)((function(e){return{currency:e.currencyData,cartItems:e.cartData,wishlistItems:e.wishlistData,compareItems:e.compareData}}),(function(e){return{addToCart:function(t,a,c,r,n){e(Object(l.e)(t,a,c,r,n))},addToWishlist:function(t,a){e(Object(s.d)(t,a))},addToCompare:function(t,a){e(Object(i.c)(t,a))}}}))((function(e){var t=e.products,a=e.currency,n=e.addToCart,l=e.addToWishlist,s=e.addToCompare,i=e.cartItems,o=e.wishlistItems,m=e.compareItems,d=e.sliderClassName,u=e.spaceBottomClass;return r.a.createElement(c.Fragment,null,t.map((function(e){return r.a.createElement(b,{sliderClassName:d,spaceBottomClass:u,product:e,currency:a,addToCart:n,addToWishlist:l,addToCompare:s,cartItem:i.filter((function(t){return t.id===e._id}))[0],wishlistItem:o.filter((function(t){return t.id===e._id}))[0],compareItem:m.filter((function(t){return t.id===e._id}))[0],key:e._id})})))}));t.a=function(e){var t=e.products,a=e.layout;return r.a.createElement("div",{className:"shop-bottom-area mt-35"},r.a.createElement("div",{className:"row ".concat(a||"")},r.a.createElement(g,{products:t,spaceBottomClass:"mb-25"})))}},558:function(e,t,a){"use strict";var c=a(0),r=a.n(c),n=a(543),l=a(69),s=Object(l.multilanguage)((function(e){var t=e.getLayout,a=e.getFilterSortParams,c=e.productCount,l=e.sortedProductCount,s=e.strings;return r.a.createElement("div",{className:"shop-top-bar mb-35"},r.a.createElement("div",{className:"select-shoing-wrap"},r.a.createElement("div",{className:"shop-select"},r.a.createElement("select",{onChange:function(e){return a("filterSort",e.target.value)}},r.a.createElement("option",{value:"default"},s.default),r.a.createElement("option",{value:"priceHighToLow"},s.price_high_low),r.a.createElement("option",{value:"priceLowToHigh"},s.price_low_high))),r.a.createElement("p",null,s.showing," ",l," ",s.of," ",c," ",s.result)),r.a.createElement("div",{className:"shop-tab"},r.a.createElement("button",{onClick:function(e){t("grid two-column"),Object(n.i)(e)}},r.a.createElement("i",{className:"fa fa-th-large"})),r.a.createElement("button",{onClick:function(e){t("grid three-column"),Object(n.i)(e)}},r.a.createElement("i",{className:"fa fa-th"})),r.a.createElement("button",{onClick:function(e){t("list"),Object(n.i)(e)}},r.a.createElement("i",{className:"fa fa-list-ul"}))))}));t.a=function(e){var t=e.getLayout,a=e.getFilterSortParams,n=e.productCount,l=e.sortedProductCount;return r.a.createElement(c.Fragment,null,r.a.createElement(s,{getLayout:t,getFilterSortParams:a,productCount:n,sortedProductCount:l}))}},562:function(e,t,a){"use strict";var c=a(0),r=a.n(c),n=a(543),l=a(69),s=Object(l.multilanguage)((function(e){return r.a.createElement("div",{className:"sidebar-widget"},r.a.createElement("h4",{className:"pro-sidebar-title"},e.search," "),r.a.createElement("div",{className:"pro-sidebar-search mb-50 mt-25"},r.a.createElement("form",{className:"pro-sidebar-search-form",action:"#"},r.a.createElement("input",{type:"text",placeholder:e.search_here}),r.a.createElement("button",null,r.a.createElement("i",{className:"pe-7s-search"})))))})),i=function(e){var t=e.categories,a=e.getSortParams,c=e.strings;return r.a.createElement("div",{className:"sidebar-widget"},r.a.createElement("h4",{className:"pro-sidebar-title"},c.categories," "),r.a.createElement("div",{className:"sidebar-widget-list mt-30"},t?r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("button",{onClick:function(e){a("category",""),Object(n.j)(e)}},r.a.createElement("span",{className:"checkmark"})," All Categories"))),t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("button",{onClick:function(t){a("category",e),Object(n.j)(t)}}," ",r.a.createElement("span",{className:"checkmark"})," ",e," ")))}))):c.no_cats_found))},o=function(e){var t=e.colors,a=e.getSortParams,c=e.strings;return r.a.createElement("div",{className:"sidebar-widget mt-50"},r.a.createElement("h4",{className:"pro-sidebar-title"},c.color," "),r.a.createElement("div",{className:"sidebar-widget-list mt-20"},t?r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("button",{onClick:function(e){a("color",""),Object(n.j)(e)}},r.a.createElement("span",{className:"checkmark"})," ",c.all_colors," "))),t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("button",{onClick:function(t){a("color",e),Object(n.j)(t)}},r.a.createElement("span",{className:"checkmark"})," ",e," ")))}))):c.no_colors_found))},m=function(e){var t=e.sizes,a=e.getSortParams,c=e.strings;return r.a.createElement("div",{className:"sidebar-widget mt-40"},r.a.createElement("h4",{className:"pro-sidebar-title"},c.size),r.a.createElement("div",{className:"sidebar-widget-list mt-20"},t?r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("button",{onClick:function(e){a("size",""),Object(n.j)(e)}},r.a.createElement("span",{className:"checkmark"})," ",c.all_sizes," "))),t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("button",{className:"text-uppercase",onClick:function(t){a("size",e),Object(n.j)(t)}}," ",r.a.createElement("span",{className:"checkmark"}),e," ")))}))):c.no_sizes_found))},d=function(e){var t=e.tags,a=e.getSortParams,c=e.strings;return r.a.createElement("div",{className:"sidebar-widget mt-50"},r.a.createElement("h4",{className:"pro-sidebar-title"},c.tag," "),r.a.createElement("div",{className:"sidebar-widget-tag mt-25"},t?r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("button",{onClick:function(t){a("tag",e),Object(n.j)(t)}},e))}))):c.no_tags_found))};t.a=Object(l.multilanguage)((function(e){var t=e.products,a=e.getSortParams,c=e.sideSpaceClass,l=e.strings,u=Object(n.b)(t),p=Object(n.c)(t),E=Object(n.g)(t),b=Object(n.d)(t);return r.a.createElement("div",{className:"sidebar-style ".concat(c||"")},r.a.createElement(s,null),r.a.createElement(i,{categories:u,getSortParams:a,strings:l}),r.a.createElement(o,{colors:p,getSortParams:a,strings:l}),r.a.createElement(m,{sizes:E,getSortParams:a,strings:l}),r.a.createElement(d,{tags:b,getSortParams:a,strings:l}))}))}}]);
//# sourceMappingURL=21.ea28ac89.chunk.js.map