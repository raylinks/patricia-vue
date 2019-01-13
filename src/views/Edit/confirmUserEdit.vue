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

                                            <h4 class="mt-0 header-title">Confirm users</h4>
                                            <p class="text-muted m-b-30 font-14">Confirm clients that have done their site inspection.</p>

                                            <form class="" @submit.prevent="updateUser()">
                                                <div class="form-group">
                                                    <label>Firstname</label>
                                                    <input v-model="message.firstname" type="text" class="form-control"  placeholder="firstname"/>
                                                </div>

                                                <div class="form-group">
                                                    <label>Lastname</label>
                                                    <div>
                                                        <input v-model="message.lastname"  type="text"  class="form-control"
                                                               placeholder="lastname"/>
                                                    </div>

                                                </div>

                                                <div class="form-group">
                                                    <label>E-Mail</label>
                                                    <div>
                                                        <input  v-model="message.email"  type="email" class="form-control"
                                                               placeholder="Enter a valid e-mail"/>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div>
                                                        <button   :class="[ (editing)?  'is-loading' : '' ]" type="submit" class="btn btn-primary waves-effect waves-light">
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

            </div>
            <!-- End Right content here -->

        </div>
        <app-footer  v-if="this.$route.path !== '/dash'"></app-footer>
    </div>
</template>
<script>
    import Navbar from '../Navbar.vue';
    import Footer from '../Footer.vue';

import { confirmUser } from '../../config';

export default{
  name: 'confirm',
  data: () => ({
    message: {},
    editing: false,
  }),

  methods: {
    edit() {
      this.$http.get(`http://localhost:3000/api/v1/users/${this.$route.params._id}`).then((response) => {
        // console.log(response)
        this.message = response.body.data;
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
  },
  components: {
      'nav-bar': Navbar,
      'app-footer': Footer,
  },
};
</script>
