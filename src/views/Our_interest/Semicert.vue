<template>
    <div>
        <nav-bar v-if="this.$route.path !== '/dash'"></nav-bar>
        <!-- Page Heading Section Start -->

        <div class="testimonial-sec">
            <div class="testimonial-overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="sec-title">
                            <h1>Our<span>Semicert</span></h1>
                            <div class="border-shape"></div>
                            <h1>Theme => Estate league lounge </h1>
                            <h1>venue => Estate league lounge </h1>
                            <h1>Time => Estate league lounge </h1>
                            <h1>Date=> 30/03/2019 </h1>
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
