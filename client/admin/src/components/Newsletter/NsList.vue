<template>
  <div class="row tab-pane fade show active" id="clients" role="tabpanel" aria-labelledby="clients-tab">
    <div v-if="loading" style="height:100vh;width:100vw;z-index:9999;display:flex;align-items:center;justify-content:center;top:0;bottom:0;left:0;right:0;position:fixed;background-color: rgba(255,255,255,0.8)">
      <sui-loader active centered inline  size="medium" content="chargement..."/>
    </div>
    <div class="table-responsive">
      <div v-if="clients == undefined" class="alert alert-light">
        <div class="d-flex align-items-center">
          <strong class="text-success">Chargement de la liste des clients...</strong>
          <div class="text-success spinner-border spinner-border-sm ms-auto" role="status" aria-hidden="true"></div>
        </div>
      </div>
      <Dt :headers="headers" :elements="elements" ></Dt>
      <!--                                        <table v-else class="table table-striped table-hover r-0">
                                                  <thead>
                                                      <tr class="no-b">
                                                          <th>NOM CLIENTS</th>
                                                          <th>TELEPHONE</th>
                                                          <th>EMAIL</th>
                                                          &lt;!&ndash; <th>VILLE</th>
                                                          <th>PAYS</th> &ndash;&gt;
                                                      </tr>
                                                  </thead>

                                                  <tbody>

                                                  <tr v-bind:key="client.id_client" v-for="client in clients">
                                                      <td>
                                                          <div class="avatar avatar-md mr-3 mt-1 float-left">
                                                              <span class="avatar-letter avatar-letter-v  avatar-md circle"></span>
                                                          </div>
                                                          <div>
                                                              <div>
                                                                  <strong>{{client.username}}</strong>
                                                              </div>
                                                          </div>
                                                      </td>
                                                      <td>{{client.telephone}}</td>
                                                      <td>{{client.email}}</td>
                                                      &lt;!&ndash; <td>{{client.city}}</td>
                                                      <td>{{client.country}}</td> &ndash;&gt;
                                                  </tr>
                                                  </tbody>
                                              </table>-->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import config from '../../config/address.js';
import DataTables from "@/components/ Misc/DataTables";
import Vue from "vue";
import {toast} from "@/helpers/helpers";

export default {
  name: 'List',
  components: {
    'Dt':DataTables
  },
  data() {
    return {
      clients: [],
      headers:['Email','Actions'],
      elements:[],
      loading:true
    }
  },
  methods:{
    deleteSubscriber(id,email){
      this.loading=true;
      axios.delete(`${config.server}/news-letter/${id}`, {headers: {...config.headers}}).then(() => {
        this.elements = this.elements.filter(client=>client.email!==email);
        toast("Suppression terminée")
      }).catch((error) => {
        Vue.$toast.open({message: 'Erreur de connexion!', type: 'default'})
        console.log(error);
      }).finally(()=>{
        this.loading=false
      })
    }
  },
  mounted() {
    axios.get(`${config.server}/news-letter`, {headers: {...config.headers}}).then((response) => {
      this.clients = response.data;
      this.elements=this.clients.map(client=>{
        return{
          email:client.email,
          action:{
            name:'Supprimer',
            onClick: ()=>{
              this.deleteSubscriber(client._id,client.email)
            }
          }
        }
      })
      console.log(response.data);
    }).catch((error) => {
      Vue.$toast.open({message: 'Erreur de connexion!', type: 'default'})
      console.log(error);
    }).finally(()=>{
      this.loading=false
    })
  }
}
</script>

<style>

</style>
