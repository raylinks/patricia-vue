<template>
    <div>
        <nav-bar></nav-bar>
        <div class="pagehding-sec">
            <div class="images-overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="page-heading">

                            <ul>
                                <li><a href=""></a></li>

                                <h1>ESTATE LEAGUE</h1>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Project Section Start -->
        <!-- Testimonial Section Start -->
        <div class="testimonial-sec">
            <div class="testimonial-overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="sec-title">

                            <div class="border-shape"></div>
                            <h1>league season commences  30/3/2019.</h1>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="sec-title">
                            <h1>Pre Season Promo Valid till feb 28 2019</h1>
                            <div class="room-info">

                                <p style="color:green;">click here to participate in the promo season</p>
                                <a href="/buynsell" class="booking-button">Click Now</a>
                            </div>
                            <div class="border-shape"></div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Testimonial Section End -->


			<!-- -->
			<section>
				<div class="container text-center">
					<div style="max-width:550px;  margin:auto; margin-top:60px;">
						<div class="countdown countdown-lg" data-labels="years,months,weeks,days,hour,min,sec" data-from="March 30, 2019 15:03:26"><!-- Example Date From: December 31, 2018 15:03:26 --></div>
					</div>

				</div>
			</section>
			<!-- / -->
        <app-footer></app-footer>

    </div>
</template>
<script>
import Navbar from '../Navbar.vue';
import Footer from '../Footer.vue';

export default{
  data() {
    return {};
  },
  components: {
    'nav-bar': Navbar,
    'app-footer': Footer,
  },
};
</script>
