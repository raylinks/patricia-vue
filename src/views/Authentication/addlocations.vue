<template>
    <div>

        <side-bar></side-bar>
        <top-bar></top-bar>
        <section id="middle">


            <!-- page title -->
            <header id="page-header">
                <h1>Form Validate</h1>
                <ol class="breadcrumb">
                    <li><a href="#">Forms</a></li>
                    <li class="active">Form Validate</li>
                </ol>
            </header>
            <!-- /page title -->


            <div id="content" class="padding-20">

                <div class="row">

                    <div class="col-md-6">

                        <!-- ------ -->
                        <div class="panel panel-default">
                            <div class="panel-heading panel-heading-transparent">
                                <strong>FORM VALIDATION</strong>
                            </div>

                            <div class="panel-body">

                                <form class="validate" action="php/contact.php" method="post" enctype="multipart/form-data" data-success="Sent! Thank you!" data-toastr-position="top-right">
                                    <fieldset>
                                        <!-- required [php action request] -->
                                        <input type="hidden" name="action" value="contact_send" />

                                        <div class="row">
                                            <div class="form-group">
                                                <div class="col-md-6 col-sm-6">
                                                    <label>First Name *</label>
                                                    <input type="text" name="contact[first_name]" value="" class="form-control required">
                                                </div>
                                                <div class="col-md-6 col-sm-6">
                                                    <label>Last Name *</label>
                                                    <input type="text" name="contact[last_name]" value="" class="form-control required">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="form-group">
                                                <div class="col-md-6 col-sm-6">
                                                    <label>Email *</label>
                                                    <input type="email" name="contact[email]" value="" class="form-control required">
                                                </div>
                                                <div class="col-md-6 col-sm-6">
                                                    <label>Phone *</label>
                                                    <input type="text" name="contact[phone]" value="" class="form-control required">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="form-group">
                                                <div class="col-md-12 col-sm-12">
                                                    <label>Position *</label>
                                                    <select name="contact[position]" class="form-control pointer required">
                                                        <option value="">--- Select ---</option>
                                                        <option value="Marketing">PR &amp; Marketing</option>
                                                        <option value="Developer">Web Developer</option>
                                                        <option value="php">PHP Programmer</option>
                                                        <option value="Javascript">Javascript Programmer</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="form-group">
                                                <div class="col-md-6 col-sm-6">
                                                    <label>Expected Salary *</label>
                                                    <input type="text" name="contact[expected_salary]" value="" class="form-control required">
                                                </div>
                                                <div class="col-md-6 col-sm-6">
                                                    <label>Start Date *</label>
                                                    <input type="text" name="contact[start_date]" value="" class="form-control datepicker required" data-format="yyyy-mm-dd" data-lang="en" data-RTL="false">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="form-group">
                                                <div class="col-md-12 col-sm-12">
                                                    <label>Experience *</label>
                                                    <textarea name="contact[experience]" rows="4" class="form-control required"></textarea>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="form-group">
                                                <div class="col-md-12 col-sm-12">
                                                    <label>
                                                        Website
                                                        <small class="text-muted">- optional</small>
                                                    </label>
                                                    <input type="text" name="contact[website]" placeholder="http://" class="form-control">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="form-group">
                                                <div class="col-md-12">
                                                    <label>
                                                        File Attachment
                                                        <small class="text-muted">Curriculum Vitae - optional</small>
                                                    </label>

                                                    <!-- custom file upload -->
                                                    <div class="fancy-file-upload fancy-file-primary">
                                                        <i class="fa fa-upload"></i>
                                                        <input type="file" class="form-control" name="contact[attachment]" onchange="jQuery(this).next('input').val(this.value);" />
                                                        <input type="text" class="form-control" placeholder="no file selected" readonly="" />
                                                        <span class="button">Choose File</span>
                                                    </div>
                                                    <small class="text-muted block">Max file size: 10Mb (zip/pdf/jpg/png)</small>

                                                </div>
                                            </div>
                                        </div>

                                    </fieldset>

                                    <div class="row">
                                        <div class="col-md-12">
                                            <button type="submit" class="btn btn-3d btn-teal btn-xlg btn-block margin-top-30">
                                                SEND APPLICATION
                                                <span class="block font-lato">We'll get back to you within 48 hours</span>
                                            </button>
                                        </div>
                                    </div>

                                </form>

                            </div>

                        </div>
                        <!-- /----- -->

                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import AdminSidebar from './AdminSidebar.vue';
    import Topbar from './Topbar.vue';
    import axios from 'axios';
    import { postLocation } from '../../config';
    import { fetchStates } from '../../config';

    export default{
        name: 'locations',
        //data: () => ({
        data: function () {
            return {

                submitted: false,
                file:"",
//               error:null,
                formData: {
                    name: '',
                    state: '',
                    slug: '',
                    plot_size: '',
                    developer: '',
                    amount: '',
                    bonus: '',
                    image: ''
                },
                show: [],

                message:"",
                error:false


            }
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
            imageChanged(e){
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
                //var form = document.getElementById('locate');
                //console.log(form)
                const formData = new FormData();
                //formData.append('me','me');
                formData.append('state',this.formData.state)
                formData.append('slug',this.formData.slug)
                formData.append('name',this.formData.name)
                formData.append('plot_size',this.formData.plot_size)
                formData.append('bonus',this.formData.bonus)
                formData.append('amount',this.formData.amount)
                formData.append('image',this.file)
                formData.append('developer',this.formData.developer)
                axios.post(postLocation, formData ).then(function(response){
                    console.log(response);
                    this.message="file has been uploaded";
                    // this.file="";

                }).catch(function(err){
                    this.error = err.body.error;
                })
            },


        },
    };


</script>
<style scoped>
    .error{
        color:red;
    }
</style>