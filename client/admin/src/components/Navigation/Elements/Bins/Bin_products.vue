<template>
    <div>
        <div class="row tab-pane fade show active" id="products" role="tabpanel" aria-labelledby="products-tab">
            <div class="col-md-12">
                <div class="card r-0 shadow">
                    <div class="table-responsive">
                        <form>
                            <div v-if="bin_products == undefined" class="alert alert-light">
                                <div class="d-flex align-items-center">
                                    <strong>Aucun produit dans la corbeille</strong>
                                </div>
                            </div>
                            <table v-else class="table table-striped table-hover r-0">
                                <thead>
                                    <tr class="no-b">
                                        <th>
                                            <div class="form-check"> 
                                                <button id="delete_button" class="btn btn-danger" @click="deleteAll()"><i class="icon-trash"></i></button>
                                            </div>
                                        </th>
                                        <th>ID</th>
                                        <th>NOM</th>
                                        <th>PRIX UNITAIRE</th>
                                        <th>QUANTITE</th>
                                        <th>IMAGE</th>
                                        <th>VENTES</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>

                                <tr v-bind:key="bin_product.id" v-for="(bin_product, key) in bin_products">
                                    <td>
                                        <div class="form-check">
                                            <input class="product_checkbox" type="checkbox" value="" :id="product.id">
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <div>
                                                <strong>{{bin_product.id}}</strong>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{{bin_product.name}}</td>
                                    <td>{{bin_product.price}}</td>
                                    <td>{{bin_product.quantity}}</td>
                                    <td><img src="" alt=""></td>   
                                    <td>{{bin_product.sales}}</td>   
                                    <td>
                                        <button class="btn btn-danger mr-3 action-btn" @click="deleteProductsFromBin(key, bin_product._id)"><i class="icon-trash"></i></button>
                                        <button class="btn btn-dark mr-3 action-btn" @click="removeProductsFromBin(key, bin_product._id)"><i class="icon-ban"></i></button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Bin_products',
        data () {
            return{
                bin_products: undefined
            }
        },
        mounted () {
            this.bin_products = this.$store.getters.getBinProducts;
        },
        methods: {
            deleteProductsFromBin(key){
                this.bin_products.splice(key, 1);
                this.$store.commit('removeProductFromBin', key);
            },
            deleteAll(){
                let checkboxes = document.querySelectorAll('input[class="product_checkbox"]:checked');
                checkboxes.forEach((checkbox)=>{
                    this.$store.commit("addProductToBin", checkbox.getAttribute('id'))
                })
                document.querySelectorAll('input[class="product_checkbox"]:checked').forEach((checkbox)=>{checkbox.checked = false})
            },
            removeProductsFromBin(key){
                this.bin_products.splice(key, 1);
                this.$store.commit('removeProductsFromBin', key);
            },
            deleteProducts(){
                let checkboxes = document.querySelectorAll('input[class="product_checkbox"]:checked');
                checkboxes.forEach((checkbox)=>{
                    this.$store.commit("addProductToBin", checkbox.getAttribute('id'))
                })
                document.querySelectorAll('input[class="product_checkbox"]:checked').forEach((checkbox)=>{checkbox.checked = false})
            }
        }
    }
</script>

<style>

</style>