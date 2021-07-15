(this["webpackJsonpwendyf-ecommerce-front-end"]=this["webpackJsonpwendyf-ecommerce-front-end"]||[]).push([[22],{520:function(e,t,a){"use strict";a.r(t);var c=a(154),n=a(0),r=a.n(n),l=a(550),s=a.n(l),i=a(565),o=a(155),m=a(70),d=a(543),u=a(546),p=a(545),E=a(562),b=a(558),v=a(552);t.default=Object(m.connect)((function(e){return{products:e.productData.products}}))((function(e){var t=e.location,a=e.products,l=Object(n.useState)("grid three-column"),m=Object(c.a)(l,2),g=m[0],f=m[1],N=Object(n.useState)(""),h=Object(c.a)(N,2),w=h[0],k=h[1],y=Object(n.useState)(""),j=Object(c.a)(y,2),O=j[0],C=j[1],S=Object(n.useState)(""),_=Object(c.a)(S,2),P=_[0],x=_[1],T=Object(n.useState)(""),z=Object(c.a)(T,2),F=z[0],A=z[1],B=Object(n.useState)(0),I=Object(c.a)(B,2),q=I[0],L=I[1],D=Object(n.useState)(1),H=Object(c.a)(D,2),V=H[0],R=H[1],W=Object(n.useState)([]),J=Object(c.a)(W,2),M=J[0],Q=J[1],G=Object(n.useState)([]),K=Object(c.a)(G,2),U=K[0],X=K[1],Y=t.pathname;return Object(n.useEffect)((function(){var e=Object(d.h)(a,w,O),t=Object(d.h)(e,P,F);X(e=t),Q(e.slice(q,q+15))}),[q,a,w,O,P,F]),r.a.createElement(n.Fragment,null,r.a.createElement(s.a,null,r.a.createElement("title",null,"Flone | Shop Page"),r.a.createElement("meta",{name:"description",content:"Shop page of flone react minimalist eCommerce template."})),r.a.createElement(o.BreadcrumbsItem,{to:"/"},"Home"),r.a.createElement(o.BreadcrumbsItem,{to:""+Y},"Shop"),r.a.createElement(u.a,{headerTop:"visible"},r.a.createElement(p.a,null),r.a.createElement("div",{className:"shop-area pt-95 pb-100"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-3 order-2"},r.a.createElement(E.a,{products:a,getSortParams:function(e,t){k(e),C(t)},sideSpaceClass:"ml-30"})),r.a.createElement("div",{className:"col-lg-9 order-1"},r.a.createElement(b.a,{getLayout:function(e){f(e)},getFilterSortParams:function(e,t){x(e),A(t)},productCount:a.length,sortedProductCount:M.length}),r.a.createElement(v.a,{layout:g,products:M}),r.a.createElement("div",{className:"pro-pagination-style text-center mt-30"},r.a.createElement(i.a,{totalRecords:U.length,pageLimit:15,pageNeighbours:2,setOffset:L,currentPage:V,setCurrentPage:R,pageContainerClass:"mb-0 mt-0",pagePrevText:"\xab",pageNextText:"\xbb"}))))))))}))},544:function(e,t,a){"use strict";var c=a(0),n=a.n(c);t.a=function(e){for(var t=e.ratingValue,a=[],r=0;r<5;r++)a.push(n.a.createElement("i",{className:"fa fa-star-o",key:r}));if(t&&t>0)for(var l=0;l<=t-1;l++)a[l]=n.a.createElement("i",{className:"fa fa-star-o yellow",key:l});return n.a.createElement(c.Fragment,null,a)}},545:function(e,t,a){"use strict";var c=a(0),n=a.n(c),r=a(114),l=a(155);t.a=function(){return n.a.createElement("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"breadcrumb-content text-center"},n.a.createElement(l.Breadcrumbs,{separator:n.a.createElement("span",null,"/"),item:r.c,finalItem:"span"}))))}},548:function(e,t,a){"use strict";var c=a(154),n=a(0),r=a.n(n),l=a(547),s=a.n(l),i=a(543),o=a(718),m=a(544),d=a(70),u=a(69);t.a=Object(d.connect)((function(e){return{cartitems:e.cartData}}))(Object(u.multilanguage)((function(e){var t=e.product,a=e.currency,l=e.discountedprice,d=e.finalproductprice,u=e.finaldiscountedprice,p=e.strings,E=Object(n.useState)(null),b=Object(c.a)(E,2),v=b[0],g=b[1],f=Object(n.useState)(null),N=Object(c.a)(f,2),h=N[0],w=N[1],k=Object(n.useState)(t.variation&&t.variation.length>0?t.variation[0].color:""),y=Object(c.a)(k,2),j=y[0],O=y[1],C=Object(n.useState)(t.variation&&t.variation.length>0?t.variation[0].size[0].name:""),S=Object(c.a)(C,2),_=S[0],P=S[1],x=Object(n.useState)(t.variation&&t.variation.length>0?t.variation[0].size[0].stock:t.stock),T=Object(c.a)(x,2),z=T[0],F=T[1],A=Object(n.useState)(1),B=Object(c.a)(A,2),I=B[0],q=B[1],L=e.wishlistitem,D=e.compareitem,H=e.addtocart,V=e.addtowishlist,R=e.addtocompare,W=e.addtoast,J=e.cartitems,M=Object(i.e)(J,t,j,_);Object(n.useEffect)((function(){null!==v&&v.controller&&null!==h&&h.controller&&(v.controller.control=h,h.controller.control=v)}),[v,h]);var Q={getSwiper:g,spaceBetween:10,loopedSlides:4,loop:!0},G={getSwiper:w,spaceBetween:10,slidesPerView:4,loopedSlides:4,touchRatio:.2,freeMode:!0,loop:!0,slideToClickedSlide:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},renderPrevButton:function(){return r.a.createElement("button",{className:"swiper-button-prev ht-swiper-button-nav"},r.a.createElement("i",{className:"pe-7s-angle-left"}))},renderNextButton:function(){return r.a.createElement("button",{className:"swiper-button-next ht-swiper-button-nav"},r.a.createElement("i",{className:"pe-7s-angle-right"}))}};return r.a.createElement(n.Fragment,null,r.a.createElement(o.a,{show:e.show,onHide:e.onHide,className:"product-quickview-modal-wrapper"},r.a.createElement(o.a.Header,{closeButton:!0}),r.a.createElement("div",{className:"modal-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-5 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"product-large-image-wrapper"},r.a.createElement(s.a,Q,t.image&&t.image.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("div",{className:"single-image"},r.a.createElement("img",{src:e,className:"img-fluid",alt:""})))})))),r.a.createElement("div",{className:"product-small-image-wrapper mt-15"},r.a.createElement(s.a,G,t.image&&t.image.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("div",{className:"single-image"},r.a.createElement("img",{src:e,className:"img-fluid",alt:""})))}))))),r.a.createElement("div",{className:"col-md-7 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"product-details-content quickview-content"},r.a.createElement("h2",null,t.name),r.a.createElement("div",{className:"product-details-price"},null!==l?r.a.createElement(n.Fragment,null,r.a.createElement("span",null,a.currencySymbol+u)," ",r.a.createElement("span",{className:"old"},a.currencySymbol+d)):r.a.createElement("span",null,a.currencySymbol+d," ")),t.rating&&t.rating>0?r.a.createElement("div",{className:"pro-details-rating-wrap"},r.a.createElement("div",{className:"pro-details-rating"},r.a.createElement(m.a,{ratingValue:t.rating}))):"",r.a.createElement("div",{className:"pro-details-list"},r.a.createElement("p",null,t.shortDescription)),t.variation&&t.variation.length>0?r.a.createElement("div",{className:"pro-details-size-color"},r.a.createElement("div",{className:"pro-details-color-wrap"},r.a.createElement("span",null,p.color),r.a.createElement("div",{className:"pro-details-color-content"},t.variation.map((function(e,t){return r.a.createElement("label",{className:"pro-details-color-content--single ".concat(e.color),key:t},r.a.createElement("input",{type:"radio",value:e.color,name:"product-color",checked:e.color===j?"checked":"",onChange:function(){O(e.color),P(e.size[0].name),F(e.size[0].stock),q(1)}}),r.a.createElement("span",{className:"checkmark"}))})))),r.a.createElement("div",{className:"pro-details-size"},r.a.createElement("span",null,p.size),r.a.createElement("div",{className:"pro-details-size-content"},t.variation&&t.variation.map((function(e){return e.color===j?e.size.map((function(e,t){return r.a.createElement("label",{className:"pro-details-size-content--single",key:t},r.a.createElement("input",{type:"radio",value:e.name,checked:e.name===_?"checked":"",onChange:function(){P(e.name),F(e.stock),q(1)}}),r.a.createElement("span",{className:"size-name"},e.name))})):""}))))):"",t.affiliateLink?r.a.createElement("div",{className:"pro-details-quality"},r.a.createElement("div",{className:"pro-details-cart btn-hover"},r.a.createElement("a",{href:t.affiliateLink,rel:"noopener noreferrer",target:"_blank"},"Buy Now"))):r.a.createElement("div",{className:"pro-details-quality"},r.a.createElement("div",{className:"cart-plus-minus"},r.a.createElement("button",{onClick:function(){return q(I>1?I-1:1)},className:"dec qtybutton"},"-"),r.a.createElement("input",{className:"cart-plus-minus-box",type:"text",value:I,readOnly:!0}),r.a.createElement("button",{onClick:function(){return q(I<z-M?I+1:I)},className:"inc qtybutton"},"+")),r.a.createElement("div",{className:"pro-details-cart btn-hover"},z&&z>0?r.a.createElement("button",{onClick:function(){return H(t,W,I,j,_)},disabled:M>=z}," ",p.add_to_cart," "):r.a.createElement("button",{disabled:!0},p.out_of_stock)),r.a.createElement("div",{className:"pro-details-wishlist"},r.a.createElement("button",{className:void 0!==L?"active":"",disabled:void 0!==L,title:void 0!==L?p.added_to_wishlist:p.add_to_wishlist,onClick:function(){return V(t,W)}},r.a.createElement("i",{className:"pe-7s-like"}))),r.a.createElement("div",{className:"pro-details-compare"},r.a.createElement("button",{className:void 0!==D?"active":"",disabled:void 0!==D,title:void 0!==D?p.added_to_compare:p.add_to_compare,onClick:function(){return R(t,W)}},r.a.createElement("i",{className:"pe-7s-shuffle"}))))))))))})))},552:function(e,t,a){"use strict";var c=a(0),n=a.n(c),r=a(70),l=a(71),s=a(91),i=a(115),o=a(154),m=a(114),d=a(156),u=a(543),p=a(544),E=a(548),b=function(e){var t=e.product,a=e.currency,r=e.addToCart,l=e.addToWishlist,s=e.addToCompare,i=e.cartItem,b=e.wishlistItem,v=e.compareItem,g=e.sliderClassName,f=e.spaceBottomClass,N=Object(c.useState)(!1),h=Object(o.a)(N,2),w=h[0],k=h[1],y=Object(d.useToasts)().addToast,j=Object(u.a)(t.price,t.discount),O=+(t.price*a.currencyRate).toFixed(2),C=+(j*a.currencyRate).toFixed(2);return n.a.createElement(c.Fragment,null,n.a.createElement("div",{className:"col-xl-4 col-sm-6 ".concat(g||"")},n.a.createElement("div",{className:"product-wrap ".concat(f||"")},n.a.createElement("div",{className:"product-img"},n.a.createElement(m.b,{to:"/product/"+t._id},n.a.createElement("img",{className:"default-img",src:t.image[0],alt:""}),t.image.length>1?n.a.createElement("img",{className:"hover-img",src:t.image[1],alt:""}):""),t.discount||t.new?n.a.createElement("div",{className:"product-img-badges"},t.discount?n.a.createElement("span",{className:"pink"},"-",t.discount,"%"):"",t.new?n.a.createElement("span",{className:"purple"},"New"):""):"",n.a.createElement("div",{className:"product-action"},n.a.createElement("div",{className:"pro-same-action pro-wishlist"},n.a.createElement("button",{className:void 0!==b?"active":"",disabled:void 0!==b,title:void 0!==b?"Added to wishlist":"Add to wishlist",onClick:function(){return l(t,y)}},n.a.createElement("i",{className:"pe-7s-like"}))),n.a.createElement("div",{className:"pro-same-action pro-cart"},t.affiliateLink?n.a.createElement("a",{href:t.affiliateLink,rel:"noopener noreferrer",target:"_blank"}," ","Buy now"," "):t.variation&&t.variation.length>=1?n.a.createElement(m.b,{to:"".concat("","/product/").concat(t._id)},"Voir Plus"):t.stock&&t.stock>0?n.a.createElement("button",{onClick:function(){return r(t,y)},className:void 0!==i&&i.quantity>0?"active":"",disabled:void 0!==i&&i.quantity>0,title:void 0!==i?"Added to cart":"Add to cart"}," ",n.a.createElement("i",{className:"pe-7s-cart"})," ",void 0!==i&&i.quantity>0?"Added":"Add to cart"):n.a.createElement("button",{disabled:!0,className:"active"},"Out of Stock")),n.a.createElement("div",{className:"pro-same-action pro-quickview"},n.a.createElement("button",{onClick:function(){return k(!0)},title:"Quick View"},n.a.createElement("i",{className:"pe-7s-look"}))))),n.a.createElement("div",{className:"product-content text-center"},n.a.createElement("h3",null,n.a.createElement(m.b,{to:"/product/"+t.id},t.name)),t.rating&&t.rating>0?n.a.createElement("div",{className:"product-rating"},n.a.createElement(p.a,{ratingValue:t.rating})):"",n.a.createElement("div",{className:"product-price"},null!==j?n.a.createElement(c.Fragment,null,n.a.createElement("span",null,a.currencySymbol+C)," ",n.a.createElement("span",{className:"old"},a.currencySymbol+O)):n.a.createElement("span",null,a.currencySymbol+O," ")))),n.a.createElement("div",{className:"shop-list-wrap mb-30"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xl-4 col-md-5 col-sm-6"},n.a.createElement("div",{className:"product-list-image-wrap"},n.a.createElement("div",{className:"product-img"},n.a.createElement(m.b,{to:"/product/"+t._id},n.a.createElement("img",{className:"default-img img-fluid",src:t.image[0],alt:""}),t.image.length>1?n.a.createElement("img",{className:"hover-img img-fluid",src:t.image[1],alt:""}):""),t.discount||t.new?n.a.createElement("div",{className:"product-img-badges"},t.discount?n.a.createElement("span",{className:"pink"},"-",t.discount,"%"):"",t.new?n.a.createElement("span",{className:"purple"},"New"):""):""))),n.a.createElement("div",{className:"col-xl-8 col-md-7 col-sm-6"},n.a.createElement("div",{className:"shop-list-content"},n.a.createElement("h3",null,n.a.createElement(m.b,{to:"/product/"+t._id},t.name)),n.a.createElement("div",{className:"product-list-price"},null!==j?n.a.createElement(c.Fragment,null,n.a.createElement("span",null,a.currencySymbol+C)," ",n.a.createElement("span",{className:"old"},a.currencySymbol+O)):n.a.createElement("span",null,a.currencySymbol+O," ")),t.rating&&t.rating>0?n.a.createElement("div",{className:"rating-review"},n.a.createElement("div",{className:"product-list-rating"},n.a.createElement(p.a,{ratingValue:t.rating}))):"",t.shortDescription?n.a.createElement("p",null,t.shortDescription):"",n.a.createElement("div",{className:"shop-list-actions d-flex align-items-center"},n.a.createElement("div",{className:"shop-list-btn btn-hover"},t.affiliateLink?n.a.createElement("a",{href:t.affiliateLink,rel:"noopener noreferrer",target:"_blank"}," ","Buy now"," "):t.variation&&t.variation.length>=1?n.a.createElement(m.b,{to:"".concat("","/product/").concat(t._id)},"Select Option"):t.stock&&t.stock>0?n.a.createElement("button",{onClick:function(){return r(t,y)},className:void 0!==i&&i.quantity>0?"active":"",disabled:void 0!==i&&i.quantity>0,title:void 0!==i?"Added to cart":"Add to cart"}," ",n.a.createElement("i",{className:"pe-7s-cart"})," ",void 0!==i&&i.quantity>0?"Added":"Add to cart"):n.a.createElement("button",{disabled:!0,className:"active"},"Out of Stock")),n.a.createElement("div",{className:"shop-list-wishlist ml-10"},n.a.createElement("button",{className:void 0!==b?"active":"",disabled:void 0!==b,title:void 0!==b?"Added to wishlist":"Add to wishlist",onClick:function(){return l(t,y)}},n.a.createElement("i",{className:"pe-7s-like"}))),n.a.createElement("div",{className:"shop-list-compare ml-10"},n.a.createElement("button",{className:void 0!==v?"active":"",disabled:void 0!==v,title:void 0!==v?"Added to compare":"Add to compare",onClick:function(){return s(t,y)}},n.a.createElement("i",{className:"pe-7s-shuffle"}))))))))),n.a.createElement(E.a,{show:w,onHide:function(){return k(!1)},product:t,currency:a,discountedprice:j,finalproductprice:O,finaldiscountedprice:C,cartitem:i,wishlistitem:b,compareitem:v,addtocart:r,addtowishlist:l,addtocompare:s,addtoast:y}))},v=Object(r.connect)((function(e){return{currency:e.currencyData,cartItems:e.cartData,wishlistItems:e.wishlistData,compareItems:e.compareData}}),(function(e){return{addToCart:function(t,a,c,n,r){e(Object(l.e)(t,a,c,n,r))},addToWishlist:function(t,a){e(Object(s.d)(t,a))},addToCompare:function(t,a){e(Object(i.c)(t,a))}}}))((function(e){var t=e.products,a=e.currency,r=e.addToCart,l=e.addToWishlist,s=e.addToCompare,i=e.cartItems,o=e.wishlistItems,m=e.compareItems,d=e.sliderClassName,u=e.spaceBottomClass;return n.a.createElement(c.Fragment,null,t.map((function(e){return n.a.createElement(b,{sliderClassName:d,spaceBottomClass:u,product:e,currency:a,addToCart:r,addToWishlist:l,addToCompare:s,cartItem:i.filter((function(t){return t.id===e._id}))[0],wishlistItem:o.filter((function(t){return t.id===e._id}))[0],compareItem:m.filter((function(t){return t.id===e._id}))[0],key:e._id})})))}));t.a=function(e){var t=e.products,a=e.layout;return n.a.createElement("div",{className:"shop-bottom-area mt-35"},n.a.createElement("div",{className:"row ".concat(a||"")},n.a.createElement(v,{products:t,spaceBottomClass:"mb-25"})))}},558:function(e,t,a){"use strict";var c=a(0),n=a.n(c),r=a(543),l=a(69),s=Object(l.multilanguage)((function(e){var t=e.getLayout,a=e.getFilterSortParams,c=e.productCount,l=e.sortedProductCount,s=e.strings;return n.a.createElement("div",{className:"shop-top-bar mb-35"},n.a.createElement("div",{className:"select-shoing-wrap"},n.a.createElement("div",{className:"shop-select"},n.a.createElement("select",{onChange:function(e){return a("filterSort",e.target.value)}},n.a.createElement("option",{value:"default"},s.default),n.a.createElement("option",{value:"priceHighToLow"},s.price_high_low),n.a.createElement("option",{value:"priceLowToHigh"},s.price_low_high))),n.a.createElement("p",null,s.showing," ",l," ",s.of," ",c," ",s.result)),n.a.createElement("div",{className:"shop-tab"},n.a.createElement("button",{onClick:function(e){t("grid two-column"),Object(r.i)(e)}},n.a.createElement("i",{className:"fa fa-th-large"})),n.a.createElement("button",{onClick:function(e){t("grid three-column"),Object(r.i)(e)}},n.a.createElement("i",{className:"fa fa-th"})),n.a.createElement("button",{onClick:function(e){t("list"),Object(r.i)(e)}},n.a.createElement("i",{className:"fa fa-list-ul"}))))}));t.a=function(e){var t=e.getLayout,a=e.getFilterSortParams,r=e.productCount,l=e.sortedProductCount;return n.a.createElement(c.Fragment,null,n.a.createElement(s,{getLayout:t,getFilterSortParams:a,productCount:r,sortedProductCount:l}))}},562:function(e,t,a){"use strict";var c=a(0),n=a.n(c),r=a(543),l=a(69),s=Object(l.multilanguage)((function(e){return n.a.createElement("div",{className:"sidebar-widget"},n.a.createElement("h4",{className:"pro-sidebar-title"},e.search," "),n.a.createElement("div",{className:"pro-sidebar-search mb-50 mt-25"},n.a.createElement("form",{className:"pro-sidebar-search-form",action:"#"},n.a.createElement("input",{type:"text",placeholder:e.search_here}),n.a.createElement("button",null,n.a.createElement("i",{className:"pe-7s-search"})))))})),i=function(e){var t=e.categories,a=e.getSortParams,c=e.strings;return n.a.createElement("div",{className:"sidebar-widget"},n.a.createElement("h4",{className:"pro-sidebar-title"},c.categories," "),n.a.createElement("div",{className:"sidebar-widget-list mt-30"},t?n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("button",{onClick:function(e){a("category",""),Object(r.j)(e)}},n.a.createElement("span",{className:"checkmark"})," All Categories"))),t.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("button",{onClick:function(t){a("category",e),Object(r.j)(t)}}," ",n.a.createElement("span",{className:"checkmark"})," ",e," ")))}))):c.no_cats_found))},o=function(e){var t=e.colors,a=e.getSortParams,c=e.strings;return n.a.createElement("div",{className:"sidebar-widget mt-50"},n.a.createElement("h4",{className:"pro-sidebar-title"},c.color," "),n.a.createElement("div",{className:"sidebar-widget-list mt-20"},t?n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("button",{onClick:function(e){a("color",""),Object(r.j)(e)}},n.a.createElement("span",{className:"checkmark"})," ",c.all_colors," "))),t.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("button",{onClick:function(t){a("color",e),Object(r.j)(t)}},n.a.createElement("span",{className:"checkmark"})," ",e," ")))}))):c.no_colors_found))},m=function(e){var t=e.sizes,a=e.getSortParams,c=e.strings;return n.a.createElement("div",{className:"sidebar-widget mt-40"},n.a.createElement("h4",{className:"pro-sidebar-title"},c.size),n.a.createElement("div",{className:"sidebar-widget-list mt-20"},t?n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("button",{onClick:function(e){a("size",""),Object(r.j)(e)}},n.a.createElement("span",{className:"checkmark"})," ",c.all_sizes," "))),t.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("button",{className:"text-uppercase",onClick:function(t){a("size",e),Object(r.j)(t)}}," ",n.a.createElement("span",{className:"checkmark"}),e," ")))}))):c.no_sizes_found))},d=function(e){var t=e.tags,a=e.getSortParams,c=e.strings;return n.a.createElement("div",{className:"sidebar-widget mt-50"},n.a.createElement("h4",{className:"pro-sidebar-title"},c.tag," "),n.a.createElement("div",{className:"sidebar-widget-tag mt-25"},t?n.a.createElement("ul",null,t.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("button",{onClick:function(t){a("tag",e),Object(r.j)(t)}},e))}))):c.no_tags_found))};t.a=Object(l.multilanguage)((function(e){var t=e.products,a=e.getSortParams,c=e.sideSpaceClass,l=e.strings,u=Object(r.b)(t),p=Object(r.c)(t),E=Object(r.g)(t),b=Object(r.d)(t);return n.a.createElement("div",{className:"sidebar-style ".concat(c||"")},n.a.createElement(s,null),n.a.createElement(i,{categories:u,getSortParams:a,strings:l}),n.a.createElement(o,{colors:p,getSortParams:a,strings:l}),n.a.createElement(m,{sizes:E,getSortParams:a,strings:l}),n.a.createElement(d,{tags:b,getSortParams:a,strings:l}))}))}}]);
//# sourceMappingURL=22.2c03791f.chunk.js.map