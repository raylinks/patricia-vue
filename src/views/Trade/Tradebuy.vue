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
								<h1>Trade</h1>


							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>


		<form @submit.prevent="submit">
			<section class="contact-form-sec pt-50 pb-50"   v-show="seen">
				<div class="container">
					<div class="row">
						<div class="col-md-8">
							<div class="contact-field">


								<!-- <div v-if="error">
                                    <button type="button" class="close"  data-dismiss="alert">&times;</button>
                                    <h4 class="alert-heading">Error!</h4>
                                    <p class="mb-0">{{error}}</p>
                                </div> -->


								<h2>FILL</h2>
								<div class="col-md-4 col-sm-4 col-xs-12">
									<div class="single-input-field">
										<h4>(step 1) select Product </h4>

										<select  v-model="reg.product" type="text">
											<option value="0">(step 1) select Product</option>
											<option value="1">Lakowe/Lekki</option>
										</select>
									</div>
								</div>
								<div class="col-md-4 col-sm-4 col-xs-12">
									<div class="single-input-field">
										<h4>(step  2)input promo code(optional </h4>
										<select  v-model="reg.promo_code" type="text">
										<option value="0">optional</option>
										<option value="1">YEANKHAR</option>

										</select>
									</div>
								</div>
								<div class="col-md-4 col-sm-4 col-xs-12">
									<div class="single-input-field">
										<h4>inspection date<span style="color:red;"> *</span></h4>
										<input v-model="reg.site_visit" type="date"/>
									</div>
								</div>


								<div class="col-md-4 col-sm-4 col-xs-12">
									<div class="single-input-fieldsbtn">
										<button class="btn btn-primary pull-right btn-submit"   @click="seen = !seen" type="submit"><i class="fa fa-search"></i> Next...</button>
									</div>
								</div>
							</div>
						</div>

					</div>
					<!-- Google Map Section Start -->

					<!-- Google Map Section End -->
				</div>
			</section>


			<section class="contact-form-sec pt-50 pb-50"  v-show="!seen">
				<div class="container">
					<div class="row">
						<div class="col-md-8">
							<div class="contact-field">


								<!-- <div v-if="error">
                                    <button type="button" class="close"  data-dismiss="alert">&times;</button>
                                    <h4 class="alert-heading">Error!</h4>
                                    <p class="mb-0">{{error}}</p>
                                </div> -->
								<div class="row">
									<div class="alert alert-success" v-if="submitted">
										<button class="close" type="button" data-dismiss="alert" aria-hidden="true">&#215;</button>
										You have succesfully made a trade......An email has been sent to you
									</div>
								</div>

								<h2>Input your Details</h2>
								<div class="col-md-4 col-sm-4 col-xs-12">
									<div class="single-input-field">
										<h4>Firstname (required) </h4>
										<input v-model="reg.firstname" type="text"/>
									</div>
								</div>
								<div class="col-md-4 col-sm-4 col-xs-12">
									<div class="single-input-field">
										<h4>Lastname (required) </h4>
										<input v-model="reg.lastname" type="text"/>
									</div>
								</div>
								<div class="col-md-4 col-sm-4 col-xs-12">
									<div class="single-input-field">
										<h4>Your Email<span style="color:red;"> *</span></h4>
										<input v-model="reg.email" type="email"/>
									</div>
								</div>
								<div class="col-md-4 col-sm-4 col-xs-12">
									<div class="single-input-field">
										<h4>Password (required) </h4>
										<input v-model="reg.password" placeholder="password" type="password"/>

									</div>
								</div>
								<div class="col-md-4 col-sm-4 col-xs-12">
									<div class="single-input-field">
										<h4> Confirm Password (required) </h4>
										<input v-model="reg.pasword_confirmation" placeholder="password" type="password"/>

									</div>
								</div>

								<div class="col-md-4 col-sm-4 col-xs-12">
									<div class="single-input-field">
										<h4>Phone</h4>
										<input v-model="reg.phone" type="text"/>
									</div>
								</div>

							<br>
<h1 class="error" v-html="error" style="color: red;">{{error}}</h1>

<br>


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
									<p>Top floor Rear Building, 22 Olufunmilayo street, Dideolu estate, 1st Gate Bus Stop. Ogba Ikeja.</p><br>
									<p>15, Adeoye Fafore Street, on-george b/stop, off idimu ikotun road, Lagos.</p>
								</div>
								<div class="single-info">
									<h2>Email: </h2>
									<p>findus@teamltd.org</p>
								</div>
								<div class="single-info">
									<h2>Phone:</h2>
									<p>+2348022430140</p>
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


import { postTradeBuyers } from '../../config';

export default{
  name: 'tradebuy',

  data: () => ({
    trade: [],
    error: '',
    seen: true,
    submitted: false,

    reg: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      pasword_confirmation: '',
      phone: '',
      product: '',
      promo_code: '',
      site_visit: '',
      priviledge: '1',
    },

  }),
  components: {
    'nav-bar': Navbar,
    'app-footer': Footer,
  },

  methods: {
    submit() {
      this.$http.post(postTradeBuyers, this.reg)
        .then(function (response) {
          this.submitted = true;
          this.reg = '';
          this.$router.push({ name: home });
        })
        .catch((err) => {
          //  console.log(err)
          // this.error = err.body;
					   this.error = err.body.error;
        });
    },
  },
};


</script>
<style scoped>
.error{
    color:red;
}
</style>
