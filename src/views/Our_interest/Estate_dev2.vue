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
											<label for="sale-location">STATE</label>
											<select class="form-control" v-model="state"  @change="getLocation()">
												<option  value="0" >Select  state</option>
												<option v-for="cat in states"  :key="cat._id">{{cat.state}}</option>

											</select>
										</div>
										<div class="col-md-3 form-group">
											<label for="sale-type">Select LOCATION</label>
											<select class="form-control" v-model="location">
												<option value="0" >select loation</option>
												<option v-for="cat in locations" :key="cat._id">{{cat.name}}</option>


											</select>
										</div>
										<div class="col-md-3 form-group">
											<label for="sale-bedroom">ESTATE</label>
											<select class="form-control" id="sale-bedroom">
												<option>Zedar pavilion</option>

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
	<!-- Room Section Start -->
	<div class="room-sec pt-50 pb-20">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="sec-title">
						<h1>Best<span>Selling</span></h1>
						<div class="border-shape"></div>
						<p>Be our first client</p>
					</div>
				</div>		
			</div>		
			<div class="row">				
				<div class="col-md-4 col-sm-6 inner">
					<div class="single-room">
						<div class="room-thumb">
							<img src="img/room1.jpg" alt=""/>	
							<div class="room-sell">
								<ul>
									<li class="feature"><a href="#">Feature</a></li>
									<li class="sell"><a href="#">For Sell</a></li>
								</ul>
							</div>	
							<div class="single-room-overlay">
								<a href="property-details.html">TRADE</a>
							</div>
						</div>
						<div class="room-info">
							<h2><a href="#">Lovely Modern Home</a></h2>
							<div class="address"><i class="fa fa-map-marker"></i>Lagos</div>
							<p><span>Plot-Size</span><span></span><span>Sq Ft: 1500</span></p>
							<div class="room-meta">
								<ul>
									<li><i class="fa fa-user"></i>Bonus</li>
									<li><i class="fa fa-calendar"></i></li>
									<li><a href="#"><i class="fa fa-heart-o"></i></a></li>
									<li class="price">Price: $240</li>
								</ul>								
							</div>
						</div>						
					</div>		
				</div>			
				<div class="col-md-4 col-sm-6 inner">
					<div class="single-room">
						<div class="room-thumb">
							<img src="img/room2.jpg" alt=""/>	
							<div class="room-sell">
								<ul>
									<li class="sell"><a href="#">For Rent</a></li>
								</ul>
							</div>	
							<div class="single-room-overlay">
								<a href="property-details.html">TRADE</a>
							</div>							
						</div>
						<div class="room-info">
							<h2><a href="#">Latest & Modern House</a></h2>
							<div class="address"><i class="fa fa-map-marker"></i>Lagos</div>
							<p><span>Plot-Size</span><span></span><span>Sq Ft: 1500</span></p>
							<div class="room-meta">
								<ul>
									<li><i class="fa fa-user"></i>Bonus</li>
									<li><i class="fa fa-calendar"></i></li>
									<li><a href="#"><i class="fa fa-heart-o"></i></a></li>
									<li class="price">Price: $200</li>
								</ul>								
							</div>
						</div>						
					</div>		
				</div>					
				<div class="col-md-4 col-sm-6 inner">
					<div class="single-room">
						<div class="room-thumb">
							<img src="img/room3.jpg" alt=""/>	
							<div class="room-sell">
								<ul>
									<li class="sell"><a href="#">For Sell</a></li>
								</ul>
							</div>	
							<div class="single-room-overlay">
								<a href="property-details.html">TRADE</a>
							</div>							
						</div>
						<div class="room-info">
							<h2><a href="#">Excellent Modern Home</a></h2>
							<div class="address"><i class="fa fa-map-marker"></i>Lagos</div>
							<p><span>Plot-Size</span><span></span><span>Sq Ft: 1500</span></p>
							<div class="room-meta">
								<ul>
									<li><i class="fa fa-user"></i>Bonus</li>
									<li><i class="fa fa-calendar"></i></li>
									<li><a href="#"><i class="fa fa-heart-o"></i></a></li>
									<li class="price">Price: $230</li>
								</ul>								
							</div>
						</div>						
					</div>		
				</div>				
							
														
			</div>
		</div>		
	</div>
	<!-- Room Section End -->

<app-footer></app-footer>

			      </div>
            </template>
<script type="text/javascript">
import Navbar from '../Navbar.vue';
 import Footer from '../Footer.vue';

import axios from 'axios';
import { getStates } from '../../config';
import { getLocationById } from '../../config';



export default{
            	data() {
            		return {
            		state: 0,
            		states: '',
            		location: 0,
            		locations: '',

            		};
            	},
            	methods: {
            		getStates() {
            			 this.$http.get(getStates).then(function (response) {
        this.states = response.body.data;
        // console.log(response);
        // this.client= ''
      });
            			},
            		// 	axios.get(getStates, {
            		// 		params: {
            		// 			request: 'state',
            		// 		},
            		// 	})
            		// 	.then(function (response) {
            		// 		//console.log(response)
            		// 		this.state = response.body;
            		// 		// app.locations = '';
            		// 		// app.location = 0;
            		// 	});
            		// },
            		getLocation() {
            			//this.$http.get(getLocationById + this.$route.params._id).then(function (response)
            			this.$http.get('http://localhost:3000/api/v1/location/getLocations/5c138b13ff6cc71da8cef727').then(function (response)
            			 {
        this.locations = response.body.locations;
         //console.log(response);
        // this.client= ''
      });
            			// axios.get(getLocationById + this.$route.params.location , {
            			// 	params: {
            			// 		request: 'location',
            			// 		state_id: this.state,
            			// 	},
            			// })
            			// .then(function (response) {
            			// 	this.locations = response.body;
            			// 	// app.location = 0;
            			// });
            		},
            	},
            	created() {
            		this.getStates();
            		this.getLocation();
            	},
            	components: {
		 			'nav-bar': Navbar,
		  			'app-footer': Footer,
  },
};

</script>
