<template>
  <div class="header">
  
    <router-link  to="/">
    <img class="logo" src="./assets/img/Site-logo.webp" >
    </router-link>
    
      <div class="search">
          <input  type="text" name="search">
          <button class="scan">ПОИСК</button>
          <div class="option">
            <router-link to="/viewDiscussions" class="discussions">ОБСУЖДЕНИЯ</router-link>
            
            
            <select class="opt" @change="handleSelect">
              <option value="/">LETHAL COMPANY</option>
              <option value="/viewMoon">ЛУНЫ</option>
              <option value="/viewMonster">МОНСТРЫ</option>
              <option value="/viewItem">ПРЕДМЕТЫ</option>
              
            </select>
          </div>
  
          
      </div>
    <nav >
          <span class="nav" v-if="!setToken">
            <button class="button"><router-link class="router" to="/login">ВХОД</router-link> </button>
            <button class="button"><router-link class="router" to="/register">РЕГИСТРАЦИЯ</router-link> </button>
          </span>
          <span class="nav" v-else>
            <button class="button" @click="logoutUser">ВЫХОД</button>
            <button class="button"> <router-link class="router" to="/profile">АККАУНТ</router-link> </button>
            
          </span>
        </nav>
      </div>
      <router-view/>
  </template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';
import { logout } from "./api/logout.js";

const router = useRouter();
let setToken = ref(localStorage.getItem('token'));
let setRole = ref(localStorage.getItem('role_id'));

const logoutUser = async () => {
 
    await logout();
    setRole = null;
    setToken = null;
    router.push('/login');
  
}
const handleSelect = (event) => {
  const selectedPath = event.target.value;
  router.push(selectedPath);
};

  
</script>

  
  
  <style>
  
  body {
    text-align: center;
    margin: 0 185px;
    color: white;
    background-color: #232323;  
    font-family: Avenir, Helvetica, Arial, sans-serif; 
    /* height: 1920px */
  }
  .nav{
    display: flex;
    gap: 30px
  }
  
  .opt{
    background-color:#232323;
    border:none;
    color:white;
  }
  .lc{
    margin-left:20px
  }
 
  .logo{
    height: 130px;
  }
  .header {
    display: flex;
    justify-content: space-between; 
    margin-top:40px;
  }
  .option{
    margin-top:70px;
    display: flex;
    justify-content: space-around;
  }
  button {
    background-color:	#232323;
    border-radius:20px;
    color: white;
    border: 2px red solid;
    padding:6px;
    height:30px;
    
  }
  .scan{
    background-color:	#D9D9D9;
    border-radius:20px;
    border: none;
    width:80px;
    height:25px;
    color: black;
    border: 2px red solid;
    margin-left: 40px;
    
  }
  .discussions{
    color:white;
    text-decoration: none;
    font-size:15px;
  }
  .router {
    text-decoration: none;
    color: white
  }
  
  .search{
    display: inline-block;
    
    padding: 5px;
    background-color: #D9D9D9;
    border-radius: 20px;
    height:25px;
    width:350px
  }
  
  input{
      background-color: #D9D9D9;
      border: none;
      outline:none;
  }
  
  
  
  </style>
  
  
  