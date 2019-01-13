<template>
 <div >
     <!-- <nav-bar v-if="this.$route.path !== '/dash'"></nav-bar>   -->
    <router-view/>
    <!--  <app-footer  v-if="this.$route.path !== '/dash'"></app-footer> -->


<!--     <app-dash v-if="this.$route.path == '/dash'"></app-dash> -->

  </div>
</template>
<script>
import Navbar from './views/Navbar.vue';
import Footer from './views/Footer.vue';


export default {
  components: {
    //    'nav-bar': Navbar,
    //    'app-footer': Footer,
    //    'app-dash': Transact_box,
  },
};
</script>
