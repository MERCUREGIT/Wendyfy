<template>
  <div>
    <Sidebar/>
    <Navbar/>
    <main class="col-sm-12 col-md-9 col-lg-10 px-md-4 offset-md-2">
      <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Transactions</h1>
      </div>
      <div v-if="loadingData"
           style="height:100vh;width:100vw;z-index:9999;display:flex;align-items:center;justify-content:center;top:0;bottom:0;left:0;right:0;position:fixed;background-color: rgba(255,255,255,0.8)">
        <sui-loader active centered inline size="medium" content="chargement..."/>
      </div>
      <div style="display:flex;margin-bottom:10px">

        <sui-segment color="green">
          <sui-statistic>
            <sui-statistic-value>{{
                transactions.filter(transaction => transaction.orderInfo.deliveryStatus).length
              }}
            </sui-statistic-value>
            <sui-statistic-label>Complet&eacute;e(s)</sui-statistic-label>
          </sui-statistic>
        </sui-segment>

        <sui-segment style="margin-left: 20px" color="red">
          <sui-statistic>
            <sui-statistic-value>{{
                transactions.filter(transaction => !transaction.orderInfo.deliveryStatus).length
              }}
            </sui-statistic-value>
            <sui-statistic-label>Non-Livrée(s)</sui-statistic-label>
          </sui-statistic>
        </sui-segment>
      </div>
      <div class="card r-0 shadow" style="padding: 2%">
        <div class="">
          <div>
            <sui-input v-model="searchString" name="title" type="text" id="createColorName" placeholder="Rechercher..."
                       class="float-end" @input="onSearch"/>
            <table class="table table-striped table-hover r-0">
              <thead>
                <tr class="no-b">
                  <th>Commande #ID</th>
                  <th>Montant</th>
                  <th>Date</th>
                  <th>Etat</th>
                  <th>Actions</th>
                </tr>
              </thead>
                <TransactionElement v-on:change-deliver-status = "changeDeliverStatus" v-bind:key="transaction._id" :transaction = {...transaction} :index ={index}  v-for="(transaction,index) in this.transactions" :order= {...transaction.orderInfo} />
            </table>
          </div>
        </div>
      </div>
    </main>


  </div>
</template>

<script>
import axios from 'axios'
import config from '../../config/address.js'
import NavbarVue from '../Navigation/Navbar.vue';
import SidebarVue from '../Navigation/Sidebar.vue';
import {toast} from "../../helpers/helpers";
import TransactionElement from  './TransactionElement.vue'
import moment from 'moment';
export default {
  name: "Measures",
  data() {
    return {
      transactions: [],
      loadingData: true,
      searchString: "",
      transactions_ref: []
    }
  },
  components: {
    'Navbar': NavbarVue,
    'Sidebar': SidebarVue,
    'TransactionElement':TransactionElement
  },
  mounted() {
    // axios.post('https://api.cinetpay.com/v1/?method=getCompteStatus', {apikey: '8936433616017f33cc7a2b9.78720038', cpm_site_id: 302789},)
    // .then((response) =>{
    //   console.log("solde boutique",response);
    // })
    // .catch(err=>{
    //   console.log("Error message", err.message)
    // })
    axios.get(`${config.server}/order/transactions/information/admin`, {headers: {...config.headers}}).then((response) => {
      console.log(response.data);
      this.transactions = [...response.data];
      this.transactions.sort(function(x, y) {
        // false values first
        return (x.orderInfo.deliveryStatus === y.orderInfo.deliveryStatus )? 0 : x.orderInfo.deliveryStatus ? 1 : -1;
        // true values first
        // return (x === y)? 0 : x? -1 : 1;
    });
      this.transactions_ref = response.data;
      this.loadingData = false
    }).catch((error) => {
      toast("Erreur de connexion")
      this.loadingData = false
      console.log(error);
    })
  },
  methods: {
    changeDeliverStatus(payload)  {
            let newTransactions = [...this.transactions];
            newTransactions[payload.index].deliveryStatus = !payload.order.deliveryStatus ;
            this.transactions =[...newTransactions];
            this.$router.go();
            toast("Statut modifier avec succes");
    },
    moment: function () {
        return moment();
      },
    onSearch() {
      if (!this.searchString) {
        this.transactions = this.transactions_ref;
        return;
      }
      this.transactions = this.transactions_ref.filter((transaction) => {
        if (
            (transaction._id.toLowerCase().includes(this.searchString.toLowerCase())) ||
            (transaction.order._id.toLowerCase().includes(this.searchString.toLowerCase())) ||
            (transaction.order.name.toLowerCase().includes(this.searchString.toLowerCase())) ||
            (transaction.createdAt.toLowerCase().split("T").join(" ").split(".")[0].includes(this.searchString.toLowerCase())) ||
            ((transaction.amount + " " + transaction.order.currency).toString().includes(this.searchString.toLowerCase()))
        ) {
          return true;
        }
        return false
      })
    }
  },
  filters: {
  moment: function (date) {
    return moment(date).format('MMMM Do YYYY, h:mm a');
  }
}
}
</script>

<style>

</style>