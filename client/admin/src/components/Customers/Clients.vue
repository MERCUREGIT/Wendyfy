<template>
  <div>
    <Sidebar/>
    <Navbar/>
    <main class="col-sm-12 col-md-9 col-lg-10 px-md-4 offset-md-2">
      <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Clients</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <button type="button" class="btn btn-sm btn-outline-primary" v-on:click="newMail">
            <i class="fas fa-plus"></i>
            Nouveau Mail
          </button>
        </div>
      </div>
      <div class="modal fade" id="newMail" tabindex="-1" aria-labelledby="newSlider" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Envoyer un mail généralisé</h5>
            </div>
            <div class="modal-body">
              <div class="col-12 mb-3">
                <input placeholder="Entrez l'objet" v-model="subject" name="subject" class="form-control"
                       id="exampleFormControlTextarea1s" rows="3" required/>
              </div>
              <div class="col-12 mb-3">
                <textarea placeholder="Ecrivez votre mail ici" v-model="body" name="fullDescription"
                          class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
              </div>
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Fermer</button>
              <button @click="submit()" type="submit" class="offset-sm-1 btn btn-primary">Enregistrer</button>
            </div>
          </div>
        </div>
      </div>
      <div class="animatedParent animateOnce">
        <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <a class="nav-link active" id="clients-tab" data-bs-toggle="tab" href="#clients" role="tab"
               aria-controls="realized" aria-selected="true">Clients</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" id="mails-tab" data-bs-toggle="tab" href="#mails" role="tab" aria-controls="unrealized"
               aria-selected="false">Mails</a>
          </li>
        </ul>
        <div class="tab-content my-3" id="myTabContent">
          <List/>
          <Mails/>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios';
import config from '../../config/address.js';
import NavbarVue from '../Navigation/Navbar.vue';
import SidebarVue from '../Navigation/Sidebar.vue';
import ListVue from './List.vue';
import MailsVue from './Mails.vue';
export default {
  name: "Clients",
  data() {
    return {
      subject: "",
      body: "",
    }
  },
  mounted() {
  },
  components: {
    'Navbar': NavbarVue,
    'Sidebar': SidebarVue,
    'List': ListVue,
    'Mails': MailsVue,
  },
  methods: {
    newMail(){
      this.$router.push("/admin/Clients/mail");
    },
    submit() {
      let formdata = new FormData();
      formdata.append('subject', this.subject);
      formdata.append('body', this.body);
      axios.post(`${config.server}/emails`, formdata, {headers: {...config.headers}}).then(() => {
        this.$router.go();
      }).catch((error) => {
        console.log(error);
      })
    }
  }
};
</script>


<style>

</style>
