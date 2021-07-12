<template>
  <div class="row tab-pane fade" id="delivered" role="tabpanel" aria-labelledby="delivered-tab">
    <div class="col-md-12"><div v-if="loadingData"
                                style="height:100vh;width:100vw;z-index:9999;display:flex;align-items:center;justify-content:center;top:0;bottom:0;left:0;right:0;position:fixed;background-color: rgba(255,255,255,0.8)">
      <sui-loader active centered inline size="medium" content="chargement..."/>
    </div>
      <sweet-modal ref="modal1" blocking>
        <h3>Information sur la commande</h3>
        <div v-if="order._id">
          <strong>
            Commande
          </strong>
          <table style="width: 100%;" class="table table-bordered">
            <tr>
              <td><strong>Utilisateur:</strong></td>
              <td>{{ order.name }}</td>
            </tr>
            <tr>

              <td><strong>Email:</strong></td>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr>
              <td><strong>Pass&eacute;e le:</strong></td>
              <td>{{ order.date.split("T").join(" ").split(".")[0] }}</td>
            </tr>
            <tr>

              <td><strong>Montant:</strong></td>
              <td>{{ order.amount }} {{order.currency}} <span v-if="order.isPayed" style="color:green">PAY&Eacute; le {{order.paymentStatus.createdAt.split("T").join(" ").split(".")[0]}}</span><span v-else style="color:red">PAS PAY&Eacute;</span></td>
            </tr>
          </table>
          <strong>
            Produits
          </strong>
          <table style="width: 100%;" class="table table-bordered" v-for="product in order.products" v-bind:key="product.productRef._id">

            <tr>
              <td rowspan="5">
                <img :src="product.productRef.image[0]" height="150">
              </td>
              <td>{{ product.productRef.name }} (x{{product.productVariation[0].sizeStock}})</td>
            </tr>
            <tr>
              <td><strong>Couleur: </strong>{{ product.productVariation[0].color }}</td>
            </tr>
            <tr>
              <td><strong>Taille: </strong>{{ product.productVariation[0].sizeName }}</td>
            </tr>
<!--            <tr>
              <td><strong>Prix (x{{product.productVariation[0].sizeStock}}): </strong>{{ product.productVariation[0].price }} {{order.currency}}</td>
            </tr>-->
          </table>


        </div>
        <sui-button content="Fermer" color="black" v-on:click="close"
                    class="mt-3 float-end mb-4"></sui-button>
      </sweet-modal>

      <div class="card r-0 shadow" style="padding:2%">
        <div class="">
          <form>
            <div v-if="delivered_orders == undefined" class="alert alert-light">
              <div class="d-flex align-items-center">
                <strong>Chargement des commandes livrées...</strong>
                <div class="spinner-border spinner-border-sm ms-auto" role="status" aria-hidden="true"></div>
              </div>
            </div>
            <sui-input v-model="searchString"  name="title" type="text" id="createColorName" placeholder="Rechercher..."
                       class="float-end"  @input="onSearch"/>
            <table class="table table-striped table-hover r-0">
              <thead>
              <tr class="no-b">
                <th>ID</th>
                <th>NOM CLIENT</th>
                <th>PAYS</th>
                <th>VILLE</th>
                <th>EMAIL</th>
                <th>MONTANT</th>
                <th>DATE</th>
                <th>ACTION</th>
              </tr>
              </thead>

              <tbody>

              <tr v-bind:key="delivered_order.id" v-for="delivered_order in orders">
                <td>
                  Commande-{{ delivered_order._id }}
                </td><td>
                  {{ delivered_order.name }}
                </td>
                <td>{{ delivered_order.country }}</td>
                <td>{{ delivered_order.city }}</td>
                <td>{{ delivered_order.user.email }}</td>
                <td>{{ delivered_order.amount }} {{ delivered_order.currency }}</td>
                <td>{{ delivered_order.date.split("T").join(" ").split(".")[0] }}</td>
                <!--                <td>{{ delivered_order.product.productRef.name }}</td>
                                <td>{{ delivered_order.product.productVariation[0].sizeStock }}</td>
                                <td>{{ delivered_order.product.productVariation[0].color }}</td>
                                <td>{{ delivered_order.product.productVariation[0].sizeName }}</td>-->
                <td>
                  <a @click="editOrderStatus(delivered_order._id)" class="btn btn-danger mr-3 action-btn"><i
                      class="fas fa-ban"></i></a>
                  <a @click="openModal(delivered_order)" style="margin-left: 10px;"
                     class="btn btn-dark white-text ml-3 action-btn"><i
                      class="fas fa-eye"></i></a>
                </td>
              </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import config from '../../../config/address'
import {SweetModal} from "sweet-modal-vue";
import {toast} from "../../../helpers/helpers";
// import DataTables from "@/components/ Misc/DataTables";

export default {
  name: "Delivered",
  components: {
    // 'Dt': DataTables
    'sweet-modal': SweetModal
  },
  data() {
    return {
      delivered_orders: [],
      headers: ['NOM CLIENT', 'TELEPHONE', 'EMAIL', 'COMMANDE'/*,'COULEUR','TAILLE'*/, 'ACTION'],
      elements: [],
      order: {},
      searchString:"",
      orders:[]
    }
  },
  mounted() {
    axios.get(`${config.server}/order/false`).then((response) => {
      this.delivered_orders = response.data;
      this.orders = response.data;this.loadingData=false;
    }).catch((error) => {
      toast("Erreur de connexion")
      console.log(error);
    })
  },
  methods: {
    editOrderStatus(id) {
      axios.patch(`${config.server}/order/true/${id}`, {id: id}, {headers: {...config.headers}}).then(() => {

        this.$router.go();
      }).catch((error) => {
        console.log(error);
      })
    },
    openModal(order) {
      this.order = order;
      this.$refs.modal1.open();
    },
    close(){

      this.$refs.modal1.close();
    },
    onSearch() {

      if (!this.searchString) {
        this.orders = this.delivered_orders;
        return;
      }
      this.orders = this.delivered_orders.filter((order) => {
        if (
            (order._id.includes(this.searchString)) ||
            (order.user && order.user.email.includes(this.searchString)) ||
            (order.name && order.name.includes(this.searchString)) ||
            (order.date && order.date.split("T").join(" ").split(".")[0].includes(this.searchString)) ||
            (order.amount && (order.amount + " "+order.currency).toString().includes(this.searchString)) ||
            (order.country && order.country.includes(this.searchString)) ||
            (order.city && order.city.includes(this.searchString))
        ) {
          return true;
        }
        return false
      })
    }
  }
}
</script>

<style>

</style>
