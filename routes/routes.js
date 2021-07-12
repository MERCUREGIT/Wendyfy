
// load routes
const products = require('./Products/Products');
const ProductCategory = require('./Products/Admin/Details/Category');
const ProductTag = require('./Products/Admin/Details/Tags');
const ProductColor = require('./Products/Admin/Details/Colors');
const ProductSize = require('./Products/Admin/Details/Size');


const Blog = require('./Blog/Admin/Blog');
const BlogTag = require('./Blog/Tags');
const BlogCategory = require('./Blog/Category');


const Order = require('./Orders/Orders');
const SpecialOrder = require('./Orders/SpecialOrder');

const slider = require('./Slider/Slider');
const Authentication = require('./Authentication/User');

const Emails = require('./messaging/Emailer');
const NewsLetter = require('./messaging/NewsLetter');
const ClientMessage = require('./messaging/ClientMessage');


function routesMiddleware(app) {
    // #################### AUTHENTICATION ###############################
    app.use('/api/authentication', Authentication);

    // #################### PRODUCT ###############################
    app.use('/api/', products);
    app.use('/api/product-details/category', ProductCategory);
    app.use('/api/product-details/sizes', ProductSize);
    app.use('/api/product-details/tags', ProductTag);
    app.use('/api/product-details/colors', ProductColor);

    // #################### PRODUCT ORDERS ###############################
    app.use('/api/order', Order);
    app.use('/api/special-order', SpecialOrder);

    // #################### BLOG DETAILS ###############################
    app.use('/api/blog', Blog);
    app.use('/api/blog-details/tags', BlogTag);
    app.use('/api/blog-details/category', BlogCategory);

    // #################### FRONT END ###############################
    app.use('/api/slider', slider);

    app.use('/api/emails', Emails);
    app.use('/api/news-letter', NewsLetter);
    app.use('/api/contact', ClientMessage);
}

module.exports = routesMiddleware;