<template>
    <div>
        <section class="page-header">
            <div class="container">

                <h1>LOGIN</h1>

                <!-- breadcrumbs -->
                <ol class="breadcrumb">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Pages</a></li>
                    <li class="active">Login</li>
                </ol><!-- /breadcrumbs -->

            </div>
        </section>
        <!-- /PAGE HEADER -->




        <!-- -->
        <section>
            <div class="container">

                <div class="row">

                    <!-- LOGIN -->
                    <div class="col-md-6 col-sm-6">

                        <!-- login form -->
                        <form action="#" method="post" class="sky-form boxed">

                            <header class="size-18 margin-bottom-20">
                                I'm a returning customer
                            </header>

                            <fieldset class="nomargin">

                                <label class="input margin-bottom-10">
                                    <i class="ico-append fa fa-envelope"></i>
                                    <input required type="email" placeholder="Email address">
                                    <b class="tooltip tooltip-bottom-right">Needed to verify your account</b>
                                </label>

                                <label class="input margin-bottom-10">
                                    <i class="ico-append fa fa-lock"></i>
                                    <input required type="password" placeholder="Password">
                                    <b class="tooltip tooltip-bottom-right">Only latin characters and numbers</b>
                                </label>

                                <div class="clearfix note margin-bottom-30">
                                    <a class="pull-right" href="#">Forgot Password?</a>
                                </div>

                                <label class="checkbox weight-300">
                                    <input type="checkbox" name="checkbox-inline">
                                    <i></i> Keep me logged in
                                </label>

                            </fieldset>

                            <footer>
                                <button type="submit" class="btn btn-primary noradius pull-right"><i class="fa fa-check"></i> OK, LOG IN</button>
                            </footer>

                        </form>
                        <!-- /login form -->

                        <!-- ALERT -->
                        <div class="alert alert-mini alert-danger margin-bottom-30">
                            <strong>Oh snap!</strong> Login Incorrect!
                        </div><!-- /ALERT -->

                    </div>
                    <!-- /LOGIN -->

                    <!-- SOCIAL LOGIN -->
                    <div class="col-md-6 col-sm-6">
                        <form action="#" method="post" class="sky-form boxed">

                            <header class="size-18 margin-bottom-20">
                                Sign In using your favourite social network
                            </header>

                            <fieldset class="nomargin">

                                <div class="row">

                                    <div class="col-md-8 col-md-offset-2">

                                        <a class="btn btn-block btn-social btn-facebook margin-bottom-10">
                                            <i class="fa fa-facebook"></i> Sign in with Facebook
                                        </a>

                                        <a class="btn btn-block btn-social btn-twitter margin-bottom-10">
                                            <i class="fa fa-twitter"></i> Sign in with Twitter
                                        </a>

                                        <a class="btn btn-block btn-social btn-google margin-bottom-10">
                                            <i class="fa fa-google-plus"></i> Sign in with Google
                                        </a>

                                    </div>
                                </div>

                            </fieldset>

                            <footer>
                                Don't have an account yet? <a href="page-register-1.html"><strong>Click to register!</strong></a>
                            </footer>

                        </form>

                    </div>
                    <!-- /SOCIAL LOGIN -->

                </div>


            </div>
        </section>
        <!-- <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-3"></div>
                  <div class="col-lg-4 col-md-4 col-sm-6">
                    <div class="form-card">
                        <center><span style="font-size: 30px;">Login</span></center>
                        <br>
                        <div class="row">
                                <form @submit.prevent="login">

                                        <div class="form-group">

                                            <div class="form-group">
                                                <input type="email" class="form-control" required  v-model="email" name="email" placeholder="Email">
                                            </div>


                                            <div class="form-group">
                                                <input type="password"  name="password" class="form-control" id="" placeholder="password" v-model="password">

                                            </div>
                                            <button type="submit" class="btn btn-submit-blue pull-right">Login</button>
                                        <div class="">
                                            <ul  class="form-card-links list-inline">
                                            <li><a href="/#/forgetpassword">FORGET PASSWORD</a></li>
                                            </ul>
                                        </div>
                                        </div>
                                    </form>
                                </div>
                        </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-3"></div>
              </div>
        </div> -->
    </div>
</template>
<script>
import axios from 'axios';
import router from 'router';
import EventBus from './EventBus';

import { login } from '../../config';

export default{
  data() {
    return {
      email: '',
      password: '',
    };
  },

  methods: {
    login() {
      axios.post(login, {
        email: this.email,
        password: this.password,
      }).then((res) => {
        if (res.status === 200) {
          console.log(res.data.token);
          localStorage.setItem('usertoken', res.data.token);
          localStorage.setItem('firstname', res.data.firstname);
          localStorage.setItem('lastname', res.data.lastname);
          localStorage.setItem('email', res.data.email);
          localStorage.setItem('role', res.data.role);
          localStorage.setItem('is_payed', res.data.is_payed);
          // this.email = ''
          // this.password = ''
          // return;
          if (res.data.is_payed) {
            this.$router.push({ name: 'leaguebuy2' });
          } else this.$router.push({ name: 'user_dashboard' });
        } else alert('an error occured while logging in');
      }).catch((err) => {
        if (err.response.status === 401) {
          alert(err.response.data.message);
        } else {
          alert('an error occured while logging in');
        }
      });
      // this.emitMethod()
    },
    emitMethod() {
      EventBus.$emit('logged-in', 'loggedin');
    },

  },

};
</script>
