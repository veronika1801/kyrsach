import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from "../pages/LoginPage.vue";
import RegistrationPage from "../pages/RegistrationPage.vue";
import HomePage from "../pages/HomePage.vue";
import UserPage from "../pages/UserPage.vue";
import TerminalPage from "../pages/TerminalPage.vue";
import MoonPage from "../pages/MoonPage.vue";
import MonsterPage from "../pages/MonsterPage.vue";
import ItemPage from "../pages/ItemPage.vue";
import ScrabPage from "../pages/ScrabPage.vue";
import DiscussionsPage from "../pages/DiscussionsPage.vue";
import Add_moon from "../components/Add_moon.vue";
import Add_monster from "../components/Add_monster.vue";
import Add_scrab from "../components/Add_scrab.vue";
import Add_item from "../components/Add_item.vue";
import Add_terminal from "../components/Add_terminal.vue";
import Add_discussions from "../components/Add_discussions.vue";
// import Redact_monster from "../components/Redact_monster.vue";

const router = createRouter({
  
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/register',
      name: 'register',
      component: RegistrationPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
      path: '/Add_terminal',
      name: 'Add_terminal',
      component: Add_terminal
  },
  {
    path: '/Add_discussions',
    name: 'Add_discussions',
    component: Add_discussions
},
    {
      path: '/Add_moon',
      name: 'Add_moon',
      component: Add_moon
    },
    {
      path: '/Add_item',
      name: 'Add_item',
      component: Add_item
    },
    {
      path: '/Add_scrab',
      name: 'Add_scrab',
      component: Add_scrab
    },
    // {
    //   path: '/Redact_monster',
    //   name: 'Redact_monster',
    //   component: Redact_monster
    // },
    {
      path: '/Add_monster',
      name: 'Add_monster',
      component: Add_monster
    },
    {
      path: '/viewDiscussions',
      name: 'viewDiscussions',
      component: DiscussionsPage
    },
    {
      path: '/viewScrab',
      name: 'viewScrab',
      component: ScrabPage
    },
    
    {
      path: '/viewItem',
      name: 'viewItem',
      component: ItemPage
    },
    {
      path: '/viewMonster',
      name: 'viewMonster',
      component: MonsterPage
    },
    {
      path: '/viewMoon',
      name: 'viewMoon',
      component: MoonPage
    },
    {
      path: '/viewTerminal',
      name: 'viewTerminal',
      component: TerminalPage
    },
    {
      path: '/profile',
      name: 'profile',
      component: UserPage
    },
    
  ]
  
})

export default router