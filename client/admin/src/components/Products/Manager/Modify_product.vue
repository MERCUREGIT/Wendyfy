<template>
    <div> 
        <Sidebar />
        <Navbar />
        <main class="col-sm-12 col-md-9 col-lg-10 px-md-4 offset-md-2">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Modification du produit</h1>
            </div>
            <!-- <div class="alert alert-danger alert-dismissible fade show" v-if="error">
                <strong>Une erreur s'est produite!</strong> Certaines informations du formulaire sont incorrectes ou vérifiez votre connexion internet !
                <button @click="error = false" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="close"></button>
            </div> -->
            <div class="row">
                <Categories @new-categories="setCategories($event)" />
                <Tags @new-tags="setTags($event)" />
                <Colors @new-colors="setColors($event)" />
                <Sizes @new-sizes="setSizes($event)" />
            </div>
            <hr>
            <div class="row g-3">
                            <div class="col-md-6">
                                <label for="nom" class="col-form-label s-12"><i class="icon-package mr-2"></i>Numéro du produit</label>
                                <input name="sku" class="form-control" v-model="product.sku"  type="text" aria-label="readonly input example" disabled readonly>
                            </div>
                            <div class="col-md-3">
                                <label for="nom" class="col-form-label s-12"><i class="icon-package mr-2"></i>Nom du produit</label>
                                <input name="name" id="nom" class="form-control r-0 light s-12" v-model="product.name" type="text" required>
                            </div>
                            <div class="col-3">
                                <label for="file" class="col-form-label s-12">Image du produit</label>
                                <input ref="image" name="image" type="file" id="image" accept=".png, .jpeg, .jpg" class="form-control r-0 light s-12" required>
                            </div>
                            <div class="col-3">
                                <label for="price" class="col-form-label s-12"><i class="icon-money mr-2"></i>Prix unitaire</label>
                                <input name="price" id="price" class="form-control r-0 light s-12" v-model="product.price" type="number" required>
                            </div>
                            <div class="col-3">
                                <label for="price" class="col-form-label s-12"><i class="icon-money mr-2"></i>Pourcentage</label>
                                <input name="discount" id="discount" class="form-control r-0 light s-12" type="number" v-model="product.discount" required>
                            </div>
                            <div class="col-3">
                                <div class="card">
                                    <span class="card-header">Etiquettes</span>
                                    <div class="card-body">
                                        <div class="row" v-for="(tag, i) in tags" :key="i">
                                            <div>
                                                <div class="form-check">
                                                    <input name="" class="form-check-input" type="radio" :value="tag" v-model="choosen_tag" :id="'tags'+i">
                                                    <label class="form-check-label" :for="'tags'+i">
                                                        {{tag}}
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="card">
                                    <span class="card-header">Categories</span>
                                    <div class="card-body">
                                        <div class="row" v-for="(category, i) in categories" :key="i">
                                            <div>
                                                <div class="form-check">
                                                    <input name="" class="form-check-input" type="checkbox" :value="category" v-model="choosen_categories" id="categories">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        {{category}}
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="variations" v-for="(widget, index) in variation_widgets" :key="index">
                                <Variations :sizes="sizes" :colors="colors" :index="index" @add-variation="addVariation(widget)" @remove-variation="removeVariation(widget)"/>
                            </div>
                            <div class="col-12">
                                <label for="shortDescription" class="col-form-label s-12"><i class="icon-package mr-2"></i>Brève description</label>
                                <input name="shortDescription" id="shortDescription" class="form-control r-0 light s-12 " type="text" v-model="product.shortDescription" required>
                            </div>
                            <div class="col-12">
                                <label for="exampleFormControlTextarea1">Description</label>
                                <textarea name="fullDescription" class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="product.fullDescription" required></textarea>
                            </div>
                            <div class="col-12">
                                <div class="form-check">
                                    <input v-model="product.allowComments" name="allowComments" class="form-check-input" type="checkbox" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Accepter les commentaires
                                    </label>
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="button" @click="submit()" class="btn btn-primary col-4">Envoyer</button>
                            </div>
            </div>
        </main>
    </div>
</template>

<script>
    import axios from 'axios';

    import config from '../../../config/address.js';
    import formdata from "../../../helpers/formdata.js";

    import NavbarVue from '../../Navigation/Navbar.vue';
    import SidebarVue from '../../Navigation/Sidebar.vue';
    import CategoriesVue from '../Details/Categories.vue';
    import ColorsVue from '../Details/Colors.vue';
    import SizesVue from '../Details/Sizes.vue';
    import TagsVue from '../Details/Tags.vue';
    import VariationsVue from '../Details/Variations.vue';
    export default {
        name: 'Modify_product',
        data(){
            return{
                product: [],
                formData: new FormData(),
                tags: [],
                categories: [],
                sizes: [],
                colors: [],
                choosen_categories: [],
                choosen_tag: '',
                variations: [],
                variation_widgets: [{}]
            }
        },
        components: {
            'Navbar': NavbarVue,
            'Sidebar': SidebarVue,
            'Categories': CategoriesVue,
            'Colors': ColorsVue,
            'Sizes': SizesVue,
            'Tags': TagsVue,
            'Variations': VariationsVue
        },
        mounted(){
            axios.get(`${config.server}/edit/${localStorage.getItem('product_id')}`).then((res)=>{
                this.product = res.data;
            }).catch((error)=>{
                console.log(error);
            })
        },
        methods: {
            setCategories(categories){
                this.categories = categories;
            },
            setColors(colors){
                this.colors = colors;
            },
            setTags(tags){
                this.tags = tags;
            },
            setSizes(sizes){
                this.sizes = sizes;
            },
            manageFormData(){
                let data = {
                    sku: this.product.sku,
                    name: this.product.name,
                    price: this.product.price,
                    discount: this.product.discount,
                    image: this.$refs.image.files[0],
                    short_description: this.product.shortDescription,
                    full_description: this.product.fullDescription,
                    comments: this.product.allowComments,
                    categories: this.choosen_categories,
                    tag: this.choosen_tag
                }
                return formdata.addProduct(data, this.variation_widgets.length);
            },
            submit() {
                let product_values = this.manageFormData();
                axios.put(`${config.server}/edit/${this.$store.getters.getProductId}`, product_values, {headers: {...config.headers}}).then(()=>{
                    this.$router.push('/admin/products');
                }).catch((error)=>{
                    console.log(error);
                })
            },
            addVariation(widget){
                this.variation_widgets.splice(this.variation_widgets.findIndex(w => w === widget)+1, 0, {});
            },
            removeVariation(widget){
                let index = this.variation_widgets.indexOf(widget);
                if (index > 0) {
                    this.variation_widgets.splice(index, 1);
                }
            }
        }
    }
</script>

<style scoped>
  /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }
</style>