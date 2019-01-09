<template>
<div>
	<nav-bar v-if="this.$route.path !== '/dash'"></nav-bar>
<div class="pagehding-sec">
		<div class="images-overlay"></div>
		<div class="container">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="page-heading">
						<h1>Transaction Box</h1>
						<ul>
							<li><a href=""></a></li>
							<h1>SIX STEPS INVOLVED IN DEALING WITH US</h1>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>


    <!-- Service Start -->
    <section class="service-two-area bg-shape">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="section-title">
                        <h2>Trade with us</h2>
                        <div class="title-border"></div>
                        <p>A place for Real Champions</p>
                    </div>
                </div>
            </div>
            <div class="row">

                <div class="col-md-6 col-sm-6 col-xs-6 fw600">
                    <div class="service-col">
                        <i class="zmdi zmdi-balance"></i>
                        <h4><a href="#">Buy Lands from us</a></h4>
                        <p>We offer ........</p>
                        <a class="btn btn-default theme-btn btn-hover" href="/tradebuy">Buy now</a>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-6 fw600">
                    <div class="service-col">
                        <i class="zmdi zmdi-card-travel"></i>
                        <h4><a href="#">Sell lands  & property</a></h4>
                        <p>We assist in selling lands and property.</p>
                        <a class="btn btn-default theme-btn btn-hover" href="/tradesell">Sell now</a>
                    </div>
                </div>

            </div>
        </div>
    </section>


       <app-footer  v-if="this.$route.path !== '/dash'"></app-footer>

            </div>
            </template>
<script>
import Navbar from '../Navbar.vue';
import Footer from '../Footer.vue';

const API_URL = 'http://localhost:3000/api/v1/estatesleague';

export default{
  name: 'prefered',
  data: () => ({
    reg: [],
    submitted: false,
    reg: {
      product: '',
      slug: 'slug',
      inspection_date: '',
    },

  }),

  mounted: () => {
    fetch(API_URL).then(response => response.json()).then((result) => {
      this.reg = result;
    });
  },
  components: {
		 'nav-bar': Navbar,
		  'app-footer': Footer,
  },
  methods: {
		   submit() {
		   	console.log(this.reg);
		   	fetch(API_URL, {
		 		method: 'POST',
		   		body: JSON.stringify(this.reg),
		   		headers: {
		   			'content-type': 'application/json',
		   		},
		   	}).then(response => response.json()).then((result) => {
		   		console.log(result);
		   		// this.messages.push(result);
		   		this.submitted = true;
		   	});
    },
  },
};
</script>
