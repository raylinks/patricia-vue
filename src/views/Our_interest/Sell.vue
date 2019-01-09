<template>
	<div>
		<nav-bar v-if="this.$route.path !== '/dash'"></nav-bar>
		<div class="pagehding-sec">
			<div class="images-overlay"></div>
			<div class="container">
				<div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div class="page-heading">
							<h1>PROPERTIES</h1>
							<ul>
								<li><a href="index-2.html"></a></li>
								<h1> What property do you have for sale</h1>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>


		<section class="contact-form-sec pt-50 pb-50"  >
			<div class="container">
				<div class="row">
					<div class="alert alert-success" v-if="submitted">
						<button class="close" type="button" data-dismiss="alert" aria-hidden="true">&#215;</button>
						Thanks for indicating interest......An email has been sent to you
					</div>
				</div>
				<div class="row">
					<div class="col-md-8">
						<div class="contact-field">
							<h2> What is your Current Property Need, let's help  you meet it</h2>
							<form @submit.prevent="submit">
								<div class="col-md-12 message-input">
									<div class="single-input-field">
										<h4>Brief Description</h4>
										<textarea  type="text"  v-model="formData.description" ></textarea>
									</div>
								</div>
								<div class="col-md-4 col-sm-4 col-xs-12">
									<div class="single-input-field">
										<h4>Fullname *</h4>
										<input v-model="formData.fullname" type="text"/>
									</div>
								</div>
								<div class="col-md-4 col-sm-4 col-xs-12">
									<div class="single-input-field">
										<h4>Your Email *</h4>
										<input v-model="formData.email" type="email"/>
									</div>
								</div>
								<div class="col-md-4 col-sm-4 col-xs-12">
									<div class="single-input-field">
										<h4>Phone</h4>
										<input v-model="formData.phone" type="text"/>
									</div>
								</div>


								<div class="col-md-4 col-sm-4 col-xs-12">
									<div class="single-input-fieldsbtn">
										<input type="submit" value="send "/>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div class="col-md-4">
						<div class="contact-person">
							<h1>main office</h1>
							<div class="single-info">
								<h2>Address</h2>
								<p>Top floor Rear Building, 22 Olufunmilayo street, Dideolu estate, 1st Gate Bus Stop. Ogba Ikeja.</p><br>
								<p>15, Adeoye Fafore Street, on-george b/stop, off idimu ikotun road, Lagos.</p>
							</div>
							<div class="single-info">
								<h2>Email: </h2>
								<p>support@teamltd.org</p>
							</div>
							<div class="single-info">
								<h2>Phone:</h2>
								<p>+2348022430140</p>
							</div>
							<div class="single-info">
								<h2>Phone 2:</h2>
								<p>+2348130458323</p>
							</div>

						</div>
					</div>
				</div>
				<!-- Google Map Section Start -->

				<!-- Google Map Section End -->
			</div>
		</section>
		<app-footer  v-if="this.$route.path !== '/dash'"></app-footer>
	</div>
</template>
<script>
import Navbar from '../Navbar.vue';
import Footer from '../Footer.vue';

import { propertySell } from '../../config';

export default{
  name: 'addstates',

  data: () => ({
    trade: [],
    error: '',
    seen: true,
    submitted: false,

    formData: {
      description: '',
      fullname: '',
      phone: '',
      email: '',
      identity: '1',

    },
  }),
  components: {
    'nav-bar': Navbar,
    'app-footer': Footer,
  },

  methods: {

    submit() {
      this.$http.post(propertySell, this.formData).then(function (response) {
        this.submitted = true;
        this.formData = '';
      }).catch((err) => {
        //  console.log(err)
        this.error = err.body.error;
      });
    },
  },
};
</script>
