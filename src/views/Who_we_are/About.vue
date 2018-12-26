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
                            <h1>About Us</h1>
                            <ul>

                                <li><a href="#">About Us</a></li>
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
                            <h2>About us </h2>
                            <p>Together Everyone  achieves more(T.E.A.M) Ltd is a marketing company with ultimate bias for opportunities in Real estate, investments and trainings. The company is duly registered with  her Head office in LAGOS, Nigeria.<br> The vision was born out of the desire to bridge the gap between "Genuine" Real estate and Investment opportunities and the prospective public who wish to invest in these areas.</p>
                            <h4>Our Vision </h4>
                            <p>Our vision is simple, to make lives and not just a living.</p>
                            <h4>Our Mission </h4>
                            <p>To enrich lifes through our services, information and association wise and ofcourse materially.</p>
                            <h4>Core values: </h4>
                            <p>We believe in consistency and developing these values each day.</p>
                            <ul>
                                <li>Building Integrity</li>
                                <li>Inspiring Creativity</li>
                                <li>Adding Value</li>
                            </ul>
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


import { propertyBuy } from '../../config';

export default{
  name: '',
  data: () => ({
    reg: [],
    submitted: false,

  }),
  components: {
    'nav-bar': Navbar,
    'app-footer': Footer,
  },
};
</script>
