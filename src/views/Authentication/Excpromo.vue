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

export default{
  data() {
    return {
      users: {
        firstname: '',
        email: '',
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
    getUsers() {
      this.$http.get('http://localhost:3000/api/v1/users')
        .then(function (response) {
          this.show = response.data;
          this.users = '';
        });
    },
  },


};
</script>
