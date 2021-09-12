<template>
  <div class="container-fluid" id="side-bar-menu">
            <div class="row">
                <nav id="sidebarMenu" class="col-sm-3 col-lg-2 d-md-block bg-light sidebar collapse" style="padding-right: 0">
                    <div class="position-sticky pt-3">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <router-link class="nav-link" to="/products">
                                    <span><i class="fas fa-shopping-cart"></i></span>
                                    Produits
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link active-class="active" class="nav-link" to="/products/new">
                                    <span><i class="fas fa-plus"></i></span>
                                    Nouveau produit
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/Measures">
                                    <span><i class="fas fa-pencil-ruler"></i></span>
                                    Mesures
                                </router-link>
                            </li>
                            <!-- <li class="nav-item">
                                <router-link class="nav-link" to="/Orders">
                                    <span><i class="fas fa-file"></i></span>
                                    Commandes
                                </router-link>
                            </li> -->
                            <li class="nav-item">
                                <router-link class="nav-link" to="/Clients">
                                    <span><i class="fas fa-users"></i></span>
                                    Clients
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/Blog">
                                <span><i class="fas fa-th-large"></i></span>
                                    Blog
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/newsletter">
                                    <span><i class="fas fa-pager"></i></span>
                                    Newsletter
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/contact">
                                    <span><i class="fas fa-user-circle"></i></span>
                                    Contact
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/Slider">
                                    <span><i class="fas fa-pager"></i></span>
                                    Bannière
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/transactions">
                                    <span><i class="fas fa-file"></i></span>
                                    Transactions / commandes
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/user-page">
                                    <span><i class="fas fa-user"></i></span>
                                    Utilisateur
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <span class="logout nav-link" @click="logout">
                                    <span><i class="fas fa-sign-out-alt"></i></span>
                                    {{logoutText}}
                                </span>
                            </li>
                        </ul>

                    </div>
                </nav>
                <div class="modal fade" id="changeLogo" tabindex="-1" aria-labelledby="changeLogo" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Changer le logo</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form action="192.168.100.6:3000/logo" method="post" enctype="multipart/form-data">
                                    <div class="mb-3">
                                        <label for="formFile" class="form-label">Logo</label>
                                        <input class="form-control" name="image" type="file" id="formFile">
                                    </div>
                                    <div class="d-grid gap-2 d-md">
                                        <button type="button" class="btn btn-primary btn-block">Confirmer</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
 import config from '../../config/address';
 import Axios from 'axios';


    export default {
        name: 'Sidebar',
        data(){
            return {
                logoutText:"Deconexion",

            }},

        methods:{
        logout(){
            this.logoutText = "Deconnexion en cour...";
            Axios.delete(`${config.server}/authentication/logout`).then(()=>{
                this.$router.push("/");
                window.localStorage.removeItem("isAdmin");
            }).catch(async ()=>{
                this.logoutText = "Echec fatal...";
               await setTimeout(()=>{
                   this.logoutText = "Deconnexion";
                }, 3000)


            })
        }
    },

    }
</script>

<style>
    .logout{
        border: none;
        cursor: pointer;
    }
    #side-bar-menu i{
      margin-left: 10px;
      margin-right: 10px;
    }
    #side-bar-menu ul {
      margin-left: -11px;
    }
    #side-bar-menu .nav-link{
      padding:10px;
      color: black;
    }
    #side-bar-menu .nav-link.active {
      border-right: 4px solid #FFC700;
    }
    #side-bar-menu .nav-link:hover {
      border-right: 4px solid #FFC700;
    }
    #side-bar-menu i{

    }

</style>

