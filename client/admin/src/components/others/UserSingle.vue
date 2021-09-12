<template>
    <div class="row user-single alert alert-primary">
        <div class="col-8">
           Nom du compte :  <h3>  {{this.user.username}} </h3>
           <hr>
            <!-- <p>Role: {{this.user.userRole}} </p> -->
            <p>Email: {{this.user.email}} </p>
            <p>Telephone: {{this.user.telephone}}</p>
        </div>
        <div class="col-2">
            <button v-if="this.loggedInUser !== this.user.username" @click="openUserDeleteModal" class="btn btn-danger"><i class="fa fa-trash"></i></button>
        </div>
        <div class="col-2">
            <button @click="()=> editAdmin(this.user)" class="btn btn-warning"><i class="fas fa-edit"></i></button>
        </div>

    <sweet-modal ref="modal4" blocking>
      <h3>Est vous sur de vouloir suprimer cette utilisateur</h3>
      <sui-button @click="()=> deleteAdmin(this.user._id)" content="Suprimer" color="red" class="mt-3 float-end mb-4"></sui-button>
      <sui-button @click="closeUserDeleteModal" content="Annuler" color="black"  class="mt-3 float-end mb-4"></sui-button>
    </sweet-modal>
    </div>
</template>

<script>
import {SweetModal} from "sweet-modal-vue";
import axios from 'axios';
import {toast} from "@/helpers/helpers";
import config from "@/config/address";

export default {
    name: 'UserSingle',
    components: {
       "sweet-modal": SweetModal
    },
    props: {user:Object,loggedInUser:String},
    date(){
        return{
            
            creating: false,
        }
    },
    methods:{
    editAdmin(user){
        console.log()
        this.$emit('editAdmin', user)
    },
    deleteAdmin(userId){
         this.closeUserDeleteModal();
         axios.delete(`${config.server}/authentication/admin-users/${userId}`, {headers: {...config.headers}})
         .then(() => {
                this.$router.go();
                toast("supression completee");
              }).catch(() => {
                toast("Erreur de connexion")
              });
    },
    openUserDeleteModal() {
      this.$refs.modal4.open()
    },
    closeUserDeleteModal() {
      this.$refs.modal4.close()
    },
    }
}
</script>

<style scoped>

    .btn {
    /* Blue background */
    border: none; /* Remove borders */
    color: white; /* White text */
    padding: 12px 16px; /* Some padding */
    font-size: 16px; /* Set a font size */
    cursor: pointer; /* Mouse pointer on hover */
    margin: 2px;
    }

    /* Darker background on mouse-over */
    /* .btn:hover {
    background-color: RoyalBlue;
    } */
</style>
