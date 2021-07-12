<template>
  <div>
    <Sidebar/>
    <Navbar/>
    <div v-if="loadingData"
         style="height:100vh;width:100vw;z-index:9999;display:flex;align-items:center;justify-content:center;top:0;bottom:0;left:0;right:0;position:fixed;background-color: rgba(255,255,255,0.8)">
      <sui-loader active centered inline size="medium" content="chargement..."/>
    </div>
    <sweet-modal ref="modal1" blocking>
      <h3>Créer une nouvelle étiquette</h3>
      <label for="createTagName" class="form-label">Nom de l'étiquette</label>
      <sui-input v-model="newTagName" name="title" type="text" id="createTagName" placeholder="Nom de l'étiquette"
                 class="w-100"/>
      <sui-button content="Creer etiquette" color="black" :loading="creating" v-on:click="createNewTag"
                  class="mt-3 float-end mb-4"></sui-button>
    </sweet-modal>
    <sweet-modal ref="modal1" blocking>
      <h3>Êtes-vous sûr de continuer</h3>
      <label for="createTagName" class="form-label">Nom de l'étiquette</label>
      <sui-input v-model="newTagName" name="title" type="text" id="createTagName" placeholder="Nom de l'étiquette"
                 class="w-100"/>
      <sui-button content="Creer etiquette" color="black" :loading="creating" v-on:click="createNewTag"
                  class="mt-3 float-end mb-4"></sui-button>
    </sweet-modal>

    <sweet-modal ref="modal2" blocking>
      <h3>Créer une nouvelle catégorie</h3>
      <label for="createCatName" class="form-label">Nom de la catégorie</label>
      <sui-input v-model="newCatName" name="title" type="text" id="createCatName" placeholder="Nom de la catégorie"
                 class="w-100"/>
      <sui-button content="Creer catégorie" color="black" :loading="creating" v-on:click="createNewCat"
                  class="mt-3 float-end mb-4"></sui-button>
    </sweet-modal>

    <sweet-modal ref="modal5" blocking>
      <h3>Confirmation</h3>
      <p>Êtes-vous sûr de continuer</p>
      <sui-button content="Continuer" color="black" v-on:click="callbackDelete"
                  class="mt-3 float-end mb-4"></sui-button>
    </sweet-modal>
    <sweet-modal ref="modal3" blocking>
      <div>
        <h3>Créer une nouvelle coleur</h3>
        <label for="colorcode" class="form-label">Couleur</label>
        <br/>
        <v-swatches
            v-model="color"
            popover-x="left"
            swatches="text-advanced"
            id="colorcode"
        ></v-swatches>
        <br/>
        <br/>
        <label for="createCatName" class="form-label">Nom de la couleur</label>
        <sui-input v-model="newColorName" name="title" type="text" id="createColorName" placeholder="Nom de la couleur"
                   class="w-100"/>
        <sui-button content="Creer couleur" color="black" :loading="creating" v-on:click="createNewColor"
                    class="mt-3 float-end mb-4"></sui-button>
      </div>
    </sweet-modal>
    <sweet-modal ref="modal4" blocking>
      <h3>Créer une nouvelle coleur</h3>
      <label for="createCatName" class="form-label">Nom de la taille</label>
      <sui-input v-model="newSizeName" name="title" type="text" id="createSizeName" placeholder="Nom de la taille"
                 class="w-100"/>
      <sui-button content="Creer size" color="black" :loading="creating" v-on:click="createNewSize"
                  class="mt-3 float-end mb-4"></sui-button>
    </sweet-modal>
    <main class="col-sm-12 col-md-9 col-lg-10 px-md-4 offset-md-2">
      <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2" v-if="$route.params.id">Modifier un produit</h1>
        <h1 class="h2" v-else>Ajouter un nouveau produit</h1>
      </div>
      <div class="row">
        <div class="col col-xs-12 col-sm-6 col-md-3">
          <sui-segment>
            <sui-button style="width:100%;margin-bottom: 10px;" color="black" v-on:click="openCatCreateModal"
                        size="tiny">
              <sui-icon name="plus"/>
              Ajouter Catégories
            </sui-button>
            <sui-list divided relaxed style="height:150px;overflow-y: auto;overflow-x:hidden">
              <sui-list-item v-for="category in categories" :key="category.name">
                <sui-list-icon name="times" size="large" vertical-align="middle"/>
                <sui-list-content>
                  <a is="sui-list-header">{{ category.name }}</a>
                </sui-list-content>
              </sui-list-item>
            </sui-list>
          </sui-segment>
        </div>
        <div class="col col-xs-12 col-sm-6 col-md-3">
          <sui-segment>
            <sui-button style="width:100%;margin-bottom: 10px;" color="black" v-on:click="openTagCreateModal"
                        size="tiny">
              <sui-icon name="plus"/>
              Ajouter Etiquettes
            </sui-button>
            <sui-list divided relaxed style="height:150px;overflow-y: auto;overflow-x:hidden">
              <sui-list-item v-for="tag in tags" :key="tag.name">
                <sui-list-icon name="times" size="large" vertical-align="middle"/>
                <sui-list-content>
                  <a is="sui-list-header">{{ tag.name }}</a>
                </sui-list-content>
              </sui-list-item>
            </sui-list>
          </sui-segment>
        </div>
        <div class="col col-xs-12 col-sm-6 col-md-3">
          <sui-segment>
            <sui-button style="width:100%;margin-bottom: 10px;" color="black" v-on:click="openColorCreateModal"
                        size="tiny">
              <sui-icon name="plus"/>
              Ajouter Couleurs
            </sui-button>
            <sui-list divided relaxed style="height:150px;overflow-y: auto;overflow-x:hidden">
              <sui-list-item v-for="color in colors" :key="color.name">
                <sui-list-icon name="times" size="large" vertical-align="middle"/>
                <sui-list-content>
                  <a is="sui-list-header"><p
                      :style="`display:inline-block;height:15px;width:15px;background-color:${color.color};margin-right:10px;border:1px solid black;border-radius:50%`"/>
                    {{ color.name }}</a>
                </sui-list-content>
              </sui-list-item>
            </sui-list>
          </sui-segment>
        </div>
        <div class="col col-xs-12 col-sm-6 col-md-3">
          <sui-segment>
            <sui-button style="width:100%;margin-bottom: 10px;" color="black" v-on:click="openSizeCreateModal"
                        size="tiny">
              <sui-icon name="plus"/>
              Ajouter Tailles
            </sui-button>
            <sui-list divided relaxed style="height:150px;overflow-y: auto;overflow-x:hidden">
              <sui-list-item v-for="size in sizes" :key="size.name">
                <sui-list-icon name="times" size="large" vertical-align="middle"/>
                <sui-list-content>
                  <a is="sui-list-header">{{ size.name }}</a>
                </sui-list-content>
              </sui-list-item>
            </sui-list>
          </sui-segment>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-3 mt-3" v-if="image">

          <pim :on-change="onChangeProductImage" :index="0" :value="image"/>
        </div>

        <div class="col-xs-12 col-sm-3 mt-3" v-else>

          <pim :on-change="onChangeProductImage"/>
        </div>

        <div class="col-xs-12 col-sm-4 mt-3">

          <sui-form-field class="mt-3">
            <label for="numero" class="form-label">Numéro du produit</label>
            <sui-input v-model="sku" disabled name="numero" type="text" id="numero" placeholder="Numéro du produit"
                       class="w-100"/>
          </sui-form-field>

          <sui-form-field class="mt-3">
            <label for="name" class="form-label">Nom du produit</label>
            <sui-input v-model="name" name="name" type="text" id="name" placeholder="Nom du produit"
                       class="w-100"/>
          </sui-form-field>

          <sui-form-field class="mt-3">
            <label for="pu" class="form-label">Prix unitaire (en FCFA)</label>
            <sui-input v-model="price" name="name" type="number" id="pu" placeholder="Prix unitaire (en FCFA)"
                       class="w-100"/>
          </sui-form-field>

          <sui-form-field class="mt-3">
            <label for="perc" class="form-label">Pourcentage</label>
            <sui-input type="number" v-model="discount" name="name" id="perc" placeholder="Pourcentage"
                       class="w-100"/>
          </sui-form-field>
        </div>


        <div class="col-xs-12 col-sm-5 mt-3">

          <sui-form-field>
            <div class=" mt-3">
              <label for="meta_description" class="form-label">Brève description</label>

              <textarea v-model="shortDescription" name="Brève description" type="text" class="form-control"
                        id="meta_description"
                        style="height: 200px;width:100%"></textarea>
            </div>
          </sui-form-field>


          <div class="form-check form-switch mt-3">
            <input v-model="allowComments" name="allowComments" class="form-check-input" type="checkbox" value=""
                   id="flexCheckDefault">
            <label class="form-check-label mx-3" for="flexCheckDefault">
              Accepter les commentaires
            </label>
          </div>

          <label class="form-label mt-3">Cat&eacute;gories</label>
          <sui-dropdown
              fluid
              :options="categories.map(t=>({key:t.name,value:t.name,text:t.name.toUpperCase()}))"
              placeholder="Selectionner les categories"
              search
              selection
              multiple
              v-model="selectedCategories"
              :loading="loadingData"
          />


          <label class="form-label mt-3">Etiquettes</label>
          <sui-dropdown
              fluid
              :options="tags.map(t=>({key:t.name,value:t.name,text:t.name.toUpperCase()}))"
              placeholder="Selectionner les etiquettes"
              search
              selection
              multiple
              v-model="selectedTags"
              :loading="loadingData"
          />
        </div>
        <div class="col-xs-12 col-sm-3">

        </div>
        <div class="col-xs-12 col-sm-9">
          <sui-form-field class="mt-3">
            <label for="content2" class="form-label">Description</label>
            <editor id="content2"
                    api-key="trswb4s1p1zhbjldzy2ayx8z2v8v2iqb4eqgumyk0my6n7ip"
                    :init="tinymceConfig" v-model="fullDescription"/>
          </sui-form-field>
        </div>
      </div>
      <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h3 class="mb-0 mt-5">Variants</h3>
      </div>

      <div class="mt-2" v-for="(variation,index) in variations" :key="index">
        <sui-segment>
          <div class="row">
            <div class="col-sm-12 col-md-3">
              <pim :on-change="onChangeVariationImage" :index="index" :value="variation.image"/>
            </div>
            <div class="col-sm-12 col-md-9">
              <div class="row mt-5">
                <div class="col col-xs-12 col-sm-6 col-md-4">
                  <label class="form-label mt-3">Couleur</label>
                  <sui-dropdown
                      fluid
                      :options="colors.map(t=>({key:t.name,value:t.name,text:t.name.toUpperCase()}))"
                      placeholder="Selectionner les couleurs"
                      search
                      selection
                      v-model="variation.color"
                      :loading="loadingData"
                  />

                </div>
                <div class="col col-xs-12 col-sm-6 col-md-8">
                  <div class="row" v-for="(size,index2) in variation.size" :key="`i-${index2}`">
                    <div class="col col-xs-12 col-sm-6 col-md-4">

                      <label class="form-label mt-3">Tailles</label>
                      <sui-dropdown
                          fluid
                          :options="sizes.map(t=>({key:t.name,value:t.name,text:t.name.toUpperCase()}))"
                          placeholder="Selectionner les tailles"
                          search
                          selection
                          v-model="size.name"
                          :loading="loadingData"
                      />
                    </div>

                    <div class="col col-xs-11 col-sm-7 col-md-3">
                      <label class="form-label mt-3">Quantit&eacute;</label>
                      <sui-input v-model="size.stock" name="name" type="text" placeholder="Qte"
                                 class="w-100"/>
                    </div>
                    <div class="col col-xs-1 col-sm-1 col-md-1">
                      <i class="fa fa-trash float-end fa" style="cursor:pointer;margin-top: 50px"
                         v-on:click="removeVariationSize(index,index2)"></i>
                    </div>

                  </div>

                </div>
              </div>

              <!--                      <div>-->

              <sui-button v-on:click="addVariationSize(index)" size="tiny" content="Ajouter taille" color="yellow"
                          class="mt-3 float-end mb-4 " :loading="savingProduct"></sui-button>
              <!--                      </div>-->

            </div>
          </div>
          <div class="mb-4">
            <i class="fa fa-trash float-end fa-2x" style="cursor:pointer;" v-on:click="removeVariation(index)"></i>
          </div>
        </sui-segment>
      </div>
      <sui-button content="Ajouter variants" color="black"
                  class="mt-3 float-end  mb-4" size="tiny" v-on:click="addProductVariations"></sui-button>
      <br/>
      <br/>
      <br/>
      <br/>
      <sui-button content="Completer" color="black"
                  class="mt-3  mb-4 w-100" v-on:click="save" :loading="savingProduct"></sui-button>
    </main>
  </div>
