<template>
    <div>
        <Sidebar />
        <Navbar />
        <main class="col-sm-12 col-md-9 col-lg-10 px-md-4 offset-md-2">
                        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1>Produits</h1>
                        </div>
                        <div v-if="products == undefined || products == [] || products == {}" class="alert alert-light">
                            <div class="d-flex align-items-center">
                                <strong class="text-success">Chargement des produits...</strong>
                                <div class="spinner-border spinner-border-sm ms-auto text-success" role="status" aria-hidden="true"></div>
                            </div>
                        </div>
                        
                        <div v-else class="table-responsive">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm-6"><h2>Liste des produits</h2>
                                    
                                    <h1>
                                        <span class="badge bg-danger rounded-pill top-pills">Produits : {{products.length}} </span>
                                        <span class="badge bg-warning top-pills rounded-pill">Produits vendus: {{countProductsSold(products)}} </span>
                                    
                                    </h1>
                                    </div>
                                    <div class="col-sm-6"><input @keyup="search()" name="search" class="form-control" type="search" id="search" placeholder="Tapez votre recherche ici..."></div>
                                </div>
                            </div>

                            <table class="table table-striped table-sm mt-5" id="table">
                            <thead>
                                <tr class="no-b">
                                    <!-- <th>
                                        <div class="form-check"> 
                                            <button id="delete_button" class="btn btn-danger" @click="deleteProducts()"><i class="fas fa-trash"></i></button>
                                        </div>
                                    </th> -->
                                    <th>NOM</th>
                                    <th>Evaluation</th>
                                    <th>Qté disponible</th>
                                    <th>Qté Vendus</th>
                                    <th>-- %</th>
                                    <th>P.U</th>
                                    <th>CATEGORIE</th>
                                    <th>Etiquette</th>
                                    <th>IMAGE</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr :class="[countProduct(product) > 3? '':'alert alert-danger ' ] " v-bind:key="product._id" v-for="(product) in products">
                                    <td>{{product.name}}</td>
                                    <td>{{product.rating}}</td>
                                    <td>{{countProduct(product)}}</td>
                                    <td>{{product.saleCount}}</td>
                                    <td>{{product.discount}}</td>
                                    <td>{{product.price}}</td>
                                    <td >
                                        <span v-for="(category, index) in product.category" :key="index" class="badge bg-warning text-dark rounded-pill">
                                            {{category}}
                                        </span>
                                    </td>
                                    <td v-for="(tag, index) in product.tag" :key="index">
                                        <span class="badge bg-success text-light rounded-pill">{{tag}}</span>
                                    </td>   
                                    
                                    <td class="col-sm-1"><img :src="product.image[0]" alt="" class="col-12"></td>
                                    <td>
                                        <div class="container">
                                            <div class="row">
                                            <div class="col-4"> 
                                                <button @click="setProductId(product._id)" data-bs-toggle="modal" data-bs-target="#deleteProduct" class="btn btn-danger"><i class="fas fa-trash"></i></button>
                                            </div>
                                            <div class="col-4">
                                                <button @click="goToProduct(product._id)" class="btn btn-warning offset-sm-1" data-bs-toggle="modal" data-bs-target="#modify-product"><i class="fas fa-edit"></i></button>
                                            </div>
                                            <div class="col-4">
                                                <Comments :product_id="product._id" :isComment="isComment" :comments="comments" />
                                                <button @click="getComments(product.comments)" class="btn btn-primary offset-sm-1" data-bs-toggle="modal" data-bs-target="#comments"><i class="fas fa-comments"></i> {{product.comments.length}} </button>
                                            </div>
                                        </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <!-- <li @click="previousTable()" class="page-item"><a class="page-link">Précédant</a></li> -->
                                <ul class="pagination" v-for="(num, index) in all_products" :key="index">
                                    <li @click="switchTable(index)"><a class="page-link">{{index+1}}</a></li>
                                </ul>
                                <!-- <li @click="nextTable()" class="page-item"><a class="page-link">Suivant</a></li> -->
                            </ul>
                        </nav>
                    </div>

                    <div class="modal fade" id="deleteProduct" tabindex="-1" aria-labelledby="deleteProduct" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Suppression</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    Voulez-vous vraiment effectuer cette suppression?
                                    <button @click="deleteProduct()" type="submit" class="btn btn-danger">Accepter</button>
                                </div>
                            </div>
                        </div>
                    </div>
        </main>
    </div>
</template>

<script>
    import axios from 'axios';
    import filter from '../../../helpers/product-filter.js';
    import config from '../../../config/address'
    import CommentsVue from '../Extras/Comments.vue';
    import NavbarVue from '../../Navigation/Navbar.vue';
    import SidebarVue from '../../Navigation/Sidebar.vue';
    export default {
        name: "Products",
        data(){
            return{
                server_address: config.server,
                product_id: undefined,
                products: [],
                product_modifyier: [],
                path: undefined,
                deletedIDs: [],
                comments: [],
                isComment: false,
                all_products: [],
                previous: 0,
                next: 0,
                index_table: 0
            }
        },
        components: {
            'Comments': CommentsVue,
            'Navbar': NavbarVue,
            'Sidebar': SidebarVue
        },
        mounted(){
            axios.get(`${config.server}/`).then((response)=>{
                // this.products = response.data;
                this.all_products = filter.pagination(response.data);
                this.products = this.all_products[0];
            }).catch((error)=>{
                console.log(error);
            })
        },
        methods: {
            previousTable(){
                if (this.previous >= 0) {
                    this.next = this.previous;
                    this.previous = this.previous-1;
                    this.products = this.all_products[this.previous];
                }
            },
            nextTable(){
                if (this.all_products.length>this.next) {
                    this.previous = this.next;
                    this.next = this.next+1;
                    this.products = this.all_products[this.next];
                }
              
            },
            switchTable(index){
                this.products = this.all_products[index];
                this.index_table = index;
                if (index > 0) {
                    this.previous = index-1;
                    this.next = index+1;
                }
            },
            search(){
                filter.productFilter();
            },
            setProductId(id){
                this.product_id = id;
            },
            deleteProduct(){
                axios.delete(`${config.server}/${this.product_id}`, {headers: {...config.headers}}).then(()=>{
                    this.$router.go();
                }).catch((error)=>{
                    console.log(error);
                })
            },
            goToProduct(id){
                this.$store.commit("setProductId", id);
                this.$router.push(`/admin/products/Modification/${id}`);
            },
            getComments(comments){
                this.comments = comments;
                this.isComment = this.comments == undefined || this.comments == [] ? false : true;
            },
            countProduct(product){
                let total = 0;
                product.variation.forEach(element => {
                    element.size.forEach(variationSize=> total += variationSize.stock )
                });
                return total;
            },
             countProductsSold(products){
                let total = 0;
                products.forEach(element => {
                    total += element.saleCount;
                });
                return total;
            }
        }
    }
</script>

<style>
@import url('../../../assets/css/dashboard.css');
    .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }
      td{
          padding:5px !important;
      }
      tr{
          margin-bottom:5px !important;
      }
      .top-pills{
          margin-left: 5px;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

    .page-link:hover{
        cursor: pointer;
    }
</style>
