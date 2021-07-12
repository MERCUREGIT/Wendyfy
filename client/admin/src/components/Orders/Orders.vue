<template>
  <div>
    <Sidebar/>
    <Navbar/>
    <main class="col-sm-12 col-md-9 col-lg-10 px-md-4 offset-md-2">
      <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Commandes</h1>
      </div>
      <div class="animatedParent animateOnce">
        <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <a class="nav-link " id="delivered-tab" data-bs-toggle="tab" href="#delivered" role="tab"
               aria-controls="delivered" aria-selected="true">Livrées</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link active" id="undelivered-tab" data-bs-toggle="tab"  href="#undelivered" role="tab"
               aria-controls="undelivered" aria-selected="false">Non livrées</a>
          </li>
        </ul>
        <div class="tab-content my-3" id="myTabContent">
          <Delivered/>
          <Undelivered/>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import DeliveredVue from './Order-status/Delivered.vue'
import UndeliveredVue from './Order-status/Undelivered.vue'
import NavbarVue from '../Navigation/Navbar.vue';
import SidebarVue from '../Navigation/Sidebar.vue';

export default {
  name: "Orders",
  data() {
    return {
      pos: 1
    }
  },
  components: {
    'Undelivered': UndeliveredVue,
    "Delivered": DeliveredVue,
    'Navbar': NavbarVue,
    'Sidebar': SidebarVue
  }
}
</script>

<style>

</style>