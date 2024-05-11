<template>
    <div class="title">
      <h1>СУЩНОСТИ</h1>
    </div>
        <div class="info">
            <Monster v-for="monster in monster"  :monster="monster"></Monster>
        </div>
</template>
  
  <script setup>
  
  import Monster from "../components/Monster.vue";
  
  
  import {onMounted, ref} from "vue";
  import {getMonster} from "../api/monster.js";
  
  const monster = ref([]);
  
  const renderMonster = async () => {
    try {
        monster.value = await getMonster();
    } catch (error) {
      console.error("Error rendering monster:", error);
    }
  };
  
  onMounted(async () => {
    await renderMonster();
  });
  </script>
  
  <style>
    
    
  </style>