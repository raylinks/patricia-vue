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
                                <h1></h1>
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
                            <h1>Coming<span>Soon</span></h1>
                            <div class="border-shape"></div>
                            <h1>league season commences  30/3/2019.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Testimonial Section End -->



        <app-footer></app-footer>

    </div>
</template>
<script>
    import Navbar from '../Navbar.vue';
    import Footer from '../Footer.vue';

    export default{
        data(){
            return{}

        },
        components: {
            'nav-bar': Navbar,
            'app-footer': Footer,
        },
    }
</script>