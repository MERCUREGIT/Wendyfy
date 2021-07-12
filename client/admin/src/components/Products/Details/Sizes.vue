<template>
    <div class="m-3">
        <div >
            <button type="button" class="btn btn-lg btn-primary px-3" data-bs-toggle="modal" data-bs-target="#sizes"><i class="fas fa-edit"></i> Tailles</button>
        </div>
        <div class="modal fade" id="sizes" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Tailles</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input-tag :value="sizes" v-model="sizes" id="sizes" class="form-control r-0 light s-12"></input-tag>
                    </div>
                    <div class="modal-footer">
                        <button @click="registerSizes()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Enregistrer</button>
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
        name: 'Sizes',
        data(){
            return {
                sizes: []
            }
        },
        mounted(){
            axios.get(`${config.server}/product-details/sizes`, {headers: {...config.headers}}).then((res)=>{
                res.data[0].name.forEach((size)=>{
                    this.sizes.push(size);
                });
                this.$emit('new-sizes', this.sizes);
            }).catch((error)=>{
                console.log(error);
            });
        },
        methods: {
            registerSizes(){
                axios.put(`${config.server}/product-details/sizes`, {name: this.sizes}, {headers: {...config.headers}}).then(()=>{
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