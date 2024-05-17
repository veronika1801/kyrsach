<template>
  <div class="account">
      
      <p>ИМЯ ПОЛЬЗОВАТЕЛЯ:{{ user.login }}</p>
      <p class="data">АВАТАР:</p>
      <button class="but_reg" type="submit">РЕДАКТИРОВАТЬ</button>
      <button class="but_reg" type="submit">УДАЛИТЬ</button>
    </div>
    </template>
    <script setup>

import {onMounted, ref } from "vue";
import {getUser} from "../api/user.js";

const user = ref({}); // Создаем объект для хранения данных пользователя

const renderUser = async () => {
  try {
     const response = await getUser(); // Получаем данные пользователя
     user.value = response;  // Сохраняем полученные данные в объект `user`
  } catch (error) {
    console.error("Error rendering user:", error);
  }
};

onMounted(async () => {
  await renderUser();
});
    
    </script> 