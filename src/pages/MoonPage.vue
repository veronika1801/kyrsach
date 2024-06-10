<template>
  <div class="title" >
    <h1>ЛУНЫ</h1>
    
    <button class="add" v-if="role_id==1"><router-link class="router" to="/Add_moon">ДОБАВИТЬ</router-link></button>
  </div>
      <div class="info">
          <Moon v-for="moon in moon"  :moon="moon"></Moon>
      </div>



</template>

<script setup>

import Moon from "../components/Moon.vue";
import {onMounted, ref} from "vue";
import { getMoon} from "../api/moon.js";

let role_id = ref(localStorage.getItem('role_id'));
const moon = ref([]);

const renderMoon = async () => {
  try {
    moon.value = await getMoon();
  } catch (error) {
    console.error("Error rendering moon:", error);
  }
};

onMounted(async () => {
  await renderMoon();
});

</script>

<style>
  .info{
      display: flex;
      flex-wrap: wrap;
      gap: 130px;
     padding-left:100px;
  }
  .title{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .add{
    margin-bottom: 30px;
  }
</style>