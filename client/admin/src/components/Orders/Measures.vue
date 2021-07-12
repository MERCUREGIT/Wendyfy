<template>
    <div>
        <Sidebar />
        <Navbar />
        <main class="col-sm-12 col-md-9 col-lg-10 px-md-4 offset-md-2">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Mesures</h1>
            </div>
                <div class="animatedParent animateOnce">
                    <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" id="realized-tab" data-bs-toggle="tab" href="#realized" role="tab" aria-controls="realized" aria-selected="true">Réalisées</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="unrealized-tab" data-bs-toggle="tab" href="#unrealized" role="tab" aria-controls="unrealized" aria-selected="false">Non réalisées</a>
                        </li>
                    </ul>
                    <div class="tab-content my-3" id="myTabContent">
                        <Realized :realized_measures="realized_measures"/>
                        <Unrealized :unrealized_measures="unrealized_measures"/>
                    </div>
                </div>
        </main>
    </div>
</template>

<script>
    import axios from 'axios'
    import config from '../../config/address.js'
    import RealizedVue from './Measure-status/Realized.vue'
    import UnrealizedVue from './Measure-status/Unrealized.vue';
    import NavbarVue from '../Navigation/Navbar.vue';
    import SidebarVue from '../Navigation/Sidebar.vue';
    export default {
        name: "Measures",
        data() {
            return{
                realized_measures: [],
                unrealized_measures: []
            }
        },
        components:{
            'Realized': RealizedVue,
            'Unrealized': UnrealizedVue,
            'Navbar': NavbarVue,
            'Sidebar': SidebarVue
        },
        mounted(){
            axios.get(`${config.server}/special-order`, {headers: {...config.headers}}).then((response)=>{
                response.data.forEach((measure)=>{
                    if (measure.deliveryStatus) {
                        this.realized_measures.push(measure);
                    } else {
                        this.unrealized_measures.push(measure);
                    }
                })
            }).catch((error)=>{
                console.log(error);
            })
        }
    }
</script>

<style>

</style>