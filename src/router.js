import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

import Contactus from './views/Contactus.vue';
import Reg from './views/Authentication/Reg.vue';
import Login from './views/Authentication/Login.vue';
import ForgetPassword from './views/Authentication/ForgetPassword.vue';
import ResetPassword from './views/Authentication/ResetPassword.vue';
import Userdashboard from './views/Authentication/Userdashboard.vue';
import Unlicensed from './views/Authentication/Unlicensed.vue';
import Estatedev from './views/Our_interest/Estatedev.vue';
import Semicert from './views/Our_interest/Semicert.vue';
import Estatedev2 from './views/Our_interest/Estatedev2.vue';
import allEstateDev from './views/Authentication/allEstateDev.vue';
import Archline from './views/Our_interest/Archline.vue';
import SiteSupervision from './views/Our_interest/Archline/SiteSupervision.vue';
import BuildingDesign from './views/Our_interest/Archline/BuildingDesign.vue';
import Modelling from './views/Our_interest/Archline/Modelling.vue';
import Landscaping from './views/Our_interest/Archline/Landscaping.vue';
import Visualization from './views/Our_interest/Archline/Visualization.vue';
import Interior from './views/Our_interest/Archline/Interior.vue';
import Buy from './views/Our_interest/Buy.vue';
import Sell from './views/Our_interest/Sell.vue';
import Properties from './views/Our_interest/Properties.vue';
import Overview from './views/Business_club/Overview.vue';
import About from './views/Who_we_are/About.vue';
import Importantdate from './views/Business_club/Importantdate.vue';
import Enterleague from './views/Estate_league/Enterleague.vue';
import Joinleague from './views/Estate_league/Joinleague.vue';
import Generalinspec from './views/Site_inspection/Generalinspec.vue';
import Videos from './views/Site_inspection/Videos.vue';
import Privateinspec from './views/Site_inspection/Privateinspec.vue';
import Index from './views/Admin/Index.vue';
import UserRole from './views/Authentication/UserRole.vue';

import Preferedpro from './views/Admin/Preferedpro.vue';
import Joining from './views/Estate_league/Joining.vue';
import LeagueBuy from './views/Estate_league/LeagueBuy.vue';
import LeagueBuy2 from './views/Estate_league/LeagueBuy2.vue';
import LeagueSell from './views/Estate_league/LeagueSell.vue';
import Market from './views/Authentication/Market.vue';
import Clients from './views/Authentication/Clients.vue';
import clientEdit from './views/Edit/clientEdit.vue';
import confirmUserEdit from './views/Edit/confirmUserEdit.vue';
import ConfirmUser from './views/Authentication/ConfirmUser.vue';
import Excpromo from './views/Authentication/Excpromo.vue';
import Siteinsp from './views/Authentication/Siteinsp.vue';
import Profile from './views/Authentication/Profile.vue';
import Bizclub from './views/Authentication/Bizclub.vue';
import Leaguetable from './views/Authentication/Leaguetable.vue';
import Transferreq from './views/Authentication/Transferreq.vue';
import Portfolio from './views/Authentication/Portfolio.vue';
import Userbuy from './views/Authentication/Userbuy.vue';
import Usersell from './views/Authentication/Usersell.vue';
import Tradebuy from './views/Trade/Tradebuy.vue';
import Tradesell from './views/Trade/Tradesell.vue';
import GetTrade from './views/Authentication/GetTrade.vue';
import Buynsell from './views/Trade/Buynsell.vue';
import PropBuy from './views/Authentication/PropBuy.vue';
import addstates from './views/Authentication/addstates.vue';
import addlocations from './views/Authentication/addlocations.vue';
import tradeWithUs from './views/Trade/tradeWithUs.vue';
import Comingsoon from './views/Estate_league/Comingsoon.vue';
import Training from './views/Our_interest/Training.vue';


Vue.use(Router);

