<template>
  <div>
    <Sidebar/>
    <Navbar/>
    <div v-if="loading" style="height:100vh;width:100vw;z-index:9999;display:flex;align-items:center;justify-content:center;top:0;bottom:0;left:0;right:0;position:fixed;background-color: rgba(255,255,255,0.8)">
      <sui-loader active centered inline  size="medium" content="chargement..."/>
    </div>
    <main class="col-sm-12 col-md-9 col-lg-10 px-md-4 offset-md-2">
      <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Contact</h1>
      </div>
      <sui-accordion exclusive styled class="mt-2" v-for="contact in contacts" :key="contact._id">
        <sui-accordion-title active>
          <sui-icon name="dropdown" />
          {{ contact.name }}
        </sui-accordion-title>
        <sui-accordion-content >
          <h6>{{contact.subject}}</h6>
          <p>
            {{
              contact.body
            }}
          </p>
          <small>
            <a :href="'mailto:'+contact.email">{{contact.email}}</a><br/>
            <span style="opacity: 0.5">{{contact.date.split("T").join(" ").split(".")[0]}}</span>
          </small>
        </sui-accordion-content>
      </sui-accordion>

    </main>
  </div>
</template>

<script>
import axios from 'axios';
import config from '../../config/address.js';
import NavbarVue from '../Navigation/Navbar.vue';
import SidebarVue from '../Navigation/Sidebar.vue';
import Vue from "vue";
export default {
  name: "Contact",
  data() {
    return {
     contacts:[]
    }
  },
  mounted() {
    axios.get(`${config.server}/contact`, {headers: {...config.headers}}).then((response) => {
      this.contacts = response.data.reverse();
      // this.elements=this.
      console.log(response.data);
    }).catch((error) => {
      Vue.$toast.open({message: 'Erreur de connexion!', type: 'default'})
      console.log(error);
    }).finally(()=>{
      this.loading=false
    })
  },
  components: {
    'Navbar': NavbarVue,
    'Sidebar': SidebarVue,
  },
  methods: {

  }
};
</script>


<style>

</style>
