<template>
  <div>
    <Sidebar/>
    <Navbar/>
    <main class="col-sm-12 col-md-9 col-lg-10 px-md-4 offset-md-2">
      <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Newsletter</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <button type="button" class="btn btn-sm btn-outline-primary" v-on:click="newMail">
            <i class="fas fa-plus"></i>
            Nouvelle diffusion
          </button>
        </div>
      </div>
      <div class="animatedParent animateOnce">
        <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <a class="nav-link active" id="clients-tab" data-bs-toggle="tab" href="#clients" role="tab"
               aria-controls="realized" aria-selected="true">Abonnés</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" id="mails-tab" data-bs-toggle="tab" href="#mails" role="tab" aria-controls="unrealized"
               aria-selected="false">Diffusions</a>
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
import ListVue from './NsList.vue';
import MailsVue from './NsMails.vue';
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
      this.$router.push("/admin/newsletter/mail");
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