</template>


<script>
import NavbarVue from '../../Navigation/Navbar.vue';
import SidebarVue from '../../Navigation/Sidebar.vue';
import {toast, toBase64, toTitleCase} from "@/helpers/helpers";
import {SweetModal} from "sweet-modal-vue";
import ProductImageManager from "@/components/Products/ProductImageManager";
import {uuid} from "vue-uuid";
import axios from "axios";
import config from "@/config/address";
import Editor from "@tinymce/tinymce-vue";
import Vue from "vue";
import VSwatches from 'vue-swatches'
import "vue-swatches/dist/vue-swatches.css"
import {isEmpty} from "../../../helpers/helpers";

export default {
  name: 'Add-product',
  data() {
    let useDarkMode = false;
    return {
      variations: [],
      callbackDelete: () => {

      },
      savingProduct: false,
      chosenImage: '',
      uuid: uuid,
      newCatName: '',
      creating: false,
      newTagName: '',
      newSizeName: '',
      newColorName: '',
      error: false,
      sku: "wendyfy" + Math.floor(Math.random() * 10000) + 1,
      name: "",
      price: undefined,
      fullDescription: "",
      shortDescription: "",
      image: "",
      selectedColors: "",
      selectedSizes: "",
      tags: [],
      categories: [],
      sizes: [],
      colors: [],
      selectedCategories: [],
      selectedTags: [],
      choosen_categories: [],
      choosen_tag: '',
      discount: '',
      allowComments: "",
      color: "#abcdef",
      variation_widgets: [{}],
      tinymceConfig: {
        plugins: 'image print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
        imagetools_cors_hosts: ['picsum.photos'],
        menubar: 'file edit view insert format tools table help',
        toolbar: 'AwsS3UploadButton | undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
        toolbar_sticky: true,
        autosave_ask_before_unload: true,
        autosave_interval: '30s',
        autosave_prefix: '{path}{query}-{id}-',
        autosave_restore_when_empty: false,
        autosave_retention: '2m',
        image_advtab: true,
        link_list: [
          {title: 'My page 1', value: 'https://www.tiny.cloud'},
          {title: 'My page 2', value: 'http://www.moxiecode.com'}
        ],
        image_list: [
          {title: 'My page 1', value: 'https://www.tiny.cloud'},
          {title: 'My page 2', value: 'http://www.moxiecode.com'}
        ],
        image_class_list: [
          {title: 'None', value: ''},
          {title: 'Some class', value: 'class-name'}
        ],
        importcss_append: true,
        media_live_embeds: true,
        templates: [
          {
            title: 'New Table',
            description: 'creates a new table',
            content: '<div class="mceTmpl"><table width="98%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>'
          },
          {
            title: 'Starting my story',
            description: 'A cure for writers block',
            content: 'Once upon a time...'
          },
          {
            title: 'New list with dates',
            description: 'New List with dates',
            content: '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>'
          }
        ],
        template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
        template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
        height: 300,
        image_caption: true,
        quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
        noneditable_noneditable_class: 'mceNonEditable',
        toolbar_mode: 'sliding',
        contextmenu: 'link image imagetools table',
        skin: useDarkMode ? 'oxide-dark' : 'oxide',
        content_css: useDarkMode ? 'dark' : 'default',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        images_upload_url: 'https://google.com', //just so that the upload button should appear #tkc
        images_upload_handler: async function (blobInfo, success, failure) { //now override the file upload operation #tkc
          let file = new File([blobInfo.blob()], "my_image.png", {
            type: "image/png",
            lastModified: new Date().getTime()
          });
          console.log("blob file", file)
          let formdata = new FormData();
          formdata.append('sampleFile', file)
          console.log(await toBase64(file)) /*let b64=*/
          axios.post(`${config.server.split("/api").join("")}/upload`, formdata, {headers: {...config.headers}}).then((d) => {
            success(d.data)
          }).catch((error) => {
            failure('Erreur de connexion')
            console.error(error);
          })
        }
      },
      loadingData: false
    }
  },
  components: {
    'Navbar': NavbarVue,
    'Sidebar': SidebarVue,
    'sweet-modal': SweetModal,
    'pim': ProductImageManager,
    'editor': Editor,
    VSwatches
  },
  updated() {
    // console.log();
  },
  mounted() {
    this.loadingData = true
    axios.get(`${config.server}/product-details/category`, {headers: {...config.headers}}).then((res) => {

      this.categories = res.data;//.forEach((category) => {  console.log("categories",category)
      //   this.categories.push(category);
      // })
      axios.get(`${config.server}/product-details/tags`, {headers: {...config.headers}}).then((res2) => {
        res2.data.forEach((tag) => {
          this.tags.push(tag);
        });
        axios.get(`${config.server}/product-details/colors`, {headers: {...config.headers}}).then((res3) => {
          res3.data.forEach((color) => {
            console.log("Color", color)
            this.colors.push(color);
          });
          axios.get(`${config.server}/product-details/sizes`, {headers: {...config.headers}}).then((res4) => {
            res4.data.forEach((size) => {
              console.log("size", size)
              this.sizes.push(size);
            });
            if (this.$route.params.id) {

              // sku,name,price,discount,image,shortDescription,allowComments,categories:selectedCategories,tags:selectedTags,fullDescription,variations

              axios.get(`${config.server}/edit/${this.$route.params.id}`, {headers: {...config.headers}}).then((data) => {
                 data=data.data;
                this.sku = data.sku;
                this.name = data.name;
                this.price = data.price;
                this.discount = data.discount;
                // console.log(data.image[data.image.length-1])
                this.image = data.image[data.image.length-1];
                // toast(this.image);
                this.shortDescription = data.shortDescription;
                this.fullDescription = data.fullDescription;
                this.allowComments = data.allowComments;
                this.selectedCategories = data.category;
                this.selectedTags = data.tag;
                this.variations = data.variation;

              }).catch((error) => {
                Vue.$toast.open({message: 'Désolé, la demande n\'a pas abouti!', type: 'default'})
                console.log(error);
              }).finally(() => {
                this.loadingData = false;
              })
            } else {
              this.loadingData = false;
            }
          }).catch((error) => {
            this.loadingData = false;
            console.error(error)
            toast("Erreur de connexion")
          });
        }).catch((error) => {
          this.loadingData = false;
          console.error(error)
          toast("Erreur de connexion")
        });
      }).catch((error) => {
        this.loadingData = false;
        console.error(error)
        toast("Erreur de connexion")
      });
    }).catch((error) => {
      this.loadingData = false;
      console.error(error)
      toast("Erreur de connexion")
    });

  },
  methods: {
    onChangeVariationImage(index, link) {
      this.variations[index].image = link;
    },
    onChangeProductImage(index, link) {
      this.image = link;
    },
    askForInput: function () {
      this.$refs.file_image_input.click();
    }, onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        this.chosenImage = null;
        return;
      }
      let file = files[0];
      let context = this;
      if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
        let reader = new FileReader();
        reader.addEventListener("load", function () {
          context.chosenImage = this.result;
        }, false);
        reader.readAsDataURL(file);
        this.chosenImageFile = files[0];
      } else {
        toast('Le fichier sélectionné n\'est pas une image')
      }
    },
    openTagCreateModal() {
      this.$refs.modal1.open()
    },
    closeTagCreateModal() {
      this.$refs.modal1.close()
    },
    openCatCreateModal() {
      this.$refs.modal2.open()
    },
    closeCatCreateModal() {
      this.$refs.modal2.close()
    },
    openColorCreateModal() {
      this.$refs.modal3.open()
    },
    closeColorCreateModal() {
      this.$refs.modal3.close()
    },
    openSizeCreateModal() {
      this.$refs.modal4.open()
    },
    closeSizeCreateModal() {
      this.$refs.modal4.close()
    },
    save() {
      let {
        sku,
        name,
        price,
        discount,
        image,
        shortDescription,
        allowComments,
        selectedCategories,
        selectedTags,
        fullDescription,
        variations
      } = this;
      // console.log(variations,isEmpty(''))
      // return;
      let data = {
        sku,
        name,
        price,
        discount,
        image,
        shortDescription,
        allowComments,
        categories: selectedCategories,
        tags: selectedTags,
        fullDescription,
        variations
      }
      if (isEmpty({sku, name, image, price, discount, shortDescription, allowComments, fullDescription})) {
        toast("Tous les champs sont obligatoires");
        return;
      }
      if (variations.length > 0) {
        for (let i = 0; i < variations.length; i++) {
          let variation = variations[i];
          if (isEmpty({...variation})) {
            toast("Variation " + (i + 1) + " invalide! Verifiez les champs");
            return;
          } else {
            let size = variation.size;
            if (isEmpty({...size})) {
              toast("Variation " + (i + 1) + " invalide! Verifiez les tailles");
              return;
            }
          }
        }
      }
      this.savingProduct = true;

      if (this.$route.params.id) {
        axios.put(`${config.server}/edit/${this.$route.params.id}`, data, {headers: {...config.headers}}).then(() => {
          toast("Creation completee")
          this.savingProduct = false;
          this.$router.push("/admin/products")
        }).catch((error) => {
          this.savingProduct = false;
          console.error(error)
          toast("Erreur de connexion")
        });
        return;
      }
      axios.post(`${config.server}/`, data, {headers: {...config.headers}}).then(() => {
        toast("Creation completee")
        this.savingProduct = false;
        this.$router.push("/admin/products")
      }).catch((error) => {
        this.savingProduct = false;
        console.error(error)
        toast("Erreur de connexion")
      });

    },
    createNewCat() {
      if (!this.newCatName) {
        toast('Le nom de la catégorie est obligatoire')
      }
      if (this.categories.indexOf(toTitleCase(this.newCatName)) >= 0) {
        this.closeCatCreateModal();
        this.newCatName = '';
      } else {
        this.creating = true;
        this.loadingData = true;
        axios.post(`${config.server}/product-details/category`, {name: this.newCatName}, {headers: {...config.headers}}).then(() => {
          this.closeCatCreateModal();
          this.categories.push({
            name: this.newCatName
          });
          this.newCatName = '';
          this.loadingData = false;
          this.creating = false;
        }).catch((error) => {
          this.loadingData = false;
          this.creating = false;
          console.error(error)
          toast("Erreur de connexion")
        });
      }
    },
    createNewTag() {
      if (!this.newTagName) {
        toast('Le nom de l\'étiquette est obligatoire')
      }
      if (this.tags.indexOf(toTitleCase(this.newTagName)) >= 0) {
        this.closeTagCreateModal();
        this.newTagName = '';
      } else {
        this.creating = true;
        this.loadingData = true;
        axios.post(`${config.server}/product-details/tags`, {name: this.newTagName}, {headers: {...config.headers}}).then(() => {
          this.closeTagCreateModal();
          this.tags.push({
            name: this.newTagName
          });
          this.newTagName = '';
          this.loadingData = false;
          this.creating = false;
        }).catch((error) => {
          this.loadingData = false;
          this.creating = false;
          console.error(error)
          toast("Erreur de connexion")
        });
      }
    },
    createNewColor() {
      if (!this.newColorName) {
        toast('Le nom de la couleur est obligatoire')
      }
      if (this.tags.indexOf(toTitleCase(this.newColorName)) >= 0) {
        this.closeColorCreateModal();
        this.newColorName = '';
      } else {
        this.creating = true;
        this.loadingData = true;
        axios.post(`${config.server}/product-details/colors`, {
          name: this.newColorName,
          color: this.color
        }, {headers: {...config.headers}}).then(() => {
          this.closeColorCreateModal();
          this.colors.push({
            name: this.newColorName,
            color: this.color
          });
          this.newColorName = '';
          this.loadingData = false;
          this.creating = false;
        }).catch((error) => {
          this.loadingData = false;
          this.creating = false;
          console.error(error)
          toast("Erreur de connexion")
        });
      }
    },
    createNewSize() {
      if (!this.newSizeName) {
        toast('Le nom de la taille est obligatoire')
      }
      if (this.tags.indexOf(toTitleCase(this.newSizeName)) >= 0) {
        this.closeSizeCreateModal();
        this.newSizeName = '';
      } else {
        this.creating = true;
        this.loadingData = true;
        axios.post(`${config.server}/product-details/sizes`, {name: this.newSizeName}, {headers: {...config.headers}}).then(() => {
          this.closeSizeCreateModal();
          this.sizes.push({
            name: this.newSizeName
          });
          this.newSizeName = '';
          this.loadingData = false;
          this.creating = false;
        }).catch((error) => {
          this.loadingData = false;
          this.creating = false;
          console.error(error)
          toast("Erreur de connexion")
        });
      }
    },
    removeVariation(index) {
      this.$refs.modal5.open();
      this.callbackDelete = () => {
        this.$refs.modal5.close();
        this.variations.splice(index, 1);
      }
    },
    addVariationSize(index) {

      this.variations[index].size.push({
        name: this.sizes.length > 0 ? this.sizes[0].name : '',
        stock: 1
      })
    },
    removeVariationSize(variationIndex, sizeIndex) {
      this.$refs.modal5.open();
      this.callbackDelete = () => {
        this.$refs.modal5.close();
        this.variations[variationIndex].size.splice(sizeIndex, 1)
      }

    },
    addProductVariations() {
      this.variations.push({
        image: '',
        color: this.colors.length > 0 ? this.colors[0].name : '',
        size: [{
          name: this.sizes.length > 0 ? this.sizes[0].name : '',
          stock: 1
        }]
      })
    }
  },

}

</script>


<style scoped>

#featured_image {
  height: 180px;
  margin-top: 10px;
  background-color: rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ced4da;
  background-position: center;
  background-size: cover;
}

.ui.list .list > .item a.header:hover, .ui.list > .item a.header:hover {
  color: black !important;
}

.ui.list .list > .item a.header, .ui.list > .item a.header {
  color: black !important;
}
</style>
