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

                            <div class="col-lg-6">
                                <div class="card m-b-30">
                                    <div class="card-body">

                                        <h4 class="mt-0 header-title">ADD LOCATION DETAILS</h4>
                                        <p class="text-muted m-b-30 font-14">Admin panel to to add necedssary info,,note whatever you input here will be showed on the website..</p>

                                        <form action="#">

                                            <div class="form-group">
                                                <label>Select State</label>
                                                <div>
                                                    <input type="text" class="form-control" required
                                                           data-parsley-minlength="6" placeholder="Min 6 chars."/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Location Name</label>
                                                <div>
                                                    <input type="text" class="form-control" required
                                                           data-parsley-maxlength="6" placeholder="Max 6 chars."/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Developer</label>
                                                <div>
                                                    <input type="text" class="form-control" required
                                                           data-parsley-length="[5,10]"
                                                           placeholder="Text between 5 - 10 chars length"/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>plot Size</label>
                                                <div>
                                                    <input type="text" class="form-control" required
                                                           data-parsley-min="6" placeholder="Min value is 6"/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Amount</label>
                                                <div>
                                                    <input type="text" class="form-control" required
                                                           data-parsley-max="6" placeholder="Max value is 6"/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Bonus</label>
                                                <div>
                                                    <input class="form-control" required type="text range" min="6"
                                                           max="100" placeholder="Number between 6 - 100"/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Upload Image</label>
                                                <div>
                                                    <input type="text" class="form-control" required
                                                           data-parsley-pattern="#[A-Fa-f0-9]{6}"
                                                           placeholder="Hex. Color"/>
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label>Min check</label>
                                                <div>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck1" data-parsley-multiple="groups"
                                                               data-parsley-mincheck="2">
                                                        <label class="custom-control-label" for="customCheck1">And this</label>
                                                    </div>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck2" data-parsley-multiple="groups"
                                                               data-parsley-mincheck="2">
                                                        <label class="custom-control-label" for="customCheck2">Can't check this</label>
                                                    </div>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck3" data-parsley-multiple="groups"
                                                               data-parsley-mincheck="2">
                                                        <label class="custom-control-label" for="customCheck3">This too</label>
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="form-group m-b-0">
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

import { getStates } from '../../config';

export default{
  data() {
    return {
      formData: {
        state_id: '',
        name: '',
        developer: '',
        plot_size: '',
        amount: '',
        bonus: '',
        slug: '',


      },
      show: {},
      locations: {},
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
    submit() {
      this.$http.post().then(function (response) {
        this.locations = response.body.data;
        this.formData = '';
      });
    },
  },
};
</script>
