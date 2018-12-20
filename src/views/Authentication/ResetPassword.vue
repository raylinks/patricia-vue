
<template>
	<div>
		<div >
			<div class="modal-dialog modal-sm">
				<div class="modal-content login-modal">
					<div class="row">
						<div class="alert alert-success" v-if="submitted">
							<button class="close" type="button" data-dismiss="alert" aria-hidden="true">&#215;</button>
							a mail has been sent to your mail
						</div>
					</div>
					<center><span style="font-size: 30px;">ENTER YOUR NEW  PASSWORD</span></center>
						<br>
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal"></button>
						<h4 class="modal-title"><i class="fa fa-sign-in"></i>LOGIN</h4>
					</div>
					<div class="modal-body">
						<form @submit.prevent="resetPassword">

						<div>
							<label><i class="fa fa-key"></i>PASSWORD</label>
							<input class="form-control" type="password" v-model="password" placeholder="Password">
						</div>
						<div>
							<label><i class="fa fa-key"></i> Confirm PASSWORD</label>
							<input class="form-control" type="password" v-model="confirmPassword" placeholder="Password">
						</div>

						<a href="#"    type="submit" class="login-link"><i class="fa fa-sign-in"></i>Reset Password</a>
					</form>
					</div>
				</div>
			</div>
		</div>


	</div>
</template>
<script>
import { resetpassword } from '../../config';

export default{
  data() {
    return {
      password: '',
      confirmPassword: '',
		submitted:false
    };
  },
  methods: {
    resetPassword() {
      const postData = {
        password: this.password,
        confirm_password: this.confirmPassword,
        token: this.$route.params.token,
      };
      this.$http.post(resetpassword, postData).then((response) => {
        console.log('response', response);
        this.submitted= true;
       /* this.$router.push({ name: 'home' });*/
      }).catch((response) => {
        console.log('response', response);
      });
    },

  },
};
</script>
