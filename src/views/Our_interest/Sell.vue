<template>
<div>
<!-- Page Heading Section Start -->
	<div class="pagehding-sec">
		<div class="images-overlay"></div>


		<div class="container">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="page-heading">
						<h1>Contact Us</h1>
						<ul>
							<li><a href="index-2.html">Home</a></li>
							<li><a href="#">Contact Us</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Page Heading Section End -->

	<!-- Contact Section Start -->
	<section class="contact-form-sec pt-50 pb-50">
		<div class="row">
		<div class="container">
						<div class="alert alert-success" v-if="submitted">
                    			<button class="close" type="button" data-dismiss="alert" aria-hidden="true">&#215;</button>
                    				Thanks for indicating interest......An email has been sent to you
                			</div>
            			</div>
			<div class="row">
				<form @submit.prevent="submit">
				<div class="col-md-8">
					<div class="contact-field">
						<h2>What property do you have for sale</h2>
						<div class="col-md-4 col-sm-4 col-xs-12">
							<div class="single-input-field">
								<h4>Yor fullname (required) </h4>
								<input v-model="sell.fullname" type="text"/>
							</div>
						</div>
						<div class="col-md-4 col-sm-4 col-xs-12">
							<div class="single-input-field">
								<h4>Your Email *</h4>
								<input v-model="sell.email" type="email"/>
							</div>
						</div>
						<div class="col-md-4 col-sm-4 col-xs-12">
							<div class="single-input-field">
								<h4>Subject</h4>
								<input v-model="sell.phone" type="text"/>
							</div>
						</div>
						<div class="col-md-12 message-input">
							<div class="single-input-field">
								<h4>Brief Description</h4>
								<textarea type="sell.text"  v-model="sell.description"></textarea>
							</div>
						</div>
						<div class="col-md-4 col-sm-4 col-xs-12">
							<div class="single-input-fieldsbtn">
								<input type="submit" value="send "/>
							</div>
						</div>
					</div>
				</div>
				</form>
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
	<!-- Contact Section End -->

</div>
</template>
<script>
import Navbar from '../Navbar.vue';
import Footer from '../Footer.vue';

import { propertySell } from '../../config';

export default{
  name: '',
  data: () => ({
    sell: [],
    submitted: false,
    sell: {
      description: '',
      fullname: '',
      email: '',
      identity: 'seller',
      phone: '',

    },

  }),
  components: {
		 'nav-bar': Navbar,
		  'app-footer': Footer,
  },

  mounted: () => {
    fetch(propertySell).then(response => response.json()).then((result) => {
      this.sell = result;
    });
  },
  methods: {
		   submit() {
		   	console.log(this.sell);
		   	fetch(API_URL, {
		 		method: 'POST',
		   		body: JSON.stringify(this.sell),
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
