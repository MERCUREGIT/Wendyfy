
<template>
  <div>
    <Sidebar />
    <Navbar />
    <main class="col-sm-12 col-md-9 col-lg-10 px-md-4 offset-md-2">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Ajouter un nouveau produit</h1>
      </div>
      <div class="alert alert-danger alert-dismissible fade show" v-if="error">
        <strong>Une erreur s'est produite!</strong> Certaines informations du formulaire sont incorrectes ou vérifiez votre connexion internet !
        <button @click="error = false" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="close"></button>
      </div>
      <div class="row justify-content-center">
        <div class=" justify-content-center col-xs-6 col-sm-6 col-md-3">
          <Categories @new-categories="setCategories($event)" />
        </div>
        <div class="col-xs-6 col-sm-6 col-md-3">
          <Tags @new-tags="setTags($event)" />
        </div>
        <div class="col-xs-6 col-sm-6 col-md-3">
          <Colors @new-colors="setColors($event)" />
        </div>
        <div class="col-xs-6 col-sm-6 col-md-3">
          <Sizes @new-sizes="setSizes($event)" />
        </div>
      </div>
      <hr>
      <form >
        <div class="row">
          <div class="border  shadow rounded  col-xs-12 col-sm-12 col-md-4 col-lg-4 limit">
            <img style="height:100%" :src='image' >
          </div>
          <div class="col-12-xs col-sm-12 col-md-8 col-lg-8">

            <div class="row justify-content-center g-3 my-5">
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div class="form-group">
                  <div>
                    <label for="num" class="col-form-label s-12"><i class="icon-package mr-2"></i>Numéro du produit</label>
                    <input name="sku" id="num" class="form-control" :value="sku" type="text" aria-label="readonly input example" readonly disabled>
                  </div>
                  <div>
                    <label for="nom" class="col-form-label s-12"><i class="icon-package mr-2"></i>Nom du produit</label>
                    <input v-model="name" name="name" id="nom" class="form-control r-0 light s-12 " type="text" required>
                  </div>
                  <div>
                    <label for="image" class="col-form-label s-12">Image du produit</label>
                    <input ref="image" name="image" type="file" @change="onFileChange" id="image" class="form-control r-0 light s-12" required>
                  </div>
                  <div>
                    <label for="price" class="col-form-label s-12"><i class="icon-money mr-2"></i>Prix unitaire (en FCFA)</label>
                    <input v-model="price" name="price" id="price" class="form-control r-0 light s-12 " type="number" required>
                  </div>
                  <div >
                    <label for="price" class="col-form-label s-12"><i class="icon-money mr-2"></i>Pourcentage de réduction</label>
                    <input v-model="discount" name="discount" id="discount" class="form-control r-0 light s-12" min="0" max="100" type="number" required>
                  </div>
                  <hr>
                  <div class="col-12 checkbox-row">
                    <div class="form-check form-switch">
                      <input v-model="allowComments" name="allowComments" class="form-check-input" type="checkbox" id="flexCheckDefault">
                      <label class="form-check-label mx-3" for="flexCheckDefault">
                        Accepter les commentaires
                      </label>
                    </div>
                  </div>
                  <hr>
                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="form-group">
                  <div class="col-12">
                    <label for="shortDescription" class="col-form-label s-12"><i class="icon-package mr-2"></i>Brève description</label>
                    <input v-model="shortDescription" name="shortDescription" id="shortDescription" class="form-control r-0 light s-12 " type="text" required>
                  </div>
                  <div class="col-12">
                    <label for="exampleFormControlTextarea1">Description</label>
                    <textarea v-model="fullDescription" name="fullDescription" class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                  </div>

                </div>

                <div class="row my-3">
                  <div class="col">
                    <div class="card">
                      <h5 class="card-header">Etiquettes</h5>
                      <div class="card-body">
                        <div class="row" v-for="(tag, i) in tags" :key="i">
                          <div>
                            <div class="form-check form-switch">
                              <input name="tags" class="form-check-input" type="radio" :value="tag" v-model="choosen_tag" :id="'tags'+i">
                              <label class="form-check-label" :for="'tags'+i">
                                {{tag}}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card">
                      <h5 class="card-header">Categories</h5>
                      <div class="card-body">
                        <div class="row" v-for="(category, i) in categories" :key="i">
                          <div>
                            <div class="form-check">
                              <input name="categories" class="form-check-input" type="checkbox" :value="category" v-model="choosen_categories" :id="'categories'+i">
                              <label class="form-check-label" :for="'categories'+i">
                                {{category}}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div  class="col-12 text-center">
                  <button style="width:100%" type="button" @click="submit()" class="btn btn-primary btn-lg ">Creé Produit</button>
                </div>
              </div>
            </div>
          </div>
          <div class="varioations col-12 col-sm-12 col-md-12 col-lg-12">
            <Variations v-for="(widget, index) in variation_widgets" :key="index" :sizes="sizes" :colors="colors" :item="widget" @add-variation="addVariation" @remove-variation="removeVariation(widget)" />
          </div>
        </div>
      </form>
      <hr>
    </main>
  </div>
