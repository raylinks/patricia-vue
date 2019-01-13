<template>
	<div>
		<nav-bar v-if="this.$route.path !== '/dash'"></nav-bar>
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
		<app-footer  v-if="this.$route.path !== '/dash'"></app-footer>
	</div>
</template>
<script >
import AuthenticationService from '@/services/AuthenticationService';
import axios from 'axios';
import Navbar from '../Navbar.vue';
import Footer from '../Footer.vue';

export default{
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
    components: {
        'nav-bar': Navbar,
        'app-footer': Footer,
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
<style scoped>
	.nomargin 			{ margin:0 !important; 			}
	section.page-header .breadcrumb a:hover  {
		color: #8ab933 !important;
		text-decoration:none;
	}
	.sky-form .toggle i:before {
		background-color: #8ab933;
	}
	.sky-form .button {
		background-color: #8ab933;
	}


	/**/
	/* checked state */
	/**/

	.sky-form.boxed {
		background-color:#fff;
	}
	.sky-form fieldset {
		padding: 0 0 30px 0;
	}



	section.alternate .sky-form.boxed {
		background-color:#F9F9F9;
	}

	section.dark .sky-form.boxed {
		background-color:#333;
		border:0;
	}

	.sky-form.boxed fieldset{padding:15px}
	.sky-form.boxed{border:rgba(0,0,0,.1) solid}




	.sky-form.boxed {
		background-color:#fff;
	}
	.sky-form fieldset {
		padding: 0 0 30px 0;
	}

</style>