import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from "../pages/LoginPage.vue";
import RegistrationPage from "../pages/RegistrationPage.vue";
import HomePage from "../pages/HomePage.vue";
import UserPage from "../pages/UserPage.vue";
import TerminalPage from "../pages/TerminalPage.vue";
import MoonPage from "../pages/MoonPage.vue";
import MonsterPage from "../pages/MonsterPage.vue";
import ItemPage from "../pages/ItemPage.vue"

const router = createRouter({
  
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/register',
      name: 'register',
      component: RegistrationPage
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
  ]
  
})

export default router