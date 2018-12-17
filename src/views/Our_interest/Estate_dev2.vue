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
												<option v-for="cat in messages"  :key="cat._id">{{cat.state}}</option>

											</select>
										</div>
										<div class="col-md-3 form-group">
											<label for="sale-type">Select LOCATION</label>
											<select class="form-control" v-model="location">
												<option value="0" >select loation</option>
												<option v-for="cat in location" :key="cat._id">{{cat.name}}</option>


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

<app-footer></app-footer>

			      </div>
            </template>
<script type="text/javascript">
import Navbar from '../Navbar.vue';
 			  import Footer from '../Footer.vue';

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
            			axios.get('', {
            				params: {
            					request: 'state',
            				},
            			})
            			.then(function (response) {
            				this.states = response.body.data;
            				// app.locations = '';
            				// app.location = 0;
            			});
            		},
            		getLocation() {
            			axios.get('', {
            				params: {
            					request: 'location',
            					state_id: this.state,
            				},
            			})
            			.then(function (response) {
            				this.locations = response.body.data;
            				// app.location = 0;
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