export default new Router({

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/reg',
      name: 'reg',
      component: Reg,
      meta: { forVisitors: true },
    },
    {
      path: '/visualization',
      name: 'visualization',
      component: Visualization,
      meta: { forVisitors: true },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { forVisitors: true },
    },
    {
      path: '/forgetpassword',
      name: 'forgetpassword',
      component: ForgetPassword,
      meta: { forVisitors: true },

    },
    {
      path: '/resetpassword/:token',
      name: 'resetpassword',
      component: ResetPassword,
      meta: { forVisitors: true },
    },
    {
      path: '/dash',
      name: 'user_dashboard',
      component: Userdashboard,
      meta: { forAuth: true },
    },

    {
      path: '/contact',
      name: 'contact',
      component: Contactus,
      meta: { forVisitors: true },
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
    {
      path: '/estatedev',
      name: 'estate_dev',
      component: Estatedev,
      meta: { forVisitors: true },
    },
    {
      path: '/archline',
      name: 'archline',
      component: Archline,
      meta: { forVisitors: true },
    },
    {
      path: '/building',
      name: 'building',
      component: BuildingDesign,
      meta: { forVisitors: true },
    },
    {
      path: '/sitesupervision',
      name: 'sitesupervision',
      component: SiteSupervision,
      meta: { forVisitors: true },
    },
    {
      path: '/interior',
      name: 'interior',
      component: Interior,
      meta: { forVisitors: true },
    },
    {
      path: '/modelling',
      name: 'modelling',
      component: Modelling,
      meta: { forVisitors: true },
    },
    {
      path: '/landscaping',
      name: 'landscaping',
      component: Landscaping,
      meta: { forVisitors: true },
    },
    {
      path: '/semicert',
      name: 'semicertif',
      component: Semicert,
      meta: { forVisitors: true },
    },
    {
      path: '/properties',
      name: 'properties',
      component: Properties,
      meta: { forVisitors: true },
    },
    {
      path: '/training',
      name: 'training',
      component: Training,
      meta: { forVisitors: true },
    },
    {
      path: '/overview',
      name: 'overview',
      component: Overview,
      meta: { forVisitors: true },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: { forVisitors: true },
    },
    {
      path: '/dates',
      name: 'important_date',
      component: Importantdate,
      meta: { forVisitors: true },
    },
    {
      path: '/enterleague',
      name: 'enterleague',
      component: Enterleague,
      meta: { forVisitors: true },
    },
    {
      path: '/joinleague',
      name: 'joinleague',
      component: Joinleague,
      meta: { forVisitors: true },
    },
    {
      path: '/generalinspection',
      name: 'general_inspection',
      component: Generalinspec,
      meta: { forVisitors: true },
    },
    {
      path: '/privateinspection',
      name: 'private_inspection',
      component: Privateinspec,
      meta: { forVisitors: true },
    },
    {
      path: '/admin',
      name: 'index',
      component: Index,
      meta: { forAuth: true },
    },
    {
      path: '/role',
      name: 'role',
      component: UserRole,
      meta: { forAuth: true },
    },
    {
      path: '/unlicensed',
      name: 'unlicensed',
      component: Unlicensed,
      meta: { forAuth: true },
    },

    {
      path: '/prefered',
      name: 'prefered',
      component: Preferedpro,
      meta: { forAuth: true },
    },
    {
      path: '/estatedev/state',
      name: 'states',
      component: addstates,
      meta: { forAuth: true },
    },
    {
      path: '/estatedev/locations',
      name: 'locations',
      component: addlocations,
      meta: { forAuth: true },
    },
    {
      path: '/all/estates',
      name: 'allestates',
      component: allEstateDev,
      meta: { forAuth: true },
    },
    {
      path: '/joining',
      name: 'joining',
      component: Joining,
      meta: { forVisitor: true },
    },
    {
      path: '/buy',
      name: 'buy',
      component: Buy,
      meta: { forVisitor: true },
    },
    {
      path: '/sell',
      name: 'sell',
      component: Sell,
      meta: { forVisitor: true },
    },
    {
      path: '/leaguebuy',
      name: 'leaguebuy',
      component: LeagueBuy,
      meta: { forVisitor: true },
    },
    {
      path: '/leaguebuy2',
      name: 'leaguebuy2',
      component: LeagueBuy2,
      meta: { forVisitor: true },
    },
    {
      path: '/leaguesell',
      name: 'estatesell',
      component: LeagueSell,
      meta: { forVisitor: true },
    },
    {
      path: '/estatedev2',
      name: 'estatedev',
      component: Estatedev2,
      meta: { forVisitor: true },
    },
    {
      path: '/market',
      name: 'market',
      component: Market,
      meta: { forAuth: true },
    },
    {
      path: '/clients',
      name: 'clients',
      component: Clients,
      meta: { forAuth: true },
    },
    {
      path: '/clients/edit/:id',
      name: 'clientsEdit',
      component: clientEdit,
      meta: { forAuth: true },
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: ConfirmUser,
      meta: { forAuth: true },
    },
    {
      path: '/confirm/edit/:_id',
      name: 'confirmEdit',
      component: confirmUserEdit,
      meta: { forAuth: true },
    },
    {
      path: '/profile/:_id',
      name: 'profile',
      component: Profile,
      meta: { forAuth: true },
    },
    {
      path: '/promo',
      name: 'promo',
      component: Excpromo,
      meta: { forAuth: true },
    },
    {
      path: '/siteinsp',
      name: 'siteinsp',
      component: Siteinsp,
      meta: { forVisitor: true },
    },
    {
      path: '/bizclub',
      name: 'Biz__club',
      component: Bizclub,
      meta: { forAuth: true },
    },
    {
      path: '/leaguetable',
      name: 'leaguetable',
      component: Leaguetable,
      meta: { forAuth: true },
    },
    {
      path: '/transferreq',
      name: 'transferreq',
      component: Transferreq,
      meta: { forAuth: true },
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio,
      meta: { forAuth: true },
    },
    {
      path: '/userbuy',
      name: 'userbuy',
      component: Userbuy,
      meta: { forAuth: true },
    },
    {
      path: '/usersell',
      name: 'usersell',
      component: Usersell,
      meta: { forAuth: true },
    },
    {
      path: '/tradesell',
      name: 'tradesell',
      component: Tradesell,
      meta: { forAuth: true },
    },
    {
      path: '/trading',
      name: 'trading',
      component: GetTrade,
      meta: { forAuth: true },
    },
    {
      path: '/tradebuy',
      name: 'tradebuy',
      component: Tradebuy,
      meta: { forAuth: true },
    },
    {
      path: '/buynsell',
      name: 'buynsell',
      component: Buynsell,
      meta: { forVisitor: true },
    },
    {
      path: '/propbuy',
      name: 'propbuy',
      component: PropBuy,
      meta: { forVisitor: true },
    },
    {
      path: '/tradewithus',
      name: 'tradeWithUs',
      component: tradeWithUs,
      meta: { forVisitor: true },

    },
    {
      path: '/comingsoon',
      name: 'comingsoon',
      component: Comingsoon,
      meta: { forVisitor: true },
    },
    {
      path: '/videos',
      name: 'videos',
      component: Videos,
      meta: { forVisitor: true },
    },


  ],
});
