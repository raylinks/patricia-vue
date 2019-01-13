<!--<template>-->
<!--<div>-->
<!--<nav-bar v-if="this.$route.path !== '/dash'"></nav-bar>-->
<!--<div id="wrapper">-->

<!--&lt;!&ndash; ========== Left Sidebar Start ========== &ndash;&gt;-->

<!--&lt;!&ndash; Left Sidebar End &ndash;&gt;-->

<!--&lt;!&ndash; Start right Content here &ndash;&gt;-->

<!--<div class="content-page">-->
<!--&lt;!&ndash; Start content &ndash;&gt;-->
<!--<div class="content">-->

<!--&lt;!&ndash; Top Bar Start &ndash;&gt;-->

<!--&lt;!&ndash; Top Bar End &ndash;&gt;-->

<!--<div class="page-content-wrapper ">-->

<!--<div class="container-fluid">-->

<!--<div class="row">-->
<!--<div class="col-sm-12">-->
<!--<div class="page-title-box">-->
<!--<div class="btn-group float-right">-->
<!--<ol class="breadcrumb hide-phone p-0 m-0">-->
<!--<li class="breadcrumb-item"><a href="#">Annex</a></li>-->
<!--<li class="breadcrumb-item"><a href="#">Forms</a></li>-->
<!--<li class="breadcrumb-item active">Form Validation</li>-->
<!--</ol>-->
<!--</div>-->
<!--<h4 class="page-title">Confirm users</h4>-->
<!--</div>-->
<!--</div>-->
<!--</div>-->
<!--&lt;!&ndash; end page title end breadcrumb &ndash;&gt;-->

<!--<div class="row">-->
<!--<div class="col-lg-6">-->
<!--<div class="card m-b-30">-->
<!--<div class="card-body">-->

<!--<h4 class="mt-0 header-title">Client users</h4>-->
<!--<p class="text-muted m-b-30 font-14"><b>Assign a role to a user.</b></p>-->

<!--<form class="" action="#">-->

<!--<div class="form-group">-->
<!--<label>Lastname</label>-->
<!--<div>-->
<!--<input v-model="message.lastname" type="text"  disabled  class="form-control"-->
<!--/>-->
<!--</div>-->
<!--</div>-->
<!--<div class="form-group">-->
<!--<label>E-Mail</label>-->
<!--<div>-->
<!--<input v-model="message.email" type="email" disabled   class="form-control"-->
<!--/>-->
<!--</div>-->
<!--</div>-->
<!--<div class="form-group">-->
<!--<label>Select Role</label>-->
<!--<select class="form-control" >-->
<!--<option  value="0" >Select  role for Client</option>-->
<!--<option v-for="cat in role"  :value="cat.name">{{cat.name}}</option>-->

<!--</select>-->
<!--</div>-->
<!--<div class="form-group">-->
<!--<div>-->
<!--<button type="submit" class="btn btn-primary waves-effect waves-light">-->
<!--Update-->
<!--</button>-->
<!--<button type="reset" class="btn btn-secondary waves-effect m-l-5">-->
<!--Cancel-->
<!--</button>-->
<!--</div>-->
<!--</div>-->
<!--</form>-->

<!--</div>-->
<!--</div>-->
<!--</div> &lt;!&ndash; end col &ndash;&gt;-->
<!--</div> &lt;!&ndash; end row &ndash;&gt;-->

<!--</div>&lt;!&ndash; container &ndash;&gt;-->

<!--</div>-->

<!--</div> &lt;!&ndash; content &ndash;&gt;-->

<!--</div>-->
<!--&lt;!&ndash; End Right content here &ndash;&gt;-->

<!--</div>-->

<!--</div>-->
<!--</template>-->
<!--<script>-->
<!--import Navbar from '../Navbar.vue';-->
<!--import Footer from '../Footer.vue';-->

<!--import { confirmUser } from '../../config';-->
<!--import { getRoles } from '../../config';-->

<!--export default{-->
<!--name: 'editRole',-->
<!--data: () => ({-->
<!--message: {},-->
<!--role: {},-->
<!--editing: false,-->
<!--}),-->

<!--methods: {-->
<!--edit() {-->
<!--this.$http.get(`http://localhost:3000/api/v1/users/${this.$route.params._id}`).then((response) => {-->
<!--// console.log(response)-->
<!--this.message = response.body.data;-->
<!--});-->
<!--},-->
<!--fetchRoles() {-->
<!--this.$http.get(getRoles).then((response) => {-->
<!--// console.log(response)-->
<!--this.role = response.body.data;-->
<!--});-->
<!--},-->

<!--updateUser() {-->
<!--this.editing = true;-->

<!--this.$http.put(`http://localhost:3000/api/v1/users/${this.$route.params._id}`, this.role).then((response) => {-->
<!--//                    this.message = response.data;-->
<!--//                    this.message = '';-->
<!--console.log(response);-->
<!--});-->
<!--},-->
<!--},-->
<!--created() {-->
<!--this.edit();-->
<!--this.fetchRoles();-->
<!--},-->
<!--components: {-->
<!--'nav-bar': Navbar,-->
<!--'app-footer': Footer,-->
<!--},-->
<!--};-->
<!--</script>-->
