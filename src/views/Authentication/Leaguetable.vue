<template>
<div>
    <nav-bar v-if="this.$route.path !== '/dash'"></nav-bar>
        <!-- Begin page -->
        <div id="wrapper">

            <!-- ========== Left Sidebar Start ========== -->

            <!-- Left Sidebar End -->

            <!-- Start right Content here -->

            <div class="content-page">
                <!-- Start content -->
                <div class="content">

                    <!-- Top Bar Start -->

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
                                        <h4 class="page-title">League table</h4>
                                    </div>
                                </div>
                            </div>
                            <!-- end page title end breadcrumb -->


                             <div class="row">
                                <div class="col-md-12 col-lg-12 col-xl-8 align-self-center">
                                    <div class="card bg-white m-b-30">
                                        <div class="card-body new-user">
                                            <h5 class="header-title mb-4 mt-0">Fan's division</h5>
                                            <div class="table-responsive">
                                                <table class="table table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th class="border-top-0">Position</th>
                                                            <th class="border-top-0">image</th>
                                                            <th class="border-top-0">Member ID</th>
                                                            <th class="border-top-0">Team</th>
                                                            <th class="border-top-0"></th>
                                                            <th class="border-top-0"></th>
                                                            <th class="border-top-0">B</th>
                                                            <th class="border-top-0">S</th>
                                                            <th class="border-top-0">PTS</th>


                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>

                                                            </td>
                                                            <td>
                                                                <img class="rounded-circle" src="assets/images/users/avatar-2.jpg" alt="user" width="40"> </td>
                                                            <td>
                                                                ID
                                                            </td>
                                                            <td>

                                                            </td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>

                                                        </tr>

                                                    </tbody>
                                                </table>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12 col-lg-12 col-xl-4">
                                    <div class="card bg-white m-b-30">
                                        <div class="card-body new-user">
                                                <h5 class="header-title mt-0 mb-4">Elite division</h5>
                                            <ul class="list-unstyled mb-0 pr-3" id="boxscroll2" tabindex="1" style="overflow: hidden; outline: none;">
                                                <li class="p-3">
                                                    <div class="media">
                                                        <div class="thumb float-left">
                                                            <a href="#">
                                                                <img class=" rounded-circle" src="assets/images/users/avatar-5.jpg" alt="">
                                                            </a>
                                                        </div>
                                                        <div class="media-body">
                                                            <small class="pull-right text-muted">3</small>
                                                            <small class="text-muted">David</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="p-3">
                                                    <div class="media">
                                                        <div class="thumb float-left">
                                                            <a href="#">
                                                                <img class=" rounded-circle" src="assets/images/users/avatar-4.jpg" alt="">
                                                            </a>
                                                        </div>
                                                        <div class="media-body">

                                                            <small class="pull-right text-muted">8</small>
                                                            <small class="text-muted">California</small>
                                                        </div>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 col-lg-12 col-xl-8 align-self-center">
                                    <div class="card bg-white m-b-30">
                                        <div class="card-body new-user">
                                            <h5 class="header-title mb-4 mt-0">OAP'S division</h5>
                                            <div class="table-responsive">
                                                <table class="table table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th class="border-top-0">Position</th>
                                                            <th class="border-top-0">Image</th>
                                                            <th class="border-top-0" style="width:60px;">Member ID</th>
                                                            <th class="border-top-0"></th>
                                                            <th class="border-top-0"></th>
                                                            <th class="border-top-0">S</th>
                                                            <th class="border-top-0">R</th>
                                                            <th class="border-top-0">PTS</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>

                                                            <td>
                                                                <img src="assets/images/flags/us_flag.jpg" alt="" style="width:30px">
                                                            </td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td>

                                                            </td>

                                                        </tr>


                                                    </tbody>
                                                </table>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><!-- container -->
                    </div> <!-- Page content Wrapper -->
                </div> <!-- content -->
            </div>
            <!-- End Right content here -->
        </div>
    <app-footer  v-if="this.$route.path !== '/dash'"></app-footer>
    </div>
</template>
<script>
    import Navbar from '../Navbar.vue';
    import Footer from '../Footer.vue';
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
      'nav-bar': Navbar,
      'app-footer': Footer,
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
