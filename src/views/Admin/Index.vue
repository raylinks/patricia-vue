<template>
	<div>


	<div class="wrapper">
		<!-- <div class="loader text-primary">
			<i class="i-spinner loading"></i>
		</div> -->
		<!-- <side-bar></side-bar> -->
		<aside class="sidebar">
			<a href="dashboard-1.html" class="logo">
				<img src="images/logo.png" alt=""> <b>Oxios</b>
			</a>
			<nav>
				<ul class="sidebar-list">
					<li>
						<form class="input-group">
							<div class="input-group-icon"><i class="fas fa-search"></i></div>
							<input type="text" class="form-control" placeholder="Search...">
						</form>
					</li>
					<li class="sidebar-list-item"><i class="fe fe-sliders"></i> <span>Dashboards</span> <i class="fas fa-chevron-down pull-right"></i></li>
					<li>
						<ul>
							<li><a class="sidebar-list-item" href="dashboard-1.html">Dashboard 1</a></li>
							<li><a class="sidebar-list-item" href="dashboard-2.html">Dashboard 2 (v.1)</a></li>
							<li><a class="sidebar-list-item" href="dashboard-2-1.html">Dashboard 2 (v.2)</a></li>
						</ul>
					</li>
					<li><span class="sidebar-list-header">Pages and extra</span></li>
					<li><a class="sidebar-list-item" href="page-profile.html"><i class="fe fe-user"></i> <span>Profile</span></a></li>
					<li><a class="sidebar-list-item" href="page-chat.html"><i class="fe fe-message-square"></i> <span>Chat</span></a></li>
					<li><a class="sidebar-list-item" href="page-invoice.html"><i class="fe fe-dollar-sign"></i> <span>Invoice</span></a></li>
					<li><a class="sidebar-list-item" href="page-faq.html"><i class="fe fe-help-circle"></i> <span>FAQ</span></a></li>
					<li class="sidebar-list-item"><i class="fe fe-layout"></i> <span>Access pages</span> <i class="fas fa-chevron-down pull-right"></i></li>
					<li>
						<ul>
							<li><a class="sidebar-list-item" href="page-signin.html">Sign In</a></li>
							<li><a class="sidebar-list-item" href="page-signup.html">Sign Up</a></li>
							<li><a class="sidebar-list-item" href="page-lockscreen.html">Lockscreen</a></li>
							<li><a class="sidebar-list-item" href="page-under-construction.html">Under Construction</a></li>
							<li><a class="sidebar-list-item" href="page-404.html">404 Error</a></li>
							<li><a class="sidebar-list-item" href="page-500.html">500 Error</a></li>
						</ul>
					</li>
					<li class="sidebar-list-item"><i class="fe fe-folder-plus"></i> <span>Multilevel</span> <i class="fas fa-chevron-down pull-right"></i></li>
					<li>
						<ul>
							<li><a class="sidebar-list-item" href="#">Level 1</a></li>
							<li class="sidebar-list-item">Level 1 <i class="fas fa-chevron-down pull-right"></i></li>
							<li>
								<ul>
									<li><a href="#" class="sidebar-list-item">Level 2</a></li>
									<li class="sidebar-list-item">Level 2 <i class="fas fa-chevron-down pull-right"></i></li>
									<li>
										<ul>
											<li><a href="#" class="sidebar-list-item">Level 3</a></li>
											<li><a href="#" class="sidebar-list-item">Level 3</a></li>
											<li><a href="#" class="sidebar-list-item">Level 3</a></li>
										</ul>
									</li>
									<li><a href="#" class="sidebar-list-item">Level 2</a></li>
								</ul>
							</li>
							<li><a href="#" class="sidebar-list-item">Level 1</a></li>
						</ul>
					</li>
					<li><span class="sidebar-list-header">User interface</span></li>
					<li class="sidebar-list-item"><i class="fe fe-layers"></i> <span>Layouts</span> <i class="fas fa-chevron-down pull-right"></i></li>
					<li>
						<ul>
							<li><a class="sidebar-list-item" href="dashboard-1.html">Standart</a></li>
							<li><a class="sidebar-list-item" href="layout-horizontal-fluid.html">Horizontal fluid</a></li>
							<li><a class="sidebar-list-item" href="layout-horizontal-boxed.html">Horizontal boxed</a></li>
						</ul>
					</li>
					<li class="sidebar-list-item"><i class="fe fe-box"></i> <span>Components</span> <i class="fas fa-chevron-down pull-right"></i></li>
					<li>
						<ul>
							<li><a class="sidebar-list-item" href="component-alerts.html">Alerts</a></li>
							<li><a class="sidebar-list-item" href="component-buttons.html">Buttons and pagination</a></li>
							<li><a class="sidebar-list-item" href="component-box.html">Box</a></li>
							<li><a class="sidebar-list-item" href="component-card.html">Card</a></li>
							<li><a class="sidebar-list-item" href="component-tables.html">Tables</a></li>
							<li><a class="sidebar-list-item" href="component-events.html">Events</a></li>
							<li><a class="sidebar-list-item" href="component-widgets.html">Widgets</a></li>
							<li><a class="sidebar-list-item" href="component-charts.html">Charts</a></li>
							<li><a class="sidebar-list-item" href="component-avatar.html">Avatar</a></li>
							<li><a class="sidebar-list-item" href="component-user-panel.html">User panel</a></li>
							<li><a class="sidebar-list-item" href="component-image.html">Image</a></li>
							<li><a class="sidebar-list-item" href="component-icons.html">Icons</a></li>
						</ul>
					</li>
					<li class="sidebar-list-item"><i class="fe fe-edit"></i><span>Forms</span><i class="fas fa-chevron-down pull-right"></i></li>
					<li>
						<ul>
							<li><a class="sidebar-list-item" href="form-basic.html">Basic form</a></li>
							<li><a class="sidebar-list-item" href="form-wizzard.html">Form wizzard</a></li>
							<li><a class="sidebar-list-item" href="form-validation.html">Form validation</a></li>
							<li><a class="sidebar-list-item" href="form-editor.html">Form editor</a></li>
						</ul>
					</li>
					<li><a class="sidebar-list-item" href="typography.html"><i class="fe fe-type"></i> <span>Typography</span></a></li>
				</ul>
			</nav>
		</aside>
		<header class="header">
			<ul class="header-nav">
				<li>
					<button id="js-toggle-sidebar" class="header-nav-item">
						<i class="fas fa-bars"></i>
					</button>
				</li>
			</ul>
			<ul class="header-nav d-none d-sm-flex">
				<li>
					<a href="#" data-dropdown class="header-nav-item">Dashboard</a>
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="dashboard-1.html">Dashboard 1</a></li>
						<li><a class="dropdown-item" href="dashboard-2.html">Dashboard 2 (v.1)</a></li>
						<li><a class="dropdown-item" href="dashboard-2-1.html">Dashboard 2 (v.2)</a></li>
					</ul>
				</li>
				<li>
					<a href="#" data-dropdown class="header-nav-item">Layout</a>
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="dashboard-1.html">Standart</a></li>
						<li><a class="dropdown-item" href="layout-horizontal-fluid.html">Horizontal fluid</a></li>
						<li><a class="dropdown-item" href="layout-horizontal-boxed.html">Horizontal boxed</a></li>
					</ul>
				</li>
			</ul>

			<ul class="header-nav pull-right">
				<li>
					<a href="#" data-dropdown class="header-nav-item">
						<i class="far fa-envelope"></i>
						<span class="badge badge-pill badge-success">2</span>
					</a>
					<ul class="dropdown-menu px-20 py-10">
						<li class="message">
							<div class="avatar avatar-sm">
								<img src="images/avatar-3.jpg" alt="">
							</div>
							<div class="message-content">
								<div class="message-bubble">
									<p>Hello, John!</p>
								</div>
								<small class="text-secondary text-sm">Today, 10:31</small>
							</div>
							<div class="message-actions">
								<button><i class="far fa-trash-alt"></i></button>
								<button><i class="far fa-flag"></i></button>
							</div>
						</li>
						<li class="message">
							<div class="avatar avatar-sm">
								<img src="images/avatar-3.jpg" alt="">
							</div>
							<div class="message-content">
								<div class="message-bubble">
									<p>What about our project?</p>
								</div>
								<small class="text-secondary text-sm">Today, 10:32</small>
							</div>
							<div class="message-actions">
								<button><i class="far fa-trash-alt"></i></button>
								<button><i class="far fa-flag"></i></button>
							</div>
						</li>
					</ul>
				</li>
				<li>
					<a href="#" data-dropdown class="header-nav-item">
						<i class="far fa-bell"></i>
						<span class="badge badge-pill badge-primary">3</span>
					</a>
					<ul class="dropdown-menu px-20 py-10">
						<li class="event-column event-column-success">
							<div class="event-content">
								<small class="text-secondary"><i class="far fa-envelope"></i> From example@gmail.com</small>
								<p><a href="#">Alex White</a> sent you an email.</p>
							</div>
							<small class="text-secondary pull-right">1 hr.</small>
						</li>
						<li class="event-column event-column-primary">
							<div class="event-content">
								<small class="text-secondary"><i class="fas fa-thumbtack"></i> New task</small>
								<p><b>To <a href="#">John Doe</a>: new API methods.</b></p>
								<p class="text-secondary text-sm">Implement new API methods for mobile app.</p>
							</div>
							<small class="text-secondary pull-right">7 min.</small>
						</li>
						<li class="event-column event-column-secondary">
							<div class="event-content">
								<small class="text-secondary"><i class="far fa-bell"></i> Notification</small>
								<p><a href="#">Alex White</a> joined to project</p>
							</div>
							<small class="text-secondary pull-right">now</small>
						</li>
					</ul>
				</li>
				<li>
					<a href="#" data-dropdown class="user-panel">
						<div class="user-panel-image">
							<div class="avatar avatar-sm">
								<img src="images/avatar-1.jpg" alt="">
							</div>
						</div>
						<div class="user-panel-info">
							<p>John Doe</p>
							<small class="text-black-50">Administrator</small>
						</div>
					</a>
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="page-profile.html"><i class="far fa-user"></i> Profile</a></li>
						<li class="dropdown-divider"></li>
						<li><a class="dropdown-item" href="page-signin.html"><i class="fas fa-power-off"></i> Logout</a></li>
					</ul>
				</li>
			</ul>
		</header>
		<main class="content">
			<div class="container-fluid">
				<div class="content-header">
					<h1>Oxios Dashboard <small>Last logged in: 03:00 21, July</small></h1>
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item">Dashboard</li>
						</ol>
					</nav>
				</div>

				<div class="row">
					<div class="col-md-6 col-lg-3">
						<div class="info-box">
							<div class="info-box-content">
								<div class="info-box-text">
									<span class="info-box-number">
										7891 <small class="text-sm text-success"><i class="fas fa-chevron-up"></i>+12</small>
									</span>
									New users
								</div>
								<div class="info-box-icon bg-primary">
									<i class="i-user"></i>
								</div>
							</div>
							<canvas class="info-box-chart" height="70" id="chartJs1"></canvas>
						</div>
					</div>
					<div class="col-md-6 col-lg-3">
						<div class="info-box">
							<div class="info-box-content">
								<div class="info-box-text">
									<span class="info-box-number">
										3510 <small class="text-sm text-danger"><i class="fas fa-chevron-down"></i>-3</small>
									</span>
									Sales
								</div>
								<div class="info-box-icon bg-success">
									<i class="i-shopping-cart"></i>
								</div>
							</div>
							<canvas class="info-box-chart" height="70" id="chartJs2"></canvas>
						</div>
					</div>
					<div class="col-md-6 col-lg-3">
						<div class="info-box">
							<div class="info-box-content">
								<div class="info-box-text">
									<span class="info-box-number">
										19 <small class="text-sm text-secondary"><i class="fas fa-minus"></i></small>
									</span>
									New comments
								</div>
								<div class="info-box-icon bg-warning">
									<i class="i-chat-bubble"></i>
								</div>
							</div>
							<canvas class="info-box-chart" height="70" id="chartJs3"></canvas>
						</div>
					</div>
					<div class="col-md-6 col-lg-3">
						<div class="info-box">
							<div class="info-box-content">
								<div class="info-box-text">
									<span class="info-box-number">
										19 <small class="text-sm text-success"><i class="fas fa-chevron-up"></i>+17%</small>
									</span>
									Bounce rate
								</div>
								<div class="info-box-icon bg-danger">
									<i class="i-circle-chart"></i>
								</div>
							</div>
							<canvas class="info-box-chart" height="70" id="chartJs4"></canvas>
						</div>
					</div>
				</div>

				<div class="box">
					<div class="box-header">
						<h3 >Orders</h3>
						<div class="box-actions">
							<a href="#" class="box-actions-item">Link</a>
							<button class="box-actions-item"><i class="fas fa-minus"></i></button>
							<button class="box-actions-item"><i class="fas fa-times"></i></button>
						</div>
					</div>
					<div class="table-responsive">
						<table class="table">
							<tbody>
								<tr>
									<th>ID</th>
									<th>Avatar</th>
									<th>Full name</th>
									<th>Country</th>
									<th>Date</th>
									<th>Payment</th>
									<th>Total</th>
									<th>Status</th>
									<th>Progress</th>
									<th></th>
								</tr>
								<tr>
									<td>7719</td>
									<td>
										<div class="avatar avatar-xs">
											<img src="images/avatar-1.jpg" alt="">
										</div>
									</td>
									<td>John Doe</td>
									<td><i class="flags flags-ru"></i></td>
									<td>10.10.2018</td>
									<td><i class="payments payments-visa"></i></td>
									<td>5471.00 $</td>
									<td><span class="status-icon bg-warning"></span> Waiting</td>
									<td>
										<div class="d-flex justify-content-between mb-5">
											<span class="text-sm"><b>25%</b></span>
											<span class="text-sm text-secondary">Jun 11, 2018 - Jul 11, 2018</span>
										</div>
										<div class="progress progress-sm">
											<div class="progress-bar bg-warning" style="width: 25%"></div>
										</div>
									</td>
									<td>
										<a href="#" class="icon text-black-25"><i class="fas fa-ellipsis-v"></i></a>
									</td>
								</tr>
								<tr>
									<td>7720</td>
									<td>
										<div class="avatar avatar-xs">
											<img src="images/avatar-3.jpg" alt="">
										</div>
									</td>
									<td>Alex White</td>
									<td><i class="flags flags-bl"></i></td>
									<td>15.10.2018</td>
									<td><i class="payments payments-mastercard"></i></td>
									<td>3933.00 $</td>
									<td><span class="status-icon bg-danger"></span> Failed</td>
									<td>
										<div class="d-flex justify-content-between mb-5">
											<span class="text-sm"><b>10%</b></span>
											<span class="text-sm text-secondary">Jun 11, 2018 - Jul 11, 2018</span>
										</div>
										<div class="progress progress-sm">
											<div class="progress-bar bg-danger" style="width: 10%"></div>
										</div>
									</td>
									<td>
										<a href="#" class="icon text-black-25"><i class="fas fa-ellipsis-v"></i></a>
									</td>
								</tr>
								<tr>
									<td>7721</td>
									<td>
										<div class="avatar avatar-xs">
											<img src="images/avatar-4.jpg" alt="">
										</div>
									</td>
									<td>Jessica Evans</td>
									<td><i class="flags flags-de"></i></td>
									<td>16.10.2018</td>
									<td><i class="payments payments-paypal"></i></td>
									<td>973.00 $</td>
									<td><span class="status-icon bg-success"></span> Success</td>
									<td>
										<div class="d-flex justify-content-between mb-5">
											<span class="text-sm"><b>100%</b></span>
											<span class="text-sm text-secondary">Jun 11, 2018 - Jul 11, 2018</span>
										</div>
										<div class="progress progress-sm">
											<div class="progress-bar bg-success" style="width: 100%"></div>
										</div>
									</td>
									<td>
										<a href="#" class="icon text-black-25"><i class="fas fa-ellipsis-v"></i></a>
									</td>
								</tr>
								<tr>
									<td>7722</td>
									<td>
										<div class="avatar avatar-xs">
											<img src="images/avatar-5.jpg" alt="">
										</div>
									</td>
									<td>Lily Wilson</td>
									<td><i class="flags flags-us"></i></td>
									<td>16.10.2018</td>
									<td><i class="payments payments-bitcoin"></i></td>
									<td>312.00 $</td>
									<td><span class="status-icon bg-success"></span> Success</td>
									<td>
										<div class="d-flex justify-content-between mb-5">
											<span class="text-sm"><b>100%</b></span>
											<span class="text-sm text-secondary">Jun 11, 2018 - Jul 11, 2018</span>
										</div>
										<div class="progress progress-sm">
											<div class="progress-bar bg-success" style="width: 100%"></div>
										</div>
									</td>
									<td>
										<a href="#" class="icon text-black-25"><i class="fas fa-ellipsis-v"></i></a>
									</td>
								</tr>
								<tr>
									<td>7722</td>
									<td>
										<div class="avatar avatar-xs">
											<img src="images/avatar-6.jpg" alt="">
										</div>
									</td>
									<td>Jacob Brown</td>
									<td><i class="flags flags-gb"></i></td>
									<td>17.10.2018</td>
									<td><i class="payments payments-visa"></i></td>
									<td>4876.00 $</td>
									<td><span class="status-icon bg-secondary"></span> Pending</td>
									<td>
										<div class="d-flex justify-content-between mb-5">
											<span class="text-sm"><b>0%</b></span>
											<span class="text-sm text-secondary">Jun 11, 2018 - Jul 11, 2018</span>
										</div>
										<div class="progress progress-sm">
											<div class="progress-bar bg-success" style="width: 0%"></div>
										</div>
									</td>
									<td>
										<a href="#" class="icon text-black-25"><i class="fas fa-ellipsis-v"></i></a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<div class="box">
					<div class="box-header">
						<h3>Weekly Recap Report</h3>
					</div>
					<div class="box-body">
						<div class="row">
							<div class="col-md-8">
								<canvas class="chart" id="areaChartJs"></canvas>
							</div>
							<div class="col-md-4">
								<h3>Goals</h3>
								<div class="d-block mb-20">
									<div class="d-flex justify-content-between">
										<p class="mb-0">Complete Purchase</p>
										<p class="mb-0 text-secondary"><b>47/50</b></p>
									</div>
									<div id="barChart1"></div>
								</div>

								<div class="d-block mb-20">
									<div class="d-flex justify-content-between">
										<p class="mb-0">Add Product to Favorite</p>
										<p class="mb-0 text-secondary"><b>25/50</b></p>
									</div>
									<div id="barChart2"></div>
								</div>

								<div class="d-block mb-25">
									<div class="d-flex justify-content-between">
										<p class="mb-0">Add product to favorite</p>
										<p class="mb-0 text-secondary"><b>12/50</b></p>
									</div>
									<div id="barChart3"></div>
								</div>

								<div class="row text-center">
									<div class="col-4">
										<div class="chart-circle" id="circleChart1"></div>
										<p>Mail orders</p>
									</div>
									<div class="col-4">
										<div id="circleChart2"></div>
										<p>Online</p>
									</div>
									<div class="col-4">
										<div id="circleChart3"></div>
										<p>In store</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<h2 class="content-title">Blog</h2>

				<div class="row">
					<div class="col-lg-6">
						<div class="card card-reverse">
							<div class="card-image transition-left">
								<img src="images/stock-2.jpg" alt="">
							</div>
							<div class="card-body">
								<h3>Lorem ipsum dolor.</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi possimus vel magni.</p>
								<div class="user-panel">
									<div class="user-panel-image">
										<div class="avatar avatar-sm">
											<img src="images/avatar-1.jpg" alt="">
										</div>
									</div>
									<div class="user-panel-info">
										<p>John Doe</p>
										<small class="text-black-50">Two days ago</small>
									</div>
									<div class="user-panel-actions">
										<a href="#"><i class="fas fa-pencil-alt"></i></a>
										<a href="#"><i class="fas fa-share-alt"></i></a>
										<a href="#"><i class="fas fa-ellipsis-v"></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="card">
							<div class="card-image transition-right">
								<img src="images/stock-4.jpg" alt="">
							</div>
							<div class="card-body">
								<h3>Lorem ipsum dolor.</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi possimus vel magni.</p>
								<div class="user-panel">
									<div class="user-panel-image">
										<div class="avatar avatar-sm">
											<img src="images/avatar-1.jpg" alt="">
										</div>
									</div>
									<div class="user-panel-info">
										<p>John Doe</p>
										<small class="text-black-50">Two days ago</small>
									</div>
									<div class="user-panel-actions">
										<a href="#"><i class="fas fa-pencil-alt"></i></a>
										<a href="#"><i class="fas fa-share-alt"></i></a>
										<a href="#"><i class="fas fa-ellipsis-v"></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-md-4">
						<div class="card card-column">
							<div class="card-image">
								<img src="images/stock-3.jpg" alt="">
							</div>
							<div class="card-body">
								<h3>Lorem ipsum dolor.</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi possimus vel magni.</p>
								<div class="user-panel">
									<div class="user-panel-image">
										<div class="avatar avatar-sm">
											<img src="images/avatar-1.jpg" alt="">
										</div>
									</div>
									<div class="user-panel-info">
										<p>John Doe</p>
										<small class="text-black-50">Two days ago</small>
									</div>
									<div class="user-panel-actions">
										<a href="#"><i class="fas fa-pencil-alt"></i></a>
										<a href="#"><i class="fas fa-share-alt"></i></a>
										<a href="#"><i class="fas fa-ellipsis-v"></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="card card-column">
							<div class="card-image">
								<img src="images/stock-6.jpg" alt="">
							</div>
							<div class="card-body">
								<h3>Lorem ipsum dolor.</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi possimus vel magni.</p>
								<div class="user-panel">
									<div class="user-panel-image">
										<div class="avatar avatar-sm">
											<img src="images/avatar-1.jpg" alt="">
										</div>
									</div>
									<div class="user-panel-info">
										<p>John Doe</p>
										<small class="text-black-50">Two days ago</small>
									</div>
									<div class="user-panel-actions">
										<a href="#"><i class="fas fa-pencil-alt"></i></a>
										<a href="#"><i class="fas fa-share-alt"></i></a>
										<a href="#"><i class="fas fa-ellipsis-v"></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="card card-column">
							<div class="card-image">
								<img src="images/stock-5.jpg" alt="">
							</div>
							<div class="card-body">
								<h3>Lorem ipsum dolor.</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi possimus vel magni.</p>
								<div class="user-panel">
									<div class="user-panel-image">
										<div class="avatar avatar-sm">
											<img src="images/avatar-1.jpg" alt="">
										</div>
									</div>
									<div class="user-panel-info">
										<p>John Doe</p>
										<small class="text-black-50">Two days ago</small>
									</div>
									<div class="user-panel-actions">
										<a href="#"><i class="fas fa-pencil-alt"></i></a>
										<a href="#"><i class="fas fa-share-alt"></i></a>
										<a href="#"><i class="fas fa-ellipsis-v"></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<h2 class="content-title">Work</h2>

				<div class="row">
					<div class="col-lg-4">
						<div class="box">
							<div class="box-header">
								<h3>Chat</h3>
							</div>
							<div class="chat-content">
								<div class="chat-messages">

									<div class="message message-self">
										<div class="message-content">
											<div class="message-bubble">
												<p>Hello, Alex!</p>
											</div>
											<small class="text-secondary text-sm">Today, 10:35</small>
										</div>
										<div class="message-actions">
											<button><i class="far fa-trash-alt"></i></button>
										</div>
									</div>
									<div class="message message-self">
										<div class="message-content">
											<div class="message-bubble">
												<p>The project finally complete! Do you go to our team meeting? We have great news!</p>
											</div>
											<small class="text-secondary text-sm">Today, 10:35</small>
										</div>
										<div class="message-actions">
											<button><i class="far fa-trash-alt"></i></button>
										</div>
									</div>
									<div class="message">
										<div class="avatar avatar-sm">
											<img src="images/avatar-3.jpg" alt="">
										</div>
										<div class="message-content">
											<div class="message-bubble">
												<p>Yes, I'll come!</p>
											</div>
											<small class="text-secondary text-sm">Today, 10:36</small>
										</div>
										<div class="message-actions">
											<button><i class="far fa-trash-alt"></i></button>
											<button><i class="far fa-flag"></i></button>
										</div>
									</div>
								</div>
								<div class="chat-footer">
									<div class="input-group">
										<input id="inputGroupEmailButton2" type="text" class="form-control" placeholder="This is input with button">
										<button class="btn btn-primary">Send</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="box">
							<div class="box-header">
								<h3>Browser Usage</h3>
							</div>
							<div class="box-body">
								<canvas id="pieChartJs" class="chart" height="200"></canvas>
								<ul class="list-bordered unstyled">
									<li class="d-flex justify-content-between">Germany <span class="badge badge-primary badge-pill pull-right">+1236</span></li>
									<li class="d-flex justify-content-between">USA <span class="badge badge-primary badge-pill pull-right">+1031</span></li>
									<li class="d-flex justify-content-between">Australia <span class="badge badge-primary badge-pill pull-right">+833</span></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="box">
							<div class="box-header">
								<h3>Event columns</h3>
								<div class="box-actions">
									<a href="#" class="box-actions-item">Link</a>
									<button class="box-actions-item"><i class="fas fa-minus"></i></button>
									<button class="box-actions-item"><i class="fas fa-times"></i></button>
								</div>
							</div>
							<div class="box-body">
								<div class="event-column event-column-success">
									<div class="event-content">
										<small class="text-secondary"><i class="far fa-envelope"></i> From example@gmail.com</small>
										<p><a href="#">Alex White</a> sent you an email.</p>
									</div>
									<small class="text-secondary pull-right">1 hr.</small>
								</div>
								<div class="event-column event-column-success">
									<div class="avatar avatar-xs">
										<img src="images/avatar-2.jpg" alt="">
									</div>
									<div class="event-content">
										<small class="text-secondary"><i class="fas fa-code-branch"></i> awesome-branch</small>
										<p><a href="#">Sam Lee</a> new pull request.</p>
									</div>
									<small class="text-secondary pull-right">43 min.</small>
								</div>
								<div class="event-column event-column-primary">
									<div class="event-content">
										<small class="text-secondary"><i class="fas fa-thumbtack"></i> New task</small>
										<p><b>To <a href="#">John Doe</a>: new API methods.</b></p>
										<p class="text-secondary text-sm">Implement new API methods for mobile app.</p>
									</div>
									<small class="text-secondary pull-right">7 min.</small>
								</div>
								<div class="event-column event-column-secondary">
									<div class="event-content">
										<small class="text-secondary"><i class="far fa-bell"></i> Notification</small>
										<p><a href="#">Alex White</a> joined to project</p>
									</div>
									<small class="text-secondary pull-right">now</small>
								</div>
							</div>
						</div>
					</div>
				</div>

				<h2 class="content-title">Communication</h2>

				<div class="row">
					<div class="col-lg-8">
						<form action="https://www.evgenytk.com/" class="box needs-validation" novalidate>
							<div class="box-header">
								<h3>Quick email</h3>
							</div>
							<div class="box-body">
								<div class="form-group">
									<label for="email">Email to:</label>
									<input type="email" class="form-control" id="email" required placeholder="Enter email">
									<span class="valid-feedback">Fine!</span>
									<span class="invalid-feedback">Email field is required.</span>
								</div>

								<div class="form-group">
									<label for="subject">Subject</label>
									<input type="text" class="form-control" id="subject" maxlength="100" required placeholder="Enter subject">
									<span class="valid-feedback">Fine!</span>
									<span class="invalid-feedback">Email field is required.</span>
								</div>

								<textarea id="ckeditor4"></textarea>
							</div>
							<div class="box-footer">
								<button type="submit" class="btn btn-primary pull-right">Send</button>
							</div>
						</form>
					</div>
					<div class="col-lg-4">
						<div class="box">
							<div class="box-header">
								<h3>Contacts</h3>
							</div>
							<div class="box-body">
								<div class="user-panel">
									<div class="user-panel-image">
										<div class="avatar avatar-sm">
											<img src="images/avatar-2.jpg" alt="">
											<i class="fas fa-circle text-success"></i>
										</div>
									</div>
									<div class="user-panel-info">
										<p>Sam Lee</p>
										<small class="text-black-50">iOS Developer</small>
									</div>
									<div class="user-panel-actions">
										<a href="#"><i class="fas fa-ellipsis-v"></i></a>
									</div>
								</div>
								<div class="user-panel">
									<div class="user-panel-image">
										<div class="avatar avatar-sm">
											<img src="images/avatar-3.jpg" alt="">
										</div>
									</div>
									<div class="user-panel-info">
										<p>Alex White</p>
										<small class="text-black-50">Frontend Developer</small>
									</div>
									<div class="user-panel-actions">
										<a href="#"><i class="fas fa-ellipsis-v"></i></a>
									</div>
								</div>
								<div class="user-panel">
									<div class="user-panel-image">
										<div class="avatar avatar-sm">
											<img src="images/avatar-4.jpg" alt="">
											<i class="fas fa-circle text-success"></i>
										</div>
									</div>
									<div class="user-panel-info">
										<p>Jessica Evans</p>
										<small class="text-black-50">iOS Developer</small>
									</div>
									<div class="user-panel-actions">
										<a href="#"><i class="fas fa-ellipsis-v"></i></a>
									</div>
								</div>
								<div class="user-panel">
									<div class="user-panel-image">
										<div class="avatar avatar-sm">
											<img src="images/avatar-6.jpg" alt="">
										</div>
									</div>
									<div class="user-panel-info">
										<p>Jacob Brown</p>
										<small class="text-black-50">Backend Developer</small>
									</div>
									<div class="user-panel-actions">
										<a href="#"><i class="fas fa-ellipsis-v"></i></a>
									</div>
								</div>
								<div class="user-panel">
									<div class="user-panel-image">
										<div class="avatar avatar-sm">
											<img src="images/avatar-7.jpg" alt="">
										</div>
									</div>
									<div class="user-panel-info">
										<p>Harry Taylor</p>
										<small class="text-black-50">Frontend Developer</small>
									</div>
									<div class="user-panel-actions">
										<a href="#"><i class="fas fa-ellipsis-v"></i></a>
									</div>
								</div>
								<div class="user-panel">
									<div class="user-panel-image">
										<div class="avatar avatar-sm">
											<img src="images/avatar-8.jpg" alt="">
										</div>
									</div>
									<div class="user-panel-info">
										<p>Sarah Miller</p>
										<small class="text-black-50">Frontend Developer</small>
									</div>
									<div class="user-panel-actions">
										<a href="#"><i class="fas fa-ellipsis-v"></i></a>
									</div>
								</div>
								<div class="user-panel">
									<div class="user-panel-image">
										<div class="avatar avatar-sm">
											<img src="images/avatar-9.jpg" alt="">
										</div>
									</div>
									<div class="user-panel-info">
										<p>Joanne Davies</p>
										<small class="text-black-50">Frontend Developer</small>
									</div>
									<div class="user-panel-actions">
										<a href="#"><i class="fas fa-ellipsis-v"></i></a>
									</div>
								</div>
							</div>
							<div class="box-footer">
								<a href="#" class="text-secondary text-sm d-block">Show more contacts <i class="fas fa-chevron-right"></i></a>
							</div>
						</div>
					</div>
				</div>

			</div>
		</main>
		<footer class="footer">
			<p>Admin В© 2018 All Rights Reserved.</p>
			<ul>
				<li><a href="#" class="btn btn-link text-secondary">Link</a></li>
				<li><a href="#" class="btn btn-outline-primary btn-sm">Action button</a></li>
			</ul>
		</footer>
	</div>

	</div>
</template>
<script>
import AdminSidebar from './AdminSidebar.vue';

export default{
  components: {
			  'side-bar': AdminSidebar,

  },


};
</script>
