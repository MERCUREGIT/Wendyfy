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
                transactions.filter(transaction => transaction.completed).length
              }}
            </sui-statistic-value>
            <sui-statistic-label>Complet&eacute;e(s)</sui-statistic-label>
          </sui-statistic>
        </sui-segment>

        <sui-segment style="margin-left: 20px" color="red">
          <sui-statistic>
            <sui-statistic-value>{{
                transactions.filter(transaction => !transaction.completed).length
              }}
            </sui-statistic-value>
            <sui-statistic-label>Echou&eacute;e(s)</sui-statistic-label>
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
                <th>ID</th>
                <th>Commande</th>
                <th>Montant</th>
                <th>Date</th>
                <th>Utilisateur</th>
                <th>Etat</th>
              </tr>
              </thead>

              <tbody>

              <tr v-bind:key="transaction.id" v-for="transaction in transactions">
                <td>
                  {{ transaction._id }}
                </td>
                <td>Commande-{{ transaction.order._id }}</td>
                <td>{{ transaction.order.amount }} {{ transaction.order.currency }}</td>
                <td>{{ transaction.createdAt.split("T").join(" ").split(".")[0] }}</td>
                <td>{{ transaction.order.name }}</td>
                <td><strong>{{ transaction.completed ? 'Complet&eacute;' : 'Echou&eacute;' }}</strong></td>
              </tr>
              </tbody>
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
    'Sidebar': SidebarVue
  },
  mounted() {
    axios.get(`${config.server}/order/transactions/information/admin`, {headers: {...config.headers}}).then((response) => {
      this.transactions = response.data
      this.transactions_ref = response.data
      this.loadingData = false
    }).catch((error) => {
      toast("Erreur de connexion")
      this.loadingData = false
      console.log(error);
    })
  },
  methods: {
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
  }
}
</script>

<style>

</style>