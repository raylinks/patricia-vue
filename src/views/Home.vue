<template>
  <div >

  	<nav-bar v-if="this.$route.path !== '/dash'"></nav-bar>
    <div class="slider">
		<div class="all-slide owl-item">
			<div class="single-slide" style="background-image:url(img/slide1.jpg);">
				<div class="slider-overlay"></div>
				<div class="slider-text">
					<h1>Welcome To T.E.A.M LTD</h1>
					<p>A marketing outfit with ultimate bias for real estate and investment opportunities.</p>
					<ul>

						<li><a href="/#/estatedev2">Trade with us</a></li>
					</ul>
				</div>
			</div>
			<div class="single-slide" style="background-image:url(img/slide2.jpg);">
				<div class="slider-overlay"></div>
				<div class="slider-text">
					<h1>Welcome To T.E.A.M LTD</h1>
					<p>A marketing outfit with ultimate bias for real estate and investment opportunities.</p>
					<ul>
						<li><a href="/#/estatedev2">Trade with Us</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<!-- Slider Section End -->
	<!-- Booking Section End -->

	<!-- Booking Section End -->
	<!-- Service Section Start -->
	<div class="service-sec pt-50 pb-20 bg-color">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="sec-title">
						<h1>What<span>We Do</span></h1>
						<div class="border-shape"></div>
						<p></p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-3 col-sm-3 inner">
					<div class="media">
						<div class="icon">
							<i class="fa fa-home"></i>
						</div>
						<div class="media-body">
							<h2></h2>
							<p>TRAINING</p>
							<a href="service-details.html" class="btn morebutton">Read More...</a>
						</div>
					</div>
				</div>
				<div class="col-md-3 col-sm-3 inner">
					<div class="media">
						<div class="icon">
							<i class="fa fa-home"></i>
						</div>
						<div class="media-body">
							<h2></h2>
							<p>ESTATE DEV SERIES</p>
							<a href="service-details.html" class="btn morebutton">Read More</a>
						</div>
					</div>
				</div>
				<div class="col-md-3 col-sm-3 inner">
					<div class="media">
						<div class="icon">
							<i class="fa fa-mortar-board"></i>
						</div>
						<div class="media-body">
							<h2></h2>
							<p>ARCHLINE</p>
							<a href="service-details.html" class="btn morebutton">Read More</a>
						</div>
					</div>
				</div>
				<div class="col-md-3 col-sm-3 inner">
					<div class="media">
						<div class="icon">
							<i class="fa fa-users"></i>
						</div>
						<div class="media-body">
							<h2></h2>
							<p>PROPERTIES</p>
							<a href="service-details.html" class="btn morebutton">Read More</a>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
	<!-- Service Section End -->
	<!-- Room Section Start -->
	<!-- <div class="room-sec pt-50 pb-20">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="sec-title">
						<h1>Best<span>Selling</span></h1>
						<div class="border-shape"></div>
						<p>Lorem ipsum dolor sit amet, pellentesque enim lorem quis vivamus amet.</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4 col-sm-6 inner">
					<div class="single-room">
						<div class="room-thumb">
							<img src="img/room1.jpg" alt=""/>
							<div class="room-sell">
								<ul>
									<li class="feature"><a href="#">Feature</a></li>
									<li class="sell"><a href="#">For Sell</a></li>
								</ul>
							</div>
							<div class="single-room-overlay">
								<a href="property-details.html">Book Now</a>
							</div>
						</div>
						<div class="room-info">
							<h2><a href="#">Lovely Modern Home</a></h2>
							<div class="address"><i class="fa fa-map-marker"></i>Los Angeles, US</div>
							<p><span>Bedroom: 3</span><span>Bathroom: 4</span><span>Sq Ft: 1500</span></p>
							<div class="room-meta">
								<ul>
									<li><i class="fa fa-user"></i>Admin</li>
									<li><i class="fa fa-calendar"></i>1 day Ago</li>
									<li><a href="#"><i class="fa fa-heart-o"></i>500</a></li>
									<li class="price">Price: $240</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4 col-sm-6 inner">
					<div class="single-room">
						<div class="room-thumb">
							<img src="img/room2.jpg" alt=""/>
							<div class="room-sell">
								<ul>
									<li class="sell"><a href="#">For Rent</a></li>
								</ul>
							</div>
							<div class="single-room-overlay">
								<a href="property-details.html">Book Now</a>
							</div>
						</div>
						<div class="room-info">
							<h2><a href="#">Latest & Modern House</a></h2>
							<div class="address"><i class="fa fa-map-marker"></i>Los Angeles, US</div>
							<p><span>Bedroom: 3</span><span>Bathroom: 4</span><span>Sq Ft: 1500</span></p>
							<div class="room-meta">
								<ul>
									<li><i class="fa fa-user"></i>Admin</li>
									<li><i class="fa fa-calendar"></i>1 day Ago</li>
									<li><a href="#"><i class="fa fa-heart-o"></i>500</a></li>
									<li class="price">Price: $200</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 inner">
					<div class="counting_sl">
					<span><i class="fa fa-gift"></i></span><h2 class="counter">250</h2>
					<h4>Project Done</h4>
					</div>
				</div>
				<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 inner">
					<div class="counting_sl">
					<span><i class="fa fa-users"></i></span><h2 class="counter">280</h2>
					<h4>happy client</h4>
					</div>
				</div>
				<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 inner">
					<div class="counting_sl">
					<span><i class="fa fa-institution"></i></span><h2 class="counter">120</h2>
					<h4>Branches</h4>
					</div>
				</div>
				<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 inner">
					<div class="counting_sl">
					<span><i class="fa fa-user"></i></span><h2 class="counter">240</h2>
					<h4>Our employees</h4>
					</div>
				</div>
			</div>
		</div>
	</div> -->
	<!-- Count Up Section End -->
	<!-- Location Section Start -->
	<div class="locations-sec pt-50 pb-20">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="sec-title">
						<h1>Featured<span>Locations</span></h1>
						<div class="border-shape"></div>
						<p>Here are locations of our estates.</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 col-sm-6">
					<div class="single-locations">
						<img src="img/location4.jpg" alt=""/>
						<div class="locations-overlay">
							<div class="locations-text">
								<h2><a href="property.html">LAGOS</a></h2>
								<p>The World Largest City</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-sm-6">
					<div class="single-locations">
						<img src="img/location5.jpg" alt=""/>
						<div class="locations-overlay">
							<div class="locations-text">
								<h2><a href="property.html">OGUN</a></h2>
								<p>The World Largest City</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4 col-sm-4">
					<div class="single-locations">
						<img src="img/location1.jpg" alt=""/>
						<div class="locations-overlay">
							<div class="locations-text">
								<h2><a href="property.html">ABUJA</a></h2>
								<p>The World Largest City</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4 col-sm-4">
					<div class="single-locations">
						<img src="img/location2.jpg" alt=""/>
						<div class="locations-overlay">
							<div class="locations-text">
								<h2><a href="property.html">PORTHARCOURT</a></h2>
								<p>The World Largest City</p>
							</div>
						</div>
					</div>
				</div>
				 <div class="col-md-4 col-sm-4">
					<div class="single-locations">
						<img src="img/location3.jpg" alt=""/>
						<div class="locations-overlay">
							<div class="locations-text">
								<h2><a href="property.html">IMO</a></h2>
								<p>The World Largest City</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Location Section Start -->

	<!-- Call To Action Section Start -->
	<!-- <div class="call-to-action-sec pt-50 pb-50">
		<div class="container">
			<div class="row">
				<div class="col-md-8 col-sm-8">
					<div class="call-to-action-text">
						<h2>If Need Any Help! Contact Us</h2>
					</div>
				</div>
				<div class="col-md-4 col-sm-4">
					<div class="call-to-action-text">
						<a href="contact.html" class="btn">Contact Us</a>
					</div>
				</div>
			</div>
		</div>
	</div> -->
	<!-- Call To Action Section Start -->
	<!-- Project Section Start -->
	<div class="project-sec pt-50 pb-20">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="sec-title">
						<h1>Our<span>Gallery</span></h1>
						<div class="border-shape"></div>
						<p>.....</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-3 col-sm-6  inner">
					<div class="item">
						<img src="" alt="" />
						<div class="project-hoverlay">
							<div class="project-text">
								<a class="gallery-photo" href="img/p1.jpg"><i class="fa fa-arrows-alt"></i></a>
								<h3>Photo 1</h3>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3 col-sm-6  inner">
					<div class="item">
						<img src="" alt="" />
						<div class="project-hoverlay">
							<div class="project-text">
								<a class="gallery-photo" href="img/p2.jpg"><i class="fa fa-arrows-alt"></i></a>
								<h3>Photo 2</h3>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3 col-sm-6  inner">
					<div class="item">
						<img src="" alt="" />
						<div class="project-hoverlay">
							<div class="project-text">
								<a class="gallery-photo" href="img/p3.jpg"><i class="fa fa-arrows-alt"></i></a>
								<h3>Photo 3</h3>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3 col-sm-6  inner">
					<div class="item">
						<img src="" alt="" />
						<div class="project-hoverlay">
							<div class="project-text">
								<a class="gallery-photo" href="img/p4.jpg"><i class="fa fa-arrows-alt"></i></a>
								<h3>Photo 4</h3>
							</div>
						</div>
					</div>
				</div>

				<div class="col-md-3 col-sm-6  inner">
					<div class="item">
						<img src="" alt="" />
						<div class="project-hoverlay">
							<div class="project-text">
								<a class="gallery-photo" href="img/p5.jpg"><i class="fa fa-arrows-alt"></i></a>
								<h3>Photo 5</h3>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3 col-sm-6  inner">
					<div class="item">
						<img src="" alt="" />
						<div class="project-hoverlay">
							<div class="project-text">
								<a class="gallery-photo" href="img/p6.jpg"><i class="fa fa-arrows-alt"></i></a>
								<h3>Photo 6</h3>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3 col-sm-6  inner">
					<div class="item">
						<img src="" alt="" />
						<div class="project-hoverlay">
							<div class="project-text">
								<a class="gallery-photo" href=""><i class="fa fa-arrows-alt"></i></a>
								<h3>Photo 7</h3>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3 col-sm-6  inner">
					<div class="item">
						<img src="" alt="" />
						<div class="project-hoverlay">
							<div class="project-text">
								<a class="gallery-photo" href="img/p8.jpg"><i class="fa fa-arrows-alt"></i></a>
								<h3>Photo 8</h3>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
	<!-- Project Section Start -->
	<!-- Testimonial Section Start -->
	<!-- <div class="testimonial-sec">
		<div class="testimonial-overlay"></div>
		<div class="container">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="sec-title">
						<h1>Our<span>Testimonial</span></h1>
						<div class="border-shape"></div>
						<p>Lorem ipsum dolor sit amet, pellentesque enim lorem quis vivamus amet.</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-2"></div>
				<div class="col-lg-8 col-md-12">
					<div id="indecator" class="carousel slide" data-ride="carousel">
						  <ol class="carousel-indicators">
							<li data-target="#indecator" data-slide-to="0" class="active"></li>
							<li class="" data-target="#indecator" data-slide-to="1"></li>
							<li class="" data-target="#indecator" data-slide-to="2"></li>
						  </ol>
						  <div class="carousel-inner full_display" role="listbox">
							  <div class="item sngl-testimonial active">
									<div class="sngle-tsmt">
										<div class="client-dsc">
											<h2>Alexandar</h2>
											<h6>Managing Director</h6>
										</div>
										<img src="img/testimonial1.jpg" alt=""/>
										<div class="client-dsc">
											<p>Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis donec, suscipit tortor et sapien donec ac nec.Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis donec, suscipit tortor et sapien donec ac nec.</p>
										</div>
									</div>
							  </div>
							  <div class="item sngl-testimonial ">
									<div class="sngle-tsmt">
										<div class="client-dsc">
											<h2>David Max</h2>
											<h6>Director Of ABC</h6>
										</div>
										<img src="img/testimonial2.jpg" alt=""/>
										<div class="client-dsc">
											<p>Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis donec, suscipit tortor et sapien donec ac nec.Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis donec, suscipit tortor et sapien donec ac nec.</p>
										</div>
									</div>
							  </div>
							  <div class="item sngl-testimonial ">
									<div class="sngle-tsmt">
										<div class="client-dsc">
											<h2>Jadeb box</h2>
											<h6>Manager Or XYZ</h6>
										</div>
										<img src="img/testimonial3.jpg" alt=""/>
										<div class="client-dsc">
											<p>Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis donec, suscipit tortor et sapien donec ac nec.Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis donec, suscipit tortor et sapien donec ac nec.</p>
										</div>
									</div>
							  </div>
						  </div>
						  <a data-slide="prev" role="button" href="#indecator" class="left left_twit_crousel_btn">
							<i class="fa fa-angle-left"></i>
							<span class="sr-only">Previous</span>
						  </a>
						  <a data-slide="next" role="button" href="#indecator" class="right right_twit_crousel_btn">
							<i class="fa fa-angle-right"></i>
							<span class="sr-only">Next</span>
						  </a>
					</div>
				</div>
				<div class="col-lg-2"></div>
			</div>
		</div>
	</div>	  -->
	<!-- Testimonial Section End -->
	<!-- Team Section Start -->
	<div class="team-sec pt-50 pb-20 bg-gray">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="sec-title">
						<h1>Property<span>Developers</span></h1>
						<div class="border-shape"></div>
						<p></p>
					</div>
				</div>
			</div>
			 <div class="row">
				<!-- <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
					<div class="team-member">
						<img src="img/tm.jpg" alt=""/>
						<h2>Elizabeth </h2>
						<h3>Appertment Sell</h3>
						<ul>
							<li><a href="#"><i class="fa fa-facebook"></i></a></li>
							<li><a href="#"><i class="fa fa-twitter"></i></a></li>
							<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
							<li><a href="#"><i class="fa fa-google"></i></a></li>
							<li><a href="#"><i class="fa fa-skype"></i></a></li>
						</ul>
					</div>
				</div>
				<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
					<div class="team-member">
						<img src="img/tm2.jpg" alt=""/>
						<h2>Gabriella</h2>
						<h3>House Rent</h3>
						<ul>
							<li><a href="#"><i class="fa fa-facebook"></i></a></li>
							<li><a href="#"><i class="fa fa-twitter"></i></a></li>
							<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
							<li><a href="#"><i class="fa fa-google"></i></a></li>
							<li><a href="#"><i class="fa fa-skype"></i></a></li>
						</ul>
					</div>
				</div>
				<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
					<div class="team-member">
						<img src="img/tm3.jpg" alt=""/>
						<h2>Abigail</h2>
						<h3>Appertment Management</h3>
						<ul>
							<li><a href="#"><i class="fa fa-facebook"></i></a></li>
							<li><a href="#"><i class="fa fa-twitter"></i></a></li>
							<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
							<li><a href="#"><i class="fa fa-google"></i></a></li>
							<li><a href="#"><i class="fa fa-skype"></i></a></li>
						</ul>
					</div>
				</div>
				<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
					<div class="team-member">
						<img src="img/tm4.jpg" alt=""/>
						<h2>Mackenzie</h2>
						<h3>Find An Agents</h3>
						<ul>
							<li><a href="#"><i class="fa fa-facebook"></i></a></li>
							<li><a href="#"><i class="fa fa-twitter"></i></a></li>
							<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
							<li><a href="#"><i class="fa fa-google"></i></a></li>
							<li><a href="#"><i class="fa fa-skype"></i></a></li>
						</ul>
					</div>
				</div> -->

			</div> -->
		</div>
	</div>
	 <app-footer  v-if="this.$route.path !== '/dash'"></app-footer>
	<!-- Team Section End -->
	<!-- Blog Section Start -->
	<!-- s -->

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
