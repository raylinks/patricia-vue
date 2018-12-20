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
						<a href="/#/forgetpassword" class="forgot-link">FORGOT PASSWORD?</a>
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
<script>
import axios from 'axios';
import router from 'router';
import EventBus from './EventBus';

import { login } from '../../config';

export default{
  data() {
    return {
      email: '',
      password: '',
    };
  },

  methods: {
    login() {
      axios.post(login, {
        email: this.email,
        password: this.password,
      }).then((res) => {
        if (res.status === 200) {
          console.log(res.data.token);
          localStorage.setItem('usertoken', res.data.token);
          localStorage.setItem('firstname', res.data.firstname);
          localStorage.setItem('lastname', res.data.lastname);
          localStorage.setItem('email', res.data.email);
          localStorage.setItem('role', res.data.role);
          localStorage.setItem('is_payed', res.data.is_payed);
          // this.email = ''
          // this.password = ''
          // return;
          if (res.data.is_payed) {
            this.$router.push({ name: 'leaguebuy2' });
          } else this.$router.push({ name: 'user_dashboard' });
        } else alert('an error occured while logging in');
      }).catch((err) => {
        if (err.response.status === 401) {
          alert(err.response.data.message);
        } else {
          alert('an error occured while logging in');
        }
      });
      // this.emitMethod()
    },
    emitMethod() {
      EventBus.$emit('logged-in', 'loggedin');
    },

  },

};
</script>
