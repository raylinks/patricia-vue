<template>
<div>
        <!-- Begin page -->
        <div id="wrapper">

            <!-- ========== Left Sidebar Start ========== -->
           <side-bar></side-bar>
            <!-- Left Sidebar End -->

            <!-- Start right Content here -->

            <div class="content-page">
                <!-- Start content -->
                <div class="content">

                    <!-- Top Bar Start -->
                    <top-bar></top-bar>
                    <!-- Top Bar End -->

                    <div class="page-content-wrapper ">

                        <div class="container-fluid">

                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="page-title-box">
                                        <div class="btn-group float-right">
                                            <ol class="breadcrumb hide-phone p-0 m-0">
                                                <li class="breadcrumb-item"><a href="#">Annex</a></li>
                                                <li class="breadcrumb-item active">Dashboard</li>
                                            </ol>
                                        </div>
                                        <h4 class="page-title"  style="color:red;">You are not licensed to the full benefits of your portal until you have patronize us</h4>
                                    </div>
                                </div>
                            </div>
                            <!-- end page title end breadcrumb -->

                            <section class="contact-form-sec pt-50 pb-50">


			<div class="row">
				<form @prevent.submit="submit" >
				<div class="col-md-8">
					<div class="contact-field">
						<h2>second phase</h2>
						<div class="col-md-4 col-sm-4 col-xs-12">
							<div class="single-input-field">
								<h4>Payment </h4>
								<input  v-model="users.payment" type="text"/>
							</div>
						</div>
						<div class="col-md-4 col-sm-4 col-xs-12">
							<div class="single-input-field">
								<h4>Bonus *</h4>
								<input v-model="users.bonus" type="email"/>
							</div>
						</div>
						<div class="col-md-4 col-sm-4 col-xs-12">
							<div class="single-input-field">
								<h4>Allocation Date</h4>
								<input v-model="users.allocation"  type="text"/>
							</div>
						</div>

						<div class="col-md-4 col-sm-4 col-xs-12">
							<div class="single-input-fieldsbtn">
								<input type="submit" value="submit "/>
							</div>
						</div>
					</div>
				</div>
				</form>

			</div>
			<!-- Google Map Section Start -->

			<!-- Google Map Section End -->

	</section>


                        </div><!-- container -->
                    </div> <!-- Page content Wrapper -->
                </div> <!-- content -->
            </div>
            <!-- End Right content here -->
        </div>
    </div>
</template>
<script>
import AdminSidebar from './AdminSidebar.vue';
import Topbar from './Topbar.vue';
import { unLicensed } from '../../config';

export default{
  data() {
    return {
      users: {
        payment: '',
        bonus: '',
        allocation: '',
      },
      show: {},
    };
  },

  components: {
    'side-bar': AdminSidebar,
    'top-bar': Topbar,
  },
  created() {
    this.getUsers();
  },
  methods: {
    	submit() {
    		this.$http.post(unLicensed, this.users).then(function (response) {
    			this.users;
    		});
    	},
  },


};
</script>
