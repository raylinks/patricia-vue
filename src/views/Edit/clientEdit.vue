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

                                            <h4 class="mt-0 header-title">Client users</h4>
                                            <p class="text-muted m-b-30 font-14">Confirm clients that have done their site inspection.</p>

                                            <form class="" action="#">
                                                <div class="form-group">
                                                    <label>Firstname</label>
                                                    <input type="text" class="form-control"  placeholder="firstname"/>
                                                </div>

                                                <div class="form-group">
                                                    <label>Lastname</label>
                                                    <div>
                                                        <input type="password"  class="form-control"
                                                               placeholder="lastname"/>
                                                    </div>

                                                </div>

                                                <div class="form-group">
                                                    <label>E-Mail</label>
                                                    <div>
                                                        <input type="email" class="form-control"
                                                               placeholder="Enter a valid e-mail"/>
                                                    </div>
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
    messages: [],
  }),
  mounted() {
    fetch(confirmUser).then(response => response.json()).then((result) => {
      // console.log(result);
      this.messages = result.data;
    });
  },
  components: {
      'nav-bar': Navbar,
      'app-footer': Footer,
  },
};
</script>
