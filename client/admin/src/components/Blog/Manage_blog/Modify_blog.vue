<template>
    <div>
        <Sidebar />
        <Navbar />
        <main class="col-sm-12 col-md-9 col-lg-10 px-md-4 offset-md-2">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Modifier le blog</h1>
            </div>
            <div>
                            <div class="row">
                                <div class="col-6">
                                    <label for="file" class="col-form-label s-12">Image du blog</label>
                                    <input ref="file" name="file" type="file" id="image" class="form-control r-0 light s-12" accept=".png, .jpeg, .jpg" multiple required>
                                </div>
                                <div class="col-6">
                                    <label for="file" class="col-form-label s-12">Image de description</label>
                                    <input ref="file2" name="file2" type="file" id="image" class="form-control r-0 light s-12" accept=".png, .jpeg, .jpg" multiple required>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <label for="title" class="form-label">Titre</label>
                                    <input ref="title" name="title" type="text" class="form-control" :value="blog.title" id="title" required>
                                </div>
                                <div class="col-6">
                                    <label for="title" class="form-label">Sous-titre</label>
                                    <input ref="subtitle" name="subtitle" type="text" class="form-control" :value="blog.subTitle" id="title" required>
                                </div>
                            </div>
                            <br>
                            <div class="row">
                                <div class="col-6">
                                    <div class="card">
                                        <h5 class="card-header">Etiquettes</h5>
                                        <div class="card-body">
                                            <div class="row" v-for="(tag, i) in tags" :key="i">
                                                <div>
                                                    <div class="form-check">
                                                        <input name="tags" class="form-check-input" type="radio" :value="tag" v-model="choosen_tag" :id="'tags'+i">
                                                        <label class="form-check-label" :for="'tags'+i">
                                                            {{tag}}
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="card">
                                        <h5 class="card-header">Categories</h5>
                                        <div class="card-body">
                                            <div class="row" v-for="(category, i) in categories" :key="i">
                                                <div>
                                                    <div class="form-check">
                                                        <input name="categories" class="form-check-input" type="checkbox" :value="category" v-model="choosen_categories" :id="'categories'+i">
                                                        <label class="form-check-label" :for="'categories'+i">
                                                            {{category}}
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <label for="exampleFormControlTextarea1" class="form-label">Paragraphe 1</label>
                                    <textarea ref="body" name="body" class="form-control" id="body" rows="3" :value="blog.body" required></textarea>
                                </div>
                                <div class="col-6">
                                    <label for="exampleFormControlTextarea1" class="form-label">Paragraphe 2</label>
                                    <textarea ref="body2" name="body2" class="form-control" id="body" :value="blog.body2" rows="3"></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <label for="exampleFormControlTextarea1" class="form-label">Paragraphe 3</label>
                                    <textarea ref="body3" name="body3" class="form-control" id="body" :value="blog.body3" rows="3"></textarea>
                                </div>
                                <div class="col-6">
                                    <label for="exampleFormControlTextarea1" class="form-label">Paragraphe 4</label>
                                    <textarea ref="bodyQuote" name="bodyQuote" class="form-control" id="body" :value="blog.bodyQuote" rows="3"></textarea>
                                </div>
                            </div>
                            <div class="col-12">
                                <input ref="allowComments" name="allowComments" class="form-check-input" type="checkbox" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Accepter les commentaires
                                    </label>
                            </div>
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary" type="button" @click="submit()">Poster</button>
                            </div>
            </div>
        </main>
    </div>
</template>

<script>
    import axios from "axios"
    import config from '../../../config/address.js'
    import NavbarVue from '../../Navigation/Navbar.vue';
    import SidebarVue from '../../Navigation/Sidebar.vue';
    export default {
        name: 'Modify_blog',
        data(){
            return {
                blog: [],
                formData: new FormData(),
                tags: [],
                categories: [],
                choosen_tag: '',
                choosen_categories: []
            }
        },
        components: {
            'Navbar': NavbarVue,
            'Sidebar': SidebarVue
        },
        mounted(){
            axios.get(`${config.server}/blog/${localStorage.getItem('blog_id')}`).then((res)=>{
                this.blog = res.data;
            }).catch((error)=>{
                console.log(error);
            });

            axios.get(`${config.server}/blog-details/category`, {headers: {...config.headers}}).then((res)=>{
                res.data[0].name.forEach((category)=>{
                    this.categories.push(category);
                })
            }).catch((error)=>{
                console.log(error);
            });

            axios.get(`${config.server}/blog-details/tags`, {headers: {...config.headers}}).then((res)=>{
                res.data[0].name.forEach((tag)=>{
                    this.tags.push(tag);
                });
            }).catch((error)=>{
                console.log(error);
            });
        },
        methods: {
            getFormData(){
                this.formData.append('file', this.$refs.file.files[0]);
                this.formData.append('file2', this.$refs.file2.files[0]);
                this.formData.append('status', "");
                this.formData.append('title', this.$refs.title.value);
                this.formData.append('subtitle', this.$refs.subtitle.value);
                this.formData.append('body', this.$refs.body.value);
                this.formData.append('body2', this.$refs.body2.value);
                this.formData.append('body3', this.$refs.body3.value);
                this.formData.append('bodyQuotes', this.$refs.bodyQuote.value);
                this.formData.append('allowComments', this.$refs.allowComments.value);
                this.formData.append('tags', this.choosen_tag);
                this.formData.append('category', this.choosen_categories);
            },
            submit(){
                this.getFormData();
                axios.put(`${config.server}/blog/${this.blog._id}`, this.formData, {headers: {...config.headers}}).then(()=>{
                    this.$router.go();
                }).catch((error)=>{
                    console.log(error);
                })
            }
        }
    }
</script>

<style>

</style>