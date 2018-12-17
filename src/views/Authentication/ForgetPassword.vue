<template>
	<div>
		<div >
			<div class="modal-dialog modal-sm">
				<center><span style="font-size: 30px;">ENTER YOUR EMAIL AND INSTRUCTIONS WILL BE SENT TO YOU</span></center>
				<div class="modal-content login-modal">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal"></button>
						<h4 class="modal-title"><i class="fa fa-sign-in"></i>LOGIN</h4>
					</div>
					<div class="modal-body">
						<form   @submit.prevent="forget()">
						<div>
							<label><i class="fa fa-user"></i>USERNAME/EMAIL</label>
							<input class="form-control"  v-model="email" type="email" placeholder="Username/Email">
						</div>

						<a href="#"    type="submit" class="login-link"><i class="fa fa-sign-in"></i>submit</a>
					</form>
					</div>
				</div>
			</div>
		</div>


	</div>
</template>
<script>
import jwtDecode from 'jwt-decode';
import { forgotpassword } from '../../config';

export default{
  data() {
    const token = localStorage.usertoken;
    const firstname = localStorage.firstname;
    const lastname = localStorage.lastname;
    const email = localStorage.email;
    const role = localStorage.role;
    const is_payed = localStorage.is_payed;
    const returnData = {
      firstname,
      lastname,
      email,
      role,
      is_payed,
    };
    return returnData;
    '';
  },
  methods: {
    forget() {
      const postData = {
        email: this.email,
        url: 'http://localhost/8080',
      };

      this.$http.post(forgotpassword, postData).then((response) => {
        console.log('response', response);
        this.$router.push({ name: 'home' });
      }).catch((response) => {
        console.log('response', response);

        window.alert(response.body.data);
      });
    },
  },
};
</script>
