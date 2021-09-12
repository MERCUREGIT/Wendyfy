<template>
   <div>
    <Sidebar/>
    <Navbar/>
        <main class="container px-md-4 offset-md-2">
            <div class="row">
                <h1>Gestion des administrateur</h1>
                <hr>
                <div class="col-12 col-md-6  ">

                    <UserSingle :loggedInUser="loggedInUser" v-on:editAdmin="editAdminProfile" v-for="(user) in this.users" :key="user._id" :user="user" />
                </div>
                <div class="col-12 col-md-6 px-5">
                          <h2 class="text-center">Cree de nouveau administrateur</h2>
                          <div v-if="error!==''" class="alert alert-danger alert-dismissible fade show " role="alert">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                            {{error}}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    <form action="" method="post">
                         <div  class="mb-3">
                            <label for="name">Nom d'utilisateur</label>
                            <input  type="text" v-model="user.username" name="name" class="form-control form-control-lg" id="name"  placeholder="Entrée votre Nom">
                        </div>
                        <div class="mb-3">
                            <label for="email">Email d'utilisateur</label>
                            <input type="email" name="email" class="form-control form-control-lg" id="email" v-model="user.email" placeholder="Entrée votre adresse email">
                        </div>
                        <div v-if="!isEditAdmin" class="mb-3">
                            <label for="tel">Teléphone d'utilisateur</label>
                            <input type="number" name="tel" class="form-control form-control-lg" id="tel" v-model="user.telephone" placeholder="Entrée votre telephone">
                        </div>
                        <div class="mb-3">
                            <label for="password"> {{!isEditAdmin ? " Mot de passe" : " Nouveau mot de passe"}}</label>
                            <input type="password" name="password" class="form-control form-control-lg" v-model="user.password" id="password"  placeholder="Entrée votre mots de passe">
                        </div>
                        <button v-if="!isEditAdmin" @click="save" class="btn btn-primary m-2 col-4">
                           {{onProgress? "En cours": "Ajouter Admin"  }} 
                        </button>
                        <button v-if="isEditAdmin" @click="save" class="btn btn-primary m-2 col-4">
                          Modifier admin
                        </button>
                        <button @click="cancelProfileEdit" v-if="isEditAdmin" class="btn btn-danger m-2 col-4">
                            Annuler
                        </button>
                    </form>
                </div>
            </div>
        </main>
   </div>
</template>

<script>
import NavbarVue from '../Navigation/Navbar.vue';
import SidebarVue from '../Navigation/Sidebar.vue';
import UserSingle from './UserSingle.vue'
// import {toast} from "@/helpers/helpers";
// import {SweetModal} from "sweet-modal-vue";
// import {uuid} from "vue-uuid";
import axios from "axios";
import config from "@/config/address";
// import Vue from "vue";
// import "vue-swatches/dist/vue-swatches.css"
// import {isEmpty} from "../../helpers/helpers";
export default {
    name:'UserPage',
     components: {
    'Navbar': NavbarVue,
    'Sidebar': SidebarVue,
    'UserSingle':UserSingle
    // 'sweet-modal': SweetModal,
    // VSwatches
  },
  data() {
      return {
          users:[],
          loggedInUser:window.localStorage.getItem("username"),
          onProgress:false,
          error:'',
          isEditAdmin:false,
          user:{
              username:'',
              email:'',
              telephone:'',
              password:'',
              userRole:'admin'
          }
      }
  },
  mounted(){
      axios.get(config.server +"/authentication/admin-users", {headers:{...config.headers}} )
      .then(res=>{
          console.log(res.data)
          this.users = [...res.data]});
  },
  methods: {
      cancelProfileEdit(e){
        e.preventDefault();
        this.user={
              username:'',
              email:'',
              telephone:'',
              password:'',
              userRole:'admin'
          };
        this.isEditAdmin=false;
      },
      editAdminProfile(user){
        //   edit-admin
        this.isEditAdmin = true;
        this.user= {...user, password:''};
      },
      save(e){
        // if(isEmpty(this.user.username, this.user.password, this.user.email, this.user.telephone)){
        //     toast('User name')
        //     return;
        // }
        this.onProgress = true;
        e.preventDefault();
        if(!this.isEditAdmin){
        axios.post(config.server +"/authentication/sign-up",{...this.user}, {headers:{...config.headers}})
        .then(()=>{
        this.onProgress = false;
        this.$router.go();
        })
        .catch((err)=>{
            this.error = err.response.data ? err.response.data.err :  "Erreure !!!"
            this.onProgress = false;
        })
        }
        else{
        axios.post(config.server +"/authentication/user/edit/admin/"+this.user._id,{username:this.user.username, email:this.user.email, password:this.user.password}, {headers:{...config.headers}})
        .then(()=>{
        this.onProgress = false;
        this.$router.go();
        })
        .catch((err)=>{
            this.error =err.response.data ? err.response.data.err :  "Erreure !!!"
            this.onProgress = false;
        })
        }
     }
}
}
</script>

<style scoped>

</style>
