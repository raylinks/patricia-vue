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
						<h1>Overview</h1>
						<ul>
							<li><a href="index-2.html">Team</a></li>
							<li><a href="#">Overview</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Page Heading Section End -->

	<!-- About Us Section Start -->
	<div class="about-us-sec pt-50 pb-50">
		<div class="container">
			<div class="row">
				<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
					<div class="abt-img">
						<img src="img/about.jpg" alt=""/>
					</div>
				</div>
				<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
					<div class="abt-lft">
						<h2>OVERVIEW. </h2>
						<p>A club comprised of sales champion in the real estate sector dedicated to developing a real estate culture..</p>
						 <div class="hd-rgt">
            <ul>
              <li><a href="#">JOIN</a></li>
            </ul>
          </div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- About Us Section End -->
	<!-- Team Section Start -->

	<!-- Team Section End -->
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
