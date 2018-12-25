<template>
<div>
	<nav-bar ></nav-bar>
<!-- Page Heading Section Start -->
	<div class="pagehding-sec">
		<div class="images-overlay"></div>
		<div class="container">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="page-heading">
						<h1>ARCHLINE</h1>
						<ul>
							<li><a href=""></a></li>
							<li><a href="#">Our Service includes</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Page Heading Section End -->
	<!-- Service Section Start -->
	<div class="service-sec pt-50 pb-20">
		<div class="container">
			<div class="row">
				<div class="col-md-4 col-sm-6 inner">
					<div class="media">
						<div class="icon">
							<i class="fa fa-home"></i>
						</div>
						<div class="media-body">
							<h2>Building Design</h2>
							<p>..................................</p>
							<a href="/#/building" class="btn morebutton">Read More</a>
						</div>
					</div>
				</div>
				<div class="col-md-4 col-sm-6 inner">
					<div class="media">
						<div class="icon">
							<i class="fa fa-mortar-board"></i>
						</div>
						<div class="media-body">
							<h2>Interior & Exterior Decorations</h2>
							<p>....................</p>
							<a href="/#/interior" class="btn morebutton">Read More</a>
						</div>
					</div>
				</div>
				<div class="col-md-4 col-sm-6 inner">
					<div class="media">
						<div class="icon">
							<i class="fa fa-users"></i>
						</div>
						<div class="media-body">
							<h2>Site Supervision</h2>
							<p>..................................</p>
							<a href="/#/sitesupervision" class="btn morebutton">Read More</a>
						</div>
					</div>
				</div>
				<div class="col-md-4 col-sm-6 inner">
					<div class="media">
						<div class="icon">
							<i class="fa fa-users"></i>
						</div>
						<div class="media-body">
							<h2>3D Visualization</h2>
							<p>......................................</p>
							<a href="/#/visualization" class="btn morebutton">Read More</a>
						</div>
					</div>
				</div>
				<div class="col-md-4 col-sm-6 inner">
					<div class="media">
						<div class="icon">
							<i class="fa fa-home"></i>
						</div>
						<div class="media-body">
							<h2>Modelling</h2>
							<p>..........</p>
							<a href="/#/modelling" class="btn morebutton">Read More</a>
						</div>
					</div>
				</div>
				<div class="col-md-4 col-sm-6 inner">
					<div class="media">
						<div class="icon">
							<i class="fa fa-mortar-board"></i>
						</div>
						<div class="media-body">
							<h2>Land Scaping</h2>
							<p>.........................</p>
							<a href="/landscaping" class="btn morebutton">Read More</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
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
