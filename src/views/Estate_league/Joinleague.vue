<template>
	<div>
		<div class="container">
				<!-- Tabmenu Container / Default Bootstrap Structure -->
				<div class="search-tabmenu">
					<!-- Tabmenu Navigation -->
					<ul class="nav nav-tabs" role="tablist">
						<li class="active"><a href="#for-sale" role="tab" data-toggle="tab"><i class="fi flaticon-sale"></i> For Sale</a></li>
						<li><a href="#for-rent" role="tab" data-toggle="tab"><i class="fi flaticon-rent"></i> For Rent</a></li>
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
											<label for="sale-location">Property Location</label>
											<select class="form-control" id="sale-location">
												<option>Any Location</option>
												<option>Melbourne</option>
												<option>Sydney</option>
												<option>Adelaide</option>
												<option>Darwin</option>
												<option>Perth</option>
												<option>Canberra</option>
											</select>
										</div>
										<div class="col-md-3 form-group">
											<label for="sale-type">Property Type</label>
											<select class="form-control" id="sale-type">
												<option>Any Type</option>
												<option>Houses</option>
												<option>Apartments</option>
												<option>Unit</option>
												<option>Townhouse</option>
												<option>Land</option>
												<option>RUral</option>
											</select>
										</div>
										<div class="col-md-3 form-group">
											<label for="sale-bedroom">Bed Room</label>
											<select class="form-control" id="sale-bedroom">
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
												<option>5</option>
											</select>
										</div>
										<div class="col-md-3 form-group">
											<label for="sale-bathroom">Bath Room</label>
											<select class="form-control" id="sale-bathroom">
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
												<option>5</option>
											</select>
										</div>
									</div>
									<!-- Property for Sale Content Row 2 -->
									<div class="row">
										<div class="col-md-3 form-group">
											<label for="sale-garage">Garage</label>
											<select class="form-control" id="sale-garage">
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
												<option>5</option>
											</select>
										</div>
										<div class="col-md-3 form-group">
											<label for="sale-keyword">Keyword</label>
											<input type="text" class="form-control" id="sale-keyword" placeholder="(e.g.'office')">
										</div>
										<div class="col-md-3 form-group">
											<label for="sale-range-feet">Area (m2)</label>
											<div class="range-box">
												<input id="sale-range-feet" readonly="">
											</div>
										</div>
										<div class="col-md-3 form-group">
											<label for="sale-range-price">Price (USD)</label>
											<div class="range-box">
												<input id="sale-range-price" readonly="">
											</div>
										</div>
									</div>
								</div>
								<!-- Property for Sale Submit Button -->
								<button class="btn btn-primary pull-right btn-submit" type="submit"><i class="fa fa-search"></i> Search</button>
							</form>
						</div>
						<div role="tabpanel" class="tab-pane" id="for-rent">
							<form action="#">
								<div class="form-body">
									<!-- Property for Sale Content Row 1 -->
									<div class="row">
										<div class="col-md-3 form-group">
											<label for="rent-location">Property Location</label>
											<select class="form-control" id="rent-location">
												<option>Any Location</option>
												<option>Melbourne</option>
												<option>Sydney</option>
												<option>Adelaide</option>
												<option>Darwin</option>
												<option>Perth</option>
												<option>Canberra</option>
											</select>
										</div>
										<div class="col-md-3 form-group">
											<label for="rent-type">Property Type</label>
											<select class="form-control" id="rent-type">
												<option>Any Type</option>
												<option>Houses</option>
												<option>Apartments</option>
												<option>Unit</option>
												<option>Townhouse</option>
												<option>Land</option>
												<option>RUral</option>
											</select>
										</div>
										<div class="col-md-3 form-group">
											<label for="rent-bedroom">Bed Room</label>
											<select class="form-control" id="rent-bedroom">
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
												<option>5</option>
											</select>
										</div>
										<div class="col-md-3 form-group">
											<label for="rent-bathroom">Bath Room</label>
											<select class="form-control" id="rent-bathroom">
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
												<option>5</option>
											</select>
										</div>
									</div>
									<!-- Property for rent Content Row 2 -->
									<div class="row">
										<div class="col-md-3 form-group">
											<label for="rent-garage">Garage</label>
											<select class="form-control" id="rent-garage">
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
												<option>5</option>
											</select>
										</div>
										<div class="col-md-3 form-group">
											<label for="rent-keyword">Keyword</label>
											<input type="text" class="form-control" id="rent-keyword" placeholder="(e.g.'office')">
										</div>
										<div class="col-md-3 form-group">
											<label for="rent-range-feet">Area (m2)</label>
											<div class="range-box">
												<input id="rent-range-feet" readonly="">
											</div>
										</div>
										<div class="col-md-3 form-group">
											<label for="rent-range-price">Price (USD)</label>
											<div class="range-box">
												<input id="rent-range-price" readonly="">
											</div>
										</div>
									</div>
								</div>
								<!-- Property for rent Submit Button -->
								<button class="btn btn-primary pull-right btn-submit" type="submit"><i class="fa fa-search"></i> Search</button>
							</form>
						</div>
					</div>
				</div>
			</div>
	</div>
</template>
