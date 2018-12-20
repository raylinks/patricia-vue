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
                                                <li class="breadcrumb-item"><a href="#">Annex</a></li>
                                                <li class="breadcrumb-item"><a href="#">Tables</a></li>
                                                <li class="breadcrumb-item active">Editable</li>
                                            </ol>
                                        </div>
                                        <h4 class="page-title">ALL USERS</h4>
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
                                                    <th>Action</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                   <tr v-for="cat in messages">
                                                      <td></td>
                                                      <td>{{cat.firstname}}</td>
                                                      <td>{{cat.lastname}}</td>
                                                      <td>{{cat.email}}</td>
                                                      <td><button type="button" class="btn btn-info">Confirm</button></td>
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

import { confirmUser } from '../../config';

export default{
  name: 'confirm',
  data: () => ({
    messages: [],
  }),
  mounted() {
    fetch(confirmUser).then(response => response.json()).then((result) => {
      // console.log(result);
      this.messages = result.data;
    });
  },
  components: {
    'side-bar': AdminSidebar,
    'top-bar': Topbar,
  },
};
</script>
