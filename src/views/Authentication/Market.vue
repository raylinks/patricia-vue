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

                            <section class="about-two-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-md-7">
                    <div class="about-col">
                        <!-- <h2>Estate <span>League</span></h2>
                        <h4>Welcome, A league for REAL champions only</h4> -->
                        <!-- <p>Morbi scelerisque volutpat egestas. Fusce dapibus rutrum magna, id pharetra lectus consectetur quis. Nunc ut porta enim, ac vulputate nisl. Vivamus sit amet dui quis leo suscipit scelerisque. Suspendisse euismod magna nec justo aliquam, tincidunt luctus mauris ultricies. Sed pellentesque, ligula at lacinia molestie, nisl sapien consequat nibh, in mattis dolor dolor ac lorem. Sed in molestie lectus. Quisque hendrerit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem architecto debitis sapiente alias adipisci doloremque, magnam nihil accusamus cum suscipit, placeat optio tempore, laborum sit ab esse. Magnam, necessitatibus, accusantium.</p> -->
                        <div class="row">
                            <div class="col-xs-4 fw600">
                                <div class="about-box">
                                    <i class="zmdi zmdi-network-locked"></i>
                                    <h4><a href="/userbuy">BUY</a></h4>
                                </div>
                            </div>

                            <div class="col-xs-4 fw600">
                                <div class="about-box">
                                    <i class="zmdi zmdi-thumb-up"></i>
                                    <h4><a href="/usersell">SELL</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 col-md-5">
                    <div class="about-img-col">
                        <img src="images/about/1.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>


                        </div><!-- container -->
                    </div> <!-- Page content Wrapper -->
                </div> <!-- content -->
                <footer class="footer">
                    © 2018 teamltd by raybest.
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
