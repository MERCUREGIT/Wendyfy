<template>
    <div class="modal fade" id="newSlider" tabindex="-1" aria-labelledby="newSlider" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Nouvelle bannière</h5>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="formFile" class="form-label">Image de la bannière</label>
                            <input ref="image" class="form-control" name="image" type="file" id="formFile">
                        </div>
                        <div class="mb-3">
                            <label for="title" class="form-label">Titre de la bannière</label>
                            <input ref="title" type="text" name="title" class="form-control" id="title">
                        </div>
                        <div class="mb-3">
                            <label for="text" class="form-label">Phrase descriptive</label>
                            <input ref="subtitle" name="subtitle" type="text" class="form-control" id="button">
                        </div>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Fermer</button>
                        <button @click="submit()" type="submit" class="offset-sm-1 btn btn-primary">Enregistrer</button>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import config from "../../../config/address.js";
    export default {
        name: "Add_slider",
        data(){
            return{
                formData: new FormData()
            }
        },
        methods:{
            submit(){
                this.formData.append('image', this.$refs.image.files[0]);
                this.formData.append('title', this.$refs.title.value);
                this.formData.append('subtitle', this.$refs.subtitle.value);

                axios.post(`${config.server}/slider`, this.formData, {headers: {...config.headers}}).then(()=>{
                    this.$router.go();
                }).catch((error)=>{
                    console.log(error);
                })
            }
        }
    }
</script>

<style scoped>
</style>