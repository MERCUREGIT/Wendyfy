<template>
    <div>
        <Sidebar />
        <Navbar />
        <main class="col-sm-12 col-md-9 col-lg-10 px-md-4 offset-md-2">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Bannière</h1>
                <div class="btn-toolbar mb-2 mb-md-0">
                    <button type="button" class="btn btn-sm btn-outline-primary" data-bs-toggle="modal" data-bs-target="#newSlider">
                        <i class="fas fa-plus"></i>
                        Nouvelle bannière
                    </button>
                </div>
            </div>
            <div class="row">
                <div  v-for="slider in sliders" :key="slider._id" class="offset-sm-2card" id="slider1" style="width: 20rem;">
                    <img style="height: 50%" id="img1" :src="server_address+'/'+slider.image" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-success" id="title1">{{slider.title}}</h5>
                        <p class="card-text" id="text1">{{slider.subtitle}}</p>
                        <button @click="editSlider(slider)" type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#imageModifier"><i class="fas fa-edit"></i> Modifier</button>
                        <button @click="setSliderId(slider._id)" data-bs-toggle="modal" data-bs-target="#deleteSlider" type="button" class="btn btn-danger offset-sm-1"><i class="fas fa-trash"></i> Supprimer</button>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="imageModifier" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modifier la bannière</h5>
                        </div>
                        <div class="modal-body">
                                <div class="mb-3">
                                    <label for="formFile" class="form-label">Image de la bannière</label>
                                    <input ref="image" class="form-control" name="image" type="file" id="formFile">
                                </div>
                                <div class="mb-3">
                                    <label for="title" class="form-label">Titre de la bannière</label>
                                    <input ref="title" type="text" name="title" class="form-control" :value="slider_values.title" id="title">
                                </div>
                                <div class="mb-3">
                                    <label for="text" class="form-label">Phrase descriptive</label>
                                    <input ref="subtitle" name="subtitle" type="text" class="form-control" :value="slider_values.subtitle" id="button">
                                </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Fermer</button>
                            <button @click="submit()" type="button" class="btn btn-primary">Enregistrer</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="deleteSlider" tabindex="-1" aria-labelledby="deleteSlider" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Suppression</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Voulez-vous vraiment effectuer cette suppression?
                            <button @click="deleteSlider()" type="submit" class="offset-sm-1 btn btn-danger">Accepter</button>
                        </div>
                    </div>
                </div>
            </div>
            <Add-slider />
        </main>
    </div>
</template>

<script>
    import Axios from 'axios';
    import config from '../../config/address.js';
    import Add_sliderVue from './Details/Add_slider.vue'
    import NavbarVue from '../Navigation/Navbar.vue';
    import SidebarVue from '../Navigation/Sidebar.vue';
    export default {
        name: 'Slider',
        data(){
            return {
                product_id: undefined,
                sliders: [],
                path: '',
                slider_values: [],
                server_address: config.server
            }
        },
        components: {
            "Add-slider" : Add_sliderVue,
            'Navbar': NavbarVue,
            'Sidebar': SidebarVue
        },
        mounted(){
            Axios.get(`${config.server}/slider`).then((res)=>{
                this.sliders = res.data;
            }).catch((error)=>{
                console.log(error);
            });
        },
        methods: {
            setSliderId(id){
                this.product_id = id;
            },
            editSlider(values){
                this.slider_values = values;
                this.path = config.server+"/slider/edit/"+values._id;
            },
            deleteSlider(){
                Axios.delete(`${config.server}/slider/${this.product_id}`, {headers: {...config.headers}}).then(()=>{
                    this.$router.go();
                }).catch((error)=>{
                    console.log(error);
                })
            },
            submit(){
                let formData = new FormData();
                formData.append('title', this.$refs.title.value);
                formData.append('subtitle', this.$refs.title.value);
                formData.append('image', this.$refs.image.files[0]);
                
                Axios.put(`${this.path}`, formData, {headers: {...config.headers}}).then(()=>{
                    this.$router.go();
                }).catch((error)=>{
                    console.log(error);
                })
            }
        }
    }
</script>

<style></style>