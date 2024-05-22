<template>
    <div class="title">
      <h1>ЛУТ</h1>
      <button class="add" v-if="role_id==1"><router-link class="router" to="/Add_scrab">ДОБАВИТЬ</router-link></button>
    </div>
        <div class="info">
            <Scrab v-for="scrab in scrab"  :scrab="scrab"></Scrab>
        </div>
</template>
  
  <script setup>
  
  import Scrab from "../components/Scrab.vue";
  
  
  import {onMounted, ref} from "vue";
  import {getScrab} from "../api/scrab.js";
  let role_id = ref(localStorage.getItem('role_id'));
  const scrab = ref([]);
  
  const renderScrab = async () => {
    try {
        scrab.value = await getScrab();
    } catch (error) {
      console.error("Error rendering monster:", error);
    }
  };
  
  onMounted(async () => {
    await renderScrab();
  });
  </script>
  
  <style>
    
    
  </style>