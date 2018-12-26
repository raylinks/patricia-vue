<template>
<div>
	<nav-bar ></nav-bar>

<!-- Page Heading Section Start -->
	<div class="pagehding-sec">
		<div class="images-overlay"></div>
		<div class="container">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="page-heading">
						<h1>ARCHLINE</h1>
						<ul>
							<li><a href="index-2.html"></a></li>
							<li><a href="#"></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Page Heading Section End -->
	<!-- Service Section Start -->
	<!-- Project Section Start -->
	<div class="project-sec pt-50 pb-20">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="sec-title">
						<h1>3D<span>Visualization</span></h1>
						<div class="border-shape"></div>
						<p>.....</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-3 col-sm-6  inner">
					<div class="item">
						<img src="img/visual1.jpg" alt="" />

					</div>
				</div>
				<div class="col-md-3 col-sm-6  inner">
					<div class="item">
						<img src="img/visual2.jpg" alt="" />

					</div>
				</div>


			</div>
		</div>
	</div>
	<!-- Project Section Start -->
	<app-footer  ></app-footer>

</div>
</template>
<script>
    import Navbar from '../../Navbar.vue';
    import Footer from '../../Footer.vue';

    export default{
        components: {
            'nav-bar': Navbar,
            'app-footer': Footer,
        },

    };
</script>
