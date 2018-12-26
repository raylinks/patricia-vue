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

                            <div class="service-sec pt-50 pb-20">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-6 inner">
                    <div class="media">
                        <div class="icon">
                            <i class="fa fa-home"></i>
                        </div>
                        <div class="media-body">
                            <h2>Periodic WorkChop</h2>
                            <p>.................................</p>
                            <a href="service-details.html" class="btn morebutton">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 inner">
                    <div class="media">
                        <div class="icon">
                            <i class="fa fa-mortar-board"></i>
                        </div>
                        <div class="media-body">
                            <h2>Our SemiCert</h2>
                            <p>A seminal and concert, mega 2 in 1 combo. It occurs twice yearly.</p>
                            <a href="service-details.html" class="btn morebutton">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 inner">
                    <div class="media">
                        <div class="icon">
                            <i class="fa fa-users"></i>
                        </div>
                        <div class="media-body">
                            <h2>Business Club Week</h2>
                            <p>A week set aside in year to further celebrate sales champions who exceeded the  yearly exceptations.It include the varieties such as all expense trips, exclusive resorts, holiday packages, Ngo meetings, business lectures and networking e.t.c.</p>
                            <a href="service-details.html" class="btn morebutton">Read More</a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>


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
