<template>
    <div class="page height-full">
            <div class="container-fluid animatedParent animateOnce">
                <a class="navbar-brand">CORBEILLE</a>
                <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="orders-tab" data-bs-toggle="tab" href="#orders" role="tab" aria-controls="orders" aria-selected="true">Commandes</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="products-tab" data-bs-toggle="tab" href="#products" role="tab" aria-controls="products" aria-selected="false">Produits</a>
                    </li>
                </ul>
                <div class="tab-content my-3" id="myTabContent">
                    <Bin-products />
                    <Bin-orders />
                </div>
            </div>
    </div>
</template>

<script>
    import Bin_ordersVue from "./Bins/Bin_orders.vue"
    import Bin_productsVue from './Bins/Bin_products.vue'
    export default {
        name: "Bin",
        components:{
            'Bin-orders': Bin_ordersVue,
            'Bin-products': Bin_productsVue
        }
    }
</script>

<style>

</style>