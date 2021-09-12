<template>
    <div class="m-3" >
        <div>
            <button type="button" class="btn btn-lg btn-danger px-3" data-bs-toggle="modal" data-bs-target="#tag"><i class="fas fa-edit"></i> Etiquettes</button>
        </div>
        <div class="modal fade" id="tag" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Etiquettes</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input-tag :value="tags" v-model="tags" id="tags" class="form-control r-0 light s-12"></input-tag>
                    </div>
                    <div class="modal-footer">
                        <button @click="registerTags()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Enregistrer</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import config from '../../../config/address.js';
    export default {
        name: 'Tags',
        data(){
            return{
                tags: []
            }
        },
        mounted(){
            axios.get(`${config.server}/product-details/tags`, {headers: {...config.headers}})
                .then((res)=>{
                    res.data[0].name.forEach((tag)=>{
                        this.tags.push(tag);
                    });
                    this.$emit('new-tags', this.tags);
                })
                .catch((error)=>{
                    console.log(error);
                });
        },
        methods: {
            registerTags(){
                axios.put(`${config.server}/product-details/tags`, {name: this.tags}, {headers: {...config.headers}}).then(()=>{
                    this.$router.go();
                }).catch((error)=>{
                    console.log(error);
                });
            }
        }
    }
</script>

<style>
    
</style>