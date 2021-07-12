<template>
  <div class="row tab-pane fade " id="mails" role="tabpanel" aria-labelledby="mails-tab">
    <sweet-modal ref="modal">

    </sweet-modal>
    <div v-if="loading"
         style="height:100vh;width:100vw;z-index:9999;display:flex;align-items:center;justify-content:center;top:0;bottom:0;left:0;right:0;position:fixed;background-color: rgba(255,255,255,0.8)">
      <sui-loader active centered inline size="medium" content="chargement..."/>
    </div>
    <div>
      <sui-card-group :items-per-row="4" stackable style="padding:10px;">
        <sui-card v-for="mail in mails" :key="mail._id">
          <sui-card-content>
            <sui-card-header style="display: flex;justify-content: space-between"><u>{{ mail.subject }}</u>
              <sui-icon name="trash" style="cursor: pointer" v-on:click="deleteMail(mail._id)"/>
            </sui-card-header>
            <sui-card-meta>Date:
              {{ mail.date.split("T").join(" ").split("Z")[0].split(".")[0].split(":").slice(0, 2).join(":") }}
            </sui-card-meta>
            <sui-card-description>
              Envoyé à: {{ mail.users.join(", ") }}
            </sui-card-description>
          </sui-card-content>
          <sui-button attached="bottom" v-on:click="goToMail(mail._id)">
            <sui-icon name="mail"/>
            Réutiliser le courrier
          </sui-button>
        </sui-card>
      </sui-card-group>
    </div>

  </div>
</template>

<script>
import Axios from 'axios';
import config from '../../config/address.js';
import {SweetModal} from 'sweet-modal-vue';
import Vue from "vue";

export default {
  name: "Mails",
  data() {
    return {
      mails: [],
      loading: true
    }
  },
  components: {
    'sweet-modal': SweetModal,
  },
  methods: {
    deleteMail: function ( id) {
      // console.log( id)
      this.loading = true;
      Axios.delete(`${config.server}/emails/${id}`, {headers: {...config.headers}}).then(() => {
        this.mails = this.mails.filter(mail => (mail._id !== id));
      }).catch((error) => {
        Vue.$toast.open({message: 'Erreur de connexion!', type: 'default'})
        console.log(error);
      }).finally(() => {
        this.loading = false;
      });
    },
    goToMail:function (id) {
      this.$router.push("/admin/Clients/mail/"+id)
    }
  },
  mounted() {
    // this.$refs.modal.open();
    Axios.get(`${config.server}/emails`, {headers: {...config.headers}}).then((response) => {
      this.mails = response.data.filter((m)=>{
        return !m.isNewsletter;
      });
    }).catch((error) => {
      Vue.$toast.open({message: 'Erreur de connexion!', type: 'default'})
      console.log(error);
    }).finally(() => {
      this.loading = false;
    });
  }
}
</script>

<style>

</style>
