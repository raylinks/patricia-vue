<template>
    <div>
        <nav-bar v-if="this.$route.path !== '/dash'"></nav-bar>
        <div id="wrapper">

            <!-- ========== Left Sidebar Start ========== -->

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
                                                <li class="breadcrumb-item"><a href="#">Tables</a></li>
                                                <li class="breadcrumb-item active">Editable</li>
                                            </ol>
                                        </div>
                                        <h4 class="page-title">PROPERTY</h4>
                                    </div>
                                </div>
                            </div>
                            <!-- end page title end breadcrumb -->

                            <div class="row">
                                <div class="col-8">
                                    <div class="card m-b-30">
                                        <div class="card-body">

                                            <h4 class="mt-0 header-title">BUYERS</h4>
                                            <p class="text-muted m-b-30 font-14">...those who had interest in buying.</p>

                                            <table class="table" id="my-table">
                                                <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Fullname</th>
                                                    <th>Email</th>
                                                    <th>Description</th>
                                                    <th>Action</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-for="cat in getBuy">
                                                    <td>1</td>
                                                    <td>{{cat.fullname}}</td>
                                                    <td>{{cat.email}}</td>
                                                    <td></td>
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

                                            <h4 class="mt-0 header-title">SELLERS</h4>
                                            <p class="text-muted m-b-30 font-14">...those who had interest in selling!</p>

                                            <table id="mainTable" class="table table-striped m-b-0">
                                                <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Fullname</th>
                                                    <th>Email</th>
                                                    <th>Description</th>
                                                    <th>Action</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr  v-for="cat in getSell">
                                                    <td></td>
                                                    <td>{{cat.fullname}}</td>
                                                    <td>{{cat.email}}</td>
                                                    <td>{{cat.product}}</td>
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
        <app-footer  v-if="this.$route.path !== '/dash'"></app-footer>
    </div>
</template>
<script>
    import Navbar from '../Navbar.vue';
    import Footer from '../Footer.vue';

import { gettradesellers } from '../../config';
import { getTradeBuyer } from '../../config';

export default{
  name: 'trading',
  data: () => ({
    getBuy: {},
    getSell: {},

  }),

  methods: {
    fetchSellers() {
      this.$http.get(gettradesellers).then((response) => {
        // console.log(response)
        this.getSell = response.body.data;
      });
    },
    fetchBuyers() {
      this.$http.get(getTradeBuyer).then((response) => {
        // console.log(response)
        this.getBuy = response.body.data;
      });
    },


  },
  created() {
    this.fetchBuyers();
    this.fetchSellers();
  },
  components: {
      'nav-bar': Navbar,
      'app-footer': Footer,
  },
};
</script>