</template>

<script>
// Importing axios, helpers, config and prorduct details components
import axios from 'axios';
// import VariationListItem from './VariationListItem'
import config from "../../../config/address.js";
import formdata from "../../../helpers/formdata.js";
import { uuid } from "vue-uuid";
import NavbarVue from '../../Navigation/Navbar.vue';
import SidebarVue from '../../Navigation/Sidebar.vue';
import CategoriesVue from '../Details/Categories.vue';
import ColorsVue from '../Details/Colors.vue';
import SizesVue from '../Details/Sizes.vue';
import TagsVue from '../Details/Tags.vue';
import VariationsVue from '../Details/Variations.vue';

export default {
  name: 'Add-product',
  data(){
    return {
      uuid: uuid,
      error: false,
      sku: "wendyfy"+Math.floor(Math.random() * 10000) + 1,
      name: "",
      price: undefined,
      fullDescription: "",
      shortDescription: "",
      tags: [],
      categories: [],
      sizes: [],
      colors: [],
      choosen_categories: [],
      choosen_tag: '',
      discount: 0,
      allowComments: false,
      variation_widgets: [{}],
      image:"https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081"

    }
  },
  components: {
    'Navbar': NavbarVue,
    'Sidebar': SidebarVue,
    'Categories': CategoriesVue,
    'Colors': ColorsVue,
    'Sizes': SizesVue,
    'Tags': TagsVue,
    'Variations': VariationsVue,
    // VariationListItem
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
    // setting up the formData to send to the server
    manageFormData(){
      let data = {
        sku: this.sku,
        name: this.name,
        price: this.price,
        discount: this.discount,
        image: this.$refs.image.files[0],
        short_description: this.shortDescription,
        full_description: this.fullDescription,
        comments: this.allowComments,
        categories: this.choosen_categories,
        tag: this.choosen_tag
      }
      return formdata.addProduct(data, this.variation_widgets.length);
    },

    // submit formData
    submit() {
      if (parseInt(this.discount) > 100 || parseInt(this.discount)<0) {
        this.error = true;
      } else {
        let product_values = this.manageFormData();
        axios.post(`${config.server}/`, product_values, {headers: {...config.headers}, 'Content-Type': 'multipart/form-data'}).then(()=>{
          this.$router.push('/admin/products');
        }).catch((error)=>{
          console.log(error);
          this.error=true;
        });
      }
    },
    addVariation(){
      this.variation_widgets = [...this.variation_widgets, {new:true}] ;
      console.log(this.variation_widgets)
    },
    removeVariation(widget){
      console.log("remove data from tree")
      let index = this.variation_widgets.indexOf(widget);
      if (index > 0) {
        this.variation_widgets.splice(index, 1);
      }
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.image = URL.createObjectURL(file);
    }
  }
}

</script>

<style>
.row .limit{
  max-height:60vh;
  overflow:hidden;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type=number] {
  -moz-appearance:textfield; /* Firefox */
}
</style>
