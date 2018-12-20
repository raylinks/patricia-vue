<template>
    <div>
        <nav-bar></nav-bar>
        <div class="pagehding-sec">
            <div class="images-overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="page-heading">

                            <ul>
                                <li><a href="index-2.html"></a></li>
                                <h1></h1>
                                <h1>TRADEe</h1>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <form @submit.prevent="submit">
            <section class="contact-form-sec pt-50 pb-50"   v-show="seen">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="contact-field">


                                <!-- <div v-if="error">
                                    <button type="button" class="close"  data-dismiss="alert">&times;</button>
                                    <h4 class="alert-heading">Error!</h4>
                                    <p class="mb-0">{{error}}</p>
                                </div> -->


                                <h2>FILL</h2>
                                <div class="col-md-4 col-sm-4 col-xs-12">
                                    <div class="single-input-field">
                                        <h4>(step 1) select Product </h4>
                                        <input v-model="reg.product" type="text"/>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4 col-xs-12">
                                    <div class="single-input-field">
                                        <h4>(step  2)input promo code </h4>
                                        <input v-model="reg.promo_code" type="text"/>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4 col-xs-12">
                                    <div class="single-input-field">
                                        <h4>inspection date<span style="color:red;"> *</span></h4>
                                        <input v-model="reg.email" type="email"/>
                                    </div>
                                </div>


                                <div class="col-md-4 col-sm-4 col-xs-12">
                                    <div class="single-input-fieldsbtn">
                                        <button class="btn btn-primary pull-right btn-submit"   @click="seen = !seen" type="submit"><i class="fa fa-search"></i> Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- Google Map Section Start -->

                    <!-- Google Map Section End -->
                </div>
            </section>


            <section class="contact-form-sec pt-50 pb-50"  v-show="!seen">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="contact-field">


                                <!-- <div v-if="error">
                                    <button type="button" class="close"  data-dismiss="alert">&times;</button>
                                    <h4 class="alert-heading">Error!</h4>
                                    <p class="mb-0">{{error}}</p>
                                </div> -->


                                <h2>Input your Details</h2>
                                <div class="col-md-4 col-sm-4 col-xs-12">
                                    <div class="single-input-field">
                                        <h4>Firstname (required) </h4>
                                        <input v-model="reg.firstname" type="text"/>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4 col-xs-12">
                                    <div class="single-input-field">
                                        <h4>Lastname (required) </h4>
                                        <input v-model="reg.lastname" type="text"/>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4 col-xs-12">
                                    <div class="single-input-field">
                                        <h4>Your Email<span style="color:red;"> *</span></h4>
                                        <input v-model="reg.email" type="email"/>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4 col-xs-12">
                                    <div class="single-input-field">
                                        <h4>Password (required) </h4>
                                        <input v-model="reg.password" placeholder="password" type="password"/>
                                        <p class="help is-danger" v-if="error" >{{ error }}</p>
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-4 col-xs-12">
                                    <div class="single-input-field">
                                        <h4>Phone</h4>
                                        <input v-model="reg.phone" type="text"/>
                                    </div>
                                </div>


                                <div class="col-md-4 col-sm-4 col-xs-12">
                                    <div class="single-input-fieldsbtn">
                                        <input type="submit" value="send "/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="contact-person">
                                <h1>main office</h1>
                                <div class="single-info">
                                    <h2>Address</h2>
                                    <p>Ikeja</p>
                                </div>
                                <div class="single-info">
                                    <h2>Email: </h2>
                                    <p>yourdomain@gmail.com</p>
                                </div>
                                <div class="single-info">
                                    <h2>Phone:</h2>
                                    <p>(+45) 123 456 789</p>
                                </div>
                                <div class="single-info">
                                    <h2>Skype:</h2>
                                    <p>your_skype</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Google Map Section Start -->

                    <!-- Google Map Section End -->
                </div>
            </section>

        </form>


        <app-footer></app-footer>

    </div>
</template>
<script>
    import Navbar from '../Navbar.vue';
    import Footer from '../Footer.vue';


    import { leagueBuy } from '../../config';

    export default{
        name: 'leaguebuy',

        data: () => ({
            reg: [],
            error: '',
            seen: true,
            submitted: false,
            reg: {
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                phone: '',
                product: '',
                promo_code: '',
                site_visit: '',
                who_are_you: 'buyer',
            },

        }),
        components: {
            'nav-bar': Navbar,
            'app-footer': Footer,
        },

        // mounted:() => {
        // 	fetch(API_URL).then(response => response.json()).then(result => {
        // 		this.reg = result;
        // 	});
        // },

        methods: {
            submit() {
                console.log(this.reg);
                fetch(leagueBuy, {
                    method: 'POST',
                    body: JSON.stringify(this.reg),
                    headers: {
                        'content-type': 'application/json',
                    },
                }).then(response => response.json()).then((result) => {
                    // console.log(result);
                    if (typeof result.error === 'undefined') {
                        this.reg.push(result);
                        this.submitted = true;
                    } else {
                        const error = result.error.details[0].message;
                        this.error = error;
                    }

                    // if(result.details){
                    // there was an error
                    // 	const error = result.details.map(detail => detail.reg).join('.');
                    // 	this.error = '';

                    // }else {

                    // }
                });
            },
        },
    };


</script>
