<template>
  <div class="title">
    <h1>АККАУНТ</h1>
  </div>
      <div class="info">
          <User v-for="user in user"  :user="user"></User>
      </div>
</template>

<script setup>

import User from "../components/User.vue";


import {onMounted, ref} from "vue";
import {getUser} from "../api/user.js";

const user = ref(null);

// const renderUser = async () => {
//   try {
//     user.value = await getUser();
//   } catch (error) {
//     console.error("Error rendering user:", error);
//   }
// };

onMounted(async () => {
  try {
    user.value = await getUser();
  } catch (error) {
    console.error("Error rendering user:", error);
  }
})
</script>

<style>

  
</style>