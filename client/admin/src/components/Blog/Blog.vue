<template>
  <div>
    <Sidebar/>
    <Navbar/>
    <div v-if="loading"
         style="height:100vh;width:100vw;z-index:9999;display:flex;align-items:center;justify-content:center;top:0;bottom:0;left:0;right:0;position:fixed;background-color: rgba(255,255,255,0.8)">
      <sui-loader active centered inline size="medium" content="chargement..."/>
    </div>
    <main class="col-sm-12 col-md-9 col-lg-10 px-md-4 offset-md-2">
      <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Blog</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <router-link to="/Blog/New" class="btn btn-sm btn-outline-primary">
            <i class="fas fa-plus"></i>
            Nouveau post
          </router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" v-for="blog in blogs" :key="blog._id">
          <div class="blog-grid">
            <div class="blog-img">
              <div class="date">
                <span>{{ (blog.date.split("-")[2]).split("T")[0] }}</span>
                <label>{{ getMonthStr(blog.date.split("-")[1]) }}</label>
              </div>
              <a href="#" v-on:click="openBlog(blog._id)">
                <div :style="`background-image:url('${blog.file}')`" class="blog-d-image"></div>
<!--                <img src="https://via.placeholder.com/400x200/FFB6C1/000000" title="" alt="">-->
              </a>
            </div>
            <div class="blog-info">
              <h5><a href="javascript:void(0)"  v-on:click="openBlog(blog._id)">{{ blog.title }}</a></h5>
              <p>{{ tr(blog.description, 123) }}</p>
              <div class="btn-bar d-flex justify-content-between align-items-center">

                <sui-icon name="trash" style="cursor: pointer" v-on:click="deleteBlog(blog._id)"/>
                <sui-button content="Visualiser"  color="black"  v-on:click="openBlog(blog._id)"
                            class="float-end"></sui-button>
<!--                <a href="#" class="px-btn-arrow">
                  <span style="color: var(&#45;&#45;bs-gray-dark)">Read More</span>
                  <i class="arrow"></i>
                </a>-->
              </div>
            </div>
          </div>
        </div>
      </div>
<!--      <div v-if="blogs == undefined" class="table-responsive">
        <div class="alert alert-light">
          <div class="d-flex align-items-center">
            <strong class="text-success">Chargement des blogs...</strong>
            <div class="text-success spinner-border spinner-border-sm ms-auto" role="status" aria-hidden="true"></div>
          </div>
        </div>
      </div>
      <div v-else class="accordion" id="accordionExample">
        <div class="row" v-for="blog in blogs" :key="blog._id">
          <div class="col-sm-11 accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#w'+blog._id"
                      aria-expanded="true" aria-controls="collapseOne">
                {{ blog.title }} - {{ blog.subTitle }}
              </button>
            </h2>
            <div :id="'w'+blog._id" class="accordion-collapse collapse hide" aria-labelledby="headingOne"
                 data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul class="list-group" :key="comment._id" v-for="comment in blog.comments">
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span><i :id="comment._id" class="fas fa-eye"
                             @click="e=>{changeVisibility(e)}"></i>{{ comment.name }}</span>
                    <span @click="deleBlogComment(comment._id)" class="btn btn-danger"><i
                        class="fas fa-trash"></i></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-1" id="action-buttons">
            <span @click="setBlogId(blog._id)" class="btn btn-danger" data-bs-toggle="modal"
                  data-bs-target="#deleteBlog"><i class="fas fa-trash"></i></span>
            <span @click="goToBlog(blog._id)" class="btn btn-warning offset-sm-1" data-bs-toggle="modal"
                  data-bs-target="#modifyBlog"><i class="fas fa-edit"></i></span>
          </div>
        </div>
      </div>
      <div class="modal fade" id="deleteBlog" tabindex="-1" aria-labelledby="deleteBlog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Suppression</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Voulez-vous vraiment effectuer cette suppression?
              <button @click="deleteBlogPublication()" type="submit" class="offset-sm-1 btn btn-danger">Accepter
              </button>
            </div>
          </div>
        </div>
      </div>-->
    </main>
  </div>
</template>

