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
      <label for="title5" class="form-label">Nom de l'étiquette</label>
      <sui-input v-model="newTagName" name="title" type="text" id="createTagName" placeholder="Nom de l'étiquette"
                 class="w-100"/>
      <sui-button content="Creer etiquette" color="black" :loading="creating" v-on:click="createNewTag"
                  class="mt-3 float-end mb-4"></sui-button>
    </sweet-modal>

    <sweet-modal ref="modal2" blocking>
      <h3>Créer une nouvelle catégorie</h3>
      <label for="title5" class="form-label">Nom de la catégorie</label>
      <sui-input v-model="newCatName" name="title" type="text" id="createCatName" placeholder="Nom de l'étiquette"
                 class="w-100"/>
      <sui-button content="Creer catégorie" color="black" :loading="creating" v-on:click="createNewCat"
                  class="mt-3 float-end mb-4"></sui-button>
    </sweet-modal>

    <main class="col-sm-12 col-md-9 col-lg-10 px-md-4 offset-md-2">
      <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2" v-if="$route.params.id">Modifier un blog</h1>
        <h1 class="h2" v-else>Ajouter un nouveau blog</h1>
      </div>
      <div>
        <div class="row">
          <sui-form-field class="col-xs-12 col-sm-6 mt-2">
            <label for="title5" class="form-label">Titre de la publication</label>
            <sui-input v-model="title" name="title" type="text" id="title5" placeholder="Titre de la publication"
                       class="w-100"/>
          </sui-form-field>
          <div class="col-xs-12 col-sm-6 mt-2">
            <label for="subtitle" class="form-label">Sous-titre</label>
            <sui-input v-model="subtitle" name="subtitle" type="text" id="subtitle"
                       placeholder="Sous-titre de la publication" class="w-100"/>
          </div>
        </div>
        <div class="row">
          <sui-form-field class="col-xs-12 col-sm-6 mt-3">
            <label for="meta_description" class="form-label">Description</label>
            <textarea v-model="meta_description" name="subtitle" type="text" class="form-control" id="meta_description"
                      style="height: 200px"></textarea>
          </sui-form-field>
          <div class="col-xs-12 col-sm-6 mt-3">
            <input type="file" style="display: none" ref="file_image_input" v-on:change="onFileChange">
            <label for="featured_image" class="form-label">Télécharger l'image du blog</label>
            <div id="featured_image" :style="`background-image:url('${chosenImage}')`" v-on:click="askForInput">
              <i class="fa fa-camera fa-3x" v-if="!chosenImage"></i>
              <i class="fa fa-camera fa-3x text-white" v-if="chosenImage"></i>
            </div>
            <center class="mt-4">
              <sui-button content="Choisir une image" color="black" v-on:click="askForInput"/>
            </center>
          </div>
        </div>


        <div class="row">
          <sui-form-field class="col-xs-12 col-sm-6 mt-3">
            <label for="tagsInput" class="form-label">Etiquettes</label>
            <sui-dropdown
                id="tagsInput"
                fluid
                :options="tags.map(t=>({key:t,value:t,text:t}))"
                placeholder="Selectionner les etiquettes"
                search
                selection
                multiple
                v-model="selectedTags"
                :loading="loadingData"
            />
            <sui-button content="Creer etiquette" color="black" v-on:click="openTagCreateModal"
                        class="mt-3 float-end mb-4"></sui-button>
          </sui-form-field>
          <sui-form-field class="col-xs-12 col-sm-6 mt-3">
            <label for="tagsInput" class="form-label">Cat&eacute;gories</label>
            <sui-dropdown
                id="categoriesInput"
                fluid
                :options="categories.map(t=>({key:t,value:t,text:t}))"
                placeholder="Selectionner les categories"
                search
                selection
                multiple
                v-model="selectedCategories"
                :loading="loadingData"
            />
            <sui-button content="Creer Categories" color="black" v-on:click="openCatCreateModal"
                        class="mt-3 float-end mb-4"></sui-button>
          </sui-form-field>

        </div>
        <div class="row">
          <div class="col-xs-12 mt-3">
            <label for="content" class="form-label">Contenu</label>
            <editor id="content"
                    api-key="trswb4s1p1zhbjldzy2ayx8z2v8v2iqb4eqgumyk0my6n7ip"
                    :init="tinymceConfig" v-model="body"
            />
          </div>
          <div class="col-xs-12 col-sm-6 mt-3">
            <input v-model="allowComments" name="allowComments" class="form-check-input" type="checkbox" value=""
                   id="acceptCOmments" style="margin-right: 10px;">
            <label for="acceptCOmments" class="form-label">Accepter les commentaires</label>
          </div>
        </div>
        <sui-button content="Enregistrer" color="black" v-on:click="submit" :loading="submitting"
                    class="mt-3 mb-4 w-100"></sui-button>
      </div>
    </main>
  </div>
