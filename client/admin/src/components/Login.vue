<template>
    <main>
        <div id="primary" class="p-t-b-100 height-full ">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 mx-md-auto">
                        <div class="text-center">
                            <img src="../assets/img/dummy/u5.png" alt="">
                            <h3 class="mt-2">Bienvenu</h3>
                            <p class="p-t-b-20">Remplissez ce formulaire pour vous connecter.
                                Nous vous conseillons de ne pas partager ces identifiants.</p>
                        </div>
                        <div class="row g-3">
                            <div class="col-12">
                                <label for="login" class="form-label">Nom d'utilisateur</label>
                                <input type="text" class="form-control" id="login" v-model="login">
                            </div>
                            <div class="col-12">
                                <label for="password" class="form-label">Mot de passe</label>
                                <input type="password" class="form-control" id="password" v-model="password">
                            </div>
                            <div class="col-12">
                                <div class="form-check">
                                    <input @click="check()" name="allowComments" class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Afficher / Masquer le mot de passe
                                    </label>
                                </div>
                            </div>
                            <div class="d-grid gap-2">
                                <button @click="(e)=>submit(e)" type="button" class="btn btn-primary">
                                    <span v-if="spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    {{button_text}}
                                </button>
                            </div>

                            <div class="alert alert-danger alert-dismissible" role="alert" v-if="error">
                                <strong>Une erreur s'est produite!</strong> Veuillez rééssayer!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import axios from 'axios';
    import config from '../config/address.js'
    export default {
        name: "Login",
        data(){
            return{
                login : "",
                password : "",
                // isAdmin: false,
                error: false,
                button_text: "Envoyer",
                spinner: false,
                reponse: ""
            }
        },
        methods: {
            submit(e){
                e.target.disabled = "disabled";
                this.button_text = "Connexion en cours...";
                this.spinner = true;
                this.error = false;
                axios.post(`${config.server}/authentication/login`, {email : this.login, password : this.password}).then((res)=>{
                    document.cookie = res.data.accessToken;
                    if(res.data.userRole === "admin"){
                         document.cookie += "accessToken="+res.data.accessToken;
                        if (typeof window.localStorage !==  undefined) {
                            window.localStorage.setItem("token", res.data.accessToken);
                            window.localStorage.setItem("username", res.data.username);
                            window.localStorage.setItem("isAdmin", true);
                                setTimeout(()=>{
                                alert('Please you need to log back again');
                                axios.delete(`${config.server}/authentication/logout`).then(()=>{
                                    this.$router.push("/");
                                    window.localStorage.removeItem("isAdmin");
                                    window.localStorage.removeItem("token");
                                    window.localStorage.removeItem("username");
                                }).catch(async ()=>{
                                })
                            },60*60*1000)
                        }
                        this.$router.push('/products')
                    }
                    else{
                        this.$router.push('/404');
                        window.localStorage.setItem("isAdmin", false)
                    }
                }).catch((error)=>{
                    console.log(error);
                    this.error = true;
                    this.button_text = "Envoyer";
                    this.spinner = false;
                    e.target.disabled = false;
                })
            },
            logout(){
            axios.delete(`${config.server}/authentication/logout`)
            .then(()=>{
                this.$router.push("/");
                window.localStorage.removeItem("isAdmin");
                document.cookie +="accessToken"+";max-age=0"; 
            })
        },
            check(){
                if (document.querySelector('#flexCheckDefault').checked == true) {
                    document.querySelector('#password').setAttribute('type', 'text')
                } else {
                    document.querySelector('#password').setAttribute('type', 'password')
                }
            }
        },
        beforeMount(){
           window.localStorage.removeItem("isAdmin");
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("username");
        },
    }
</script>

<style></style>