<script>
import Axios from 'axios'
import config from '../../config/address'
import NavbarVue from '../Navigation/Navbar.vue';
import SidebarVue from '../Navigation/Sidebar';
import {getMonth, toast} from "@/helpers/helpers";
import {truncate} from "@/helpers/helpers";
import Vue from "vue";

export default {
  name: 'Blog',
  data() {
    return {
      blog_id: undefined,
      blogs: [],
      path: undefined,
      blog_values: [],
      loading: true
    }
  },
  components: {
    'Navbar': NavbarVue,
    'Sidebar': SidebarVue
  },
  mounted() {
    Axios.get(`${config.server}/blog`).then((response) => {
      this.blogs = response.data;
    }).catch((error) => {
      toast('Erreur de connexion')
      console.log(error);
    }).finally(() => {
      this.loading = false;
    })
  },
  methods: {
   openBlog(id){
     this.$router.push("/admin/Blog/Modification/"+id)
   },
    getMonthStr(month) {
      return getMonth(month)
    },
    tr(str, n) {
      return truncate(str, n)
    },
    // Change the visibility of a comment in a blog
    changeVisibility(e) {
      let comment = document.querySelector(`#${e.target.id}`);
      comment.className = comment.className == 'fas fa-eye' ? 'fas fa-eye-slash' : 'fas fa-eye';
      let data = comment.className == 'fas fa-eye' ? true : false;
      Axios.patch(`${config.server}/comments/visibilty/${e.target.id}`, data, {headers: {...config.headers}}).then(() => {
        this.$router.go();
      }).catch((error) => {
        console.log(error);
      })
    },
    setBlogId(id) {
      this.blog_id = id;
    },
    deleteBlogPublication() {
      Axios.delete(`${config.server}/blog/${this.blog_id}`, {headers: {...config.headers}}).then(() => {
        this.$router.go();
      }).catch((error) => {
        console.log(error);
      })
    },
    goToBlog(id) {
      this.$store.commit("setBlogId", id);
      this.$router.push(`/admin/Blog/Modification/${id}`);
    },
    deleBlogComment(comment_id) {
      Axios.delete(`${config.server}/blog/comments/${comment_id}`, {headers: {...config.headers}}).then(() => {
        this.$router.go();
      }).catch((error) => {
        console.log(error);
      })
    },
    deleteBlog: function ( id) {
      // console.log( id)
      this.loading = true;
      Axios.delete(`${config.server}/blog/${id}`, {headers: {...config.headers}}).then(() => {
        this.blogs = this.blogs.filter(blog => (blog._id !== id));
      }).catch((error) => {
        Vue.$toast.open({message: 'Erreur de connexion!', type: 'default'})
        console.log(error);
      }).finally(() => {
        this.loading = false;
      });
    },
  }
}
</script>

<style scoped>
.blog-listing {
  padding-top: 30px;
  padding-bottom: 30px;
}

.gray-bg {
  background-color: #f5f5f5;
}

/* Blog
---------------------*/
.blog-grid {
  box-shadow: 0 0 30px rgba(31, 45, 61, 0.125);
  border-radius: 5px;
  overflow: hidden;
  background: #ffffff;
  margin-top: 15px;
  margin-bottom: 15px;
}

.blog-grid .blog-img {
  position: relative;
}

.blog-grid .blog-img .date {
  position: absolute;
  background: var(--bs-dark);
  /*background: #fc5356;*/
  color: #ffffff;
  padding: 8px 15px;
  left: 10px;
  top: 10px;
  border-radius: 4px;
}

.blog-grid .blog-img .date span {
  font-size: 22px;
  display: block;
  line-height: 22px;
  font-weight: 700;
}

.blog-grid .blog-img .date label {
  font-size: 14px;
  margin: 0;
}

.blog-grid .blog-info {
  padding: 20px;
}

.blog-grid .blog-info h5 {
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 10px;
}

.blog-grid .blog-info h5 a {
  color: var(--bs-dark);
  /*color: #20247b;*/
}

.blog-grid .blog-info p {
  margin: 0;
}

.blog-grid .blog-info .btn-bar {
  margin-top: 20px;
}

.blog-d-image {
  height: 200px;
  width: 100%;
  background-position: center;
  background-size: cover
}
</style>
