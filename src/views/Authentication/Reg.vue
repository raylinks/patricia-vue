<template>
<div>
<div class="container">
			<div class="row">
				<div class="col-lg-4 col-md-4 col-sm-3"></div>
  				<div class="col-lg-4 col-md-4 col-sm-6">
					<div class="form-card">
						<center><span style="font-size: 30px;">Register</span></center>
						<br>
						<div class="row">
							<div class="alert alert-success" v-if="submitted">
                    <button class="close" type="button" data-dismiss="alert" aria-hidden="true">&#215;</button>
                    You have Successfully Registered
                </div>
								<form @submit.prevent="register">

										<div class="form-group">

											<div class="form-group">
												<input type="text" class="form-control"  v-model="messages.firstname"  placeholder="Firstname">
											</div>
											<div class="form-group">
												<input type="text" class="form-control"  v-model="messages.lastname"  placeholder="Lastname">
											</div>
											<div class="form-group">
												<input type="text" class="form-control" v-model="messages.username" placeholder="username">
											</div>
											<div class="form-group">
												<input type="email" class="form-control"  v-model="messages.email"  placeholder="Email">
												<div class="form-group">
												<input type="password" class="form-control"  v-model="messages.password"  placeholder="password">
											</div>
											</div>
											<div class="form-group">
												<input type="text"  v-model="messages.phone"  required class="form-control"
													   placeholder="Phone Number">

											</div>


											<button type="submit" class="btn btn-submit-blue pull-right">Register</button>
										<div class="">
											<ul  class="form-card-links list-inline">
											<li><a href="">Already have an Account</a></li>
											</ul>
										</div>
                                        </div>
									</form>
						</div>
					</div>
  				</div>
  				<div class="col-lg-4 col-md-4 col-sm-3"></div>
  			</div>
		</div>
</div>
</template>
<script>
const API_URL = 'http://localhost:3000/api/v1/users';

export default{
  name: 'reg',
  data: () => ({
    messages: [],
    submitted: false,
    messages: {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      password: '',
    },

  }),
  mounted: () => {
    fetch().then(response => response.json()).then((result) => {
      this.messages = result;
    });
  },

  methods: {
		   register() {
		   	console.log(this.messages);
		   	fetch(API_URL, {
		 		method: 'POST',
		   		body: JSON.stringify(this.messages),
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
