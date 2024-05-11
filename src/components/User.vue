<template>
<div class="account">
    
    <p>ИМЯ ПОЛЬЗОВАТЕЛЯ: {{ props.user.login }}</p>
    <p class="data">АВАТАР:</p>
    <button class="but_reg" type="submit">РЕДАКТИРОВАТЬ</button>
    <button class="but_reg" type="submit">УДАЛИТЬ</button>
  </div>
  </template>
  <script setup>

  import {useStore} from "vuex";
  const store = useStore();
  
  import { useRouter } from "vue-router";
  const router = useRouter();
  
  const props = defineProps({
    user: Object
  })
  
  </script>

<style>
    
</style>