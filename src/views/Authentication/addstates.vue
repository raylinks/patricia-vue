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
                                        <h4 class="page-title">Estate development series</h4>
                                    </div>
                                </div>
                            </div>
                            <!-- end page title end breadcrumb -->

                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="card m-b-30">
                                        <div class="card-body">

                                            <h4 class="mt-0 header-title">ADD STATE DETAIL</h4>
                                            <p class="text-muted m-b-30 font-14">Admin panel to to add necedssary info,,note whatever you input here will be showed on the website.</p>
                                            <div class="row">
                                                <div class="alert alert-success" v-if="submitted">
                                                    <button class="close" type="button" data-dismiss="alert" aria-hidden="true">&#215;</button>
                                                    You have succesfully added a state......An email has been sent to you
                                                </div>
                                            </div>
                                            <form class="" @submit.prevent="submit()">
                                                <div class="form-group">
                                                    <label>State</label>
                                                    <input type="text" class="form-control"  v-model="formData.state" required placeholder="input state name"/>
                                                </div>
                                                <div class="form-group">
                                                    <label>Slug</label>
                                                    <input type="text" class="form-control"  v-model="formData.slug" required placeholder="input state name"/>
                                                </div>


                                                <div class="form-group">
                                                    <div>
                                                        <button type="submit" class="btn btn-primary waves-effect waves-light">
                                                            Submit
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

                    </div> <!-- Page content Wrapper -->

                </div> <!-- content -->

                <footer class="footer">
                    © 2018.
                </footer>

            </div>
            <!-- End Right content here -->

        </div>
    </div>
</template>
<script>
import AdminSidebar from './AdminSidebar.vue';
import Topbar from './Topbar.vue';

import { postStates } from '../../config';

export default{
  data() {
    return {
      formData: {
        state: '',
          slug:''

      },
      show: {},
      states: {},
        submitted: false
    };
  },
  components: {
    'side-bar': AdminSidebar,
    'top-bar': Topbar,
  },

  methods: {

    submit() {
      this.$http.post('http://localhost:3000/api/v1/state', this.formData).then(function (response) {

        this.submitted = true;
        this.formData = '';
      });
    },
  },
};
</script>
