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

<form @submit.prevent="submit">
	<div class="row">
							<div class="alert alert-success" v-if="submitted">
                    			<button class="close" type="button" data-dismiss="alert" aria-hidden="true">&#215;</button>
                    				Your details has been received......An email has been sent to you
                			</div>
            			</div>

	  <div class="booking-sec">
		<div class="container">
			<div class="row" v-show="seen">

					<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
						<div class="single-field">
							<h4>Product</h4>
							<select v-model="reg.product">
								  <option value="1_room">lakowe</option>
								  <option value="2_room">lekki-ajah</option>
								  <option value="3_room">ibeju-lekki</option>

								</select>
						</div>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
						<div class="single-field">
							<h4>Promo code </h4>
							<input type="text"  v-model="reg.promo_code" size="30">
						</div>
					</div>
					<div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
						<div class="single-field">
							<h4>Site visit</h4>
							<div class="select-arrow">
								<input type="date"  v-model="reg.site_visit"  size="30">
							</div>
						</div>
					</div>
					<div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
						<div class="single-field">
						<div class="select-arrow">
					<button class="btn btn-default" name="submit" type="button" @click="seen = !seen">SEND</button>
					</div>
				</div>
				</div>

					<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
						<div class="single-field">
							<h4>Payment</h4>
							<div class="select-arrow">
								<input type="date"  size="30" disabled>

							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
						<div class="single-field">
							<h4>Bonus</h4>
							<div class="select-arrow">
								<input type="date"  size="30" disabled>

							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
						<div class="single-field">
							<h4>Allocation Date</h4>
							<div class="select-arrow">
								<input type="date"  size="30" disabled>

							</div>
						</div>
					</div>


					<div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
						<div class="single-field">

							<input type="submit" value="NEXT"/>
						</div>
					</div>

			</div>
		</div>
	</div> -->

	<section class="contact-form-sec pt-50 pb-50"  v-show="!seen">
		<div class="container">
			<div class="row">
				<div class="col-md-8">
					<div class="contact-field">
						<h2>Referral Details</h2>
						<div class="col-md-4 col-sm-4 col-xs-12">
							<div class="single-input-field">
								<h4>Your name (required) </h4>
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
								<h4>Phone</h4>
								<input type="text"/>
							</div>
						</div>

						<h2>Prospective Buyer Details</h2>
						<div class="col-md-4 col-sm-4 col-xs-12">
							<div class="single-input-field">
								<h4>Fulname(required) </h4>
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
								<h4>Phone</h4>
								<input type="text"/>
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
							<p>Ikeja</p>
						</div>
						<div class="single-info">
							<h2>Email: </h2>
							<p>yourdomain@gmail.com</p>
						</div>
						<div class="single-info">
							<h2>Phone:</h2>
							<p>(+45) 123 456 789</p>
						</div>
						<div class="single-info">
							<h2>Skype:</h2>
							<p>your_skype</p>
						</div>
					</div>
				</div>
			</div>
			<!-- Google Map Section Start -->

			<!-- Google Map Section End -->
		</div>
	</section>
</form>


	 <app-footer></app-footer>

            </div>
            </template>
<script>
import Navbar from '../Navbar.vue';
import Footer from '../Footer.vue';

import { leagueSell } from '../../config';

export default{
  name: 'reg',
  data: () => ({
    reg: [],
    seen: true,
    submitted: false,
    reg: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      phone: '',
      product: '',
      promo_code: '',
      site_visit: '',
      who_are_you: 'seller',
    },

  }),
  mounted: () => {
    fetch(leagueSell).then(response => response.json()).then((result) => {
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
