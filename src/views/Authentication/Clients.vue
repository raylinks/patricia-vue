<template>
    <div>
        <nav-bar></nav-bar>
        <!-- Page Heading Section Start -->


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
                                            <li class="breadcrumb-item"><a href="#"></a></li>
                                            <li class="breadcrumb-item active"></li>
                                        </ol>
                                    </div>
                                    <h4 class="page-title"></h4>
                                </div>
                            </div>
                        </div>
                        <!-- end page title end breadcrumb -->


                        <div class="row">
                            <!-- Column -->
                            <div class="col-md-6 col-lg-6 col-xl-3">
                                <div class="card m-b-30">
                                    <div class="card-body">
                                        <div class="d-flex flex-row">
                                            <div class="col-3 align-self-center">
                                                <div class="round">
                                                    <i class="mdi mdi-webcam"></i>
                                                </div>
                                            </div>
                                            <div class="col-6 align-self-center text-center">
                                                <div class="m-l-10">
                                                    <h5 class="mt-0 round-inner">9</h5>
                                                    <p class="mb-0 text-muted"></p>
                                                </div>
                                            </div>
                                            <div class="col-3 align-self-end align-self-center">
                                                <h6 class="m-0 float-right text-center text-danger"> <i class="mdi mdi-arrow-down"></i> <span>NOTIFICATIONS</span></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Column -->
                            <!-- Column -->
                            <div class="col-md-6 col-lg-6 col-xl-3">
                                <div class="card m-b-30">
                                    <div class="card-body">
                                        <div class="d-flex flex-row">
                                            <div class="col-3 align-self-center">
                                                <div class="round">
                                                    <i class="mdi mdi-account-multiple-plus"></i>
                                                </div>
                                            </div>
                                            <div class="col-6 text-center align-self-center">
                                                <div class="m-l-10 ">
                                                    <h5 class="mt-0 round-inner">5</h5>
                                                    <p class="mb-0 text-muted"></p>
                                                </div>
                                            </div>
                                            <div class="col-3 align-self-end align-self-center">
                                                <h6 class="m-0 float-right text-center text-success"> <i class="mdi mdi-arrow-up"></i> <span>ACTIVITY LOG</span></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Column -->
                            <!-- Column -->
                            <div class="col-md-6 col-lg-6 col-xl-3">
                                <div class="card m-b-30">
                                    <div class="card-body">
                                        <div class="d-flex flex-row">
                                            <div class="col-3 align-self-center">
                                                <div class="round ">
                                                    <i class="mdi mdi-basket"></i>
                                                </div>
                                            </div>
                                            <div class="col-6 align-self-center text-center">
                                                <div class="m-l-10 ">
                                                    <h5 class="mt-0 round-inner">4</h5>
                                                    <p class="mb-0 text-muted"></p>
                                                </div>
                                            </div>
                                            <div class="col-3 align-self-end align-self-center">
                                                <h6 class="m-0 float-right text-center text-danger"> <i class="mdi mdi-arrow-down"></i> <span>Exclusive Promo</span></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Column -->
                            <!-- Column -->
                            <div class="col-md-6 col-lg-6 col-xl-3">
                                <div class="card m-b-30">
                                    <div class="card-body">
                                        <div class="d-flex flex-row">
                                            <div class="col-3 align-self-center">
                                                <div class="round">
                                                    <i class="mdi mdi-rocket"></i>
                                                </div>
                                            </div>
                                            <div class="col-6 align-self-center text-center">
                                                <div class="m-l-10">
                                                    <h5 class="mt-0 round-inner">4</h5>
                                                    <p class="mb-0 text-muted"></p>
                                                </div>
                                            </div>
                                            <div class="col-3 align-self-end align-self-center">
                                                <h6 class="m-0 float-right text-center text-success"> <i class="mdi mdi-arrow-up"></i> <span></span></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Column -->
                        </div>

                        <div class="row">
                            <div class="col-md-12 col-lg-12 col-xl-8 align-self-center">
                                <div class="card bg-white m-b-30">
                                    <div class="card-body new-user">
                                        <h5 class="header-title mb-4 mt-0">Activity Log</h5>
                                        <div class="table-responsive">
                                            <table class="table table-hover">
                                                <thead>
                                                <tr>
                                                    <th>Firstname</th>
                                                    <th>Lastname</th>
                                                    <th>Email</th>
                                                    <th>Action</th>
                                                    <th class="border-top-0">Status</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-for="cat in user" >
                                                    <td>1</td>
                                                    <td>{{cat.firstname}}</td>
                                                    <td>{{cat.lastname}}</td>
                                                    <td>{{cat.email}}</td>
                                                    <td></td>
                                                    <td><button><a  :href="`/edit/${cat._id}/edit`" class="btn btn-info">Change Role</a></button></td>
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
                                        <h5 class="header-title mt-0 mb-4">League Table</h5>
                                        <ul class="list-unstyled mb-0 pr-3" id="boxscroll2" tabindex="1" style="overflow: hidden; outline: none;">

                                            <li class="p-3">
                                                <div class="media">
                                                    <div class="thumb float-left">
                                                        <a href="#">
                                                            <img class=" rounded-circle" src="assets/images/users/avatar-6.jpg" alt="">
                                                        </a>
                                                    </div>
                                                    <div class="media-body">
                                                        <p class="media-heading mb-0">Robert N. Carlile <i class="fa fa-circle text-success mr-1 pull-right"></i></p>
                                                        <small class="pull-right text-muted">Now</small>
                                                        <small class="text-muted">India</small>
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
                                                        <p class="media-heading mb-0">Bobby M. Gray<i class="fa fa-circle text-danger mr-1 pull-right"></i></p>
                                                        <small class="pull-right text-muted">58 min ago</small>
                                                        <small class="text-muted">Australia</small>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!-- container -->


                </div> <!-- Page content Wrapper -->

            </div> <!-- content -->


        </div>
        <!-- End Right content here -->



        <app-footer  ></app-footer>
    </div>
</template>
<script>
    import Navbar from '../Navbar.vue';
    import Footer from '../Footer.vue';

    import { userRole } from '../../config';

    export default{
        data() {
            return {
                user: {},
                location: {},
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
                this.$http.get(userRole).then(function (response) {
                    this.user = response.body.data;
                    // console.log(response);
                    // this.client= ''
                });
            },


        },
    };
</script>
