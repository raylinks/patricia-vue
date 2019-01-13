<template>
    <div>
        <nav-bar></nav-bar>
        <div id="wrapper">
            <div class="content-page">
                <!-- Start content -->
                <div class="content">
                    <div class="page-content-wrapper ">

                        <div class="container-fluid">

                            <div class="row">
                                <div class="col-sm-8">
                                    <div class="page-title-box">
                                        <div class="btn-group float-right">
                                            <ol class="breadcrumb hide-phone p-0 m-0">
                                                <li class="breadcrumb-item"><a href="#"T.E.A.M LTD.></a></li>

                                            </ol>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <!-- end page title end breadcrumb -->

                            <div class="row">
                                <div class="col-sm-9 col-lg-9 ">
                                    <div class="card m-b-30">
                                        <div class="card-body">

                                            <div class="form-group row">
                                                <label class="col-sm-2 col-form-label">Select product</label>
                                                <div class="col-sm-10">
                                                    <select class="form-control">
                                                        <option>Select</option>
                                                        <option value="lakoweLekki">Lekki/lakowe</option>

                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="example-search-input" class="col-sm-2 col-form-label">Promo code</label>
                                                <div class="col-sm-10">
                                                    <input class="form-control" type="search" value="How do I shoot web" id="example-search-input">
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="example-email-input" class="col-sm-2 col-form-label">Site Inspection</label>
                                                <div class="col-sm-10">
                                                    <input class="form-control" type="email" value="bootstrap@example.com" id="example-email-input">
                                                </div>
                                            </div>

                                            <button type="submit" class="btn btn-success ml-2">Sign in</button>

                                        </div>
                                    </div>
                                </div> <!-- end col -->
                            </div> <!-- end row -->
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>
<script>
    import Navbar from '../Navbar.vue';
    import Footer from '../Footer.vue';


    import { AuthLandSell } from '../../config';

    export default{
        name: 'tradebuy',

        data: () => ({
            trade: [],
            error: '',
            seen: true,
            submitted: false,

            reg: {
                product: '',
                promo_code: '',
                site_visit: '',
                priviledge: '1',
            },

        }),
        components: {
            'nav-bar': Navbar,
            'app-footer': Footer,
        },

        methods: {
            submit() {
                this.$http.post(AuthLandSell, this.reg)
                    .then(function (response) {
                        this.submitted = true;
                        this.reg = '';
                        this.$router.push({ name: home });
                    })
                    .catch((err) => {
                        //  console.log(err)
                        // this.error = err.body;
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
