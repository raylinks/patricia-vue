<template>
<div>
	<nav-bar v-if="this.$route.path !== '/dash'"></nav-bar>
    <!-- Page Heading Section Start -->
	<div class="pagehding-sec">
		<div class="images-overlay"></div>
		<div class="container">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="page-heading">
						<h1>General inspection</h1>
						<ul>
							<li><a href="index-2.html">Team</a></li>
							<li><a href="#">Important Dates</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Page Heading Section End -->
	<!-- Service Section Start -->


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
