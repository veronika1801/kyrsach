<template>
     <h1>ПОИСК</h1>
        <div class="search">
      <input type="text" name="seach" v-model="searchQuery" placeholder="ВВЕДИТЕ МОНСТРА">
    </div>
      <div v-if="searchResults.length > 0">
        <div class="info-search">
          <Monster v-for="monster in searchResults" :key="monster.id" :monster="monster" />
        </div>
      </div>
      <div v-else class="not_found">
        <p>НИЧЕГО НЕ НАЙДЕНО</p>
      </div>
    
  </template>
  
    
    
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  import { searchMonster } from '../api/monster.js';
  import Monster from "../components/Monster.vue";
  
  const searchQuery = ref('');
  const searchResults = ref([]);

  
  onMounted(async () => {
    
    await getSearch(''); 
  });
  
  watch(searchQuery, async (newQuery) => {
    
      const results = await searchMonster(newQuery);
      searchResults.value = results;
    
    
  });
  </script>
  <style>
.search{
    background-color: #D9D9D9;
    border-radius: 20px;
    height:25px;
    width:350px;
    margin-left: 100px;
  }
  .info-search{
    display: flex;
      flex-wrap: wrap;
      gap: 80px;
     padding-left:100px;
     padding-top: 60px;
  }
  .not_found{
    margin-left: 100px;
  }
</style>