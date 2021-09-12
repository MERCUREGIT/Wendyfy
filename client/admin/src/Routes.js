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
import PageNotFound from  './components/others/PageNotFound.vue'
import UserPage from  './components/others/UserPage.vue'
export default[
    {path : '/', component : Login},
    {path: '/products', component: Products},
    {path: '/products/New', component: NewProduct},
    {path: '/products/New2', component: NewProduct2},//the old route
    {path: '/products/Modification/:id', component: NewProduct},
    {path: '/products/Modification2/:id', component: ModifyProduct},
    {path: '/Measures', component: Measures},
    {path: '/Orders', component: Orders},
    {path: '/Clients', component: Clients},
    {path: '/Clients/mail', component: ClientMail},
    {path: '/Clients/mail/:id', component: ClientMail},
    {path: '/newsletter', component: Subscribers},
    {path: '/newsletter/mail', component: NsCreateMail},
    {path: '/newsletter/mail/:id', component: NsCreateMail},
    {path: '/contact', component: Contact},
    {path: '/Blog', component: Blog},
    {path: '/Blog/New', component: NewBlog},
    {path: '/Blog/Modification/:id', component: NewBlog},
    {path: '/Slider', component: Slider},
    {path: '/transactions', component: Accounting},
    {path: '/user-page', component: UserPage},
    {path: '/404', component: PageNotFound}
]