</template>

<script>
import config from '../../../config/address.js'
import axios from "axios";
import NavbarVue from '../../Navigation/Navbar.vue';
import SidebarVue from '../../Navigation/Sidebar.vue';
import {isEmpty, toast, toBase64, toTitleCase} from "@/helpers/helpers";
import Editor from "@tinymce/tinymce-vue";
import {SweetModal} from "sweet-modal-vue";
import Vue from "vue";
// import UploadImages from "vue-upload-drop-images"
export default {
  name: 'Add_blog',
  data() {
    let useDarkMode = false;
    return {
      formData: new FormData(),
      tags: [],
      categories: [],
      body1: '',
      body2: '',
      body3: '',
      body4: '',
      title: '',
      subtitle: '',
      allowComments: "",
      data: [],
      choosen_tag: [],
      choosen_categories: [],
      selectedTags: [],
      selectedCategories: [],
      loadingData: true,
      meta_description: '',
      chosenImage: null,
      chosenImageFile: null,

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
        height: 600,
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
      creating:false,
      newTagName:'',
      newCatName:'',
      submitting:false,
    }
  },
  components: {
    'Navbar': NavbarVue,
    'Sidebar': SidebarVue,
    'editor': Editor,
    'sweet-modal': SweetModal
    // UploadImages
  },
  mounted() {
    this.loadingData = true
    axios.get(`${config.server}/blog-details/category`, {headers: {...config.headers}}).then((res) => {
      res.data.forEach((category) => {
        this.categories.push(toTitleCase(category.name));
      })
      axios.get(`${config.server}/blog-details/tags`, {headers: {...config.headers}}).then((res) => {
        res.data.forEach((tag) => {
          this.tags.push(toTitleCase(tag.name));
        });
        if(this.$route.params.id){
          axios.get(`${config.server}/blog/${this.$route.params.id}`,{headers: {...config.headers}}).then((data) => {
            let blog = data.data;
            this.body=blog.body;
            this.selectedTags=blog.tags;
            this.selectedCategories=blog.category;
            this.meta_description=blog.description;
            this.title=blog.title;
            this.subtitle=blog.subTitle;
            this.chosenImage=blog.file;
            this.allowComments=blog.allowComments;
          }).catch((error) => {
            Vue.$toast.open({message: 'Désolé, la demande n\'a pas abouti!', type: 'default'})
            console.log(error);
          }).finally(() => {
            this.loadingData = false;
          })
        }else{
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

  },
  methods: {
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
    registerVariations(variation_name) {
      variation_name == 'tags' ? this.data = this.tags : null;
      variation_name == 'category' ? this.data = this.categories : null;
      axios.put(`${config.server}/blog-details/${variation_name}`, {name: this.data}, {headers: {...config.headers}}).then(() => {
        this.$router.go();
      }).catch((error) => {
        console.log(error);
      });
    },
    manageFormdata() {

      /*this.formData.append('file', this.$refs.file1.files[0]);
      this.formData.append('file2', this.$refs.file2.files[0]);
      this.formData.append('title', this.title);
      this.formData.append('subtitle', this.subtitle);
      this.formData.append('tags', this.choosen_tag);
      for (let element of this.choosen_categories) {
        this.formData.append('category', element);
      }
      this.formData.append('body', this.body1)
      this.formData.append('body2', this.body2)
      this.formData.append('body3', this.body3)
      this.formData.append('bodyQuote', this.body4);
      this.formData.append('allowComments', this.allowComments);*/
    },
    submit() {
      let data=  {
        title:this.title,
        subtitle:this.subtitle,
        tags:this.selectedTags,
        categories:this.selectedCategories,
        description:this.meta_description,
        body:this.body,
        cover:this.chosenImage
      }
      if(isEmpty(data)){
        toast("Tous les champs sont obligatoires");
        return;
      }
      data.allowComments=this.allowComments;
      this.submitting=true
      let formData = new FormData();
      // Object.keys(data).forEach(key=>{
        formData.append('sampleFile',this.chosenImageFile)
      // })
      if(this.$route.params.id){
        if(this.chosenImageFile){
          //upload file first of all
          axios.post(`${config.server.split("/api").join("")}/upload`, formData, {headers: {...config.headers}}).then((d) => {
            data.cover=d.data;
            axios.put(`${config.server}/blog/${this.$route.params.id}`, data, {headers: {...config.headers}}).then(() => {
              toast("Blog modifie avec sucess")
              this.$router.push('/admin/Blog');
            }).catch((error) => {
              toast("Erreur de connexion")
              console.log(error);
            }).finally(()=>{
              this.submitting=false;
            })
          }).catch((error) => {
            toast('Erreur de connexion')
            console.error(error);
            this.submitting=false;
          })
        }else{
          //pas besoin
          axios.put(`${config.server}/blog/${this.$route.params.id}`, data, {headers: {...config.headers}}).then(() => {
            toast("Blog modifie avec sucess")
            this.$router.push('/admin/Blog');
          }).catch((error) => {
            toast("Erreur de connexion")
            console.log(error);
          }).finally(()=>{
            this.submitting=false;
          })
        }

        return;
      }
      //creation scenario
      axios.post(`${config.server.split("/api").join("")}/upload`, formData, {headers: {...config.headers}}).then((d) => {
        data.cover=d.data;
        axios.post(`${config.server}/blog`, data, {headers: {...config.headers}}).then(() => {
          toast("Blog cree avec sucess")
          this.$router.push('/admin/Blog');
        }).catch((error) => {
          toast("Erreur de connexion")
          console.log(error);
        }).finally(()=>{
          this.submitting=false;
        })
      }).catch((error) => {
        toast('Erreur de connexion')
        console.error(error);
        this.submitting=false;
      })


    },
    openTagCreateModal(){
      this.$refs.modal1.open()
    },
    closeTagCreateModal(){
      this.$refs.modal1.close()
    },
    openCatCreateModal(){
      this.$refs.modal2.open()
    },
    closeCatCreateModal(){
      this.$refs.modal2.close()
    },
    createNewCat(){
      if(!this.newCatName){
        toast('Le nom de la catégorie est obligatoire')
      }
      if(this.categories.indexOf(toTitleCase(this.newCatName))>=0){
        this.closeCatCreateModal();
        this.newCatName='';
      }else{
        this.creating=true;
        this.loadingData=true;
        axios.post(`${config.server}/blog-details/category`, {name:this.newCatName},{headers: {...config.headers}}).then(() => {
          this.closeCatCreateModal();
          this.categories.push(toTitleCase(this.newCatName));
          this.newCatName='';
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
    createNewTag(){
      if(!this.newTagName){
        toast('Le nom de l\'étiquette est obligatoire')
      }
      if(this.tags.indexOf(toTitleCase(this.newTagName))>=0){
        this.closeTagCreateModal();
        this.newTagName='';
      }else{
        this.creating=true;
        this.loadingData=true;
        axios.post(`${config.server}/blog-details/tags`, {name:this.newTagName},{headers: {...config.headers}}).then(() => {
          this.closeTagCreateModal();
          this.tags.push(toTitleCase(this.newTagName));
          this.newTagName='';
          this.loadingData = false;
          this.creating = false;
        }).catch((error) => {
          this.loadingData = false;
          this.creating = false;
          console.error(error)
          toast("Erreur de connexion")
        });
      }
    }
  }
}
</script>

<style scoped>
.modal-dialog {
  max-width: 45%;
}

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
</style>
