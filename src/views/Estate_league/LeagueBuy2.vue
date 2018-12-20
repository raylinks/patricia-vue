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
							<li><a href="index-2.html"></a></li>
							<h1>ESTATE LEAGUE</h1>
							<h1>Welcome, A League for REAL Champions only</h1>

						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>


	<div class="row">
							<div class="alert alert-success" v-if="submitted">
                    			<button class="close" type="button" data-dismiss="alert" aria-hidden="true">&#215;</button>
                    				Your details has been received......An email has been sent to you
                			</div>
            			</div>

	  <div class="booking-sec">
		<div class="container">
			<div class="row" >

					<form @submit.prevent="submit">


					<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
						<div class="single-field">
							<h4> Payment</h4>
							<div class="select-arrow">
								<input type="text"  size="30">

							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
						<div class="single-field">
							<h4>Bonus</h4>
							<div class="select-arrow">
								<input type="text"  size="30">

							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
						<div class="single-field">
							<h4>Allocation Date</h4>
							<div class="select-arrow">
								<input type="text"  size="30">

							</div>
						</div>
					</div>


					<div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
						<div class="single-field">

							<input type="submit" value="NEXT"/>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>


</form>


	 <!--  --><app-footer></app-footer>

            </div>
            </template>
<script>
import Navbar from '../Navbar.vue';
import Footer from '../Footer.vue';

import { leagueBuy2 } from '../../config';

export default{

  data() {
    return {
      reg: {
        product: '',
        promo_code: '',
        site_visit: '',
        slug: 'slug',
        inspection_date: '',
        firstname: '',
        lastname: '',

        email: '',
        password: '',
      },
      reg: {},
      submitted: false,
      seen: true,

    };
  },
  // mounted:() => {
  // 	fetch(API_URL).then(response => response.json()).then(result => {
  // 		this.reg = result;
  // 	});
  // },
  methods: {
    //    submit(){
    //    	console.log(this.reg);
    //    	fetch(API_URL, {
    //  		method:'POST',
    //    		body: JSON.stringify(this.reg),
    //    		headers:{
    //    			'content-type':'application/json'
    //    		}
    //    	}).then(response => response.json()).then(result =>{
    //    		console.log(result);
    //    		//this.messages.push(result);
    //    		this.submitted = true;
    //    	});
    // }
    submit() {
      this.$http.post('leagueBuy2', this.reg).then(function (response) {
        this.submitted = true;
        this.reg = '';
      });
    },
  },
  components: {
		 'nav-bar': Navbar,
		  'app-footer': Footer,
  },
};
</script>
