<template>
<div>
	<nav-bar v-if="this.$route.path !== '/dash'"></nav-bar>


			<div class="container">
				<!-- Tabmenu Container / Default Bootstrap Structure -->
				<div class="search-tabmenu">
					<!-- Tabmenu Navigation -->
					<ul class="nav nav-tabs" role="tablist">
						<li class="active"><a href="#for-sale" role="tab" data-toggle="tab"><i class="fi flaticon-sale"></i> For Sale</a></li>
						<!-- <li><a href="#for-rent" role="tab" data-toggle="tab"><i class="fi flaticon-rent"></i> For Rent</a></li> -->
					</ul>
					<!-- Tabmenu Body / Content -->
					<div class="tab-content">
						<!-- Tabmenu Content 1 / Property For SALE -->
						<div role="tabpanel" class="tab-pane active" id="for-sale">
							<form action="#">
								<div class="form-body">
									<!-- Property for Sale Content Row 1 -->
									<div class="row">
										<div class="col-md-3 form-group">
											<label>STATE</label>
											<select class="form-control" v-model="state"  @change="getLocation()">
												<option  value="0" >Select  state</option>
												<option v-for="cat in states"  :value="cat.slug">{{cat.state}}</option>

											</select>
										</div>
										<div class="col-md-3 form-group">
											<label>Select LOCATION</label>
											<select class="form-control" v-model="location">
												<option value="0" >select loation</option>
												<option v-for="cat in locations" :key="cat._id">{{cat.name}}</option>


											</select>
										</div>
										<div class="col-md-3 form-group">
											<label ></label>
											<select class="form-control" v-model="location">
												<option value="0" >select loation</option>

												<option v-for="cat in locations" :key="cat._id">{{cat.bonus}}</option>
												<!--<option v-for="cat in locations" :key="cat._id"></option>-->
												<!--<img :src="'http://localhost:3000/uploads/' + cat.image" alt=""/>-->

											</select>
										</div>

									</div>
									<!-- Property for Sale Content Row 2 -->
								</div>
								<!-- Property for Sale Submit Button -->
								<button class="btn btn-primary pull-right btn-submit" type="submit"><i class="fa fa-search"></i> Search</button>
							</form>
						</div>

					</div>
				</div>
			</div>
			<!-- Service Section End -->

	<!--<div class="room-sec pt-50 pb-20">-->
		<!--<div class="container">-->
			<!--<div class="row">-->
				<!--<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">-->
					<!--<div class="sec-title">-->
						<!--<h1>Best<span>Selling</span></h1>-->
						<!--<div class="border-shape"></div>-->
						<!--<p></p>-->
					<!--</div>-->
				<!--</div>-->
			<!--</div>-->
			<!--<div class="row">-->
				<!--<div class="col-md-4 col-sm-6 inner">-->
					<!--<div class="single-room">-->
						<!--<div class="room-thumb">-->

							<!--<div class="room-sell">-->
								<!--<ul>-->
									<!--<li class="feature"><a href="#">Feature</a></li>-->
									<!--<li class="sell"><a href="#">For Sell</a></li>-->
								<!--</ul>-->
							<!--</div>-->
							<!--<div class="single-room-overlay">-->
								<!--<a href="/enterleague">TRADE</a>-->
							<!--</div>-->
						<!--</div>-->
						<!--<div class="room-info">-->
							<!--<h2><a href="#"></a></h2>-->
							<!--<div class="address"><i class="fa fa-map-marker"></i>Lagos</div>-->
							<!--<p><span>Plot-Size</span><span></span><span>Sq Ft: 1500</span></p>-->
							<!--<div class="room-meta">-->
								<!--<ul>-->
									<!--<li><i class="fa fa-user"></i>Bonus</li>-->
									<!--<li><i class="fa fa-calendar"></i></li>-->
									<!--<li><a href="#"><i class="fa fa-heart-o"></i></a></li>-->
									<!--<li class="price">Price: $240</li>-->
								<!--</ul>-->
							<!--</div>-->
						<!--</div>-->
					<!--</div>-->
				<!--</div>-->
				<!--<div class="col-md-4 col-sm-6 inner">-->
					<!--<div class="single-room">-->
						<!--<div class="room-thumb">-->
							<!--<img src="" alt=""/>-->
							<!--<div class="room-sell">-->
								<!--<ul>-->
									<!--<li class="sell"><a href="#">For Sell</a></li>-->
								<!--</ul>-->
							<!--</div>-->
							<!--<div class="single-room-overlay">-->
								<!--<a href="/enterleague">TRADE</a>-->
							<!--</div>-->
						<!--</div>-->
						<!--<div class="room-info">-->
							<!--<h2><a href="#">...</a></h2>-->
							<!--<div class="address"><i class="fa fa-map-marker"></i>Lagos</div>-->
							<!--<p><span>Plot-Size</span><span></span><span>Sq Ft: 1500</span></p>-->
							<!--<div class="room-meta">-->
								<!--<ul>-->
									<!--<li><i class="fa fa-user"></i>Bonus</li>-->
									<!--<li><i class="fa fa-calendar"></i></li>-->
									<!--<li><a href="#"><i class="fa fa-heart-o"></i></a></li>-->
									<!--<li class="price">Price: $200</li>-->
								<!--</ul>-->
							<!--</div>-->
						<!--</div>-->
					<!--</div>-->
				<!--</div>-->
				<!--<div class="col-md-4 col-sm-6 inner">-->
					<!--<div class="single-room">-->
						<!--<div class="room-thumb">-->
							<!--<img src="" alt=""/>-->
							<!--<div class="room-sell">-->
								<!--<ul>-->
									<!--<li class="sell"><a href="#">For Sell</a></li>-->
								<!--</ul>-->
							<!--</div>-->
							<!--<div class="single-room-overlay">-->
								<!--<a href="/enterleague">TRADE</a>-->
							<!--</div>-->
						<!--</div>-->
						<!--<div class="room-info">-->
							<!--<h2><a href="#">...</a></h2>-->
							<!--<div class="address"><i class="fa fa-map-marker"></i>Lagos</div>-->
							<!--<p><span>Plot-Size</span><span></span><span>Sq Ft: 1500</span></p>-->
							<!--<div class="room-meta">-->
								<!--<ul>-->
									<!--<li><i class="fa fa-user"></i>Bonus</li>-->
									<!--<li><i class="fa fa-calendar"></i></li>-->
									<!--<li><a href="#"><i class="fa fa-heart-o"></i></a></li>-->
									<!--<li class="price">Price: $230</li>-->
								<!--</ul>-->
							<!--</div>-->
						<!--</div>-->
					<!--</div>-->
				<!--</div>-->


			<!--</div>-->
		<!--</div>-->
	<!--</div>-->
	<!--&lt;!&ndash; Room Section End &ndash;&gt;-->

<app-footer></app-footer>

			      </div>
            </template>
<script type="text/javascript">
import axios from 'axios';
import Navbar from '../Navbar.vue';
import Footer from '../Footer.vue';

import { fetchStates } from '../../config';
import { getLocationById } from '../../config';


export default{
            	data() {
            		return {
            		state: '',
            		states: '',
            		location: 0,
            		locations: '',

            		};
            	},
            	methods: {
            		getStates() {
            			 this.$http.get(fetchStates).then(function (response) {
        			this.states = response.body.data;
        			// console.log(response);
						 });
            			},

            		getLocation() {
            			this.$http.get(`http://localhost:3000/api/v1/location/getlocations/${this.state}`)
        .then(function (response) {
								 console.log(response.body.data);
		 							this.locations = response.body.locations;
        });
            			},
            		},
            		created() {
            		this.getStates();
            		},
            		components: {
		 			'nav-bar': Navbar,
		  			'app-footer': Footer,
  	},
};

</script>
