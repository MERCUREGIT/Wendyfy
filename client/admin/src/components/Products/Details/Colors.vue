<template>
    <div class="m-3">
        <div>
            <button data-toggle="tooltip" data-placement="top" title="Modifier les couleurs..." type="button" class="btn btn-lg btn-warning px-3" data-bs-toggle="modal" data-bs-target="#colors"><i class="fas fa-edit"></i> Couleurs</button>
        </div>
        <div class="modal fade" id="colors" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Couleurs</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input-tag :value="colors" v-model="colors" id="colors" class="form-control r-0 light s-12"></input-tag>
                    </div>
                    <div class="modal-footer">
                        <button @click="registerColors()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Enregistrer</button>
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
        name: "Colors",
        data(){
            return{
                colors: []
            }
        },
        mounted(){
            axios.get(`${config.server}/product-details/colors`, {headers: {...config.headers}}).then((res)=>{
                res.data[0].name.forEach((color)=>{
                    this.colors.push(color);
                });
                this.$emit('new-colors', this.colors);
            }).catch((error)=>{
                console.log(error);
            });
        },
        methods:{
            registerColors(){
                axios.put(`${config.server}/product-details/colors`, {name: this.colors}, {headers: {...config.headers}}).then(()=>{
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