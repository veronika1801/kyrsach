<template>
  <div class="title">
    <h1>АККАУНТ</h1>
  </div>
  
      <div class="user_data">
      <p>ИМЯ ПОЛЬЗОВАТЕЛЯ:{{ user.login }}</p>
      <p class="data">АВАТАР:{{ user.avatar }}</p>
    </div>
    
      <button class="but_reg" type="submit">РЕДАКТИРОВАТЬ</button>
      <button class="but_reg" type="submit">УДАЛИТЬ</button>
   
    </template>
    <script setup>

import {onMounted, ref } from "vue";
import {getUser} from "../api/user.js";

const user = ref({}); 

const renderUser = async () => {
  try {
     const response = await getUser();
     user.value = response; 
  } catch (error) {
    console.error("Error rendering user:", error);
  }
};

onMounted(async () => {
  await renderUser();
});
    
    </script> 
    <style>

  .user_data{
   margin-left:100px ;
    display: flex;
    flex-direction: column;
    gap: 30px;
    
  }
  
  </style>