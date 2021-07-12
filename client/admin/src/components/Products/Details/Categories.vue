<template>
    <div class="m-3">
        <div>
            <button type="button" class="btn btn-lg  btn-success px-3" data-bs-toggle="modal" data-bs-target="#categorie"><i class="fas fa-edit"></i> Catégories</button>
        </div>

        <div class="modal fade" id="categorie" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Catégories</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input-tag :value="categories" v-model="categories" id="categories" class="form-control r-0 light s-12"></input-tag>
                    </div>
                    <div class="modal-footer">
                        <button @click="registerCategories()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Enregistrer</button>
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
        name: 'Categories',
        data() {
            return{
                categories: []
            }
        },
        mounted(){
            axios.get(`${config.server}/product-details/category`, {headers: {...config.headers}}).then((res)=>{
                res.data[0].name.forEach((category)=>{
                    this.categories.push(category);
                })
                this.$emit('new-categories', this.categories);
            }).catch((error)=>{
                console.log(error);
            });
        },
        methods: {
            registerCategories(){
                axios.put(`${config.server}/product-details/category`, {name: this.categories}, {headers: {...config.headers}}).then(()=>{
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