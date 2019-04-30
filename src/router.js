import Vue from 'vue';
import Router from 'vue-router';
import store from './store';
import RegistrationPage from './components/registration/RegistrationPage';
import WelcomePage from './components/account_entered/WelcomePage';
import FullSignUpPage from './components/account_entered/FullSignUpPage';
import MainProfile from './components/profile/MainProfile';
import AccountFriends from './components/friends/AccountFriends';
import AccountDialogs from './components/dialogs/AccountDialogs';
import AccountMusic from './components/music/AccountMusic';
import AccountNotes from './components/notes/AccountNotes';
import AccountGroups from './components/groups/AccountGroups';
import AccountNotifications from './components/notification/AccountNotifications';
import NoteNews from './components/note-news/NoteNews';
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
          path: '/welcome',
        },
        {
          name: 'MainProfile',
          component: MainProfile,
          path: `/${store.state.user.username}`,
        },
        {
          name: 'AccountFriends',
          component: AccountFriends,
          path: '/friends',
        },
        {
          name: 'AccountDialogs',
          component: AccountDialogs,
          path: '/dialogs',
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
          name: 'NoteNews',
          component: NoteNews,
          path: '/note-news',
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
