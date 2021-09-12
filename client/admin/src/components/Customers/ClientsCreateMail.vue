<template>
  <div>
    <Sidebar/>
    <Navbar/>
    <!--
       <sweet-modal ref="modal">

        </sweet-modal>
    -->
    <div v-if="loading" style="height:100vh;width:100vw;z-index:9999;display:flex;align-items:center;justify-content:center;top:0;bottom:0;left:0;right:0;position:fixed;background-color: rgba(255,255,255,0.8)">
      <sui-loader active centered inline  size="medium" content="chargement..."/>
    </div>
    <main class="col-sm-12 col-md-9 col-lg-10 px-md-4 offset-md-2 p-5 pt-3">
      <h2 class="mb-3">Envoyer un nouveau courrier</h2>
      <label class="form-control-label mb-1 ml-2" for="object">Objet du courrier</label>
      <input class="form-control mb-3" placeholder="Objet du courrier" id="object" v-model="subject">
      <label class="form-control-label mb-1 ml-2" for="users">Utilisateur(s) &nbsp;[<u style="color: var(--bs-dark);cursor:pointer;" v-on:click="selectAllUsers" >Tout selectionner</u>]</label>
      <sui-dropdown
          id="users"
          fluid
          :options="users"
          placeholder="Select User"
          search
          selection
          multiple
          v-model="selectedUsers"
          :loading="loading"
      />
      <label class="form-control-label mb-1 ml-2 mt-3" for="content">Contenu du courrier</label>
      <editor id="content"
              api-key="trswb4s1p1zhbjldzy2ayx8z2v8v2iqb4eqgumyk0my6n7ip"
              :init="tinymceConfig" v-model="body"
      />
      <sui-button v-on:click="sendMail" :loading="submitting" content="Envoyer le courrier" color="black"
                  class="mt-3 float-end mb-4"></sui-button>
      <br/>
      <br/>
    </main>
  </div>
</template>

<script>
import Vue from 'vue';
import NavbarVue from '../Navigation/Navbar.vue';
import SidebarVue from '../Navigation/Sidebar.vue';
import Editor from '@tinymce/tinymce-vue'
import axios from "axios";
import config from '../../config/address.js';

export default {
  name: "ClientsCreate",
  data() {
    let useDarkMode = false;
    return {
      submitting: false,
      subject: "",
      loading: true,
      body: "",
      users: [
        // { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
      ],
      selectedUsers: [],
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
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'

      }
    }
  },
  mounted() {

    this.loading = true;
    axios.get(`${config.server}/authentication/users`, {headers: {...config.headers}}).then((data) => {
      let users = data.data;
      this.users = users.map(({username, email}) => {
        return {
          text: `[${username}] ${email}`,
          value: `${email}`,
          key: `${username}`,
        }
      })
      if(this.$route.params.id){
        axios.get(`${config.server}/emails/${this.$route.params.id}`,{headers: {...config.headers}}).then((data) => {
          let email = data.data;
          this.selectedUsers=email.users;
          this.subject=email.subject;
          this.body=email.body;
        }).catch((error) => {
          Vue.$toast.open({message: 'Désolé, la demande n\'a pas abouti!', type: 'default'})
          console.log(error);
        }).finally(() => {
          this.loading = false;
        })
      }else{
        this.loading = false;
      }

    }).catch((error) => {
      this.loading = false;
      Vue.$toast.open({message: 'Désolé, la demande n\'a pas abouti!', type: 'default'})
      console.log(error);
    }).finally(() => {

    })
  },
  components: {
    'Navbar': NavbarVue,
    'Sidebar': SidebarVue,
    // 'sweet-modal': SweetModal,
    'editor': Editor,

  },
  props:['id'],
  methods: {
    submit() {

    },
    selectAllUsers(){
      let context=this;
      context.selectedUsers=this.users.map(({value})=>(value))
      console.log(context.selectedUsers)
    },
    sendMail() {
      console.log(this.selectedUsers, this.subject, this.body)
      if (this.selectedUsers.length === 0) {
        Vue.$toast.open({message: 'Les utilisateurs doivent être sélectionnés!', type: 'default'})
        return;
      }
      if (!this.subject) {
        Vue.$toast.open({message: 'Le sujet ne doit pas être vide!', type: 'default'})
        return;
      }
      if (!this.body) {
        Vue.$toast.open({message: 'Le contenu ne doit pas être vide!', type: 'default'})
        return;
      }
      this.submitting=true;
      let context=this;
      let {selectedUsers,subject,body}=this;
      axios.post(`${config.server}/emails/send`,{users:selectedUsers,subject,body},{headers: {...config.headers}}).then(()=>{
        context.submitting=false;
        Vue.$toast.open({message: 'Courrier envoyé avec succès!', type: 'success'})
        context.$router.push('/Clients')
      }).catch(()=>{
        Vue.$toast.open({message: 'Erreur de connexion!', type: 'default'})
      }).finally(()=>{
        context.submitting=false;
      })
    }
  }
};
</script>


<style>

</style>
