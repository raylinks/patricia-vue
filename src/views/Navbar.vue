<template>
<div>
   <header>
		<!-- <div id="preloader">
		<div id="preloader-status"></div>
  </div> -->
  <!-- Header Top Start -->
   <div class="hd-sec">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 col-sm-6 col-xs-12">
                        <div class="herader-topbar-col tobar-leftside center767">
                            <p>Welcome To T.E.A.M LIMITED</p>
                        </div>
                    </div>
                    <div class="col-lg-5 col-sm-6 col-xs-12">
                        <div class="herader-topbar-col tobar-rightside center767">
                            <ul>
                                <li><a href="https://web.facebook.com/Team-LTD-283450735644748/?_rdc=1&_rdr"  target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="https://mobile.twitter.com/Teamltd4"   target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <!--<li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>-->
                                <li><a href="https://www.instagram.com/t.e.a.mltd/"  target="_blank"><i class="fa fa-dribbble" aria-hidden="true"></i></a></li>
                                <!--<li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>-->
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>


  <!-- Header Top End -->
  <!-- Main Menu Start -->
  <div class="mnmenu-sec">
    <div class="container">
      <div class="row">
         <div class="col-md-2">
           <div class="logo">
               <span @click="navigateTo({name:'home'})">
            <a href=""><img src="img/newlogo.jpg" alt=""/></a>
                   </span>
          </div>
        </div>
        <div class="col-md-10">
          <div class="menu">
            <nav id="main-menu" class="main-menu">
              <ul>
                <li v-if="!$store.state.isUserLoggedIn" class="active"><a href="/">Home</a></li>
                  <li v-if="!$store.state.isUserLoggedIn"><a href="/#">Who we are<i class="fa fa-caret-down"></i></a>
                      <ul>
                          <li><a href="/about">About us</a></li>

                      </ul>
                  </li>
                <li v-if="!$store.state.isUserLoggedIn"><a href="/#">What we do<i class="fa fa-caret-down"></i></a>
                    <ul>
                    <li><a href="/estate">Estate development</a></li>
                    <li><a href="/archline">ArchLine</a></li>
                    <li><a href="/properties">Properties</a></li>
                        <li><a href="/training">Training</a></li>

                  </ul>
                </li>
                <!--<li><a href="">Business Club<i class="fa fa-caret-down"></i></a>
                  <ul>
                    <li><a href="/#/overview">Overview</a></li>
                    <li><a href="/#/dates">Important Dates</a></li>
                  </ul>
                </li>-->
                <li v-if="!$store.state.isUserLoggedIn"><a href="/estateleague">Estate League<i class="fa fa-caret-down"></i></a>
                  <!--<ul>
                    <li><a href="/#/enterleague">Enter League</a></li>

                  </ul>-->
                </li>
                <li v-if="!$store.state.isUserLoggedIn"><a href="/#">Inspect Site</a>
                    <ul>
                        <li><a href="/">Videos /images</a></li>

                    <li><a href="/generalinspection">General Inspection</a></li>
                    <li><a href="/privateinspection">Private Inspection</a></li>
                  </ul>
                </li>

                <li v-if="!$store.state.isUserLoggedIn"><a href="/contact">Find Us</a>
                </li>


                  <li v-if="$store.state.isUserLoggedIn">
                      <a href="">Dashboard</a>
                      <ul>
                          <li><a href="/">Videos /images</a></li>

                          <li ><a href="/market">Market</a></li>
                          <li><a href="/promo">Promo</a></li>
                          <li><a href="/siteinsp">Site Insp</a></li>
                          <li><a href="/portfolio">Portfolio</a></li>
                          <li ><a href="/bizclub">Bizclub</a></li>
                          <li><a href="/leaguetable">League Table</a></li>
                          <li><a href="/transferreq">Transfer Req</a></li>
                      </ul>
                  </li>
                  <li v-if="$store.state.isUserLoggedIn">
                      <a href="">Admin</a>
                      <ul>
                          <li><a href="/state">Add State</a></li>
                          <li><a href="/addlocation">Add Location</a></li>
                          <li><a href="/admindev">All Devs</a></li>
                          <li><a href="/role">User Role</a></li>
                          <li><a href="/clients">Clients</a></li>
                          <li><a href="/confirm">Confirm User</a></li>
                      </ul>
                  </li>
              </ul>

            </nav>
          </div>
        </div>
      </div>
    </div>
	</div>
</header>

</div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>
