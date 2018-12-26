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
						<h1>Contact Us</h1>
						<ul>
							<li><a href="index-2.html">Home</a></li>
							<li><a href="#">Contact Us</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Page Heading Section End -->

	<!-- Contact Section Start -->
	<section class="contact-form-sec pt-50 pb-50">
		<div class="container">
			<div class="row">
				<div class="col-md-8">
					<div class="contact-field">
						<h2>send us a message</h2>
						<div class="col-md-4 col-sm-4 col-xs-12">
							<div class="single-input-field">
								<h4>Yor name (required) </h4>
								<input type="text"/>
							</div>
						</div>
						<div class="col-md-4 col-sm-4 col-xs-12">
							<div class="single-input-field">
								<h4>Your Email *</h4>
								<input type="email"/>
							</div>
						</div>
						<div class="col-md-4 col-sm-4 col-xs-12">
							<div class="single-input-field">
								<h4>Subject</h4>
								<input type="text"/>
							</div>
						</div>
						<div class="col-md-12 message-input">
							<div class="single-input-field">
								<h4>Messages</h4>
								<textarea></textarea>
							</div>
						</div>
						<div class="col-md-4 col-sm-4 col-xs-12">
							<div class="single-input-fieldsbtn">
								<input type="submit" value="send "/>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="contact-person">
						<h1>main office</h1>
						<div class="single-info">
							<h2>Address</h2>
							<p>Top floor Rear Building, 22 Olufunmilayo street, Dideolu estate, 1st Gate Bus Stop. Ogba Ikeja.</p>
						</div>
						<div class="single-info">
							<h2>Email: </h2>
							<p>findus@teamltd.org</p>
						</div>
						<div class="single-info">
							<h2>Phone:</h2>
							<p>+2348022430140</p>
						</div>
						<div class="single-info">
							<h2>Skype:</h2>
							<p>your_skype</p>
						</div>
					</div>
				</div>
			</div>
			<!-- Google Map Section Start -->
				<div class="row">
					<div class="col-md-12">
						<div class="map-heading">
							<h2>Find Us on Google Map</h2>
						</div>
						<div class="map-sec">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d503103.25504622894!2d-118.94592338887756!3d34.065964560335836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2z4Kay4Ka4IOCmj-CmnuCnjeCmnOCnh-CmsuCnh-CmuCwg4KaV4KeN4Kav4Ka-4Kay4Ka_4Kar4KeL4Kaw4KeN4Kao4Ka_4Kav4Ka84Ka-LCDgpq7gpr7gprDgp43gppXgpr_gpqgg4Kav4KeB4KaV4KeN4Kak4Kaw4Ka-4Ka34KeN4Kaf4KeN4Kaw!5e0!3m2!1sbn!2sbd!4v1497798250780" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
						</div>
					</div>
				</div>
			<!-- Google Map Section End -->
		</div>
	</section>
	<!-- Contact Section End -->

		 <app-footer  v-if="this.$route.path !== '/dash'"></app-footer>

</div>
</template>
<script>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';

export default{
  components: {
		 'nav-bar': Navbar,
		  'app-footer': Footer,
  },

};
</script>
