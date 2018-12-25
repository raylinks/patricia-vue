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
                                        <h4 class="page-title">CLIENTS</h4>
                                    </div>
                                </div>
                            </div>
                            <!-- end page title end breadcrumb -->

                            <div class="row">
                                <div class="col-8">
                                    <div class="card m-b-30">
                                        <div class="card-body">

                                            <h4 class="mt-0 header-title">all registered users</h4>
                                            <p class="text-muted m-b-30 font-14">Add toolbar column with edit and delete buttons.</p>

                                            <table class="table" id="my-table">
                                                <thead>
                                                  <tr>
                                                    <th>No</th>
                                                    <th>Firstname</th>
                                                    <th>Lastname</th>
                                                    <th>Email</th>
                                                    <th>Phone</th>
                                                    <th>Action</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                   <tr v-for="cat in show" >
                                                      <td>{{cat.firstname}}</td>
                                                      <td>{{cat.lastname}}</td>
                                                      <td>{{cat.email}}</td>
                                                      <td>{{cat.lastname}}</td>
                                                      <td>{{cat.phone}}</td>
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

import { clients } from '../../config';

export default{
  data() {
    return {
      client: {
        firstname: '',
        lastname: '',
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
    this.getClient();
  },
  methods: {
    getClient() {
      this.$http.get(clients).then(function (response) {
        this.show = response.body.data;
        // console.log(response);
        // this.client= ''
      });
    },
  },
};
</script>
