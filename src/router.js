import Vue from 'vue';
import Router from 'vue-router';
import RegistrationPage from './components/registration/RegistrationPage';
import WelcomePage from './components/account_entered/WelcomePage';
import FullSignUpPage from './components/account_entered/FullSignUpPage';
import MainProfile from './components/profile/MainProfile';
import AccountFriends from './components/friends/AccountFriends';
import AccountMessages from './components/messages/AccountMessages';
import AccountMusic from './components/music/AccountMusic';
import AccountNotes from './components/notes/AccountNotes';
import AccountGroups from './components/groups/AccountGroups';
import AccountNotifications from './components/notification/AccountNotifications';
import IncomingPosts from './components/posts/IncomingPosts';
import AccountSettings from './components/settings/AccountSettings';
import AccountHelp from './components/help/AccountHelp';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'RegistrationPage',
      component: RegistrationPage,
      path: '/registration',
    },
    {
      name: 'FullSignUpPage',
      component: FullSignUpPage,
      path: '/',
      children: [
        {
          name: 'WelcomePage',
          component: WelcomePage,
          path: '/',
        },
        {
          name: 'MainProfile',
          component: MainProfile,
          path: '/profile',
        },
        {
          name: 'AccountFriends',
          component: AccountFriends,
          path: '/friends',
        },
        {
          name: 'AccountMessages',
          component: AccountMessages,
          path: '/messages',
        },
        {
          name: 'AccountMusic',
          component: AccountMusic,
          path: '/music',
        },
        {
          name: 'AccountNotes',
          component: AccountNotes,
          path: '/notes',
        },
        {
          name: 'AccountGroups',
          component: AccountGroups,
          path: '/groups',
        },
        {
          name: 'AccountNotifications',
          component: AccountNotifications,
          path: '/notifications',
        },
        {
          name: 'IncomingPosts',
          component: IncomingPosts,
          path: '/posts',
        },
        {
          name: 'AccountSettings',
          component: AccountSettings,
          path: '/settings',
        },
        {
          name: 'AccountHelp',
          component: AccountHelp,
          path: '/help',
        },
      ],
    },
    {
      path: '*',
      component: FullSignUpPage,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
  },
});
