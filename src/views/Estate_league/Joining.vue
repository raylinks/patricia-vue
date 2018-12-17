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
							<li><a href="index-2.html"></a></li>
							<h1></h1>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>


	 <section class="about-two-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-md-7">
                    <div class="about-col">
                        <h2>Estate <span>League</span></h2>
                        <h4>Welcome, A league for REAL champions only</h4>
                        <!-- <p>Morbi scelerisque volutpat egestas. Fusce dapibus rutrum magna, id pharetra lectus consectetur quis. Nunc ut porta enim, ac vulputate nisl. Vivamus sit amet dui quis leo suscipit scelerisque. Suspendisse euismod magna nec justo aliquam, tincidunt luctus mauris ultricies. Sed pellentesque, ligula at lacinia molestie, nisl sapien consequat nibh, in mattis dolor dolor ac lorem. Sed in molestie lectus. Quisque hendrerit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem architecto debitis sapiente alias adipisci doloremque, magnam nihil accusamus cum suscipit, placeat optio tempore, laborum sit ab esse. Magnam, necessitatibus, accusantium.</p> -->
                        <div class="row">
                            <div class="col-xs-4 fw600">
                                <div class="about-box">
                                    <i class="zmdi zmdi-network-locked"></i>
                                    <h4><a href="/#/leaguebuy">BUY</a></h4>
                                </div>
                            </div>

                            <div class="col-xs-4 fw600">
                                <div class="about-box">
                                    <i class="zmdi zmdi-thumb-up"></i>
                                    <h4><a href="/#/leaguesell">SELL</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 col-md-5">
                    <div class="about-img-col">
                        <img src="images/about/1.jpg" alt="">
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
