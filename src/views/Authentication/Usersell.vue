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
                                        <h4 class="page-title">Dashboard</h4>
                                    </div>
                                </div>
                            </div>
                            <!-- end page title end breadcrumb -->

                        <section class="contact-form-sec pt-50 pb-50"  v-show="!seen">
		<div class="container">
			<div class="row">
				<div class="col-md-8">
					<div class="contact-field">
						<h2>SELL</h2>
						<div class="col-md-4 col-sm-4 col-xs-12">
							<div class="single-input-field">
								<h4>Product(required) </h4>
								<input type="text"/>
							</div>
						</div>
						<div class="col-md-4 col-sm-4 col-xs-12">
							<div class="single-input-field">
								<h4>Promo Code (required) </h4>
								<input type="text"/>
							</div>
						</div>
						<div class="col-md-4 col-sm-4 col-xs-12">
							<div class="single-input-field">
								<h4>Site Inspection *</h4>
								<input type="email"/>
							</div>
						</div>
						<div class="col-md-4 col-sm-4 col-xs-12">
							<div class="single-input-field">
								<h4>Payment</h4>
								<input type="text"/>
							</div>
						</div>

						<div class="col-md-4 col-sm-4 col-xs-12">
							<div class="single-input-field">
								<h4>Bonus</h4>
								<input type="text"/>
							</div>
						</div>
						<div class="col-md-4 col-sm-4 col-xs-12">
							<div class="single-input-field">
								<h4>Allocation Date</h4>
								<input type="text"/>
							</div>
						</div>


						<div class="col-md-4 col-sm-4 col-xs-12">
							<div class="single-input-fieldsbtn">
								<input type="submit" value="send "/>
							</div>
						</div>
					</div>
				</div>

			</div>
			<!-- Google Map Section Start -->

			<!-- Google Map Section End -->
		</div>
	</section>


                        </div><!-- container -->
                    </div> <!-- Page content Wrapper -->
                </div> <!-- content -->
                <footer class="footer">
                    © 2018 Annex by Mannatthemes.
                </footer>
            </div>
            <!-- End Right content here -->
        </div>
</div>
</template>
<script>
import AdminSidebar from './AdminSidebar.vue';
import Topbar from './Topbar.vue';

export default{
  data() {
    return {

    };
  },

  components: {
		 'side-bar': AdminSidebar,
		 'top-bar': Topbar,
  },


};
</script>
