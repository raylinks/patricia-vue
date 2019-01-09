<template>
	<div>
		 <div class="left side-menu">
                <button type="button" class="button-menu-mobile button-menu-mobile-topbar open-left waves-effect">
                    <i class="ion-close"></i>
                </button>

                <!-- LOGO -->
                <div class="topbar-left">
                    <div class="text-center">
                        <a href="" class="logo"><i class="mdi mdi-assistant"></i> TEAM</a>
                        <!-- <a href="index.html" class="logo"><img src="assets/images/logo.png" height="24" alt="logo"></a> -->
                    </div>
                </div>

                <div class="sidebar-inner slimscrollleft">

                    <div id="sidebar-menu">


                        <ul>

                            <li class="menu-title">Main</li>

                            <li >
                                <a href="/dash"  @click="logout"  class="waves-effect">
                                    <i class="mdi mdi-airplay"></i>
                                    <span> Logout<span class="badge badge-pill badge-primary float-right">7</span></span>
                                </a>
                            </li>

                             <li>
                                <a href="/dash"   class="waves-effect">
                                    <i class="mdi mdi-airplay"></i>
                                    <span> Profile<span class="badge badge-pill badge-primary float-right">7</span></span>
                                </a>
                            </li>


                            <li class="has_sub">
                                <a href="/profile" class="waves-effect"><i class="mdi mdi-layers"></i> <span>Profile </span> <span class="float-right"><i class="mdi mdi-chevron-right"></i></span></a>

                            </li>

                            <li class="has_sub">
                                <a href="/market" class="waves-effect"><i class="mdi mdi-layers"></i> <span>Market </span> <span class="float-right"><i class="mdi mdi-chevron-right"></i></span></a>

                            </li>


                            <li>
                                <a href="/promo" class="waves-effect"><i class="mdi mdi-calendar-clock"></i><span>Exclusive promo</span></a>
                            </li>


                            <li>
                                <a href="/siteinsp" class="waves-effect"><i class="mdi mdi-bullseye"></i><span>SITE INSP LOG</span></a>
                            </li>
                             <li>
                                <a href="/portfolio" class="waves-effect"><i class="mdi mdi-table"></i><span>R/E Portfolio</span></a>

                            </li>
                             <li>
                                <a href="/bizclub" class="waves-effect"><i class="mdi mdi-map-marker-multiple"></i><span>BIZ CLUB</span></a>
                            </li>
                            <li>
                                <a href="/leaguetable" class="waves-effect"><i class="mdi mdi-layers"></i><span>LEAGUE TABLE</span></a>
                            </li>
                            <li>
                                <a href="/transferreq" class="waves-effect"><i class="mdi mdi-calendar-clock"></i><span>TRANSFER REQ</span></a>
                            </li>


                            <li class="has_sub">
                                <a href="/state" class="waves-effect"><i class="mdi mdi-layers"></i> <span> Add State </span> <span class="float-right"><i class="mdi mdi-chevron-right"></i></span></a>
                                <!--<ul class="list-unstyled">-->
                                    <!--<li><a href="advanced-highlight.html">Highlight</a></li>-->
                                    <!--<li><a href="advanced-rating.html">Rating</a></li>-->
                                    <!--<li><a href="advanced-alertify.html">Alertify</a></li>-->
                                    <!--<li><a href="advanced-rangeslider.html">Range Slider</a></li>-->
                                <!--</ul>-->
                            </li>

                            <li class="has_sub">
                                <a href="/addlocation" class="waves-effect"><i class="mdi mdi-layers"></i> <span> Add Locations </span> <span class="float-right"><i class="mdi mdi-chevron-right"></i></span></a>
                                <!--<ul class="list-unstyled">-->
                                <!--<li><a href="advanced-highlight.html">Highlight</a></li>-->
                                <!--<li><a href="advanced-rating.html">Rating</a></li>-->
                                <!--<li><a href="advanced-alertify.html">Alertify</a></li>-->
                                <!--<li><a href="advanced-rangeslider.html">Range Slider</a></li>-->
                                <!--</ul>-->
                            </li>
                            <li class="has_sub">
                                <a href="/admindev" class="waves-effect"><i class="mdi mdi-layers"></i> <span> All Estates Dev </span> <span class="float-right"><i class="mdi mdi-chevron-right"></i></span></a>

                            </li>


                            <li>
                                <a href="/role" class="waves-effect"><i class="mdi mdi-gauge"></i><span>Change User Role</span></a>
                            </li>
                            <li>
                                <a href="/confirm" class="waves-effect"><i  class="mdi mdi-google-pages"></i><span>Comfirm Inspection</span></a>
                            </li>
                             <li class="has_sub">
                                <a href="/propbuy" class="waves-effect"><i class="mdi mdi-table"></i><span> Property </span> <span class="float-right"><i class="mdi mdi-chevron-right"></i></span></a>
                            </li>
                            <li>
                                <a href="/clients" class="waves-effect"><i class="mdi mdi-clipboard-outline"></i><span>Our Clients</span></a>
                            </li>
                            <li>
                                <a href="/trading" class="waves-effect"><i class="mdi mdi-clipboard-outline"></i><span>Trade</span></a>
                            </li>


                        </ul>
                    </div>
                    <div class="clearfix"></div>
                </div> <!-- end sidebarinner -->
            </div>

	</div>
</template>
<script>


export default{
  data() {
    return {

    };
  },

  methods: {
    logout() {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null);
      this.$router.push({ name: 'home' });
    },

  },


};
</script>
