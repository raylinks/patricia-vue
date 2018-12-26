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
						<h1>Estate League</h1>
						<ul>
							<li><a href="index-2.html">Home</a></li>
							<li><a href="#">Estate League</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Page Heading Section End -->
	<!-- Property Details Section Start -->

		<!-- Login Modal -->
		<!-- Modal -->
		<div class="row nav-row trans-menu">
		<div class="modal fade" id="loginModal" role="dialog">
			<div class="modal-dialog modal-sm">
				<div class="modal-content login-modal">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title"><i class="fa fa-sign-in"></i>LOGIN</h4>
					</div>
					<div class="modal-body">
						<div>
							<label><i class="fa fa-user"></i>USERNAME/EMAIL</label>
							<input class="form-control" type="text" placeholder="Username/Email">
						</div>
						<div>
							<label><i class="fa fa-key"></i>PASSWORD</label>
							<input class="form-control" type="password" placeholder="Password">
						</div>
						<a href="#" class="forgot-link">FORGOT PASSWORD?</a>
						<a href="#" class="login-link"><i class="fa fa-sign-in"></i>LOGIN</a>
					</div>
				</div>
			</div>
		</div>
	</div>


	<div class="property-sec pt-50 pb-20">
		<div class="container">
			<div class="row">
				<div class="col-md-8 col-sm-8">
					<div class="room-details">
						<div class="property-thumb">

							<!-- <div class="property-single-thumb">
								<img src="img/news3.jpg" alt=""/>
							</div>	 -->
						</div>

						<div class="room-info">
							<h2><a href="#">About League</a></h2>


							<p style="font-size:15px;"><b>A league for REAL Champions only. Here, every player and every team is a winner. Every new transaction  on this  platform, a plot of land is WON.</b></p>
							<h2><a href="#">Enter League</a></h2>
							<p>Already a Winner?</p><br>
							<div class="top-nav-login-btn ">
							<a href="/#/login"  class="booking-button"></i>Login</a>
							</div>


							<h2><a href="#">JOIN LEAGUE</a></h2>
							<p>join & become a winner. Easy!</p><br>
							<a href="/#/joining" class="booking-button">Join</a>

						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 ">
					<div class="sidebar">
						<div class="search-field">
							<form action="#">
								<input placeholder="search" type="text">
								<button type="submit"><i class="fa fa-search"></i></button>
							</form>
						</div>


						<div class="widget-two">
							<h1>Recent Post</h1>
							<div class="all_r_pst">
								<div class="media">
									<div class="relative-post">
										<div class="relative-post-thumb">
											<img src="img/r1.jpg" alt=""/>
										</div>
										<div class="media-body">
											<div class="single_r_dec">
												<h3><a href="#">Lorem ipsum dolor sit amet, sapien semper potenti maecenas id velit </a></h3>
												<p>20 April 2017</p>
											</div>
										</div>
									</div>
								</div>
								<div class="media">
									<div class="relative-post">
										<div class="relative-post-thumb">
											<img src="img/r2.jpg" alt=""/>
										</div>
										<div class="media-body">
											<div class="single_r_dec">
												<h3><a href="#">Lorem ipsum dolor sit amet, sapien semper potenti maecenas id velit </a></h3>
												<p>25 december 2017</p>
											</div>
										</div>
									</div>
								</div>
								<div class="media">
									<div class="relative-post">
										<div class="relative-post-thumb">
											<img src="img/r3.jpg" alt=""/>
										</div>
										<div class="media-body">
											<div class="single_r_dec">
												<h3><a href="#">...... </a></h3>
												<p>12 January 2019</p>
											</div>
										</div>
									</div>
								</div>
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
