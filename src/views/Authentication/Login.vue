<template>
	<div>
		<div >
			<div class="modal-dialog modal-sm">
				<div class="modal-content login-modal">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal"></button>
						<h4 class="modal-title"><i class="fa fa-sign-in"></i>LOGIN</h4>
					</div>
					<div class="modal-body">
						<form @submit.prevent="login">
							<div>
								<label><i class="fa fa-user"></i>USERNAME/EMAIL</label>
								<input class="form-control"  v-model="email" type="email" placeholder="Username/Email">
							</div>
							<div>
								<label><i class="fa fa-key"></i>PASSWORD</label>
								<input class="form-control" type="password" v-model="password" placeholder="Password">
							</div>
							<a href="/forgetpassword" class="forgot-link">FORGOT PASSWORD?</a>
							<button    type="submit" class="login-link"><i class="fa fa-sign-in"></i>LOGIN</button>
						</form>
					</div>
				</div>
			</div>
		</div>
		<!-- <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-3"></div>
                  <div class="col-lg-4 col-md-4 col-sm-6">
                    <div class="form-card">
                        <center><span style="font-size: 30px;">Login</span></center>
                        <br>
                        <div class="row">
                                <form @submit.prevent="login">

                                        <div class="form-group">

                                            <div class="form-group">
                                                <input type="email" class="form-control" required  v-model="email" name="email" placeholder="Email">
                                            </div>


                                            <div class="form-group">
                                                <input type="password"  name="password" class="form-control" id="" placeholder="password" v-model="password">

                                            </div>
                                            <button type="submit" class="btn btn-submit-blue pull-right">Login</button>
                                        <div class="">
                                            <ul  class="form-card-links list-inline">
                                            <li><a href="/#/forgetpassword">FORGET PASSWORD</a></li>
                                            </ul>
                                        </div>
                                        </div>
                                    </form>
                                </div>
                        </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-3"></div>
              </div>
        </div> -->
	</div>
</template>
<script >
import AuthenticationService from '@/services/AuthenticationService';
import axios from 'axios';

export default{
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          //                    axios.post('http://localhost:3000/api/v1/users/login', {
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
        this.$router.push({ name: 'user_dashboard' });
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>
