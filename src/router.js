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
import Estate from './views/Our_interest/Estate.vue';
import Semicert from './views/Our_interest/Semicert.vue';
import Estatedev from './views/Our_interest/Estatedev.vue';
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
import editUserRole from './views/Authentication/editUserRole.vue';
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
import Estateleague from './views/Estate_league/Estateleague.vue';
import Training from './views/Our_interest/Training.vue';


Vue.use(Router);


export default new Router({
  mode: 'history',
  linkActiveClass: 'active',

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
    },
    {
      path: '/visualization',
      name: 'visualization',
      component: Visualization,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/forgetpassword',
      name: 'forgetpassword',
      component: ForgetPassword,

    },
    {
      path: '/resetpassword/:token',
      name: 'resetpassword',
      component: ResetPassword,
    },
    {
      path: '/dash',
      name: 'user_dashboard',
      component: Userdashboard,
    },

    {
      path: '/contact',
      name: 'contact',
      component: Contactus,
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
    },
    {
      path: '/archline',
      name: 'archline',
      component: Archline,
    },
    {
      path: '/building',
      name: 'building',
      component: BuildingDesign,
    },
    {
      path: '/sitesupervision',
      name: 'sitesupervision',
      component: SiteSupervision,
    },
    {
      path: '/interior',
      name: 'interior',
      component: Interior,
    },
    {
      path: '/modelling',
      name: 'modelling',
      component: Modelling,
    },
    {
      path: '/landscaping',
      name: 'landscaping',
      component: Landscaping,
    },
    {
      path: '/semicert',
      name: 'semicertif',
      component: Semicert,
    },
    {
      path: '/properties',
      name: 'properties',
      component: Properties,
    },
    {
      path: '/training',
      name: 'training',
      component: Training,
    },
    {
      path: '/overview',
      name: 'overview',
      component: Overview,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/dates',
      name: 'important_date',
      component: Importantdate,
    },
    {
      path: '/enterleague',
      name: 'enterleague',
      component: Enterleague,
    },
    {
      path: '/joinleague',
      name: 'joinleague',
      component: Joinleague,
    },
    {
      path: '/generalinspection',
      name: 'general_inspection',
      component: Generalinspec,
    },
    {
      path: '/privateinspection',
      name: 'private_inspection',
      component: Privateinspec,
    },
    {
      path: '/admin',
      name: 'index',
      component: Index,
    },
    {
      path: '/role',
      name: 'role',
      component: UserRole,
    },
    {
      path: '/unlicensed',
      name: 'unlicensed',
      component: Unlicensed,
    },

    {
      path: '/prefered',
      name: 'prefered',
      component: Preferedpro,
    },
    {
      path: '/state',
      name: 'states',
      component: addstates,
    },
    {
      path: '/addlocation',
      name: 'locations',
      component: addlocations,
    },
    {
      path: '/admindev',
      name: 'allestates',
      component: allEstateDev,
    },
    {
      path: '/joining',
      name: 'joining',
      component: Joining,
    },
    {
      path: '/buy',
      name: 'buy',
      component: Buy,
    },
    {
      path: '/sell',
      name: 'sell',
      component: Sell,
    },
    {
      path: '/leaguebuy',
      name: 'leaguebuy',
      component: LeagueBuy,
    },
    {
      path: '/leaguebuy2',
      name: 'leaguebuy2',
      component: LeagueBuy2,
    },
    {
      path: '/leaguesell',
      name: 'estatesell',
      component: LeagueSell,
    },
    {
      path: '/estate',
      name: 'estatedev',
      component: Estate,
    },
    {
      path: '/market',
      name: 'market',
      component: Market,
    },
    {
      path: '/clients',
      name: 'clients',
      component: Clients,
    },
    {
      path: '/clients/edit/:id',
      name: 'clientsEdit',
      component: clientEdit,
    },
    {
      path: '/edit/:_id/edit',
      name: 'editRole',
      component: editUserRole,
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: ConfirmUser,
    },
    {
      path: '/edit/:_id',
      name: 'confirmuseredit',
      component: confirmUserEdit,
    },
    {
      path: '/profile/:_id',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/promo',
      name: 'promo',
      component: Excpromo,
    },
    {
      path: '/siteinsp',
      name: 'siteinsp',
      component: Siteinsp,
    },
    {
      path: '/bizclub',
      name: 'Biz__club',
      component: Bizclub,
    },
    {
      path: '/leaguetable',
      name: 'leaguetable',
      component: Leaguetable,
    },
    {
      path: '/transferreq',
      name: 'transferreq',
      component: Transferreq,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio,
    },
    {
      path: '/userbuy',
      name: 'userbuy',
      component: Userbuy,
    },
    {
      path: '/usersell',
      name: 'usersell',
      component: Usersell,
    },
    {
      path: '/tradesell',
      name: 'tradesell',
      component: Tradesell,
    },
    {
      path: '/trading',
      name: 'trading',
      component: GetTrade,
    },
    {
      path: '/tradebuy',
      name: 'tradebuy',
      component: Tradebuy,
    },
    {
      path: '/buynsell',
      name: 'buynsell',
      component: Buynsell,
    },
    {
      path: '/propbuy',
      name: 'propbuy',
      component: PropBuy,
    },
    {
      path: '/tradewithus',
      name: 'tradeWithUs',
      component: tradeWithUs,
    },
    {
      path: '/estateleague',
      name: 'cestateleague',
      component: Estateleague,
    },
    {
      path: '/videos',
      name: 'videos',
      component: Videos,
    },

  ],
});
