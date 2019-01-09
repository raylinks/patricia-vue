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
                                                <li class="breadcrumb-item"><a href="#">Forms</a></li>
                                                <li class="breadcrumb-item active">Form Validation</li>
                                            </ol>
                                        </div>
                                        <h4 class="page-title">Confirm users</h4>
                                    </div>
                                </div>
                            </div>
                            <!-- end page title end breadcrumb -->

                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="card m-b-30">
                                        <div class="card-body">

                                            <h4 class="mt-0 header-title">Client users</h4>
                                            <p class="text-muted m-b-30 font-14"><b>Assign a role to a user.</b></p>

                                            <form class="" action="#">

                                                <div class="form-group">
                                                    <label>Lastname</label>
                                                    <div>
                                                        <input v-model="message.lastname" type="text"  disabled  class="form-control"
                                                               />
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label>E-Mail</label>
                                                    <div>
                                                        <input v-model="message.email" type="email" disabled   class="form-control"
                                                               />
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label>Select Role</label>
                                                    <select class="form-control" >
                                                        <option  value="0" >Select  role for Client</option>
                                                        <option v-for="cat in role"  :value="cat.name">{{cat.name}}</option>

                                                    </select>
                                                </div>
                                                <div class="form-group">
                                                    <div>
                                                        <button type="submit" class="btn btn-primary waves-effect waves-light">
                                                            Update
                                                        </button>
                                                        <button type="reset" class="btn btn-secondary waves-effect m-l-5">
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                </div> <!-- end col -->
                            </div> <!-- end row -->

                        </div><!-- container -->

                    </div>

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
import AdminSidebar from '../Authentication/AdminSidebar.vue';
import Topbar from '../Authentication/Topbar.vue';

import { confirmUser } from '../../config';
import { getRoles } from '../../config';

export default{
  name: 'editRole',
  data: () => ({
    message: {},
    role: {},
    editing: false,
  }),

  methods: {
    edit() {
      this.$http.get(`http://localhost:3000/api/v1/users/${this.$route.params._id}`).then((response) => {
        // console.log(response)
        this.message = response.body.data;
      });
    },
    fetchRoles() {
      this.$http.get(getRoles).then((response) => {
        // console.log(response)
        this.role = response.body.data;
      });
    },

    updateUser() {
      this.editing = true;
      this.$http.post(`http://localhost:3000/api/v1/users/${this.$route.params._id}`).then((response) => {
        //                    this.message = response.data;
        //                    this.message = '';
        console.log(response);
      });
    },
  },
  created() {
    this.edit();
    this.fetchRoles();
  },
  components: {
    'side-bar': AdminSidebar,
    'top-bar': Topbar,
  },
};
</script>
