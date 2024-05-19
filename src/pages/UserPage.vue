<template>
  <div class="account">
      
      <p>ИМЯ ПОЛЬЗОВАТЕЛЯ:{{ user.login }}</p>
      <p class="data">АВАТАР:{{ user.avatar }}</p>
      <button class="but_reg" type="submit">РЕДАКТИРОВАТЬ</button>
      <button class="but_reg" type="submit">УДАЛИТЬ</button>
    </div>
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