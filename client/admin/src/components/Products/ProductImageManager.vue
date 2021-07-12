<template>



      <div>
        <input type="file" style="display: none" ref="file_image_input" v-on:change="onFileChange">
        <label :for="`featured_image-${id}`" class="form-label">Télécharger l'image du produit</label>
        <div :id="`featured_image-${id}`" class="featured_image" :style="`background-image:url('${chosenImage}')`" v-on:click="askForInput">
          <i class="fa fa-camera fa-3x" v-if="!chosenImage"></i>
          <i class="fa fa-camera fa-3x text-white" v-if="chosenImage"></i>
        </div>
        <sui-progress
            v-if="uploading"
            attached
            bottom
            color="green"
            :percent="percent"
            :label="`${percent}%`"
        />
        <center class="mt-4">
          <sui-button content="Choisir une image" size="tiny" color="black" v-on:click="askForInput"/>
        </center>


      </div>


</template>


<script>

import {toast} from "@/helpers/helpers";
import axios from "axios";
import config from "@/config/address";


export default {
  name: 'PIM',
  data(){
    return {
      chosenImage:'',
      id:Math.random(),
      percent:43,
      uploading:false

    }
  },
  props:['onChange','index','value'],
  components: {


  },
  mounted() {
    if(this.value){
      this.chosenImage=this.value;
    // toast(this.value)
      this.onChange(this.index,this.value)
    }
  },  
  watch: {
    value: function(newVal) { // watch it
      this.chosenImage=this.value;
      this.onChange(this.index,newVal)
    }
  },
  updated() {
  },
  methods: {

    askForInput: function () {
      if(this.uploading){
        toast("Veuillez patienter");
        return;
      }
      this.$refs.file_image_input.click();
    }, onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        // this.chosenImage = null;
        return;
      }
      let file = files[0];
      let context = this;
      if (/\.(jpe?g|png|gif|webm|jfif)$/i.test(file.name)) {
        this.progress=0;
        this.uploading=true;
        let reader = new FileReader();
        reader.addEventListener("load", function () {
          context.chosenImage = this.result;
        }, false);
        reader.readAsDataURL(file);
        this.chosenImageFile = files[0];
        let formData = new FormData();
        formData.append('sampleFile',this.chosenImageFile)
        axios.post(`${config.server.split("/api").join("")}/upload`, formData, {headers: {...config.headers},onUploadProgress: progressEvent => {
            console.log(progressEvent.loaded)
            this.progress=progressEvent.loaded*100;
          }}).then((d) => {
          context.chosenImage=d.data;
          context.onChange(context.index,d.data); // call on change on the parent
          this.uploading=false;
        }).catch(e=>{
          this.uploading=false;
          console.error(e)
          toast("Erreur de telechargement")
        });
      } else {
        toast('Le fichier sélectionné n\'est pas une image')
      }
    }
  }
}

</script>


<style>

.featured_image {
  height: 200px;
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
