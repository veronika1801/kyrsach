<template>
  <div class="header">
  
    <router-link  to="/">
    <img class="logo" src="./assets/img/Site-logo.webp" >
    </router-link>
    
      <div class="search">
          <input  type="text" name="search">
          <button class="scan">ПОИСК</button>
          <div class="option">
            <router-link to="" class="discussions">ОБСУЖДЕНИЯ</router-link>
            <label class="lc">LETHAL COMPANY</label>
            <select class="opt">
              <option></option>
              <option></option>
              <option></option>
              
            </select>
          </div>
  
          
      </div>
    <nav class="nav">
          <span v-if="!setToken">
            <button class="button"><router-link class="router" to="/login">ВХОД</router-link> </button>
            <button class="button"><router-link class="router" to="/register">РЕГИСТРАЦИЯ</router-link> </button>
          </span>
          <span  v-else>
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

const logoutUser = async () => {
 
    await logout();
    
    setToken = null;
    router.push('/login');
  
}
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
    
  }
  button {
    background-color:	#D9D9D9;
    border-radius:20px;
    color: black;
    border: none;
    padding:6px;
    height:30px;
    
  }
  .scan{
    background-color:	#8D8A8A;
    border-radius:20px;
    border: none;
    margin-left: 80px;
    width:80px;
    height:25px;
    color: white;
  }
  .discussions{
    color:white;
    text-decoration: none;
    font-size:15px;
  }
  .router {
    text-decoration: none;
    color: black
  }
  .nav {
    display:flex;
  
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
  
  
  