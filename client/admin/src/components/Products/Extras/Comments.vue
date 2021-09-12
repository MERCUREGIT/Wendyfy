<template>
    <div class="modal fade" id="comments" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Commentaires du produit</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div v-if="isComment == true">
                        <ul class="list-group" :key="comment._id" v-for="comment in comments">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <span><i :id="comment._id" class="fas fa-eye" @click="e=>{changeVisibility(e)}"></i> <b>{{comment.name}}</b> - {{comment.comment}}</span>
                                <span @click="deleteProductComment(product_id, comment._id)" class="btn btn-danger"><i class="fas fa-trash"></i></span>
                            </li>
                        </ul>
                    </div>
                    <div class="d-flex align-items-center" v-else>
                        <strong>Chargement des commentaires...</strong>
                        <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['isComment', 'comments','product_id'],
        methods: {
            changeVisibility(){

            },
            deleteProductComment(){
                console.log(this.product_id)
            }
        }
    }
</script>

<style>

</style>