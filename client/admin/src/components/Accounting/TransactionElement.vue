<template>
    <tbody :style="[this.showingDetails ? {backgroundColor:'white'}:{}] "  >
      <tr>
                <td colspan ="1" v-if="this.transaction.signature" >{{ this.transaction.signature }}</td>
                <td colspan = "1">  {{ this.transaction.cpm_amount }} {{ this.transaction.cpm_currency }}</td>
                <td> {{ this.transaction.created_at | moment }}</td>
                <td><strong> <button :class=" [transaction.orderInfo.deliveryStatus ? 'btn btn-primary' : 'btn btn-danger'] " @click="()=> changeDeliverStatus(transaction.orderInfo, index) ">
                   {{ transaction.orderInfo.deliveryStatus ? 'Livrée ☑' : 'Non-Livrée ☒' }}
                 </button></strong></td>
                <td v-if="transaction" @click="()=> showOrderDetails() " ><p>☰ Détails ⛛ </p>
                 <!-- <div v-bind:key="order._id" v-for="order in this.transaction.orderInfo.products">
                    
                 </div> -->
                </td>
      </tr>
      <tr v-if="showingDetails ">
        <td colspan=5>
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-5">
              <h2> Information sur l'acheteur </h2>
              <p><strong> Nom d'acheteur  :</strong>  {{this.filteredOrderList.user.buyer_name}} <p/>
              <p><strong> compte d'achat  :</strong>  {{this.filteredOrderList.user.name}} <p/>
              <p><strong> Numero de telephone :</strong>  {{this.filteredOrderList.user.cel_phone_num}} <p/>
              <p><strong> Ville :</strong>  {{this.filteredOrderList.user.city}} <p/>
              <p><strong> Pays :</strong>  {{this.filteredOrderList.user.country}} <p/>
              <p><strong> Etat de livraison:</strong> {{ transaction.orderInfo.deliveryStatus ? 'Livrée' : 'Non-Livrée' }}
                <p/>
            </div>
            <div class="col-12 col-md-7">
                <h1> Information produits </h1>
                
              
              <div :key="index" v-for="(element, index) in this.filteredOrderList.orderInfo" class="row">
                <div class="col-12 col-md-5">
                    <h2>{{index + 1}}. {{element.productInfo.name}} </h2>
                    <img style="max-width:100%" :src=" element.productInfo.image" />
                </div>
                <div class="col-7" >
                 <h1>Variation commander</h1>
                  <div :key="variation._id" v-for="variation in element.order" class="row border">
                    <div class="col-5">
                      <p>Quantité :  {{variation.sizeStock}} </p>
                      <p> #ID :  {{variation._id}}</p>
                      <p>Taille :  {{variation.sizeName}}</p>
                      <p>Couleur :  {{variation.color}}</p>
                    </div>
                    <div class="col-7">
                      <img style="max-width:100%" :src="  variation.image" />
                    </div>
                  </div>
               </div>
              </div>
            </div>
          </div>          
        </div>
       </td>
      </tr>
    </tbody>
</template>
<script>

import moment from 'moment';
import axios from 'axios';
import config from '../../config/address.js';
import {toast} from "../../helpers/helpers";

export default {
  name: "TransactionElement",
  props: ['transaction', 'index'],
  data() {
    return {
      filteredOrderList:{},
      showingDetails: false,
      test: [],
      transactions: [],
      loadingData: true,
      searchString: "",
      base_url:config.server,
      transactions_ref: []
    }
  },
  mounted(){
    this.transaction.orderInfo.products.forEach(el => {
      this.filterOrder(el.productRef, el.productVariation, this.transaction);
    });
  },
  methods: {
    moment: function () {
        return moment();
      },
    filterOrder(productReference={}, orderVariations, transaction ){

        let orderVariationsList= [...orderVariations];
        orderVariations.forEach((element, index) => {
           productReference.variation.filter((value)=>{
               if(value.color === element.color){
                   orderVariationsList[index].image = value.image;
                   return true;
               }
                return false;
            });
        });

        const productInfo = {}
        productInfo.image = productReference.image[0];
        productInfo.name = productReference.name;

        const user = {};
        user.buyer_name = transaction.buyer_name;
        user.name = transaction.orderInfo.name;
        user.cel_phone_num = transaction.cel_phone_num;
        user.city = transaction.orderInfo.city;
        user.country = transaction.orderInfo.country;
        user.deliveryStatus = transaction.orderInfo.deliveryStatus;

        let orderData = {order:[...orderVariationsList], productInfo}

          
         
        Array.isArray(this.filteredOrderList.orderInfo) ? (()=>{
          let isPresent = false;
          this.filteredOrderList.orderInfo.forEach((el, index)=>{
            if(el.productInfo.name === orderData.productInfo.name){
              this.filteredOrderList.orderInfo[index].order.push(...orderData.order)
              isPresent = true;
            }
           
          })
          if(!isPresent){
               this.filteredOrderList.orderInfo.push(orderData)
            }
        } )()  : this.filteredOrderList.orderInfo = [orderData];
        this.filteredOrderList.user = user;

        // this.filteredOrderList =  {orderInfo:[orderData], user};
    },
    showOrderDetails(){
      console.log("Order info data :" ,this.filteredOrderList.orderInfo)
      this.showingDetails = !this.showingDetails;
    },
    changeDeliverStatus(order, index)  {
       axios.patch(`${config.server}/order/delivery-status/${order._id}`,  { isDelivered: order.deliveryStatus }, {headers: {...config.headers}})
       .then(() => {
        //  update the state
            this.$emit('change-deliver-status',{order: {...order} ,  index:index.index});            
         })
       .catch((error) => {
      toast("Erreur de connexion")
      this.loadingData = false
      console.log(error);
    })
    },
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