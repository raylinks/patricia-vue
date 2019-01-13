<template>
	<div>
		<nav-bar></nav-bar>

			<div id="wrapper"   >

				<div class="content-page">
					<!-- Start content -->
					<div class="content" >
						<div class="page-content-wrapper ">

							<div class="container-fluid">

								<div class="row">
									<div class="col-sm-8">
										<div class="page-title-box">
											<div class="btn-group float-right">
												<ol class="breadcrumb hide-phone p-0 m-0">
													<li class="breadcrumb-item"><a href="#"T.E.A.M LTD.></a></li>

												</ol>
											</div>

										</div>
									</div>
								</div>
								<!-- end page title end breadcrumb -->
								<h4 class="page-title"  style="color:red;">You are not licensed to the full benefits of your portal until you have patronize us</h4>

								<div class="row"  >
									<div class="col-sm-9 col-lg-9 ">
										<div class="card m-b-30">
											<div class="card-body">
												<form  @submit.prevent="submit" >
												<div class="form-group row">
													<label class="col-sm-2 col-form-label">Payment</label>
													<div class="col-sm-10">
														<input   v-model="users.payment"  class="form-control" type="search" >
													</div>
												</div>
												<div class="form-group row">
													<label class="col-sm-2 col-form-label">Site Allocation</label>
													<div class="col-sm-10">
														<input class="form-control"  v-model="users.allocation"  type="email"  >
													</div>
												</div>
													<div class="form-group row">
														<label class="col-sm-2 col-form-label">Bonus</label>
														<div class="col-sm-10">
															<input   v-model="users.bonus"  class="form-control" type="search" >
														</div>
													</div>

												<div class="col-md-4 col-sm-4 col-xs-12">
													<div class="single-input-fieldsbtn">
														<button class="btn btn-primary pull-right btn-submit"   type="submit"><i class="fa fa-search"></i> Submit..</button>
													</div>
												</div>
												</form>
											</div>

										</div>
									</div> <!-- end col -->
								</div> <!-- end row -->
							</div>
						</div>
					</div>
				</div>
			</div>

	</div>
</template>
<script>
    import Navbar from '../Navbar.vue';
    import Footer from '../Footer.vue';
import { unLicensed } from '../../config';

export default{
  data() {
    return {
      users: {
        payment: '',
        bonus: '',
        allocation: '',
      },

    };
  },

  components: {
      'nav-bar': Navbar,
      'app-footer': Footer,
  },

  methods: {
    	submit() {
    		this.$http.post(unLicensed, this.users).then(function (response) {

    		});
    	},
  },


};
</script>
