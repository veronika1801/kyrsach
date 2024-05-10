<template>
  <div class="account">
    <h1>АККАУНТ</h1>
    <p class="data" v-if="user">ИМЯ ПОЛЬЗОВАТЕЛЯ: {{ user.login }}</p>
    <p class="data">АВАТАР:</p>
    <button class="but_reg" type="submit">РЕДАКТИРОВАТЬ</button>
    <button class="but_reg" type="submit">УДАЛИТЬ</button>
  </div>
</template>

<script setup>

import { onMounted, ref } from "vue";
import { getUser } from "../api/account.js";

const user = ref(null);

// const props = defineProps({
//   user: {
//     type: Object,
   
//   }
// })
const renderUser = async () => {
  try {
    const userData = await getUser();
    // Присвоить данные пользователя реактивной переменной
    user.value = userData;
  } catch (error) {
    console.error("Error rendering cart:", error);
  }
};

onMounted(renderUser);
</script>


  <style>
    .data {
        margin-left: 250px;
        text-align: left;
        padding-top: 50px;
    }
  
    
</style>