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
						<h1>Property Details</h1>
						<ul>
							<li><a href="index-2.html">TEAM</a></li>
							<li><a href="#">Property</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Page Heading Section End -->
	<!-- Property Details Section Start -->
	<div class="property-sec pt-50 pb-20">
		<div class="container">
			<div class="row">
				<div class="col-md-8 col-sm-8">
					<div class="room-details">

						<div class="room-meta">
							<ul>


							</ul>
						</div>
						<div class="room-info">
							<h2><a href="#"></a></h2>

							<!-- <p><span>Bedroom: 3</span><span>Bathroom: 4</span><span>Sq Ft: 1500</span></p> -->
							<p><b>What is your current property need, lets help you meet it. Acquire or Sell</b> </p>
							<p>Contact properties@teamltd.org</p>
							<br>
							<div>
							<a href="/#/buy" class="booking-button">BUY</a>
							</div>


						</div>
						<div class="room-info">
							<h2><a href="#"></a></h2>

							<!-- <p><span>Bedroom: 3</span><span>Bathroom: 4</span><span>Sq Ft: 1500</span></p> -->

							<br>

							<div>
								<a href="/#/sell" class="booking-button">SELL</a>
							</div>

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
