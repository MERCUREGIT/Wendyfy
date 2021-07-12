<template>
     <div :id='uuid.v4()' class="row d-flex justify-content-between flex-wrap shadow rounded my-3">
         <div class="col-2">
              <img style="width:100%; height:100%" :src="url" alt="">
         </div>
         <div class="col-4 pt-1 align-middle">
             <h5 class="text-center" >
                 <strong>Tailles </strong> 
                 <hr>
             </h5>
         </div>
         <div class="col-4 pt-1 align-middle">
             <h5 class="text-center" >
                 <strong>Couleurs </strong> 
                 <hr>
             </h5>
         </div>
         <div class="col-2">
               <button type="button" class="offset-sm-1 btn btn-danger" @click="this.$emit('remove-variation')"><i class="fas fa-trash"></i></button>
         </div>
      
    </div>
</template>

<script>
import { uuid } from "vue-uuid";

    export default {
        name:"VariationListItem",
        props:{
            item: Object,
        },
        data(){
            return {
                 uuid: uuid,
                url:new String("https://static.thenounproject.com/png/485692-200.png")
            } },
        created(){
            
            }
    }
</script>