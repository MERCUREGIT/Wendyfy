(this["webpackJsonpwendyf-ecommerce-front-end"]=this["webpackJsonpwendyf-ecommerce-front-end"]||[]).push([[37],{580:function(e,a,t){"use strict";t.r(a);var l,n=t(0),c=t.n(n),m=t(593),r=t.n(m),s=t(176),o=t(589),i=t(590),d=function(e){var a=e.comments;return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"blog-comment-wrapper mt-20"},c.a.createElement("div",{className:"single-comment-wrapper mt-15"},c.a.createElement("div",{className:"blog-comment-img"},c.a.createElement("img",{style:{width:100,height:100,borderRadius:50},src:"/assets/img/blog/comment-1.jpg",alt:""})),c.a.createElement("div",{className:"blog-comment-content"},c.a.createElement("h4",null," ",a.user),c.a.createElement("span",null,a.date," "),c.a.createElement("p",null,a.body)))))},E=t(127),u=t(48),g=t(100),p=t.n(g),b=function(e){var a=e.post,t=e.prevPost,l=e.nextPost,m=e.dontShowCover,r=void 0!==m&&m,s=e.strings,o=void 0===s?{}:s;return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"blog-details-top"},!r&&c.a.createElement("div",{className:"blog-details-img"},c.a.createElement("img",{style:{minWidth:"100%"},alt:"",src:"".concat(a.file)})),c.a.createElement("div",{className:"blog-details-content"},c.a.createElement("div",{className:"blog-meta-2"},c.a.createElement("ul",null,c.a.createElement("li",null,new Date(a.date).toLocaleString(o.lang)),c.a.createElement("li",null,c.a.createElement(E.b,{to:""+"/blog-details-standard/".concat(a._id)},a.comments.length," ",c.a.createElement("i",{className:"fa fa-comments-o"}))))),c.a.createElement("h3",null,a.subTitle),c.a.createElement("p",{dangerouslySetInnerHTML:{__html:a.body}}),c.a.createElement("blockquote",null,a.bodyQuote),c.a.createElement("p",null,a.body2))),c.a.createElement("div",{className:"dec-img-wrapper"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"dec-img mb-50"},c.a.createElement("img",{alt:"",src:u.a.server+"/".concat(a.file)}))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"dec-img mb-50"},c.a.createElement("img",{alt:"",src:u.a.server+"/".concat(a.file2)})))),c.a.createElement("p",null,a.body3)),c.a.createElement("div",{className:"tag-share"},c.a.createElement("div",{className:"dec-tag"},c.a.createElement("ul",null,a.category.map((function(e){return c.a.createElement("li",{key:p()()},c.a.createElement(E.b,{to:"/blog-standard"},e,","))})))),c.a.createElement("div",{className:"blog-share"},c.a.createElement("span",null,o.share," :"),c.a.createElement("div",{className:"share-social"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{className:"facebook",href:"https://www.facebook.com/sharer/sharer.php?u="+window.location.href},c.a.createElement("i",{className:"fa fa-facebook"}))),c.a.createElement("li",null,c.a.createElement("a",{className:"twitter",href:"https://twitter.com/intent/tweet?text="+window.location.href},c.a.createElement("i",{className:"fa fa-twitter"}))),c.a.createElement("li",null,c.a.createElement("a",{className:"instagram",href:"https://wa.me/?text="+window.location.href},c.a.createElement("i",{className:"fa fa-whatsapp"}))))))),c.a.createElement("div",{className:"next-previous-post"},t?c.a.createElement(E.b,{to:""+"/blog-details-standard/".concat(t._id)}," ",c.a.createElement("i",{className:"fa fa-angle-left"})," ",o.prev_post):c.a.createElement("span",null,"&nsbp;"),t?c.a.createElement(E.b,{to:""+"/blog-details-standard/".concat(l._id)},o.next_post," ",c.a.createElement("i",{className:"fa fa-angle-right"})):c.a.createElement("span",null,"&nsbp;")))},v=t(80),f=t(2),N=t(44),h=t(77),w=t(96),y=Object(h.connect)(null,(function(e){return{userCommentPost:function(a,t,l,n){return e(Object(w.c)(a,t,l,n))}}}))((function(e){var a=e.userCommentPost,t=e.blopPostId,l=Object(n.useState)({email:"",name:"",body:""}),m=Object(N.a)(l,2),r=m[0],s=m[1];function o(e){var a=e.target,t=a.name,l=a.value;s(Object(f.a)(Object(f.a)({},r),{},Object(v.a)({},t,l)))}return c.a.createElement("div",{className:"blog-reply-wrapper mt-50"},c.a.createElement("h4",{className:"blog-dec-title"},"post a comment"),c.a.createElement("form",{className:"blog-form",onSubmit:function(e){e.preventDefault(),a(r.name,r.email,r.body,t)}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"leave-form"},c.a.createElement("input",{type:"text",onChange:function(e){return o(e)},name:"name",placeholder:"Full Name"}))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"leave-form"},c.a.createElement("input",{type:"email",onChange:function(e){return o(e)},name:"email",placeholder:"Email Address "}))),c.a.createElement("div",{className:"col-md-12"},c.a.createElement("div",{className:"text-leave"},c.a.createElement("textarea",{placeholder:"Message",onChange:function(e){return o(e)},name:"body",defaultValue:""}),c.a.createElement("input",{type:"submit",defaultValue:"SEND MESSAGE"}))))))})),x=t(76);a.default=Object(h.connect)((function(e,a){var t=e.blog.filter((function(e){return a.match.params.id===e._id}))[0];return l=e.blog.indexOf(t),{allowComments:e.blog[l].allowComments,post:e.blog[l],next:e.blog[l+1]?e.blog[l+1]:e.blog[l],previous:e.blog[Math.abs(l-1)]}}),null)(Object(x.multilanguage)((function(e){var a=e.allowComments,t=e.location,l=(e.match,e.post),m=e.previous,E=e.next,u=e.strings,g=t.pathname;return c.a.createElement(n.Fragment,null,c.a.createElement(r.a,null,c.a.createElement("title",null,"WendyFy | Blog Post"),c.a.createElement("meta",{name:"description",content:"Blog post page of WendyFy react minimalist eCommerce template."})),c.a.createElement(s.BreadcrumbsItem,{to:"/"},"Home"),c.a.createElement(s.BreadcrumbsItem,{to:""+g},u.blog_post),c.a.createElement(o.a,{headerTop:"visible"},c.a.createElement(i.a,null),c.a.createElement("div",{style:{backgroundSize:"cover",backgroundPosition:"center",height:400,width:"100%",backgroundImage:"url('".concat(l.file,"')")}}),c.a.createElement("div",{className:"blog-area pt-100 pb-100"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row flex-row-reverse"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"blog-details-wrapper ml-20"},c.a.createElement(b,{strings:u,post:l,key:p()(),nextPost:E,prevPost:m,dontShowCover:!0}),"true"===a?c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 mt-50"},l.comments.slice(0,6).map((function(e){return c.a.createElement(d,{key:e._id,comments:e})}))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement(y,{blopPostId:l._id}))):"")))))))})))}}]);