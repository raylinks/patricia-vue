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
						<h1>Private Dates</h1>
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
	<div class="service-sec pt-50 pb-20">
		<div class="container">
			<div class="row">
				<div class="col-md-4 col-sm-6 inner">
					<div class="media">
						<div class="icon">
							<i class="fa fa-home"></i>
						</div>
						<div class="media-body">
							<h2>Periodic WorkChop</h2>
							<p>.................................</p>
							<a href="service-details.html" class="btn morebutton">Read More</a>
						</div>
					</div>
				</div>
				<div class="col-md-4 col-sm-6 inner">
					<div class="media">
						<div class="icon">
							<i class="fa fa-mortar-board"></i>
						</div>
						<div class="media-body">
							<h2>Our SemiCert</h2>
							<p>A seminal and concert, mega 2 in 1 combo. It occurs twice yearly.</p>
							<a href="service-details.html" class="btn morebutton">Read More</a>
						</div>
					</div>
				</div>
				<div class="col-md-4 col-sm-6 inner">
					<div class="media">
						<div class="icon">
							<i class="fa fa-users"></i>
						</div>
						<div class="media-body">
							<h2>Business Club Week</h2>
							<p>A week set aside in year to further celebrate sales champions who exceeded the  yearly exceptations.It include the varieties such as all expense trips, exclusive resorts, holiday packages, Ngo meetings, business lectures and networking e.t.c.</p>
							<a href="service-details.html" class="btn morebutton">Read More</a>
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
