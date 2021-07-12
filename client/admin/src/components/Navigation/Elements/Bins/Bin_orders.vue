<template>
    <div>
        <div class="row tab-pane fade show active" id="orders" role="tabpanel" aria-labelledby="orders-tab">
        <div class="col-md-12">
            <div class="card r-0 shadow">
                <div class="table-responsive">
                    <form>
                        <div v-if="delivered_offers == undefined" class="alert alert-light">
                            <div class="d-flex align-items-center">
                                <strong>Aucune commande dans la corbeille</strong>
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
                                    <th>NOM CLIENT</th>
                                    <th>TELEPHONE</th>
                                    <th>EMAIL</th>
                                    <th>COMMANDE</th>
                                    <th>QUANTITE</th>
                                    <th>COULEUR</th>
                                    <th>TAILLE</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>

                            <tr v-bind:key="bin_order._id" v-for="(bin_order, key) in bin_orders">
                                <td>
                                    <div class="form-check">
                                        <input class="order_checkbox" type="checkbox" value="" :id="bin_order._id">
                                    </div>
                                </td>
                                <td>
                                    <strong>{{bin_order.name}}</strong>
                                </td>
                                <td>{{bin_order.phone}}</td>
                                <td>{{bin_order.email}}</td>
                                <td>{{bin_order.product_name}}</td>
                                <td>{{bin_order.quantity}}</td>
                                <td>{{bin_order.color}}</td>
                                <td>{{bin_order.size}}</td>
                                <td>
                                    <a @click="deleteOrdersFromBin(key, bin_order._id)" class="btn btn-danger mr-3 action-btn"><i class="icon-trash"></i></a>
                                    <a @click="removeOrdersFromBin(key, bin_order._id)" class="btn btn-dark mr-3 action-btn"><i class="icon-ban"></i></a>
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
        name: 'Bin_orders',
        data () {
            return{
                bin_orders: undefined
            }
        },
        mounted () {
            this.bin_orders = this.$store.getters.getBinOrders;
        },
        methods: {
            deleteOrdersFromBin(key){
                this.bin_orders.splice(key, 1);
                this.$store.commit('deleteOrdersFromBin', key);
            },
            removeOrdersFromBin(key){
                this.bin_orders.splice(key, 1);
                this.$store.commit('removeOrdersFromBin', key);
            },
            deleteOrders(){
                let checkboxes = document.querySelectorAll('input[class="order_checkbox"]:checked');
                checkboxes.forEach((checkbox)=>{
                    this.$store.commit("addOrderToBin", checkbox.getAttribute('id'))
                })
                document.querySelectorAll('input[class="order_checkbox"]:checked').forEach((checkbox)=>{checkbox.checked = false})
            }
        }
    }
</script>

<style>

</style>