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
							<h1> Briefly describe your property need and input your details below</h1>
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
								<textarea  type="text"  v-model="reg.description" ></textarea>
							</div>
						</div>
						<div class="col-md-4 col-sm-4 col-xs-12">
							<div class="single-input-field">
								<h4>Fullname *</h4>
								<input v-model="reg.fullname" type="text"/>
							</div>
						</div>
						<div class="col-md-4 col-sm-4 col-xs-12">
							<div class="single-input-field">
								<h4>Your Email *</h4>
								<input v-model="reg.email" type="email"/>
							</div>
						</div>
						<div class="col-md-4 col-sm-4 col-xs-12">
							<div class="single-input-field">
								<h4>Phone</h4>
								<input v-model="reg.phone" type="text"/>
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
     <app-footer  v-if="this.$route.path !== '/dash'"></app-footer>
 </div>
</template>
<script>
import Navbar from '../Navbar.vue';
import Footer from '../Footer.vue';

const API_URL = 'http://localhost:3000/api/v1/property';

export default{
  name: '',
  data: () => ({
    reg: [],
    submitted: false,
    reg: {
      description: '',
      fullname: '',
      email: '',
      identity: 'buyer',
      phone: '',

    },

  }),
  components: {
		 'nav-bar': Navbar,
		  'app-footer': Footer,
  },

  mounted: () => {
    fetch(API_URL).then(response => response.json()).then((result) => {
      this.reg = result;
    });
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
		   	}).catch((err) => {
        //  console.log(err)
        this.errors = err.body.errors;
      });
    },
  },
};
</script>
