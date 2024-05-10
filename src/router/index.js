import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from "../pages/LoginPage.vue";
import RegistrationPage from "../pages/RegistrationPage.vue";
import HomePage from "../pages/HomePage.vue";
import AccountPage from "../pages/AccountPage.vue";
import TerminalPage from "../pages/TerminalPage.vue";
import MoonPage from "../pages/MoonPage.vue";
import MonsterPage from "../pages/MonsterPage.vue"

const router = createRouter({
  
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/register',
      name: 'register',
      component: RegistrationPage
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
      component: AccountPage
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