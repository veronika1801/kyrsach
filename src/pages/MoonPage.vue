<template>
    <div class="title">
      <h1>ЛУНЫ</h1>
    </div>
        <div class="moons">
            <Moon v-for="moon in moon"  :moon="moon"></Moon>
        </div>
</template>
  
  <script setup>
  
  import Moon from "../components/Moon.vue";
  
  
  import {onMounted, ref} from "vue";
  import {getMoon} from "../api/moon.js";
  
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
    .moons{
        display: flex;
        flex-wrap: wrap;
        gap: 80px;
    }
    
  </style>