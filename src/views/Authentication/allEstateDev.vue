<template>
    <div>
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
                                                <li class="breadcrumb-item"><a href="#">Team</a></li>
                                                <li class="breadcrumb-item"><a href="#">Tables</a></li>
                                                <li class="breadcrumb-item active">Clients</li>
                                            </ol>
                                        </div>
                                        <h4 style="color:palevioletred;" class="page-title">All Estates Dev</h4>
                                    </div>
                                </div>
                            </div>
                            <!-- end page title end breadcrumb -->

                            <div class="row">
                                <div class="col-8">
                                    <div class="card m-b-30">
                                        <div class="card-body">

                                            <h4 class="mt-0 header-title">all states</h4>
                                            <p class="text-muted m-b-30 font-14">Add toolbar column with edit and delete buttons.</p>

                                            <table class="table" id="">
                                                <thead>
                                                <tr>
                                                    <th>No</th>

                                                    <th>Action</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-for="cat in state" >
                                                    <td>{{cat.state}}</td>

                                                    <td><button type="button" class="btn btn-info">Delete</button></td>
                                                </tr>

                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                </div> <!-- end col -->
                            </div> <!-- end row -->

                            <div class="row">
                                <div class="col-8">
                                    <div class="card m-b-30">
                                        <div class="card-body">

                                            <h4 class="mt-0 header-title">all locations</h4>
                                            <p class="text-muted m-b-30 font-14">Add toolbar column with edit and delete buttons.</p>

                                            <table class="table" id="my-table">
                                                <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Firstname</th>

                                                    <th>Action</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-for="cat in location" >
                                                    <td>{{cat.name}}</td>
                                                    <td>{{cat.plot_size}}</td>

                                                    <td><button type="button" class="btn btn-info">Delete</button></td>
                                                </tr>

                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                </div> <!-- end col -->
                            </div> <!-- end row -->


                        </div><!-- container -->

                    </div> <!-- Page content Wrapper -->

                </div> <!-- content -->

                <!--  <footer class="footer">
                     © 2018 Annex by Mannatthemes.
                 </footer> -->

            </div>
            <!-- End Right content here -->

        </div>
    </div>
</template>
<script>
    import AdminSidebar from './AdminSidebar.vue';
    import Topbar from './Topbar.vue';

    import { fetchStates } from '../../config';
    import { GetLocation } from '../../config';

    export default{
        data() {
            return {
                state: {},
                location: {},
            };
        },
        components: {
            'side-bar': AdminSidebar,
            'top-bar': Topbar,
        },
        created() {
            this.getState();
            this.getLocation();
        },
        methods: {
            getState() {
                this.$http.get(fetchStates).then(function (response) {
                    this.state = response.body.data;
                    // console.log(response);
                    // this.client= ''
                });
            },
            getLocation() {
                this.$http.get(GetLocation).then(function (response) {
                    this.location = response.body.data;
                    // console.log(response);
                    // this.client= ''
                });
            },

        },
    };
</script>
