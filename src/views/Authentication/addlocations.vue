<template>
    <div>

        <div id="wrapper">

            <!-- ========== Left Sidebar Start ========== -->
            <!--<side-bar></side-bar>-->
            <!-- Left Sidebar End -->

            <!-- Start right Content here -->

            <div class="content-page">
                <!-- Start content -->
                <div class="content">

                    <!-- Top Bar Start -->
                    <!--<top-bar></top-bar>-->
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
                                        <h4  style="color:red;" class="page-title">Estate development series</h4>
                                    </div>
                                </div>
                            </div>
                            <!-- end page title end breadcrumb -->

                            <div class="col-lg-6">
                                <div class="card m-b-30">
                                    <div class="card-body">

                                        <h4 class="mt-0 header-title">ADD LOCATION DETAILS</h4>
                                        <p class="text-muted m-b-30 font-14">Admin panel to to add necedssary info,,note whatever you input here will be showed on the website..</p>
                                        <div class="row">
                                            <div class="alert alert-success" v-if="submitted">
                                                <button class="close" type="button" data-dismiss="alert" aria-hidden="true">&#215;</button>
                                                You have succesfully added a location......An email has been sent to you
                                            </div>
                                        </div>
                                        <form @submit.prevent="submit" id="locate" enctype="multipart/form-data">

                                            <div class="form-group">
                                                <label>Select State</label>
                                                <select class="form-control" name="state" v-model="formData.state">
                                                    <option  value="0" >Select  state</option>
                                                    <option v-for="cat in show"  v-bind:value="cat.slug">{{cat.state}}</option>

                                                </select>
                                            </div>

                                            <div class="form-group">
                                                <label>State slug</label>
                                                <div>
                                                    <input type="text" name="slug" v-model="formData.slug" class="form-control"
                                                           data-parsley-min="6" placeholder="Min value is 6"/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Location Name</label>
                                                <div>
                                                    <input type="text" name="name"  v-model="formData.name" class="form-control"
                                                           data-parsley-maxlength="6" placeholder="Max 6 chars."/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Developer</label>
                                                <div>
                                                    <input type="text" name="deveoper" v-model="formData.developer" class="form-control"
                                                           data-parsley-length="[5,10]"
                                                           placeholder="Text between 5 - 10 chars length"/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>plot Size</label>
                                                <div>
                                                    <input type="text" name="plot_size" v-model="formData.plot_size" class="form-control"
                                                           data-parsley-min="6" placeholder="Min value is 6"/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Amount</label>
                                                <div>
                                                    <input type="text" name="amount" v-model="formData.amount" class="form-control"
                                                           data-parsley-max="6" placeholder="Max value is 6"/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Bonus</label>
                                                <div>
                                                    <input class="form-control" name="bonus" v-model="formData.bonus"   type="text range" min="6"
                                                           max="100" placeholder="Number between 6 - 100"/>
                                                </div>
                                            </div>

                                            <div v-if="message"  :class="`message ${error ? 'is-danger' : 'is-success'}`">
                                                <div  class="message-body">{{message}}</div>
                                            </div>
                                            <div class="form-group">
                                                <label>Upload Image</label>
                                                <div>
                                                    <input type="file" name="image"  ref="file" class="form-control" @change="imageChanged"

                                                           placeholder="Hex. Color" />
                                                </div>
                                            </div>

                                            <span v-if="file" class="file-name" >{{file.name}}</span>


	<br>
<h1 class="error" v-html="error" style="color: red;">{{error}}</h1>

<br>


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
import axios from 'axios';
import AdminSidebar from './AdminSidebar.vue';
import Topbar from './Topbar.vue';
import { postLocation } from '../../config';
import { fetchStates } from '../../config';

export default{
  name: 'locations',
  // data: () => ({
  data() {
    return {

      submitted: false,
      file: '',
      //               error:null,
      formData: {
        name: '',
        state: '',
        slug: '',
        plot_size: '',
        developer: '',
        amount: '',
        bonus: '',
        image: '',
      },
      show: [],

      message: '',
      error: false,


    };
  },
  mounted() {
    fetch(fetchStates).then(response => response.json()).then((result) => {
      this.show = result.data;
      // console.log(result)
    });
  },
  components: {
    'side-bar': AdminSidebar,
    'top-bar': Topbar,
  },
  methods: {
    imageChanged(e) {
      this.file = e.target.files[0];
      //          var fileReader = new FileReader();
      //          fileReader.readAsDataURL(e.target.files[0])
      //
      //          fileReader.onload = (e)=> {
      //              this.formData.image = e.target.result
      //
      //          }
      //          console.log(this.formData)
    },
    //      imageChanged(){
    //          this.file =this.$refs.file.files[0];
    //          this.error =false;
    //          this.message= ""
    //
    //      },
    submit() {
      // var form = document.getElementById('locate');
      // console.log(form)
      const formData = new FormData();
      // formData.append('me','me');
      formData.append('state', this.formData.state);
      formData.append('slug', this.formData.slug);
      formData.append('name', this.formData.name);
      formData.append('plot_size', this.formData.plot_size);
      formData.append('bonus', this.formData.bonus);
      formData.append('amount', this.formData.amount);
      formData.append('image', this.file);
      formData.append('developer', this.formData.developer);
      axios.post(postLocation, formData).then(function (response) {
        console.log(response);
        this.message = 'file has been uploaded';
        // this.file="";
      }).catch(function (err) {
        this.error = err.body.error;
      });
    },


  },
};


</script>
<style scoped>
.error{
    color:red;
}
</style>
