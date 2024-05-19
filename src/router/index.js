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
import Redact_monster from "../components/Redact_monster.vue";
import Redact_moon from "../components/Redact_moon.vue";
import Redact_item from "../components/Redact_item.vue";
import Redact_scrab from "../components/Redact_scrab.vue";
import Redact_terminal from "../components/Redact_terminal.vue";
import SearchPage from "../pages/SearchPage.vue";
// import Redact_discussions from "../components/Redact_discussions.vue";

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
      path: '/searchMonster',
      name: 'search',
      component: SearchPage
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
    {
      path: '/Redact_monster/:id',
      name: 'Redact_monster',
      component: Redact_monster,
      props: true 
    },
    // {
    //   path: '/Redact_discussions/:id',
    //   name: 'Redact_discussions',
    //   component: Redact_discussions,
    //   props: true 
    // },
    {
      path: '/Redact_scrab/:id',
      name: 'Redact_scrab',
      component: Redact_scrab,
      props: true 
    },
    {
      path: '/Redact_terminal/:id',
      name: 'Redact_terminal',
      component: Redact_terminal,
      props: true 
    },
    {
      path: '/Redact_item/:id',
      name: 'Redact_item',
      component: Redact_item,
      props: true 
    },
    {
      path: '/Redact_moon/:id',
      name: 'Redact_moon',
      component: Redact_moon,
      props: true 
    },
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