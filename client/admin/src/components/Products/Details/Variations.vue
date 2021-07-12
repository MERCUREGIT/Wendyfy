<template>
    <div class="row g-3 border rounded p-2 justify-content-center">
        <div class="col-1">
            <div @click="handleClick"  class="border rounded">
                <img style="width:100%; height:100%" :src='url===""?"https://static.thenounproject.com/png/485692-200.png" : this.url' >
            </div>
            <input style="display: none;" @change="handleChange"  name="image" type="file" id="variation_image" class="form-control r-0 light s-12" required>
        </div>
        <div class="col-4">
            <div class="card">
                <h5 class="card-header">Tailles</h5>
                <div class="card-body">
                    <div class="row" v-for="(size, i) in sizes" :key="i">
                        <div class="offset-sm-1 col-sm-3 form-check">
                            <input @click="activateInput(i)" name="size" :class="'form-check-input size'+i" type="checkbox" :value="size" :id="uuid.v4()">
                            <label class="form-check-label">
                                {{size}}
                            </label>
                        </div>
                        <div class="col-sm-8">
                            <input name="stock" :class="'form-control input'+i" type="text" :id="uuid.v4()" placeholder="Quantité" disabled>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-3">
            <div class="card">
                <h5 class="card-header">Couleurs</h5>
                <div class="card-body">
                    <div class="row" v-for="(color, i) in colors" :key="i">
                        <div>
                            <div class="col-sm-4 form-check">
                                <input name="color" class="form-check-input" type="checkbox" :value="color" :id="uuid.v4()">
                                <label class="form-check-label">
                                    {{color}}
                                </label>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-2">
            <button type="button" class="btn btn-warning" @click="addVariation()"><i class="fas fa-plus"></i></button>
            <button type="button" class="offset-sm-1 btn btn-danger" @click="removeVariation()"><i class="fas fa-trash"></i></button>
        </div>
    </div>
</template>

<script>
import { uuid } from "vue-uuid";
    export default {
        name: 'Variations',
        data(){
            return {
                uuid:uuid,
                url:""
            }
        },
        props: ["index", "colors", "sizes", "widget"],
        methods: {
            addVariation(){
                this.$emit('add-variation');
            },
            removeVariation(){
                this.$emit('remove-variation');
            },
            activateInput(i){
                if (document.querySelector(`input[class='form-check-input size${i}']`).checked) {
                    document.querySelector(`input[class='form-control input${i}']`).disabled = false;
                }
                else{
                    document.querySelector(`input[class='form-control input${i}']`).disabled = true;
                }
            },
            handleClick(){
                const elem =document.getElementById("variation_image");
                    var evt = new MouseEvent('click', {bubbles: true, cancelable: true,view: window});
                    !elem.dispatchEvent(evt);
            },
            handleChange(e){
                const file = e.target.files[0];
                this.$emit('add-image-url', {
                    varIndex: this.index,
                    url:this.url
                } )
                this.url = URL.createObjectURL(file);
                console.log(this.url)
            }
        }
    }
</script>

<style>

</style>