<template>
    <div>
        <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#changeLogo" data-bs-toggle="modal">
                <img src="../assets/img/qqq-01.png" alt="" width="45" height="40" class="d-inline-block">
                Wendy-Admin
            </a>
            <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
           
            <!-- <ul class="nav">
                <li class="nav-item">
                    <a class="nav-link"><i class="fas fa-comment-alt"></i> <span class="badge bg-danger text-light rounded-pill">4</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"><i class="far fa-bell"></i> <span class="badge bg-success text-light rounded-pill">4</span></a>
                </li>
                <li class="nav-item dropdown">
                    <a @click="component='Bin'" class="nav-link" role="button" id="dropdownBin" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-trash-alt"></i> <span class="badge bg-warning text-light rounded-pill">{{this.$store.getters.getBinLength}}</span></a>
                </li>
            </ul> -->
        </header>
        <div class="container-fluid">
            <div class="row">
                <nav id="sidebarMenu" class="col-sm-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    <div class="position-sticky pt-3">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <span class="nav-link" href="#" @click="component= 'Products'">
                                    <span><i class="fas fa-shopping-cart"></i></span>
                                    Produits
                                </span>
                            </li>
                            <li class="nav-item">
                                <span class="nav-link" href="#" @click="component= 'AddProduct'">
                                    <span><i class="fas fa-plus"></i></span>
                                    Nouveau produit
                                </span>
                            </li>
                            <li class="nav-item">
                                <span class="nav-link" href="#" @click="component= 'Measures'">
                                    <span><i class="fas fa-pencil-ruler"></i></span>
                                    Mesures
                                </span>
                            </li>
                            <li class="nav-item">
                                <span class="nav-link" @click="component= 'Orders'">
                                    <span><i class="fas fa-file"></i></span>
                                    Commandes
                                </span>
                            </li>
                            <li class="nav-item">
                                <span class="nav-link" href="#" @click="component= 'Clients'">
                                    <span><i class="fas fa-users"></i></span>
                                    Clients
                                </span>
                            </li>
                            <li class="nav-item">
                                <span class="nav-link" href="#" @click="component= 'Blog'">
                                <span><i class="fas fa-th-large"></i></span>
                                    Blog
                                </span>
                            </li>
                            <li class="nav-item">
                                <span class="nav-link" href="" @click="component= 'Slider'">
                                    <span><i class="fas fa-pager"></i></span>
                                    Bannière
                                </span>
                            </li>

                        </ul>                        
                                                  
                    </div>
                </nav>
                <component v-bind:is="component"></component>
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
    </div>
</template>

<script>
import ProductsVue from './Products/Manager/Products';
import BlogVue from './Blog/Blog.vue'
import Bin from "./Navigation/Elements/Bin.vue"
import OrdersVue from './Orders/Orders'
import ClientsVue from './Customers/Clients'
import Add_productVue from './Products/Manager/Add_product.vue';
import SliderVue from './Slider/Slider.vue';
import MeasuresVue from './Orders/Measures.vue';

export default {
    name : 'Admin',
    data(){
        return{
            component: 'Products'
        }
    },
    components:{
        'Products': ProductsVue,
        "AddProduct": Add_productVue,
        'Clients': ClientsVue,
        'Orders': OrdersVue,
        "Bin":  Bin,
        "Slider": SliderVue,
        'Blog' : BlogVue,
        "Measures": MeasuresVue
    },

}
</script>

<style scoped>
    @import url('../assets/css/dashboard.css');
    .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

    .nav-link:hover{
        color:dodgerblue;
        cursor: pointer;
    }
</style>