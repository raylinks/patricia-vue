import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Contact_us from './views/Contact_us.vue';
import Reg from './views/Authentication/Reg.vue';
import Login from './views/Authentication/Login.vue';
import ForgetPassword from './views/Authentication/ForgetPassword.vue';
import ResetPassword from './views/Authentication/ResetPassword.vue';
import User_dashboard from './views/Authentication/User_dashboard.vue';
import Unlicensed from './views/Authentication/Unlicensed.vue';
import Estate_dev from './views/Our_interest/Estate_dev.vue';
import Estate_dev2 from './views/Our_interest/Estate_dev2.vue';
import Archline from './views/Our_interest/Archline.vue';
import Buy from './views/Our_interest/Buy.vue';
import Sell from './views/Our_interest/Sell.vue';
import Properties from './views/Our_interest/Properties.vue';
import Overview from './views/Business_club/Overview.vue';
import Important_date from './views/Business_club/Important_date.vue';
import Enter_league from './views/Estate_league/Enter_league.vue';
import Join_league from './views/Estate_league/Join_league.vue';
import General_inspec from './views/Site_inspection/General_inspec.vue';
import Private_inspec from './views/Site_inspection/Private_inspec.vue';
import Index from './views/Admin/Index.vue';
import UserRole from './views/Authentication/UserRole.vue';
import Transact_box from './views/Admin/Transact_box.vue';
import Prefered_pro from './views/Admin/Prefered_pro.vue';
import Joining from './views/Estate_league/Joining.vue';
import LeagueBuy from './views/Estate_league/LeagueBuy.vue';
import LeagueBuy2 from './views/Estate_league/LeagueBuy2.vue';
import LeagueSell from './views/Estate_league/LeagueSell.vue';
import Market from './views/Authentication/Market.vue';
import Clients from './views/Authentication/Clients.vue';
import ConfirmUser from './views/Authentication/ConfirmUser.vue';
import Exc_promo from './views/Authentication/Exc_promo.vue';
import Site_insp from './views/Authentication/Site_insp.vue';
import Biz__club from './views/Authentication/Biz__club.vue';
import League_table from './views/Authentication/League_table.vue';
import Transfer_req from './views/Authentication/Transfer_req.vue';
import Portfolio from './views/Authentication/Portfolio.vue';
import Userbuy from './views/Authentication/Userbuy.vue';
import Usersell from './views/Authentication/Usersell.vue';
import Tradebuy from './views/Trade/Tradebuy.vue';
import Tradesell from './views/Trade/Tradesell.vue';
import GetTrade from './views/Authentication/GetTrade.vue';
import Buynsell from './views/Trade/Buynsell.vue';
import PropBuy from './views/Authentication/PropBuy.vue';
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
      meta:{
        forVisitorS: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component:Login,
      meta:{
        forVisitorS: true
      }
    },
    {
      path: '/forgetpassword',
      name: 'forgetpassword',
      component:ForgetPassword,
      meta:{
        forVisitorS: true
      }
    },
    {
      path: '/resetpassword/:token',
      name: 'resetpassword',
      component:ResetPassword,
    },
    {
      path: '/dash',
      name: 'user_dashboard',
      component:User_dashboard,
    },

    {
      path: '/contact',
      name: 'contact',
      component: Contact_us,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/estatedev',
      name: 'estate_dev',
      component: Estate_dev,
    },
    {
      path: '/archline',
      name: 'archline',
      component: Archline,
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
      path: '/dates',
      name: 'important_date',
      component: Important_date,
    },
    {
      path: '/enterleague',
      name: 'enterleague',
      component: Enter_league,
    },
    {
      path: '/joinleague',
      name: 'joinleague',
      component: Join_league,
    },
    {
      path: '/generalinspection',
      name: 'general_inspection',
      component: General_inspec,
    },
    {
      path: '/privateinspection',
      name: 'private_inspection',
      component: Private_inspec,
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
      path: '/transactbox',
      name: 'transact',
      component: Transact_box,
    },
     {
      path: '/prefered',
      name: 'prefered',
      component: Prefered_pro,
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
      path: '/estatedev2',
      name: 'estatedev',
      component: Estate_dev2,
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
      path: '/confirm',
      name: 'confirm',
      component: ConfirmUser,
    },
    {
      path: '/promo',
      name: 'promo',
      component: Exc_promo,
    },
    {
      path: '/siteinsp',
      name: 'siteinsp',
      component: Site_insp,
    },
    {
      path: '/bizclub',
      name: 'Biz__club',
      component: Biz__club,
    },
    {
      path: '/leaguetable',
      name: 'leaguetable',
      component: League_table,
    },
    {
      path: '/transferreq',
      name: 'transferreq',
      component: Transfer_req,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio,
    },
    {
      path: '/Userbuy',
      name: 'userbuy',
      component: Userbuy,
    },
    {
      path: '/Usersell',
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
        component:GetTrade,
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
        path: '/comingsoon',
        name: 'comingsoon',
        component: Comingsoon,
    },
    
  ],
});
