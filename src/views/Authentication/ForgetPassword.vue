<template>
	<div>
		<div >
			<div class="modal-dialog modal-sm">
				<div class="row">
					<div class="alert alert-success" v-if="submitted">
						<button class="close" type="button" data-dismiss="alert" aria-hidden="true">&#215;</button>
						a mail has been sent to your mail
					</div>
				</div>
				<!--<center><span style="font-size: 30px;">ENTER YOUR EMAIL AND INSTRUCTIONS WILL BE SENT TO YOU</span></center>-->
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

							<div class="col-md-4 col-sm-4 col-xs-12">
								<div class="single-input-fieldsbtn">
									<input type="submit" value="send "/>
								</div>
							</div>
						<!---->
					</form>
					</div>
				</div>
			</div>
		</div>


	</div>
</template>
<script>
import { forgotpassword } from '../../config';

export default{
  data() {
      return {
          email: '',
          submitted: false
      }


  },
  methods: {
    forget() {
      const postData = {
        email: this.email,
        url: 'http://localhost/8080',
      };

      this.$http.post(forgotpassword, postData).then((response) => {


        console.log('response', response);
          this.submitted = true;
       /* this.$router.push({ name: 'login' });*/
      }).catch((response) => {
        console.log('response', response);

        window.alert(response.body.data);
      });
    },
  },
};
</script>
