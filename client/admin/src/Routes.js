import Login from './components/Login.vue';
import Products from './components/Products/Manager/Products.vue';
import NewProduct from './components/Products/Manager/Add_product.new.vue';
import NewProduct2 from './components/Products/Manager/Add_product.vue';
import ModifyProduct from './components/Products/Manager/Modify_product.vue';
import Measures from './components/Orders/Measures.vue';
import Orders from './components/Orders/Orders.vue';
import Clients from './components/Customers/Clients.vue';
import Subscribers from './components/Newsletter/Subscribers.vue';
import Contact from './components/Newsletter/Contact.vue';
import NsCreateMail from './components/Newsletter/NsCreateMail';
import ClientMail from './components/Customers/ClientsCreateMail';
import Blog from './components/Blog/Blog.vue';
import NewBlog from './components/Blog/Manage_blog/Add_blog.vue';
import Accounting from './components/Accounting/Accounting';
// import ModifyBlog from './components/Blog/Manage_blog/Modify_blog.vue';
import Slider from './components/Slider/Slider.vue'

export default[
    {path : '/', component : Login},
    {path: '/admin/products', component: Products},
    {path: '/admin/products/New', component: NewProduct},
    {path: '/admin/products/New2', component: NewProduct2},//the old route
    {path: '/admin/products/Modification/:id', component: NewProduct},
    {path: '/admin/products/Modification2/:id', component: ModifyProduct},
    {path: '/admin/Measures', component: Measures},
    {path: '/admin/Orders', component: Orders},
    {path: '/admin/Clients', component: Clients},
    {path: '/admin/Clients/mail', component: ClientMail},
    {path: '/admin/Clients/mail/:id', component: ClientMail},
    {path: '/admin/newsletter', component: Subscribers},
    {path: '/admin/newsletter/mail', component: NsCreateMail},
    {path: '/admin/newsletter/mail/:id', component: NsCreateMail},
    {path: '/admin/contact', component: Contact},
    {path: '/admin/Blog', component: Blog},
    {path: '/admin/Blog/New', component: NewBlog},
    {path: '/admin/Blog/Modification/:id', component: NewBlog},
    {path: '/admin/Slider', component: Slider},
    {path: '/admin/transactions', component: Accounting}
]
