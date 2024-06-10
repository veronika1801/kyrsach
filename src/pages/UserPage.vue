<template>
  <div class="title">
    <h1>АККАУНТ</h1>
  </div>
  
      <div class="user_data">
      <p>ИМЯ ПОЛЬЗОВАТЕЛЯ: {{ user.login }}</p>
      
    </div>

      <button class="but_reg" @click="deleted">УДАЛИТЬ</button>
    </template>

<script setup>

import {onMounted, ref } from "vue";
import {getUser} from "../api/user.js";
import {deleteUser} from "../api/user.js";
import { useRouter } from "vue-router";

const router = useRouter();
const user = ref({}); 
const emit = defineEmits(['delete']);

const renderUser = async () => {
     const response = await getUser();
     user.value = response; 
};

onMounted(async () => {
  await renderUser();
});

async function deleted() {
  await deleteUser();
  router.push('/')
}
</script> 

    <style>

  .user_data{
   margin-left:100px ;
    display: flex;
    flex-direction: column;
    gap: 30px;
    
  }
  
  </style>