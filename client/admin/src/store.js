import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        bin: {
            "orders": [],
            "products": []
        },
        product_id: "",
        blog_id: ""
    },
    getters: {
        getBinLength(state){
            return state.bin.orders.length + state.bin.products.length;
        },
        getBinOrders(state){
            return state.bin.orders;
        },
        getBinProducts(state){
            return state.bin.products;
        }
    },
    mutations: {
        initialiseStore() {
            if (localStorage.getItem('bin_order')) {
                // state.bin = localStorage.getItem("bin_order");
            }
        },
        addProductToBin(state, product) {
            state.bin.products.push(product);
            // localStorage.setItem('bin_order', state.bin);
        },
        addOrderToBin(state, order) {
            state.bin.order.push(order);
            // localStorage.setItem('bin_order', state.bin);
        },
        removeProductFromBin(state, id){
            state.bin.products.splice(id, 1);
        },
        removeOrderFromBin(state, id){
            state.bin.orders.splice(id, 1);
            // localStorage.setItem('bin_order', state.bin.orders);
        },
        deleteOrdersFromBin(state, id){
            state.bin.orders.splice(id, 1);
        },
        deleteProductsFromBin(state, id){
            state.bin.orders.splice(id, 1);
        },
        setProductId(state, id){
            localStorage.setItem('product_id', id);
        },
        setBlogId(state, id){
            localStorage.setItem('blog_id', id);
        }
    }
})