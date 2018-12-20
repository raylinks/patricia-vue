<template>
<div>
	<nav-bar v-if="this.$route.path !== '/dash'"></nav-bar>
    <!-- Page Heading Section Start -->

	<app-footer  v-if="this.$route.path !== '/dash'"></app-footer>
</div>
</template>
<script>
import Navbar from '../Navbar.vue';
import Footer from '../Footer.vue';

export default{
  components: {
		 'nav-bar': Navbar,
		  'app-footer': Footer,
  },

};
</script>
